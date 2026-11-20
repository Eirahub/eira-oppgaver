---
title: Lærerveiledning - Vesen
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager rubingrisen, et vesen som arver fra `PathfinderMob` og får
oppførselen sin fra mål (goals). Den tegnes med grisemodellen fra Minecraft og
en egen tekstur. Prosjektet deles i `src/main` og `src/client`, og elevene får
et eget klient-entrypoint. Dette er den største oppgaven i kurset.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Objektorientert programmering, arv, klient og server, Minecraft

__Tidsbruk__: To dobbeltimer

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare forskjellen på klient og server i Minecraft, og
  hvorfor tegnekode bare skal være på klienten.

- [ ] Elevene kan bruke arv og `@Override` til å gi et vesen egen oppførsel.

- [ ] Elevene kan forklare hvordan prioriteten til målene styrer hva vesenet
  gjør.

- [ ] Elevene kan forklare forskjellen på klassen `RubinGris` og typen
  `RUBINGRIS`.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å fullføre oppgaven.

- [ ] Eleven oppnår høy måloppnåelse ved å endre målene, og forklare hva som
  skjer når prioriteten byttes om.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Tom mod til Verktøy og mat, og arv fra
  Java-kurset.

- [ ] __Utstyr__: IntelliJ IDEA med Minecraft Development, og JDK 25. Et
  tegneprogram for teksturen, for eksempel Blockbench.


# Fasit {.activity}

`steg/07_vesen` i løsningsrepoet. <!-- LENKE: løsningsrepo -->


# Vanlige problemer {.activity}

## Sjekkliste {.check}

- [ ] __`src/client/java` er ikke blå__: Gradle er ikke lastet på nytt etter
  endringen i `build.gradle.kts`. Klikk **Load Gradle Changes**, eller **Reload
  All Gradle Projects** i Gradle-panelet.

- [ ] __"Can't find attribute minecraft:tempt_range"__: `TEMPT_RANGE` mangler i
  `createAttributes()`. `TemptGoal` trenger det, og et vesen som ikke arver fra
  `Animal`, må legge det til selv.

- [ ] __Spillet krasjer når grisen lages__: Attributtene er ikke registrert.
  Sjekk at `ModEntities.init()` kalles i `onInitialize()`.

- [ ] __Grisen er usynlig, eller spillet krasjer med en feil om renderer__:
  `"client"` mangler i `fabric.mod.json`, eller klassen der har feil navn.

- [ ] __Teksturen er stokket om__: Teksturen må følge oppsettet til grisen. Be
  eleven male over teksturen fra løsningen i stedet for å tegne fra bunnen av.

## Tips {.protip}

Grisen lages bare med egg eller `/summon`. Det var et bevisst valg, så oppgaven
ikke blir for stor. Å få den til å dukke opp av seg selv er en god utfordring
for elever som er ferdige tidlig.
