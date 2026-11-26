---
title: "Lærarrettleiing - Diamantvarslaren"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Om oppgåva {.activity}

Elevane møter hendingar som ikkje er chatkommandoar. Programmet seier frå i
chatten når eleven knuser diamantmalm, gull og jern, tel diamantane i ein
variabel og seier god morgon når ein ny dag byrjar.

## Oppgåva passar til: {.check}

__Fag__: Programmering, teknologi

__Tilrådde trinn__: 5. til 10. trinn

__Tema__: Hendingar, variablar, teljarar, Minecraft

__Nivå__: 1

__Tidsbruk__: Omtrent ein time.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmar med bruk av
  variablar, vilkår og lykkjer

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

## Forslag til læringsmål {.challenge}

- [ ] Elevane kan forklare kva ei hending er.

- [ ] Elevane kan bruke ein variabel som teljar.

- [ ] Elevane kan forklare at eit program med hendingar køyrer til det blir
  stoppa.

## Forslag til vurderingskriterium {.challenge}

- [ ] Eleven oppnår middels måloppnåing ved å få ei melding i chatten for kvar
  malm.

- [ ] Eleven oppnår høg måloppnåing ved å telje diamantane og nullstille
  teljaren kvar morgon.

## Føresetnader og utstyr {.challenge}

- [ ] __Føresetnader__: Oppgåva Kom i gang.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og ein
  nettlesar. Sjå oppgåva Installere Halison Code.


# Framgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgåva sjølv i same Minecraft-versjon som elevane brukar.

## Steg 1 og 2: Øydelagde blokker {.check}

- [ ] Berre blokker spelaren sjølv knuser, tel. Blokker roboten knuser, gir
  inga melding. Det er poenget med testen i steg 2.

- [ ] Djupt i verda er malmen ofte djupsteinsvarianten (`Deepslate Diamond
  Ore`). Han er ei anna blokk og gir inga melding. I skapande modus set elevane
  ut vanleg diamantmalm frå inventaret.

## Steg 4: Ny dag {.check}

- [ ] `/time set night` og så `/time set day` gir ein ny dag. `/time add` med
  eit heilt døgn gjer det ikkje. Står klokka alt på morgonen, skjer ingenting.

## Vanlege problem {.protip}

- Programma er borte: dei blir lagra i nettlesaren på maskina eleven brukte.
  Opne editoren i same nettlesar, eller hent inn `.mkcd`-fila eleven lagra med
  `Hent inn` på startsida. På maskiner som blir nullstilte, må elevane lagre
  prosjektet som fil før timen er slutt.

- Roboten står stille etter at eleven bytte vindauge: Minecraft er på pause.
  Trykk `Attende til spelet`. `F3` + `P` slår av pause når vindauget mistar
  fokus, og `/gamerule halisoncode:pause_on_lost_focus false` gjer det for heile
  verda.

- Inga melding kjem: programmet må køyre og editoren stå open. Trykk `Kjør` i
  editoren før eleven byter til Minecraft.

- Teljaren byrjar på 0 igjen: han blir nullstilt kvar gong programmet blir køyrt
  på nytt, og kvar morgon i steg 4.


# Eksterne ressursar {.activity}

- [Rettleiing for
  spelarar](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoar.
