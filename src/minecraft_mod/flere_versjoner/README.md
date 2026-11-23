---
title: Lærerveiledning - Flere versjoner
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene bygger moden fra Felleskode for både Minecraft 26.3 og 1.21.11 med
Stonecutter. 26.3 er den aktive versjonen, så koden i `src/` er skrevet for den.
For 1.21.11 skriver Stonecutter en kopi der navnebyttene i
`stonecutter.gradle.kts` er gjort og betingelsene (`//? if`) er avgjort.
Datafiler med annet format i 1.21.11 ligger i
`common/versions/1.21.11/resources/`. Resultatet er fire jar-filer: Fabric og
NeoForge for hver versjon.

Alt innholdet virker på 1.21.11, også vesenet og rendereren. Ingenting er
utelatt.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Versjoner og bakoverkompatibilitet, byggeverktøy, Minecraft

__Tidsbruk__: To dobbeltimer

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2__: generalisere løsninger ved å utvikle og bruke
  gjenbrukbar programkode

- [ ] __Informasjonsteknologi 2__: utforske og vurdere alternative løsninger for
  design og implementering av et program

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hvorfor en mod må bygges på nytt for hver
  Minecraft-versjon.

- [ ] Elevene kan velge mellom et navnebytte og `//? if`, og forklare hvorfor et
  navnebytte må være smalt.

- [ ] Elevene kan forklare hva obfuskering er, og hvorfor 1.21.11 trenger
  Mojangs navnelister og 26.3 ikke gjør det.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å fullføre oppgaven, slik at moden
  kjører på begge versjonene.

- [ ] Eleven oppnår høy måloppnåelse ved å finne og håndtere en forskjell selv,
  for eksempel ved å legge til en tredje versjon.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgaven Felleskode.

- [ ] __Utstyr__: IntelliJ IDEA med Minecraft Development, og JDK 25. Gradle
  laster ned Java 21 selv for 1.21.11. Første bygg laster ned to
  Minecraft-versjoner med Fabric og NeoForge for begge, så det tar lang tid og
  bruker mye diskplass.


# Fasit {.activity}

`steg/10_flere_versjoner` i løsningsrepoet. <!-- LENKE: løsningsrepo -->

Testene kjøres med `:fabric:26.3:runClientGameTest`,
`:fabric:1.21.11:runClientGameTest` og `:neoforge:<versjon>:runServerSmoke`.
Testen i `fabric/src/gametest` har selv noen `//? if`, fordi Fabric sitt
test-API har endret seg mellom versjonene. Den er ikke en del av oppgaven.


# Vanlige problemer {.activity}

## Sjekkliste {.check}

- [ ] __Koden i `src/` er plutselig skrevet for 1.21.11__: Eleven har byttet
  aktiv versjon. Kjør **Set active project to 26.3** i gruppen `stonecutter` i
  Gradle-panelet. Lagre aldri i git med en annen aktiv versjon enn 26.3.

- [ ] __Et navnebytte ødelegger noe annet__: Navnebyttet er for bredt. Det
  kjøres også baklengs når aktiv versjon byttes tilbake. Bytt bare hele uttrykk,
  som `EntityTypes.LIGHTNING_BOLT`, ikke enkeltord. Byttet treffer også
  kommentarer.

- [ ] __Rubinmalm mangler i 1.21.11__: `configured_feature/rubinmalm.json`
  mangler i `common/versions/1.21.11/resources/data/rubinmod/worldgen/`, eller
  har 26.3-formatet. 1.21.11 leser ikke mappa `worldgen/feature`.

- [ ] __Malmen eller grisen dropper ingenting i 1.21.11__: Loot table har
  26.3-formatet. 1.21.11 bruker `"conditions"` og `"functions"`.

- [ ] __Bygget feiler med en feil om `property`__: Inne i
  `tasks.processResources { ... }` må det stå `project.property("...")`.

- [ ] __Fabric 1.21.11 finner ikke Fabric-klassene__: Avhengighetene må stå med
  `modImplementation`, og `loomx.applyMojangMappings()` må være med.

## Tips {.protip}

`Identifier` og `ResourceLocation` er ikke en forskjell mellom disse to
versjonene. Navnet `Identifier` kom i 1.21.11, så begge bruker det. Vil elevene
se det navnebyttet i praksis, kan de legge til en versjon før 1.21.11 som
utfordring. Da blir `replace("Identifier", "ResourceLocation")` for `< 1.21.11`
riktig.
