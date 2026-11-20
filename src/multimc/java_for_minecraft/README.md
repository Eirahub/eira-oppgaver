---
title: Lærerveiledning - Java for Minecraft
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lærer hvilken Java hver Minecraft-versjon trenger, forskjellen på JDK og
JRE, og installerer Eclipse Temurin på Windows eller macOS. De velger riktig
Java for hver instans i MultiMC og lærer å kjenne igjen feilmeldingene man får
med feil Java.

## Oppgaven passer til: {.check}

__Fag__: Teknologi, informasjonsteknologi, valgfag programmering

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Java, versjoner, installasjon, feilsøking

__Nivå__: 2

__Tidsbruk__: Omtrent en time. Flere Java-versjoner er store nedlastinger.

## Kompetansemål {.challenge}

Kompetansemål er ikke knyttet til oppgaven ennå. Hent eventuelle mål fra
[læreplanen i informasjonsteknologi på
udir.no](https://www.udir.no/lk20/inf01-02) som passer for gruppa.

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hvorfor en Minecraft-versjon krever en bestemt
  Java-versjon.

- [ ] Elevene kan forklare forskjellen på JDK og JRE.

- [ ] Elevene kan installere Java og sjekke versjonen med `java -version`.

- [ ] Elevene kan velge Java per instans i MultiMC.

- [ ] Elevene kan lese en `UnsupportedClassVersionError` og regne seg til
  hvilken Java som trengs.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å installere riktig Java og få en
  instans til å starte.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare feilmeldingene i steg 7, og
  ved å bruke tabellen til å velge Java for en ukjent Minecraft-versjon.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgaven Installasjon, eller at MultiMC er installert.

- [ ] __Java__: Oppgaven bruker Eclipse Temurin (JDK). Kurset trenger Java 25 og
  Java 21. Java 17 og 8 brukes bare til eldre versjoner.

- [ ] __Rettigheter__: Installasjon av Java krever vanligvis lov til å
  installere programmer. Skolemaskiner må ofte forberedes av IT.

- [ ] __Mac med Apple-prosessor__: Oppgaven viser til MultiMC-wikien som sier at
  MultiMC ikke støtter Java for ARM, og anbefaler x64-pakken. Sjekk den
  nåværende statusen i wikien før timen, siden det kan ha endret seg.

- [ ] __Terminal__: Elevene bruker `java -version` i PowerShell eller Terminal.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Installer Java på forhånd på felles maskiner. Det er mange store
  nedlastinger.

- [ ] Sjekk tabellen i steg 1 mot gjeldende Minecraft-versjoner. Den dekker
  versjoner til 26.x, så oppdater den når nye versjoner krever ny Java.

## Steg 1 og 2: Hvilken Java? {.check}

- [ ] Be elevene skrive ned hvilke Minecraft-versjoner de skal teste, og lese av
  Java-versjonene i tabellen.

- [ ] Elever tror ofte at nyeste Java alltid er best. Peker på tipset om at
  gamle Forge-versjoner ikke tåler ny Java.

## Steg 3 og 4: Installer {.check}

- [ ] Be elevene laste ned bare fra adoptium.net eller bruke `winget` eller
  Homebrew.

- [ ] Windows: `winget` bruker pakke-ID-ene som står i oppgaven. Kommer det en
  feil om at pakken ikke finnes, sjekk navnet på adoptium.net.

## Steg 5: Sjekk versjonen {.check}

- [ ] Terminalen viser bare én Java. Det er normalt at flere ligger installert.

- [ ] Sier terminalen at `java` ikke finnes, hjelper det ofte å åpne en ny
  terminal. MultiMC trenger ikke at Java ligger i `PATH`.

## Steg 6: Velg Java i MultiMC {.check}

- [ ] Auto-detect finner ikke alltid alle versjoner. Da kan eleven bruke Browse
  og peke på `javaw.exe` i `bin`-mappa.

- [ ] Kryss av for Java installation under Settings og Java for hver instans, så
  gjelder valget bare den. Uten krysset gjelder den felles Java-en.

- [ ] Glemmer elevene å trykke Test, ser de ikke feilen før spillet starter.

## Steg 7: Feilmeldinger {.check}

- [ ] Gå gjennom regelen "class file version minus 44". La elevene regne ut
  versjonen i et par eksempler.

- [ ] Meldinger fra Fabric og Forge kan se litt ulike ut fra versjon til
  versjon. La elevene lete etter nøkkelordene i teksten i stedet for å lete
  etter samme setning.

## Vanlige problemer {.protip}

- Spillet starter ikke og eleven ser ingen melding: åpne Minecraft Log.

- Feil Java er valgt for instansen: sammenlign instansen med tabellen i steg 1.

- Mod-loader for gammel Minecraft-versjon krasjer med ny Java: bruk
  Java-versjonen i tabellen, ikke den nyeste.


# Variasjoner {.activity}

- La elevene lage et regneark med alle instansene, Minecraft-versjon og
  Java-versjon.

- La elevene undersøke hvilken Java den vanlige Minecraft Launcher bruker, som i
  utfordringen.

- La sterke elever sammenligne leverandører av OpenJDK og forklare hvorfor
  klubben velger én.


# Eksterne ressurser {.activity}

- [Adoptium Temurin](https://adoptium.net/temurin/releases/): nedlasting av
  Java.

- [MultiMC-wikien](https://github.com/MultiMC/Launcher/wiki/Using-the-right-Java):
  hvordan velge Java i MultiMC.
