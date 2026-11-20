---
title: Tom mod
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Den minste moden som virker, har bare to filer: `fabric.mod.json`, som forteller
Fabric hvem moden er, og én Java-klasse som kjøres når spillet starter. Moden
gjør ingenting du kan se i spillet. Den skriver bare `Hei fra rubinmod!` i
loggen.

Det høres lite ut, men i resten av kurset bygger du videre på akkurat disse to
filene. Du lærer hva en **mod-id** er, hva et **entrypoint** er, og hvor du
finner loggen når noe går galt.

Før du starter, må maskinen være klar. Følg

[installasjonsveiledningen](../installasjon/installasjon.html)

først.


# Steg 1: Se deg rundt i prosjektet {.activity}

Åpne prosjektet `rubinmod` i IntelliJ. Det er mange filer, men bare noen av dem
er dine. Resten hører til Gradle.

## Sjekkliste {.check}

- [ ] Åpne `gradle.properties`. Her står versjonene moden bruker:
  `minecraft_version=26.3` og versjonene av Fabric Loader og Fabric API.

- [ ] Åpne `build.gradle.kts`. Den sier at prosjektet bruker **Fabric Loom**,
  som laster ned Minecraft og lager oppgaven `runClient`. Du trenger ikke endre
  noe her nå.

- [ ] Åpne mappa `src/main`. Under `java` ligger Java-koden. Under `resources`
  ligger alt annet: JSON-filer, bilder og tekster.

`src/main/java` og `src/main/resources` er moden din. Nesten alt du gjør i
kurset, skjer i de to mappene.

![Prosjektvinduet med src/main/java og src/main/resources
åpnet](prosjektvindu.png)


# Steg 2: fabric.mod.json {.activity}

Når Minecraft starter med Fabric, leter Fabric etter fila `fabric.mod.json` i
hver mod. Den sier hva moden heter, hva den trenger, og hvilken klasse som skal
kjøres.

## Sjekkliste {.check}

- [ ] Åpne `src/main/resources/fabric.mod.json`. Den skal se slik ut. Har du
  brukt malgeneratoren, retter du den til:

  ```json
  {
    "schemaVersion": 1,
    "id": "rubinmod",
    "version": "${version}",
    "name": "Rubinmod",
    "description": "Kursmod fra Lær Kidsa Koding.",
    "authors": ["Lær Kidsa Koding"],
    "license": "MIT",
    "environment": "*",
    "entrypoints": {
      "main": ["no.kidsakoder.rubinmod.RubinMod"]
    },
    "depends": {
      "fabricloader": ">=0.20.1",
      "minecraft": "~26.3",
      "java": ">=25",
      "fabric-api": "*"
    }
  }
  ```

- [ ] Finn `"id": "rubinmod"`. Det er **mod-id-en**. Den er navnet moden har
  inne i spillet, og den kommer foran alt du lager, for eksempel
  `rubinmod:rubin`. Den skal bare ha små bokstaver, uten mellomrom.

- [ ] Finn `"entrypoints"`. Under `"main"` står det full adresse til en klasse:
  pakken `no.kidsakoder.rubinmod` og klassen `RubinMod`. Det er
  **entrypointet**, der Fabric starter moden din.

- [ ] Finn `"depends"`. Her står det at moden trenger Minecraft 26.3, Java 25 og
  Fabric API. Mangler noe av dette, nekter Fabric å starte spillet og sier hva
  som mangler.

`${version}` byttes ut med versjonsnummeret fra `gradle.properties` når moden
bygges.


# Steg 3: Klassen RubinMod {.activity}

## Sjekkliste {.check}

- [ ] Åpne `src/main/java`, pakken `no.kidsakoder.rubinmod` og klassen
  `RubinMod`. Den skal se slik ut. Har du brukt malgeneratoren, gir du klassen
  dette navnet og denne koden:

  ```java
  package no.kidsakoder.rubinmod;

  import net.fabricmc.api.ModInitializer;
  import org.slf4j.Logger;
  import org.slf4j.LoggerFactory;

  // Fabric kjører onInitialize() én gang når spillet starter,
  // fordi klassen står under "main" i fabric.mod.json.
  public class RubinMod implements ModInitializer {
      public static final String MOD_ID = "rubinmod";
      public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

      @Override
      public void onInitialize() {
          LOGGER.info("Hei fra rubinmod!");
      }
  }
  ```

`ModInitializer` er et grensesnitt fra Fabric, med én metode: `onInitialize()`.
Klassen din lover å ha den metoden. Fabric leser `fabric.mod.json`, finner
klassen, lager et objekt av den og kaller `onInitialize()`. Det er her moden din
forteller Minecraft om alt den har.

`LOGGER` skriver til loggen. Det er Minecraft sin versjon av `IO.println`.
Meldingene havner i vinduet **Run** i IntelliJ og i fila `logs/latest.log`.

`MOD_ID` er mod-id-en en gang til, som en konstant. Den bruker vi mye senere.


# Steg 4: Start spillet og finn meldingen {.activity}

## Sjekkliste {.check}

- [ ] Start spillet med **runClient**.

- [ ] Klikk i vinduet **Run** nederst i IntelliJ, og trykk `Ctrl + F` (på Mac
  `Cmd + F`). Søk etter `rubinmod`.

## Test prosjektet {.flag}

- [ ] Finner du linja med `Hei fra rubinmod!`?

- [ ] Endre teksten i `LOGGER.info(...)` til noe annet. Lukk spillet og start
  det på nytt. Står den nye teksten i loggen?

<!-- BILDE: Vinduet Run i IntelliJ med linja "Hei fra rubinmod!" markert. -->

## Tips {.tip}

Java-koden leses bare når spillet starter. Når du har endret Java-kode, må du
lukke Minecraft og kjøre **runClient** på nytt. Det gjelder resten av kurset
også.


# Steg 5: Når noe går galt {.activity}

Loggen er det viktigste verktøyet ditt. Når spillet krasjer, står forklaringen
der.

## Sjekkliste {.check}

- [ ] Endre `"main"` i `fabric.mod.json` til en klasse som ikke finnes, for
  eksempel `no.kidsakoder.rubinmod.FeilMod`.

- [ ] Start spillet. Det krasjer. Les loggen. Finner du linja som sier hvilken
  klasse Fabric ikke fant?

- [ ] Rett det tilbake til `no.kidsakoder.rubinmod.RubinMod`, og sjekk at
  spillet starter igjen.

Feilmeldinger fra Java er lange. Les fra toppen, og se etter ord du kjenner
igjen, som navnet på klassen eller fila di. Linjene som starter med `at`, viser
hvor i koden feilen skjedde.

## Utfordring {.challenge}

- [ ] Skriv navnet ditt i `"authors"` i `fabric.mod.json`, og gi moden en ny
  beskrivelse.

- [ ] Skriv ut en melding til i `onInitialize()`, for eksempel med
  `LOGGER.warn(...)`. Hva er forskjellen i loggen?

- [ ] Lag en variabel med et tall i `onInitialize()` og skriv det ut med
  `LOGGER.info("Moden har {} rubiner", antall)`. Hva gjør `{}`?
