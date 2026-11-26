---
title: Lærerveiledning - Utfordring: Hus før natta
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

En åpen utfordring i overlevelse. Elevene setter sammen det de har lært: hogge,
lage planker, bygge og sjekke tiden. Målet er å stå inne i et hus før
solnedgang, som er om lag ti minutter i en ny verden.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Problemløsning, delproblemer, tid, feilhåndtering

__Nivå__: 4

__Tidsbruk__: Én til tre timer, gjerne i par.

## Kompetansemål {.challenge}

- [ ] __Programmering, 8.-10. trinn__: analysere problemer, gjøre dem om til
  delproblemer og gjøre rede for hvordan noen av delproblemene kan løses med
  programmering

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og
  reflektere over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan dele et stort problem i delproblemer.

- [ ] Elevene kan regne ut hvor mange ressurser en oppgave trenger.

- [ ] Elevene kan bruke `try` og `catch` til å håndtere at noe går galt.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å bygge et hus med roboten i
  overlevelse, også om det tar mer enn én dag.

- [ ] Eleven oppnår høy måloppnåelse ved å rekke det før natta og forklare
  planen sin.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: De tidligere oppgavene i kurset.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Planlegging {.check}

- [ ] La elevene planlegge i fem minutter før de lager verdenen. Klokka i
  spillet går når verdenen er laget.

- [ ] `/time set 0` starter dagen på nytt. Bruk det til øving, og en ny verden
  til selve utfordringen.

## Løsningsforslag {.check}

- [ ] `hogg` fra Tømmerhuggeren uten `setItem`, `planker` med `while
  (agent.canCraft(Item.OakPlanks, 4))`, og `hus` med `blocks.fill(...,
  FillOperation.Hollow)` og en åpning av luft. Boksen fra `~1 ~-1 ~1` til
  `~5 ~3 ~5` trenger 98 planker, altså 25 stammer. Et eiketre gir ofte bare 4
  til 6 stammer, så det blir fem til seks trær. Går plankene ut, bygger roboten
  så langt den kommer, uten feilmelding. Programmet må telle blokkene etterpå.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause.
  Trykk `Tilbake til spillet`. `F3` + `P` slår av pause når vinduet mister
  fokus, og `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele
  verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- Huset blir ikke ferdig: roboten har for få planker. `fill` stopper og sier hva
  som mangler.

- Det blir natt: en grav i bakken med en blokk over er også et hus. Det teller
  som nødløsning.


# Eksterne ressurser {.activity}

- [Veiledning for spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
