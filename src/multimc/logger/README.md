---
title: Lærerveiledning - Logger og krasjrapporter
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lærer å finne loggen og krasjrapporten, lese en stack trace, kjenne
igjen vanlige feil ved testing av modder (feil loader, manglende avhengighet,
feil versjon, feil Java og mixin-feil), og dele en logg på en trygg måte.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi, teknologi

__Anbefalte trinn__: 9. trinn til VG3

__Tema__: Feilsøking, logger, stack trace, personvern

__Nivå__: 3

__Tidsbruk__: Omtrent en time. Utfordringene kan ta en time til.

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2__: vurdere og bruke strategier for feilsøking og
  testing av programkode

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan finne `latest.log` og mappa `crash-reports` i en instans.

- [ ] Elevene kan lese en stack trace og finne første linje i egen kode.

- [ ] Elevene kan skille mellom `Caused by:` og første feilmelding, og finne den
  egentlige årsaken.

- [ ] Elevene kan koble en feilmelding til én av de vanlige årsakene i steg 3.

- [ ] Elevene kan sjekke en logg for personopplysninger før den deles.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å finne loggen og forklare hva
  første linje i en stack trace sier.

- [ ] Eleven oppnår høy måloppnåelse ved å finne årsaken i en ukjent logg, og
  forklare hva man må sjekke før man deler den.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Instanser, Mod-loadere og Test moden, og
  helst noe erfaring med Java fra kurset Java med IntelliJ.

- [ ] __Utstyr__: MultiMC med de fire testinstansene, og en mod å teste, for
  eksempel `rubinmod` fra kurset Lag din egen Minecraft-mod.

- [ ] __Mod med feil__: Forbered en jar-fil med en kjent feil, så alle elever
  får samme logg å lese. Test at den gir den feilen du venter før timen.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Lag noen kopier av instanser med typiske feil: Fabric-jar i NeoForge, mod
  for feil versjon, Fabric API fjernet, og for gammel Java.

- [ ] Lagre loggene fra feilene. De kan brukes i en felles gjennomgang hvis
  noen står fast.

## Steg 1: Finn loggen {.check}

- [ ] Minecraft Log står i vinduet som åpnes når instansen starter. Sjekk at
  menyene i din versjon av MultiMC har de navnene oppgaven bruker.

- [ ] Filene ligger i instansmappa under `.minecraft/logs` og
  `.minecraft/crash-reports`.

## Steg 2: Stack trace {.check}

- [ ] Bruk den tenkte feilen i oppgaven som fellesforklaring. Be elevene peke på
  første linje med egen pakke.

- [ ] Elever leser ofte nedenfra. Understrek at øverste `at`-linje er der feilen
  skjedde, og at siste `Caused by:` ofte er årsaken.

## Steg 3: Vanlige feil {.check}

- [ ] Meldingene varierer fra versjon til versjon. Be elevene lete etter
  nøkkelordene i fet skrift, ikke etter hele setningen.

- [ ] NeoForge og Fabric viser feil på ulike måter. Fabric stopper med en
  tekstliste, mens NeoForge viser en egen side i spillet. Se selv i loggen hos
  elevene hva som faktisk står.

- [ ] Mixin-feil kan se skremmende ut. Si at det som regel betyr at moden ikke
  er laget for Minecraft-versjonen.

## Steg 4: Del en logg trygt {.check}

- [ ] Gå gjennom personvernpunktene. Stier med brukernavn avslører ofte det
  ekte navnet.

- [ ] Opplastingen ligger åpent på nett for alle som har lenken. Be elevene
  sjekke først, og del lenken bare med den som hjelper dem. Avklar lokalt om
  skolen tillater opplasting til eksterne tjenester.

- [ ] Hjelp elevene som er usikre på om noe er privat, ved å se på loggen
  sammen.

## Vanlige problemer {.protip}

- Loggen er tom eller gammel: eleven åpnet `latest.log` før spillet var startet
  på nytt.

- Spillet lukker seg uten krasjrapport: se exit code nederst i loggen, og sjekk
  minne i oppgaven Instanser og versjoner.

- Elever limer inn bare siste linje når de ber om hjelp: be om hele loggen som
  lenke.


# Variasjoner {.activity}

- La elevene lage feil med vilje, som i utfordringen, og bytte instanser med
  hverandre for å finne feilen.

- La elevene lage en feilsøkingsguide for klubben med de vanligste feilene og
  hvordan de ser ut i loggen.

- Koble til oppgaven Gradle og feilsøking i kurset Java med IntelliJ.


# Eksterne ressurser {.activity}

- [mclo.gs](https://mclo.gs): tjeneste for deling av Minecraft-logger.

- [Fabric](https://fabricmc.net): dokumentasjon for Fabric.

- [Modrinth](https://modrinth.com): modder og modpakker.
