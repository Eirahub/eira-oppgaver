---
title: Lærerveiledning - Verktøy og mat
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager et rubinsverd og et rubineple. De lager et verktøymateriale med
`ToolMaterial`, lærer at egenskaper ligger i `Item.Properties`, og at verken
sverd eller eple trenger egen klasse. Eplet bruker `FoodProperties` og
`Consumable` med effektene fart og nattsyn. Oppgaven går også gjennom
modellen `handheld`, reparasjonstagg og tagger for sverd.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 9. trinn til VG3

__Tema__: Tekstbasert programmering, Minecraft, items og egenskaper

__Nivå__: 4

__Tidsbruk__: Dobbeltime.

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2__: utvikle objektorienterte programmer med
  klasser, objekter, metoder og arv

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare at et verktøy får egenskapene sine fra et materiale.

- [ ] Elevene kan lage et sverd og et eple med `Item.Properties`.

- [ ] Elevene kan forklare forskjellen på `item/generated` og `item/handheld`.

- [ ] Elevene kan forklare hva tagger gjør for reparasjon og fortryllelser.

- [ ] Elevene kan omregne mellom tick og sekunder.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få sverdet og eplet til å virke i
  spillet.

- [ ] Eleven oppnår høy måloppnåelse ved å lage en rubinhakke i utfordringen og
  forklare hva det første argumentet til `ToolMaterial` bestemmer.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Tom mod til Malm. `RUBINMALM` brukes i
  fanen i steg 3, så eleven må ha fullført Malm (eller fjerne den linja).

- [ ] __Utstyr__: IntelliJ IDEA med Minecraft Development og JDK 25. Minecraft
  26.3 med Fabric.

- [ ] __Tegneverktøy__: PNG-redigering for to teksturer på 16 x 16 piksler.

- [ ] __Maskin__: Minst 8 GB minne.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Be elevene sjekke at forrige oppgave virker før de starter. Feil derfra
  gjør det vanskelig å finne feil i denne.

## Steg 1: Materiale {.check}

- [ ] Tallene i `ToolMaterial` er mange. La elevene lese kommentaren i koden, og
  gjette hva hver verdi gjør før de leser forklaringen.

- [ ] Imports er mange. `Alt + Enter` hjelper, men der det finnes flere
  klasser med samme navn, må de velge den som står i oppgaven.

## Steg 2 og 3: Sverd og eple {.check}

- [ ] Sverdet er bare et `Item` med `sword(...)`. Elever tror ofte at de må
  lage en egen klasse.

- [ ] Eplet har mange innebygde klasser. Gå gjennom koden linje for linje.

- [ ] Tick: 20 per sekund. Be elevene regne ut 600 tick.

- [ ] Fart II tilsvarer nivå `1`, siden nivåene teller fra 0.

## Steg 4: Filer {.check}

- [ ] Sverdet bruker `handheld`, eplet bruker `generated`. Feil gir et sverd som
  ligger flatt eller et eple i en rar vinkel.

- [ ] Reparasjonstaggen ligger under `data/rubinmod/tags/item`, mens sverdtaggen
  ligger under `data/minecraft/tags/item`.

## Steg 5 og 6: Oppskrifter og test {.check}

- [ ] Be elevene prøve oppskriften i overlevelse. Sverdet trenger to rubiner og
  en pinne.

- [ ] La elevene slite på sverdet og reparere det med en rubin i en ambolt.

## Vanlige problemer {.protip}

- Spillet krasjer ved oppstart: manglende `setId`, eller en tagg som peker på en
  fil som ikke finnes.

- Svart og lilla rute: filnavn eller mappenavn er feil.

- Eplet virker ikke: `alwaysEdible()` mangler, og eleven er mett.

- Sverdet gjør ingen skade: `sword(...)` mangler, eller materialet er feil.

- Importen av `BlockTags` mangler eller kommer fra feil pakke.


# Variasjoner {.activity}

- La elevene lage en rubinhakke, som i utfordringen.

- La elevene justere tallene i materialet og sammenligne.

- La sterke elever lage et rubinsett i flere deler.


# Fasit {.activity}

`steg/06_verktoy_og_mat` i løsningsrepoet. <!-- LENKE: løsningsrepo -->


# Eksterne ressurser {.activity}

- [Fabric](https://fabricmc.net/): dokumentasjon for Fabric.
