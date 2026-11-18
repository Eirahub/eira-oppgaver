---
title: Lærerveiledning - Gradle og feilsøking
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager et Gradle-prosjekt i IntelliJ, leser en stack trace, finner
årsaken med debuggeren, leser kildekoden til `Map.get` med `Ctrl + klikk` og
bygger en `.jar`-fil. Dette er arbeidsmåten de trenger når de senere lager
utvidelser til spill i Java, der de starter fra et ferdig Gradle-prosjekt og
leser mye kode de ikke har skrevet selv.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Byggeverktøy, feilsøking, debugger

__Tidsbruk__: Dobbeltime

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan lage og bygge et Gradle-prosjekt i IntelliJ.

- [ ] Elevene kan lese en stack trace og finne linjen der feilen skjedde.

- [ ] Elevene kan sette brytpunkt, gå gjennom kode og lese variabler i
  debuggeren.

- [ ] Elevene kan bruke `Ctrl + klikk` for å lese kode i biblioteker.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å finne og rette feilen og bygge
  jar-filen.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare hvorfor `kloss` ble `null`,
  med henvisning til dokumentasjonen for `Map.get`.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgave 6 til 9 i kurset.

- [ ] __Utstyr__: IntelliJ IDEA og JDK 25. Første gang Gradle kjører, laster det
  ned omtrent 150 MB. Sørg for nettilgang, eller kjør det på forhånd.


# Fasit {.activity}

Mappa `klossverden-gradle` i oppgaven er et ferdig prosjekt med feilen rettet.
Den har bare de filene eleven skriver selv: `settings.gradle.kts`,
`build.gradle.kts` og koden i `src/main/java/klossverden`.

Gradle-wrapperen (`gradlew`, `gradlew.bat` og mappa `gradle`) er ikke med.
IntelliJ lager den når eleven lager prosjektet i steg 1. Vil du åpne fasiten
direkte, velger du **File**, **Open** og mappa `klossverden-gradle`. IntelliJ
kjenner igjen Gradle-prosjektet og laster ned Gradle selv.

Fasiten er bygd med Gradle 9.9 og JDK 25.


# Vanlige problemer {.activity}

## Sjekkliste {.check}

- [ ] __`IO` er rødt, eller feil om `release 25`__: Prosjektet bruker en eldre
  JDK. Velg **File**, **Project Structure**, og sett **SDK** til `25`. Sjekk
  også **File**, **Settings**, **Build, Execution, Deployment**, **Build
  Tools**, **Gradle**, og sett **Gradle JVM** til `25`.

- [ ] __Gradle henger på nedlasting__: Skolenettet kan stoppe nedlastingen. Prøv
  et annet nett.

- [ ] __Ingen elefant øverst til høyre__: Trykk `Ctrl + Shift + O`, eller klikk
  på oppdateringsknappen i **Gradle**-vinduet.

- [ ] __`Ctrl + klikk` viser en fil uten kommentarer__: IntelliJ viser
  dekompilert kode når kildekoden mangler. Klikk **Download Sources** eller
  **Choose Sources** øverst i filen.
