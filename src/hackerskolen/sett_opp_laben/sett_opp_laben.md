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
  for **Add python.exe to PATH** under installasjonen.

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

## Tips {.protip}

Du kan lese all koden i laben. Fant du et flagg ved å lese koden, er det også
en måte å hacke på, men du lærer mest av å løse oppdraget.


## Utfordring {.challenge}

Åpne `sjekk.py` i en teksteditor. Flaggene står ikke i fila, bare noe som
heter **hasher**. Hvordan kan skriptet sjekke at flagget ditt er riktig uten
å vite hva det er? Svaret får du i [Knekk
passord](../knekk_passord/knekk_passord).
