# Hackerskolen: flaggbok, grader og sjekker.
#   python3 sjekk.py flagg EIRA{...}   registrer et flagg
#   python3 sjekk.py status            se flaggboka og graden din
#   python3 sjekk.py hent KODE         hent flaggene dine fra en annen maskin
#   python3 sjekk.py phishing          quiz: ekte eller falsk?
#   python3 sjekk.py blått             sjekk om du har tettet hullene i Kiosken
#   python3 sjekk.py blått --port 8081 hvis Kiosken kjører på en annen port
import base64
import hashlib
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request

HER = os.path.dirname(os.path.abspath(__file__))
BOK = os.path.join(HER, "flaggbok.txt")

# Bare hasher av flaggene står her, så fila avslører dem ikke.
# Rekkefølgen brukes i fremgangskoden. Nye flagg legges til nederst.
FLAGG = {
    "954f4ebf": "Velkommen til laben",
    "12f51cf5": "Skjulte filer",
    "0593e1dd": "Grep",
    "3872bc23": "Nåla i loftet",
    "690bab34": "Inntrengeren i loggen",
    "7481e606": "Rettigheter",
    "269efca9": "Knekt passord",
    "6fc6f4db": "Portskanner",
    "db04f9c9": "Bildet avslører deg",
    "ef558346": "Phishingdetektiv",
    "528489a2": "Alt i nettleseren er offentlig",
    "ecfa61da": "Kjøp for 0 kroner",
    "94f896ee": "Admin uten passord",
    "a045acfc": "Skript stjal økta",
    "32442a1d": "Git glemmer aldri",
    "4b2fc78b": "Blått lag",
}

GRADER = [(0, "Rekrutt"), (4, "Analytiker"), (8, "Pentester"),
          (13, "Hvit hatt")]


def kort(flagg):
    flagg = flagg.strip().lower()
    return hashlib.sha256(flagg.encode()).hexdigest()[:8]


# Fremgangskoden: ett bit per flagg og 8 bit kontrollsum, skrevet med 32 tegn
# uten I, O, 0 og 1, så den er lett å skrive av.
KODETEGN = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"


def kontroll(bits):
    return hashlib.sha256(f"eira{bits}".encode()).digest()[0]


def fremgangskode(har):
    bits = sum(1 << i for i, h in enumerate(FLAGG) if h in har)
    tall = bits << 8 | kontroll(bits)
    lengde = (len(FLAGG) + 8 + 4) // 5
    return "".join(KODETEGN[(tall >> (5 * i)) & 31]
                   for i in reversed(range(lengde)))


def hent_kode(kode):
    kode = kode.strip().upper().replace("-", "").replace(" ", "")
    if not kode or any(t not in KODETEGN for t in kode):
        print("Det er ikke en fremgangskode. Den har bare bokstaver og tall, "
              "som K7QM2.")
        return
    tall = 0
    for t in kode:
        tall = tall << 5 | KODETEGN.index(t)
    bits = tall >> 8
    if tall & 255 != kontroll(bits) or bits >> len(FLAGG):
        print("Koden stemmer ikke. Sjekk at du har skrevet den av riktig.")
        return
    har = funnet()
    nye = [h for i, h in enumerate(FLAGG) if bits >> i & 1 and h not in har]
    with open(BOK, "a", encoding="utf-8") as fil:
        for h in nye:
            fil.write(h + "\n")
    print(f"Hentet {len(nye)} flagg fra koden.")
    status()


def funnet():
    if not os.path.exists(BOK):
        return []
    with open(BOK, encoding="utf-8") as fil:
        return [linje.strip() for linje in fil if linje.strip() in FLAGG]


def grad(antall):
    return [navn for grense, navn in GRADER if antall >= grense][-1]


def status():
    har = funnet()
    print(f"\nFlaggbok: {len(har)} av {len(FLAGG)} flagg."
          f"  Grad: {grad(len(har))}\n")
    for h, navn in FLAGG.items():
        print(("  [x] " if h in har else "  [ ] ") + navn)
    neste = [g for g, _ in GRADER if g > len(har)]
    if neste:
        print(f"\n{neste[0] - len(har)} flagg til neste grad.")
    else:
        print("\nDu har alle gradene. Godt jobba, hvit hatt.")
    if har:
        kode = fremgangskode(har)
        print(f"\nFremgangskode: {kode}")
        print("Skriv den ned. På en annen maskin henter du flaggene med:")
        print(f"  python3 sjekk.py hent {kode}")


def registrer(flagg):
    if not re.fullmatch(r"EIRA\{.+\}", flagg.strip(), re.I):
        print("Et flagg ser slik ut: EIRA{noe_her}")
        print("Tips: sett flagget i anførselstegn, for eksempel "
              "'EIRA{...}'")
        return
    h = kort(flagg)
    if h not in FLAGG:
        print("Det er ikke et flagg i Hackerskolen. Prøv igjen.")
        return
    har = funnet()
    if h in har:
        print(f"Det flagget har du alt: {FLAGG[h]}.")
        return
    gammel = grad(len(har))
    with open(BOK, "a", encoding="utf-8") as fil:
        fil.write(h + "\n")
    print(f"Riktig! Flagg funnet: {FLAGG[h]}.")
    if grad(len(har) + 1) != gammel:
        print(f"\n*** Ny grad: {grad(len(har) + 1)} ***")
    status()


MELDINGER = [
    ("SMS fra «PakkeLynet»:\n  Pakken din venter. Betal 29 kr i toll innen "
     "2 timer, ellers sendes den i retur: http://pakkelynet-toll.top/betal",
     "f", "Hastverk, et lite beløp og en rar adresse som ikke er firmaets "
     "egen. Klassisk."),
    ("E-post fra læreren din, fra skolens vanlige adresse:\n  Husk at "
     "prøven er flyttet til torsdag. Se ukeplanen på læringsplattformen.",
     "e", "Ingen lenke å trykke på, ingen hast og ingenting du må gi fra "
     "deg. Er du usikker, sjekker du ukeplanen selv."),
    ("DM på spillplattformen:\n  Gratis skins! Logg inn med brukernavn og "
     "passord her for å få 5000 mynter: spillsky-gratis.net/login",
     "f", "Ingen gir bort ting for passordet ditt. Du skal bare logge inn på "
     "den ekte siden, som du åpner selv."),
    ("Varsel i appen til banken din, som du åpnet selv:\n  Du har fått en ny "
     "melding i nettbanken.",
     "e", "Du åpnet appen selv, og den ber deg ikke trykke på en lenke "
     "eller gi fra deg noe."),
    ("E-post fra «IT-avdelingen»:\n  Passordet ditt går ut i dag. Bekreft det "
     "på skole-it-bekreft.com innen kl. 15, ellers stenges kontoen.",
     "f", "Trussel, tidsfrist og en adresse som ikke er skolens. IT spør "
     "aldri om passordet ditt."),
    ("Melding fra en venn:\n  Hei, mistet mobilen, dette er nytt nummer. "
     "Kan du sende meg koden du får på SMS nå? Haster!",
     "f", "Koden på SMS kan være nøkkelen til kontoen din. Ring vennen på "
     "det gamle nummeret og spør."),
]


def phishing():
    riktige = 0
    print("\nPHISHINGDETEKTIV: Er meldingen ekte (e) eller falsk (f)?")
    for nr, (tekst, fasit, forklaring) in enumerate(MELDINGER, 1):
        print(f"\n--- Melding {nr} ---\n{tekst}")
        svar = ""
        while svar not in ("e", "f"):
            svar = input("Ekte eller falsk? (e/f): ").strip().lower()[:1]
        if svar == fasit:
            riktige += 1
            print("Riktig. " + forklaring)
        else:
            print("Feil. " + forklaring)
    print(f"\nDu fikk {riktige} av {len(MELDINGER)} riktige.")
    if riktige >= 5:
        print("Flagget ditt: "
              + base64.b64decode("RUlSQXtpa2tlX2JpdF9wYV9rcm9rZW59").decode())
    else:
        print("Du trenger 5 riktige for flagget. Prøv igjen.")


PORT = sys.argv[sys.argv.index("--port") + 1] if "--port" in sys.argv else "8080"
URL = "http://127.0.0.1:" + PORT


def hent(sti, data=None):
    if data is not None:
        data = urllib.parse.urlencode(data).encode()
    try:
        with urllib.request.urlopen(URL + sti, data, timeout=5) as svar:
            return svar.status, svar.read().decode(), svar.headers
    except urllib.error.HTTPError as feil:
        return feil.code, feil.read().decode(), feil.headers


def blått():
    try:
        hent("/")
    except OSError:
        print(f"Får ikke kontakt med Kiosken på {URL}. Start den med: "
              "python3 kiosk.py")
        return
    test = []
    _, side, _ = hent("/kjop", {"vare": "brus", "pris": "0", "antall": "1"})
    test.append(("Prisen bestemmes av serveren", "25 kr" in side))
    _, side, _ = hent("/kjop", {"vare": "brus", "pris": "25", "antall": "-3"})
    test.append(("Antall kan ikke være minus",
                  not re.search(r": -\d+ kr", side)))
    _, js, _ = hent("/kiosk.js")
    test.append(("Ingen hemmeligheter i kiosk.js", "EIRA{" not in js))
    lurt = False
    for navn in ["admin' --", "' OR '1'='1' --", "x' OR 1=1 --"]:
        _, side, _ = hent("/logg-inn", {"navn": navn, "passord": "x"})
        lurt = lurt or "logget inn som" in side
    test.append(("SQL-injeksjon virker ikke", not lurt))
    _, side, hode = hent("/logg-inn", {"navn": "kari", "passord": "kanelbolle"})
    test.append(("Kari kan fortsatt logge inn", "logget inn som" in side))
    cookie = hode.get("Set-Cookie", "") or ""
    test.append(("Øktnøkkelen har HttpOnly", "httponly" in cookie.lower()))
    skript = "<script>console.log('sjekk.py')</script>"
    _, side, _ = hent("/kommentarer", {"navn": "<i>sjekk.py</i>",
                                       "tekst": skript})
    test.append(("Kommentarer kan ikke kjøre skript",
                  skript not in side and "<i>sjekk.py</i>" not in side))
    print("\nBLÅTT LAG: sjekker Kiosken\n")
    for navn, ok in test:
        print(("  [OK]    " if ok else "  [HULL]  ") + navn)
    _, _, hode = hent("/")
    if hode.get("Content-Security-Policy"):
        print("  [BONUS] Siden sender Content-Security-Policy")
    if all(ok for _, ok in test):
        print("\nAlle hull er tettet. Flagget ditt: "
              + base64.b64decode("RUlSQXtibGF0dF9sYWdfaG9sZGVyX3N0YW5kfQ==")
              .decode())
    else:
        print(f"\n{sum(not ok for _, ok in test)} hull igjen. Start Kiosken "
              "på nytt etter at du har endret koden.")


if __name__ == "__main__":
    a = sys.argv[1:]
    if len(a) >= 2 and a[0] == "flagg":
        registrer(" ".join(a[1:]))
    elif a[:1] == ["status"]:
        status()
    elif len(a) >= 2 and a[0] == "hent":
        hent_kode("".join(a[1:]))
    elif a[:1] == ["phishing"]:
        phishing()
    elif a[:1] in (["blått"], ["blatt"]):
        blått()
    else:
        print(__doc__ or "", end="")
        print("Bruk: python3 sjekk.py flagg EIRA{...} | status | hent KODE | "
              "phishing | blått")
