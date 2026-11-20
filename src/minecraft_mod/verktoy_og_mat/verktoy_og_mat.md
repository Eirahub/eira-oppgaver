---
title: Verktøy og mat
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Hva er vitsen med rubiner hvis du ikke kan lage noe av dem? Nå lager du et
**rubinsverd**, litt bedre enn et jernsverd, og et **rubineple** som gir deg
fart og nattsyn.

Du lærer at et item får egenskapene sine gjennom `Item.Properties`. Verken
sverdet eller eplet trenger en egen klasse.

![En spiller i tredjeperson holder et rødt rubinsverd. Navnet Rubinsverd står
over verktøylinja](06-rubinsverd-tredjeperson.png)


# Steg 1: Et verktøymateriale {.activity}

Alle verktøy i Minecraft er laget av et **materiale**: tre, stein, jern,
diamant. Materialet bestemmer hvor lenge verktøyet varer, hvor fort det hakker,
og hva det kan repareres med. Vi lager materialet rubin.

## Sjekkliste {.check}

- [ ] Fortsett i prosjektet fra forrige oppgave. Legg til feltet
  `RUBIN_MATERIAL` i `ModItems`, under `RUBIN`:

  ```java
      // Et verktøymateriale sier hvor godt verktøyet er. Verdiene i rekkefølge:
      // klosser det IKKE kan hakke ut (som jern), holdbarhet, fart, ekstra skade,
      // hvor lett det er å fortrylle, og hvilke items som reparerer det (en tagg).
      public static final ToolMaterial RUBIN_MATERIAL = new ToolMaterial(
              BlockTags.INCORRECT_FOR_IRON_TOOL, 900, 7.0F, 2.5F, 18,
              TagKey.create(Registries.ITEM, RubinMod.id("rubin_tool_materials")));
  ```

`ToolMaterial` er en `record`, en klasse som bare holder på noen verdier. Til
sammenligning har jern holdbarhet 250 og diamant 1561. Rubin ligger mellom.

Det siste argumentet er en tagg med items som kan reparere verktøyet i en
ambolt. Taggen lager vi i steg 4.


# Steg 2: Sverdet {.activity}

## Sjekkliste {.check}

- [ ] Legg til sverdet under materialet:

  ```java
      // sword() gir skade og angrepsfart: 3 ekstra skade og -2.4 i fart, som vanlige sverd.
      public static final Item RUBINSVERD = register("rubinsverd", Item::new,
              new Item.Properties().sword(RUBIN_MATERIAL, 3.0F, -2.4F));
  ```

Sverdet er et helt vanlig `Item`. Det er `sword(...)` som gjør det til et sverd:
Det gir skade, angrepsfart og holdbarhet fra materialet, og gjør at sverdet
slites når du slår.


# Steg 3: Eplet {.activity}

Mat har to deler. `FoodProperties` sier hvor mye maten metter. `Consumable` sier
hva som skjer når du spiser den: hvor lang tid det tar, hvilken lyd, og om du
får noen effekter.

## Sjekkliste {.check}

- [ ] Legg til eplet under sverdet:

  ```java
      // Mat har to deler: hvor mye den metter (FoodProperties) og hva som skjer når
      // du spiser den (Consumable). Her får du fart og nattsyn i 30 sekunder (600 tick).
      public static final Item RUBINEPLE = register("rubineple", Item::new,
              new Item.Properties().food(
                      new FoodProperties.Builder().nutrition(4).saturationModifier(1.2F)
                              .alwaysEdible().build(),
                      Consumables.defaultFood().onConsume(new ApplyStatusEffectsConsumeEffect(List.of(
                              new MobEffectInstance(MobEffects.SPEED, 600, 1),
                              new MobEffectInstance(MobEffects.NIGHT_VISION, 600, 0)))).build()));
  ```

- [ ] Legg sverdet og eplet til i fanen i `init()`:

  ```java
                      output.accept(RUBIN);
                      output.accept(ModBlocks.RUBINKLOSS);
                      output.accept(ModBlocks.RUBINMALM);
                      output.accept(RUBINSVERD);
                      output.accept(RUBINEPLE);
  ```

- [ ] Importer de nye klassene. Øverst i `ModItems` skal det nå stå:

  ```java
  import java.util.List;
  import java.util.function.Function;
  import net.fabricmc.fabric.api.creativetab.v1.FabricCreativeModeTab;
  import net.minecraft.core.Registry;
  import net.minecraft.core.registries.BuiltInRegistries;
  import net.minecraft.core.registries.Registries;
  import net.minecraft.network.chat.Component;
  import net.minecraft.resources.ResourceKey;
  import net.minecraft.tags.BlockTags;
  import net.minecraft.tags.TagKey;
  import net.minecraft.world.effect.MobEffectInstance;
  import net.minecraft.world.effect.MobEffects;
  import net.minecraft.world.food.FoodProperties;
  import net.minecraft.world.item.CreativeModeTab;
  import net.minecraft.world.item.Item;
  import net.minecraft.world.item.ItemStack;
  import net.minecraft.world.item.ToolMaterial;
  import net.minecraft.world.item.component.Consumables;
  import net.minecraft.world.item.consume_effects.ApplyStatusEffectsConsumeEffect;
  ```

Minecraft regner tid i **tick**. Det er 20 tick i sekundet, så 600 tick er 30
sekunder. `MobEffectInstance(MobEffects.SPEED, 600, 1)` er Fart II: Tallet 1 er
nivået, og nivåene teller fra 0.

`alwaysEdible()` gjør at du kan spise eplet selv om du er mett, som et gulleple.


# Steg 4: Filene {.activity}

## Sjekkliste {.check}

- [ ] Tegn to teksturer på 16 x 16 piksler, `rubinsverd.png` og `rubineple.png`,
  og lagre dem i `assets/rubinmod/textures/item`. Sverdet bør peke fra nede til
  venstre mot oppe til høyre, som sverdene i Minecraft.

- [ ] Lag `assets/rubinmod/items/rubinsverd.json`:

  ```json
  {
    "model": {
      "type": "minecraft:model",
      "model": "rubinmod:item/rubinsverd"
    }
  }
  ```

- [ ] Lag `assets/rubinmod/models/item/rubinsverd.json`:

  ```json
  {
    "parent": "minecraft:item/handheld",
    "textures": {
      "layer0": "rubinmod:item/rubinsverd"
    }
  }
  ```

- [ ] Lag `assets/rubinmod/items/rubineple.json` og
  `assets/rubinmod/models/item/rubineple.json` på samme måte. Eplet skal ha
  `minecraft:item/generated` som `parent`, som rubinen.

- [ ] Legg til navnene i språkfilene:

  ```json
    "item.rubinmod.rubinsverd": "Ruby Sword",
    "item.rubinmod.rubineple": "Ruby Apple",
  ```

  ```json
    "item.rubinmod.rubinsverd": "Rubinsverd",
    "item.rubinmod.rubineple": "Rubineple",
  ```

`item/handheld` gjør at sverdet holdes som et verktøy, på skrå i handa.
`item/generated` holdes som en ting, som eplet.

- [ ] Lag taggen med reparasjonsmaterialet,
  `data/rubinmod/tags/item/rubin_tool_materials.json`:

  ```json
  {
    "values": [
      "rubinmod:rubin"
    ]
  }
  ```

- [ ] Legg sverdet i taggen for sverd i Minecraft,
  `data/minecraft/tags/item/swords.json`:

  ```json
  {
    "replace": false,
    "values": [
      "rubinmod:rubinsverd"
    ]
  }
  ```

Taggen `minecraft:swords` brukes blant annet av fortryllelsesbordet. Står
sverdet der, kan det få sverd-fortryllelser som Skarphet.


# Steg 5: Oppskrifter {.activity}

## Sjekkliste {.check}

- [ ] `data/rubinmod/recipe/rubinsverd.json`:

  ```json
  {
    "type": "minecraft:crafting_shaped",
    "category": "equipment",
    "key": {
      "#": "rubinmod:rubin",
      "/": "minecraft:stick"
    },
    "pattern": [
      "#",
      "#",
      "/"
    ],
    "result": {
      "id": "rubinmod:rubinsverd"
    }
  }
  ```

- [ ] `data/rubinmod/recipe/rubineple.json`:

  ```json
  {
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "#": "rubinmod:rubin",
      "A": "minecraft:apple"
    },
    "pattern": [
      "###",
      "#A#",
      "###"
    ],
    "result": {
      "id": "rubinmod:rubineple"
    }
  }
  ```

Mønsteret til sverdet har bare én kolonne. Da kan du legge det i hvilken som
helst kolonne på arbeidsbenken.


# Steg 6: Prøv sverdet og eplet {.activity}

## Sjekkliste {.check}

- [ ] Start spillet med **runClient**.

## Test prosjektet {.flag}

- [ ] Holdes sverdet på skrå i handa? Trykk `F5` for å se deg selv.

- [ ] Hold musa over sverdet i inventaret. Står det hvor mye skade det gjør?

- [ ] Bytt til overlevelse og spis eplet. Får du fart og nattsyn? Effektene
  vises øverst til høyre.

- [ ] Lag sverdet og eplet på arbeidsbenken.

- [ ] Slit litt på sverdet, og reparer det med en rubin i en ambolt.

![En flat verden med to effekt-ikoner øverst til høyre etter at spilleren har
spist rubineplet. Navnet Rubineple står over
verktøylinja](06-rubineple-effekt.png)

## Utfordring {.challenge}

- [ ] Lag en rubinhakke. Bruk `.pickaxe(RUBIN_MATERIAL, 1.0F, -2.8F)` i stedet
  for `.sword(...)`. Det er tallene en vanlig hakke bruker. Hakken trenger
  tekstur, modell, navn, oppskrift og taggen `minecraft:pickaxes`.

- [ ] Gi eplet en effekt til, for eksempel `MobEffects.JUMP_BOOST`.

- [ ] Hvorfor er det første argumentet til `ToolMaterial`
  `INCORRECT_FOR_IRON_TOOL`? Hva skjer med hakken din hvis du bytter til
  `INCORRECT_FOR_DIAMOND_TOOL`?
