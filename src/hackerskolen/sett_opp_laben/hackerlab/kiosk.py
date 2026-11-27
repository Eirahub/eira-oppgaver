# Hackerskolen: Kiosken, en øvingsapp med bevisste sikkerhetshull.
# Kjør: python3 kiosk.py   og åpne http://www.kiosken.localhost:8080
#   python3 kiosk.py --nullstill   sletter kommentarene og starter med ny database
#   python3 kiosk.py --port 8081   bruker en annen port hvis 8080 er opptatt
# Appen svarer bare på din egen maskin (127.0.0.1). Ikke legg den ut på nett.
#
# Hullene er merket med «SÅRBAR». Finn dem først ved å angripe appen.
# Rett dem etterpå, og sjekk med:  python3 sjekk.py blått
import base64
import html
import os
import secrets
import sqlite3
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from http.cookies import SimpleCookie
from urllib.parse import parse_qs, urlparse

HER = os.path.dirname(os.path.abspath(__file__))
DB = os.path.join(HER, "kiosk.db")
PORT = int(sys.argv[sys.argv.index("--port") + 1]) if "--port" in sys.argv else 8080
# På Eira-laptopene kjører Kiosken som en tjeneste bak http://www.kiosken.localhost
URL = os.environ.get("KIOSK_URL") or f"http://www.kiosken.localhost:{PORT}"


def f(s):
    return base64.b64decode(s).decode()


VARER = {"brus": ("Brus", 25), "bolle": ("Kanelbolle", 20),
         "kaffe": ("Kaffe", 15), "sjokolade": ("Sjokolade", 30)}
OKTER = {}  # øktnøkkel -> brukernavn


def database():
    ny = not os.path.exists(DB)
    db = sqlite3.connect(DB)
    if ny:
        db.execute("CREATE TABLE brukere (navn TEXT, passord TEXT)")
        db.execute("CREATE TABLE kommentarer (navn TEXT, tekst TEXT)")
        db.execute("INSERT INTO brukere VALUES (?, ?)",
                   ("admin", secrets.token_hex(16)))
        db.execute("INSERT INTO brukere VALUES ('kari', 'kanelbolle')")
        db.execute("INSERT INTO kommentarer VALUES "
                   "('Kari', 'Beste bollene på skolen!')")
        db.commit()
    return db


SIDE = """<!doctype html>
<html lang="nb"><head><meta charset="utf-8">
<title>Kiosken</title>
<style>
body {{ font-family: system-ui, sans-serif; max-width: 640px;
       margin: 2rem auto; padding: 0 1rem; background: #fdf8f0; }}
nav a {{ margin-right: 1rem; }}
.vare {{ background: white; border-radius: 8px; padding: .8rem;
        margin: .5rem 0; display: flex; justify-content: space-between; }}
.flagg {{ background: #12324a; color: #ffd166; padding: 1rem;
         border-radius: 8px; font-family: monospace; }}
</style>
<script src="/kiosk.js"></script>
</head><body>
<h1>Kiosken</h1>
<nav><a href="/">Meny</a><a href="/kommentarer">Kommentarer</a>
<a href="/logg-inn">Logg inn</a><a href="/admin">Admin</a></nav>
{innhold}
</body></html>"""

# SÅRBAR: hemmeligheter i frontend kan alle lese.
KIOSK_JS = """// Kiosken
// TODO: fjern før lansering! Rabattkode for de ansatte:
const ANSATTKODE = "%s";
console.log("Velkommen til Kiosken!");
""" % f("RUlSQXthbHRfaV9uZXR0bGVzZXJlbl9lcl9vZmZlbnRsaWd9")


class Kiosk(BaseHTTPRequestHandler):
    def svar(self, innhold, status=200, cookie=None):
        data = SIDE.format(innhold=innhold).encode()
        self.send_response(status)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        if cookie:
            self.send_header("Set-Cookie", cookie)
        self.end_headers()
        self.wfile.write(data)

    def skjema(self):
        lengde = int(self.headers.get("Content-Length", 0))
        felt = parse_qs(self.rfile.read(lengde).decode())
        return {k: v[0] for k, v in felt.items()}

    def bruker(self):
        c = SimpleCookie(self.headers.get("Cookie", ""))
        return OKTER.get(c["okt"].value) if "okt" in c else None

    def do_GET(self):
        sti = urlparse(self.path).path
        if sti == "/":
            self.meny()
        elif sti == "/kiosk.js":
            data = KIOSK_JS.encode()
            self.send_response(200)
            self.send_header("Content-Type", "text/javascript")
            self.end_headers()
            self.wfile.write(data)
        elif sti == "/kommentarer":
            self.kommentarer()
        elif sti == "/logg-inn":
            self.svar(LOGG_INN.format(melding=""))
        elif sti == "/admin":
            self.admin()
        else:
            self.svar("<p>Fant ikke siden.</p>", 404)

    def do_POST(self):
        sti = urlparse(self.path).path
        felt = self.skjema()
        if sti == "/kjop":
            self.kjop(felt)
        elif sti == "/logg-inn":
            self.logg_inn(felt)
        elif sti == "/kommentarer":
            db = database()
            db.execute("INSERT INTO kommentarer VALUES (?, ?)",
                       (felt.get("navn", "")[:40], felt.get("tekst", "")[:500]))
            db.commit()
            self.send_response(303)
            self.send_header("Location", "/kommentarer")
            self.end_headers()
        else:
            self.svar("<p>Fant ikke siden.</p>", 404)

    def meny(self):
        rader = ""
        for kode, (navn, pris) in VARER.items():
            # SÅRBAR: prisen ligger i et skjult felt som nettleseren sender.
            rader += f"""<form class="vare" method="post" action="/kjop">
  <span>{navn}, {pris} kr</span>
  <input type="hidden" name="vare" value="{kode}">
  <input type="hidden" name="pris" value="{pris}">
  <span><input name="antall" type="number" value="1" style="width:4em">
  <button>Kjøp</button></span></form>"""
        self.svar("<h2>Meny</h2>" + rader +
                  "<!-- Husk: adminsiden er på /admin -->")

    def kjop(self, felt):
        kode = felt.get("vare", "")
        if kode not in VARER:
            return self.svar("<p>Ukjent vare.</p>", 400)
        navn, ekte_pris = VARER[kode]
        try:
            pris = int(felt.get("pris", ekte_pris))  # SÅRBAR
            antall = int(felt.get("antall", 1))      # SÅRBAR: kan være minus
        except ValueError:
            return self.svar("<p>Det er ikke et tall.</p>", 400)
        sum_ = pris * antall
        tekst = f"<h2>Kvittering</h2><p>{antall} x {navn}: {sum_} kr</p>"
        if sum_ < ekte_pris * antall:
            tekst += ('<p class="flagg">Du betalte mindre enn prisen! '
                      + f("RUlSQXtwcmlzZW5fa29tX2ZyYV9uZXR0bGVzZXJlbn0=")
                      + "</p>")
        self.svar(tekst)

    def logg_inn(self, felt):
        navn = felt.get("navn", "")
        passord = felt.get("passord", "")
        db = database()
        # SÅRBAR: teksten fra brukeren limes rett inn i SQL-spørringen.
        sql = (f"SELECT navn FROM brukere WHERE navn = '{navn}' "
               f"AND passord = '{passord}'")
        try:
            rad = db.execute(sql).fetchone()
        except sqlite3.Error as feil:
            return self.svar(LOGG_INN.format(
                melding=f"<p>Databasefeil: {html.escape(str(feil))}</p>"
                        f"<pre>{html.escape(sql)}</pre>"))
        if not rad:
            return self.svar(LOGG_INN.format(
                melding="<p>Feil navn eller passord.</p>"), 401)
        okt = f("RUlSQXtza3JpcHRfc3RqZWxfb2t0YX0=") + secrets.token_hex(8)
        OKTER[okt] = rad[0]
        # SÅRBAR: uten HttpOnly kan JavaScript lese øktnøkkelen.
        self.svar(f"<p>Du er logget inn som {html.escape(rad[0])}.</p>",
                  cookie=f"okt={okt}; Path=/; SameSite=Lax")

    def admin(self):
        if self.bruker() != "admin":
            return self.svar("<h2>Admin</h2><p>Bare for admin.</p>", 403)
        self.svar('<h2>Admin</h2><p class="flagg">Velkommen, admin. '
                  + f("RUlSQXthZG1pbl91dGVuX3Bhc3NvcmR9") + "</p>")

    def kommentarer(self):
        db = database()
        liste = ""
        for navn, tekst in db.execute("SELECT navn, tekst FROM kommentarer"):
            # SÅRBAR: kommentaren settes rett inn i siden.
            liste += f"<p><b>{navn}</b>: {tekst}</p>"
        self.svar("<h2>Kommentarer</h2>" + liste + """
<form method="post"><p><input name="navn" placeholder="Navn"></p>
<p><textarea name="tekst" rows="3" cols="40"
 placeholder="Hva synes du om kiosken?"></textarea></p>
<button>Send</button></form>""")

    def log_message(self, fmt, *args):
        sys.stderr.write("%s %s\n" % (self.address_string(), fmt % args))


LOGG_INN = """<h2>Logg inn</h2>{melding}
<form method="post"><p><input name="navn" placeholder="Brukernavn"></p>
<p><input name="passord" type="password" placeholder="Passord"></p>
<button>Logg inn</button></form>"""


if __name__ == "__main__":
    if "--nullstill" in sys.argv and os.path.exists(DB):
        os.remove(DB)
        print("Databasen er nullstilt.")
    database()
    # På Windows lar SO_REUSEADDR to programmer dele porten. Da merker ingen
    # at Kiosken kjører fra før, så det slås av der.
    ThreadingHTTPServer.allow_reuse_address = os.name != "nt"
    try:
        server = ThreadingHTTPServer(("127.0.0.1", PORT), Kiosk)
    except OSError:
        print(f"Port {PORT} er opptatt, så Kiosken kjører kanskje allerede.")
        print("På Eira-laptopene starter den av seg selv. Åpne "
              "http://www.kiosken.localhost")
        print("Ellers: stopp den andre Kiosken, eller bruk "
              "python3 kiosk.py --port 8081")
        sys.exit(1)
    print(f"Kiosken kjører på {URL}  (Ctrl+C stopper)")
    print(f"Virker ikke adressen? Bruk http://127.0.0.1:{PORT}, det er samme side.")
    server.serve_forever()
