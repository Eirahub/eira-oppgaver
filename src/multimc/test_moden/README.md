---
title: Lærerveiledning - Test moden
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene legger jar-filene fra rubinmoden i de fire testinstansene (Fabric og
NeoForge, Minecraft 26.3 og 1.21.11) og fyller ut en testplan. De tester også
feil oppsett med vilje, for å se hva en spiller ser når moden installeres feil.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 9. trinn til VG3

__Tema__: Testing, mod-loadere, feilsøking

__Nivå__: 3

__Tidsbruk__: Dobbeltime. Utfordringene med flerspiller og andre modder kommer
i tillegg.

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2__: vurdere og bruke strategier for feilsøking og
  testing av programkode

- [ ] __Vg2 informasjonsteknologi, Utvikling__: anvende relevant testmiljø og
  utføre testing tilpasset IT-løsningen som utvikles

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan finne riktig jar-fil etter bygging og skille den fra
  `-sources.jar` og fra `common`.

- [ ] Elevene kan legge en mod i riktig instans og fylle ut en testplan.

- [ ] Elevene kan forklare hva som er forskjellen på at en mod virker i
  utviklingsmiljøet og hos en spiller.

- [ ] Elevene kan beskrive hva en spiller ser ved feil loader, feil versjon og
  manglende avhengighet.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å teste moden i minst to instanser
  og fylle ut testplanen.

- [ ] Eleven oppnår høy måloppnåelse ved å finne årsaken når moden bare virker i
  noen instanser, og ved å skrive en feilsøkingsdel til en `README`.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Instanser, Mod-loadere og Logger, og
  oppgavene i kurset Lag din egen Minecraft-mod så langt som til Oppførsel.

- [ ] __Utstyr__: MultiMC med fire instanser, Java 25 og Java 21, jar-filer fra
  rubinmoden, og IntelliJ hvis moden skal bygges på nytt.

- [ ] __Alternativ__: Elever som ikke har fullført moden, kan teste en mod fra
  Modrinth som finnes for både Fabric og NeoForge.

- [ ] __Minne__: Fire instanser kjøres én om gangen. Sjekk at maskinene har nok
  minne, og at ledig diskplass holder.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Bygg moden selv og legg jar-filene klare i en delt mappe, så elever som
  sitter fast på bygging likevel kan teste.

- [ ] Prøv å åpne testplanen i det formatet elevene skal bruke.

## Steg 1: Finn jar-filene {.check}

- [ ] Hvor filene ligger, avhenger av hvor langt eleven er kommet i kurset. Se
  de tre variantene i oppgaven.

- [ ] Elever tar ofte `-sources.jar` eller jar-fila fra `common`. Be dem sjekke
  filnavnet mot loader og versjon.

- [ ] På Windows må elevene bruke `.\gradlew build` i PowerShell.

## Steg 2 og 3: Legg inn og test {.check}

- [ ] Start én instans om gangen, med ny verden i kreativ modus.

- [ ] Er det to utgaver av moden i `mods`-mappa, får de feil. Fjern den gamle
  først.

- [ ] Be elevene skrive en kort beskrivelse når en test feiler, ikke bare et
  kryss.

## Steg 4: Feil oppsett {.check}

- [ ] La elevene gjette hva som skjer før de prøver. Sammenlign med loggen.

- [ ] Be dem slette testkopiene etterpå, så de ikke blander dem med de ekte.

## Vanlige problemer {.protip}

- Moden mangler i lista over modder: feil loader, feil mappe, eller skrivefeil i
  filnavnet.

- Spillet starter ikke etter at moden er lagt inn: åpne loggen, se etter
  `requires` og `missing`.

- Moden virker i én loader og ikke i den andre: sjekk koden for
  loader-spesifikke deler, og se Felleskode i kurset om å lage moden.


# Variasjoner {.activity}

- Test sammen med en populær mod, som i utfordringen.

- Test flerspiller på lokalt nett med en venn.

- La en elev lage testplanen for en annen elevs mod.


# Eksterne ressurser {.activity}

- [Modrinth](https://modrinth.com): modder å teste mot.

- [Fabric](https://fabricmc.net/): dokumentasjon for Fabric.

- [NeoForged](https://neoforged.net/): dokumentasjon for NeoForge.
