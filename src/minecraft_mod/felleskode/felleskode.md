---
title: Felleskode
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Moden din virker bare med **Fabric**. Mange spillere bruker en annen mod-loader,
**NeoForge**. En mod-loader er programmet som laster modene inn i Minecraft.
Fabric og NeoForge gjør det samme, men på hver sin måte. En jar-fil for Fabric
virker ikke i NeoForge, og omvendt.

Du kunne skrevet moden to ganger. Da må du rette hver feil to steder, og hver ny
rubin-ting må lages to ganger. I stedet deler du moden i tre deler:

- `common`: alt som er likt for begge loaderne. Det er det meste.

- `fabric`: det lille som bare Fabric trenger.

- `neoforge`: det lille som bare NeoForge trenger.

Du skriver rubinen, sverdet, grisen og staven én gang, og får to jar-filer. Du
lærer også hva et grensesnitt (`interface`) er godt for, og hva en `Supplier`
er.

Dette er den største oppgaven i kurset. Du flytter mange filer, og mye av koden
er den samme som før. Det nye er hvordan delene henger sammen.

![Natt i Minecraft. Rubinstaven har sendt et lyn ned i gresset, og det brenner
der lynet traff. Koden for staven ligger nå i common og virker med både Fabric
og NeoForge](09-fabric-rubinstav-lyn.png)


# Steg 1: Hva er felles? {.activity}

Se på koden du har. `ModItems`, `ModBlocks`, `RubinGris`, `RubinStav`, all JSON
og alle teksturene bruker bare Minecraft. De kan være felles. Det er noen få
steder du bruker Fabric API, og det er de stedene som må deles opp.

| Del av moden                       | Felles (`common`)                             | Fabric                                             | NeoForge                                            |
| ---------------------------------- | --------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- |
| Registrering av item, kloss, vesen | Hva som registreres (`ModItems` osv.)         | `Registry.register` med en gang (`FabricPlatform`) | `DeferredRegister` (`NeoForgePlatform`)             |
| Kreativ fane                       | Id-en og innholdet (`ModItems.tabItems()`)    | `FabricCreativeModeTab.builder()`                  | `CreativeModeTab.builder()` i en `DeferredRegister` |
| Attributter for rubingrisen        | `RubinGris.createAttributes()`                | `FabricDefaultAttributeRegistry`                   | `EntityAttributeCreationEvent`                      |
| Kommando                           | Hele `/rubinregn` (`ModCommands.register`)    | `CommandRegistrationCallback`                      | `RegisterCommandsEvent`                             |
| Hendelse ved knust stein           | `RubinMod.blockBroken`                        | `PlayerBlockBreakEvents.AFTER`                     | `BreakBlockEvent`                                   |
| Malm i verden                      | `worldgen/feature` og `placed_feature` (JSON) | `BiomeModifications.addFeature` (Java)             | `neoforge/biome_modifier/rubinmalm.json` (JSON)     |
| Renderer                           | `RubinGrisRenderer`                           | `EntityRenderers.register`                         | `EntityRenderersEvent.RegisterRenderers`            |

Legg merke til mønsteret. Selve innholdet står i `common`. Loaderen sier bare
_når_ noe skal skje: når kommandoene skal registreres, når en kloss er knust,
når rendereren skal registreres. Da kaller den en metode i `common`.

Registrering er det eneste `common` må spørre loaderen om underveis. Til det
lager du et lite grensesnitt i steg 4.


# Steg 2: Ny mappestruktur {.activity}

## Sjekkliste {.check}

- [ ] Ta en kopi av prosjektet fra forrige oppgave, eller lagre det i git. Du
  flytter mange filer, og da er det godt å kunne gå tilbake.

- [ ] Lag mappene `common`, `fabric` og `neoforge` i prosjektmappa, ved siden av
  `src`.

- [ ] Flytt hele `src` inn i `common`. Nå har du `common/src/main` og
  `common/src/client`.

- [ ] Flytt `fabric.mod.json` fra `common/src/main/resources` til
  `fabric/src/main/resources`.

- [ ] Flytt `RubinModClient.java` fra `common/src/client/java/...` til
  `fabric/src/client/java/no/kidsakoder/rubinmod/fabric/`, og gi den det nye
  navnet `RubinModFabricClient.java`.

- [ ] Har du mappa `src/gametest`, flytter du den til `fabric/src/gametest`.

Når du er ferdig, skal prosjektet se slik ut:

```
rubinmod/
  settings.gradle.kts
  build.gradle.kts
  gradle.properties
  common/
    build.gradle.kts
    src/main/java/no/kidsakoder/rubinmod/     ModItems, ModBlocks, RubinMod ...
    src/main/resources/                       assets og data
    src/client/java/no/kidsakoder/rubinmod/   RubinGrisRenderer
  fabric/
    build.gradle.kts
    src/main/java/no/kidsakoder/rubinmod/fabric/     RubinModFabric, FabricPlatform
    src/main/resources/                              fabric.mod.json
    src/client/java/no/kidsakoder/rubinmod/fabric/   RubinModFabricClient
  neoforge/
    build.gradle.kts
    src/main/java/no/kidsakoder/rubinmod/neoforge/   RubinModNeoForge ...
    src/main/resources/                              neoforge.mods.toml ...
```

<!-- BILDE: Prosjektvinduet i IntelliJ med mappene common, fabric og neoforge
åpnet, slik at man ser hvilke filer som ligger hvor. -->

Mappene til Java-pakken i `fabric` og `neoforge` slutter på `fabric` og
`neoforge`. Da har klassene fra hver loader sin egen pakke, og du ser med en
gang hvilken del en klasse hører til.


# Steg 3: Gradle-filene {.activity}

Nå er prosjektet tre Gradle-moduler. Hver modul har sin egen `build.gradle.kts`,
og filene i roten binder dem sammen.

## Sjekkliste {.check}

- [ ] Bytt ut innholdet i `settings.gradle.kts`:

  ```kotlin
  pluginManagement {
      repositories {
          maven("https://maven.fabricmc.net/") { name = "Fabric" }
          mavenCentral()
          gradlePluginPortal()
      }
  }

  plugins {
      // Laster ned Java 25 hvis maskinen ikke har den.
      id("org.gradle.toolchains.foojay-resolver-convention") version "1.0.0"
  }

  rootProject.name = "rubinmod"

  // Tre moduler, som i jaredlll08s MultiLoader-Template:
  // common:   koden og dataene som er like for alle loadere (ren Minecraft)
  // fabric:   det som bare Fabric trenger, pluss common kompilert inn
  // neoforge: det som bare NeoForge trenger, pluss common kompilert inn
  include("common", "fabric", "neoforge")
  ```

- [ ] Bytt ut innholdet i `build.gradle.kts` i roten. Den nevner bare pluginene:

  ```kotlin
  plugins {
      // Fabric Loom: bygger Fabric-moden og lager runClient.
      id("net.fabricmc.fabric-loom") version "1.19.4" apply false
      // ModDevGradle: bygger NeoForge-moden. I common brukes den til å hente ren
      // Minecraft uten noen loader (NeoForm).
      id("net.neoforged.moddev") version "2.0.148" apply false
  }
  ```

- [ ] Bytt ut innholdet i `gradle.properties`:

  ```text
  org.gradle.jvmargs=-Xmx3G

  # Minecraft og Java, samme for alle modulene
  minecraft_version=26.3
  java_version=25

  # Fabric, se https://fabricmc.net/develop
  loader_version=0.20.1
  fabric_api_version=0.165.2+26.3

  # NeoForge, se https://projects.neoforged.net/neoforged/neoforge
  neoforge_version=26.3.0.102
  # Ren Minecraft for common (NeoForm), se https://projects.neoforged.net/neoforged/neoform
  neo_form_version=26.3-1

  mod_version=1.0.0
  maven_group=no.kidsakoder
  ```

- [ ] Hent `common/build.gradle.kts`, `fabric/build.gradle.kts` og
  `neoforge/build.gradle.kts` fra `steg/09_felleskode` i løsningsrepoet, og legg
  dem i de tre mappene. <!-- LENKE: løsningsrepo -->

Byggefilene er lange, men du trenger ikke skrive dem selv. Les kommentarene i
dem. Dette er de viktigste delene:

- `common` bruker **ModDevGradle** i NeoForm-modus. Det gir ren Minecraft, uten
  Fabric og uten NeoForge. Prøver du å bruke en Fabric-klasse i `common`, finnes
  den ikke, og bygget stopper.

- `common` lager ingen jar-fil selv. `fabric` og `neoforge` henter kildene og
  dataene fra `common` inn i sin egen kompilering. I `fabric/build.gradle.kts`
  står det slik:

  ```kotlin
  tasks.compileJava { source(rootProject.file("common/src/main/java")) }
  tasks.named<JavaCompile>("compileClientJava") { source(rootProject.file("common/src/client/java")) }

  tasks.processResources {
      from(rootProject.file("common/src/main/resources"))
  ```

- Hver loader gir jar-fila sitt eget navn, så de ikke blandes:

  ```kotlin
  base {
      // Gir rubinmod-fabric-1.0.0.jar, så den ikke blandes med NeoForge-jar-fila.
      archivesName = "rubinmod-fabric"
  }
  ```

- [ ] Klikk **Load Gradle Changes**, eller **Reload All Gradle Projects** i
  Gradle-panelet. Første gang laster Gradle ned både Fabric og NeoForge, så det
  tar lengre tid enn før.

Koden kompilerer ikke ennå. Det fikser du i de neste stegene.

## Tips {.tip}

Oppsettet er laget etter
[MultiLoader-Template](https://github.com/jaredlll08/MultiLoader-Template) av
jaredlll08. Mange moddere starter fra den malen når moden skal virke med flere
loadere.


# Steg 4: Plattformgrensesnittet {.activity}

Fabric og NeoForge registrerer på hver sin måte:

- **Fabric** har registrene åpne mens modene starter. Du lager itemet og
  registrerer det med en gang, som du har gjort hele kurset.

- **NeoForge** har låst registrene når modene starter. Du må si fra hva som skal
  registreres, og NeoForge lager tingene senere, når registeret åpnes. Til det
  bruker NeoForge en `DeferredRegister`.

`common` kan ikke bruke noen av dem. Løsningen er et **grensesnitt** med én
metode. `common` kaller metoden, og hver loader har sin egen klasse som gjør
jobben.

## Sjekkliste {.check}

- [ ] Lag `Platform.java` i `common/src/main/java/no/kidsakoder/rubinmod`:

  ```java
  package no.kidsakoder.rubinmod;

  import java.util.ServiceLoader;
  import java.util.function.Supplier;
  import net.minecraft.core.Registry;

  // Det eneste common må spørre loaderen om: hvordan noe registreres.
  // Fabric registrerer med en gang (Registry.register). NeoForge venter til den er
  // klar (DeferredRegister). Derfor gir register() tilbake en Supplier: kall get()
  // for å få itemet, men først når spillet er i gang.
  //
  // Hver loader-modul har sin egen klasse som implementerer grensesnittet:
  // fabric/.../FabricPlatform.java og neoforge/.../NeoForgePlatform.java.
  // Navnet på klassen står i META-INF/services/no.kidsakoder.rubinmod.Platform i
  // loader-modulen. Javas ServiceLoader leser den fila og lager et objekt av klassen.
  // Slik finner common riktig klasse uten å vite om Fabric eller NeoForge.
  public interface Platform {
      Platform INSTANCE = ServiceLoader.load(Platform.class, Platform.class.getClassLoader())
              .findFirst()
              .orElseThrow(() -> new IllegalStateException("Fant ingen Platform for denne loaderen"));

      // Registrerer det factory lager, med id rubinmod:<name>, i registeret registry
      // (for eksempel BuiltInRegistries.ITEM).
      <T> Supplier<T> register(Registry<? super T> registry, String name, Supplier<T> factory);
  }
  ```

Her er tre nye ting:

- **`Supplier<T>`** er et objekt med én metode, `get()`, som gir deg en `T`. Det
  er et løfte: _du får itemet når du spør_. På Fabric finnes itemet allerede. På
  NeoForge finnes det først når NeoForge har åpnet registeret.

- **`<T>`** foran metoden betyr at den virker for alle typer: `Item`, `Block` og
  `EntityType`. Du skriver én metode i stedet for tre.

- **`ServiceLoader`** er en del av Java. Den leser en tekstfil med navnet på
  grensesnittet, `META-INF/services/no.kidsakoder.rubinmod.Platform`, og lager
  et objekt av klassen som står der. Fabric-jar-fila og NeoForge-jar-fila har
  hver sin utgave av den fila. Slik får `Platform.INSTANCE` riktig klasse, uten
  at `common` vet hvilken loader som kjører.


# Steg 5: Feltene blir Supplier {.activity}

Når `register` gir en `Supplier`, må feltene i `ModItems`, `ModBlocks` og
`ModEntities` også være det. Det betyr at du skriver `ModItems.RUBIN.get()` der
du før skrev `ModItems.RUBIN`.

## Sjekkliste {.check}

- [ ] Bytt ut `register`-metoden i `ModItems`:

  ```java
      public static Supplier<Item> register(
              String name, Function<Item.Properties, Item> factory, Supplier<Item.Properties> properties) {
          ResourceKey<Item> key = ResourceKey.create(Registries.ITEM, RubinMod.id(name));
          // Både egenskapene og itemet lages inni lambdaen, altså først når loaderen er
          // klar. Noen egenskaper (som sword) slår opp i registrene, og på NeoForge er
          // de låst før det. Item-et må vite sin egen id før det lages (setId).
          return Platform.INSTANCE.register(BuiltInRegistries.ITEM, name,
                  () -> factory.apply(properties.get().setId(key)));
      }
  ```

- [ ] Gjør om feltene. Typen blir `Supplier<Item>`, og egenskapene skrives som
  en lambda, `() -> new Item.Properties()...`:

  ```java
      public static final Supplier<Item> RUBIN = register("rubin", Item::new, () -> new Item.Properties());
  ```

  ```java
      public static final Supplier<Item> RUBINSVERD = register("rubinsverd", Item::new,
              () -> new Item.Properties().sword(RUBIN_MATERIAL, 3.0F, -2.4F));
  ```

  ```java
      public static final Supplier<Item> RUBINGRIS_SPAWN_EGG = register("rubingris_spawn_egg",
              SpawnEggItem::new, () -> new Item.Properties().spawnEgg(ModEntities.RUBINGRIS.get()));
  ```

  Gjør det samme med `RUBINEPLE` og `RUBINSTAV`. `RUBIN_MATERIAL` registreres
  ikke, så det blir som før.

Hvorfor må `Item.Properties` lages inni lambdaen? `sword(...)` slår opp i
registrene for å finne taggen med reparasjons-itemene. Lager du egenskapene med
en gang, skjer det mens klassen lastes. På NeoForge er registrene låst da, og
spillet krasjer med **"Registry is already frozen"**. Inni lambdaen skjer det
først når NeoForge er klar.

- [ ] Ta bort fanen fra `ModItems`, og legg til id-en til fanen og en metode som
  gir innholdet:

  ```java
      // Id-en til fanen i kreativ modus. Selve fanen lages i hver loader, fordi
      // Fabric og NeoForge har hver sin måte å bygge den på.
      public static final ResourceKey<CreativeModeTab> TAB =
              ResourceKey.create(Registries.CREATIVE_MODE_TAB, RubinMod.id("rubiner"));
  ```

  ```java
      // Det som skal ligge i fanen. Begge loaderne henter lista når fanen fylles.
      // (Vi kan ikke ta inn CreativeModeTab.Output her: den er protected i Minecraft.
      // Fabric og NeoForge gjør den synlig for modene, men common ser ren Minecraft.)
      public static List<Item> tabItems() {
          return List.of(RUBIN.get(), ModBlocks.RUBINKLOSS.get().asItem(), ModBlocks.RUBINMALM.get().asItem(),
                  RUBINSVERD.get(), RUBINEPLE.get(), RUBINGRIS_SPAWN_EGG.get(), RUBINSTAV.get());
      }
  ```

- [ ] La `init()` i `ModItems` være tom. Den kalles bare for at feltene skal
  lages.

- [ ] Importer `java.util.function.Supplier` og `java.util.List`, og ta bort
  importene av Fabric.

- [ ] Gjør det samme i `ModBlocks`. Feltene blir `Supplier<Block>`, og
  `register` ser slik ut:

  ```java
      public static Supplier<Block> register(
              String name, Function<BlockBehaviour.Properties, Block> factory,
              Supplier<BlockBehaviour.Properties> properties) {
          ResourceKey<Block> key = ResourceKey.create(Registries.BLOCK, RubinMod.id(name));
          Supplier<Block> block = Platform.INSTANCE.register(BuiltInRegistries.BLOCK, name,
                  () -> factory.apply(properties.get().setId(key)));
          // En kloss i verden og en kloss i inventaret er to ting: Block og BlockItem.
          // useBlockDescriptionPrefix gir itemet samme navn som klossen (block.rubinmod.navn).
          ModItems.register(name, p -> new BlockItem(block.get(), p),
                  () -> new Item.Properties().useBlockDescriptionPrefix());
          return block;
      }
  ```

- [ ] Bytt ut `ModEntities`. Attributtene til grisen gis nå av loaderen, så
  Fabric-linja forsvinner herfra:

  ```java
  package no.kidsakoder.rubinmod;

  import java.util.function.Supplier;
  import net.minecraft.core.registries.BuiltInRegistries;
  import net.minecraft.core.registries.Registries;
  import net.minecraft.resources.ResourceKey;
  import net.minecraft.world.entity.EntityType;
  import net.minecraft.world.entity.MobCategory;

  public class ModEntities {
      public static final ResourceKey<EntityType<?>> RUBINGRIS_KEY =
              ResourceKey.create(Registries.ENTITY_TYPE, RubinMod.id("rubingris"));

      // CREATURE: et fredelig dyr. sized: bredde og høyde i klosser, som en vanlig gris.
      public static final Supplier<EntityType<RubinGris>> RUBINGRIS = Platform.INSTANCE.register(
              BuiltInRegistries.ENTITY_TYPE, "rubingris",
              () -> EntityType.Builder.of(RubinGris::new, MobCategory.CREATURE)
                      .sized(0.9F, 0.9F)
                      .build(RUBINGRIS_KEY));

      // Attributtene (liv, fart) står i RubinGris.createAttributes(). Hver loader gir
      // dem til vesenet på sin måte: FabricDefaultAttributeRegistry på Fabric og
      // EntityAttributeCreationEvent på NeoForge.
      public static void init() {
      }
  }
  ```

- [ ] I `ModCommands` bytter du ut `init()` med en metode som tar inn
  `dispatcher`. Selve kommandoen er den samme:

  ```java
      public static void register(CommandDispatcher<CommandSourceStack> dispatcher) {
          dispatcher.register(Commands.literal("rubinregn")
                  // Bare operatører (eller juks på i enspiller) får lage rubiner.
                  .requires(Commands.hasPermission(Commands.LEVEL_GAMEMASTERS))
                  .then(Commands.argument("antall", IntegerArgumentType.integer(1, 64))
                          .executes(context -> rubinregn(context.getSource(),
                                  IntegerArgumentType.getInteger(context, "antall")))));
      }
  ```

  Importer `com.mojang.brigadier.CommandDispatcher`, og ta bort importen av
  `CommandRegistrationCallback`.

- [ ] Bytt ut `RubinMod`. Den er ikke lenger en Fabric-startklasse, bare en
  vanlig klasse med det som er felles:

  ```java
  package no.kidsakoder.rubinmod;

  import net.minecraft.core.BlockPos;
  import net.minecraft.resources.Identifier;
  import net.minecraft.world.item.ItemStack;
  import net.minecraft.world.level.Level;
  import net.minecraft.world.level.block.Block;
  import net.minecraft.world.level.block.Blocks;
  import net.minecraft.world.level.block.state.BlockState;
  import org.slf4j.Logger;
  import org.slf4j.LoggerFactory;

  // Den felles delen av moden. Her er ingen Fabric eller NeoForge.
  // Hver loader har sin egen startklasse som kaller init() og kobler sine
  // hendelser til metodene her (RubinModFabric og RubinModNeoForge).
  public class RubinMod {
      public static final String MOD_ID = "rubinmod";
      public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

      // Kalles først av loaderens startklasse. Når klassene under brukes første gang,
      // lages feltene deres, og da blir vesenet, klossene og itemene registrert.
      public static void init() {
          LOGGER.info("Hei fra rubinmod!");
          ModEntities.init();
          ModBlocks.init();
          ModItems.init();
      }

      // Hendelsen fra steg 8. Loaderen kaller denne når en spiller knuser en kloss.
      // Er det stein, er det 5 prosent sjanse for at en rubin faller ut.
      public static void blockBroken(Level level, BlockPos pos, BlockState state) {
          if (state.is(Blocks.STONE) && level.getRandom().nextFloat() < 0.05F) {
              Block.popResource(level, pos, new ItemStack(ModItems.RUBIN.get()));
          }
      }

      // Alt i Minecraft har en id som "navnerom:navn", for eksempel rubinmod:rubin.
      public static Identifier id(String name) {
          return Identifier.fromNamespaceAndPath(MOD_ID, name);
      }
  }
  ```

- [ ] Finn resten av stedene der du bruker et felt som en verdi, og legg til
  `.get()`. I `RubinGris` er det rubinen grisen følger etter:

  ```java
          goalSelector.addGoal(2, new TemptGoal(this, 1.2, stack -> stack.is(ModItems.RUBIN.get()), false));
  ```

  I `ModCommands` er det `new ItemStack(ModItems.RUBIN.get())`.

`RubinGrisRenderer` blir som før, i `common/src/client`.

## Tips {.tip}

IntelliJ viser rød strek under alle stedene som mangler `.get()`. Gå gjennom dem
én etter én. Bruk ikke `.get()` i et `static final`-felt utenfor en lambda. Da
prøver du å hente itemet før NeoForge har laget det.


# Steg 6: Fabric-delen {.activity}

Nå lager du klassene som bare Fabric skal ha. Alle ligger i
`fabric/src/.../fabric`.

## Sjekkliste {.check}

- [ ] Lag `FabricPlatform.java` i
  `fabric/src/main/java/no/kidsakoder/rubinmod/fabric`:

  ```java
  package no.kidsakoder.rubinmod.fabric;

  import java.util.function.Supplier;
  import net.minecraft.core.Registry;
  import no.kidsakoder.rubinmod.Platform;
  import no.kidsakoder.rubinmod.RubinMod;

  // Fabric sin måte å registrere på. Registrene er åpne mens modene starter,
  // så vi lager tingen og registrerer den med en gang, som i steg 3 til 8.
  // Navnet på denne klassen står i META-INF/services/no.kidsakoder.rubinmod.Platform.
  public class FabricPlatform implements Platform {
      @Override
      public <T> Supplier<T> register(Registry<? super T> registry, String name, Supplier<T> factory) {
          T value = Registry.register(registry, RubinMod.id(name), factory.get());
          return () -> value;
      }
  }
  ```

  Fabric lager tingen med `factory.get()` med en gang, og gir tilbake en
  `Supplier` som bare gir den samme tingen hver gang.

- [ ] Lag fila
  `fabric/src/main/resources/META-INF/services/no.kidsakoder.rubinmod.Platform`.
  Fila har ingen filendelse, og bare én linje:

  ```
  no.kidsakoder.rubinmod.fabric.FabricPlatform
  ```

- [ ] Lag startklassen `RubinModFabric.java`. Her er alt som bruker Fabric API:

  ```java
  package no.kidsakoder.rubinmod.fabric;

  import net.fabricmc.api.ModInitializer;
  import net.fabricmc.fabric.api.biome.v1.BiomeModifications;
  import net.fabricmc.fabric.api.biome.v1.BiomeSelectors;
  import net.fabricmc.fabric.api.command.v2.CommandRegistrationCallback;
  import net.fabricmc.fabric.api.creativetab.v1.FabricCreativeModeTab;
  import net.fabricmc.fabric.api.event.player.PlayerBlockBreakEvents;
  import net.fabricmc.fabric.api.object.builder.v1.entity.FabricDefaultAttributeRegistry;
  import net.minecraft.core.Registry;
  import net.minecraft.core.registries.BuiltInRegistries;
  import net.minecraft.core.registries.Registries;
  import net.minecraft.network.chat.Component;
  import net.minecraft.resources.ResourceKey;
  import net.minecraft.world.item.ItemStack;
  import net.minecraft.world.level.levelgen.GenerationStep;
  import no.kidsakoder.rubinmod.ModCommands;
  import no.kidsakoder.rubinmod.ModEntities;
  import no.kidsakoder.rubinmod.ModItems;
  import no.kidsakoder.rubinmod.RubinGris;
  import no.kidsakoder.rubinmod.RubinMod;

  // Startklassen for Fabric (står under "main" i fabric.mod.json).
  // Alt som bruker Fabric API, ligger her. Resten ligger i common.
  public class RubinModFabric implements ModInitializer {
      @Override
      public void onInitialize() {
          // Felles: registrerer vesenet, klossene og itemene (via FabricPlatform).
          RubinMod.init();

          // Fabric: attributtene til rubingrisen.
          FabricDefaultAttributeRegistry.register(ModEntities.RUBINGRIS.get(), RubinGris.createAttributes());

          // Fabric: fanen i kreativ modus. Innholdet kommer fra common (ModItems.tabItems).
          Registry.register(BuiltInRegistries.CREATIVE_MODE_TAB, ModItems.TAB, FabricCreativeModeTab.builder()
                  .title(Component.translatable("itemGroup.rubinmod.rubiner"))
                  .icon(() -> new ItemStack(ModItems.RUBIN.get()))
                  .displayItems((parameters, output) -> ModItems.tabItems().forEach(output::accept))
                  .build());

          // Fabric: legg malmen inn i alle biomer i oververdenen. Hvordan malmen ser ut,
          // står i data/rubinmod/worldgen i common.
          BiomeModifications.addFeature(BiomeSelectors.foundInOverworld(),
                  GenerationStep.Decoration.UNDERGROUND_ORES,
                  ResourceKey.create(Registries.PLACED_FEATURE, RubinMod.id("rubinmalm")));

          // Fabric sier fra når kommandoene skal registreres. Selve kommandoen er felles.
          CommandRegistrationCallback.EVENT.register((dispatcher, buildContext, selection) ->
                  ModCommands.register(dispatcher));

          // Fabric kaller koden hver gang en spiller har knust en kloss.
          // Hva som skjer da, er felles (RubinMod.blockBroken).
          PlayerBlockBreakEvents.AFTER.register((level, player, pos, state, blockEntity) ->
                  RubinMod.blockBroken(level, pos, state));
      }
  }
  ```

- [ ] Bytt ut innholdet i `RubinModFabricClient.java`:

  ```java
  package no.kidsakoder.rubinmod.fabric;

  import net.fabricmc.api.ClientModInitializer;
  import net.minecraft.client.renderer.entity.EntityRenderers;
  import no.kidsakoder.rubinmod.ModEntities;
  import no.kidsakoder.rubinmod.RubinGrisRenderer;

  // Klientdelen for Fabric (står under "client" i fabric.mod.json).
  // Rendereren selv er felles (common/src/client). Her sier vi bare fra om den.
  public class RubinModFabricClient implements ClientModInitializer {
      @Override
      public void onInitializeClient() {
          EntityRenderers.register(ModEntities.RUBINGRIS.get(), RubinGrisRenderer::new);
      }
  }
  ```

  `EntityRenderers.register` er ikke åpen for moder i ren Minecraft. Fabric
  åpner den, men `common` ser ren Minecraft. Derfor ligger denne linja i
  loader-modulen.

- [ ] Rett startklassene i `fabric.mod.json`:

  ```json
    "entrypoints": {
      "main": ["no.kidsakoder.rubinmod.fabric.RubinModFabric"],
      "client": ["no.kidsakoder.rubinmod.fabric.RubinModFabricClient"]
    },
  ```

## Test prosjektet {.flag}

- [ ] Klikk **Load Gradle Changes** hvis IntelliJ spør.

- [ ] Åpne Gradle-panelet. Nå ligger oppgavene under **fabric**, **Tasks**,
  **fabric**. Dobbeltklikk på **runClient**. I terminalen skriver du:

  ```
  ./gradlew :fabric:runClient
  ```

- [ ] Virker alt som før? Prøv fanen **Rubiner**, `/rubinregn 30`, staven og
  rubingrisen.

![Rubiner faller fra en blå himmel i Fabric. I chatten står det Det regner 30
rubiner!](09-fabric-rubinregn.png)


# Steg 7: NeoForge-delen {.activity}

NeoForge gjør det samme som Fabric, men med andre navn. Les klassene ved siden
av Fabric-klassene. Da ser du hele forskjellen på de to loaderne.

## Sjekkliste {.check}

- [ ] Lag `NeoForgePlatform.java` i
  `neoforge/src/main/java/no/kidsakoder/rubinmod/neoforge`:

  ```java
  package no.kidsakoder.rubinmod.neoforge;

  import java.util.LinkedHashMap;
  import java.util.Map;
  import java.util.function.Supplier;
  import net.minecraft.core.Registry;
  import net.minecraft.resources.ResourceKey;
  import net.neoforged.bus.api.IEventBus;
  import net.neoforged.neoforge.registries.DeferredRegister;
  import no.kidsakoder.rubinmod.Platform;
  import no.kidsakoder.rubinmod.RubinMod;

  // NeoForge sin måte å registrere på. Registrene er låst når modene starter.
  // En DeferredRegister husker hva som skal registreres, og gjør det når NeoForge
  // åpner registeret. Derfor kan vi ikke lage itemet med en gang, bare gi en
  // Supplier som NeoForge kaller senere.
  // Navnet på denne klassen står i META-INF/services/no.kidsakoder.rubinmod.Platform.
  public class NeoForgePlatform implements Platform {
      // Én DeferredRegister for hvert register vi bruker (vesener, klosser, items).
      private static final Map<ResourceKey<?>, DeferredRegister<?>> REGISTERS = new LinkedHashMap<>();

      @Override
      @SuppressWarnings("unchecked")
      public <T> Supplier<T> register(Registry<? super T> registry, String name, Supplier<T> factory) {
          // Finn DeferredRegister for dette registeret, eller lag en ny første gang.
          // (Javas typer klarer ikke å se at dette stemmer, derfor cast og SuppressWarnings.)
          DeferredRegister<T> deferred = (DeferredRegister<T>) REGISTERS.computeIfAbsent(registry.key(),
                  key -> DeferredRegister.create((ResourceKey<Registry<T>>) key, RubinMod.MOD_ID));
          return deferred.register(name, factory);
      }

      // Kobler alle DeferredRegister-ene til modens hendelsesbuss. Kalles fra
      // RubinModNeoForge etter RubinMod.init(), når alt er lagt inn.
      public static void registerAll(IEventBus modBus) {
          for (DeferredRegister<?> deferred : REGISTERS.values()) {
              deferred.register(modBus);
          }
      }
  }
  ```

  Sammenlign med `FabricPlatform`. Fabric kaller `factory.get()` med en gang.
  NeoForge gir `factory` videre til en `DeferredRegister`, som kaller den
  senere.

- [ ] Lag fila

  ```
  neoforge/src/main/resources/META-INF/services/no.kidsakoder.rubinmod.Platform
  ```

  med denne linja:

  ```
  no.kidsakoder.rubinmod.neoforge.NeoForgePlatform
  ```

- [ ] Lag startklassen `RubinModNeoForge.java`:

  ```java
  package no.kidsakoder.rubinmod.neoforge;

  import net.minecraft.core.registries.Registries;
  import net.minecraft.network.chat.Component;
  import net.minecraft.world.item.CreativeModeTab;
  import net.minecraft.world.item.ItemStack;
  import net.minecraft.world.level.Level;
  import net.neoforged.bus.api.IEventBus;
  import net.neoforged.fml.common.Mod;
  import net.neoforged.neoforge.common.NeoForge;
  import net.neoforged.neoforge.event.RegisterCommandsEvent;
  import net.neoforged.neoforge.event.entity.EntityAttributeCreationEvent;
  import net.neoforged.neoforge.event.level.block.BreakBlockEvent;
  import net.neoforged.neoforge.registries.DeferredRegister;
  import no.kidsakoder.rubinmod.ModCommands;
  import no.kidsakoder.rubinmod.ModEntities;
  import no.kidsakoder.rubinmod.ModItems;
  import no.kidsakoder.rubinmod.RubinGris;
  import no.kidsakoder.rubinmod.RubinMod;

  // Startklassen for NeoForge. @Mod sier hvilken mod klassen hører til, og
  // NeoForge lager et objekt av den når spillet starter (konstruktøren kjøres).
  // Alt som bruker NeoForge, ligger her. Resten ligger i common.
  @Mod(RubinMod.MOD_ID)
  public class RubinModNeoForge {
      // modBus er modens hendelsesbuss: hendelser om oppstart og registrering.
      // NeoForge.EVENT_BUS er spillets buss: hendelser mens spillet er i gang.
      public RubinModNeoForge(IEventBus modBus) {
          // Felles: legger vesenet, klossene og itemene inn i NeoForgePlatform.
          RubinMod.init();
          NeoForgePlatform.registerAll(modBus);

          // NeoForge: fanen i kreativ modus. Slik ser en DeferredRegister ut når du
          // bruker den direkte. Innholdet kommer fra common (ModItems.tabItems).
          DeferredRegister<CreativeModeTab> tabs =
                  DeferredRegister.create(Registries.CREATIVE_MODE_TAB, RubinMod.MOD_ID);
          tabs.register("rubiner", () -> CreativeModeTab.builder()
                  .title(Component.translatable("itemGroup.rubinmod.rubiner"))
                  .icon(() -> new ItemStack(ModItems.RUBIN.get()))
                  .displayItems((parameters, output) -> ModItems.tabItems().forEach(output::accept))
                  .build());
          tabs.register(modBus);

          // NeoForge: attributtene til rubingrisen.
          modBus.addListener((EntityAttributeCreationEvent event) ->
                  event.put(ModEntities.RUBINGRIS.get(), RubinGris.createAttributes().build()));

          // NeoForge sier fra når kommandoene skal registreres. Selve kommandoen er felles.
          NeoForge.EVENT_BUS.addListener((RegisterCommandsEvent event) ->
                  ModCommands.register(event.getDispatcher()));

          // NeoForge kaller koden når en spiller knuser en kloss (rett før den forsvinner).
          // Hva som skjer da, er felles (RubinMod.blockBroken).
          NeoForge.EVENT_BUS.addListener((BreakBlockEvent event) -> {
              if (event.getLevel() instanceof Level level) {
                  RubinMod.blockBroken(level, event.getPos(), event.getState());
              }
          });

          // Malmen legges inn i biomene med en JSON-fil, ikke med Java:
          // src/main/resources/data/rubinmod/neoforge/biome_modifier/rubinmalm.json
      }
  }
  ```

NeoForge har ingen `onInitialize()`. Den lager et objekt av klassen med `@Mod`,
og da kjøres konstruktøren. Hendelser lytter du på med `addListener`, og typen
på parameteren sier hvilken hendelse det er.

NeoForge har to hendelsesbusser. `modBus` er for oppstart og registrering.
`NeoForge.EVENT_BUS` er for det som skjer mens du spiller, som kommandoer og
knuste klosser.

`BreakBlockEvent` kommer _før_ klossen forsvinner, mens Fabric sin `AFTER`
kommer etter. For en rubin som faller ut, spiller det ingen rolle.

- [ ] Lag `RubinModNeoForgeClient.java` i samme mappe:

  ```java
  package no.kidsakoder.rubinmod.neoforge;

  import net.neoforged.api.distmarker.Dist;
  import net.neoforged.bus.api.IEventBus;
  import net.neoforged.fml.common.Mod;
  import net.neoforged.neoforge.client.event.EntityRenderersEvent;
  import no.kidsakoder.rubinmod.ModEntities;
  import no.kidsakoder.rubinmod.RubinGrisRenderer;
  import no.kidsakoder.rubinmod.RubinMod;

  // Klientdelen for NeoForge. dist = Dist.CLIENT: NeoForge lager bare dette objektet
  // i spillet på maskinen din, ikke på en server. Rendereren selv er felles
  // (common/src/client). Her sier vi bare fra om den.
  @Mod(value = RubinMod.MOD_ID, dist = Dist.CLIENT)
  public class RubinModNeoForgeClient {
      public RubinModNeoForgeClient(IEventBus modBus) {
          modBus.addListener((EntityRenderersEvent.RegisterRenderers event) ->
                  event.registerEntityRenderer(ModEntities.RUBINGRIS.get(), RubinGrisRenderer::new));
      }
  }
  ```

- [ ] Lag `neoforge/src/main/resources/META-INF/neoforge.mods.toml`. Den er
  NeoForge sin utgave av `fabric.mod.json`:

  ```text
  # NeoForge sin utgave av fabric.mod.json: hvem moden er og hva den trenger.
  modLoader = "javafml"
  loaderVersion = "[1,)"
  license = "MIT"

  [[mods]]
  modId = "rubinmod"
  version = "${version}"
  displayName = "Rubinmod"
  authors = "Lær Kidsa Koding"
  description = '''Kursmod fra Lær Kidsa Koding.'''

  [[dependencies.rubinmod]]
  modId = "neoforge"
  type = "required"
  versionRange = "[26.3.0.102,)"
  ordering = "NONE"
  side = "BOTH"

  [[dependencies.rubinmod]]
  modId = "minecraft"
  type = "required"
  versionRange = "[26.3,26.4)"
  ordering = "NONE"
  side = "BOTH"
  ```

  Skriv ditt eget navn i `authors` hvis du vil.

- [ ] NeoForge legger malmen inn i biomene med JSON, ikke med Java. Lag
  `neoforge/src/main/resources/data/rubinmod/neoforge/biome_modifier/rubinmalm.json`:

  ```json
  {
    "type": "neoforge:add_features",
    "biomes": "#minecraft:is_overworld",
    "features": "rubinmod:rubinmalm",
    "step": "underground_ores"
  }
  ```

  Fila sier det samme som `BiomeModifications.addFeature` i `RubinModFabric`:
  legg `rubinmod:rubinmalm` inn i alle biomer i oververdenen, sammen med annen
  malm.


# Steg 8: Hold common ren {.activity}

Hva skjer hvis noen ved et uhell bruker Fabric i `common`? Da virker moden på
Fabric, men ikke på NeoForge. `common/build.gradle.kts` har en egen sjekk for
det:

```kotlin
val checkCommonImports = tasks.register("checkCommonImports") {
    group = "verification"
    description = "Feiler hvis common importerer en mod-loader"
    val sources = fileTree("src") { include("**/*.java") }
    inputs.files(sources)
    doLast {
        val banned = Regex("""^\s*import\s+(static\s+)?(net\.fabricmc|net\.neoforged)\..*""", RegexOption.MULTILINE)
        val hits = sources.files.flatMap { f ->
            banned.findAll(f.readText()).map { "${f.name}: ${it.value.trim()}" }
        }
        if (hits.isNotEmpty()) {
            throw GradleException("common skal ikke bruke Fabric eller NeoForge:\n" + hits.joinToString("\n"))
        }
    }
}
tasks.named("check") { dependsOn(checkCommonImports) }
```

Oppgaven leser alle Java-filene i `common/src`, og leter etter linjer som
begynner med `import net.fabricmc` eller `import net.neoforged`. Finner den
noen, stopper bygget med en melding om hvilken fil det er. `check` er en del av
`build`, så sjekken kjører hver gang du bygger.

## Test prosjektet {.flag}

- [ ] Legg til `import net.fabricmc.api.ModInitializer;` øverst i `ModItems`.

- [ ] Kjør `./gradlew build`, eller dobbeltklikk på **build** under **Tasks** og
  **build** i Gradle-panelet. Hva står det i meldingen?

- [ ] Ta bort linja igjen, og bygg på nytt.


# Steg 9: Kjør med NeoForge {.activity}

## Test prosjektet {.flag}

- [ ] Åpne Gradle-panelet. Under **neoforge**, **Tasks** finner du **runClient**
  for NeoForge. I terminalen skriver du:

  ```
  ./gradlew :neoforge:runClient
  ```

<!-- BILDE: Gradle-panelet i IntelliJ med modulene common, fabric og neoforge.
runClient er markert både under fabric og under neoforge. -->

- [ ] Vent til spillet starter. Første gang tar det litt tid.

- [ ] Lag en ny verden og prøv alt: fanen **Rubiner**, rubinsverdet, eplet,
  `/rubinregn 30`, staven og rubingrisen. Hakk ut stein og let etter rubinmalm.

- [ ] Kjør `./gradlew build`. Finner du `rubinmod-fabric-1.0.0.jar` i
  `fabric/build/libs` og `rubinmod-neoforge-1.0.0.jar` i `neoforge/build/libs`?

<!-- BILDE: Minecraft startet med NeoForge, med rubingrisen og rubinstaven, slik
at man ser at moden virker på NeoForge også. -->

## Tips {.protip}

Henger NeoForge lenge før hovedmenyen kommer? Minecraft spør Windows om
ytelsesdata når spillet starter, og på noen maskiner tar det mange minutter. Det
er ikke en feil i moden. Legg til denne linja i `register("client") { ... }` i
`neoforge/build.gradle.kts`, under `client()`:

```kotlin
systemProperty("oshi.os.windows.hkeyperfdata", "false")
```

## Utfordring {.challenge}

- [ ] Lag et nytt item i `common`, for eksempel en rubinring. Kommer det med på
  både Fabric og NeoForge, uten at du endrer noe i `fabric` eller `neoforge`?

- [ ] Fanen i kreativ modus lages i hver loader. Prøv å legge den inn i
  `Platform`-grensesnittet i stedet, med en metode i `FabricPlatform` og
  `NeoForgePlatform`. Blir koden lettere eller vanskeligere å lese?

- [ ] Finn en annen hendelse i Fabric og NeoForge som gjør det samme, for
  eksempel når en spiller logger inn. Skriv det som skal skje i `RubinMod`, og
  koble hendelsen til den i begge startklassene.
