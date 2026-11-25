---
title: Inn i terminalen
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Hackere på film bruker terminalen, og det gjør ekte hackere også. Ikke for å
se kule ut, men fordi den er rask, og fordi nesten alle servere i verden
styres med den. I denne oppgaven lærer du å gå rundt i mapper, lese filer og
finne det som er gjemt.

![Terminal der ls skap viser fem esker, mens ls -a skap også viser den skjulte
mappa .hemmelig](terminalen.png)

```
FRA:   K, Byrå 404
TIL:   Rekrutt
EMNE:  Oppdrag 1

Jeg har gjemt to flagg i oppdrag/1_terminalen. Det ene ser du ikke
med det blotte øye. Det andre står i en fil så lang at du ikke
orker å lese den.

Hilsen K
```

## Før du starter {.tip}

Du trenger laben fra [Sett opp laben](../sett_opp_laben/sett_opp_laben).


# Steg 1: Hvor er jeg? {.activity}

Terminalen står alltid i en mappe. Disse tre kommandoene bruker du hele tiden:

| Kommando | Betyr | Gjør |
|---|---|---|
| `pwd` | print working directory | Viser hvilken mappe du står i |
| `ls` | list | Viser hva som ligger i mappa |
| `cd mappe` | change directory | Går inn i en mappe. `cd ..` går ett nivå opp |

## Sjekkliste {.check}

- [ ] Åpne terminalen i mappa `hackerlab`, og gå inn i oppdraget:

  ```
  cd oppdrag/1_terminalen
  ls
  ```

- [ ] Les beskjeden med `cat`, som skriver ut innholdet i en fil:

  ```
  cat LES_MEG.txt
  ```

- [ ] Gå inn i `kjeller` og se i eskene. Gå tilbake med `cd ..`.

## Tips {.protip}

Trykk **Tab** mens du skriver et filnavn, så fyller terminalen ut resten. Trykk
**pil opp** for å få tilbake forrige kommando. Hackere skriver ikke fort. De
bruker Tab.


# Steg 2: Det skjulte {.activity}

Filer og mapper som starter med punktum, for eksempel `.hemmelig`, vises ikke
med vanlig `ls`. Det er ikke for å gjemme dem fra hackere, men for å holde
innstillinger unna. Men de kan gjemme ting.

## Sjekkliste {.check}

- [ ] Se i alle de fire rommene, men nå med `-a` (all):

  ```
  ls -a skap
  ```

- [ ] Fant du en skjult mappe? Gå inn og les fila i den.

## Flagg {.flag}

Registrer flagget du fant. Gå først tilbake til `hackerlab`:

```
cd ../..
python3 sjekk.py flagg 'EIRA{...}'
```


# Steg 3: Søk i stedet for å lese {.activity}

`notater.txt` har 5000 linjer. En av dem har et flagg. Med `grep` søker du
etter tekst i filer, og får bare linjene som passer.

## Sjekkliste {.check}

- [ ] Se hvor lang fila er. `wc -l` teller linjer:

  ```
  wc -l oppdrag/1_terminalen/notater.txt
  ```

- [ ] Se de første linjene med `head`:

  ```
  head oppdrag/1_terminalen/notater.txt
  ```

- [ ] Søk etter flagget:

  ```
  grep EIRA oppdrag/1_terminalen/notater.txt
  ```

## Flagg {.flag}

Registrer flagget med `python3 sjekk.py flagg 'EIRA{...}'`.

## Tips {.protip}

`grep -r EIRA oppdrag` søker gjennom alle filene i alle mappene. Prøv det. Det
er en superkraft, og den har ekte hackere brukt til å finne passord som noen
har glemt i en fil.


# Steg 4: Juksearket ditt {.activity}

| Kommando | Gjør |
|---|---|
| `pwd`, `ls`, `ls -a`, `ls -l` | Hvor er jeg, hva er her, også skjulte, med detaljer |
| `cd mappe`, `cd ..`, `cd ~` | Inn, opp, hjem |
| `cat fil`, `head fil`, `tail fil` | Hele fila, starten, slutten |
| `wc -l fil` | Antall linjer |
| `grep tekst fil`, `grep -r tekst mappe` | Søk i en fil, søk i alt |
| `clear` | Tøm skjermen |

## Test deg selv {.flag}

- [ ] Hva er forskjellen på `ls` og `ls -a`?

- [ ] Hvordan finner du alle linjer med ordet `kiosk` i en fil?


## Utfordring {.challenge}

`grep -c kanelbolle oppdrag/1_terminalen/notater.txt` teller linjene med
«kanelbolle». Hvilket ord i fila er det flest linjer med? Prøv deg fram.
