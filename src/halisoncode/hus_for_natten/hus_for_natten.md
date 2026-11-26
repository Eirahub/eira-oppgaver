---
title: "Utfordring: Hus før natta"
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Den første natta i Minecraft er farlig. Monstrene kommer når sola går ned, og
den som ikke har et hus, får problemer. I denne utfordringen starter du i en ny
verden i **overlevelse**. Du og roboten skal skaffe tre, lage planker og bygge
et hus før det blir natt. Det er om lag ti minutter.

Her får du ikke steg for steg. Du får oppdraget, verktøyene og noen tips. Resten
er opp til deg.

Du bør ha gjort oppgavene
[Tømmerhuggeren](../tommerhuggeren/tommerhuggeren.html), [Bygg et
hus](../bygg_et_hus/bygg_et_hus.html) og [Lageret](../lageret/lageret.html).

<!-- BILDE: Solnedgang over en skog, og et lite plankehus med lys i vinduet. -->


# Oppdraget {.activity}

## Sjekkliste {.check}

- [ ] Lag en ny verden i `Overlevelse`, med `Tillat kommandoer` på. Da kan du
  skrive `/time set 0` for å prøve igjen fra morgenen.

- [ ] Skriv `/robot spawn` i chatten, og `/halisoncode` for å åpne editoren.
  Klokka går.

- [ ] Skriv `/gamerule halisoncode:pause_on_lost_focus false` i chatten. Da går
  ikke spillet på pause når du bytter til editoren, og du ser hva roboten gjør
  mens du jobber. Du trenger bare gjøre det én gang i hver verden.

- [ ] Huset skal ha fire vegger, tak, en åpning til dør og lys inni.

- [ ] Du er ferdig når du står inne i huset før `tid på døgnet` er 12000.

## Regler {.protip}

- Roboten får ikke bruke `agent.setItem`. Alt den bygger med, må den hogge selv,
  eller få av deg.

- Du får hjelpe til, men det er roboten som skal gjøre det meste av jobben.

## Slik bytter du mellom Minecraft og editoren {.tip}

- Du lager programmet i nettleseren og ser roboten i Minecraft. Bytt vindu med
  `Alt` + `Tab` (på Mac `Cmd` + `Tab`). Hold inne `Alt` og trykk `Tab` til
  Minecraft er valgt, og slipp.

- Trykk alltid på `Kjør` i editoren **før** du bytter til Minecraft. Programmet
  kjører fra nettleseren, så la editoren stå åpen.

- Viser Minecraft pausemenyen når du kommer tilbake, trykk `Fortsett spill`
  (Back to Game). Roboten står stille så lenge spillet er på pause. Har du ikke
  skrevet `/gamerule halisoncode:pause_on_lost_focus false`, gjør det nå. Du kan
  også trykke `F3` + `P` i Minecraft.

- Er roboten borte eller langt unna, skriv `/robot spawn` igjen. Vil du stoppe
  et program, trykk stoppknappen i editoren eller skriv `/robot stop`.


# Verktøykassa {.activity}

Dette har du lært før:

| Hva                          | Kode                                                        |
| ---------------------------- | ----------------------------------------------------------- |
| Hogge en hel stamme          | `hoggTre()` fra Tømmerhuggeren                              |
| Finne, hogge og hente et tre | `hentTre()` fra Skogsroboten                                |
| Lage planker                 | `agent.craft(Item.OakPlanks, 4)` og `agent.canCraft`        |
| Bygge en hul boks            | `blocks.fill(Block.OakPlanks, a, b, FillOperation.Hollow)`  |
| Lage dør                     | `blocks.fill(Block.Air, a, b, FillOperation.Replace)`       |
| Hvor mye tid er igjen        | `gameplay.timeOfDay()`, 0 er soloppgang og 12000 solnedgang |
| Kjøre noe fra chatten        | `player.onChat("hus", function (num1, num2, num3) { })`     |

## Tips {.tip}

- `/robot spawn` flytter roboten til deg. Løp til et tre, skriv `/robot spawn`
  og så `hogg`. Eller la roboten finne trærne selv med `skog` fra Skogsroboten.

- I overlevelse bygger `blocks.fill` med plankene i robotens inventar. Har den
  for få, stopper den og sier hva som mangler.

- Regn ut hvor mange planker huset trenger før du begynner å hogge. Boksen fra
  `~1 ~-1 ~1` til `~5 ~3 ~5` er 5 ganger 5 ganger 5 blokker, med gulvet nede i
  bakken. Hul trenger den 5 · 5 · 5 - 3 · 3 · 3 = 98 planker. Én stamme gir 4
  planker, så det blir 25 stammer.

- Et lite hus er bedre enn et halvferdig stort hus.


# Del 1: Hvor mye tid har vi? {.activity}

Start med en chatkommando som sier hvor mange minutter det er igjen. Et døgn i
Minecraft er 24000 tikk, og det går 20 tikk i sekundet.

## Sjekkliste {.check}

- [ ] Lag `player.onChat("tid", ...)` som regner ut `(12000 -
  gameplay.timeOfDay()) / 20 / 60`, og sier svaret i chatten med `player.say`.

- [ ] Bruk `Math.round` så du ikke får mange desimaler.


# Del 2: Tre nok {.activity}

## Sjekkliste {.check}

- [ ] Lag `hogg` fra Tømmerhuggeren, men uten å gi roboten en stikling. Den får
  stiklinger fra løvet.

- [ ] Lag `planker`, som gjør om alle stammene til planker og sier hvor mange
  roboten har.

- [ ] Hvor mange trær trenger du?


# Del 3: Bygg {.activity}

## Sjekkliste {.check}

- [ ] Lag `hus`, som bygger huset der du står. Sjekk først at roboten har
  planker nok, og la den si fra hvis ikke.

- [ ] Lag åpning til dør, og sett inn lys. Fakler trenger kull. Har du ikke det,
  kan du lage vinduer i stedet, eller en luke i taket.


# Del 4: Når noe går galt {.activity}

Programmet stopper hvis roboten ikke klarer noe, for eksempel hvis huset er for
langt unna. I JavaScript kan du fange feilen og gjøre noe annet.

Går roboten tom for planker, stopper den bare å bygge, uten feil. Tell derfor
blokkene etterpå:

```javascript
try {
    blocks.fill(Block.OakPlanks, pos(1, -1, 1), pos(5, 3, 5), FillOperation.Hollow)
} catch (e) {
    player.say("Huset ble ikke bygget: " + e)
}
if (agent.countSolid(pos(1, -1, 1), pos(5, 3, 5)) < 98) {
    player.say("Huset ble ikke ferdig. Roboten trenger flere planker.")
}
```

## Test prosjektet {.flag}

__Spill hele utfordringen fra en ny verden.__

- [ ] Rakk du det før natta?

- [ ] Hvor mange minutter hadde du igjen?

## Utfordring {.challenge}

- [ ] Gjør det på færre minutter. Hva tok lengst tid, og kan roboten gjøre mer?

- [ ] Lag en ekte dør: `agent.craft(Item.OakDoor, 3)` trenger en arbeidsbenk,
  som i Lageret.

- [ ] Prøv i Python i stedet for JavaScript.

- [ ] Klarer du det i en verden der det er vanskelig å finne trær, som en ørken?
