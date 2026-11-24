---
title: Lærarrettleiing - Robot som måler
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Om oppgåva {.activity}

Eleven koplar sensorane på micro:biten til Dash: lysnivået styrer fargen og
hovudet, og temperaturen blir vist med hovudet som visar. Til slutt lagar
eleven ein alarm med ein variabel som hugsar om alarmen har gått, og to
grenser for mørkt og lyst. Roboten køyrer ikkje i denne oppgåva, så ho passar
godt i eit klasserom med lite golvplass.

## Oppgåva passar til: {.check}

__Fag__: Naturfag, matematikk, programmering, teknologi

__Tilrådde trinn__: 5. til 10. trinn

__Tema__: Sensorar, vilkår, variablar, omrekning av verdiar

__Tidsbruk__: 60 minutt

## Kompetansemål {.challenge}

- [ ] __Naturfag, 7. trinn__: utforske, lage og programmere teknologiske
  system som består av delar som verkar saman

- [ ] __Naturfag, 7. trinn__: stille spørsmål og lage hypotesar om
  naturfaglege fenomen, identifisere variablar og samle data for å finne svar

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmar med bruk av
  variablar, vilkår og lykkjer

## Forslag til vurderingskriterium {.challenge}

Eleven kan forklare kva del av systemet som måler (micro:biten), kva del som
viser (Dash), og korleis meldinga går mellom dei (micro:bit, Raspberry Pi,
Bluetooth). I steg 4 kan eleven forklare kvifor alarmen treng ein variabel,
og kvifor to ulike grenser hindrar at han pip igjen og igjen.

## Føresetnader og utstyr {.challenge}

- [ ] __Føresetnader__: [Hei, Dash!](../hei_dash/hei_dash) og gjerne
  [Dans med Dash](../dans/dans), som brukar hovudet.

- [ ] __Utstyr__: PC med nettlesar og internett, ein Dash (eller Cue) som er
  lada og slått på, og ein Raspberry Pi med gateway, bru og micro:bit som
  rettleiaren har sett opp. Sjå "For veiledere" på [framsida til
  kurset](../). Gjerne ei lommelykt.

## Framgangsmåte

[Klikk her for å sjå oppgåveteksten.](robot_som_maler_nn.html)

### Tips til rettleiarar

- Sensorane sit på micro:biten som står kopla til Raspberry Pi-en, ikkje på
  roboten. Legg micro:biten der eleven kan skugge over han, med leidningen
  festa så han ikkje blir dregen ut.

- Temperaturen blir målt i prosessoren på micro:biten, ikkje i lufta. Han
  viser ofte litt høgare enn romtemperaturen, og endrar seg sakte. Det er fint
  å snakke om som feilkjelde.

- `pause 500` held talet på meldingar til Pi-en nede. Kvar Wonderbot-kloss
  ventar på svar, så programmet blir uansett ikkje raskare enn roboten.

- Ikkje bruk seriell-klossane i same program. Linjene micro:biten skriv,
  forstyrrar meldingane til Pi-en.

- Hovudet toler pan frå -120 til 120 grader. Oppgåva brukar -90 til 90 for å
  ha god margin.

- Lyden `SYSTBIRTHDAY` finst på Dash. På Cue kan Dash-lydar vere stumme, så
  bruk lys i alarmen om eleven har ein Cue.

### Kva er testa med ekte robot

Ikkje testa enno. Klossane for lys, hovud og lyd er brukte i
[Dans med Dash](../dans/README). Lysnivå og temperatur frå ein micro:bit som
står kopla til Pi-en er ikkje prøvde saman med roboten.
