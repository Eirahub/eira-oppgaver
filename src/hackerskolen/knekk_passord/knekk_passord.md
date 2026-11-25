---
title: Knekk passord
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En god app lagrer aldri passordet ditt. Den lagrer en **hash**, et slags
fingeravtrykk av passordet. Men hvis databasen lekker, kan angripere prøve å
finne passordene likevel. I denne oppgaven skriver du ditt eget program som
knekker passord, og du finner ut hvorfor noen passord holder i millioner av
år og andre i et millisekund.

![Terminal med tre linjer fra den lekkede databasen med brukernavn og hasher, og
knekker.py som finner passordene til fem brukere](passord.png)

```
FRA:   K, Byrå 404
TIL:   Analytiker
EMNE:  Lekkasje

Brukerdatabasen til Kiosken har lekket. Passordene er hashet, så
eieren tror det er greit. Vis henne at det ikke er det. Finn
passordet til sjefen.

Hilsen K
```

## Før du starter {.tip}

Du trenger laben og litt Python: variabler, løkker og `if`. Se gjerne
[Hash-funksjoner](../../python/hash-funksjoner/hash-funksjoner) først.


# Steg 1: Hva er en hash? {.activity}

En hashfunksjon gjør en tekst om til et langt tall, skrevet som bokstaver og
sifre. Samme tekst gir alltid samme hash. Men det går ikke an å regne
baklengs fra hashen til teksten.

## Sjekkliste {.check}

- [ ] Start Python i terminalen med `python3`, og skriv:

  ```python
  import hashlib
  hashlib.sha256(b"pizza").hexdigest()
  hashlib.sha256(b"Pizza").hexdigest()
  ```

  Én stor bokstav, og hele hashen blir annerledes.

- [ ] Avslutt Python med `exit()`.

- [ ] Se på den lekkede databasen:

  ```
  cat oppdrag/4_passord/lekket_database.txt
  ```

  Hver linje er `brukernavn:hash`.

## Tips {.protip}

Nå vet du hvordan `sjekk.py` sjekker flaggene dine. Den har bare hashene, og
sammenligner hashen av det du skriver med dem.


# Steg 2: Skriv passordknekkeren {.activity}

Du kan ikke regne baklengs. Men du kan **gjette**: ta et vanlig passord, lag
hashen, og se om den står i databasen. Det heter et **ordlisteangrep**.

## Sjekkliste {.check}

- [ ] Lag fila `knekker.py` i mappa `hackerlab`:

  ```python
  import hashlib

  # Les den lekkede databasen
  lekket = {}
  for linje in open("oppdrag/4_passord/lekket_database.txt"):
      navn, h = linje.strip().split(":")
      lekket[h] = navn

  # Prøv hvert ord i ordlista
  for linje in open("oppdrag/4_passord/ordliste.txt", encoding="utf-8"):
      gjett = linje.strip()
      h = hashlib.sha256(gjett.encode()).hexdigest()
      if h in lekket:
          print(lekket[h], "har passordet", gjett)
  ```

- [ ] Kjør den:

  ```
  python3 knekker.py
  ```

- [ ] Hvor mange passord knakk du? Hvilken bruker klarte du ikke?

## Flagg {.flag}

Flagget er `EIRA{passordet_til_sjefen}`. Registrer det med `sjekk.py`.


# Steg 3: Hvor lang tid tar det? {.activity}

Ordlista har bare noen hundre ord. Ekte angripere har lister med milliarder av
lekkede passord, og maskiner som prøver milliarder i sekundet.

## Sjekkliste {.check}

- [ ] Mål hvor fort din maskin er. Lag `fart.py`:

  ```python
  import hashlib, time

  start = time.time()
  for i in range(1_000_000):
      hashlib.sha256(str(i).encode()).hexdigest()
  sekunder = time.time() - start
  print(round(1_000_000 / sekunder), "hasher i sekundet")
  ```

- [ ] Hvor lang tid tar det å prøve **alle** passord av en viss lengde? Med
  små bokstaver (29 med æøå) og lengde 8 er det 29 opphøyd i 8 muligheter.
  Regn ut i Python:

  ```python
  muligheter = 29 ** 8
  per_sekund = 1_000_000_000  # en kraftig maskin
  print(muligheter / per_sekund / 3600, "timer")
  ```

- [ ] Prøv lengde 12 og 16. Prøv med 70 tegn (store og små bokstaver, tall og
  tegn). Hva betyr mest: flere tegn å velge mellom, eller lengre passord?

## Tips {.protip}

Den siste brukeren, `ali`, har et passord laget av fire tilfeldige ord. Det er
langt, lett å huske og står ikke i noen ordliste. Det er derfor det holder.


# Steg 4: Salt {.activity}

Hvis to brukere har samme passord, får de samme hash. Da kan angriperen
knekke alle på én gang, eller slå opp i ferdige tabeller. Løsningen er
**salt**: en tilfeldig tekst som legges foran passordet før det hashes, og
som er forskjellig for hver bruker.

## Sjekkliste {.check}

- [ ] Se på `oppdrag/4_passord/lekket_med_salt.txt`. Hver linje er
  `brukernavn:salt:hash`.

- [ ] Endre knekkeren så den prøver `salt + gjett` for hver bruker. Klarer du
  fortsatt å knekke passordene? Tar det lengre tid?

## Ekte sak {.protip}

Ekte apper bruker hashfunksjoner som er laget for å være **trege**, som bcrypt
og Argon2, med salt. Da tar hvert gjett lang tid, og et ordlisteangrep kan ta
år i stedet for sekunder. Skriv aldri din egen passordlagring i en ekte app.
Bruk et ferdig bibliotek eller en innloggingstjeneste.

## Test deg selv {.flag}

- [ ] Hvorfor er `pizza123` et dårlig passord, selv om det er hashet?

- [ ] Hva gjør salt?

- [ ] Hvordan lager du et passord som er sterkt og lett å huske?


## Utfordring {.challenge}

Mange legger til et tall eller et utropstegn på slutten. Endre knekkeren så
den også prøver hvert ord med stor forbokstav og med `1`, `2026` og `!` på
slutten. Sjekk så ditt eget passord på
[haveibeenpwned.com/Passwords](https://haveibeenpwned.com/Passwords). Siden
sender ikke passordet ditt, bare starten av hashen.
