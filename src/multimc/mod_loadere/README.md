---
title: Lærerveiledning - Mod-loadere
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lærer forskjellen på Fabric, NeoForge, Forge og Quilt, og lager fire
instanser i gruppa `Rubinmod-test`: Fabric og NeoForge for både Minecraft 26.3
og 1.21.11. De installerer loaderne fra MultiMC og legger Fabric API til som
vanlig mod.

## Oppgaven passer til: {.check}

__Fag__: Teknologi, informasjonsteknologi, valgfag programmering

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Minecraft, mod-loadere, avhengigheter

__Nivå__: 2

__Tidsbruk__: Omtrent en dobbeltime. Fire instanser betyr flere nedlastinger.

## Kompetansemål {.challenge}

Kompetansemål er ikke knyttet til oppgaven ennå. Hent eventuelle mål fra
[læreplanen i informasjonsteknologi på
udir.no](https://www.udir.no/lk20/inf01-02) som passer for gruppa.

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hva en mod-loader er, og hvorfor en mod er laget for
  én loader.

- [ ] Elevene kan installere Fabric og NeoForge i en instans.

- [ ] Elevene kan forklare hva en avhengighet er, og hvorfor Fabric API må
  ligge i `mods`-mappa.

- [ ] Elevene kan forklare hvorfor man lager en ny instans i stedet for å bytte
  versjon i en instans med loader.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å lage de fire instansene og
  starte dem.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare forskjellen på loaderne, og
  ved å løse utfordringene med Mod Menu og en mod for begge loadere.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Installasjon, Java for Minecraft og
  Instanser og versjoner.

- [ ] __Utstyr__: MultiMC, Java 25 og Java 21, og minst 8 GB minne på maskinen.
  Oppgaven foreslår 4096 MB per instans.

- [ ] __Nett__: Tilgang til modrinth.com for Fabric API.

- [ ] __Konto__: Microsoft-konto som eier Minecraft Java Edition.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Sjekk at Fabric API finnes for Minecraft 26.3 og 1.21.11 på Modrinth. Det
  er den hyppigste kilden til feil i denne oppgaven.

- [ ] Sjekk at Install Fabric og Install NeoForge finnes under Version i din
  utgave av MultiMC, og at begge loaderne finnes for versjonene.

## Steg 1 og 2: Fabric {.check}

- [ ] Elever velger ofte feil versjon av Fabric API. Be dem se på både
  Minecraft-versjon og loader i fanen Versions.

- [ ] Hvis spillet ikke starter etter at Fabric API er lagt til, åpne loggen og
  se etter `requires` eller `missing`.

## Steg 3: NeoForge {.check}

- [ ] Elevene kopierer Fabric-instansen. Sjekk at de fjerner både Fabric Loader
  og Fabric API før NeoForge installeres.

- [ ] Knappen Mods i hovedmenyen til NeoForge viser lista over modder, og
  hjelper til å se hva som er lastet.

## Steg 4: Instanser for 1.21.11 {.check}

- [ ] Bruk ny instans, ikke bytte av versjon, når loader er installert.

- [ ] Sjekk at elevene velger Java 21 for 1.21.11-instansene.

## Vanlige problemer {.protip}

- Fabric API for feil Minecraft-versjon: spillet starter ikke, og loggen sier at
  en avhengighet mangler eller ikke passer.

- To loadere i samme instans: en instans kan bare ha én loader. Fjern den ene.

- Install-knappen er grå: loaderen finnes ikke for versjonen i instansen.

- Mange instanser på samme maskin: sjekk diskplass og minne, og start én av
  gangen.


# Variasjoner {.activity}

- La elevene sammenligne hvilke versjoner hver loader støtter.

- La en gruppe prøve Quilt og rapportere hva som skiller den fra Fabric.

- La elevene finne en mod som bare finnes for én loader, og forklare hva det
  betyr for spillerne.


# Eksterne ressurser {.activity}

- [Fabric](https://fabricmc.net/): nettsida til Fabric.

- [NeoForged](https://neoforged.net/): nettsida til NeoForge.

- [Modrinth](https://modrinth.com): modder, også Fabric API.
