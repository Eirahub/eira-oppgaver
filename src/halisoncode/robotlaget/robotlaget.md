---
title: Robotlaget
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

To roboter klarer mer enn én. I denne oppgaven lager du et lag: Hugger finner og
hogger trær, og Baerer går bort til Hugger, tar imot stammene og bærer dem hjem
til kista. Mens Baerer går hjem, kan Hugger finne neste tre. Du lærer å styre
**flere roboter**, å gi hver robot sin egen **funksjon**, og å la dem jobbe
**samtidig**.

Du bør ha gjort oppgaven [Skogsroboten](../skogsroboten/skogsroboten.html)
først.

<!-- BILDE: To roboter med navneskilt over hodet, Hugger ved et tre og Baerer på
vei mot en kiste. -->


# Før du starter {.activity}

## Sjekkliste {.check}

- [ ] Start Minecraft med Halison Code. Åpne en vanlig verden i `Kreativ` modus
  (Creative) med juksekoder på (Allow Commands: ON). Den må ha trær og fjell, så
  ikke velg `Superflat`.

- [ ] Trykk `T` for å åpne chatten, skriv `/robot spawn` og trykk Enter. Roboten
  dukker opp ved føttene dine og ser samme vei som deg.

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

- Viser Minecraft pausemenyen når du kommer tilbake, trykk `Tilbake til spillet`
  (Back to Game). Roboten står stille så lenge spillet er på pause. Har du ikke
  skrevet `/gamerule halisoncode:pause_on_lost_focus false`, gjør det nå. Du kan
  også trykke `F3` + `P` i Minecraft.

- Er roboten borte eller langt unna, skriv `/robot spawn` igjen. Vil du stoppe
  et program, trykk stoppknappen i editoren eller skriv `/robot stop`.


# Steg 1: Lag laget {.activity}

Fra start får hver spiller bare én robot. Med en spilleregel kan du få flere.
Roboter med navn lager du med `/robot spawn` og et navn. Navnet kan bare ha
bokstavene a til z, sifre, `_` og `-`, ikke æ, ø og å. Derfor heter bæreren
`Baerer`.

## Sjekkliste {.check}

- [ ] Gå til et sted med noen trær i nærheten.

- [ ] Skriv `/gamerule halisoncode:max_robots 3` i chatten. Roboten uten navn
  teller som én, så nå er det plass til to til.

- [ ] Skriv `/robot spawn Hugger`. Gå noen skritt og skriv `/robot spawn
  Baerer`.

- [ ] Skriv `/robot list`. Ser du begge robotene?

- [ ] Lag et nytt prosjekt, gå til fanen `JavaScript` og skriv:

```javascript
let hugger = robots.get("Hugger")
let baerer = robots.get("Baerer")
hugger.say("Jeg er Hugger")
baerer.say("Jeg er Baerer")
```

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på robotene.

- [ ] Sier begge robotene navnet sitt?

## Tips {.tip}

`robots.get("Hugger")` er roboten som heter Hugger. Den kan alt `agent` kan.
Skriv navnet likt hver gang, med stor H.


# Steg 2: Hugger hogger {.activity}

Gi hver robot sin egen funksjon. Den første linjen i funksjonen henter roboten,
og resten av funksjonen bruker den. Funksjonene fra Skogsroboten virker nesten
som før, bare med `hugger` i stedet for `agent`.

## Sjekkliste {.check}

- [ ] Slett programmet fra steg 1. Skriv inn disse funksjonene:

```javascript
function grader(vinkel: number) {
    return ((vinkel % 360) + 360) % 360
}

function snuMot(mål: Position) {
    let hugger = robots.get("Hugger")
    let her = hugger.getPosition()
    let dx = mål.getValue(Axis.X) - her.getValue(Axis.X)
    let dz = mål.getValue(Axis.Z) - her.getValue(Axis.Z)
    let retning = 0
    if (dx > 0) {
        retning = 270
    } else if (dx < 0) {
        retning = 90
    } else if (dz < 0) {
        retning = 180
    }
    for (let i = 0; i < 4; i++) {
        if (grader(hugger.getOrientation()) == retning) {
            return
        }
        hugger.turn(TurnDirection.Right)
    }
}

function hoggTre() {
    let hugger = robots.get("Hugger")
    while (hugger.detect(AgentDetection.Block, SixDirection.Forward)) {
        hugger.destroy(SixDirection.Forward)
        hugger.destroy(SixDirection.Up)
        hugger.move(SixDirection.Up, 1)
    }
    while (!(hugger.detect(AgentDetection.Block, SixDirection.Down))) {
        hugger.move(SixDirection.Down, 1)
    }
    hugger.collectAll()
}

function hugg() {
    let hugger = robots.get("Hugger")
    let tre = hugger.findNearestCategory(BlockCategory.Logs, 16)
    if (tre && hugger.moveTo(tre)) {
        snuMot(tre)
        hoggTre()
    } else {
        hugger.say("Jeg finner ikke noe tre")
    }
}

player.onChat("hugg", function (num1, num2, num3) {
    hugg()
})
```

## Test prosjektet {.flag}

__Skriv `hugg` i chatten.__

- [ ] Trykk `Kjør` i editoren først. Bytt så til Minecraft med `Alt` + `Tab`.

- [ ] Finner Hugger et tre og hogger det?

- [ ] Står Baerer stille hele tiden?


# Steg 3: Baerer går til Hugger {.activity}

`goToRobot` sender en robot bort til en annen. Den stopper på en ledig blokk ved
siden av, og snur seg mot den.

## Sjekkliste {.check}

- [ ] Lag en funksjon for Baerer:

```javascript
function hent() {
    let baerer = robots.get("Baerer")
    let hugger = robots.get("Hugger")
    if (!baerer.goToRobot(hugger)) {
        baerer.say("Jeg finner ikke Hugger")
    }
}

player.onChat("hent", function (num1, num2, num3) {
    hent()
})
```

## Test prosjektet {.flag}

__Skriv `hent` i chatten.__

- [ ] Trykk `Kjør` i editoren først. Bytt så til Minecraft med `Alt` + `Tab`.

- [ ] Går Baerer bort til Hugger? Ser den mot Hugger når den stopper?

## Tips {.tip}

`goToRobot` svarer usann hvis den ikke finner vei, eller hvis Hugger flyttet seg
mens Baerer gikk. Da kan du bare prøve igjen.


# Steg 4: Gi fra deg stammene {.activity}

En robot kan ikke gi ting rett til en annen. Men Hugger kan slippe alt foran
seg, og Baerer kan plukke det opp. Først må Hugger snu seg mot Baerer. Står den
allerede ved siden av, snur `goToRobot` den bare.

## Sjekkliste {.check}

- [ ] Inni `hent()`, etter `if`-en, legg til:

```javascript
hugger.goToRobot(baerer)
hugger.dropAll(SixDirection.Forward)
loops.pause(1000)
baerer.collectAll()
baerer.say("Takk!")
```

## Test prosjektet {.flag}

__Skriv `hugg`, vent til Hugger er ferdig, og skriv `hent`.__

- [ ] Trykk `Kjør` i editoren først. Bytt så til Minecraft med `Alt` + `Tab`.

- [ ] Slipper Hugger stammene, og plukker Baerer dem opp?

- [ ] Skriv `/robot inventory Hugger` og `/robot inventory Baerer`. Hvem har
  stammene nå?

## Tips {.protip}

En ting som nettopp ble sluppet, kan ikke plukkes opp med en gang. Derfor venter
Baerer ett sekund med `loops.pause(1000)`.


# Steg 5: Hjem til kista {.activity}

Baerer skal ha et hjem rett over en kiste. Da legger den alt ned i kista.

## Sjekkliste {.check}

- [ ] Sett ut en kiste på bakken. Still deg rett foran kista og se mot den.
  Skriv `/robot spawn Baerer`.

- [ ] Kjør dette programmet én gang. Baerer flytter seg opp på kista og gjør
  den plassen til hjemmet sitt:

```javascript
let baerer = robots.get("Baerer")
baerer.move(SixDirection.Up, 1)
baerer.move(SixDirection.Forward, 1)
baerer.setHome()
```

## Tips {.tip}

Ikke stå oppå kista når du skriver `/robot spawn`. En kiste er litt lavere enn
en vanlig blokk, så roboten havner inni kista i stedet for oppå den.

## Sjekkliste {.check}

- [ ] Lag en funksjon til:

```javascript
function hjem() {
    let baerer = robots.get("Baerer")
    if (baerer.goHome()) {
        baerer.storeItems(SixDirection.Down, 0)
        baerer.say("Alt er i kista")
    } else {
        baerer.say("Jeg finner ikke hjem")
    }
}
```

- [ ] Kall `hjem()` nederst i `hent()`.

## Test prosjektet {.flag}

__Skriv `hugg` og så `hent`.__

- [ ] Trykk `Kjør` i editoren først. Bytt så til Minecraft med `Alt` + `Tab`.

- [ ] Går Baerer hjem? Åpne kista. Ligger stammene der?


# Steg 6: Jobb samtidig {.activity}

Nå venter Hugger mens Baerer går hjem. Det er bortkastet tid. Med
`control.runInParallel` kjører koden inni samtidig med resten av programmet.

## Sjekkliste {.check}

- [ ] Ta bort `hjem()` fra `hent()`.

- [ ] Lag chatkommandoen `lag`:

```javascript
player.onChat("lag", function (num1, num2, num3) {
    for (let i = 0; i < num1; i++) {
        hugg()
        hent()
        control.runInParallel(function () {
            hjem()
        })
    }
})
```

## Test prosjektet {.flag}

__Skriv `lag 3` i chatten.__

- [ ] Trykk `Kjør` i editoren først. Bytt så til Minecraft med `Alt` + `Tab`.

- [ ] Begynner Hugger på neste tre mens Baerer er på vei hjem?

- [ ] Hvor mange stammer ligger i kista etter tre trær?

## Tips {.tip}

Hver robot har sin egen kø med kommandoer. Er Baerer fortsatt på vei hjem når
`hent()` kjører igjen, gjør den ferdig turen først, og går så til Hugger.

## Utfordring {.challenge}

- [ ] La Hugger plante en stikling der treet stod, slik som i
  [Tømmerhuggeren](../tommerhuggeren/tommerhuggeren.html).

- [ ] Lag en tredje robot, `Planker`, som står ved kista og lager planker av
  stammene med `craft`. Husk å skru `max_robots` opp til 4.

- [ ] La Baerer bare gå hjem når den har mer enn 32 stammer. Bruk
  `baerer.getItemCount`.

- [ ] Hva skjer om Hugger ikke finner flere trær? La programmet stoppe og si
  fra.
