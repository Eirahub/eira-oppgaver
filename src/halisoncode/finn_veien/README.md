---
title: Lærerveiledning - Finn veien
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lar roboten huske et hjem og finne veien tilbake, kalle roboten til seg
med en chatkommando og gå ut av en labyrint ved å holde venstre hånd på veggen.
Oppgaven introduserer koordinater (x, y, z), relative posisjoner og at en
kommando kan svare sant eller usant.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Posisjoner, sann og usann, chatkommandoer, Minecraft

__Nivå__: 1

__Tidsbruk__: Omtrent en time.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmer med bruk av
  variabler, vilkår og løkker

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hva x, y og z betyr i Minecraft, og hva `~` betyr.

- [ ] Elevene kan bruke en chatkommando til å starte en del av programmet.

- [ ] Elevene kan forklare venstrehåndsregelen for labyrinter.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få roboten hjem og ut av
  labyrinten.

- [ ] Eleven oppnår høy måloppnåelse ved å lage chatkommandoene `hjem` og
  `sett`, og forklare hvorfor `gå til` kan svare usann.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: De tidligere oppgavene i kurset.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Steg 1: Hjemme {.check}

- [ ] La elevene bygge en vegg i veien. Da ser de forskjellen på `flytt` og `gå
  hjem`.

## Steg 2: Kom hit {.check}

- [ ] `~` er målt fra spilleren, ikke fra roboten. Det er den vanligste
  misforståelsen.

- [ ] Programmet må kjøre, og nettleserfanen må være åpen, for at chatkommandoen
  skal virke.

## Steg 3: Labyrinten {.check}

- [ ] Elevene må stå i åpningen på nordsiden og se sørover når de skriver
  `/robot spawn`, ellers er roboten ikke på stien.

- [ ] Samme frø (42) gir samme labyrint for alle. Det gjør det lett å
  sammenligne.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Fortsett spill`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- Roboten svarer `I am not on the path`: den står ikke på eikeplankene. Flytt
  den med `/robot spawn` fra åpningen.

- Roboten kommer ikke når eleven skriver `hit`: programmet er stoppet. Trykk
  `Kjør` igjen.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
