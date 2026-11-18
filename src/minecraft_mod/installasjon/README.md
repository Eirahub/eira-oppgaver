---
title: Lærerveiledning - Lag din egen Minecraft-mod
author: Tor Einar Enne
language: nb
---


# Om kurset {.activity}

Elevene lager en mod til Minecraft Java Edition med Fabric, i Java og IntelliJ
IDEA. Hele kurset bygger på én mod, `rubinmod`, som får rubiner, en kloss, malm
i verden, et sverd, et eple, et vesen og en stav som sender lyn. Hver oppgave
bygger videre på koden fra forrige oppgave.

## Kurset passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Tekstbasert programmering, objektorientert programmering, Minecraft

__Tidsbruk__: Omtrent én dobbeltime per oppgave. Malm, vesen og oppførsel kan ta
to.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Kurset [Java](https://oppgaver.kidsakoder.no/java),
  særlig delen **Java for moddere**. Elevene bør kjenne klasser, arv og
  `@Override`, lister og lambdaer.

- [ ] __Utstyr__: Datamaskin med Windows, macOS eller Linux, minst 8 GB minne,
  IntelliJ IDEA med Minecraft Development og JDK 25. Nettbrett og Chromebook
  fungerer ikke.

- [ ] __Minecraft__: Utviklingen (`runClient`) krever ingen Minecraft-konto.
  Elevene trenger Minecraft Java Edition bare for å spille med moden i vanlig
  Minecraft etterpå.


# Før første time {.activity}

## Sjekkliste {.check}

- [ ] Installer IntelliJ, Minecraft Development og JDK 25 på alle maskinene på
  forhånd.

- [ ] Åpne startprosjektet (`steg/01_tom_mod` i løsningsrepoet) på hver maskin
  og kjør `runClient` én gang. Første gang laster Gradle ned Minecraft og flere
  hundre MB med biblioteker. Det går tregt når 30 elever gjør det samtidig.

  <!-- LENKE: løsningsrepo -->

- [ ] Sjekk at skolenettet slipper gjennom nedlastinger fra `maven.fabricmc.net`
  og fra Mojang sine servere. Gradle og Fabric Loom henter filer derfra.

- [ ] Prøv oppgave 1 selv på en elevmaskin.

## Tips {.protip}

Gradle lagrer nedlastingene i mappa `.gradle` i hjemmemappa til brukeren. Har
elevene felles bruker, eller nullstilles maskinen ved utlogging, må nedlastingen
gjøres på nytt hver gang.


# Fasit {.activity}

Løsningsrepoet har ett ferdig prosjekt per oppgave, i mappene `steg/01_tom_mod`
til `steg/08_oppforsel`. Hvert prosjekt kan åpnes for seg i IntelliJ og kjøres
med `runClient`. Kodekommentarene forklarer Minecraft og Fabric.

<!-- LENKE: løsningsrepo -->

Mappa `src/gametest` i hvert steg er ikke en del av oppgaven. Den brukes til å
teste stegene og ta bildene til kurset.


# Vanlige problemer {.activity}

## Sjekkliste {.check}

- [ ] __"Dependency requires at least JVM runtime version 25"__: Gradle kjører
  med en eldre Java. Velg Java 25 under **Settings**, **Build, Execution,
  Deployment**, **Build Tools**, **Gradle**, **Gradle JVM**.

- [ ] __Ingen runClient__: Eleven har åpnet feil mappe. Mappa som åpnes, må
  inneholde `build.gradle.kts`.

- [ ] __Veiledninger fra nettet virker ikke__: De fleste er skrevet for
  Minecraft 1.20 eller 1.21. Mye har endret seg: `Identifier` het
  `ResourceLocation`, mappa `recipe` het `recipes`, og items må få id med
  `setId` før de lages. Be elevene sjekke versjonen før de kopierer kode.

- [ ] __Norsk tekst vises ikke__: Språkfila skal hete `no_no.json`, ikke
  `nb_no.json`.


# Videre arbeid {.activity}

To oppgaver kommer senere: én om å lage moden for både Fabric og NeoForge, og én
om å lage den for flere Minecraft-versjoner. Elever som er ferdige, kan prøve
utfordringene i hver oppgave, eller lage sin egen mod fra bunnen av.
