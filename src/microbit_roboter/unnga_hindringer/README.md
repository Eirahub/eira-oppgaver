---
title: Lærerveiledning - Unngå hindringer
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven måler avstand med ultralydsensoren, lar roboten stoppe foran en vegg
og så rygge og snu unna. Eleven lærer at sensoren svarer 0 når den ikke hører
noe ekko, og må ta hensyn til det. Roboter uten ultralydsensor gjør steg 4 i
stedet: kjør mot lyset med de to lyssensorene.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, naturfag

__Anbefalte trinn__: 6. til 10. trinn

__Tema__: Sensorer, variabler, vilkår, lyd og lys

__Tidsbruk__: 60 til 90 minutter

## Kompetansemål {.challenge}

- [ ] __Naturfag, 10. trinn__: bruke programmering til å utforske naturfaglige
  fenomener

- [ ] __Naturfag, 7. trinn__: utforske, lage og programmere teknologiske
  systemer som består av deler som virker sammen

- [ ] __Programmering, 10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

## Forslag til vurderingskriterier {.challenge}

Roboten kjører rundt uten å krasje (eller følger lyset), og eleven
kan forklare hvordan ultralydsensoren måler avstand, og hvorfor sjekken må ha
med `avstand > 0`.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Følg linja](../folg_linja/folg_linja)

- [ ] __Utstyr__: PC med nettleser og internett, USB-kabel, en Bit:Bot XL med
  micro:bit og batterier, ultralydsensor for Bit:Bot (tilbehør) eller en
  lommelykt, og bøker eller esker som hindringer. Se [kursets forside](../).

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](unnga_hindringer)

### Tips til veiledere

- Ultralydsensoren er tilbehør. Den kobles i kontakten foran og bruker pinne
  P15. Sjekk hvor mange dere har før økta. Uten sensor gjør eleven steg 4.

- Utvidelsen gir 0 når det ikke kommer noe ekko innen omtrent 2 meter, eller
  når sensoren ikke er koblet til. Dette står i kildekoden, og er grunnen til
  `avstand > 0` i programmet.

- Hvilken vei lyssensorene teller (større tall for mer lys eller for mindre),
  er ikke sjekket. Steg 4 lar eleven finne det, og sier hva de skal bytte.

- Grenseverdien 50 for lyssensorene er en gjetning. Tallene går fra 0 til
  1023, og hva som passer avhenger av rommet.

### Hva er testet med ekte robot

Ingenting ennå. Koden er skrevet etter kildekoden til utvidelsen
[4tronix/BitBot](https://github.com/4tronix/BitBot) versjon 2.1.13, og alle
kodeblokkene er tegnet som klosser i MakeCode uten feil. Ingen av programmene
er kjørt på en Bit:Bot XL.
