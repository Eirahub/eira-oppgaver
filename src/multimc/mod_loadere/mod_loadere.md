---
title: Mod-loadere
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En **mod-loader** er programmet som laster moddene inn i Minecraft. Uten en
loader gjør Minecraft ingenting med jar-filene i `mods`-mappa. De mest brukte
er:

- **Fabric**: liten og rask, og ofte klar for nye Minecraft-versjoner tidlig.

- **NeoForge**: kom fra Forge i 2023, og brukes av mange store modder og
  modpakker. Finnes fra Minecraft 1.20.1.

- **Forge**: den eldste. Mange gamle modder finnes bare for Forge.

- **Quilt**: bygger på Fabric og kan laste de fleste Fabric-modder.

En mod er laget for én loader. En jar-fil for Fabric virker ikke i NeoForge, og
omvendt. Derfor lager du én instans for hver loader du vil teste.

MultiMC installerer alle fire selv. Du trenger ikke installasjonsprogrammene fra
nettsidene til loaderne.

<!-- BILDE: Edit Instance i MultiMC med siden Version åpen. Til høyre ses
knappene Install Forge, Install NeoForge, Install Fabric og Install Quilt -->


# Steg 1: En Fabric-instans {.activity}

## Sjekkliste {.check}

- [ ] Lag en ny instans med **Add Instance** og **Vanilla**. Kall den `Fabric
  26.3`, legg den i gruppen `Rubinmod-test`, og velg versjon **26.3**.

- [ ] Marker instansen og klikk **Edit Instance**. Velg **Version**.

- [ ] Klikk **Install Fabric** til høyre. Velg den øverste versjonen av Fabric
  Loader, og klikk **OK**.

- [ ] Nå står Fabric Loader i lista under Minecraft.

## Hva er en stjerne? {.tip}

Noen versjoner i listene er merket med en stjerne. Det er versjonen loaderen
anbefaler for denne Minecraft-versjonen. Velg den hvis du er usikker.


# Steg 2: Fabric API {.activity}

De fleste Fabric-modder trenger **Fabric API**, en mod med verktøy som andre
modder bruker. Rubinmoden trenger den også. Fabric API er en vanlig mod, så du
legger den i `mods`-mappa.

## Sjekkliste {.check}

- [ ] Gå til [Fabric API på Modrinth](https://modrinth.com/mod/fabric-api), og
  velg **Versions**.

- [ ] Finn en versjon for **Fabric** og Minecraft **26.3**, og last ned
  jar-fila.

- [ ] I MultiMC går du til **Edit Instance** og velger **Loader mods**.

- [ ] Klikk **Add** og velg jar-fila du lastet ned. Du kan også dra fila inn i
  lista.

- [ ] Start instansen. Starter den uten feil?

## Avhengigheter {.tip}

En mod som trenger en annen mod, har en **avhengighet** (_dependency_). På
Modrinth står avhengighetene på siden til hver versjon. Mangler en avhengighet,
starter ikke spillet. Det ser du mer på i oppgaven [Logger og
krasjrapporter](../logger/logger.html).


# Steg 3: En NeoForge-instans {.activity}

## Sjekkliste {.check}

- [ ] Marker `Fabric 26.3` og klikk **Copy Instance**. Kall kopien `NeoForge
  26.3`.

- [ ] Gå til **Edit Instance** og **Version**. Marker **Fabric Loader** og klikk
  **Remove**. En instans kan bare ha én loader.

- [ ] Gå til **Loader mods** og fjern Fabric API. NeoForge trenger den ikke.

- [ ] Gå tilbake til **Version** og klikk **Install NeoForge**. Velg den øverste
  versjonen og klikk **OK**.

- [ ] Start instansen. I hovedmenyen har NeoForge en egen knapp, **Mods**. Der
  ser du alle moddene som er lastet.

## Forge og Quilt {.tip}

**Install Forge** og **Install Quilt** virker på samme måte. Knappene er grå når
loaderen ikke finnes for Minecraft-versjonen i instansen. Quilt kan laste de
fleste Fabric-modder, men bruker **Quilted Fabric API** i stedet for Fabric API.


# Steg 4: Instanser for 1.21.11 {.activity}

## Sjekkliste {.check}

- [ ] Lag en ny instans med **Add Instance** og **Vanilla**. Kall den `Fabric
  1.21.11`, legg den i gruppen `Rubinmod-test`, og velg versjon **1.21.11**.

- [ ] Installer Fabric som i steg 1.

- [ ] Last ned Fabric API for 1.21.11, og legg den i **Loader mods**. En Fabric
  API for 26.3 virker ikke i 1.21.11.

- [ ] Velg Java 21 for instansen. Se [Java for
  Minecraft](../java_for_minecraft/java_for_minecraft.html).

- [ ] Lag `NeoForge 1.21.11` på samme måte, med **Install NeoForge**.

Det er tryggere å lage en ny instans enn å bytte Minecraft-versjon i en instans
som allerede har en loader. Loaderen er laget for én bestemt versjon.

## Test prosjektet {.flag}

- [ ] Har du fire instanser i gruppen `Rubinmod-test`: Fabric 26.3, Fabric
  1.21.11, NeoForge 26.3 og NeoForge 1.21.11?

- [ ] Starter alle fire?

## Utfordring {.challenge}

- [ ] Fabric viser ikke en liste over moddene i spillet. Finn moden **Mod Menu**
  på Modrinth, og legg den i Fabric-instansene. Husk riktig Minecraft-versjon.

- [ ] Hent en kjent mod fra Modrinth som finnes for både Fabric og NeoForge, og
  legg riktig fil i alle fire instansene. Hvor mange ulike jar-filer trengte du?
