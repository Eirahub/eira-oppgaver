---
title: Bildet avslører deg
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Et bilde fra mobilen er mer enn det du ser. Inni fila ligger **metadata**:
hvilken mobil som tok det, når, og ofte nøyaktig **hvor**. Hackere og
etterforskere bruker dette til å finne ut hvor folk bor, går på skole eller
er på ferie. Det heter **OSINT**, etterretning fra åpne kilder. I denne
oppgaven finner du stedet et bilde er tatt, og lærer å beskytte deg selv.

![Feriebilde av en flat klippe over en fjord, med en person på
kanten](ferietur.jpg)

```
FRA:   K, Byrå 404
TIL:   Analytiker
EMNE:  Hvor var hun?

Kioskeieren la ut dette bildet og skrev «Ferie! Gjett hvor :)».
Vi trenger ikke gjette. Finn stedet.

Hilsen K
```

## Før du starter {.tip}

Bildet ligger i laben som `oppdrag/ferietur.jpg`. Du kan også laste det ned
[her](ferietur.jpg). Bildet og stedet er
laget for kurset.


# Steg 1: Les metadataene {.activity}

Metadata i bilder kalles **EXIF**. Velg måten som passer maskinen din.

## Sjekkliste {.check}

- [ ] **Windows:** Høyreklikk på bildet, velg **Egenskaper** og fanen
  **Detaljer**. Bla ned til **GPS**.

- [ ] **Mac:** Åpne bildet i **Forhåndsvisning**, velg **Verktøy**,
  **Vis inspektør** og fanen **GPS**.

- [ ] **Linux og Raspberry Pi:** Installer `exiftool` og kjør det:

  ```
  sudo apt install libimage-exiftool-perl
  exiftool oppdrag/ferietur.jpg
  ```

- [ ] Hvilken kamera står det? Når ble bildet tatt?

- [ ] Finn **breddegrad** og **lengdegrad**. De ser ut som `58° 59' 11" N`.


# Steg 2: Finn stedet {.activity}

## Sjekkliste {.check}

- [ ] Skriv koordinatene inn i en kartapp, for eksempel slik:
  `58°59'11"N 6°11'26"E`.

- [ ] Hvor er stedet? Hva heter det?

## Flagg {.flag}

Flagget er navnet på stedet, med små bokstaver og uten mellomrom:
`EIRA{stedsnavn}`. Registrer det med `sjekk.py`.


# Steg 3: Hva avslører dine bilder? {.activity}

## Sjekkliste {.check}

- [ ] Ta et bilde med mobilen, og send det til deg selv som **fil** (ikke via
  en app som komprimerer). Se på metadataene på samme måte. Står det hvor du
  var?

- [ ] Finn innstillingen for **posisjon** i kameraappen på mobilen din. Skru
  den av hvis du ikke trenger den.

- [ ] Se på et bilde du har lagt ut. Hva kan noen finne ut uten metadata:
  skilt, utsikt, skolegenser, husnummer?

## Tips {.protip}

Mange sosiale medier fjerner GPS fra bilder når du laster dem opp. Men ikke
alle, og ikke når du sender bilder som fil, på e-post eller i noen
chatteapper. Og ingen av dem fjerner det som synes i selve bildet.

## Ekte sak {.protip}

Etterforskere har funnet ut hvor bilder er tatt bare ut fra fjell, skygger og
skilt i bakgrunnen. Det finnes konkurranser der folk gjør dette for moro, og
de er skremmende flinke.

## Test deg selv {.flag}

- [ ] Hva er metadata?

- [ ] Nevn tre ting du kan gjøre for å ikke avsløre hvor du bor.


## Utfordring {.challenge}

Bildet i oppgaven er tegnet. Hvordan kunne du funnet stedet bare ut fra
bildet, uten GPS? Prøv på et bilde fra en venn, med lov, og se hvor nær du
kommer.
