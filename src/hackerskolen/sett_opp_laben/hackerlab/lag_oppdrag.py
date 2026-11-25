# Hackerskolen: lager oppdragene i mappa «oppdrag».
# Kjør: python3 lag_oppdrag.py   (på Windows: python lag_oppdrag.py)
# Alt lages på din egen maskin. Ingenting sendes noe sted.
import base64
import hashlib
import os
import random
import shutil
import stat
import subprocess
import sys

HER = os.path.dirname(os.path.abspath(__file__))
UT = os.path.join(HER, "oppdrag")


def f(s):
    # Flaggene er kodet så de ikke står rett i koden. Å dekode dem er også
    # hacking, men du lærer mer av å løse oppdragene.
    return base64.b64decode(s).decode()


def skriv(sti, tekst, modus=None):
    sti = os.path.join(UT, sti)
    os.makedirs(os.path.dirname(sti), exist_ok=True)
    with open(sti, "w", encoding="utf-8", newline="\n") as fil:
        fil.write(tekst)
    if modus is not None:
        os.chmod(sti, modus)


def kontrakt():
    print("""
==============================================================
  HACKERSKOLEN  -  Avtale før du starter
==============================================================
  Jeg angriper bare laben i denne mappa, maskiner jeg eier selv
  og øvingssider som sier at jeg har lov.

  Jeg prøver aldri dette på skolens nett, andres kontoer eller
  nettsider uten skriftlig lov. Det er ulovlig (straffeloven
  § 204), og det er ikke det en hvit hatt gjør.

  Finner jeg en feil hos noen andre, sier jeg fra til dem,
  og jeg sier det ikke til noen andre.
==============================================================
""")
    svar = input('Skriv «jeg lover» for å godta: ').strip().lower()
    if svar != "jeg lover":
        print("Greit. Kom tilbake når du er klar.")
        sys.exit(0)


def oppdrag_terminalen(r):
    skriv("1_terminalen/LES_MEG.txt",
          "Velkommen, rekrutt.\n\n"
          "Sjefen har gjemt to flagg i denne mappa.\n"
          "Det første ligger i en mappe du ikke ser med vanlig ls.\n"
          "Det andre står et sted i notater.txt. Du trenger ikke lese alt.\n")
    for rom in ["kjeller", "loft", "garasje", "skap"]:
        for i in range(1, 6):
            skriv(f"1_terminalen/{rom}/eske{i}/innhold.txt",
                  r.choice(["Gamle ledninger.", "En sokk.", "Tom.",
                            "Julepynt.", "En USB-pinne uten navn. Hmm."])
                  + "\n")
    skriv("1_terminalen/skap/.hemmelig/flagg.txt",
          "Bra! Skjulte filer starter med punktum. ls -a viser dem.\n"
          + f("RUlSQXtza2p1bHRlX2ZpbGVyX3Nlcl9kdV9tZWRfbHNfYX0=") + "\n")
    ord_ = ["kanelbolle", "kiosk", "brus", "kasse", "regnskap", "vakt",
            "pause", "lager", "kaffe", "melding", "nøkkel", "dør"]
    linjer = [" ".join(r.choice(ord_) for _ in range(8)) for _ in range(5000)]
    linjer[3141] = "Notat til meg selv: " + f(
        "RUlSQXtncmVwX2VyX2VuX3N1cGVya3JhZnR9")
    skriv("1_terminalen/notater.txt", "\n".join(linjer) + "\n")


def oppdrag_hoystakken(r):
    # Loftet: 300 filer. Bare én er nøyaktig 1337 byte.
    for i in range(300):
        n = r.choice([r.randint(100, 1300), r.randint(1400, 3000)])
        skriv(f"2_hoystakken/loft/boks{i:03d}.txt", "x" * (n - 1) + "\n")
    hemmelig = f("RUlSQXtmaW5kX2Zhbm5fbmFsYV9pX2xvZnRldH0=")
    tekst = "Du fant fila på 1337 byte! " + hemmelig + "\n"
    tekst = tekst + "." * (1337 - len(tekst.encode()) - 1) + "\n"
    skriv(f"2_hoystakken/loft/boks{r.randint(0, 299):03d}.txt", tekst)

    # Tilgangsloggen. IP-adressene er fra områder som er satt av til
    # eksempler (RFC 5737), så de tilhører ingen.
    vanlige = [f"198.51.100.{i}" for i in range(2, 60)]
    sider = ["/", "/meny", "/kjop", "/kommentarer", "/bilder/bolle.png",
             "/kiosk.js", "/stil.css"]
    nettlesere = ["Mozilla/5.0 (Windows NT 10.0)", "Mozilla/5.0 (iPhone)",
                  "Mozilla/5.0 (Macintosh)", "Mozilla/5.0 (Android 14)"]
    tyv = "203.0.113.66"
    lokke = "203.0.113.12"
    linjer = []
    for i in range(10000):
        t = 8 * 3600 + i * 3
        tid = f"[14/Nov/2026:{t // 3600:02d}:{t // 60 % 60:02d}:{t % 60:02d}]"
        if 4000 <= i < 4300:
            ip, linje = tyv, f'"POST /logg-inn HTTP/1.1" 401 "curl/8.5"'
        elif i == 4300:
            ip, linje = tyv, f'"POST /logg-inn HTTP/1.1" 200 "curl/8.5"'
        elif i == 4301:
            ip, linje = tyv, f'"GET /admin HTTP/1.1" 200 "curl/8.5"'
        elif 7000 <= i < 7040:
            # En som har glemt passordet, men aldri kommer inn.
            ip, linje = lokke, f'"POST /logg-inn HTTP/1.1" 401 "{nettlesere[1]}"'
        else:
            ip = r.choice(vanlige)
            status = r.choice([200] * 30 + [404, 304])
            linje = f'"GET {r.choice(sider)} HTTP/1.1" {status} ' \
                    f'"{r.choice(nettlesere)}"'
        linjer.append(f"{ip} - - {tid} {linje}")
    skriv("2_hoystakken/tilgang.log", "\n".join(linjer) + "\n")
    skriv("2_hoystakken/LES_MEG.txt",
          "Oppdrag 1: Fila på loftet er nøyaktig 1337 byte stor. Finn den.\n\n"
          "Oppdrag 2: 14. november brøt noen seg inn i kioskappen.\n"
          "Finn IP-adressen til inntrengeren i tilgang.log.\n"
          "Flagget er EIRA{ip-adressen}, for eksempel EIRA{192.0.2.1}.\n")


def oppdrag_rettigheter():
    skriv("3_rettigheter/dagbok.txt",
          "Kjære dagbok. I dag fikk kiosken ny kasse.\n"
          "Ingen andre enn meg skal lese dette.\n", 0o666)
    hemmelig = base64.b64encode(
        f("RUlSQXtiYXJlX2VpZXJlbl9rYW5fbGVzZX0=").encode()).decode()
    skriv("3_rettigheter/lås_opp.sh", f"""#!/bin/sh
# Gir flagget når bare eieren kan lese og skrive dagboka.
cd "$(dirname "$0")"
rettigheter=$(ls -l dagbok.txt | cut -c1-10)
if [ "$rettigheter" = "-rw-------" ]; then
  echo "Dagboka er trygg. Flagget er:"
  echo "{hemmelig}" | base64 -d; echo
else
  echo "Dagboka har $rettigheter. Den skal ha -rw-------"
fi
""", 0o644)
    skriv("3_rettigheter/LES_MEG.txt",
          "Hvem kan lese dagboka nå? Se med ls -l.\n"
          "Gjør så bare du kan lese og skrive den.\n"
          "Kjør så ./lås_opp.sh. Den lar seg ikke kjøre ennå. Hvorfor?\n")


ORDLISTE = """123456 passord qwerty abc123 hemmelig sommer vinter høst vår
fotball håndball ski minecraft fortnite roblox pokemon pizza taco
kanelbolle brus kiosk sjokolade banan eple katt hund hest kanin
superman batman spiderman hackerman admin root bruker gjest test
norge oslo bergen stavanger fjord preikestolen nordlys kongen
iloveyou dragon monkey shadow master sunshine princess football""".split()


def oppdrag_passord(r):
    ordliste = []
    for o in ORDLISTE:
        for slutt in ["", "1", "12", "123", "!", "2024", "2025", "2026"]:
            ordliste.append(o + slutt)
    skriv("4_passord/ordliste.txt", "\n".join(ordliste) + "\n")
    brukere = [("sjefen", f("cGl6emExMjM=")), ("kari", "kanelbolle"),
               ("ola", "fotball2024"), ("nora", "minecraft!"),
               ("vaktmester", "123456"),
               ("ali", "Gr0nn-Elefant-Sykler-Fort-91")]
    linjer = [f"{navn}:{hashlib.sha256(pw.encode()).hexdigest()}"
              for navn, pw in brukere]
    skriv("4_passord/lekket_database.txt", "\n".join(linjer) + "\n")
    salt = []
    for navn, pw in brukere:
        s = "%08x" % r.getrandbits(32)
        salt.append(f"{navn}:{s}:{hashlib.sha256((s + pw).encode()).hexdigest()}")
    skriv("4_passord/lekket_med_salt.txt", "\n".join(salt) + "\n")
    skriv("4_passord/LES_MEG.txt",
          "Kioskens brukerdatabase har lekket. Passordene er lagret som\n"
          "SHA-256-hasher. Finn passordet til sjefen.\n"
          "Flagget er EIRA{passordet}.\n"
          "lekket_med_salt.txt er den samme databasen, men med salt.\n")


def oppdrag_git():
    if not shutil.which("git"):
        print("  Fant ikke Git. Installer Git og kjør skriptet på nytt for å "
              "få oppdrag 5.")
        return
    mappe = os.path.join(UT, "5_git_lekkasje")
    os.makedirs(mappe, exist_ok=True)
    miljo = dict(os.environ, GIT_AUTHOR_NAME="Kioskeieren",
                 GIT_AUTHOR_EMAIL="kiosk@example.invalid",
                 GIT_COMMITTER_NAME="Kioskeieren",
                 GIT_COMMITTER_EMAIL="kiosk@example.invalid")

    def git(*a):
        subprocess.run(["git", *a], cwd=mappe, env=miljo, check=True,
                       stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    git("init", "-q")
    with open(os.path.join(mappe, "kiosk.py"), "w") as fil:
        fil.write('print("Velkommen til kiosken")\n')
    git("add", "."); git("commit", "-q", "-m", "Første versjon")
    with open(os.path.join(mappe, "innstillinger.py"), "w") as fil:
        fil.write("BETALING_NOKKEL = \"" + f(
            "RUlSQXtnaXRfZ2xlbW1lcl9hbGRyaX0=") + "\"\n")
    git("add", "."); git("commit", "-q", "-m", "Koble til betaling")
    os.remove(os.path.join(mappe, "innstillinger.py"))
    with open(os.path.join(mappe, ".gitignore"), "w") as fil:
        fil.write("innstillinger.py\n.env\n")
    git("add", "-A"); git("commit", "-q", "-m",
                          "Fjernet hemmelig nøkkel, nå er den borte")
    with open(os.path.join(mappe, "LES_MEG.txt"), "w") as fil:
        fil.write("Kioskeieren sier nøkkelen er slettet. Stemmer det?\n")


def main():
    if not os.path.exists(UT):
        kontrakt()
    else:
        print("Mappa «oppdrag» finnes. Den lages på nytt.")
        shutil.rmtree(UT, onerror=lambda fn, p, _: (
            os.chmod(p, stat.S_IWRITE), fn(p)))
    r = random.Random(2026)
    oppdrag_terminalen(r)
    oppdrag_hoystakken(r)
    oppdrag_rettigheter()
    oppdrag_passord(r)
    oppdrag_git()
    shutil.copy(os.path.join(HER, "filer", "ferietur.jpg"),
                os.path.join(UT, "ferietur.jpg"))
    print("\nOppdragene ligger i mappa «oppdrag».")
    print("Ditt første flagg: " + f("RUlSQXt2ZWxrb21tZW5fdGlsX2xhYmVufQ=="))
    print("Registrer det med:  python3 sjekk.py flagg 'EIRA{...}'")


if __name__ == "__main__":
    main()
