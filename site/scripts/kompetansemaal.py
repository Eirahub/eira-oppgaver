"""Skriver src/data/kompetansemaal.json med LK20-målene fra data.udir.no.

Kjør fra site/: npm run data:kompetansemaal
Henter planene i PLANER i .claude/skills/gjennomga-kurs/sjekk_kurs.py (mellomlagret
i ~/.cache/kodeklubb-udir). Bygget leser bare JSON-fila og trenger ikke nett.

- maal: gjeldende mål (planer som ikke er erstattet).
- utgatte: mål i utgåtte planer, med `ny` = koden til målet i den nye planen når
  teksten er nesten lik (SequenceMatcher >= LIKHET på normalisert tekst), ellers null.
"""
import difflib
import json
import os
import sys

HER = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HER, "..", "..", ".claude", "skills", "gjennomga-kurs"))
from sjekk_kurs import lk20_maal, norm  # noqa: E402

LIKHET = 0.9
UT = os.path.join(HER, "..", "src", "data", "kompetansemaal.json")


def url(m):
    return f"https://www.udir.no/lk20/{m['plan'].lower()}/kompetansemaal-og-vurdering/{m['sett'].lower()}#{m['kode']}"


def main():
    alle = lk20_maal()
    if not alle:
        sys.exit("Fant ingen mål. Er data.udir.no nede?")
    for m in alle:  # Udir har noen smale hardt mellomrom (U+202F) i teksten
        m["nb"], m["nn"] = (" ".join(m[k].split()) for k in ("nb", "nn"))
    felt = ("kode", "plan", "fag", "fagNn", "trinn", "nb", "nn")
    gjeldende = [m for m in alle if not m["ny"]]
    ut = {"maal": [], "utgatte": []}
    sett = set()
    for m in gjeldende:
        if m["kode"] in sett:
            continue
        sett.add(m["kode"])
        ut["maal"].append({**{k: m[k] for k in felt}, "url": url(m)})
    for m in alle:
        if not m["ny"]:
            continue
        nye = [x for x in gjeldende if x["plan"] in m["ny"].split(",")]
        # Samme trinn først, ellers hele den nye planen.
        kandidater = [x for x in nye if x["trinn"] == m["trinn"]] or nye
        t = norm(m["nb"])
        best = max(kandidater, key=lambda x: difflib.SequenceMatcher(None, t, norm(x["nb"])).ratio(), default=None)
        ok = best and difflib.SequenceMatcher(None, t, norm(best["nb"])).ratio() >= LIKHET
        ut["utgatte"].append({**{k: m[k] for k in felt}, "ny": best["kode"] if ok else None})
    with open(UT, "w", encoding="utf-8") as f:
        json.dump(ut, f, ensure_ascii=False, indent=1)
        f.write("\n")
    print(f"{len(ut['maal'])} gjeldende mål, {len(ut['utgatte'])} utgåtte "
          f"({sum(1 for m in ut['utgatte'] if m['ny'])} med nesten lik tekst i ny plan) -> {os.path.relpath(UT)}")


if __name__ == "__main__":
    main()
