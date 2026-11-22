---
title: Lærerveiledning - Dans med Dash
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven bruker hode, lys, tidsstyrt kjøring og pauser til å lage en dans.
Oppgaven øver på sekvens, løkker og parametere (vinkler, fart og tid).

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, musikk

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Sekvens, løkker, parametere

__Tidsbruk__: 45 til 60 minutter

## Kompetansemål {.challenge}

Ikke satt. Se [udir.no](https://www.udir.no/lk20/).

## Forslag til vurderingskriterier {.challenge}

Eleven har laget en egen dans med minst ett lys, én hodebevegelse og én snurr,
og kan forklare hva `pan`, `tilt`, `speed` og `turn` gjør.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Kjør en firkant](../kjor_en_firkant/kjor_en_firkant)

- [ ] __Utstyr__: PC med nettleser og internett, en Dash (eller Cue) som er
  ladet og slått på, og en Raspberry Pi med gateway, bro og micro:bit som
  veileder har satt opp. Se "For veiledere" på [kursets forside](../).

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](dans.html)

### Tips til veiledere

- Hodet går fra -120 til 120 grader til siden og fra -24 (opp) til 7 (ned).
  Gatewayen avviser verdier utenfor.

- Tidsstyrt kjøring er begrenset til 10 sekunder. Snurring på stedet trenger god
  plass rundt roboten.

- Hver kloss venter på svar fra roboten. Derfor blir takten ujevn med korte
  pauser. Det er et fint utgangspunkt for å snakke om at programmet venter.

### Hva er testet med ekte robot

Hode, lys, lyd og 2 sekunder tidsstyrt kjøring med klossene er testet på Dash
18.11.2026. Snurring med `turn` 100 og hele dansen er ikke kjørt med ekte robot
ennå. Ingenting i denne oppgaven er testet på Cue med klossene.
