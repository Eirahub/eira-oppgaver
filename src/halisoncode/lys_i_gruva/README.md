---
title: Lærerveiledning - Lys i gruva
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lar roboten gå gjennom en mørk gang med en mens-løkke (`gjenta hvis`)
til den kommer til en vegg eller lava. Inni løkka bruker de `robot lysnivå` og
en `hvis` til å sette en fakkel der det er mørkt. Til slutt lager de en funksjon
med lysgrensen som parameter, og teller faklene.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 6. til 10. trinn

__Tema__: Sensorer, mens-løkker, vilkår, og, funksjoner med parametere

__Nivå__: 2

__Tidsbruk__: En til to timer.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmer med bruk av
  variabler, vilkår og løkker

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan bruke en mens-løkke som stopper av seg selv.

- [ ] Elevene kan sette sammen to betingelser med `og`.

- [ ] Elevene kan forklare hvordan lyset blir svakere bort fra en fakkel.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få roboten til å gå til veggen og
  sette fakler der det er mørkt.

- [ ] Eleven oppnår høy måloppnåelse ved å stoppe for lava, lage `lys` med
  parameter og telle faklene.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: De tidligere oppgavene i kurset.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Gangen {.check}

- [ ] En ekte hule er ujevn, og roboten går bare rett frem. Den hule boksen fra
  `/fill`-tipset er enklest. Eleven må se mot øst når kommandoene skrives.

## Steg 3: Hvor tett? {.check}

- [ ] En fakkel gir lys 14 og lyset faller med 1 per blokk. Med grense 8 blir
  det en fakkel omtrent hver 7. blokk. La elevene regne før de tester.

## Steg 4: Er trygt {.check}

- [ ] `robot er trygt` er også usann ved et fall på mer enn 3 blokker eller en
  fiendtlig skapning rett ved. Da stopper roboten også.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Tilbake til spillet`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- Roboten går ikke: `ikke` mangler rundt `robot oppdag blokk fremover`.

- Faklene mangler: det er luft under blokken bak roboten, eller `robot velg
  plass 1` mangler.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
