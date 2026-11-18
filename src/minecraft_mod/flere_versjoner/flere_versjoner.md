---
title: Flere versjoner
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Minecraft kommer i nye versjoner flere ganger i året. Mange spillere og servere
blir likevel på en eldre versjon en stund, for eksempel fordi modene de bruker,
ikke er oppdatert ennå. Moden din virker bare med **26.3**.

I denne oppgaven får du moden til å virke med både **26.3** og **1.21.11**, på
både Fabric og NeoForge. Det blir fire jar-filer fra én kildekode. Til det
bruker du [Stonecutter](https://stonecutter.kikugie.dev/), et verktøy som
skriver om koden for hver versjon.

Du lærer hvordan Minecraft endrer seg fra versjon til versjon, og to måter å
håndtere det på: **navnebytter** og **betingelser** (`//? if`) i koden.

![Tre rubingriser står på gresset i Minecraft 1.21.11 med Fabric. Spilleren
holder rubinstaven, og bak grisene har et lyn slått ned. Det er samme mod som i
26.3](10-fabric-1.21.11-rubingris.png)


# Steg 1: Hva er ulikt? {.activity}

Det aller meste av moden er likt i 26.3 og 1.21.11. Dette er forskjellene:

| Forskjell                         | 26.3                                             | 1.21.11                                      | Hvordan                                                  |
| --------------------------------- | ------------------------------------------------ | -------------------------------------------- | -------------------------------------------------------- |
| Vesentyper fra Minecraft          | `EntityTypes.LIGHTNING_BOLT`                     | `EntityType.LIGHTNING_BOLT`                  | Navnebytte (bruken) og `//? if` (importen) i `RubinStav` |
| Kreativ fane i Fabric API         | `FabricCreativeModeTab` (pakke `creativetab.v1`) | `FabricItemGroup` (pakke `itemgroup.v1`)     | Navnebytte                                               |
| Renderer på Fabric                | `EntityRenderers.register`                       | Fabric sin `EntityRendererRegistry.register` | `//? if` i `RubinModFabricClient`                        |
| NeoForge-hendelse ved knust kloss | `BreakBlockEvent`                                | `BlockEvent.BreakEvent`                      | `//? if` i `RubinModNeoForge`                            |
| Loot tables                       | `"condition"`, `"modifier"`                      | `"conditions"`, `"functions"`                | Egne filer i `common/versions/1.21.11/resources`         |
| Malm (feature)                    | `worldgen/feature/`                              | `worldgen/configured_feature/`               | Egen fil i `common/versions/1.21.11/resources`           |
| Java                              | 25                                               | 21                                           | `versions/<versjon>/gradle.properties`                   |

To ting til er forskjellige, og de handler om hvordan moden bygges:

- **Java.** Minecraft 26.3 krever Java 25. Minecraft 1.21.11 bruker Java 21.
  Gradle laster ned begge selv.

- **Obfuskert eller ikke.** I 1.21.11 og eldre versjoner har klassene i spillet
  korte, rare navn, som `a` og `bcd`. Det kalles _obfuskering_. For å skrive en
  mod trenger du da en navneliste (_mappings_) som oversetter til lesbare navn,
  og jar-fila til moden må oversettes tilbake når den bygges. 26.x er ikke
  obfuskert, så der trengs ingen navneliste. På Fabric brukes pluginen
  `fabric-loom` for 26.3 og `fabric-loom-remap` for 1.21.11. NeoForge klarer
  begge selv.

## Tips {.tip}

Søker du på nettet etter hjelp til modding, finner du ofte kode for eldre
versjoner. Et typisk eksempel er `ResourceLocation`, som heter `Identifier` fra
og med 1.21.11. Det er akkurat den typen navnebytte Stonecutter kan gjøre for
deg. Skal moden også virke med en versjon før 1.21.11, legger du til et
navnebytte fra `Identifier` til `ResourceLocation`.


# Steg 2: Stonecutter {.activity}

Stonecutter lar deg skrive koden for én versjon, den **aktive versjonen**. For
de andre versjonene lager den en kopi av koden der den har byttet navn og valgt
riktige linjer. Her er 26.3 aktiv, så koden i `src/` er skrevet for 26.3.

## Sjekkliste {.check}

- [ ] Ta en kopi av prosjektet fra forrige oppgave, eller lagre det i git.

- [ ] Bytt ut innholdet i `settings.gradle.kts`:

  ```kotlin
  pluginManagement {
      repositories {
          maven("https://maven.fabricmc.net/") { name = "Fabric" }
          maven("https://maven.kikugie.dev/releases") { name = "KikuGie" }
          mavenCentral()
          gradlePluginPortal()
      }
  }

  plugins {
      // Laster ned Java 25 og Java 21 hvis maskinen ikke har dem.
      id("org.gradle.toolchains.foojay-resolver-convention") version "1.0.0"
      // Stonecutter: én kildekode, flere Minecraft-versjoner. Se stonecutter.gradle.kts.
      id("dev.kikugie.stonecutter") version "0.10"
      // Velger riktig Fabric Loom for hver versjon: net.fabricmc.fabric-loom for 26.x
      // (ikke obfuskert) og net.fabricmc.fabric-loom-remap for 1.21.11 (obfuskert).
      id("dev.kikugie.loom-back-compat") version "0.4.3"
  }

  rootProject.name = "rubinmod"

  // Som i steg 9: common, fabric og neoforge. Stonecutter lager ett Gradle-prosjekt
  // for hver modul og versjon: :fabric:26.3, :fabric:1.21.11 og så videre.
  // Prosjektet for en versjon bor i <modul>/versions/<versjon>/ (gradle.properties
  // med versjonsnumrene, og build-mappa).
  // 26.3 er den aktive versjonen: koden i src/ er skrevet for 26.3.
  stonecutter {
      create(rootProject) {
          branch("common") { versions("26.3", "1.21.11") }
          branch("fabric") { versions("26.3", "1.21.11") }
          branch("neoforge") { versions("26.3", "1.21.11") }
          vcsVersion = "26.3"
      }
  }
  ```

Tre moduler og to versjoner gir seks Gradle-prosjekter: `:common:26.3`,
`:common:1.21.11`, `:fabric:26.3`, `:fabric:1.21.11`, `:neoforge:26.3` og
`:neoforge:1.21.11`.

- [ ] Gi `build.gradle.kts` i roten det nye navnet `stonecutter.gradle.kts`, og
  bytt ut innholdet:

  ```kotlin
  plugins {
      id("dev.kikugie.stonecutter")
      // To utgaver av Fabric Loom: fabric-loom for 26.x, fabric-loom-remap for
      // 1.21.11. loom-back-compat velger riktig i fabric/build.gradle.kts.
      id("net.fabricmc.fabric-loom") version "1.19.4" apply false
      id("net.fabricmc.fabric-loom-remap") version "1.19.4" apply false
      id("net.neoforged.moddev") version "2.0.148" apply false
  }

  // Versjonen koden i src/ er skrevet for. For 1.21.11 lager Stonecutter en
  // omskrevet kopi i <modul>/versions/1.21.11/build/generated/stonecutter/.
  stonecutter active "26.3"

  // Navnebytter: der Minecraft eller Fabric bare har gitt noe et nytt navn.
  // Venstre side er navnet i 26.3 (i src/), høyre side navnet i 1.21.11.
  // Stonecutter bytter når betingelsen er sann. Alt annet som er ulikt, står som
  // //? if i koden.
  stonecutter parameters {
      // 26.2 flyttet Minecrafts vesentyper fra EntityType til EntityTypes.
      // Bare denne ene bruken byttes: EntityType finnes i begge versjonene, og et
      // bytte av hele ordet ville ødelagt EntityType<RubinGris> i ModEntities.
      replacements.string(current.parsed < "26.2") {
          replace("EntityTypes.LIGHTNING_BOLT", "EntityType.LIGHTNING_BOLT")
      }
      // Fabric API ga kreativ-fane-klassene Mojangs navn i 26.1:
      // FabricItemGroup ble FabricCreativeModeTab, og pakken itemgroup ble creativetab.
      replacements.string(current.parsed < "26.1") {
          replace("api.creativetab.v1.FabricCreativeModeTab", "api.itemgroup.v1.FabricItemGroup")
          replace("FabricCreativeModeTab.builder()", "FabricItemGroup.builder()")
  ```

  Avslutt med to `}`. Fila i løsningsrepoet har noen navnebytter til nederst,
  men de brukes bare av testene i `src/gametest`. <!-- LENKE: løsningsrepo -->

## Navnebytte eller //? if? {.tip}

Er det bare et nytt navn, legger du det i `stonecutter.gradle.kts`. Ellers
bruker du `//? if` i koden.

Et navnebytte må være så smalt at det ikke treffer noe annet. Stonecutter kjører
det baklengs når du bytter aktiv versjon tilbake. `EntityType` finnes i begge
versjonene, så å bytte hele ordet ville ødelagt `EntityType<RubinGris>` i
`ModEntities`. Derfor byttes bare `EntityTypes.LIGHTNING_BOLT`. Navnebyttet
treffer også kommentarer.


# Steg 3: Versjonsnumre for hver versjon {.activity}

Det som er likt for alle versjonene, står i `gradle.properties` i roten. Det som
er ulikt, står i en egen `gradle.properties` for hver modul og versjon.

## Sjekkliste {.check}

- [ ] Bytt ut innholdet i `gradle.properties` i roten:

  ```text
  org.gradle.jvmargs=-Xmx3G

  # Det som er likt for alle Minecraft-versjonene. Resten (Minecraft, Java, Fabric
  # API, NeoForge, NeoForm) står i <modul>/versions/<versjon>/gradle.properties.

  # Fabric Loader, se https://fabricmc.net/develop (samme for begge versjonene)
  loader_version=0.20.1

  mod_version=1.0.0
  maven_group=no.kidsakoder
  ```

- [ ] Lag `common/versions/26.3/gradle.properties`:

  ```text
  # Ren Minecraft 26.3 for common, se https://projects.neoforged.net/neoforged/neoform
  neo_form_version=26.3-1
  java_version=25
  ```

- [ ] Lag `common/versions/1.21.11/gradle.properties`:

  ```text
  # Ren Minecraft 1.21.11 for common, se https://projects.neoforged.net/neoforged/neoform
  neo_form_version=1.21.11-20251209.172050
  java_version=21
  ```

- [ ] Lag `fabric/versions/26.3/gradle.properties`:

  ```text
  # Fabric for Minecraft 26.3, se https://fabricmc.net/develop
  fabric_api_version=0.165.2+26.3
  java_version=25
  # "minecraft" i fabric.mod.json
  minecraft_dependency=~26.3
  ```

- [ ] Lag `fabric/versions/1.21.11/gradle.properties`:

  ```text
  # Fabric for Minecraft 1.21.11, se https://fabricmc.net/develop
  fabric_api_version=0.141.6+1.21.11
  java_version=21
  # "minecraft" i fabric.mod.json
  minecraft_dependency=~1.21.11
  ```

- [ ] Lag `neoforge/versions/26.3/gradle.properties`:

  ```text
  # NeoForge for Minecraft 26.3, se https://projects.neoforged.net/neoforged/neoforge
  neoforge_version=26.3.0.102
  java_version=25
  # "minecraft" i neoforge.mods.toml
  minecraft_range=[26.3,26.4)
  ```

- [ ] Lag `neoforge/versions/1.21.11/gradle.properties`:

  ```text
  # NeoForge for Minecraft 1.21.11 (NeoForge 21.11), se https://projects.neoforged.net/neoforged/neoforge
  neoforge_version=21.11.48
  java_version=21
  # "minecraft" i neoforge.mods.toml
  minecraft_range=[1.21.11,1.21.12)
  ```

- [ ] I `fabric.mod.json` henter du versjonene fra fila over:

  ```json
    "depends": {
      "fabricloader": ">=0.20.1",
      "minecraft": "${minecraft_dependency}",
      "java": ">=${java_version}",
      "fabric-api": "*"
    }
  ```

- [ ] I `neoforge.mods.toml` bytter du ut versjonsnumrene på samme måte. For
  NeoForge blir det `versionRange = "[${neoforge_version},)"`, og for Minecraft
  `versionRange = "${minecraft_range}"`.


# Steg 4: Byggefilene {.activity}

## Sjekkliste {.check}

- [ ] Hent `common/build.gradle.kts`, `fabric/build.gradle.kts` og
  `neoforge/build.gradle.kts` fra `steg/10_flere_versjoner` i løsningsrepoet.
  <!-- LENKE: løsningsrepo -->

Stonecutter kjører hver byggefil én gang for hver versjon. Dette er det nye i
dem:

- Fabric-modulen velger Loom etter versjonen, og ber om Mojangs navnelister:

  ```kotlin
  plugins {
      id("dev.kikugie.stonecutter")
      // Velger Loom for versjonen: net.fabricmc.fabric-loom for 26.3 og
      // net.fabricmc.fabric-loom-remap for 1.21.11. 1.21.11 er obfuskert (klassene
      // har korte, rare navn i spillet), så Loom må oversette med Mojangs navnelister.
      id("dev.kikugie.loom-back-compat")
  }
  ```

  ```kotlin
  dependencies {
      minecraft("com.mojang:minecraft:$mc")
      // Mojangs navnelister for 1.21.11. For 26.3 gjør den ingenting.
      loomx.applyMojangMappings()
      // modImplementation: på 1.21.11 må mod-jar-filene også oversettes.
      // For 26.3 betyr det det samme som implementation.
      modImplementation("net.fabricmc:fabric-loader:${property("loader_version")}")
      modImplementation("net.fabricmc.fabric-api:fabric-api:${property("fabric_api_version")}")
  }
  ```

- Jar-fila får versjonen i navnet, for eksempel
  `rubinmod-fabric-1.21.11-1.0.0.jar`:

  ```kotlin
  base {
      // For eksempel rubinmod-fabric-1.21.11-1.0.0.jar.
      archivesName = "rubinmod-fabric-$mc"
  }
  ```

- For den aktive versjonen henter loaderen koden fra `common/src`, som i steg 9.
  For 1.21.11 henter den Stonecutter sin omskrevne kopi i
  `common/versions/1.21.11/build/generated/stonecutter/`:

  ```kotlin
  val commonProject = project(":common:${stonecutter.current.project}")
  fun commonSrc(set: String, kind: String): ConfigurableFileCollection =
      if (stonecutter.current.isActive) files(rootProject.file("common/src/$set/$kind"))
      else files(commonProject.layout.buildDirectory.dir("generated/stonecutter/$set/$kind"))
          .builtBy("${commonProject.path}:stonecutterGenerate${if (set == "main") "" else "Client"}")
  ```

- Inne i `tasks.processResources { ... }` står det `project.property("...")`.
  Skriver du bare `property("...")` der, spør Gradle oppgaven i stedet for
  prosjektet, og bygget feiler.

- [ ] Klikk **Load Gradle Changes**. Første gang laster Gradle ned to
  Minecraft-versjoner, Java 21 og alt Fabric og NeoForge trenger for begge. Det
  tar en god stund.


# Steg 5: //? if i koden {.activity}

Noen forskjeller er mer enn et nytt navn. Da skriver du begge utgavene i koden,
og en **betingelse** som sier hvilken som gjelder:

```java
//? if >=26.2 {
import net.minecraft.world.entity.EntityTypes;
//?} else
/*import net.minecraft.world.entity.EntityType;*/
```

For Java er `//?` bare kommentarer. Stonecutter leser dem. Linja som passer
versjonen, står som vanlig kode. Den andre er en kommentar med `/* ... */`. Når
Stonecutter skriver koden for 1.21.11, bytter den om: `EntityTypes`-linja blir
en kommentar, og `EntityType`-linja blir kode.

`>=26.2` betyr _versjon 26.2 eller nyere_. Etter `else` uten `{` gjelder
betingelsen bare den neste linja.

## Sjekkliste {.check}

- [ ] Bytt ut importen av `EntityTypes` øverst i `RubinStav`:

  ```java
  // Versjonsforskjell: 26.2 flyttet vesentypene til en ny klasse, EntityTypes.
  // 1.21.11 har dem i EntityType. Stonecutter tar med linja som passer versjonen,
  // og gjør den andre til en kommentar (/* ... */).
  //? if >=26.2 {
  import net.minecraft.world.entity.EntityTypes;
  //?} else
  /*import net.minecraft.world.entity.EntityType;*/
  ```

  Selve bruken, `EntityTypes.LIGHTNING_BOLT`, endrer du ikke. Den tar
  navnebyttet i `stonecutter.gradle.kts` seg av.

- [ ] Bytt ut innholdet i `RubinModFabricClient`:

  ```java
  package no.kidsakoder.rubinmod.fabric;

  import net.fabricmc.api.ClientModInitializer;
  //? if >=26.1 {
  import net.minecraft.client.renderer.entity.EntityRenderers;
  //?} else
  /*import net.fabricmc.fabric.api.client.rendering.v1.EntityRendererRegistry;*/
  import no.kidsakoder.rubinmod.ModEntities;
  import no.kidsakoder.rubinmod.RubinGrisRenderer;

  // Klientdelen for Fabric (står under "client" i fabric.mod.json).
  // Rendereren selv er felles (common/src/client). Her sier vi bare fra om den.
  public class RubinModFabricClient implements ClientModInitializer {
      @Override
      public void onInitializeClient() {
          // Versjonsforskjell: i 1.21.11 er Minecrafts EntityRenderers.register privat,
          // så der bruker vi Fabric API. I 26.3 gjør Fabric den offentlig, og Fabric
          // sin EntityRendererRegistry er merket som utdatert.
          //? if >=26.1 {
          EntityRenderers.register(ModEntities.RUBINGRIS.get(), RubinGrisRenderer::new);
          //?} else
          /*EntityRendererRegistry.register(ModEntities.RUBINGRIS.get(), RubinGrisRenderer::new);*/
      }
  }
  ```

- [ ] I `RubinModNeoForge` bytter du ut importen av `BreakBlockEvent`:

  ```java
  //? if >=26.1 {
  import net.neoforged.neoforge.event.level.block.BreakBlockEvent;
  //?} else
  /*import net.neoforged.neoforge.event.level.BlockEvent.BreakEvent;*/
  ```

- [ ] Og første linje i hendelsen nederst:

  ```java
          // Versjonsforskjell: NeoForge for 26.1 og nyere kaller hendelsen
          // BreakBlockEvent. NeoForge for 1.21.11 kaller den BlockEvent.BreakEvent.
          //? if >=26.1 {
          NeoForge.EVENT_BUS.addListener((BreakBlockEvent event) -> {
          //?} else
          /*NeoForge.EVENT_BUS.addListener((BreakEvent event) -> {*/
              if (event.getLevel() instanceof Level level) {
                  RubinMod.blockBroken(level, event.getPos(), event.getState());
              }
          });
  ```


# Steg 6: Data for 1.21.11 {.activity}

Stonecutter bytter ikke i JSON-filer. Noen datafiler har et annet format i
1.21.11, så de må skrives på nytt for den versjonen. De legger du i
`common/versions/1.21.11/resources/`, med samme mapper som i
`common/src/main/resources/`.

Når 1.21.11 bygges, kopieres disse filene først. Har to filer samme navn, vinner
den første (`DuplicatesStrategy.EXCLUDE` i byggefila). Da blir 1.21.11-fila med,
og 26.3-fila blir hoppet over.

## Sjekkliste {.check}

- [ ] Lag
  `common/versions/1.21.11/resources/data/rubinmod/worldgen/configured_feature/rubinmalm.json`.
  I 1.21.11 heter mappa `configured_feature`, verdiene står under `"config"`, og
  klossen skrives som `{"Name": ...}`:

  ```json
  {
    "type": "minecraft:ore",
    "config": {
      "discard_chance_on_air_exposure": 0.0,
      "size": 6,
      "targets": [
        {
          "state": {
            "Name": "rubinmod:rubinmalm"
          },
          "target": {
            "predicate_type": "minecraft:tag_match",
            "tag": "minecraft:stone_ore_replaceables"
          }
        }
      ]
    }
  }
  ```

  Sammenlign med `worldgen/feature/rubinmalm.json` fra 26.3. Innholdet er det
  samme.

- [ ] Lag loot tables for 1.21.11 i
  `common/versions/1.21.11/resources/data/rubinmod/loot_table/`: én for
  `blocks/rubinkloss.json`, én for `blocks/rubinmalm.json` og én for
  `entities/rubingris.json`. Kopier filene fra 26.3, og gjør om tre ting:

  - `"condition"` blir `"conditions"`, som er en liste, og `"type"` inni blir
    `"condition"`.

  - `"modifier"` blir `"functions"`, og `"type"` inni blir `"function"`.

  - Silkeberøring skrives med `match_tool`:

  ```json
                "conditions": [
                  {
                    "condition": "minecraft:match_tool",
                    "predicate": {
                      "predicates": {
                        "minecraft:enchantments": [
                          {
                            "enchantments": "minecraft:silk_touch",
                            "levels": {
                              "min": 1
                            }
                          }
                        ]
                      }
                    }
                  }
                ],
  ```

  Står du fast, finner du filene i løsningsrepoet. <!-- LENKE: løsningsrepo -->

`worldgen/feature/rubinmalm.json` fra 26.3 blir også med i 1.21.11-jar-fila, men
1.21.11 leser ikke den mappa. Den gjør ingen skade.


# Steg 7: Kjør og bytt versjon {.activity}

## Test prosjektet {.flag}

- [ ] Åpne Gradle-panelet. Under **fabric** og **neoforge** ligger nå en gruppe
  for hver versjon, **26.3** og **1.21.11**. Start Fabric med 1.21.11. I
  terminalen skriver du:

  ```
  ./gradlew :fabric:1.21.11:runClient
  ```

<!-- BILDE: Gradle-panelet i IntelliJ med fabric og neoforge åpnet, og under dem
26.3 og 1.21.11. runClient under fabric > 1.21.11 er markert. -->

- [ ] Står det **1.21.11** nederst til venstre i hovedmenyen?

- [ ] Prøv alt: fanen **Rubiner**, staven, `/rubinregn 30` og rubingrisen. Hakk
  ut rubinmalm og sjekk at den dropper rubin.

- [ ] Prøv NeoForge med 26.3 også: `./gradlew :neoforge:26.3:runClient`.

- [ ] Kjør `./gradlew build`. Nå får du fire jar-filer, én for hver loader og
  versjon. De ligger i `<loader>/versions/<versjon>/build/libs/`, for eksempel
  `fabric/versions/1.21.11/build/libs/rubinmod-fabric-1.21.11-1.0.0.jar`.

![Natt i Minecraft 1.21.11. Rubinstaven har sendt et lyn ned i gresset foran
spilleren](10-fabric-1.21.11-rubinstav-lyn.png)

## Bytt aktiv versjon {.check}

Vil du se hvordan koden ser ut for 1.21.11, kan du gjøre 1.21.11 til den aktive
versjonen.

- [ ] Åpne gruppen **stonecutter** i Gradle-panelet, og dobbeltklikk på **Set
  active project to 1.21.11**.

- [ ] Åpne `RubinStav`. Nå er `EntityType`-importen kode, og
  `EntityTypes`-importen er en kommentar. Bruken heter
  `EntityType.LIGHTNING_BOLT`.

- [ ] Bytt tilbake med **Set active project to 26.3** før du lagrer i git.

<!-- BILDE: RubinStav i IntelliJ etter at 1.21.11 er aktiv, med importen av
EntityType som kode og EntityTypes som kommentar. -->

## Utfordring {.challenge}

- [ ] Legg til en tredje versjon, for eksempel 1.21.1. Da trenger du navnebyttet
  fra `Identifier` til `ResourceLocation` for versjoner før 1.21.11. Hvilke
  andre forskjeller finner du?

- [ ] Finn en ting i Minecraft som har fått nytt navn mellom to versjoner, og
  skriv et navnebytte for den. Hvor smalt må det være for at det ikke skal
  treffe noe annet?
