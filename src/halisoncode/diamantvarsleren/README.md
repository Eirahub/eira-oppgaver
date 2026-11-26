---
title: Lærerveiledning - Diamantvarsleren
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene møter hendelser som ikke er chatkommandoer. Programmet sier fra i
chatten når eleven knuser diamantmalm, gull og jern, teller diamantene i en
variabel og sier god morgen når en ny dag begynner.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Hendelser, variabler, tellere, Minecraft

__Nivå__: 1

__Tidsbruk__: Omtrent en time.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmer med bruk av
  variabler, vilkår og løkker

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hva en hendelse er.

- [ ] Elevene kan bruke en variabel som teller.

- [ ] Elevene kan forklare at et program med hendelser kjører til det stoppes.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få en melding i chatten for hver
  malm.

- [ ] Eleven oppnår høy måloppnåelse ved å telle diamantene og nullstille
  telleren hver morgen.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgaven Kom i gang.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Steg 1 og 2: Ødelagte blokker {.check}

- [ ] Bare blokker spilleren selv knuser, teller. Blokker roboten knuser, gir
  ingen melding. Det er poenget med testen i steg 2.

- [ ] Dypt i verden er malmen ofte dypsteinsvarianten (`Deepslate Diamond Ore`).
  Den er en annen blokk og gir ingen melding. I kreativ modus setter elevene ut
  vanlig diamantmalm fra inventaret.

## Steg 4: Ny dag {.check}

- [ ] `/time set night` og så `/time set day` gir en ny dag. `/time add` med et
  helt døgn gjør det ikke. Står klokka allerede på morgen, skjer ingenting.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Fortsett spill`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Ingen melding kommer: programmet må kjøre og editoren stå åpen. Trykk `Kjør` i
  editoren før eleven bytter til Minecraft.

- Telleren starter på 0 igjen: den nullstilles hver gang programmet kjøres på
  nytt, og hver morgen i steg 4.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
