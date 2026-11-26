---
title: "Lærarrettleiing - Redstone-knappen"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Om oppgåva {.activity}

Elevane brukar hendinga `når roboten får redstonesignal`. Roboten går eitt steg
kvar gong eleven trykkjer på ein knapp ved sida av han. Til slutt brukar dei
`hvis ... ellers` og `robot oppdag blokk fremover`, så roboten snur når noko
står i vegen.

## Oppgåva passar til: {.check}

__Fag__: Programmering, teknologi

__Tilrådde trinn__: 5. til 10. trinn

__Tema__: Hendingar, redstone, viss og elles, sensorar

__Nivå__: 1

__Tidsbruk__: Omtrent ein time.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmar med bruk av
  variablar, vilkår og lykkjer

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

## Forslag til læringsmål {.challenge}

- [ ] Elevane kan forklare kva ei hending er.

- [ ] Elevane kan bruke ein sensor og viss og elles til å velje handling.

- [ ] Elevane kan forklare at berre eit nytt signal startar hendinga.

## Forslag til vurderingskriterium {.challenge}

- [ ] Eleven oppnår middels måloppnåing ved å få roboten til å gå langs ei rad
  med knappar.

- [ ] Eleven oppnår høg måloppnåing ved å få roboten til å snu ved ei blokk og
  forklare kvifor ein knapp berre verkar når roboten står ved sida av han.

## Føresetnader og utstyr {.challenge}

- [ ] __Føresetnader__: Oppgåva Kom i gang.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og ein
  nettlesar. Sjå oppgåva Installere Halison Code.


# Framgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgåva sjølv i same Minecraft-versjon som elevane brukar.

## Steg 1 og 2: Signalet {.check}

- [ ] Hendinga køyrer når blokka roboten står i, går frå inkje signal til eit
  signal. Etter eitt steg er knappen ikkje lenger ved sida av roboten. Difor
  treng elevane ei rad med knappar.

- [ ] Berre standardroboten (frå `/robot spawn` utan namn) har hendinga.
  Robotar med namn reagerer ikkje.

- [ ] Ein robot som alt har signal når programmet startar, tel ikkje.

## Steg 3: Snu {.check}

- [ ] Etter at roboten har snudd, står han framleis ved den same knappen. Eit
  nytt trykk sender han vidare i den nye retninga.

## Vanlege problem {.protip}

- Programma er borte: dei blir lagra i nettlesaren på maskina eleven brukte.
  Opne editoren i same nettlesar, eller hent inn `.mkcd`-fila eleven lagra med
  `Hent inn` på startsida. På maskiner som blir nullstilte, må elevane lagre
  prosjektet som fil før timen er slutt.

- Roboten står stille etter at eleven bytte vindauge: Minecraft er på pause.
  Trykk `Attende til spelet`. `F3` + `P` slår av pause når vindauget mistar
  fokus, og `/gamerule halisoncode:pause_on_lost_focus false` gjer det for heile
  verda.

- Ingenting skjer når eleven trykkjer: programmet må køyre og editoren stå
  open, og knappen må stå rett ved sida av roboten, ikkje på skrå.

- Ein spak gir berre eitt steg når han blir slått på. Eleven må slå han av og
  på igjen for neste steg.


# Eksterne ressursar {.activity}

- [Rettleiing for
  spelarar](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoar.
