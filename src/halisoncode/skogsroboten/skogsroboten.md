---
title: Skogsroboten
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

I Tømmerhuggeren måtte du selv stille roboten foran treet. Nå skal roboten
klare seg alene. Den finner det nærmeste treet, går dit, snur seg mot stammen,
hogger den, plukker opp det som falt ned, og kommer hjem igjen. Du skriver
programmet i **JavaScript**, og du lærer å regne med **posisjoner** og bruke
**lister**.

Du bør ha gjort oppgavene
[Tømmerhuggeren](../tommerhuggeren/tommerhuggeren.html) og
[Lageret](../lageret/lageret.html) først.

<!-- BILDE: Roboten på vei hjem fra skogen med inventaret fullt av stammer, og
en stubbe der treet stod. -->


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


# Steg 1: Finn treet {.activity}

`agent.findNearestCategory` leter etter den nærmeste blokken av en type. Med
`BlockCategory.Logs` finner den alle slags stammer: eik, bjørk, gran og de
andre.

## Sjekkliste {.check}

- [ ] Gå til et sted med noen trær i nærheten. Skriv `/robot spawn`.

- [ ] Lag et nytt prosjekt i JavaScript, og skriv:

```javascript
agent.setHome()
let tre = agent.findNearestCategory(BlockCategory.Logs, 16)
if (tre) {
    agent.say("Fant et tre på " + tre.toString())
} else {
    agent.say("Ingen trær her")
}
```

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Hvilken posisjon sier roboten? Se på koordinatene med `F3`. Stemmer det?

## Tips {.tip}

`if (tre)` er sann når roboten fant noe. Finner den ingenting innen 16 blokker,
er `tre` tom, og da går programmet til `else`.


# Steg 2: Gå dit {.activity}

`agent.moveTo` finner en vei selv. Når målet er en stamme, stopper roboten på
blokken ved siden av, for den kan ikke stå inni treet.

## Sjekkliste {.check}

- [ ] Inni `if (tre)`, under `agent.say`, legg til:

```javascript
if (!agent.moveTo(tre)) {
    agent.say("Jeg finner ingen vei")
}
```

## Test prosjektet {.flag}

__Kjør igjen.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Går roboten bort til treet?

- [ ] Ser den mot stammen? Ikke alltid! Den ser den veien den gikk sist.


# Steg 3: Snu mot stammen {.activity}

Roboten må se mot treet før den kan hogge. Vi regner ut hvilken vei treet er,
og snur roboten til den ser den veien.

`agent.getOrientation()` sier hvilken vei roboten ser, i grader: sør er 0, vest
90, nord 180 og øst -90. Vi gjør om alle vinklene til tall fra 0 til 359, så er
det lettere å sammenligne.

## Sjekkliste {.check}

- [ ] Lag disse to funksjonene øverst i programmet:

```javascript
function grader(vinkel: number) {
    return ((vinkel % 360) + 360) % 360
}

function snuMot(mål: Position) {
    let her = agent.getPosition()
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
        if (grader(agent.getOrientation()) == retning) {
            return
        }
        agent.turn(TurnDirection.Right)
    }
}
```

- [ ] Kall `snuMot(tre)` etter `agent.moveTo(tre)`.

## Test prosjektet {.flag}

__Kjør igjen, fra et annet sted.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Ser roboten mot stammen nå, uansett hvilken side den kom fra?

## Tips {.protip}

`dx` er hvor langt treet er mot øst. Er `dx` positiv, ligger treet mot øst, og
øst er 270 grader. Prøv å forklare de andre tilfellene til en makker.


# Steg 4: Hogg {.activity}

Nå kan du bruke det du laget i Tømmerhuggeren.

## Sjekkliste {.check}

- [ ] Lim inn funksjonen `hoggTre()` fra Tømmerhuggeren, men ta bort de fire
  linjene som planter stikling. Det gjør vi til slutt.

- [ ] Kall `hoggTre()` etter `snuMot(tre)`.

## Test prosjektet {.flag}

__Kjør programmet.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Hogger roboten hele stammen og kommer ned igjen?


# Steg 5: Plukk opp alt {.activity}

Det roboten hogger, havner rett i inventaret. Men løvet som ble ødelagt, slipper
stiklinger og epler på bakken rundt treet. `agent.radar` gir en **liste** med
posisjonen til alle ting som ligger på bakken i nærheten.

## Sjekkliste {.check}

- [ ] Etter `hoggTre()`, legg til:

```javascript
let ting = agent.radar(EntityKind.Item, 8)
for (let p of ting) {
    agent.moveTo(p)
    agent.collectAll()
}
```

## Test prosjektet {.flag}

__Kjør programmet ved et nytt tre.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Plukker roboten opp stiklinger og epler?

- [ ] Høyreklikk på roboten. Hva har den i inventaret?

## Tips {.tip}

Løv som ikke blir hogd, råtner bort av seg selv litt etter litt, og da faller
det mer. Vent noen sekunder før radaren, med `loops.pause(5000)`, så får
roboten med seg mer.


# Steg 6: Kom hjem {.activity}

## Sjekkliste {.check}

- [ ] Til slutt: `agent.goHome()` og `agent.say("Hjemme!")`.

- [ ] Samle alt fra steg 1 til 6 i en funksjon `hentTre()`.

- [ ] Lag chatkommandoen `skog`, som henter så mange trær som tallet du skriver:

```javascript
player.onChat("skog", function (num1, num2, num3) {
    for (let i = 0; i < num1; i++) {
        hentTre()
    }
})
```

## Test prosjektet {.flag}

__Skriv `skog 3` i chatten.__

- [ ] Trykk `Kjør` i editoren først. Bytt så til Minecraft med `Alt` + `Tab`.

- [ ] Henter roboten tre trær og kommer hjem hver gang?


## Utfordring {.challenge}

- [ ] La roboten legge alt i en kiste hjemme, med `agent.storeItems` fra
  Lageret.

- [ ] Plant en stikling der hvert tre stod. Husk at stiklingen ligger i en av
  plassene. Finn den med en løkke over alle 27 plassene.

- [ ] Noen ganger er den nærmeste stammen høyt oppe i treet. Da blir stubben
  stående igjen. Kan du få roboten til å hogge nedover også?

- [ ] Hva skjer når det ikke er flere trær innen 16 blokker? La roboten si fra
  og stoppe.
