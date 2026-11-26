---
title: Lærerveiledning - Robotlaget
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager to roboter med navn, Hugger og Baerer, og gir hver robot sin egen
funksjon. Hugger finner og hogger et tre med koden fra Skogsroboten. Baerer går
til Hugger med `goToRobot`, Hugger slipper stammene foran den, og Baerer plukker
dem opp og legger dem i kista hjemme. Til slutt jobber robotene samtidig med
`control.runInParallel`. Oppgaven er i JavaScript.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 8. til 10. trinn

__Tema__: Flere roboter, funksjoner, samtidighet, gjenbruk av kode

__Nivå__: 3

__Tidsbruk__: En til to timer.

## Kompetansemål {.challenge}

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: analysere problemer, gjøre dem om til
  delproblemer og gjøre rede for hvordan noen av delproblemene kan løses med
  programmering

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan styre flere roboter fra ett program.

- [ ] Elevene kan dele en jobb i funksjoner, én for hver robot.

- [ ] Elevene kan forklare hva som skjer når to deler av et program kjører
  samtidig.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få Hugger til å hogge og Baerer
  til å bære stammene hjem.

- [ ] Eleven oppnår høy måloppnåelse ved å lage `lag` der robotene jobber
  samtidig, og forklare hvorfor Baerer ikke blander sammen to jobber.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Skogsroboten.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. En verden med skog, gjerne i Kreativ.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

- [ ] Eleven trenger `/gamerule halisoncode:max_robots 3`. Det krever juksekoder
  i en enspillerverden, eller en operatør på en server.

## Steg 1: Navn {.check}

- [ ] Robotnavn har bare a til z, sifre, `_` og `-`, høyst 16 tegn. Derfor
  `Baerer` og ikke `Bærer`.

## Steg 4: Gi fra seg {.check}

- [ ] Det finnes ingen kommando som gir ting fra én robot til en annen. Hugger
  slipper med `dropAll` mot Baerer, og Baerer plukker opp med `collectAll`.

- [ ] `hugger.goToRobot(baerer)` når de allerede står ved siden av hverandre,
  snur bare Hugger mot Baerer.

## Steg 6: Samtidig {.check}

- [ ] Hver robot har sin egen kø med kommandoer. `hjem()` kjører i en egen tråd,
  og neste `hent()` venter til Baerer er ferdig med turen hjem.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Fortsett spill`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- "This world allows one robot per player": spilleregelen
  `halisoncode:max_robots` er ikke skrudd opp.

- "robot Baerer is not loaded": sjekk navnet med `/robot list`, og gå nærmere
  roboten.

- Baerer plukker ikke opp noe: den sto ikke rett foran Hugger, eller pausen var
  for kort. Prøv `loops.pause(2000)`.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
