---
title: "Lærarrettleiing - Finn vegen"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Om oppgåva {.activity}

Elevane lèt roboten hugse ein heim og finne vegen tilbake, kalle roboten til
seg med ein chatkommando og gå ut av ein labyrint ved å halde venstre hand på
veggen. Oppgåva introduserer koordinatar (x, y, z), relative posisjonar og at
ein kommando kan svare sant eller usant.

## Oppgåva passar til: {.check}

__Fag__: Programmering, teknologi

__Tilrådde trinn__: 5. til 10. trinn

__Tema__: Posisjonar, sant og usant, chatkommandoar, Minecraft

__Nivå__: 1

__Tidsbruk__: Om lag ein time.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmar med bruk av
  variablar, vilkår og lykkjer

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevane kan forklare kva x, y og z tyder i Minecraft, og kva `~` tyder.

- [ ] Elevane kan bruke ein chatkommando til å starte ein del av programmet.

- [ ] Elevane kan forklare venstrehandsregelen for labyrintar.

## Forslag til vurderingskriterium {.challenge}

- [ ] Eleven oppnår middels måloppnåing ved å få roboten heim og ut av
  labyrinten.

- [ ] Eleven oppnår høg måloppnåing ved å lage chatkommandoane `hjem` og
  `sett`, og forklare kvifor `gå til` kan svare usann.

## Føresetnader og utstyr {.challenge}

- [ ] __Føresetnader__: Dei tidlegare oppgåvene i kurset.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og ein
  nettlesar. Sjå oppgåva Installere Halison Code.


# Framgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgåva sjølv i same Minecraft-versjon som elevane brukar.

## Steg 1: Heime {.check}

- [ ] La elevane byggje ein vegg i vegen. Då ser dei skilnaden på `flytt` og
  `gå hjem`.

## Steg 2: Kom hit {.check}

- [ ] `~` er målt frå spelaren, ikkje frå roboten. Det er den vanlegaste
  misforståinga.

- [ ] Programmet må køyre, og nettlesarfana må vere open, for at chatkommandoen
  skal verke.

## Steg 3: Labyrinten {.check}

- [ ] Elevane må stå i opninga på nordsida og sjå sørover når dei skriv
  `/robot spawn`, elles er roboten ikkje på stien.

- [ ] Same frø (42) gir same labyrint for alle. Det gjer det lett å
  samanlikne.

## Vanlege problem {.protip}

- Programma er borte: dei blir lagra i nettlesaren på maskina eleven brukte.
  Opne editoren i same nettlesar, eller hent inn `.mkcd`-fila eleven lagra
  med `Hent inn` på startsida. På maskiner som blir nullstilte, må elevane
  lagre prosjektet som fil før timen er slutt.

- Roboten står stille etter at eleven bytte vindauge: Minecraft er på pause.
  Trykk `Attende til spelet`. `F3` + `P` slår av pause når vindauget mistar
  fokus, og `/gamerule halisoncode:pause_on_lost_focus false` gjer det for
  heile verda.

- Chatkommandoen verkar ikkje: programmet må køyre og editoren stå open. Trykk
  `Kjør` i editoren før eleven byter til Minecraft.

- Roboten svarar `I am not on the path`: han står ikkje på eikeplankane. Flytt
  han med `/robot spawn` frå opninga.

- Roboten kjem ikkje når eleven skriv `hit`: programmet er stoppa. Trykk
  `Kjør` igjen.


# Eksterne ressursar {.activity}

- [Rettleiing for
  spelarar](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoane.
