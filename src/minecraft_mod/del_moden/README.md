---
title: Lærerveiledning - Del moden
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene bygger jar-fila, installerer Fabric eller NeoForge i vanlig Minecraft
Launcher, legger moden i `mods` og tester den. De lærer å dele moden trygt,
velge en lisens og forberede publisering på Modrinth. Oppgaven har ingen ny
kode. Den kan tas rett etter Oppførsel, eller etter Felleskode og Flere
versjoner.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 9. trinn til VG3

__Tema__: Bygging, installasjon, lisenser, digital sikkerhet

__Nivå__: 4

__Tidsbruk__: Dobbeltime. Publisering på Modrinth kan tas som egen oppgave.

## Kompetansemål {.challenge}

- [ ] __Samfunnsfag, 10. trinn__: utforske og reflektere over egne digitale spor
  og muligheten for å få slettet sporene og verne om egen og andres rett til
  privatliv, personvern og opphavsrett

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan bygge en jar-fil med Gradle og finne den.

- [ ] Elevene kan forklare hvorfor en mod er laget for en bestemt loader og
  Minecraft-versjon.

- [ ] Elevene kan installere en mod i vanlig Minecraft.

- [ ] Elevene kan forklare hvorfor man bare skal installere modder fra kilder
  man stoler på.

- [ ] Elevene kan forklare hva en lisens er, og velge en.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å bygge moden og få den til å
  virke i vanlig Minecraft.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare lisensvalget og
  risikoen ved modder fra ukjente kilder, og ved å skrive en `README.md` for
  moden.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Tom mod til Oppførsel.

- [ ] __Utstyr__: IntelliJ IDEA med Minecraft Development og JDK 25.

- [ ] __Konto og spill__: Eleven må eie Minecraft Java Edition for å teste i
  Minecraft Launcher, og trenger en Microsoft-konto. Planlegg for elever uten
  spillet, for eksempel i par, eller bruk skolens avtale.

- [ ] __Minne og maskin__: Minst 8 GB. Vanlig Minecraft med modder bruker mer
  enn `runClient` i utviklingsmiljøet, så test på en elevmaskin.

- [ ] __Loader__: Fabric Installer og Fabric API (Modrinth), eller NeoForge
  installasjonsprogram. Sjekk at skolen tillater å kjøre installasjonsprogrammer
  og å laste ned fra fabricmc.net, neoforged.net og modrinth.com.

- [ ] __Publisering__: Modrinth har egne vilkår og en aldersgrense for kontoer.
  Gjør dette bare med en voksen, som oppgaven sier.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv å bygge, installere og starte selv. Sjekk at Fabric Installer og
  Modrinth fungerer fra skolens nett.

- [ ] Avklar om elevene har lov til å installere programmer, eller om IT må
  gjøre det.

## Steg 1: Bygg jar-fila {.check}

- [ ] Hvilken jar-fil de skal bruke, avhenger av hvor langt de er kommet. Se
  oppgaven, og be dem lese filnavnet nøye.

- [ ] Jar-fila fra `common` og filer som slutter på `-sources.jar` er ikke
  moder.

- [ ] På Windows i PowerShell skriver du `.\gradlew build`.

## Steg 2: Installer {.check}

- [ ] Fabric og NeoForge er valg. En mod for en loader virker ikke i den andre.

- [ ] Fabric API må ligge i `mods` for Fabric. NeoForge trenger det ikke.

- [ ] Versjonen på loaderen må stemme med Minecraft-versjonen i moden.

- [ ] Hvis spillet ikke starter, se i loggen. Kurset Test moden med MultiMC har
  oppgaver om logger og feilsøking.

## Steg 3: Del trygt {.check}

- [ ] Ta en samtale om at en jar-fil er et program. Be elevene bare dele filer
  de har laget selv, og bare med folk de kjenner.

- [ ] Be dem hente modder fra Modrinth eller fra utviklerens nettside, ikke fra
  lenker i en chat.

## Steg 4: Lisens {.check}

- [ ] Gå gjennom MIT og GPL med enkle ord. La elevene velge og begrunne.

- [ ] Teksturene må være elevens egne, eller ha en lisens som tillater bruk.

## Steg 5: Modrinth {.check}

- [ ] Hopp over steget hvis du ikke vil ha elever på Modrinth. Bytt i så fall
  med en nedlastbar jar i en delt mappe.

- [ ] Mod-id `rubinmod` brukes av alle elevene. Lær dem å bruke Replace in Files
  i IntelliJ, og se at de endrer alle stedene.

- [ ] Ikke bruk Minecraft-logoen, og ikke gi inntrykk av at moden er laget av
  Mojang eller Microsoft.

## Vanlige problemer {.protip}

- Spillet starter ikke: feil loader, feil Minecraft-versjon, eller Fabric API
  mangler.

- Moden vises ikke i spillet: jar-fila ligger i feil mappe.

- Elever installerer hver sin mod i den samme `mods`-mappa, så de blander
  versjoner. Bruk en egen installasjon per versjon.

- Jar-fila fra `common` er brukt. Den er ikke en mod.


# Variasjoner {.activity}

- La elevene teste hverandres jar-filer, som i oppgaven Test moden i MultiMC.

- La elevene skrive en `README.md` med installasjonsveiledning.

- La sterke elever sette opp en enkel server og teste flerspiller. Moden må
  ligge både på serveren og hos hver spiller.


# Fasit {.activity}

Oppgaven har ingen ny kode. Ferdige prosjekter ligger i løsningsrepoet i
mappene `steg/08_oppforsel`, `steg/09_felleskode` og `steg/10_flere_versjoner`.
<!-- LENKE: løsningsrepo -->


# Eksterne ressurser {.activity}

- [Fabric](https://fabricmc.net/use/): installasjonsprogram for Fabric.

- [NeoForged](https://neoforged.net/): nettsida til NeoForge.

- [Modrinth](https://modrinth.com): modder og publisering.

- [Choose a License](https://choosealicense.com/): enkel guide til lisenser.
