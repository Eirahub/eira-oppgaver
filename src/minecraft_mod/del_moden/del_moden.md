---
title: Del moden
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Til nå har du startet Minecraft fra IntelliJ. I denne oppgaven gjør du moden
klar til å spille med i vanlig Minecraft, og til å dele med venner. Du skriver
ingen ny kode.

Du lærer:

- å bygge jar-fila

- å installere Fabric eller NeoForge i vanlig Minecraft og legge moden i den

- å dele moden trygt

- å velge en lisens, og hva du må tenke på før du publiserer moden på nettet

Du kan ta denne oppgaven rett etter **Oppførsel**, eller etter **Felleskode** og
**Flere versjoner**.


# Steg 1: Bygg jar-fila {.activity}

En mod er en **jar-fil**. Det er en zip-fil med de kompilerte klassene dine, all
JSON og alle teksturene. Det er denne fila Minecraft laster.

## Sjekkliste {.check}

- [ ] Åpne Gradle-panelet og dobbeltklikk på **build** under **Tasks** og
  **build**. I terminalen skriver du:

  ```
  ./gradlew build
  ```

  På Windows i PowerShell skriver du `.\gradlew build`.

- [ ] Finn jar-fila. Hvor den ligger, kommer an på hvor langt du har kommet i
  kurset:

  - Etter **Oppførsel** (bare Fabric): `build/libs/rubinmod-1.0.0.jar`.

  - Etter **Felleskode**: `fabric/build/libs/rubinmod-fabric-1.0.0.jar` og
    `neoforge/build/libs/rubinmod-neoforge-1.0.0.jar`.

  - Etter **Flere versjoner**: fire jar-filer, én for hver loader og versjon. De
    ligger i `<loader>/versions/<versjon>/build/libs/`:
    `rubinmod-fabric-26.3-1.0.0.jar`, `rubinmod-fabric-1.21.11-1.0.0.jar`,
    `rubinmod-neoforge-26.3-1.0.0.jar` og `rubinmod-neoforge-1.21.11-1.0.0.jar`.

Fra **Felleskode** og utover lager `common` også en jar-fil. Den er ikke en mod.
Det er bare koden som `fabric` og `neoforge` bygger videre på. Bruk den ikke.

Tallet `1.0.0` er versjonen av moden din. Den står som `mod_version` i
`gradle.properties`. Gjør du endringer og deler moden på nytt, øker du tallet,
for eksempel til `1.0.1` eller `1.1.0`. Da ser alle hvilken som er nyest.

<!-- BILDE: Prosjektvinduet i IntelliJ med mappa build/libs åpnet og jar-fila
markert. -->


# Steg 2: Installer i vanlig Minecraft {.activity}

Moden virker bare når Minecraft startes med riktig loader og riktig versjon. En
jar-fil for Fabric 26.3 virker ikke i NeoForge, og ikke i Minecraft 1.21.11.

## Med Fabric {.check}

- [ ] Last ned **Fabric Installer** fra
  [fabricmc.net/use](https://fabricmc.net/use/) og start den.

- [ ] Velg samme Minecraft-versjon som moden er laget for, og klikk **Install**.

- [ ] Last ned **Fabric API** for samme Minecraft-versjon fra
  [Modrinth](https://modrinth.com/mod/fabric-api). Moden din bruker Fabric API,
  så den trengs også.

- [ ] Legg jar-fila til moden din og jar-fila til Fabric API i mappa `mods`. På
  Windows finner du den ved å skrive `%appdata%\.minecraft\mods` i adressefeltet
  i Filutforsker. Finnes ikke mappa, lager du den.

- [ ] Åpne Minecraft Launcher, velg profilen som begynner med **fabric-loader**,
  og trykk **Play**.

## Med NeoForge {.check}

- [ ] Last ned installasjonsprogrammet for NeoForge fra
  [neoforged.net](https://neoforged.net/). Velg versjonen for samme
  Minecraft-versjon som moden.

- [ ] Start det, velg **Install client**, og klikk **OK**.

- [ ] Legg jar-fila til moden din i mappa `mods`. NeoForge trenger ikke Fabric
  API.

- [ ] Velg profilen **NeoForge** i Minecraft Launcher, og trykk **Play**.

## Test prosjektet {.flag}

- [ ] Står det at spillet er modifisert nederst til venstre i hovedmenyen?

- [ ] Lag en ny verden. Finner du fanen **Rubiner** i kreativ modus?

## Tips {.tip}

Har du flere modder, eller vil du skille modder fra vanlig spilling? I Minecraft
Launcher kan du lage en egen installasjon med en egen spillmappe under
**Installations**. Da har den sin egen `mods`-mappe.


# Steg 3: Del trygt med venner {.activity}

Den enkleste måten å dele moden på, er å sende jar-fila til en venn du kjenner.
For at dere skal kunne spille sammen, trenger dere det samme:

- samme Minecraft-versjon

- samme loader (Fabric eller NeoForge), og Fabric API hvis det er Fabric

- samme utgave av moden

Spiller dere på en server, må moden ligge både på serveren og hos hver spiller.
Moden din legger til nye ting i spillet, og både serveren og spillerne må vite
hva en rubin er.

## Modder er programmer {.check}

En jar-fil er et program. En mod kan gjøre alt et vanlig program kan på
datamaskinen: lese filer, slette filer og sende ting over nettet. Rubinmoden
gjør ikke det, men vennene dine kan ikke se det på jar-fila.

- [ ] Del bare jar-filer du har laget selv, med folk du kjenner.

- [ ] Last aldri ned jar-filer fra nettsider du ikke kjenner, eller fra lenker
  noen sender deg i en chat. Hent modder fra Modrinth eller fra nettsida til den
  som har laget dem.

- [ ] Vis gjerne de voksne hjemme oppgaven [Trygt
  spill](../../minecraft_foreldre/trygt_spill/trygt_spill.html). Den forklarer
  for foreldre hvordan man henter modder trygt.


# Steg 4: Velg en lisens {.activity}

Koden du skriver, er din. En **lisens** sier hva andre har lov til å gjøre med
den: om de kan bruke den, endre den og dele den videre. Uten en lisens har andre
i utgangspunktet ikke lov til noe av det.

## Sjekkliste {.check}

- [ ] Se hvilken lisens moden har nå. Den står som `"license"` i
  `fabric.mod.json`, og som `license` i `neoforge.mods.toml` hvis du har den. I
  kurset er det `MIT`.

- [ ] Les om lisensene på [choosealicense.com](https://choosealicense.com/). To
  vanlige for modder er:

  - **MIT**: Alle kan bruke, endre og dele koden, også i egne modder, så lenge
    navnet ditt og lisensen følger med.

  - **GPL**: Det samme, men den som deler en endret utgave, må dele koden sin
    med samme lisens.

- [ ] Lag en fil `LICENSE` i prosjektmappa med teksten til lisensen du velger,
  og skriv navnet ditt i den.

Moden din bygger på koden i dette kurset. Koden i løsningsrepoet har MIT-lisens,
så du kan bruke den i din egen mod, også om du publiserer den. Teksten i kurset
har lisensen CC BY-SA 4.0.

Teksturene må også være dine. Tegner du dem selv, er alt i orden. Kopierer du
bilder fra andre, må du ha lov.


# Steg 5: Publiser på Modrinth {.activity}

[Modrinth](https://modrinth.com) er en nettside der moddere legger ut moddene
sine, og der spillere henter dem. Moderatorer går gjennom nye prosjekter, og
filene blir skannet for skadevare.

**Gjør dette bare sammen med en voksen.** For å publisere trenger du en konto,
og kontoen har en aldersgrense. Les vilkårene til Modrinth sammen med en voksen
før dere lager konto.

## Sjekkliste {.check}

- [ ] Gi moden ditt eget navn og din egen mod-id. Alle som tar kurset, lager en
  mod som heter `rubinmod`. Mod-id-en står i `RubinMod.MOD_ID`,
  `fabric.mod.json`, `neoforge.mods.toml`, i mappenavnene under `assets` og
  `data`, og i JSON-filene som `rubinmod:rubin`. Bruk **Edit**, **Find**,
  **Replace in Files** i IntelliJ.

- [ ] Skriv en kort beskrivelse av moden, og ta noen gode skjermbilder.

- [ ] Lag et nytt prosjekt på Modrinth, og velg lisensen du valgte i steg 4.

- [ ] Last opp jar-filene. For hver fil velger du loader (Fabric eller NeoForge)
  og Minecraft-versjon. Sjekk at du velger riktig, ellers laster folk ned en fil
  som ikke virker.

- [ ] For Fabric legger du til Fabric API som avhengighet (dependency), så
  spillerne ser at de trenger den.

Bruk ikke Minecraft-logoen, og gi ikke inntrykk av at moden er laget av Mojang
eller Microsoft. Skriv heller at det er en mod _til_ Minecraft.

## Tips {.protip}

Publiserer du moden, kommer andre til å spørre etter nye versjoner av Minecraft,
eller etter at moden skal virke med en annen loader. Det er akkurat det
oppgavene [Felleskode](../felleskode/felleskode.html) og [Flere
versjoner](../flere_versjoner/flere_versjoner.html) handler om.

## Utfordring {.challenge}

- [ ] Lag en ny versjon av moden med noe nytt i, øk `mod_version`, og send den
  til en venn. Ser vennen at det er en ny versjon i **Mods**-lista til NeoForge,
  eller i loggen til Fabric?

- [ ] Skriv en `README.md` for moden, med hva den gjør, hvilke versjoner den
  virker med, og hvordan man installerer den.
