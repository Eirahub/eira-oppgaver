---
title: Test moden
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

I kurset [Lag din egen Minecraft-mod](../../minecraft_mod) har du laget
`rubinmod`. Mens du skrev den, startet du spillet fra IntelliJ. Det er ikke det
samme som hos en spiller. Der kjører moden fra en jar-fil, sammen med andre
modder, og kanskje på en annen versjon eller loader.

I denne oppgaven legger du jar-filene i instansene fra forrige oppgave, og går
systematisk gjennom en **testplan**. En testplan er en liste over hva som skal
testes, og hvor. Den gjør at du ikke glemmer noe, og at du ser med en gang hvor
noe ikke virker.

Har du ikke laget en mod, kan du bruke en mod fra
[Modrinth](https://modrinth.com) som finnes for både Fabric og NeoForge.

<!-- BILDE: Loader mods i MultiMC for instansen Fabric 26.3, med
rubinmod-fabric-26.3-1.0.0.jar og Fabric API i lista -->


# Steg 1: Finn jar-filene {.activity}

## Sjekkliste {.check}

- [ ] Bygg moden med `./gradlew build` i IntelliJ, som i oppgaven [Del
  moden](../../minecraft_mod/del_moden/del_moden.html). På Windows i PowerShell
  skriver du `.\gradlew build`.

- [ ] Finn jar-filene. Hvor de ligger, kommer an på hvor langt du har kommet:

  - Etter **Oppførsel** (bare Fabric 26.3): `build/libs/rubinmod-1.0.0.jar`.

  - Etter **Felleskode**: `fabric/build/libs/` og `neoforge/build/libs/`.

  - Etter **Flere versjoner**: fire jar-filer i
    `<loader>/versions/<versjon>/build/libs/`, for eksempel
    `fabric/versions/1.21.11/build/libs/rubinmod-fabric-1.21.11-1.0.0.jar`.

Bruk ikke jar-filer som slutter på `-sources.jar`. De har bare kildekoden. Bruk
heller ikke jar-fila fra `common`. Den er ikke en mod.


# Steg 2: Legg moden i instansene {.activity}

## Sjekkliste {.check}

- [ ] Marker `Fabric 26.3` og gå til **Edit Instance**, **Loader mods**.

- [ ] Klikk **Add** og velg `rubinmod-fabric-26.3-1.0.0.jar`. Fabric API skal
  ligge der fra før.

- [ ] Gjør det samme for de tre andre instansene. Pass på at loader og versjon i
  filnavnet stemmer med instansen.

- [ ] Har du bare én jar-fil (etter **Oppførsel**), legger du den i `Fabric
  26.3`, og hopper over de andre.

## Ny utgave av moden {.tip}

Når du bygger moden på nytt, må du bytte ut jar-fila i instansene. Fjern den
gamle med **Remove** før du legger til den nye. To utgaver av samme mod i
`mods`-mappa gir feil.


# Steg 3: Testplanen {.activity}

Skriv av tabellen på papir eller i et regneark, og fyll den ut mens du tester.
Skriv **OK** når noe virker, og en kort beskrivelse når det ikke gjør det.

| Test                           | Fabric 26.3 | Fabric 1.21.11 | NeoForge 26.3 | NeoForge 1.21.11 |
| ------------------------------ | ----------- | -------------- | ------------- | ---------------- |
| Spillet starter                |             |                |               |                  |
| Moden står i lista over modder |             |                |               |                  |
| Fanen **Rubiner** i kreativ    |             |                |               |                  |
| Rubinklossen kan settes ut     |             |                |               |                  |
| Rubinmalm finnes i ny verden   |             |                |               |                  |
| Rubinsverd og rubineple virker |             |                |               |                  |
| Rubingrisen dukker opp         |             |                |               |                  |
| Rubinstaven sender lyn         |             |                |               |                  |
| `/rubinregn 30` virker         |             |                |               |                  |
| Ingen feil i loggen            |             |                |               |                  |

## Sjekkliste {.check}

- [ ] Start én instans om gangen. Lag en ny verden i kreativ modus for hver
  instans.

- [ ] Gå gjennom testene i tabellen, og fyll ut kolonnen.

- [ ] Se i **Minecraft Log** etter linjer med `ERROR` eller `WARN` som nevner
  `rubinmod`. Hvordan du leser loggen, lærer du i neste oppgave.

## Test prosjektet {.flag}

- [ ] Er alle rutene fylt ut?

- [ ] Hvis noe ikke virker i én instans, men virker i de andre: hva er ulikt? Er
  det loaderen eller versjonen?


# Steg 4: Test feil oppsett med vilje {.activity}

Spillere kommer til å installere moden feil. Da er det nyttig å vite hva de ser.

## Sjekkliste {.check}

- [ ] Lag en kopi av `NeoForge 26.3` med **Copy Instance**, og legg
  Fabric-jar-fila i kopien. Hva skjer når du starter?

- [ ] Lag en kopi av `Fabric 1.21.11`, og legg jar-fila for Fabric 26.3 i den.
  Hva sier Fabric?

- [ ] Lag en kopi av `Fabric 26.3`, og fjern Fabric API. Hva sier Fabric nå?

- [ ] Skriv ned hva du så. Det kan du bruke i en `README` for moden, under
  **Feilsøking**.

Slett kopiene etterpå med **Delete**, så du ikke blander dem med de ekte
testinstansene.

## Utfordring {.challenge}

- [ ] Test sammen med en annen mod. Legg en populær mod for samme loader og
  versjon i en kopi av instansen. Virker rubinmoden fortsatt?

- [ ] Test flerspiller sammen med en venn på samme nett. Dere bruker samme
  loader, versjon og jar-fil. Den ene velger **Open to LAN**. Kan den andre bli
  med og se rubingrisen?

- [ ] Legg til en kolonne i testplanen for en tredje versjon, hvis du har tatt
  utfordringen i **Flere versjoner**.
