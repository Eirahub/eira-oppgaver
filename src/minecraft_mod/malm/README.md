---
title: Lærerveiledning - Malm
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager rubinmalm som dukker opp under bakken i nye verdener. Malmen er en
`DropExperienceBlock` med en loot table som gir rubin, eller malmen selv med
silkeberøring. Hvordan malmen legges ut, står i to JSON-filer under `worldgen`.
Én setning Java med Fabric API legger den inn i alle biomer i oververdenen.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Tekstbasert programmering, Minecraft, datafiler (JSON)

__Tidsbruk__: Dobbeltime

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare forskjellen på en feature og en placed feature.

- [ ] Elevene kan endre hvor mye malm det er, og i hvilken høyde den finnes.

- [ ] Elevene kan lese en loot table med `alternatives` og forklare hvorfor
  silkeberøring gir malmen.

- [ ] Elevene kan forklare hvorfor malmen bare finnes i nye deler av verden.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å fullføre oppgaven.

- [ ] Eleven oppnår høy måloppnåelse ved å lage malm i dypskifer, som i
  utfordringen.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Tom mod til Kloss.

- [ ] __Utstyr__: IntelliJ IDEA med Minecraft Development, og JDK 25.


# Fasit {.activity}

`steg/05_malm` i løsningsrepoet. <!-- LENKE: løsningsrepo -->


# Vanlige problemer {.activity}

## Sjekkliste {.check}

- [ ] __Finner ingen malm__: Eleven bruker en gammel verden. Malm lages bare i
  nye chunks. Lag en ny verden.

- [ ] __Verdenen vil ikke lages__: Skrivefeil i en fil under `worldgen`. Loggen
  sier hvilken fil. Vanlige feil er `configured_feature` i stedet for `feature`,
  og feil id i `"feature"` i placed feature-fila.

- [ ] __Malmen dropper ingenting__: Malmen mangler i taggene `mineable/pickaxe`
  og `needs_iron_tool`, eller eleven bruker for dårlig hakke.

- [ ] __Malmen dropper seg selv uten silkeberøring__: Rekkefølgen i `children`
  er byttet om, eller `condition` står på feil element.

## Tips {.protip}

Tilskuermodus (`/gamemode spectator`) gjør det lett å se malmen under bakken.
Vil elevene sammenligne, kan de lage to verdener med samme seed før og etter en
endring i `count` eller `height_range`.
