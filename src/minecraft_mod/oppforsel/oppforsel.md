---
title: Oppførsel
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Til nå har tingene i moden gjort det Minecraft allerede kan: Sverd slår, mat
metter, griser vandrer. Nå skal du skrive din egen oppførsel. Du lager tre ting:

- en **rubinstav** som sender et lyn dit du sikter

- en **kommando**, `/rubinregn 30`, som får rubiner til å regne fra himmelen

- en **hendelse**: Av og til faller det ut en rubin når du knuser stein

Du lærer tre måter en mod kan endre spillet på: overstyre en metode, registrere
en kommando og lytte på en hendelse.

![Det er natt. Et lyn slår ned i gresset foran spilleren, som holder
rubinstaven](08-rubinstav-lyn.png)


# Steg 1: Rubinstaven {.activity}

Sverdet og eplet var vanlige `Item`-objekter med egenskaper. Staven trenger sin
egen klasse, fordi den skal gjøre noe ingen andre items gjør. Den arver fra
`Item` og overstyrer `use()`, metoden Minecraft kaller når du høyreklikker.

## Sjekkliste {.check}

- [ ] Fortsett i prosjektet fra forrige oppgave. Lag klassen `RubinStav` i
  `src/main/java/no/kidsakoder/rubinmod`:

  ```java
  package no.kidsakoder.rubinmod;

  import net.minecraft.server.level.ServerLevel;
  import net.minecraft.world.InteractionHand;
  import net.minecraft.world.InteractionResult;
  import net.minecraft.world.entity.EntitySpawnReason;
  import net.minecraft.world.entity.EntityTypes;
  import net.minecraft.world.entity.LightningBolt;
  import net.minecraft.world.entity.player.Player;
  import net.minecraft.world.item.Item;
  import net.minecraft.world.level.Level;
  import net.minecraft.world.phys.HitResult;

  // En stav som sender et lyn dit du sikter når du høyreklikker.
  public class RubinStav extends Item {
      public RubinStav(Item.Properties properties) {
          super(properties);
      }

      // use() kalles når spilleren høyreklikker med itemet i handa.
      @Override
      public InteractionResult use(Level level, Player player, InteractionHand hand) {
          // use() kjøres både på klienten og serveren. Bare serveren skal lage lynet,
          // ellers ser du et lyn som ikke finnes.
          if (level instanceof ServerLevel serverLevel) {
              // Finn klossen spilleren ser på, opptil 50 klosser unna.
              HitResult hit = player.pick(50.0, 1.0F, false);
              LightningBolt bolt =
                      EntityTypes.LIGHTNING_BOLT.create(serverLevel, EntitySpawnReason.TRIGGERED);
              if (bolt != null) {
                  bolt.snapTo(hit.getLocation());
                  serverLevel.addFreshEntity(bolt);
              }
              // Ett sekund (20 tick) før staven kan brukes igjen.
              player.getCooldowns().addCooldown(player.getItemInHand(hand), 20);
          }
          return InteractionResult.SUCCESS;
      }
  }
  ```

- [ ] Registrer staven i `ModItems`, under spawn-egget:

  ```java
      // Et item med egen oppførsel: RubinStav overstyrer use(). Bare én i hver rute.
      public static final Item RUBINSTAV = register("rubinstav", RubinStav::new,
              new Item.Properties().stacksTo(1));
  ```

- [ ] Legg `output.accept(RUBINSTAV);` til nederst i fanen.

Husker du klient og server fra forrige oppgave? `use()` kalles på begge. Bare
serveren bestemmer hva som finnes i verden, så lynet lages bare der. `level
instanceof ServerLevel serverLevel` sjekker om vi er på serveren, og gir oss
samtidig en variabel av riktig type.

`RubinStav::new` passer i `register`, fordi konstruktøren tar inn
`Item.Properties`, akkurat som `Item::new`.

## Tips {.tip}

Vesentypene fra Minecraft, som `LIGHTNING_BOLT`, ligger i klassen `EntityTypes`.
I eldre versjoner lå de i `EntityType`, uten `s`.


# Steg 2: Filene til staven {.activity}

## Sjekkliste {.check}

- [ ] Tegn teksturen `assets/rubinmod/textures/item/rubinstav.png` på 16 x 16
  piksler.

- [ ] Lag `assets/rubinmod/items/rubinstav.json`:

  ```json
  {
    "model": {
      "type": "minecraft:model",
      "model": "rubinmod:item/rubinstav"
    }
  }
  ```

- [ ] Lag `assets/rubinmod/models/item/rubinstav.json`. Staven holdes som et
  verktøy, så den bruker `handheld`:

  ```json
  {
    "parent": "minecraft:item/handheld",
    "textures": {
      "layer0": "rubinmod:item/rubinstav"
    }
  }
  ```

- [ ] Legg til `"item.rubinmod.rubinstav": "Ruby Staff",` i `en_us.json` og
  `"item.rubinmod.rubinstav": "Rubinstav",` i `no_no.json`.

- [ ] Lag oppskriften `data/rubinmod/recipe/rubinstav.json`, en rubinkloss på to
  pinner:

  ```json
  {
    "type": "minecraft:crafting_shaped",
    "category": "equipment",
    "key": {
      "#": "rubinmod:rubinkloss",
      "/": "minecraft:stick"
    },
    "pattern": [
      "#",
      "/",
      "/"
    ],
    "result": {
      "id": "rubinmod:rubinstav"
    }
  }
  ```

## Test prosjektet {.flag}

- [ ] Start spillet. Hold staven og høyreklikk på bakken et stykke unna. Slår
  lynet ned der du sikter?

- [ ] Høyreklikk mange ganger fort. Ser du at staven blir grå et sekund mellom
  hvert lyn?


# Steg 3: Kommandoen /rubinregn {.activity}

Kommandoer i Minecraft lages med et bibliotek som heter **Brigadier**. En
kommando bygges som et tre: først ordet `rubinregn`, så et argument `antall`, og
til slutt koden som kjøres.

## Sjekkliste {.check}

- [ ] Lag klassen `ModCommands`:

  ```java
  package no.kidsakoder.rubinmod;

  import com.mojang.brigadier.arguments.IntegerArgumentType;
  import com.mojang.brigadier.exceptions.CommandSyntaxException;
  import net.fabricmc.fabric.api.command.v2.CommandRegistrationCallback;
  import net.minecraft.commands.CommandSourceStack;
  import net.minecraft.commands.Commands;
  import net.minecraft.network.chat.Component;
  import net.minecraft.server.level.ServerLevel;
  import net.minecraft.server.level.ServerPlayer;
  import net.minecraft.world.entity.item.ItemEntity;
  import net.minecraft.world.item.ItemStack;

  public class ModCommands {
      public static void init() {
          // Fabric sier fra når kommandoene skal registreres. Da legger vi til
          // /rubinregn <antall>, der antall er et heltall fra 1 til 64.
          CommandRegistrationCallback.EVENT.register((dispatcher, buildContext, selection) ->
                  dispatcher.register(Commands.literal("rubinregn")
                          // Bare operatører (eller juks på i enspiller) får lage rubiner.
                          .requires(Commands.hasPermission(Commands.LEVEL_GAMEMASTERS))
                          .then(Commands.argument("antall", IntegerArgumentType.integer(1, 64))
                                  .executes(context -> rubinregn(context.getSource(),
                                          IntegerArgumentType.getInteger(context, "antall"))))));
      }

      // Slipper rubiner fra lufta rundt spilleren.
      static int rubinregn(CommandSourceStack source, int antall) throws CommandSyntaxException {
          ServerPlayer player = source.getPlayerOrException();
          ServerLevel level = source.getLevel();
          for (int i = 0; i < antall; i++) {
              double x = player.getX() + level.getRandom().nextGaussian() * 3;
              double z = player.getZ() + level.getRandom().nextGaussian() * 3;
              level.addFreshEntity(new ItemEntity(level, x, player.getY() + 8, z,
                      new ItemStack(ModItems.RUBIN)));
          }
          source.sendSuccess(
                  () -> Component.translatable("commands.rubinmod.rubinregn", antall), false);
          // Tallet en kommando returnerer, kan kommandoblokker lese.
          return antall;
      }
  }
  ```

- [ ] Kall `ModCommands.init()` i `onInitialize()` i `RubinMod`, nederst:

  ```java
          ModCommands.init();
  ```

- [ ] Legg til meldingen i språkfilene. Husk komma på linja over:

  ```json
    "commands.rubinmod.rubinregn": "It is raining %s rubies!"
  ```

  ```json
    "commands.rubinmod.rubinregn": "Det regner %s rubiner!"
  ```

Slik leser du kommandotreet:

- `Commands.literal("rubinregn")` er ordet du skriver.

- `.requires(...)` sier hvem som får bruke kommandoen. Uten den kunne alle på en
  server lage så mange rubiner de ville.

- `Commands.argument("antall", IntegerArgumentType.integer(1, 64))` er et
  heltall fra 1 til 64. Skriver du noe annet, sier Minecraft fra med rød tekst.

- `.executes(...)` er koden som kjøres. Lambdaen henter tallet og kaller metoden
  `rubinregn`.

I `rubinregn` gir `nextGaussian()` et tilfeldig tall som oftest er nær 0. Da
faller de fleste rubinene tett rundt deg, og noen litt lenger unna. `%s` i
meldingen byttes ut med antallet.

`CommandRegistrationCallback.EVENT.register(...)` er en **hendelse** fra Fabric.
Vi sier: _når kommandoene skal registreres, kjør denne lambdaen_.

## Test prosjektet {.flag}

- [ ] Start spillet. Lag verdenen med **Allow Cheats** på, eller bruk en verden
  i kreativ modus.

- [ ] Skriv `/rubinregn 30`. Regner det rubiner?

- [ ] Skriv `/rubinregn 100`. Hva sier Minecraft?

- [ ] Skriv `/rubinregn` og trykk `Tab`. Viser Minecraft at det mangler et tall?

![Rubiner faller fra en blå himmel. I chatten står det Det regner 30
rubiner!](08-rubinregn.png)


# Steg 4: En hendelse {.activity}

Fabric har mange **hendelser** (events) som moden din kan lytte på: når en
spiller knuser en kloss, når en spiller logger inn, når serveren starter. Du
registrerer en lambda, og Fabric kaller den hver gang hendelsen skjer.

## Sjekkliste {.check}

- [ ] Legg til dette nederst i `onInitialize()` i `RubinMod`, etter
  `ModCommands.init();`:

  ```java
          // En hendelse (event): Fabric kaller koden vår hver gang en spiller har knust
          // en kloss. Er det stein, er det 5 prosent sjanse for at en rubin faller ut.
          PlayerBlockBreakEvents.AFTER.register((level, player, pos, state, blockEntity) -> {
              if (state.is(Blocks.STONE) && level.getRandom().nextFloat() < 0.05F) {
                  Block.popResource(level, pos, new ItemStack(ModItems.RUBIN));
              }
          });
  ```

- [ ] Importer `PlayerBlockBreakEvents`, `ItemStack`, `Block` og `Blocks`. Sjekk
  at `Block` og `Blocks` kommer fra `net.minecraft.world.level.block`.

Lambdaen får vite alt om det som skjedde: hvilken verden, hvilken spiller, hvor
(`pos`) og hvilken kloss det var (`state`). `nextFloat()` gir et tilfeldig tall
fra 0 til 1. Det er mindre enn 0,05 i 5 prosent av tilfellene. `popResource`
slipper en ting ut på bakken, som når en kloss dropper noe.

`AFTER` betyr etter at klossen er knust. Det finnes også `BEFORE`, der du kan
stoppe spilleren fra å knuse klossen.

## Test prosjektet {.flag}

- [ ] Gå i overlevelsesmodus og hakk ut mye stein. Får du en rubin av og til?

- [ ] Ligger rubinstaven sist i fanen **Rubiner**, sammen med alt du har laget i
  kurset?

![Fanen Rubiner i kreativ modus med alt fra kurset: rubin, rubinkloss,
rubinmalm, rubinsverd, rubineple, rubingris-egg og
rubinstav](08-kreativ-fane-alt.png)

## Utfordring {.challenge}

- [ ] Få staven til å sende tre lyn på rad, eller et lyn på hver side av deg.

- [ ] Lag kommandoen `/rubingris <antall>`, som lager flere rubingriser rundt
  deg. Bruk `ModEntities.RUBINGRIS.create(...)` på samme måte som lynet.

- [ ] Gi rubiner fra annen stein også, for eksempel dypskifer
  (`Blocks.DEEPSLATE`), men med mindre sjanse.

- [ ] Gjør staven mindre kraftig: La den bruke opp en rubin fra inventaret hver
  gang, og ikke virke hvis du ikke har noen.
