---
title: "Lærerveiledning - Hei, Dash!"
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven legger til Wonderbot-utvidelsen i MakeCode, lager en stoppknapp på A+B og
får Dash til å lyse og spille en lyd på knapp A. Til slutt viser micro:biten
`last error` hvis en kloss feilet.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Hendelser, sekvens, feilsøking

__Tidsbruk__: 45 minutter

## Kompetansemål {.challenge}

Ikke satt. Se [udir.no](https://www.udir.no/lk20/).

## Forslag til vurderingskriterier {.challenge}

Programmet sender lys og lyd til roboten, og eleven har en stoppknapp på A+B.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Ingen. Det hjelper å ha laget et lite program i
  MakeCode før.

- [ ] __Utstyr__: PC med nettleser og internett, en Dash (eller Cue) som er
  ladet og slått på, og en Raspberry Pi med gateway, bro og micro:bit som
  veileder har satt opp. Se "For veiledere" på [kursets forside](../).

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](hei_dash.html)

### Tips til veiledere

- Gå gjennom sikkerhetsreglene på kursets forside før første robot står på
  gulvet.

- Del ut robotnavn (for eksempel `dash-01`) og skriv dem gjerne på en lapp ved
  roboten. Broen på Raspberry Pi-en må være startet for nettopp de robotene.

- Den micro:biten som står i Raspberry Pi-en, er den programmet skal over på.
  Bestem på forhånd hvordan `.hex`-filen fra elevens PC kommer over på den, for
  eksempel at veileder kopierer den.

- Lyden `SYSTBIRTHDAY` er den eneste lyden som er testet. Andre lydnavn i Dash
  kan finnes, men er ikke prøvd med disse klossene.

- Tomme feilmeldinger betyr at klossen virket. "no answer from the Pi" betyr at
  broen ikke svarte innen 30 sekunder.

### Hva er testet med ekte robot

Lys og lyd med klossene er testet på Dash 18.11.2026 (micro:bit V1). På Cue er
`SYSTBIRTHDAY` stille, og Cue-lyder er ikke testet. Lys på Cue er ikke testet
med klossene.
