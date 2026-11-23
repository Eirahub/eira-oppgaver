---
title: Lærerveiledning - Følg linja
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven leser av linjesensorene, lar roboten stoppe ved en svart strek og
følger så en svart linje med `hvis - ellers hvis - ellers` i en
`gjenta for alltid`-løkke. Lysene viser hvilken sensor som ser linja.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, naturfag

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Sensorer, vilkår, løkker, feilsøking

__Tidsbruk__: 60 minutter

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmar med bruk av
  variablar, vilkår og lykkjer

- [ ] __Naturfag, 7. trinn__: utforske, lage og programmere teknologiske
  systemer som består av deler som virker sammen

- [ ] __Programmering, 10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til vurderingskriterier {.challenge}

Roboten følger en lukket bane, og eleven kan forklare hvorfor
sensorene må leses inni en løkke, og hva roboten gjør i hvert av de tre
tilfellene.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Kjør og sving](../kjor_og_sving/kjor_og_sving). Det
  hjelper å ha brukt `hvis - ellers` før.

- [ ] __Utstyr__: PC med nettleser og internett, USB-kabel, en Bit:Bot XL med
  micro:bit og batterier, svart teip og et lyst underlag. Se [kursets
  forside](../).

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](folg_linja)

### Tips til veiledere

- Oppgaven regner med at sensoren viser 1 over svart. Det er ikke sjekket på
  en ekte robot. Den eksisterende Kodetimen-oppgaven i micro:bit-kurset bruker
  samme antakelse. Steg 1 lar eleven sjekke det selv.

- Linja bør være så bred at den passer mellom de to sensorene uten å treffe
  dem når roboten står rett. Prøv bredden før økta.

- Lav fart (30 til 40) gjør det lettere å holde linja. Svinger med liten
  radius er vanskelige.

- Blankt gulv og sterkt sollys kan forstyrre sensorene. Et stort hvitt ark med
  svart teip er tryggest.

### Hva er testet med ekte robot

Ingenting ennå. Koden er skrevet etter kildekoden til utvidelsen
[4tronix/BitBot](https://github.com/4tronix/BitBot) versjon 2.1.13, og alle
kodeblokkene er tegnet som klosser i MakeCode uten feil. Ingen av programmene
er kjørt på en Bit:Bot XL.
