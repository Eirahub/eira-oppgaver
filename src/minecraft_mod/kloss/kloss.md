---
title: Kloss
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Ni rubiner skal kunne bli til en **rubinkloss**, slik ni diamanter blir til en
diamantkloss. Klossen kan settes ut i verden, og den må hakkes ut med jernhakke
eller bedre.

En kloss trenger flere filer enn et item. Du lærer forskjellen på en kloss i
verden (`Block`) og en kloss i inventaret (`BlockItem`), og hva **tagger** er.

![En vegg av røde rubinklosser i en flat verden. Spilleren holder en
rubinkloss](04-rubinkloss.png)


# Steg 1: Klassen ModBlocks {.activity}

En kloss i verden og en kloss i inventaret er to forskjellige ting. Klossen i
verden er en `Block`. Den har hardhet, lyd og farge på kartet. Klossen i
inventaret er et item, en `BlockItem`, som setter ut klossen når du
høyreklikker. Hver kloss trenger begge.

## Sjekkliste {.check}

- [ ] Fortsett i prosjektet fra forrige oppgave. Lag klassen `ModBlocks`:

  ```java
  package no.kidsakoder.rubinmod;

  import java.util.function.Function;
  import net.minecraft.core.Registry;
  import net.minecraft.core.registries.BuiltInRegistries;
  import net.minecraft.core.registries.Registries;
  import net.minecraft.resources.ResourceKey;
  import net.minecraft.world.item.BlockItem;
  import net.minecraft.world.item.Item;
  import net.minecraft.world.level.block.Block;
  import net.minecraft.world.level.block.SoundType;
  import net.minecraft.world.level.block.state.BlockBehaviour;
  import net.minecraft.world.level.material.MapColor;

  public class ModBlocks {
      // Like hard som en diamantkloss. requiresCorrectToolForDrops: uten riktig hakke
      // dropper klossen ingenting. Hvilken hakke står i taggene under data/minecraft.
      public static final Block RUBINKLOSS = register("rubinkloss", Block::new,
              BlockBehaviour.Properties.of()
                      .mapColor(MapColor.COLOR_RED)
                      .requiresCorrectToolForDrops()
                      .strength(5.0F, 6.0F)
                      .sound(SoundType.METAL));

      public static Block register(
              String name, Function<BlockBehaviour.Properties, Block> factory,
              BlockBehaviour.Properties properties) {
          ResourceKey<Block> key = ResourceKey.create(Registries.BLOCK, RubinMod.id(name));
          Block block = factory.apply(properties.setId(key));
          Registry.register(BuiltInRegistries.BLOCK, key, block);
          // En kloss i verden og en kloss i inventaret er to ting: Block og BlockItem.
          // useBlockDescriptionPrefix gir itemet samme navn som klossen (block.rubinmod.navn).
          ModItems.register(name, p -> new BlockItem(block, p),
                  new Item.Properties().useBlockDescriptionPrefix());
          return block;
      }

      // Kalles fra RubinMod, slik at feltene over blir laget og registrert.
      public static void init() {
      }
  }
  ```

`register` ligner på den i `ModItems`, men gjør to ting: Den registrerer klossen
i kloss-registeret, og så lager den en `BlockItem` med samme navn og registrerer
den med `ModItems.register`.

`strength(5.0F, 6.0F)` er hvor lang tid det tar å hakke ut klossen, og hvor godt
den tåler eksplosjoner. Tallene er de samme som for en diamantkloss.

`init()` er tom. Den finnes bare for at `RubinMod` skal kunne bruke klassen, så
Java lager feltene og klossen blir registrert.

- [ ] Kall `ModBlocks.init()` i `onInitialize()` i `RubinMod`, før
  `ModItems.init()`:

  ```java
          LOGGER.info("Hei fra rubinmod!");
          ModBlocks.init();
          ModItems.init();
  ```

- [ ] Legg klossen til i fanen i `ModItems.init()`:

  ```java
                  .displayItems((parameters, output) -> {
                      output.accept(RUBIN);
                      output.accept(ModBlocks.RUBINKLOSS);
                  })
  ```


# Steg 2: Tekstur, blockstate og modell {.activity}

## Sjekkliste {.check}

- [ ] Tegn en tekstur på 16 x 16 piksler og lagre den som
  `src/main/resources/assets/rubinmod/textures/block/rubinkloss.png`. Legg merke
  til at mappa heter `block`, ikke `item`. Teksturen brukes på alle seks sidene
  av klossen, så den bør se fin ut når den ligger ved siden av seg selv.

- [ ] Lag `src/main/resources/assets/rubinmod/blockstates/rubinkloss.json`:

  ```json
  {
    "variants": {
      "": {
        "model": "rubinmod:block/rubinkloss"
      }
    }
  }
  ```

- [ ] Lag `src/main/resources/assets/rubinmod/models/block/rubinkloss.json`:

  ```json
  {
    "parent": "minecraft:block/cube_all",
    "textures": {
      "all": "rubinmod:block/rubinkloss"
    }
  }
  ```

- [ ] Lag `src/main/resources/assets/rubinmod/items/rubinkloss.json`, så klossen
  ser riktig ut i inventaret:

  ```json
  {
    "model": {
      "type": "minecraft:model",
      "model": "rubinmod:block/rubinkloss"
    }
  }
  ```

En kloss kan ha flere **tilstander** (blockstates). En dør kan være åpen eller
lukket, og en trapp kan snu i fire retninger. Fila under `blockstates` sier
hvilken modell hver tilstand bruker. Rubinklossen har bare én tilstand, `""`.

`cube_all` er en kube med samme tekstur på alle sider. Itemet bruker samme
modell som klossen, så det ser ut som en liten kloss i inventaret.

![Teksturen til rubinklossen forstørret, 16 x 16 piksler, tegnet i et
rutenett](rubinkloss_rutenett.png)


# Steg 3: Navn {.activity}

## Sjekkliste {.check}

- [ ] Legg til navnet på klossen i `en_us.json`:

  ```json
  {
    "item.rubinmod.rubin": "Ruby",
    "block.rubinmod.rubinkloss": "Block of Ruby",
    "itemGroup.rubinmod.rubiner": "Rubies"
  }
  ```

- [ ] Og i `no_no.json`:

  ```json
  {
    "item.rubinmod.rubin": "Rubin",
    "block.rubinmod.rubinkloss": "Rubinkloss",
    "itemGroup.rubinmod.rubiner": "Rubiner"
  }
  ```

Klosser bruker `block.` foran navnet, ikke `item.`. Det er
`useBlockDescriptionPrefix()` i `ModBlocks` som gjør at itemet også bruker
navnet til klossen.


# Steg 4: Hva klossen dropper {.activity}

Når du hakker ut en kloss, bestemmer en **loot table** hva som faller ut. Uten
den forsvinner klossen.

## Sjekkliste {.check}

- [ ] Lag `src/main/resources/data/rubinmod/loot_table/blocks/rubinkloss.json`:

  ```json
  {
    "type": "minecraft:block",
    "pools": [
      {
        "condition": {
          "type": "minecraft:survives_explosion"
        },
        "entries": [
          {
            "type": "minecraft:item",
            "name": "rubinmod:rubinkloss"
          }
        ],
        "rolls": 1
      }
    ]
  }
  ```

Klossen dropper seg selv, én gang (`"rolls": 1`), så sant den ikke blir sprengt
i stykker.


# Steg 5: Tagger {.activity}

Klossen har `requiresCorrectToolForDrops()`. Da dropper den bare noe når du
bruker riktig verktøy. Men hvilket verktøy er riktig? Det står i **tagger**.

En tagg er en liste med id-er som andre deler av spillet leser. Hakkene i
Minecraft spør taggen `minecraft:mineable/pickaxe`: _står denne klossen på
lista?_ Moden din kan legge til klosser i taggene til Minecraft.

## Sjekkliste {.check}

- [ ] Lag `src/main/resources/data/minecraft/tags/block/mineable/pickaxe.json`:

  ```json
  {
    "replace": false,
    "values": [
      "rubinmod:rubinkloss"
    ]
  }
  ```

- [ ] Lag `src/main/resources/data/minecraft/tags/block/needs_iron_tool.json`:

  ```json
  {
    "replace": false,
    "values": [
      "rubinmod:rubinkloss"
    ]
  }
  ```

Disse filene ligger under `data/minecraft`, ikke `data/rubinmod`, fordi taggene
tilhører Minecraft. `"replace": false` betyr at klossen legges til lista. Med
`true` ville du slettet alle de andre klossene fra lista.


# Steg 6: Oppskrifter begge veier {.activity}

## Sjekkliste {.check}

- [ ] Lag `src/main/resources/data/rubinmod/recipe/rubinkloss.json`. Ni rubiner
  blir en kloss:

  ```json
  {
    "type": "minecraft:crafting_shaped",
    "category": "building",
    "key": {
      "#": "rubinmod:rubin"
    },
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "result": {
      "id": "rubinmod:rubinkloss"
    }
  }
  ```

- [ ] Lag `src/main/resources/data/rubinmod/recipe/rubin_fra_rubinkloss.json`.
  En kloss blir ni rubiner:

  ```json
  {
    "type": "minecraft:crafting_shapeless",
    "category": "misc",
    "ingredients": [
      "rubinmod:rubinkloss"
    ],
    "result": {
      "count": 9,
      "id": "rubinmod:rubin"
    }
  }
  ```

`crafting_shapeless` betyr at det ikke spiller noen rolle hvor i rutenettet
klossen ligger.


# Steg 7: Prøv klossen {.activity}

## Sjekkliste {.check}

- [ ] Start spillet med **runClient**.

## Test prosjektet {.flag}

- [ ] Ligger rubinklossen i fanen **Rubiner**, med riktig navn og tekstur?

- [ ] Kan du sette ut klossen og bygge med den?

- [ ] Bytt til overlevelse med `/gamemode survival`. Hakk ut klossen med en
  jernhakke. Dropper den seg selv?

- [ ] Hakk ut klossen med en steinhakke eller med handa. Dropper den ingenting?

- [ ] Lag en kloss av ni rubiner, og ni rubiner av en kloss.

## Utfordring {.challenge}

- [ ] Gjør klossen lysende. Legg til `.lightLevel(state -> 15)` i
  `BlockBehaviour.Properties`. Lyser den i mørket?

- [ ] Prøv andre lyder, som `SoundType.GLASS` eller `SoundType.WOOL`.

- [ ] Hvilken tagg må klossen stå i for at den skal trenge diamanthakke? Taggen
  for jern heter `needs_iron_tool`. Gjett navnet, og prøv.
