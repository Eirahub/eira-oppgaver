---
title: Lærerveiledning - Fjernkontroll
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven styrer Dash med knappene på micro:biten, og så ved å vippe den. Oppgaven
bruker akselerometeret, `gjenta for alltid` og `hvis - ellers hvis` med
grenseverdier.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, naturfag

__Anbefalte trinn__: 6. til 10. trinn

__Tema__: Sensorer, vilkår, løkker

__Tidsbruk__: 60 minutter

## Kompetansemål {.challenge}

Ikke satt. Se [udir.no](https://www.udir.no/lk20/).

## Forslag til vurderingskriterier {.challenge}

Eleven kan styre Dash både med knapper og ved å vippe, og kan forklare hva
grenseverdien 400 gjør.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Dans med Dash](../dans/dans). Det hjelper å ha brukt
  `hvis - ellers` før.

- [ ] __Utstyr__: PC med nettleser og internett, en Dash (eller Cue) som er
  ladet og slått på, og en Raspberry Pi med gateway, bro og micro:bit som
  veileder har satt opp. Se "For veiledere" på [kursets forside](../).

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](fjernkontroll.html)

### Tips til veiledere

- micro:biten sitter i Raspberry Pi-en med USB. Bruk en lang ledning, og la
  eleven sitte rolig ved Pi-en mens roboten kjører.

- Hvilken vei akselerasjonen er positiv, er ikke sjekket. Steg 2 lar eleven
  finne det selv, og steg 3 og 4 sier hva de skal bytte om roboten kjører feil
  vei.

- Hver `drive ... with speed`-kloss kjører, stopper og venter på svar. Styringen
  blir derfor rykkete. Det er forventet.

- Stoppknappen A+B kjører i en egen hendelse mens løkka venter på roboten. Det
  er ikke testet at den stopper en kloss som allerede kjører. Gatewayen stopper
  selv ved hindring, fastkjøring og mistet forbindelse, men følg med, og vær
  klar til å løfte roboten.

- Trykker eleven på A mange ganger fort i steg 1, kan klosser vente på hverandre
  (opptil 30 sekunder). Be eleven vente til Dash har stoppet.

### Hva er testet med ekte robot

Ingen av programmene i denne oppgaven er kjørt med ekte robot ennå. Klossene de
bruker (kjøring, sving og tidsstyrt kjøring) er testet hver for seg på Dash
18.11.2026.
