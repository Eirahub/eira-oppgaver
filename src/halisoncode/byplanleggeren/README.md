---
title: Lærerveiledning - Byplanleggeren
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene gjør huset fra Bygg et hus flyttbart med en parameter `x`, og lager en
funksjon `ledig` som sjekker tomta før roboten bygger. Den bruker
`agent.isAreaFree` og `agent.countSolid` for å se om noe står i veien, og
`agent.groundHeight` i fire hjørner for å se om bakken er flat. Så bygger en
løkke en hel gate med grusvei, hopper over tomter som ikke er ledige, og lagrer
posisjonene i to lister. Oppgaven er i JavaScript.

Oppgaven bruker en flat verden. Der er bakken lik overalt, så hver tomt som blir
hoppet over, skyldes noe eleven selv har satt i veien eller gravd bort. Det gjør
det lett å teste og feilsøke. Utfordringen tar oppgaven over i en vanlig verden.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, matematikk

__Anbefalte trinn__: 8. til 10. trinn

__Tema__: Funksjoner som svarer sann eller usann, vilkår, løkker, lister med
posisjoner

__Nivå__: 3

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

- [ ] Elevene kan lage en funksjon som svarer sann eller usann, og bruke den i
  en `if`.

- [ ] Elevene kan regne ut hvor neste hus skal stå med en formel i en løkke.

- [ ] Elevene kan lagre posisjoner i en liste og skrive dem ut.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å bygge en gate der roboten hopper
  over en tomt med noe i veien.

- [ ] Eleven oppnår høy måloppnåelse ved å sjekke hele bakken med to løkker og
  forklare formelen `2 + i * (bredde + 3)`.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Bygg et hus og Terrengplanereren.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. En flat verden (Superflat) i Kreativ.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Steg 2 og 3: Sjekk tomta {.check}

- [ ] `isAreaFree` sjekker bare over bakken (høyde 0 til 3). Et hull finner den
  ikke. Derfor trengs `groundHeight`.

- [ ] Med bare fire hjørner blir et hull midt på tomta ikke oppdaget. Det er
  meningen. Utfordringen løser det.

## Steg 4: Gaten {.check}

- [ ] Roboten må være innenfor 32 blokker fra alt den bygger og måler. Derfor
  går den til `pos(x, 0, 0)` før hver tomt.

- [ ] `pos` er målt fra føttene til eleven. Går eleven mens roboten bygger,
  havner resten av gaten et annet sted.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Tilbake til spillet`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- Alle tomtene er "ikke flat": eleven står ikke på bakken, men på en blokk eller
  i lufta. Bakken skal være én under føttene.

- Husene bygges inni hverandre: gamle hus fra steg 1 står i veien. Gå til et
  nytt sted.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
