---
title: Malm
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Til nå har du bare fått rubiner i kreativ modus. Nå skal de finnes i verden, som
**rubinmalm** under bakken. Når du hakker ut malmen, får du en rubin og litt
erfaring, akkurat som med diamantmalm.

Du lærer hvordan Minecraft lager verden (**verdensgenerering**), og at det meste
av det står i JSON-filer. Java-koden du trenger, er én linje.

![Et snitt gjennom bakken sett i tilskuermodus. Rubinmalm ligger spredt i
steinen sammen med annen malm](05-rubinmalm-rontgen.png)


# Steg 1: Malmklossen {.activity}

Rubinmalm er en kloss, som rubinklossen. Forskjellen er at den gir erfaring når
den knuses, og at den dropper rubiner i stedet for seg selv. Minecraft har en
egen klasse for det: `DropExperienceBlock`.

## Sjekkliste {.check}

- [ ] Fortsett i prosjektet fra forrige oppgave. Legg til feltet `RUBINMALM` i
  `ModBlocks`, under `RUBINKLOSS`:

  ```java
      // Malm gir litt erfaring (2 til 5 poeng) når den knuses, som diamantmalm.
      // Hva den dropper står i loot_table/blocks/rubinmalm.json.
      public static final Block RUBINMALM = register("rubinmalm",
              p -> new DropExperienceBlock(UniformInt.of(2, 5), p),
              BlockBehaviour.Properties.of()
                      .mapColor(MapColor.STONE)
                      .instrument(NoteBlockInstrument.BASEDRUM)
                      .requiresCorrectToolForDrops()
                      .strength(3.0F, 3.0F));
  ```

- [ ] Importer de nye klassene med `Alt + Enter`. Sjekk at importene er disse:

  ```java
  import net.minecraft.util.valueproviders.UniformInt;
  import net.minecraft.world.level.block.Block;
  import net.minecraft.world.level.block.DropExperienceBlock;
  import net.minecraft.world.level.block.SoundType;
  import net.minecraft.world.level.block.state.BlockBehaviour;
  import net.minecraft.world.level.block.state.properties.NoteBlockInstrument;
  ```

- [ ] Legg malmen til i fanen i `ModItems.init()`:

  ```java
                      output.accept(RUBIN);
                      output.accept(ModBlocks.RUBINKLOSS);
                      output.accept(ModBlocks.RUBINMALM);
  ```

Her bruker vi ikke `Block::new`, men en lambda: `p -> new
DropExperienceBlock(UniformInt.of(2, 5), p)`. Konstruktøren trenger to ting,
hvor mye erfaring og egenskapene, så en metodereferanse holder ikke.
`UniformInt.of(2, 5)` er et tilfeldig tall fra 2 til 5.

`instrument(NoteBlockInstrument.BASEDRUM)` er lyden en noteblokk lager når den
står oppå malmen. Det har all stein.


# Steg 2: Filene til klossen {.activity}

Malmen trenger de samme filene som rubinklossen. Lag dem på samme måte.

## Sjekkliste {.check}

- [ ] Tegn teksturen
  `src/main/resources/assets/rubinmod/textures/block/rubinmalm.png`, 16 x 16
  piksler. Tips: Start med en grå steintekstur og tegn røde krystaller oppå.

- [ ] `assets/rubinmod/blockstates/rubinmalm.json`:

  ```json
  {
    "variants": {
      "": {
        "model": "rubinmod:block/rubinmalm"
      }
    }
  }
  ```

- [ ] `assets/rubinmod/models/block/rubinmalm.json`:

  ```json
  {
    "parent": "minecraft:block/cube_all",
    "textures": {
      "all": "rubinmod:block/rubinmalm"
    }
  }
  ```

- [ ] `assets/rubinmod/items/rubinmalm.json`:

  ```json
  {
    "model": {
      "type": "minecraft:model",
      "model": "rubinmod:block/rubinmalm"
    }
  }
  ```

- [ ] Legg til `"block.rubinmod.rubinmalm": "Ruby Ore",` i `en_us.json` og
  `"block.rubinmod.rubinmalm": "Rubinmalm",` i `no_no.json`.

- [ ] Legg til `"rubinmod:rubinmalm"` i begge taggene under
  `data/minecraft/tags/block`. Husk komma mellom linjene:

  ```json
  {
    "replace": false,
    "values": [
      "rubinmod:rubinkloss",
      "rubinmod:rubinmalm"
    ]
  }
  ```

![Teksturen til rubinmalmen forstørret: grå stein med røde krystaller, tegnet i
et rutenett på 16 x 16 piksler](rubinmalm_rutenett.png)


# Steg 3: Hva malmen dropper {.activity}

Malm er litt mer avansert enn en vanlig kloss. Med **silkeberøring** skal du få
selve malmklossen. Ellers skal du få en rubin, og flere med **flaks** (Fortune).

## Sjekkliste {.check}

- [ ] Lag `src/main/resources/data/rubinmod/loot_table/blocks/rubinmalm.json`:

  ```json
  {
    "type": "minecraft:block",
    "pools": [
      {
        "entries": [
          {
            "type": "minecraft:alternatives",
            "children": [
              {
                "type": "minecraft:item",
                "condition": "minecraft:tool/can_silk_touch",
                "name": "rubinmod:rubinmalm"
              },
              {
                "type": "minecraft:item",
                "modifier": [
                  {
                    "type": "minecraft:apply_bonus",
                    "enchantment": "minecraft:fortune",
                    "formula": "minecraft:ore_drops"
                  },
                  {
                    "type": "minecraft:explosion_decay"
                  }
                ],
                "name": "rubinmod:rubin"
              }
            ]
          }
        ],
        "rolls": 1
      }
    ]
  }
  ```

`alternatives` prøver barna (`children`) i rekkefølge og bruker det første som
passer. Er verktøyet fortryllet med silkeberøring, passer det første, og du får
malmen. Ellers får du en rubin. `apply_bonus` med `ore_drops` gir flere rubiner
med flaks, med samme regel som diamantmalm.

## Tips {.tip}

I eldre versjoner het det `"conditions"` og `"functions"`, i flertall. I
Minecraft 26.3 heter det `"condition"` og `"modifier"`.


# Steg 4: Hvordan malmen ser ut i verden {.activity}

Minecraft lager verden i to steg. En **feature** sier _hva_ som skal lages: en
klump malm, et tre, en blomst. En **placed feature** sier _hvor_ og _hvor
mange_.

## Sjekkliste {.check}

- [ ] Lag `src/main/resources/data/rubinmod/worldgen/feature/rubinmalm.json`:

  ```json
  {
    "type": "minecraft:ore",
    "discard_chance_on_air_exposure": 0.0,
    "size": 6,
    "targets": [
      {
        "state": "rubinmod:rubinmalm",
        "target": {
          "predicate_type": "minecraft:tag_match",
          "tag": "minecraft:stone_ore_replaceables"
        }
      }
    ]
  }
  ```

- [ ] Lag
  `src/main/resources/data/rubinmod/worldgen/placed_feature/rubinmalm.json`:

  ```json
  {
    "feature": "rubinmod:rubinmalm",
    "placement": [
      {
        "type": "minecraft:count",
        "count": 10
      },
      {
        "type": "minecraft:in_square"
      },
      {
        "type": "minecraft:height_range",
        "height": {
          "type": "minecraft:uniform",
          "min_inclusive": {
            "absolute": -16
          },
          "max_inclusive": {
            "absolute": 64
          }
        }
      },
      {
        "type": "minecraft:biome"
      }
    ]
  }
  ```

Den første fila lager klumper på opptil 6 malmklosser. Malmen erstatter bare
klosser i taggen `stone_ore_replaceables`, som er vanlig stein, granitt, dioritt
og andesitt. `discard_chance_on_air_exposure` er sjansen for at malm som ligger
inntil luft, blir fjernet. Med `0.0` blir den liggende.

Den andre fila prøver 10 ganger i hver **chunk** (et område på 16 x 16 klosser).
Hver gang velger den et tilfeldig sted i chunken (`in_square`) og en tilfeldig
høyde fra -16 til 64 (`height_range`).

Mappa heter `worldgen/feature`. Eldre veiledninger bruker
`worldgen/configured_feature`, som ikke virker i Minecraft 26.3.


# Steg 5: Legg malmen inn i verden {.activity}

Filene over beskriver malmen, men ingen bruker dem ennå. Vi må si at de skal
brukes når Minecraft lager verden. Det gjør vi med Fabric API.

## Sjekkliste {.check}

- [ ] Legg til disse linjene nederst i `onInitialize()` i `RubinMod`:

  ```java
          // Hvordan malmen ser ut i verden står i data/rubinmod/worldgen. Her sier vi
          // bare at den skal legges inn i alle biomer i oververdenen, sammen med annen malm.
          BiomeModifications.addFeature(BiomeSelectors.foundInOverworld(),
                  GenerationStep.Decoration.UNDERGROUND_ORES,
                  ResourceKey.create(Registries.PLACED_FEATURE, id("rubinmalm")));
  ```

- [ ] Importer `BiomeModifications`, `BiomeSelectors`, `Registries`,
  `ResourceKey` og `GenerationStep` med `Alt + Enter`.

Linja sier: _i alle biomer i oververdenen, i steget der malm lages under bakken,
bruk placed feature `rubinmod:rubinmalm`_. Det er en vanlig setning i Java, selv
om den er lang: ett metodekall med tre argumenter.


# Steg 6: Let etter malm {.activity}

Verden lages bare én gang. Gamle deler av verdenen din får ikke rubinmalm, så du
må lage en **ny verden**.

## Sjekkliste {.check}

- [ ] Start spillet med **runClient** og lag en ny verden.

- [ ] Skriv `/gamemode spectator` i chatten. I tilskuermodus kan du fly gjennom
  bakken og se malmen inne i steinen.

- [ ] Fly ned under bakken, til rundt høyde 0. Trykk `F3` for å se høyden din
  (`Y`).

## Test prosjektet {.flag}

- [ ] Finner du rubinmalm i steinen?

- [ ] Gå tilbake med `/gamemode survival` og hakk ut malm med en jernhakke. Får
  du en rubin og litt erfaring?

- [ ] Hakk ut malm med en hakke med silkeberøring. Får du malmklossen?

## Tips {.protip}

Finner du ingen malm, se i loggen etter `rubinmalm`. En skrivefeil i en JSON-fil
under `worldgen` kan gjøre at spillet ikke vil lage verdenen. Da står det en
feilmelding i loggen som sier hvilken fil det gjelder.

## Utfordring {.challenge}

- [ ] Gjør rubiner sjeldne: senk `count` til 2, og gjør klumpene mindre.

- [ ] Flytt malmen dypere, til mellom -64 og -32.

- [ ] Lag rubinmalm i dypskifer (`deepslate`) også. Du trenger en kloss til, og
  taggen `minecraft:deepslate_ore_replaceables`. Se hvordan `targets` i
  `feature/rubinmalm.json` er en liste.
