---
title: Sett opp laben
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En hacker trenger et sted å øve der ingen kan bli skadet. Det kalles en
**lab**. I denne oppgaven laster du ned laben til Hackerskolen, starter den og
finner ditt første flagg.

![Terminal der lag_oppdrag.py gir det første flagget, og sjekk.py registrerer
det i flaggboka med graden Rekrutt](laben.png)

```
FRA:   K, Byrå 404
TIL:   Rekrutt
EMNE:  Utstyret ditt

Her er laben. Alt i den kjører på din egen maskin, og ingenting
sendes ut. Du kan ødelegge så mye du vil. Det er hele poenget.

Hilsen K
```

## Før du starter {.tip}

Gjør [Hvit hatt](../hvit_hatt/hvit_hatt) først. Du trenger en PC med Windows,
Mac eller Linux, eller en Raspberry Pi. Er det en skole-PC, spør læreren før du
installerer noe.

## Laptop fra Eira? {.tip}

Da er laben allerede satt opp. Mappa `hackerlab` ligger klar, og Kiosken
kjører på [http://www.kiosken.localhost](http://www.kiosken.localhost). Hopp over steg 1 og 2. Åpne
**Terminal**, skriv `cd hackerlab`, og gå rett til steg 3.


# Steg 1: Python og en terminal {.activity}

Laben er skrevet i Python og brukes fra **terminalen**, et vindu der du skriver
kommandoer i stedet for å klikke.

## Sjekkliste {.check}

- [ ] Har du Python 3? Åpne en terminal og skriv:

  ```
  python3 --version
  ```

  På Windows skriver du `python --version`. Får du en feil, last ned Python
  fra [python.org](https://www.python.org/downloads/). På Windows huker du av
  for **Add python.exe to PATH** under installasjonen. På Mac kan du få
  spørsmål om å installere utviklerverktøy. Svar ja. På Linux og Raspberry Pi
  installerer du med `sudo apt install python3 git`.

- [ ] Finn en terminal som snakker **bash**, språket hackere og servere bruker:

  - **Mac og Linux:** Programmet **Terminal** er allerede installert.
  - **Raspberry Pi:** Åpne **Terminal** fra menyen.
  - **Windows:** Installer [Git](https://git-scm.com/download/win), og åpne
    **Git Bash** fra startmenyen. Har du lov til å installere WSL (Linux i
    Windows), er det enda bedre, men Git Bash holder til det meste.

- [ ] Har du ikke gjort det før, går det fint. Du lærer terminalen i neste
  oppgave.

## Tips {.protip}

I hele kurset står kommandoene med `python3`. På Windows skriver du `python`
i stedet.


# Steg 2: Last ned laben {.activity}

## Sjekkliste {.check}

- [ ] Last ned [hackerlab.zip](hackerlab.zip) og pakk den ut, for eksempel i
  mappa **Dokumenter**.

- [ ] Åpne terminalen i mappa `hackerlab`. På Windows kan du høyreklikke i
  mappa og velge **Open Git Bash here**. På Mac og Linux skriver du `cd`,
  mellomrom, og drar mappa inn i terminalvinduet.

- [ ] Se hva som ligger der:

  ```
  ls
  ```

  Du skal se blant annet `lag_oppdrag.py`, `sjekk.py` og `kiosk.py`.


# Steg 3: Godta kontrakten og lag oppdragene {.activity}

## Sjekkliste {.check}

- [ ] Kjør:

  ```
  python3 lag_oppdrag.py
  ```

- [ ] Les kontrakten. Skriv `jeg lover` og trykk Enter.

- [ ] Skriptet lager mappa `oppdrag` og viser **ditt første flagg**.

## Flagg {.flag}

Alle flagg i Hackerskolen ser slik ut: `EIRA{noe_her}`. Registrer det første i
flaggboka:

```
python3 sjekk.py flagg 'EIRA{...}'
```

Bytt ut `EIRA{...}` med flagget du fikk. Se hele flaggboka og graden din med:

```
python3 sjekk.py status
```

Du har 16 flagg å finne. Med 4 blir du **Analytiker**, med 8 **Pentester**,
og med 13 **Hvit hatt**.

## Bytter du maskin? {.save}

Flaggboka ligger på maskinen. Neste gang kan du sitte ved en annen. Derfor
viser `python3 sjekk.py status` en **fremgangskode** nederst, for eksempel
`K7QM2`. Skriv den ned på slutten av hver time. På den nye maskinen henter du
flaggene dine med:

```
python3 sjekk.py hent K7QM2
```

## Tips {.protip}

Sett alltid flagget i enkle anførselstegn (`'`). Ellers kan terminalen tro at
krøllparentesene betyr noe.


# Steg 4: Hva er det i laben? {.activity}

| Fil | Hva den gjør |
|---|---|
| `lag_oppdrag.py` | Lager oppdragene i mappa `oppdrag`. Kjør den på nytt for å starte på nytt |
| `sjekk.py` | Flaggbok, grader, phishingquiz og sjekk av forsvaret ditt |
| `kiosk.py` | **Kiosken**, en nettside med bevisste sikkerhetshull |
| `hemmelig_tjeneste.py` | En tjeneste på en hemmelig port |

Alt kjører på `127.0.0.1`. Det er en adresse som alltid betyr «denne maskinen».
Ingen andre kan nå laben, og laben når ingen andre.

Kiosken åpner du på `http://www.kiosken.localhost:8080`. Alle navn som slutter på
`.localhost` betyr også «denne maskinen». Nettleseren spør ingen andre om
hvor de er, så navnet virker bare hos deg.


# Steg 5: Slik bruker du laben {.activity}

Noen deler av laben er **tjenester** som kjører til du stopper dem: Kiosken og
den hemmelige tjenesten. Da er terminalen opptatt, og du trenger en til.

## Sjekkliste {.check}

- [ ] Prøv å starte Kiosken:

  ```
  python3 kiosk.py
  ```

  Terminalen skriver `Kiosken kjører på http://www.kiosken.localhost:8080` og blir stående.

- [ ] Åpne en **ny** terminal i mappa `hackerlab`. Der skriver du andre
  kommandoer, som `python3 sjekk.py blått`, mens Kiosken kjører.

- [ ] Gå tilbake til den første terminalen og stopp Kiosken med **Ctrl+C**.

- [ ] Har du endret `kiosk.py`, må du stoppe Kiosken og starte den igjen før
  endringen virker.

## På en laptop fra Eira {.tip}

Kiosken og den hemmelige tjenesten kjører allerede når du logger inn. Kiosken
ligger på [http://www.kiosken.localhost](http://www.kiosken.localhost), uten `:8080`, og starter på nytt av
seg selv når du lagrer `kiosk.py`. Du trenger ikke starte eller stoppe noe.

| Vil du | Skriv |
|---|---|
| Se flaggboka og graden din | `python3 sjekk.py status` |
| Hente flaggene dine på en annen maskin | `python3 sjekk.py hent KODE` |
| Lage oppdragene på nytt | `python3 lag_oppdrag.py` |
| Tømme kommentarene i Kiosken | `python3 kiosk.py --nullstill` |
| Starte helt på nytt | Slett mappa `hackerlab` og pakk ut zip-fila igjen |


# Steg 6: Hvis noe ikke virker {.activity}

| Problem | Løsning |
|---|---|
| `python3: command not found` | På Windows skriver du `python` |
| `python` åpner Microsoft Store | Python er ikke installert riktig. Installer på nytt og huk av for **Add python.exe to PATH** |
| `No such file or directory` | Du står i feil mappe. Skriv `pwd` for å se hvor du er, og `cd` til mappa `hackerlab` |
| `Port 8080 er opptatt` | Kiosken kjører allerede. På en laptop fra Eira starter den av seg selv, så bare åpne `http://www.kiosken.localhost`. Ellers: stopp den i det andre vinduet, eller bruk `python3 kiosk.py --port 8081` |
| `Kiosken svarer ikke` i nettleseren | Du har kanskje en feil i `kiosk.py`. Kjør `python3 kiosk.py` for å se feilmeldingen |
| `www.kiosken.localhost` åpner ikke | Noen nettlesere kjenner ikke navnet. Bruk `http://127.0.0.1:8080`, det er samme side |
| `Får ikke kontakt med Kiosken` | Start Kiosken i en annen terminal først |
| `Det er ikke et flagg i Hackerskolen` | Ta med hele flagget, også `EIRA{` og `}`, og sett det i enkle anførselstegn |
| Mappa `5_git_lekkasje` mangler | Installer Git og kjør `python3 lag_oppdrag.py` på nytt |

Står du fortsatt fast, spør læreren. Lærere finner mer hjelp i [Veiledning
for lærere](../veiledning_for_laerere/veiledning_for_laerere).

## Tips {.protip}

Du kan lese all koden i laben. Fant du et flagg ved å lese koden, er det også
en måte å hacke på, men du lærer mest av å løse oppdraget.


## Utfordring {.challenge}

Åpne `sjekk.py` i en teksteditor. Flaggene står ikke i fila, bare noe som
heter **hasher**. Hvordan kan skriptet sjekke at flagget ditt er riktig uten
å vite hva det er? Svaret får du i [Knekk
passord](../knekk_passord/knekk_passord).
