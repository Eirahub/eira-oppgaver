---
title: Speideren
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Før du drar ut på eventyr, er det lurt å vite hva som venter. I denne oppgaven
blir roboten en speider. Den flyr opp i lufta, du ser verden gjennom øynene
dens, og den forteller deg hva den finner. Du lærer om **sensorer**,
**variabler** og **hvis**.

Du bør ha gjort oppgaven [Finn veien](../finn_veien/finn_veien.html) først.

<!-- BILDE: Utsikt fra robotkameraet høyt over en skog, med "Robot camera"
øverst til venstre. -->


# Før du starter {.activity}

## Sjekkliste {.check}

- [ ] Start Minecraft med Halison Code. Åpne en vanlig verden i `Kreativ`
  modus (Creative) med juksekoder på (Allow Commands: ON). Den må ha trær og
  fjell, så ikke velg `Superflat`.

- [ ] Trykk `T` for å åpne chatten, skriv `/robot spawn` og trykk Enter.
  Roboten dukker opp ved føttene dine og ser samme vei som deg.

- [ ] Trykk `T` igjen, skriv `/halisoncode` og trykk Enter. Editoren åpnes i
  nettleseren. Trykk `Nytt prosjekt`.

- [ ] Skriv `/gamerule halisoncode:pause_on_lost_focus false` i chatten. Da går
  ikke spillet på pause når du bytter til editoren, og du ser hva roboten gjør
  mens du jobber. Du trenger bare gjøre det én gang i hver verden.

## Slik bytter du mellom Minecraft og editoren {.tip}

- Du lager programmet i nettleseren og ser roboten i Minecraft. Bytt vindu med
  `Alt` + `Tab` (på Mac `Cmd` + `Tab`). Hold inne `Alt` og trykk `Tab` til
  Minecraft er valgt, og slipp.

- Trykk alltid på `Kjør` i editoren **før** du bytter til Minecraft. Programmet
  kjører fra nettleseren, så la editoren stå åpen.

- Viser Minecraft pausemenyen når du kommer tilbake, trykk `Tilbake til
  spillet` (Back to Game). Roboten står stille så lenge spillet er på pause.
  Har du ikke skrevet `/gamerule halisoncode:pause_on_lost_focus false`, gjør
  det nå. Du kan også trykke `F3` + `P` i Minecraft.

- Er roboten borte eller langt unna, skriv `/robot spawn` igjen. Vil du stoppe
  et program, trykk stoppknappen i editoren eller skriv `/robot stop`.


# Steg 1: Se med robotens øyne {.activity}

Roboten har et kamera. Du kan se gjennom det når du vil.

## Sjekkliste {.check}

- [ ] Skriv `/robot spawn` i chatten. Skriv så `/robot camera`.

- [ ] Nå ser du det roboten ser. Kroppen din står stille der den var.

- [ ] Skriv `/robot camera follow`. Nå er kameraet bak og over roboten. Rull
  med musehjulet for å komme nærmere eller lenger unna.

- [ ] Skriv `/robot camera off` for å komme tilbake.


# Steg 2: Fly opp {.activity}

Roboten flyr fra start. Den faller ikke, selv om det er luft under den.

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt. Legg `robot kamera følg` i `ved start`.

- [ ] Under den: `robot flytt opp med 20`.

- [ ] Så `robot flytt fremover med 30`.

- [ ] Til slutt `robot kamera av`.

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Følger kameraet roboten mens den flyr?

- [ ] Hva skjer hvis roboten treffer et fjell eller et høyt tre?

## Tips {.tip}

En flytting er høyst 64 blokker. Vil du lenger, bruker du flere `robot flytt`
etter hverandre, eller en løkke.


# Steg 3: Hvor er vi? {.activity}

Nå skal roboten fortelle hva den ser. Sensorene måler, og svarene legger vi i
**variabler**. En variabel er en boks med et navn, der programmet kan legge et
tall eller en tekst.

## Sjekkliste {.check}

- [ ] Etter flyturen, legg til `robot flytt ned med 20`, så roboten er nede
  ved bakken igjen.

- [ ] Legg til `robot si` og dra `robot biom` inn i tekstfeltet. Roboten sier
  navnet på biomet, for eksempel `plains` eller `forest`.

- [ ] Åpne `Variabler` og lag en variabel som heter `dyr`.

- [ ] Legg til `sett dyr til` og dra `robot tell i nærheten dyr innen 8` inn i
  den.

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Hvilket biom landet roboten i?


# Steg 4: Hvis ... ellers {.activity}

En speider melder fra om det er viktig. Med `hvis` fra `Logikk` kan roboten
velge hva den skal si.

## Sjekkliste {.check}

- [ ] Dra en `hvis ... ellers` inn nederst.

- [ ] Sett betingelsen til `dyr > 0`. Bruk sammenligningen fra `Logikk` og
  variabelen `dyr`.

- [ ] Inni `hvis`: `robot si Her er det dyr!`

- [ ] Inni `ellers`: `robot si Ingen dyr her.`

- [ ] Under, en ny `hvis`: `robot lysnivå < 8`. Inni den: `robot si Det er
  mørkt. Pass deg for monstre!`

## Test prosjektet {.flag}

__Kjør programmet både om dagen og om natten.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Sier roboten noe annet når det er mørkt?

- [ ] Fly til et sted med kyr eller sauer. Ser roboten dem?

## Tips {.protip}

Lys under 8 betyr ikke at monstre kommer, men at det er mørkt nok. Monstre
dukker opp der lyset er 0.


# Programmet i JavaScript {.activity}

```javascript
agent.camera(CameraMode.Follow)
agent.move(SixDirection.Up, 20)
agent.move(SixDirection.Forward, 30)
agent.move(SixDirection.Down, 20)
agent.camera(CameraMode.Off)
agent.say(agent.biome())
let dyr = agent.countNearby(EntityKind.Animal, 8)
if (dyr > 0) {
    agent.say("Her er det dyr!")
} else {
    agent.say("Ingen dyr her.")
}
if (agent.lightLevel() < 8) {
    agent.say("Det er mørkt. Pass deg for monstre!")
}
```

## Utfordring {.challenge}

- [ ] La roboten fly i en stor firkant og melde fra i hvert hjørne.

- [ ] Bruk `robot oppdag væske ned` og la roboten si fra når den er over vann
  eller lava.

- [ ] Lag en chatkommando `speid` som sender roboten ut og hjem igjen.
