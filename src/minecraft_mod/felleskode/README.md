---
title: Lærerveiledning - Felleskode
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene deler moden fra Oppførsel i tre Gradle-moduler: `common`, `fabric` og
`neoforge`, etter jaredlll08s MultiLoader-Template. Alt innholdet flyttes til
`common`, som kompileres mot ren Minecraft. Registreringen går gjennom et lite
grensesnitt, `Platform`, med én implementasjon for hver loader. Resten av det
som er loader-spesifikt (fane, attributter, kommando, hendelse, malm i biomer,
renderer) står i startklassen til hver loader. Resultatet er én jar-fil for
Fabric og én for NeoForge.

Oppgaven er stor, og mye av arbeidet er å flytte filer. Byggefilene for modulene
hentes fra løsningsrepoet. Det er Java-koden og hvordan delene henger sammen
elevene skal forstå, ikke Gradle-oppsettet.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Grensesnitt, generiske typer, `Supplier`, modulær kode, Minecraft

__Tidsbruk__: To til tre dobbeltimer

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2__: generalisere løsninger ved å utvikle og bruke
  gjenbrukbar programkode

- [ ] __Informasjonsteknologi 2__: anvende objektorientert modellering til å
  beskrive et programs struktur

- [ ] __Informasjonsteknologi 2__: utvikle objektorienterte programmer med
  klasser, objekter, metoder og arv

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hvorfor koden deles i `common` og en modul for hver
  loader, og gi eksempler på hva som er felles og hva som er loader-spesifikt.

- [ ] Elevene kan forklare hva et grensesnitt er, og hvordan `FabricPlatform` og
  `NeoForgePlatform` gir to ulike implementasjoner av det samme.

- [ ] Elevene kan forklare hva en `Supplier` er, og hvorfor NeoForge trenger
  den.

- [ ] Elevene kan forklare hvordan `ServiceLoader` finner riktig klasse.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å fullføre oppgaven, slik at moden
  kjører med både Fabric og NeoForge.

- [ ] Eleven oppnår høy måloppnåelse ved å legge til noe nytt i `common` som
  virker på begge loaderne, og forklare hvorfor `Item.Properties` må lages inni
  lambdaen.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Tom mod til Oppførsel. Grensesnitt og
  lambdaer fra Java-kurset.

- [ ] __Utstyr__: IntelliJ IDEA med Minecraft Development, og JDK 25. Første
  bygg laster ned både Fabric og NeoForge, så det tar lengre tid enn før. Last
  ned på forhånd hvis nettet på skolen er tregt.


# Fasit {.activity}

`steg/09_felleskode` i løsningsrepoet. <!-- LENKE: løsningsrepo -->

Mappene `fabric/src/gametest` og `neoforge/src/smoke` er ikke en del av
oppgaven. De brukes til å teste kurset. `./gradlew :neoforge:runServerSmoke`
starter en NeoForge-server uten vindu, prøver kommandoen, hendelsen, vesenet og
malmen, og skriver "Rubinmod smoke: OK" i loggen. Det er en rask måte å sjekke
at NeoForge-delen virker.


# Vanlige problemer {.activity}

## Sjekkliste {.check}

- [ ] __"Registry is already frozen" på NeoForge__: Et `Item.Properties` eller
  `BlockBehaviour.Properties` lages utenfor lambdaen, eller et felt kaller
  `.get()` mens klassen lastes. Alt som slår opp i registrene, må stå inni en
  lambda.

- [ ] __"Fant ingen Platform for denne loaderen"__: Fila under
  `META-INF/services` mangler, har feil navn, eller har feil klassenavn inni.
  Filnavnet er hele navnet på grensesnittet, `no.kidsakoder.rubinmod.Platform`,
  uten filendelse.

- [ ] __`checkCommonImports` feiler__: En fil i `common` importerer
  `net.fabricmc` eller `net.neoforged`. Meldingen sier hvilken fil. Koden må
  flyttes til startklassen i `fabric` eller `neoforge`.

- [ ] __`CreativeModeTab.Output` eller `EntityRenderers.register` kan ikke
  brukes i common__: De er ikke offentlige i ren Minecraft. Fabric og NeoForge
  åpner dem, men `common` ser ren Minecraft. Derfor fylles fanen med
  `ModItems.tabItems()`, og rendereren registreres i loader-modulene.

- [ ] __Rubingrisen er usynlig__: Rendereren er ikke registrert for den
  loaderen. Sjekk `RubinModFabricClient` og `RubinModNeoForgeClient`, og
  `"client"` i `fabric.mod.json`.

- [ ] __Ingen rubinmalm på NeoForge__: `biome_modifier/rubinmalm.json` mangler,
  eller ligger under `fabric` eller `common` i stedet for `neoforge`.

- [ ] __NeoForge henger lenge før hovedmenyen__: Minecraft leser ytelsesdata fra
  Windows ved start (biblioteket OSHI). På testmaskinen hang det i 9 til 20
  minutter. Legg til `systemProperty("oshi.os.windows.hkeyperfdata", "false")` i
  kjørekonfigurasjonen, som oppgaven viser.

## Tips {.protip}

La elevene lese `RubinModFabric` og `RubinModNeoForge` ved siden av hverandre.
Det er hele forskjellen på de to loaderne, og det gjør det lettere å se at det
meste av en mod er ren Minecraft.
