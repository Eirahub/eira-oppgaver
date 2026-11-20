---
title: Java for Minecraft
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Minecraft Java Edition er skrevet i programmeringsspråket Java. For å kjøre
spillet trenger datamaskinen et program som heter **Java**. Hver
Minecraft-versjon trenger en bestemt Java-versjon. Har du feil Java, starter
ikke spillet, eller det krasjer med en melding som er vanskelig å forstå.

Den vanlige Minecraft Launcher har med seg riktig Java. Det har ikke MultiMC.
Der installerer du Java selv, og velger hvilken Java hver instans skal bruke.

I denne oppgaven lærer du:

- hvilken Java hver Minecraft-versjon trenger

- forskjellen på JDK og JRE

- å installere Java fra Eclipse Temurin på Windows og macOS

- å ha flere Java-versjoner på samme maskin, og velge riktig i MultiMC

- å kjenne igjen feilmeldingene du får med feil Java


# Steg 1: Hvilken Java trenger du? {.activity}

| Minecraft-versjon  | Java           |
| ------------------ | -------------- |
| 26.1 og nyere      | 25             |
| 1.20.5 til 1.21.11 | 21             |
| 1.18 til 1.20.4    | 17             |
| 1.17 og 1.17.1     | 16 (17 virker) |
| 1.12 til 1.16.5    | 8              |

Tabellen gjelder også snapshots: den første versjonen som trenger ny Java, er et
snapshot litt før den store versjonen. Kilde: [Minecraft
Wiki](https://minecraft.wiki/w/Tutorials/Update_Java) og
[MultiMC-wikien](https://github.com/MultiMC/Launcher/wiki/Using-the-right-Java).

Minecraft startet med nye versjonsnumre i 2026. Etter 1.21.11 kom 26.1. Det
første tallet er året.

## Nyere er ikke alltid bedre {.tip}

En nyere Java kan ofte kjøre en eldre Minecraft. Mod-loadere for gamle versjoner
tåler det dårligere. Forge for 1.16.5 og eldre krasjer gjerne med noe nyere enn
Java 8. Bruk derfor Java-versjonen fra tabellen.

## Sjekkliste {.check}

- [ ] Skriv ned hvilke Minecraft-versjoner du vil teste. Hvilke Java-versjoner
  trenger du? Moden i kurset [Lag din egen Minecraft-mod](../../minecraft_mod)
  bruker 26.3 og 1.21.11, og da trenger du Java 25 og Java 21.


# Steg 2: JDK, JRE og Temurin {.activity}

Java finnes i to pakker:

- **JRE** (Java Runtime Environment) kan bare kjøre Java-programmer, som
  Minecraft.

- **JDK** (Java Development Kit) kan også lage Java-programmer. Den har alt JRE
  har, og i tillegg kompilatoren.

Skal du bare spille, holder JRE. Lager du modder, trenger du JDK uansett. Kurset
bruker JDK, så du slipper å ha begge.

Java lages av mange. Selve koden heter **OpenJDK** og er åpen kildekode. Flere
lager ferdige pakker av den. Kurset bruker **Eclipse Temurin** fra prosjektet
**Adoptium**, fordi den:

- er gratis, også for skoler og klubber

- er åpen kildekode, bygget fra OpenJDK

- blir testet grundig før hver utgave

- finnes for Windows, macOS og Linux, og for alle Java-versjonene i tabellen

Oracle Java, Microsoft Build of OpenJDK og Azul Zulu virker også. Velg én og
hold deg til den.


# Steg 3: Installer Java på Windows {.activity}

Du kan velge mellom installasjonsprogrammet fra nettsida og kommandoen `winget`.
Begge gir det samme.

## Med installasjonsprogrammet {.check}

- [ ] Gå til [adoptium.net](https://adoptium.net/temurin/releases/).

- [ ] Velg **Windows**, **x64**, pakken **JDK** og versjonen du trenger, for
  eksempel **25**. Last ned `.msi`-fila.

- [ ] Start fila og klikk deg gjennom. Det går fint å la alle valgene stå som de
  er.

- [ ] Gjenta for hver Java-versjon du trenger, for eksempel 21.

## Med winget {.check}

`winget` følger med Windows 10 og 11. Åpne **Terminal** eller **PowerShell** og
skriv én linje for hver versjon du trenger:

```
winget install EclipseAdoptium.Temurin.25.JDK
winget install EclipseAdoptium.Temurin.21.JDK
winget install EclipseAdoptium.Temurin.17.JDK
winget install EclipseAdoptium.Temurin.8.JDK
```

Windows spør kanskje om lov til å installere. Svar ja.

<!-- BILDE: Nedlastingssiden på adoptium.net med Windows, x64, JDK og versjon 25
valgt -->


# Steg 4: Installer Java på macOS {.activity}

## Sjekkliste {.check}

- [ ] Gå til [adoptium.net](https://adoptium.net/temurin/releases/).

- [ ] Velg **macOS**, pakken **JDK** og versjonen du trenger. Last ned
  `.pkg`-fila, start den og klikk deg gjennom.

- [ ] Har du en Mac med Apple-prosessor (M1, M2 og nyere)? MultiMC-wikien sier
  at MultiMC ikke støtter Java for ARM ennå. Velg da **x64** i stedet for
  **aarch64**. Macen kjører den likevel.

- [ ] Gjenta for hver Java-versjon du trenger.

## Med Homebrew {.protip}

Bruker du allerede [Homebrew](https://brew.sh), kan du installere Temurin med
`brew install --cask temurin@25` (og `temurin@21`, `temurin@17` eller
`temurin@8`). Homebrew installerer den versjonen som passer prosessoren, så på
en Mac med Apple-prosessor får du ARM-utgaven.


# Steg 5: Sjekk hvilken Java du har {.activity}

## Sjekkliste {.check}

- [ ] Åpne en ny terminal (PowerShell på Windows, Terminal på macOS) og skriv:

  ```
  java -version
  ```

- [ ] Du får noe som dette. Tallene bak punktumene blir litt annerledes hos deg:

  ```
  openjdk version "25.0.1" 2025-10-21 LTS
  OpenJDK Runtime Environment Temurin-25.0.1 (build 25.0.1-LTS)
  ```

  Det første tallet etter `version` er Java-versjonen. Gamle Java 8 skriver
  `1.8.0_...`.

Terminalen viser bare **én** Java, den som ligger først i `PATH`. De andre er
installert likevel. På Windows ligger de hver i sin mappe under `C:\Program
Files\Eclipse Adoptium\`, i mapper som begynner med `jdk-25`, `jdk-21` og så
videre. På macOS ligger de under `/Library/Java/JavaVirtualMachines/`.

Står det at `java` ikke finnes, lukker du terminalen og åpner en ny. Hjelper
ikke det, ble Java installert uten å legges i `PATH`. Det gjør ikke noe for
MultiMC.


# Steg 6: Velg Java i MultiMC {.activity}

MultiMC har én Java som gjelder for alle instanser, og du kan velge en annen
Java for hver instans.

## Felles Java for alle instanser {.check}

- [ ] Klikk på **Settings** i verktøylinja øverst, og velg **Java**.

- [ ] Klikk **Auto-detect...**. MultiMC viser alle Java-installasjonene den
  finner, med versjonsnummer. Velg den nyeste, for eksempel 25.

- [ ] Klikk **Test** for å sjekke at den virker.

## Egen Java for én instans {.check}

- [ ] Marker instansen og klikk **Edit Instance**.

- [ ] Velg **Settings** i lista til venstre, og fanen **Java**.

- [ ] Kryss av for **Java installation**. Da gjelder valget bare denne
  instansen.

- [ ] Klikk **Auto-detect...** og velg riktig Java fra tabellen i steg 1. Finnes
  den ikke i lista, klikker du **Browse...** og velger `javaw.exe` i `bin`-mappa
  til Java (på macOS og Linux `bin/java`).

- [ ] Klikk **Test Java Settings**.

<!-- BILDE: Edit Instance i MultiMC med Settings og fanen Java åpen. Java
installation er krysset av, og Java 21 er valgt -->

## Test prosjektet {.flag}

- [ ] Lag en instans med Minecraft 1.21.11 og velg Java 21 for den. Starter den?

- [ ] Velg Java 17 for samme instans og prøv igjen. Hva skjer? Bytt tilbake til
  Java 21 etterpå.


# Steg 7: Feilmeldinger med feil Java {.activity}

Med feil Java får du en av disse feilene. Du finner dem i loggen. Den ser du i
**Minecraft Log** når du har trykket **Launch**.

## For gammel Java {.check}

```
java.lang.UnsupportedClassVersionError: net/minecraft/client/main/Main has
been compiled by a more recent version of the Java Runtime (class file version
69.0), this version of the Java Runtime only recognizes class file versions up
to 65.0
```

Java lagrer et versjonsnummer i hver ferdig klasse. Trekk fra 44, så får du
Java-versjonen:

| Class file version | Java |
| ------------------ | ---- |
| 52.0               | 8    |
| 60.0               | 16   |
| 61.0               | 17   |
| 65.0               | 21   |
| 69.0               | 25   |

Meldingen over betyr: Minecraft trenger Java 25 (69 minus 44), men instansen
bruker Java 21 (65 minus 44).

- [ ] Velg en nyere Java for instansen.

## En mod krever en annen Java {.check}

Fabric sjekker Java før spillet starter. Står det `java` i lista over det moden
trenger (`depends` i `fabric.mod.json`), og Java er for gammel, får du en
melding om at moden krever en nyere Java. Meldingen sier hvilken versjon den
trenger, og hvilken du har.

- [ ] Velg Java-versjonen meldingen ber om.

## For ny Java {.check}

Gamle versjoner av Minecraft og Forge kan krasje med en ny Java. Feilen er ofte
en `ClassCastException` eller en melding om noe som ikke er `accessible`, tidlig
i loggen og før spillvinduet åpnes.

- [ ] Sjekk tabellen i steg 1, og velg den Java-versjonen som står der.

## Utfordring {.challenge}

- [ ] Lag en liste over alle instansene dine med Minecraft-versjon og Java.
  Stemmer alle med tabellen?

- [ ] Finn ut hvilken Java den vanlige Minecraft Launcher bruker for den nyeste
  versjonen. Hint: se i innstillingene for en installasjon.
