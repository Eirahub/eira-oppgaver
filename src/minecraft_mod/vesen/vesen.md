---
title: Vesen
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå skal moden få liv. Du lager en **rubingris**, en gris av rubin som vandrer
rundt, ser på deg, løper når du slår den, og følger etter deg når du holder en
rubin. Når den dør, slipper den en eller to rubiner.

Et vesen (på engelsk _entity_ eller _mob_) er mer arbeid enn en kloss. Du lærer
om **mål** (goals) som styrer hva vesenet gjør, om **attributter** som liv og
fart, og om forskjellen på **klient** og **server**.

![Tre røde rubingriser står på gresset og ser mot spilleren, som holder en
rubin](07-rubingris.png)


# Steg 1: Klient og server {.activity}

Minecraft er egentlig to programmer. **Serveren** bestemmer hva som skjer: hvor
grisen går, hvor mye liv den har, hva den dropper. **Klienten** er spillet på
maskinen din. Den tegner verden og spiller lyder. Også når du spiller alene,
kjører det en server inne i spillet.

En server har ingen skjerm. Kode som tegner, må derfor bare finnes på klienten.
Fabric kan dele prosjektet i to mapper: `src/main` for kode som trengs begge
steder, og `src/client` for kode som bare klienten har. Da sier Gradle fra hvis
du bruker klientkode på feil sted.

## Sjekkliste {.check}

- [ ] Fortsett i prosjektet fra forrige oppgave. Åpne `build.gradle.kts`, og
  legg til denne blokka under `java { ... }`:

  ```kotlin
  loom {
      // Kode som bare klienten har (tegning av vesener, modeller) ligger i src/client.
      // Resten ligger i src/main. Da stopper bygget hvis serverkode bruker klientkode.
      splitEnvironmentSourceSets()
      mods {
          register("rubinmod") {
              sourceSet(sourceSets.main.get())
              sourceSet(sourceSets["client"])
          }
      }
  }
  ```

- [ ] Klikk på det lille Gradle-ikonet som dukker opp øverst til høyre i
  editoren (**Load Gradle Changes**), så IntelliJ leser fila på nytt.

- [ ] Lag mappene `src/client/java/no/kidsakoder/rubinmod`. Mappa `java` under
  `src/client` skal bli blå når Gradle er ferdig. Det betyr at IntelliJ ser på
  den som kode.

- [ ] Legg til et klient-entrypoint i `fabric.mod.json`:

  ```json
    "entrypoints": {
      "main": ["no.kidsakoder.rubinmod.RubinMod"],
      "client": ["no.kidsakoder.rubinmod.RubinModClient"]
    },
  ```

`"main"` kjøres både på klienten og serveren. `"client"` kjøres bare i spillet
på maskinen din.


# Steg 2: Klassen RubinGris {.activity}

## Sjekkliste {.check}

- [ ] Lag klassen `RubinGris` i `src/main/java/no/kidsakoder/rubinmod`:

  ```java
  package no.kidsakoder.rubinmod;

  import net.minecraft.world.entity.EntityType;
  import net.minecraft.world.entity.PathfinderMob;
  import net.minecraft.world.entity.ai.attributes.AttributeSupplier;
  import net.minecraft.world.entity.ai.attributes.Attributes;
  import net.minecraft.world.entity.ai.goal.FloatGoal;
  import net.minecraft.world.entity.ai.goal.LookAtPlayerGoal;
  import net.minecraft.world.entity.ai.goal.PanicGoal;
  import net.minecraft.world.entity.ai.goal.RandomLookAroundGoal;
  import net.minecraft.world.entity.ai.goal.TemptGoal;
  import net.minecraft.world.entity.ai.goal.WaterAvoidingRandomStrollGoal;
  import net.minecraft.world.entity.player.Player;
  import net.minecraft.world.level.Level;

  // En gris av rubin. PathfinderMob er et vesen som kan finne veien selv.
  // Hva den dropper når den dør, står i loot_table/entities/rubingris.json.
  public class RubinGris extends PathfinderMob {
      public RubinGris(EntityType<? extends RubinGris> type, Level level) {
          super(type, level);
      }

      // Liv, fart og hvor langt unna den ser en rubin (TemptGoal under krasjer uten
      // TEMPT_RANGE). Fabric får disse i ModEntities.init().
      public static AttributeSupplier.Builder createAttributes() {
          return PathfinderMob.createMobAttributes()
                  .add(Attributes.MAX_HEALTH, 10.0)
                  .add(Attributes.MOVEMENT_SPEED, 0.25)
                  .add(Attributes.TEMPT_RANGE, 10.0);
      }

      // Mål (goals) styrer hva vesenet gjør. Lavest tall vinner når to mål vil kjøre samtidig.
      @Override
      protected void registerGoals() {
          goalSelector.addGoal(0, new FloatGoal(this));
          goalSelector.addGoal(1, new PanicGoal(this, 1.25));
          // Følger etter spillere som holder en rubin.
          goalSelector.addGoal(2, new TemptGoal(this, 1.2, stack -> stack.is(ModItems.RUBIN), false));
          goalSelector.addGoal(3, new WaterAvoidingRandomStrollGoal(this, 1.0));
          goalSelector.addGoal(4, new LookAtPlayerGoal(this, Player.class, 6.0F));
          goalSelector.addGoal(5, new RandomLookAroundGoal(this));
      }
  }
  ```

Her bruker du arv og `@Override` fra Java-kurset. `RubinGris` arver fra
`PathfinderMob`, et vesen som kan finne veien rundt hindringer. Vi overstyrer
`registerGoals()` for å gi grisen sin egen oppførsel.

Hvert **mål** er en liten oppgave grisen kan gjøre. Hvert tick spør Minecraft
målene om de vil kjøre. Vil flere, vinner det med lavest tall:

| Tall | Mål                             | Hva grisen gjør                             |
| ---- | ------------------------------- | ------------------------------------------- |
| 0    | `FloatGoal`                     | Svømmer, så den ikke drukner                |
| 1    | `PanicGoal`                     | Løper fort når den blir slått               |
| 2    | `TemptGoal`                     | Følger etter en spiller som holder en rubin |
| 3    | `WaterAvoidingRandomStrollGoal` | Vandrer rundt, men ikke ut i vann           |
| 4    | `LookAtPlayerGoal`              | Ser på spillere i nærheten                  |
| 5    | `RandomLookAroundGoal`          | Ser seg rundt                               |

**Attributter** er tall som liv og fart. `TEMPT_RANGE` er hvor langt unna grisen
ser en rubin. `TemptGoal` trenger det, og uten det krasjer spillet første gang
grisen tenker.

## Tips {.tip}

Hvorfor arver vi ikke fra `Pig`, den vanlige grisen? Vanlige griser finnes i
flere varianter (for varmt og kaldt klima), og tegnekoden deres leser varianten.
Det blir mye mer kode. Med `PathfinderMob` lager vi alt selv og har full
kontroll.


# Steg 3: Registrer vesenet {.activity}

## Sjekkliste {.check}

- [ ] Lag klassen `ModEntities` i `src/main/java/no/kidsakoder/rubinmod`:

  ```java
  package no.kidsakoder.rubinmod;

  import net.fabricmc.fabric.api.object.builder.v1.entity.FabricDefaultAttributeRegistry;
  import net.minecraft.core.Registry;
  import net.minecraft.core.registries.BuiltInRegistries;
  import net.minecraft.core.registries.Registries;
  import net.minecraft.resources.ResourceKey;
  import net.minecraft.world.entity.EntityType;
  import net.minecraft.world.entity.MobCategory;

  public class ModEntities {
      public static final ResourceKey<EntityType<?>> RUBINGRIS_KEY =
              ResourceKey.create(Registries.ENTITY_TYPE, RubinMod.id("rubingris"));

      // CREATURE: et fredelig dyr. sized: bredde og høyde i klosser, som en vanlig gris.
      public static final EntityType<RubinGris> RUBINGRIS = Registry.register(
              BuiltInRegistries.ENTITY_TYPE, RUBINGRIS_KEY,
              EntityType.Builder.of(RubinGris::new, MobCategory.CREATURE)
                      .sized(0.9F, 0.9F)
                      .build(RUBINGRIS_KEY));

      public static void init() {
          // Uten attributter (liv, fart) krasjer spillet når vesenet lages.
          FabricDefaultAttributeRegistry.register(RUBINGRIS, RubinGris.createAttributes());
      }
  }
  ```

- [ ] Kall `ModEntities.init()` først i `onInitialize()` i `RubinMod`:

  ```java
          LOGGER.info("Hei fra rubinmod!");
          ModEntities.init();
          ModBlocks.init();
          ModItems.init();
  ```

Legg merke til forskjellen på klassen og typen. `RubinGris` er klassen, og hver
gris i verden er et objekt av den. `RUBINGRIS` er en `EntityType`, oppskriften
Minecraft bruker når den skal lage en ny gris. `RubinGris::new` er konstruktøren
som oppskriften kaller.


# Steg 4: Tegn grisen {.activity}

Rubingrisen bruker grisemodellen fra Minecraft, men med vår egen tekstur. Koden
som tegner, skal bare være på klienten, så den legges i `src/client`.

## Sjekkliste {.check}

- [ ] Lag klassen `RubinGrisRenderer` i
  `src/client/java/no/kidsakoder/rubinmod`:

  ```java
  package no.kidsakoder.rubinmod;

  import net.minecraft.client.model.animal.pig.PigModel;
  import net.minecraft.client.model.geom.ModelLayers;
  import net.minecraft.client.renderer.entity.EntityRendererProvider;
  import net.minecraft.client.renderer.entity.MobRenderer;
  import net.minecraft.client.renderer.entity.state.LivingEntityRenderState;
  import net.minecraft.resources.Identifier;

  // Tegner rubingrisen med modellen til en vanlig gris, men med vår egen tekstur.
  // Teksturen må følge samme oppsett (64x64) som grisens tekstur.
  public class RubinGrisRenderer extends MobRenderer<RubinGris, LivingEntityRenderState, PigModel> {
      private static final Identifier TEXTURE = RubinMod.id("textures/entity/rubingris.png");

      public RubinGrisRenderer(EntityRendererProvider.Context context) {
          // 0.7F er størrelsen på skyggen under vesenet.
          super(context, new PigModel(context.bakeLayer(ModelLayers.PIG)), 0.7F);
      }

      @Override
      public LivingEntityRenderState createRenderState() {
          return new LivingEntityRenderState();
      }

      @Override
      public Identifier getTextureLocation(LivingEntityRenderState state) {
          return TEXTURE;
      }
  }
  ```

- [ ] Lag klassen `RubinModClient` i samme mappe:

  ```java
  package no.kidsakoder.rubinmod;

  import net.fabricmc.api.ClientModInitializer;
  import net.minecraft.client.renderer.entity.EntityRenderers;

  // Kjøres bare i spillet på maskinen din (klienten), ikke på en server.
  // Står under "client" i fabric.mod.json.
  public class RubinModClient implements ClientModInitializer {
      @Override
      public void onInitializeClient() {
          // Klienten må vite hvordan rubingrisen skal tegnes.
          EntityRenderers.register(ModEntities.RUBINGRIS, RubinGrisRenderer::new);
      }
  }
  ```

En **renderer** tegner vesenet. Minecraft tegner ikke direkte fra grisen, men
fra en **render state**, et lite objekt med det som trengs for å tegne: hvor
vesenet er, hvordan det beveger seg, om det er skadet. `createRenderState()`
lager et slikt objekt. `getTextureLocation` sier hvilken tekstur som skal
brukes.

`RubinModClient` er klient-entrypointet du skrev i `fabric.mod.json`. Det kobler
typen `RUBINGRIS` til rendereren.


# Steg 5: Teksturen {.activity}

Teksturen til et vesen er ikke ett bilde av vesenet. Den er alle sidene av alle
boksene i modellen, brettet ut som en pappeske. Grisemodellen bruker et bilde på
64 x 64 piksler, der hodet, kroppen og beina har hver sin plass.

## Sjekkliste {.check}

- [ ] Last ned `rubingris.png` fra løsningen til steget `07_vesen`. Den har
  samme oppsett som grisen i Minecraft. <!-- LENKE: løsningsrepo -->

- [ ] Åpne den i Blockbench, Piskel eller et annet tegneprogram og mal over den
  med dine egne farger. Ikke flytt på delene, da havner de på feil sted på
  grisen.

- [ ] Lagre den som
  `src/main/resources/assets/rubinmod/textures/entity/rubingris.png`.

![Teksturen til rubingrisen, 64 x 64 piksler, tegnet i et rutenett. Delene er
merket med fargede rammer](rubingris_rutenett.png)

Gul ramme: hodet. Cyan: snuten. Hvit: kroppen. Grønn: beina.

## Tips {.protip}

I Blockbench kan du åpne teksturen på en grisemodell og male rett på modellen i
3D. Da ser du med en gang hvor hver piksel havner.


# Steg 6: Spawn-egg, navn og loot table {.activity}

## Sjekkliste {.check}

- [ ] Legg til et spawn-egg i `ModItems`, under `RUBINEPLE`:

  ```java
      // Et spawn-egg lager et vesen der du bruker det. Teksturen er en vanlig item-tekstur.
      public static final Item RUBINGRIS_SPAWN_EGG = register("rubingris_spawn_egg",
              SpawnEggItem::new, new Item.Properties().spawnEgg(ModEntities.RUBINGRIS));
  ```

- [ ] Legg `output.accept(RUBINGRIS_SPAWN_EGG);` til i fanen, og importer
  `net.minecraft.world.item.SpawnEggItem`.

- [ ] Tegn en egg-tekstur på 16 x 16 piksler og lagre den som
  `assets/rubinmod/textures/item/rubingris_spawn_egg.png`.

- [ ] Lag `assets/rubinmod/items/rubingris_spawn_egg.json`:

  ```json
  {
    "model": {
      "type": "minecraft:model",
      "model": "rubinmod:item/rubingris_spawn_egg"
    }
  }
  ```

- [ ] Lag `assets/rubinmod/models/item/rubingris_spawn_egg.json`:

  ```json
  {
    "parent": "minecraft:item/generated",
    "textures": {
      "layer0": "rubinmod:item/rubingris_spawn_egg"
    }
  }
  ```

- [ ] Legg til navnene i `en_us.json`:

  ```json
    "entity.rubinmod.rubingris": "Ruby Pig",
    "item.rubinmod.rubingris_spawn_egg": "Ruby Pig Spawn Egg",
  ```

- [ ] Og i `no_no.json`:

  ```json
    "entity.rubinmod.rubingris": "Rubingris",
    "item.rubinmod.rubingris_spawn_egg": "Rubingris-egg",
  ```

- [ ] Lag `data/rubinmod/loot_table/entities/rubingris.json`, så grisen dropper
  en eller to rubiner:

  ```json
  {
    "type": "minecraft:entity",
    "pools": [
      {
        "entries": [
          {
            "type": "minecraft:item",
            "modifier": [
              {
                "type": "minecraft:set_count",
                "count": {
                  "type": "minecraft:uniform",
                  "max": 2,
                  "min": 1
                }
              }
            ],
            "name": "rubinmod:rubin"
          }
        ],
        "rolls": 1
      }
    ]
  }
  ```

Vesener bruker `entity.` foran navnet. Loot tables for vesener ligger i
`loot_table/entities`, ikke `loot_table/blocks`.


# Steg 7: Møt rubingrisen {.activity}

## Sjekkliste {.check}

- [ ] Start spillet med **runClient**.

- [ ] Hent rubingris-egget fra fanen **Rubiner** og høyreklikk på bakken.

- [ ] Du kan også skrive `/summon rubinmod:rubingris` i chatten.

![Tre rubingriser på gresset. Spilleren holder rubingris-egget, og navnet
Rubingris-egg står over verktøylinja](07-spawn-egg.png)

## Test prosjektet {.flag}

- [ ] Har grisen teksturen din?

- [ ] Vandrer den rundt og ser på deg?

- [ ] Hold en rubin i handa. Følger grisen etter deg?

- [ ] Slå grisen. Løper den?

- [ ] Bytt til overlevelse og slå grisen til den dør. Dropper den en eller to
  rubiner?

## Tips {.protip}

**Grisen er usynlig, eller spillet krasjer når den lages:** Sjekk at `"client"`
står i `fabric.mod.json`, og at `RubinModClient` ligger i `src/client`. **"Can't
find attribute minecraft:tempt_range":** Du mangler `TEMPT_RANGE` i
`createAttributes()`.

## Utfordring {.challenge}

- [ ] Gjør grisen raskere, eller gi den mer liv.

- [ ] Få grisen til å følge etter rubineplet også. Endre lambdaen i `TemptGoal`
  med `||`.

- [ ] Rubingrisen lages bare med egg eller kommando. Finn ut hvordan du kan få
  den til å dukke opp av seg selv i verden. Søk etter
  `BiomeModifications.addSpawn` i Fabric API. Husk at du brukte
  `BiomeModifications` for malmen.
