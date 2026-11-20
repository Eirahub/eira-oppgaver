---
title: "Installere CC: Tweaked"
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Denne veiledningen er for en voksen som gjør datamaskinen klar. Elevene trenger
ikke gjøre dette selv. Installasjonen tar omtrent et kvarter.

[CC: Tweaked](https://tweaked.cc/) er en mod til **Minecraft Java Edition**. Den
gir deg datamaskiner og roboter (*turtles*) inne i spillet, som du programmerer
i språket Lua. CC: Tweaked er videreføringen av den gamle modden ComputerCraft,
som ikke lenger virker.

Vi bruker **Modrinth App** til å installere. Den lager en egen Minecraft-profil
med modden, uten at du må flytte filer selv. Har du ikke Minecraft, kan du øve
med **CraftOS-PC** i stedet. Se steg 6.

<!-- BILDE: En datamaskin og en robot fra CC: Tweaked i en Minecraft-verden. -->


# Steg 1: Dette trenger du {.activity}

## Sjekkliste {.check}

- [ ] En datamaskin med Windows eller macOS. Linux virker også, men Modrinth App
  er mindre utprøvd der. Chromebook, nettbrett og spillkonsoller kan ikke kjøre
  Minecraft Java Edition med modder.

- [ ] **Minecraft: Java & Bedrock Edition for PC**. Java og Bedrock selges
  samlet når du kjøper til datamaskin. Vi bruker Java-utgaven. Se [Hva er
  Minecraft?](../../minecraft_foreldre/hva_er_minecraft/hva_er_minecraft.html)
  hvis du er usikker på hvilken utgave dere har.

- [ ] En Microsoft-konto som eier Minecraft. Modrinth App logger inn med den
  samme kontoen som Minecraft Launcher.

## Hvilken versjon? {.protip}

Vi bruker **Minecraft 1.21.1** med modlasteren **NeoForge**. CC: Tweaked finnes
også for nyere versjoner, men for 1.21.1 har modden vært ute lengst, og med
NeoForge trenger du bare én mod. Bruk samme versjon på alle maskinene i
klasserommet, ellers kan de ikke spille sammen.


# Steg 2: Installer Modrinth App {.activity}

## Sjekkliste {.check}

- [ ] Gå til [modrinth.com/app](https://modrinth.com/app) og last ned appen for
  Windows eller macOS.

- [ ] Installer og start appen. På Mac drar du appen til mappen **Programmer**.

- [ ] Logg inn med Microsoft-kontoen som eier Minecraft. Innloggingen finner du
  nede til venstre i appen.

  <!-- BILDE: Modrinth App med innloggingsknappen for Minecraft-kontoen markert.
  -->

## Trygge modder {.tip}

Hent modder fra Modrinth, ikke fra tilfeldige nedlastingssider. På Modrinth blir
prosjektene sjekket, og filene skannet for skadevare. Se også [Trygt
spill](../../minecraft_foreldre/trygt_spill/trygt_spill.html).


# Steg 3: Lag en profil med NeoForge {.activity}

En *profil* (Modrinth kaller det *instance*) er en egen Minecraft-installasjon
med sine egne modder og verdener. Vanlig Minecraft blir ikke endret.

## Sjekkliste {.check}

- [ ] Klikk på pluss-knappen i menyen til venstre for å lage en ny profil. Et
  vindu som heter **Create instance** åpner seg.

- [ ] Fyll ut:

  - **Name**: `CC Tweaked`

  - **Loader**: `NeoForge`

  - **Game version**: `1.21.1`

- [ ] Klikk **Create instance**. Appen laster ned Minecraft og NeoForge. Det tar
  et par minutter første gang.

  <!-- BILDE: Vinduet Create instance med Name, Loader NeoForge og Game version
  1.21.1 fylt ut. -->


# Steg 4: Legg til CC: Tweaked {.activity}

## Sjekkliste {.check}

- [ ] Åpne profilen `CC Tweaked`, og klikk på knappen for å legge til innhold
  (**Browse content**).

- [ ] Søk etter `CC: Tweaked`. Velg modden som er laget av *SquidDev*.

- [ ] Klikk **Install**. Appen velger selv riktig fil for Minecraft 1.21.1 og
  NeoForge.

  <!-- BILDE: Søkeresultatet for CC: Tweaked i Modrinth App med knappen Install.
  -->

- [ ] Sjekk at CC: Tweaked står i listen over modder i profilen.

## Fabric i stedet for NeoForge? {.tip}

CC: Tweaked finnes også for modlasteren Fabric. Da trenger du i tillegg modden
**Fabric API**. Modrinth App henter den vanligvis selv. Velger du NeoForge,
slipper du det.


# Steg 5: Test at alt virker {.activity}

## Sjekkliste {.check}

- [ ] Klikk **Play** på profilen. Minecraft starter med NeoForge. Første start
  tar litt tid.

- [ ] Klikk `Singleplayer` og så `Create New World`.

- [ ] Gi verdenen et navn, og sett `Game Mode` til `Creative`. Under fanen
  `World` kan du velge `World Type: Superflat`. Da er det lett å se hva robotene
  gjør. Klikk `Create New World`.

- [ ] Trykk `E`. Bla gjennom fanene øverst til du finner fanen
  **ComputerCraft**, med et bilde av en datamaskin. Hent en **Advanced
  Computer**.

  <!-- BILDE: Creative-inventory med fanen ComputerCraft åpen og Advanced
  Computer markert. -->

- [ ] Sett datamaskinen ut og høyreklikk på den. En skjerm dukker opp med
  teksten `CraftOS` og et versjonsnummer øverst.

- [ ] Skriv `help` og trykk Enter.

## Test prosjektet {.flag}

- [ ] Ser du skjermen og hjelpeteksten? Da er alt klart. Elevene kan begynne på
  [Introduksjon til CC:
  Tweaked](../introduksjon_til_cc_tweaked/introduksjon_til_cc_tweaked.html)
  eller [Bli kjent med
  datamaskinen](../bli_kjent_med_datamaskinen/bli_kjent_med_datamaskinen.html).

## Finn filene til datamaskinene {.tip}

Programmene elevene skriver, lagres i mappen til profilen. I Modrinth App åpner
du den fra menyen til profilen (de tre prikkene). Inni ligger
`saves/<verden>/computercraft/computer/<nummer>`. Nummeret får du ved å skrive
`id` på datamaskinen.


# Steg 6: Øv uten Minecraft med CraftOS-PC {.activity}

[CraftOS-PC](https://www.craftos-pc.cc/) er et gratis program som etterligner en
datamaskin fra CC: Tweaked. Det trenger verken Minecraft eller konto. Det er
fint for å øve på Lua hjemme, eller på en maskin uten Minecraft.

CraftOS-PC har **ikke roboter**, så oppgavene med roboter må gjøres i Minecraft.
Dører og redstone finnes heller ikke. Skjermer, diskettstasjoner og modemer kan
du legge til med kommandoen `attach`.

## Sjekkliste {.check}

- [ ] Gå til [craftos-pc.cc](https://www.craftos-pc.cc/) og last ned for
  Windows, macOS eller Linux. På Windows kjører du installasjonsprogrammet. Får
  du en advarsel fra SmartScreen, klikker du **More info** og **Run anyway**. På
  Mac drar du appen til **Programmer**.

- [ ] Du kan også prøve [CraftOS-PC Online](https://www.craftos-pc.cc/online/)
  rett i nettleseren.

- [ ] Start CraftOS-PC og skriv `help`. Det er samme kommandolinje som i
  spillet.

- [ ] Vil du ha en skjerm til oppgaven
  [Sprettball](../sprettball/sprettball.html)? Skriv `attach right monitor`. Da
  åpner et nytt vindu seg, som virker som en skjerm på høyre side.

| Oppgave                    | Minecraft | CraftOS-PC                     |
| -------------------------- | --------- | ------------------------------ |
| Bli kjent med datamaskinen | Ja        | Ja, unntatt døren i steg 5     |
| Robotinvasjon              | Ja        | Nei                            |
| Hendelser                  | Ja        | Ja, unntatt disketten i steg 4 |
| Bygg et hus                | Ja        | Nei                            |
| Sprettball                 | Ja        | Ja, med `attach right monitor` |
| Send en beskjed            | Ja        | Nei                            |
| Fjernstyr en robot         | Ja        | Nei                            |


# Hvis noe går galt {.activity}

| Problem                                            | Hva du gjør                                                                                     |
| -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Innloggingen i Modrinth App feiler                 | Kontoen må eie Minecraft Java Edition. Logg inn i Minecraft Launcher først for å sjekke.        |
| Fanen ComputerCraft finnes ikke                    | Du startet vanlig Minecraft. Start profilen `CC Tweaked` fra Modrinth App.                      |
| Modden vil ikke installeres                        | Sjekk at profilen har NeoForge og Minecraft 1.21.1.                                             |
| Roboten svarer `Out of fuel`                       | Gi roboten kull og skriv `refuel all`. Se [Robotinvasjon](../robotinvasjon/robotinvasjon.html). |
| Programmene er borte etter at maskinen ble flyttet | Gi datamaskinen et navn med `label set <navn>` før du plukker den opp.                          |

Mer hjelp på engelsk finner du på [tweaked.cc](https://tweaked.cc/).

Kurset er ikke laget av eller godkjent av Mojang eller Microsoft. Minecraft er
et varemerke som tilhører Mojang Synergies AB.
