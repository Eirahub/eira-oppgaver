"""Maskinelle sjekker av et kurs eller en oppgave, til skillen gjennomga-kurs.

Bruk (fra repo-roten):
  python .claude/skills/gjennomga-kurs/sjekk_kurs.py src/3d_print
  python .claude/skills/gjennomga-kurs/sjekk_kurs.py src/scratch/astrokatt
  python .claude/skills/gjennomga-kurs/sjekk_kurs.py src/scratch --uten-udir

Skriver funn som «fil:linje  [type]  melding». Endrer ingenting.
Kompetansemål sjekkes mot LK20 fra data.udir.no (mellomlagret i ~/.cache).
"""
import argparse
import difflib
import glob
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request

REPO = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
API = "https://data.udir.no/kl06/v201906"
CACHE = os.path.expanduser("~/.cache/kodeklubb-udir")
# Læreplaner som kodeoppgavene viser til. Utgåtte planer følges til sin erstatning.
PLANER = ["MAT01-06", "NAT01-05", "KHV01-03", "MUS01-03", "PRG01-02", "TPR01-02",
          "MAT07-02", "INF01-03", "TNF01-03", "PRM01-02", "ITK02-01", "MAT09-02",
          "MAT01-05", "NAT01-04", "KHV01-02", "MUS01-02", "INF01-02", "SAF01-05",
          "NOR01-08", "ENG01-06", "ARB01-03", "RLE01-04", "ENG03-02",
          "SSR01-01", "SSR02-01", "ENT01-04", "MFL01-04"]

funn = []


def meld(fil, linje, typ, tekst):
    funn.append((os.path.relpath(fil, REPO), linje, typ, tekst))


def hent(url):
    os.makedirs(CACHE, exist_ok=True)
    f = os.path.join(CACHE, re.sub(r"[^A-Za-z0-9.-]", "_", url[len(API):]) + ".json")
    if not os.path.exists(f) or time.time() - os.path.getmtime(f) > 7 * 86400:
        req = urllib.request.Request(url, headers={"Accept": "application/json"})
        for forsok in range(6):
            try:
                with urllib.request.urlopen(req, timeout=30) as r:
                    data = r.read()
                break
            except urllib.error.HTTPError as e:
                if e.code != 429 or forsok == 5:
                    raise
                time.sleep(2 ** forsok)  # Udir begrenser antall kall
        with open(f, "wb") as out:
            out.write(data)
    return json.load(open(f, encoding="utf-8"))


def tekst(x, spraak=("nob", "default")):
    if isinstance(x, dict) and "tekst" in x:
        x = x["tekst"]
    if isinstance(x, list):
        for s in spraak:
            for y in x:
                if y.get("spraak") == s:
                    return y.get("verdi") or ""
        return x[0].get("verdi", "") if x else ""
    return x or ""


def norm(s):
    s = s.lower().replace("håndtverk", "håndverk")
    s = re.sub(r"[^a-zæøå0-9 ]+", " ", s)
    return re.sub(r"\s+", " ", s).strip()


def lk20_maal():
    """Alle kompetansemål i PLANER som dicts: kode, plan, fag, sett, trinn, nb, nn, ny (erstattes av)."""
    maal = []
    for kode in PLANER:
        try:
            plan = hent(f"{API}/laereplaner-lk20/{kode}")
        except Exception as e:  # noqa: BLE001
            print(f"Advarsel: fikk ikke hentet {kode}: {e}", file=sys.stderr)
            continue
        ny = ",".join(p.get("kode", "") for p in plan.get("erstattes-av") or [])
        fag, fag_nn = (re.sub(r" 1\.?[-–]10\.?( trinn)?$", "", tekst(plan.get("kortform"), (sp, "default")))
                       for sp in ("nob", "nno"))
        for sett in re.findall(r'"url-data":\s*"([^"]*kompetansemaalsett-lk20/[^"]*)"', json.dumps(plan)):
            d = hent(sett)
            trinn = re.sub(r"(\d)\.(?=trinn)", r"\1. ", tekst(d.get("kortform"), ("nob", "default"))).strip()
            if trinn.lower() == fag.lower():  # valgfag og vg-fag med ett sett: bruk årstrinnene
                aar = [x.get("kode", "") for x in d.get("etter-aarstrinn") or []]
                nr = [a[len("aarstrinn"):] for a in aar if a.startswith("aarstrinn")]
                trinn = (f"{nr[0]}.-{nr[-1]}. trinn" if len(nr) > 1 else f"{nr[0]}. trinn") if nr \
                    else ", ".join(a.capitalize() for a in aar)
            for m in d.get("kompetansemaal", []):
                if m.get("url-data") and not any(x.get("spraak") == "nob" for x in (m.get("tittel") or [])
                                                 if isinstance(x, dict)):
                    # nynorske planer har bokmål bare på hvert enkelt mål
                    try:
                        m = {**m, "tittel": hent(m["url-data"]).get("tittel")}
                    except Exception:  # noqa: BLE001
                        pass
                nb, nn = (tekst(m.get("tittel"), (sp, "default")) for sp in ("nob", "nno"))
                maal.append({"kode": m.get("kode", ""), "plan": kode, "fag": fag, "fagNn": fag_nn,
                             "sett": d.get("kode", ""), "trinn": trinn, "nb": nb, "nn": nn, "ny": ny})
    return maal


def lk20():
    """Alle kompetansemål: liste av (normalisert tekst, plan, utgått->ny, trinn, ordlyd)."""
    return [(norm(t), m["plan"], m["ny"], m["trinn"], t)
            for m in lk20_maal() for t in dict.fromkeys((m["nb"], m["nn"])) if t]


KM = re.compile(r"^\s*-\s*\[ \]\s*(?:__|\*\*)\s*(.+?)\s*:?\s*(?:__|\*\*)\s*:?\s*(.+)")


def kompetansemaal(fil, linjer, alle):
    i = next((n for n, l in enumerate(linjer) if l.startswith("## Kompetansemål")), None)
    if i is None:
        return
    n = i + 1
    while n < len(linjer) and not linjer[n].startswith("#"):
        m = KM.match(linjer[n])
        if m:
            start, punkt = n + 1, m.group(2)
            n += 1
            while n < len(linjer) and linjer[n].strip() and not linjer[n].lstrip().startswith("- "):
                punkt += " " + linjer[n].strip()
                n += 1
            fag, t = m.group(1).strip(" :"), norm(punkt)
            treff = [a for a in alle if a[0] == t]
            if treff:
                gyldig = [a for a in treff if not a[2]]
                if not gyldig:
                    a = treff[0]
                    nye = [x for x in alle if x[1] in a[2].split(",")]
                    naer = difflib.get_close_matches(t, [x[0] for x in nye], n=1, cutoff=0.5)
                    hint = next((f" Nærmest i {x[1]} {x[3]}: «{x[4]}»" for x in nye if naer and x[0] == naer[0]), "")
                    meld(fil, start, "utgått", f"{fag}: fra {a[1]}, som er erstattet av {a[2]}.{hint}")
                continue
            naer = difflib.get_close_matches(t, [a[0] for a in alle], n=1, cutoff=0.75)
            if naer:
                a = next(x for x in alle if x[0] == naer[0])
                meld(fil, start, "ikke ordrett", f"{fag}: ligner {a[1]} {a[3]}: «{a[4]}»")
            else:
                meld(fil, start, "ukjent mål", f"{fag}: finnes ikke i LK20 (utgått LK06-mål, eget mål eller omskrevet).")
            continue
        n += 1


def keys():
    import yaml  # noqa: PLC0415
    return yaml.safe_load(open(os.path.join(REPO, "filtertags", "keys.yml"), encoding="utf-8"))


def sjekk_md(fil, alle):
    linjer = open(fil, encoding="utf-8").read().split("\n")
    navn = os.path.basename(fil)[:-3]
    suffiks = re.search(r"_([a-z]{2})$", navn)
    fm = "\n".join(linjer[: linjer.index("---", 1)]) if linjer and linjer[0] == "---" and "---" in linjer[1:] else ""
    sprak = re.search(r"^language:\s*(\S+)", fm, re.M)
    forventet = suffiks.group(1) if suffiks else "nb"
    if sprak and sprak.group(1) != forventet:
        meld(fil, 1, "språk", f"language: {sprak.group(1)}, men filnavnet tilsier {forventet}")
    if "external:" in fm:
        return
    for n, l in enumerate(linjer, 1):
        if "\u2014" in l:
            meld(fil, n, "tankestrek", "U+2014 er ikke lov")
        if re.search(r"<!--\s*BILDE|TODO", l):
            meld(fil, n, "mangler", l.strip()[:100])
        for alt, src in re.findall(r"!\[([^\]]*)\]\(([^)\s]+)", l):
            if not src.startswith(("http:", "https:")) and not os.path.exists(os.path.join(os.path.dirname(fil), src)):
                meld(fil, n, "bilde", f"finnes ikke: {src}")
            if not alt.strip() or alt.strip().lower() in ("bildebeskrivelse", "bilde", "image"):
                meld(fil, n, "alt-tekst", f"mangler eller er tom for {src}")
        for href in re.findall(r"(?<!!)\[[^\]]*\]\(([^)\s#]+)", l):
            if href.startswith(("http:", "https:", "mailto:")) or href.endswith((".png", ".jpg", ".gif", ".zip", ".sb3", ".pdf")):
                continue
            mal = os.path.normpath(os.path.join(REPO, "src", href.lstrip("/")) if href.startswith("/")
                                   else os.path.join(os.path.dirname(fil), href))
            if not (os.path.exists(mal) or os.path.exists(mal + ".md") or os.path.isdir(mal)):
                meld(fil, n, "lenke", f"finner ikke {href}")
    if alle is not None:
        kompetansemaal(fil, linjer, alle)


def sjekk_yml(fil, k):
    import yaml  # noqa: PLC0415
    d = yaml.safe_load(open(fil, encoding="utf-8")) or {}
    if fil.endswith("lesson.yml") and d.get("level") not in (1, 2, 3, 4):
        meld(fil, 1, "nivå", f"level er {d.get('level')!r}, skal være 1 til 4")
    for gruppe, tagger in (d.get("tags") or {}).items():
        for t in tagger or []:
            if t not in (k.get(gruppe) or []):
                meld(fil, 1, "tagg", f"{gruppe}: {t} finnes ikke i filtertags/keys.yml")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("sti", help="kursmappe (src/<kurs>) eller oppgavemappe (src/<kurs>/<oppgave>)")
    ap.add_argument("--uten-udir", action="store_true", help="ikke sjekk kompetansemål")
    a = ap.parse_args()
    sti = os.path.abspath(a.sti)
    alle = None if a.uten_udir else lk20()
    k = keys()
    for f in sorted(glob.glob(os.path.join(sti, "**", "*.md"), recursive=True)):
        sjekk_md(f, alle)
    for f in sorted(glob.glob(os.path.join(sti, "**", "*.yml"), recursive=True)):
        if f.endswith(("lesson.yml", "course.yml")):
            sjekk_yml(f, k)
        elif os.sep + "playlists" + os.sep in f:
            import yaml  # noqa: PLC0415
            for oppg in (yaml.safe_load(open(f, encoding="utf-8")) or {}).get("lessons") or []:
                if not os.path.isdir(os.path.join(os.path.dirname(os.path.dirname(f)), oppg)):
                    meld(f, 1, "spilleliste", f"oppgaven {oppg} finnes ikke")
    for fil, linje, typ, t in funn:
        print(f"{fil}:{linje}  [{typ}]  {t}")
    print(f"{len(funn)} funn.", file=sys.stderr)


if __name__ == "__main__":
    main()
