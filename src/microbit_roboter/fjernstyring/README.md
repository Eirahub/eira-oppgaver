---
title: Lærerveiledning - Fjernstyr med radio
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven lager to programmer: en fjernkontroll som sender et tall med radio ti
ganger i sekundet, og et robotprogram som tar imot tallet og kjører. Til slutt
stopper roboten av seg selv hvis den ikke har fått noen beskjed på et halvt
sekund.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, naturfag

__Anbefalte trinn__: 6. til 10. trinn

__Tema__: Radio, sender og mottaker, vilkår, variabler, sikkerhet

__Tidsbruk__: 60 til 90 minutter

## Kompetansemål {.challenge}

- [ ] __Naturfag, 10. trinn__: utforske, forstå og lage teknologiske systemer
  som består av en sender og en mottaker

- [ ] __Programmering, 10. trinn__: analysere problemer, gjøre dem om til
  delproblemer og gjøre rede for hvordan noen av delproblemene kan løses med
  programmering

- [ ] __Programmering, 10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til vurderingskriterier {.challenge}

Eleven styrer roboten med fjernkontrollen, og roboten stopper når
fjernkontrollen slås av. Eleven kan forklare hva tallene betyr, og hvorfor
roboten trenger `sistHørt`.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Kjør og sving](../kjor_og_sving/kjor_og_sving). Det
  hjelper å ha brukt radio i [micro:bit-kurset](../../microbit/).

- [ ] __Utstyr__: PC med nettleser og internett, USB-kabel, en Bit:Bot XL med
  micro:bit og batterier, og en micro:bit
  til med batteripakke som fjernkontroll. Se [kursets forside](../).

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](fjernstyring)

### Tips til veiledere

- Del ut radiogrupper før økta, for eksempel samme nummer som roboten. Like
  grupper gjør at par styrer hverandres roboter.

- Steg 3 er en enkel *watchdog*: Roboten stopper når det har gått mer enn 500
  ms siden siste beskjed. Snakk om hvorfor det er viktig for ekte maskiner.

- Lysene (FireLeds) er ikke brukt i robotprogrammet. Det er ikke prøvd om
  radio og lysene virker sammen uten problemer.

- Bit:Bot har også en klosse for Bluetooth, men den trengs ikke for radio.

### Hva er testet med ekte robot

Ingenting ennå. Koden er skrevet etter kildekoden til utvidelsen
[4tronix/BitBot](https://github.com/4tronix/BitBot) versjon 2.1.13, og alle
kodeblokkene er tegnet som klosser i MakeCode uten feil. Ingen av programmene
er kjørt på en Bit:Bot XL.
