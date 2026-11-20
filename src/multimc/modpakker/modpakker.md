---
title: Modpakker
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En **modpakke** er en instans pakket i én fil: Minecraft-versjon, loader, modder
og innstillinger. Den som får fila, importerer den og får nøyaktig samme
oppsett.

Det er nyttig i en kodeklubb. Den voksne lager testinstansene én gang, og alle
får de samme. Da tester alle det samme, og det er lettere å hjelpe hverandre når
noe går galt.

I denne oppgaven lærer du:

- å eksportere en instans som zip-fil for MultiMC

- å eksportere en instans som Modrinth-modpakke (`.mrpack`)

- å importere en modpakke


# Steg 1: Gjør instansen klar {.activity}

Alt i instansen blir med i pakken, hvis du ikke velger det bort. Rydd først.

## Sjekkliste {.check}

- [ ] Velg instansen du vil dele, for eksempel `Fabric 26.3` fra oppgaven
  [Mod-loadere](../mod_loadere/mod_loadere.html).

- [ ] Fjern modder som ikke skal være med.

- [ ] Gå til **Edit Instance**, **Settings**, og ta bort krysset for **Java
  installation**. Java ligger på forskjellige steder på hver maskin. Uten
  krysset bruker instansen den felles Java-en til den som importerer.

Pakken tar ikke med Microsoft-kontoen din. Kontoene lagres i MultiMC, ikke i
instansen.


# Steg 2: Eksporter for MultiMC {.activity}

Denne pakken er en zip-fil med hele instansen. Den passer best når alle bruker
MultiMC.

## Sjekkliste {.check}

- [ ] Marker instansen og klikk **Export Instance**. Velg **MultiMC** i menyen.

- [ ] Du ser en liste over filene i instansen. Ta bort krysset for det som ikke
  skal være med, for eksempel `saves` (verdenene), `screenshots` og
  `servers.dat`.

- [ ] Klikk **OK** og lagre zip-fila.

<!-- BILDE: Eksportvinduet i MultiMC med lista over filer, der saves og
screenshots ikke er krysset av -->


# Steg 3: Eksporter som Modrinth-modpakke {.activity}

En `.mrpack`-fil er formatet til Modrinth. Den kan importeres i MultiMC og i
mange andre launchere. Pakken lagrer bare en lenke til moddene som finnes på
Modrinth, så den blir liten. Modder som ikke finnes der, som din egen rubinmod,
blir lagt med som vanlige filer.

## Sjekkliste {.check}

- [ ] Marker instansen og klikk **Export Instance**. Velg **Modrinth (WIP)**.
  _WIP_ betyr at funksjonen ikke er helt ferdig.

- [ ] Fyll inn **Name**, **Version** og en kort **Description**.

- [ ] Velg hva som skal være med under **Export Options**, for eksempel
  **Include mod configs**.

- [ ] Velg hvor fila skal lagres under **File**, og klikk **OK**.


# Steg 4: Importer en modpakke {.activity}

## Sjekkliste {.check}

- [ ] Klikk **Add Instance** og velg **Import from zip**.

- [ ] Klikk **Browse** og velg zip-fila eller `.mrpack`-fila. Du kan også lime
  inn en lenke til en fil på nettet.

- [ ] Gi instansen et navn og klikk **OK**.

## Test prosjektet {.flag}

- [ ] Importer pakken du laget i steg 2. Er alle moddene med under **Loader
  mods**?

- [ ] Importer pakken fra steg 3. Er rubinmoden med?

- [ ] Starter begge?

## Bare fra folk du stoler på {.tip}

En modpakke inneholder modder, og modder er programmer. Importer bare pakker du
har laget selv, som du har fått fra en voksen i klubben, eller som du har funnet
på Modrinth. Last aldri ned pakker fra lenker i en chat.


# Steg 5: Del i klubben {.activity}

## Sjekkliste {.check}

- [ ] Legg pakken der alle kan hente den, for eksempel på en minnepinne eller i
  en delt mappe som klubben har.

- [ ] Skriv i navnet på fila hvilken loader og versjon den er for, og en dato,
  for eksempel `rubinmod-test-fabric-26.3-2026-11-20.zip`.

- [ ] Når moden er ny, lager du en ny pakke med ny dato. Da vet alle hvilken som
  er nyest.

## Utfordring {.challenge}

- [ ] Lag én pakke for hver instans i testplanen fra oppgaven [Test
  moden](../test_moden/test_moden.html). Hvor stor blir hver fil?

- [ ] Pakk ut en `.mrpack`-fil (den er en zip-fil), og se på
  `modrinth.index.json`. Hvor finner du lenkene til moddene?
