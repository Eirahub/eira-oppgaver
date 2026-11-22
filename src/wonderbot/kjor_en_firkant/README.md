---
title: Lærerveiledning - Kjør en firkant
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven får Dash til å kjøre fram og tilbake, svinge og så kjøre en firkant med
en `gjenta 4 ganger`-løkke. Oppgaven viser at roboter ikke er helt nøyaktige, og
at en løkke gjør programmet kortere.

## Oppgaven passer til: {.check}

__Fag__: Programmering, matematikk, teknologi

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Løkker, vinkler, måling

__Tidsbruk__: 45 til 60 minutter

## Kompetansemål {.challenge}

Ikke satt. Se [udir.no](https://www.udir.no/lk20/).

## Forslag til vurderingskriterier {.challenge}

Dash kjører en firkant med en løkke, og eleven kan forklare hvorfor løkka gir
kortere kode. Utfordringen med trekant og sekskant viser om eleven forstår
sammenhengen mellom antall hjørner og vinkel (360 delt på antall hjørner).

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Hei, Dash!](../hei_dash/hei_dash)

- [ ] __Utstyr__: PC med nettleser og internett, en Dash (eller Cue) som er
  ladet og slått på, og en Raspberry Pi med gateway, bro og micro:bit som
  veileder har satt opp. Se "For veiledere" på [kursets forside](../).

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](kjor_en_firkant.html)

### Tips til veiledere

- Maskeringsteip på gulvet gjør det lett å se om firkanten lukker seg.

- Kjøring er begrenset til 1-100 cm og sving til 1-360 grader per kloss.

- Gatewayen stopper roboten ved hindring foran (IR) og hvis den står fast. Da
  settes `last error`, og programmet går videre til neste kloss.

- Målt på en Dash gjennom gatewayen: 20 cm ble rundt 22 cm, og 90 grader ble
  rundt 88. Det er et godt utgangspunkt for å snakke om nøyaktighet og
  justering.

### Hva er testet med ekte robot

Kjøring 20 cm og sving 90 grader med klossene er testet på Dash 18.11.2026. På
Cue er kjøring og sving testet gjennom gatewayen, ikke med klossene fra
micro:bit. Firkanten som helhet er ikke kjørt med ekte robot ennå.
