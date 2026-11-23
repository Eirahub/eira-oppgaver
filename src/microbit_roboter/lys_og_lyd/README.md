---
title: Lærerveiledning - Lys og lyd
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven skrur lysene (FireLeds) av og på, finner hvor hvert av de 12 lysene
sitter, lager en lysløype med en tellende løkke, en roterende regnbue og et pip
med summeren. Til slutt får roboten blinklys før den snur.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, kunst og håndverk

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Hendelser, løkker, tellevariabel

__Tidsbruk__: 45 til 60 minutter

## Kompetansemål {.challenge}

- [ ] __Kunst og håndverk, 7. trinn__: bruke programmering til å skape
  interaktivitet og visuelle uttrykk

- [ ] __Naturfag, 7. trinn__: utforske, lage og programmere teknologiske
  systemer som består av deler som virker sammen

## Forslag til vurderingskriterier {.challenge}

Eleven har laget et lysshow og et blinklys, og kan forklare hva
`indeks` gjør i løkka i steg 3.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Kjør og sving](../kjor_og_sving/kjor_og_sving)

- [ ] __Utstyr__: PC med nettleser og internett, USB-kabel, en Bit:Bot XL med
  micro:bit og batterier. Se [kursets forside](../).

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](lys_og_lyd)

### Tips til veiledere

- Rekkefølgen på lysene (hvilket nummer som sitter hvor) er ikke sjekket på
  en ekte robot. Steg 2 lar eleven finne den selv, og steg 5 bruker det eleven
  fant.

- På Bit:Bot XL ignorerer utvidelsen valget `opp/ned` og `arm(er)` i
  regnbue- og roterklossene. De valgene gjelder bare Bit:Bot PRO.

- Summeren er koblet til pinne P0, samme pinne som micro:biten bruker til lyd.
  Musikklossene i MakeCode kan derfor også gi lyd i summeren, men det er ikke
  prøvd.

- Lysene starter med lysstyrke 40 av 255. Høyere lysstyrke kan blende og bruker
  mer strøm.

### Hva er testet med ekte robot

Ingenting ennå. Koden er skrevet etter kildekoden til utvidelsen
[4tronix/BitBot](https://github.com/4tronix/BitBot) versjon 2.1.13, og alle
kodeblokkene er tegnet som klosser i MakeCode uten feil. Ingen av programmene
er kjørt på en Bit:Bot XL.
