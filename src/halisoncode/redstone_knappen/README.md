---
title: Lærerveiledning - Redstone-knappen
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene bruker hendelsen `når roboten får redstonesignal`. Roboten går ett steg
hver gang eleven trykker på en knapp ved siden av den. Til slutt bruker de `hvis
... ellers` og `robot oppdag blokk fremover`, så roboten snur når noe står i
veien.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Hendelser, redstone, hvis og ellers, sensorer

__Nivå__: 1

__Tidsbruk__: Omtrent en time.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmer med bruk av
  variabler, vilkår og løkker

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hva en hendelse er.

- [ ] Elevene kan bruke en sensor og hvis og ellers til å velge handling.

- [ ] Elevene kan forklare at bare et nytt signal starter hendelsen.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få roboten til å gå langs en rad
  med knapper.

- [ ] Eleven oppnår høy måloppnåelse ved å få roboten til å snu ved en blokk og
  forklare hvorfor en knapp bare virker når roboten står ved siden av den.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgaven Kom i gang.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Steg 1 og 2: Signalet {.check}

- [ ] Hendelsen kjører når blokken roboten står i, går fra intet signal til et
  signal. Etter ett steg er knappen ikke lenger ved siden av roboten. Derfor
  trenger elevene en rad med knapper.

- [ ] Bare standardroboten (fra `/robot spawn` uten navn) har hendelsen. Roboter
  med navn reagerer ikke.

- [ ] En robot som allerede har signal når programmet starter, teller ikke.

## Steg 3: Snu {.check}

- [ ] Etter at roboten har snudd, står den fortsatt ved den samme knappen. Et
  nytt trykk sender den videre i den nye retningen.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Tilbake til spillet`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Ingenting skjer når eleven trykker: programmet må kjøre og editoren stå åpen,
  og knappen må stå rett ved siden av roboten, ikke på skrå.

- En spak gir bare ett steg når den slås på. Eleven må slå den av og på igjen
  for neste steg.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
