---
title: "Lærerveiledning - Utfordring: Speedrun-roboten"
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

En åpen utfordring i overlevelse. Elevene setter sammen skogsroboten, lageret og
tunnelboreren til ett program. På fem minutter i spillet skal roboten lage så
mange planker, fakler og kister som mulig og legge dem i en kiste. En
poengtabell gjør at elevene må velge strategi: hogge mer, grave etter kull eller
lage kister.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Problemløsning, delproblemer, optimalisering, tid, feilhåndtering

__Nivå__: 4

__Tidsbruk__: Én til tre timer, gjerne i par.

## Kompetansemål {.challenge}

- [ ] __Programmering, 8.-10. trinn__: analysere problemer, gjøre dem om til
  delproblemer og gjøre rede for hvordan noen av delproblemene kan løses med
  programmering

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan dele et stort problem i delproblemer og sette sammen
  funksjoner de har laget før.

- [ ] Elevene kan regne ut hva som lønner seg ut fra en poengtabell.

- [ ] Elevene kan bruke tiden i spillet til å styre når programmet skal stoppe.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få roboten til å hente tre, lage
  planker og legge dem i målkista innen tiden.

- [ ] Eleven oppnår høy måloppnåelse ved å kjøre hele løpet med én chatkommando,
  bruke både tre og kull, og forklare hvorfor strategien gir mange poeng.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Skogsroboten, Lageret og Tunnelboreren.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

- [ ] Finn gjerne et frø (Seed) med skog og fjell nær startstedet, så alle
  elevene får samme verden og kan sammenligne poeng.

## Planlegging {.check}

- [ ] La elevene øve i en egen verden med `/time set 0`, og bruke en ny verden
  til selve løpet.

- [ ] Fem minutter i spillet er 6000 tikk. Det er fra soloppgang til middag, så
  det kommer ingen monstre.

## Løsningsforslag {.check}

- [ ] `tidIgjen()` svarer `gameplay.timeOfDay() < 4800`. `skog` er `hentTre()`
  fra Skogsroboten i en `while (tidIgjen())`. `kull` bruker
  `agent.findNearest(Block.CoalOre, 16)`, `agent.moveTo`, `snuMot` og
  `agent.destroy`. `lag` har en `while (agent.canCraft(...))` for planker, og
  lager så pinner og fakler mens det er kull. Kister lages med
  `agent.craft(Item.Chest, 1)` når roboten står ved arbeidsbenken. `lever` er
  `agent.goHome()` og `agent.storeItems(SixDirection.Forward, 0)`. `poeng`
  legger sammen `agent.containerCount` for hver ting ganget med poengene.

- [ ] Planker gir 1 poeng hver, og en kiste av 8 planker gir 10. Kister lønner
  seg altså litt. Fakler gir 8 poeng per kull, så kull lønner seg hvis det er
  nær.

## Vanlige problemer {.protip}

- Programmene er borte: de lagres i nettleseren på maskinen eleven brukte.
  Åpne editoren i samme nettleser, eller hent inn `.mkcd`-filen eleven lagret
  med `Hent inn` på startsiden. På maskiner som nullstilles, må elevene lagre
  prosjektet som fil før timen slutter.

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Fortsett spill`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- Roboten får ikke laget kister: arbeidsbenken må stå rett ved siden av den.
  Still roboten ved arbeidsbenken med `agent.setHome()` før løpet.

- Poengene teller ikke: tingene ligger fortsatt i roboten. `lever` må kjøres før
  tiden er ute.

- Programmet stopper ved et tre roboten ikke når: fang feilen med `try` og
  `catch`, og gå videre til neste tre.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
