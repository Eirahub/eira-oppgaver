---
title: Lærerveiledning - Robot som måler
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven kobler sensorene på micro:biten til Dash: lysnivået styrer fargen og
hodet, og temperaturen vises med hodet som viser. Til slutt lager eleven en
alarm med en variabel som husker om alarmen har gått, og to grenser for mørkt
og lyst. Roboten kjører ikke i denne oppgaven, så den passer godt i et
klasserom med lite gulvplass.

## Oppgaven passer til: {.check}

__Fag__: Naturfag, matematikk, programmering, teknologi

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Sensorer, vilkår, variabler, omregning av verdier

__Tidsbruk__: 60 minutter

## Kompetansemål {.challenge}

- [ ] __Naturfag, 7. trinn__: utforske, lage og programmere teknologiske
  systemer som består av deler som virker sammen

- [ ] __Naturfag, 7. trinn__: stille spørsmål og lage hypoteser om
  naturfaglige fenomener, identifisere variabler og samle data for å finne
  svar

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmer med bruk av
  variabler, vilkår og løkker

## Forslag til vurderingskriterier {.challenge}

Eleven kan forklare hvilken del av systemet som måler (micro:biten), hvilken
som viser (Dash), og hvordan beskjeden går mellom dem (micro:bit, Raspberry Pi,
Bluetooth). I steg 4 kan eleven forklare hvorfor alarmen trenger en variabel,
og hvorfor to ulike grenser hindrer at den piper igjen og igjen.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Hei, Dash!](../hei_dash/hei_dash) og gjerne
  [Dans med Dash](../dans/dans), som bruker hodet.

- [ ] __Utstyr__: PC med nettleser og internett, en Dash (eller Cue) som er
  ladet og slått på, og en Raspberry Pi med gateway, bro og micro:bit som
  veileder har satt opp. Se "For veiledere" på [kursets forside](../). Gjerne
  en lommelykt.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](robot_som_maler.html)

### Tips til veiledere

- Sensorene sitter på micro:biten som står koblet til Raspberry Pi-en, ikke på
  roboten. Legg micro:biten der eleven kan skygge over den, med ledningen
  festet så den ikke dras ut.

- Temperaturen måles i prosessoren på micro:biten, ikke i lufta. Den viser
  ofte litt høyere enn romtemperaturen, og endrer seg sakte. Det er fint å
  snakke om som feilkilde.

- `pause 500` holder antall beskjeder til Pi-en nede. Hver Wonderbot-kloss
  venter på svar, så programmet blir uansett ikke raskere enn roboten.

- Ikke bruk seriell-klossene i samme program. Linjene micro:biten skriver,
  forstyrrer beskjedene til Pi-en.

- Hodet tåler pan fra -120 til 120 grader. Oppgaven bruker -90 til 90 for å ha
  god margin.

- Lyden `SYSTBIRTHDAY` finnes på Dash. På Cue kan Dash-lyder være stumme, så
  bruk lys i alarmen hvis eleven har en Cue.

### Hva er testet med ekte robot

Ikke testet ennå. Klossene for lys, hode og lyd er brukt i
[Dans med Dash](../dans/README). Lysnivå og temperatur fra en micro:bit som
står koblet til Pi-en er ikke prøvd sammen med roboten.
