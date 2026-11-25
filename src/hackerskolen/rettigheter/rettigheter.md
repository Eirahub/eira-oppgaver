---
title: Hvem kan lese dagboka?
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

På en Linux-maskin har hver fil en eier, og regler for hvem som får lese,
skrive og kjøre den. Er reglene feil, kan hvem som helst lese hemmelighetene
dine. Mange innbrudd starter med en fil som hadde feil rettigheter. I denne
oppgaven lærer du å lese og sette rettigheter.

![Terminal der ls -l viser at dagbok.txt har rettighetene -rw-rw-rw-, og der
chmod låser dagboka og gjør skriptet kjørbart](rettigheter.png)

```
FRA:   K, Byrå 404
TIL:   Rekrutt
EMNE:  Dagboka

Kioskeieren skriver dagbok på serveren. Hun tror bare hun kan lese
den. Sjekk det, og fiks det.

Hilsen K
```

## Før du starter {.tip}

Denne oppgaven trenger Linux, Mac, WSL eller en Raspberry Pi. I Git Bash på
Windows virker ikke rettigheter på samme måte. Har du bare Git Bash, kan du
lese oppgaven og øve på rettigheter i [Bandit](../bandit/bandit) i stedet.


# Steg 1: Les rettighetene {.activity}

## Sjekkliste {.check}

- [ ] Gå til oppdraget og se på filene med detaljer:

  ```
  cd oppdrag/3_rettigheter
  ls -l
  ```

- [ ] Du ser noe som dette først på linja til dagboka:

  ```
  -rw-rw-rw-
  ```

  Slik leser du det:

  | Tegn | Betyr |
  |---|---|
  | `-` først | Det er en fil. `d` betyr mappe |
  | `rw-` | **Eieren** kan lese (r) og skrive (w), men ikke kjøre (x) |
  | `rw-` | **Gruppa** kan lese og skrive |
  | `rw-` | **Alle andre** kan lese og skrive |

- [ ] Hvem kan lese dagboka nå? Hvem kan endre den?

## Ekte sak {.protip}

Det har skjedd mange ganger at en database med passord eller kundedata lå på en
server med rettigheter som lot hvem som helst lese den. Ingen trengte å
hacke noe. De trengte bare å se.


# Steg 2: Lås dagboka {.activity}

Med `chmod` (change mode) endrer du rettighetene. Rettighetene kan skrives som
tall: lese er 4, skrive er 2 og kjøre er 1. Du legger sammen for eieren,
gruppa og alle andre.

| Tall | Betyr | Rettigheter |
|---|---|---|
| `600` | Eieren leser og skriver, ingen andre noe | `-rw-------` |
| `644` | Eieren leser og skriver, andre kan lese | `-rw-r--r--` |
| `755` | Eieren alt, andre kan lese og kjøre | `-rwxr-xr-x` |
| `666` | Alle kan lese og skrive | `-rw-rw-rw-` |

## Sjekkliste {.check}

- [ ] Lås dagboka så bare eieren kan lese og skrive:

  ```
  chmod 600 dagbok.txt
  ls -l dagbok.txt
  ```


# Steg 3: Lås opp skriptet {.activity}

## Sjekkliste {.check}

- [ ] Prøv å kjøre skriptet:

  ```
  ./lås_opp.sh
  ```

  Det går ikke. Se på rettighetene med `ls -l`. Hvorfor?

- [ ] Gi eieren lov til å kjøre det, og prøv igjen:

  ```
  chmod u+x lås_opp.sh
  ./lås_opp.sh
  ```

  `u+x` betyr: gi eieren (user) lov til å kjøre (x).

## Flagg {.flag}

Står dagboka riktig, får du flagget. Registrer det med
`python3 ../../sjekk.py flagg 'EIRA{...}'`.


# Steg 4: Superbrukeren {.activity}

På Linux finnes det en bruker som heter **root**, som kan alt. Ingen bør være
root hele tiden. I stedet skriver du `sudo` foran én kommando når du trenger
ekstra makt, for eksempel for å installere et program:

```
sudo apt install exiftool
```

Da blir du spurt om passordet ditt. Mange angrep handler om å gå fra en
vanlig bruker til root. Det heter å **eskalere privilegier**.

## Tips {.protip}

Kjør aldri en kommando med `sudo` som du har funnet på nettet, uten at du
forstår hva den gjør. Det er en vanlig måte å bli lurt på.

## Test deg selv {.flag}

- [ ] Hva betyr `-rwxr-x---`?

- [ ] Hvilke rettigheter bør en fil med passord ha?


## Utfordring {.challenge}

Lag en mappe med `mkdir hemmelig` og gi den rettigheter så bare du kan gå
inn i den. Tips: For mapper betyr `x` at du kan gå inn.
