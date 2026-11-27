---
title: Veiledning for lærere - Laben og Kiosken
author: Tor Einar Enne
language: nb
---


# Om veiledningen {.intro}

Denne veiledningen viser hvordan du setter opp laben i Hackerskolen, tester at
alt virker før timen, og hvordan øvingsappen **Kiosken** er bygget: hvilke
hull den har, hvordan de testes, og hvordan de tettes. Til slutt er det en
oversikt over alle oppdragene og en feilsøkingsliste.

Veiledningen inneholder løsningene. Den er åpen på nettet, som alle
lærerveiledninger her, så elever kan finne den. Det gjør ikke så mye. Det
viktigste i kurset er å forstå hvorfor angrepene virker, ikke å finne flagget.


# Hva laben er {.activity}

Laben er fire Python-filer og et bilde. Den bruker bare det som følger med
Python 3, så ingenting annet må installeres.

| Fil | Hva den gjør |
|---|---|
| `lag_oppdrag.py` | Viser kontrakten, og lager mappa `oppdrag` med oppdragene til del 2 og 3 og en Git-repo med en lekket nøkkel |
| `sjekk.py` | Flaggbok (`flagg`, `status`), phishingquiz (`phishing`) og sjekk av forsvaret (`blått`) |
| `kiosk.py` | Kiosken, en nettside med bevisste sikkerhetshull |
| `hemmelig_tjeneste.py` | En tjeneste på en tilfeldig port mellom 2000 og 9999, til portskanneren |
| `filer/ferietur.jpg` | Et tegnet bilde med GPS-posisjon i metadataene |

Det er viktig å vite dette om sikkerheten:

- Elevene åpner Kiosken på `http://www.kiosken.localhost:8080`. Navn som slutter på
  `.localhost` er reservert og peker alltid på maskinen selv (RFC 6761), så
  ingen oppslag går ut på nettet.
- Kiosken og den hemmelige tjenesten lytter bare på `127.0.0.1`. De kan ikke
  nås fra andre maskiner, heller ikke fra maskinen ved siden av.
- Laben sender ingenting ut på nettet. Bare Bandit og eksempelbildet i
  XSS-oppgaven bruker internett.
- Hullene finnes bare i `kiosk.py`. Laben gjør ingen endringer utenfor mappa
  `hackerlab`.
- Flaggene står kodet i kildekoden, og `sjekk.py` har bare hasher av dem.

Elevene trenger hver sin lab. To elever kan godt dele en PC.


# Utstyr per elev {.activity}

| Trengs | Til | Merk |
|---|---|---|
| Python 3.8 eller nyere | Hele laben | `python3` på Mac og Linux, `python` på Windows |
| En bash-terminal | Del 2 og de fleste kommandoene | Git Bash på Windows, Terminal på Mac og Linux |
| Git | Lekkede hemmeligheter | Følger med Git Bash på Windows |
| Nettleser med utviklerverktøy | Del 4 | Chrome, Edge eller Firefox |
| SSH og internett | Bandit | Port 2220 ut må være åpen |
| Linux, Mac, WSL eller Raspberry Pi | Hvem kan lese dagboka? | Rettigheter virker ikke riktig i Git Bash |
| `exiftool` (bare Linux) | Bildet avslører deg | Windows og Mac kan lese GPS uten ekstra program |


# Laptopene til Eira {.activity}

På laptopene til Eira er laben satt opp på forhånd. Elevene trenger ikke
installere noe:

- Mappa `hackerlab` ligger klar i hjemmemappa.
- Kiosken og den hemmelige tjenesten starter når eleven logger inn. De kjører
  som eleven, ikke som administrator.
- Kiosken ligger på `http://www.kiosken.localhost`, uten `:8080`. Adressen svarer bare på
  maskinen selv, og den står i bokmerkelinja.
- Kiosken starter på nytt av seg selv når eleven lagrer `kiosk.py`. Har eleven
  laget en feil, viser nettleseren hva hen skal gjøre.

Elevene får ikke samme laptop hver gang. Be dem skrive ned **fremgangskoden**
fra `python3 sjekk.py status` på slutten av hver time. Med
`python3 sjekk.py hent KODE` får de flaggene tilbake på en annen maskin.
Laptopene bør nullstilles mellom timene, så neste elev starter med en ny lab.


# Oppsett på Windows {.activity}

## Sjekkliste {.check}

- [ ] Installer **Python** fra
  [python.org/downloads](https://www.python.org/downloads/). Huk av for **Add
  python.exe to PATH** på første skjermbilde.

- [ ] Skriver eleven `python` og Microsoft Store åpner seg, er Python ikke
  installert riktig. Installer på nytt med PATH, eller slå av
  **App-kjøringsaliaser** for `python.exe` under **Innstillinger**, **Apper**,
  **Avanserte appinnstillinger**.

- [ ] Installer **Git** fra
  [git-scm.com/download/win](https://git-scm.com/download/win). Standardvalgene
  holder. Da får du også **Git Bash**, som er terminalen elevene bruker.

- [ ] Åpne Git Bash og sjekk:

  ```
  python --version
  git --version
  ```

- [ ] Vil du at elevene skal kunne gjøre oppgaven om rettigheter på Windows,
  installer **WSL** med `wsl --install` i PowerShell som administrator. Det
  krever omstart og ofte hjelp fra IT. Det er ikke nødvendig for resten av
  kurset.

## Tips {.protip}

I Git Bash virker de fleste Linux-kommandoene i kurset: `ls`, `cd`, `cat`,
`grep`, `find`, `sort`, `uniq`, `cut`, `wc` og `ssh`. Det som ikke virker
riktig, er `chmod`.


# Oppsett på Mac {.activity}

## Sjekkliste {.check}

- [ ] Åpne **Terminal** og skriv `python3 --version`. Får du spørsmål om å
  installere utviklerverktøy, svar ja. Det gir både Python 3 og Git.

- [ ] Er Python for gammel, installer fra
  [python.org/downloads](https://www.python.org/downloads/).

- [ ] Sjekk med `git --version`.


# Oppsett på Linux og Raspberry Pi {.activity}

## Sjekkliste {.check}

- [ ] Python 3 og Git er som regel installert. Sjekk med `python3 --version`
  og `git --version`.

- [ ] Mangler noe, installer det:

  ```
  sudo apt install python3 git libimage-exiftool-perl
  ```

- [ ] På en Chromebook kan du slå på **Linux-utviklermiljø** i innstillingene
  og bruke det som Linux.


# Test laben før timen {.activity}

Gjør dette på én elev-PC før første time. Det tar ti minutter og finner nesten
alle problemer.

## Sjekkliste {.check}

- [ ] Last ned `hackerlab.zip` fra [Sett opp
  laben](../sett_opp_laben/sett_opp_laben), og pakk den ut.

- [ ] Åpne terminalen i mappa `hackerlab`, og lag oppdragene:

  ```
  python3 lag_oppdrag.py
  ```

  Skriv `jeg lover`. Du skal få det første flagget, og mappa `oppdrag` skal ha
  fem undermapper og `ferietur.jpg`. Mangler `5_git_lekkasje`, er ikke Git
  installert.

- [ ] Registrer flagget:

  ```
  python3 sjekk.py flagg 'EIRA{...}'
  ```

- [ ] Start Kiosken, og åpne `http://www.kiosken.localhost:8080` i nettleseren:

  ```
  python3 kiosk.py
  ```

- [ ] Åpne en terminal til i samme mappe, og kjør sjekken:

  ```
  python3 sjekk.py blått
  ```

  Den skal vise seks `[HULL]` og ett `[OK]`. Det betyr at Kiosken kjører og er
  sårbar, slik den skal være.

- [ ] Stopp Kiosken med **Ctrl+C**. Start den hemmelige tjenesten, og stopp
  den igjen:

  ```
  python3 hemmelig_tjeneste.py
  ```

- [ ] Sjekk Bandit fra skolens nett:

  ```
  ssh bandit0@bandit.labs.overthewire.org -p 2220
  ```

  Passordet er `bandit0`. Får du ikke kontakt, må IT åpne for SSH på port 2220
  ut.

- [ ] Slett mappa `hackerlab` igjen, så elevene starter med en ny.


# Før første time {.activity}

## Sjekkliste {.check}

- [ ] Snakk med IT. Si at elevene skal kjøre en lokal nettside på
  `127.0.0.1:8080` og en tjeneste på en tilfeldig lokal port, og at de skal
  bruke SSH mot `bandit.labs.overthewire.org` på port 2220. Ingenting av
  laben går ut på skolens nett.

- [ ] Spør IT om antivirus eller sikkerhetsprogram kan reagere på ordet
  «hacker», på Kiosken eller på portskanning mot `127.0.0.1`. Si fra på
  forhånd, så de ikke blir overrasket.

- [ ] Gå gjennom [Hvit hatt](../hvit_hatt/hvit_hatt) med hele klassen før
  noen starter laben.

- [ ] Bestem hva du gjør hvis en elev angriper skolens nett, andres kontoer
  eller nettsider: stopp, ta en samtale, og følg skolens rutiner. Si det til
  klassen på forhånd.


# Kiosken: hullene {.activity}

Kiosken er en nettbutikk for en oppdiktet ungdomsbedrift. Den har
menysiden `/`, kjøp på `/kjop`, kommentarer på `/kommentarer`, innlogging på
`/logg-inn` og en adminside på `/admin`. Brukerne ligger i databasen
`kiosk.db`: `admin` med et tilfeldig passord på 32 tegn, og `kari` med
passordet `kanelbolle`.

Hvert hull er merket med `SÅRBAR` i `kiosk.py`. Tabellen viser hullene,
hvordan de testes, og hvilken linje i `sjekk.py blått` som sjekker dem.

| Hull | Oppgave | Slik testes det | Sjekk i `blått` |
|---|---|---|---|
| Hemmelighet i `kiosk.js` | Alt i nettleseren er offentlig | Åpne `/kiosk.js` | Ingen hemmeligheter i kiosk.js |
| Prisen kommer fra nettleseren | Alt i nettleseren er offentlig | Endre det skjulte feltet `pris` til `0` med F12, og kjøp | Prisen bestemmes av serveren |
| Antall kan være minus | Alt i nettleseren er offentlig | Kjøp `-3` | Antall kan ikke være minus |
| SQL-injeksjon i innloggingen | SQL-injeksjon | Logg inn med brukernavnet `admin' --` | SQL-injeksjon virker ikke, og Kari kan fortsatt logge inn |
| Lagret XSS i kommentarer | XSS i kommentarfeltet | Skriv `<script>alert(document.cookie)</script>` som kommentar | Kommentarer kan ikke kjøre skript |
| Øktnøkkel uten HttpOnly | XSS i kommentarfeltet | `document.cookie` viser nøkkelen | Øktnøkkelen har HttpOnly |

Kiosken har også svakheter som `blått` ikke sjekker. De er fine funn til
[Pentestrapporten](../pentestrapport/pentestrapport) og til rødt lag:

- Feilmeldingen ved SQL-feil viser hele spørringen.
- En HTML-kommentar i menyen avslører adressen til adminsiden.
- Passordene er lagret i klartekst.
- Innloggingen har ingen grense for hvor mange ganger man kan prøve.
- Siden har ingen Content-Security-Policy. `blått` gir en bonus hvis den finnes.

## Teste fra terminalen {.protip}

Alle hullene kan også testes med `curl`, som finnes i Git Bash, på Mac og på
Linux. Det er nyttig når du vil sjekke at en elev har tettet et hull:

```
curl -s -d "vare=brus&pris=0&antall=1" http://127.0.0.1:8080/kjop
curl -s -d "navn=admin' --&passord=x" http://127.0.0.1:8080/logg-inn
curl -s http://127.0.0.1:8080/kiosk.js
```


# Kiosken: fasit for å tette hullene {.activity}

Slik ser koden ut når hullene er tettet. Linjenumrene kan variere litt.

**Prisen og antallet** i funksjonen `kjop`. Bytt ut de to linjene i `try`:

```python
try:
    pris = ekte_pris
    antall = int(felt.get("antall", 1))
    if not 1 <= antall <= 20:
        return self.svar("<p>Du kan kjøpe 1 til 20.</p>", 400)
except ValueError:
    return self.svar("<p>Det er ikke et tall.</p>", 400)
```

**Hemmeligheten i JavaScript.** Fjern linja med `ANSATTKODE` og `% f(...)`
etter teksten, så `KIOSK_JS` blir:

```python
KIOSK_JS = """// Kiosken
console.log("Velkommen til Kiosken!");
"""
```

**SQL-injeksjon** i funksjonen `logg_inn`:

```python
sql = "SELECT navn FROM brukere WHERE navn = ? AND passord = ?"
try:
    rad = db.execute(sql, (navn, passord)).fetchone()
```

**HttpOnly** på informasjonskapselen, i samme funksjon:

```python
cookie=f"okt={okt}; Path=/; SameSite=Lax; HttpOnly")
```

**XSS** i funksjonen `kommentarer`:

```python
liste += f"<p><b>{html.escape(navn)}</b>: {html.escape(tekst)}</p>"
```

Start Kiosken på nytt etter hver endring (på laptopene til Eira skjer det av
seg selv). Når alt er tettet, viser
`python3 sjekk.py blått` `[OK]` på alle sju linjene og gir det siste flagget.

## Tips {.protip}

Lager en elev en syntaksfeil, starter ikke Kiosken. Feilmeldingen i
terminalen sier hvilken linje det gjelder. Vanligste feil er feil innrykk.
Har eleven ødelagt fila helt, kan de hente en ny `kiosk.py` fra zip-fila.


# Fasit for oppdragene {.activity}

| Flagg | Oppgave | Slik finnes det |
|---|---|---|
| Velkommen til laben | Sett opp laben | Vises når `lag_oppdrag.py` er ferdig |
| Skjulte filer | Inn i terminalen | `ls -a skap` viser `.hemmelig`, og `cat skap/.hemmelig/flagg.txt` |
| Grep | Inn i terminalen | `grep EIRA notater.txt` |
| Nåla i loftet | Nåla i høystakken | `find loft -size 1337c` |
| Inntrengeren i loggen | Nåla i høystakken | IP-adressen med 300 feil og så én vellykket innlogging er `203.0.113.66`. Flagget er `EIRA{203.0.113.66}` |
| Rettigheter | Hvem kan lese dagboka? | `chmod 600 dagbok.txt`, `chmod u+x lås_opp.sh` og `./lås_opp.sh` |
| Knekt passord | Knekk passord | Passordet til `sjefen` er `pizza123`. Flagget er `EIRA{pizza123}` |
| Portskanner | Din egen portskanner | Tjenesten sier flagget når man kobler til porten |
| Bildet avslører deg | Bildet avslører deg | Koordinatene peker på Preikestolen. Flagget er `EIRA{preikestolen}` |
| Phishingdetektiv | Phishingdetektiv | Minst 5 av 6 riktige i quizen. Fasit: falsk, ekte, falsk, ekte, falsk, falsk |
| Alt i nettleseren er offentlig | Alt i nettleseren er offentlig | Står i `/kiosk.js` |
| Kjøp for 0 kroner | Alt i nettleseren er offentlig | Vises på kvitteringen når prisen er endret |
| Admin uten passord | SQL-injeksjon | Står på `/admin` når man er logget inn som admin |
| Skript stjal økta | XSS i kommentarfeltet | Starten av øktnøkkelen. Man må være logget inn |
| Git glemmer aldri | Lekkede hemmeligheter | `git log -p` i `oppdrag/5_git_lekkasje` |
| Blått lag | Klar for publisering | Gis av `sjekk.py blått` når alle hullene er tettet |

Passordene i `lekket_database.txt` er `pizza123` (sjefen), `kanelbolle` (kari),
`fotball2024` (ola), `minecraft!` (nora) og `123456` (vaktmester). Passordet
til `ali` står ikke i ordlista, og skal ikke kunne knekkes.


# Nullstille og starte på nytt {.activity}

| Hva | Slik |
|---|---|
| Lage oppdragene på nytt | `python3 lag_oppdrag.py`. Flaggboka blir stående |
| Slette flaggboka | Slett fila `flaggbok.txt` |
| Flytte flaggene til en annen maskin | `python3 sjekk.py status` viser fremgangskoden. På den nye maskinen: `python3 sjekk.py hent KODE` |
| Tømme kommentarene i Kiosken | `python3 kiosk.py --nullstill` |
| Få tilbake den sårbare Kiosken | Hent `kiosk.py` fra zip-fila igjen, og kjør `python3 kiosk.py --nullstill` |
| Starte helt på nytt | Slett mappa `hackerlab`, og pakk ut zip-fila igjen |


# Feilsøking {.activity}

| Problem | Løsning |
|---|---|
| `python3: command not found` på Windows | Skriv `python` i stedet |
| `python` åpner Microsoft Store | Python er ikke installert med PATH. Se oppsett på Windows |
| `No such file or directory` når man kjører et skript | Terminalen står i feil mappe. Bruk `pwd` og `cd` til mappa `hackerlab` |
| `Port 8080 er opptatt` når Kiosken starter | Kiosken kjører allerede. På laptopene til Eira starter den av seg selv, så eleven trenger ikke starte den. Ellers: stopp den i det andre vinduet, eller bruk `python3 kiosk.py --port 8081` og `python3 sjekk.py blått --port 8081` |
| Nettleseren viser `Kiosken svarer ikke` (laptopene til Eira) | `kiosk.py` har en feil. Eleven kjører `python3 kiosk.py` i `hackerlab` for å se feilmeldingen, retter og lagrer |
| `www.kiosken.localhost` åpner ikke | Nettleseren kjenner ikke `.localhost`-navn. Bruk `http://127.0.0.1:8080`, det er samme side |
| `sjekk.py blått` får ikke kontakt | Kiosken kjører ikke, eller kjører på en annen port |
| Endringer i `kiosk.py` virker ikke | Kiosken må stoppes med Ctrl+C og startes på nytt. På laptopene til Eira skjer det når fila lagres |
| `Det er ikke et flagg i Hackerskolen` | Sjekk at hele flagget er med, også `EIRA{` og `}`, og at det står i enkle anførselstegn |
| `./lås_opp.sh: Permission denied` | Det er meningen. Eleven skal bruke `chmod u+x` |
| `chmod` gjør ingenting | Eleven bruker Git Bash. Oppgaven krever Linux, Mac, WSL eller Raspberry Pi |
| Mappa `5_git_lekkasje` mangler | Git er ikke installert. Installer Git og kjør `lag_oppdrag.py` på nytt |
| `ssh` får ikke kontakt med Bandit | Skolens brannmur stenger port 2220. Spør IT, eller la elevene gjøre Bandit hjemme |
| Skanneren finner ingen hemmelig tjeneste | `hemmelig_tjeneste.py` må kjøre i et annet terminalvindu mens man skanner. På laptopene til Eira kjører den allerede |
| Skanneren er veldig treg | `settimeout` er for høy. Bruk `0.2` sekunder eller mindre |
| GPS vises ikke for bildet | Bruk `oppdrag/ferietur.jpg` fra laben. Noen nettlesere og chatteapper fjerner metadata når bildet lastes ned eller sendes |
| Antivirus stopper eller sletter filer | Be IT om et unntak for mappa `hackerlab`. Laben inneholder ikke skadevare, men ord som «hacker» og portskanning kan utløse varsler |
