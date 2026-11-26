---
title: Lærerveiledning - Byggeren
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene bruker den usynlige byggeren (`bygger flytt`, `bygger snu`, `bygger sett
merke`, `bygger linje fra merke med` og `bygger fyll fra merke med`) som en
skilpadde. De bygger en rad, en firkant, en mur med en løkke inni en løkke, et
tårn med funksjonen `byggTårn` og to parametere, og til slutt et slott.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 6. til 10. trinn

__Tema__: Nøstede løkker, funksjoner med parametere, geometri

__Nivå__: 2

__Tidsbruk__: En til to timer.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 6. trinn__: bruke variabler, løkker, vilkår og funksjoner i
  programmering til å utforske geometriske figurer og mønstre

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: analysere problemer, gjøre dem om til
  delproblemer og gjøre rede for hvordan noen av delproblemene kan løses med
  programmering

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan beskrive en firkant som fire like sider og fire
  snuoperasjoner.

- [ ] Elevene kan bruke en løkke inni en løkke til å bygge i flere lag.

- [ ] Elevene kan dele et slott opp i delproblemer: tårn og mur.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å bygge firkanten og muren med
  løkker.

- [ ] Eleven oppnår høy måloppnåelse ved å lage `byggTårn` med parametere og
  bygge slottet med en port.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: De tidligere oppgavene i kurset.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Steg 1: Retningen {.check}

- [ ] Byggeren ser alltid mot sør når programmet starter, ikke dit eleven ser. I
  chatkommandoene snus den med `bygger vend mot øst`.

## Steg 2: Én for mye {.check}

- [ ] En linje fra merket til byggeren tar med begge endene. Går byggeren 6,
  blir siden 7 blokker. Hjørnene blir lagt to ganger, men det gjør ingenting.

## Skilpaddegrafikk {.check}

- [ ] Har elevene brukt `turtle` i Python, kan de sammenligne: `forward` er
  `bygger flytt fremover`, `right(90)` er `bygger snu høyre`.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Tilbake til spillet`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- Tårnet havner på feil sted: `bygger teleporter til ~2 ~0 ~2` mangler, så
  byggeren starter der den var sist.

- Ingenting skjer: roboten må være innenfor 32 blokker. Skriv `/robot spawn` før
  `slott`.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
