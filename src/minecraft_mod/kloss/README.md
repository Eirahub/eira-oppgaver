---
title: Lærerveiledning - Kloss
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager en rubinkloss. De lærer forskjellen på `Block` og `BlockItem`, og
lager klassen `ModBlocks`, tekstur, blockstate, modell, navn, loot table, tagger
(`mineable/pickaxe` og `needs_iron_tool`) og oppskrifter begge veier. Oppgaven
viser hvor mange filer en kloss trenger, og hvordan datafiler styrer hva klossen
dropper og hvilket verktøy som trengs.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Tekstbasert programmering, Minecraft, klosser, datafiler

__Nivå__: 3

__Tidsbruk__: Dobbeltime. Mange filer, så regn gjerne med lengre tid.

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 1__: gjøre rede for og vurdere hvordan ulike typer
  informasjon kan representeres digitalt og struktureres ved hjelp av ulike
  datalagringsmetoder

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare forskjellen på en `Block` og en `BlockItem`.

- [ ] Elevene kan forklare hva en blockstate og en loot table er.

- [ ] Elevene kan forklare hva en tagg er, og bruke taggene til å styre hvilket
  verktøy en kloss trenger.

- [ ] Elevene kan lage oppskrifter begge veier.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få klossen til å virke i spillet,
  med riktig tekstur, navn og oppskrift.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare hvorfor klossen ikke dropper
  noe med steinhakke, og ved å løse en utfordring.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Tom mod, Oppskrift og Gjenstand.

- [ ] __Utstyr__: IntelliJ IDEA med Minecraft Development og JDK 25. Minecraft
  26.3 med Fabric.

- [ ] __Tegneverktøy__: Et program som kan lagre PNG på 16 x 16 piksler, for
  eksempel Piskel.

- [ ] __Maskin__: Minst 8 GB minne. Spillet startes fra IntelliJ.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Gjør oppgaven selv, og legg merke til at det er mange små filer. Be
  elevene ha en sjekkliste.

## Steg 1: ModBlocks {.check}

- [ ] Elever glemmer å kalle `ModBlocks.init()`. Da blir klossen aldri
  registrert, og ingenting vises.

- [ ] `init()` er tom med vilje. Forklar hvorfor det likevel trengs: klassen må
  brukes for at feltene lages.

- [ ] Klossen må med i `displayItems`-lista i fanen.

## Steg 2: Filer {.check}

- [ ] Mappa for teksturen heter `block`, ikke `item`.

- [ ] Fire filer: tekstur, blockstate, blokkmodell og `items`-fil. Mangler en av
  dem, blir klossen en svart og lilla rute.

## Steg 3: Navn {.check}

- [ ] Klosser bruker `block.` foran navnet, ikke `item.`.

- [ ] Komma mellom linjene i språkfilene, men ikke etter siste.

## Steg 4 og 5: Loot table og tagger {.check}

- [ ] Uten loot table forsvinner klossen når den hakkes ut.

- [ ] Taggfilene ligger under `data/minecraft`, ikke `data/rubinmod`. Be elevene
  forklare hvorfor.

- [ ] Mappene heter `tags/block` og `loot_table`, i entall. Eldre veiledninger
  bruker andre navn.

## Steg 6 og 7: Oppskrifter og test {.check}

- [ ] Be elevene teste både med jernhakke, steinhakke og bare nevene i
  overlevelse.

- [ ] Elever glemmer å skifte til overlevelse, og ser derfor ikke forskjellen.

## Vanlige problemer {.protip}

- Svart og lilla rute: en av filene mangler, eller har feil navn.

- Klossen dropper ingenting med jernhakke: taggene mangler, eller mappenavnet
  er feil.

- Klossen dropper seg selv med feil hakke: `requiresCorrectToolForDrops()`
  mangler.

- Spillet krasjer ved oppstart: `setId` mangler, eller id-en brukes to ganger.

- Klossen i inventaret ser flat ut: `items/rubinkloss.json` peker på feil
  modell.


# Variasjoner {.activity}

- La elevene gjøre klossen lysende, og prøve andre lyder.

- La elevene lage en kloss til og diskutere hvilke filer som må kopieres.

- La sterke elever sammenligne taggene `needs_iron_tool` og
  `needs_diamond_tool`.


# Fasit {.activity}

`steg/04_kloss` i løsningsrepoet. <!-- LENKE: løsningsrepo -->


# Eksterne ressurser {.activity}

- [Piskel](https://www.piskelapp.com/): tegning av teksturer.

- [Fabric](https://fabricmc.net/): dokumentasjon for Fabric.
