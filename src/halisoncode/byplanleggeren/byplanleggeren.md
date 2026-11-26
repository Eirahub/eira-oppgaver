---
title: Byplanleggeren
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En byplanlegger bygger ikke hus oppå et tre eller midt i et hull. Først sjekker
hun tomta. I denne oppgaven lager du en robot som bygger en hel gate med hus.
Før hvert hus sjekker roboten at tomta er ledig og at bakken er flat. Er den
ikke det, hopper roboten over tomta og går videre. Du skriver programmet i
**JavaScript**, og bruker **funksjoner som svarer**, **løkker** og **lister**.

Vi bruker en flat verden. Der er bakken lik overalt, så du ser tydelig hvorfor
roboten hopper over en tomt: det er fordi du selv har satt noe i veien.

Du bør ha gjort oppgavene [Bygg et hus](../bygg_et_hus/bygg_et_hus.html) og
[Terrengplanereren](../terrengplanereren/terrengplanereren.html) først.

<!-- BILDE: En gate av grus med fire like hus på rad, og en tom tomt med et
steintårn der roboten hoppet over. -->


# Før du starter {.activity}

## Sjekkliste {.check}

- [ ] Start Minecraft med Halison Code. Åpne en flat verden i `Kreativ` modus
  (Creative) med `Tillat kommandoer` på (Allow Commands). Velg `Superflat` under
  `Verdenstype` (World Type).

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

- Viser Minecraft pausemenyen når du kommer tilbake, trykk `Fortsett spill`
  (Back to Game). Roboten står stille så lenge spillet er på pause. Har du ikke
  skrevet `/gamerule halisoncode:pause_on_lost_focus false`, gjør det nå. Du kan
  også trykke `F3` + `P` i Minecraft.

- Er roboten borte eller langt unna, skriv `/robot spawn` igjen. Vil du stoppe
  et program, trykk stoppknappen i editoren eller skriv `/robot stop`.


# Steg 1: Et hus du kan flytte {.activity}

Huset fra Bygg et hus står alltid på samme sted. Nå legger vi til en parameter
`x`, så vi kan flytte huset bortover mot øst.

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt, gå til fanen `JavaScript` og skriv:

```javascript
function byggHus(x: number, bredde: number, lengde: number) {
    blocks.fill(Block.OakPlanks, pos(x + 1, -1, 1), pos(x + bredde, 3, lengde), FillOperation.Hollow)
    blocks.fill(Block.Air, pos(x + 4, 0, 1), pos(x + 4, 1, 1), FillOperation.Replace)
    blocks.place(Block.Glass, pos(x + 1, 1, 4))
    blocks.place(Block.Glass, pos(x + bredde, 1, 4))
    blocks.place(Block.Torch, pos(x + 4, 0, 4))
}

byggHus(2, 7, 7)
```

## Test prosjektet {.flag}

__Trykk på `Kjør`, og stå i ro.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Står huset litt mot øst og sør for deg?

- [ ] Endre `2` til `12` og kjør igjen et annet sted. Flytter huset seg?


# Steg 2: Er tomta ledig? {.activity}

`agent.isAreaFree` svarer sann hvis det ikke er noe i en boks. Gress og snø
teller ikke. `agent.countSolid` teller hvor mange blokker som er i veien.

## Sjekkliste {.check}

- [ ] Over `byggHus(2, 7, 7)`, lag en funksjon som svarer sann eller usann:

```javascript
function ledig(x: number, bredde: number, lengde: number) {
    let fra = pos(x + 1, 0, 1)
    let til = pos(x + bredde, 3, lengde)
    if (!agent.isAreaFree(fra, til)) {
        agent.say("Opptatt: " + agent.countSolid(fra, til) + " blokker i veien")
        return false
    }
    return true
}
```

- [ ] Bytt ut `byggHus(2, 7, 7)` med:

```javascript
if (ledig(2, 7, 7)) {
    byggHus(2, 7, 7)
}
```

## Test prosjektet {.flag}

__Gå til et nytt sted. Sett et lite tårn av stein der huset skal stå, cirka 4
blokker øst og 4 sør for deg. Gå tilbake og kjør.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Sier roboten at tomta er opptatt? Hvor mange blokker sier den?

- [ ] Fjern tårnet og kjør igjen. Bygger roboten huset nå?

## Tips {.tip}

Boksen begynner på høyde `0`, der føttene dine er. Gulvet på `-1` er bakken, og
den skal jo være der.


# Steg 3: Er bakken flat? {.activity}

En tomt kan være tom, men ha et hull. Vi sjekker bakken i de fire hjørnene med
`agent.groundHeight`. Bakken skal være én blokk under føttene dine.

## Sjekkliste {.check}

- [ ] I `ledig`, rett før `return true`, legg til:

```javascript
let bakke = player.position().getValue(Axis.Y) - 1
let hjørner = [pos(x + 1, 0, 1), pos(x + bredde, 0, 1), pos(x + 1, 0, lengde), pos(x + bredde, 0, lengde)]
for (let h of hjørner) {
    if (agent.groundHeight(h) != bakke) {
        agent.say("Bakken er ikke flat")
        return false
    }
}
```

## Test prosjektet {.flag}

__Grav et hull der et av hjørnene til huset skal stå, og kjør.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Sier roboten at bakken ikke er flat?

- [ ] Grav hullet midt på tomta i stedet. Merker roboten det nå? Hvorfor ikke?

## Tips {.protip}

`hjørner` er en liste med fire posisjoner. `return false` inni løkka gjør at
funksjonen slutter med en gang, uten å sjekke resten.


# Steg 4: En hel gate {.activity}

Nå bygger vi flere hus på rad, med en grusvei foran. Roboten når bare 32
blokker, så den må gå bortover gaten mens den bygger.

## Sjekkliste {.check}

- [ ] Slett `if (ledig(2, 7, 7))` og det som er inni. Lag denne funksjonen:

```javascript
function gate(antall: number, bredde: number, lengde: number) {
    for (let i = 0; i < antall; i++) {
        let x = 2 + i * (bredde + 3)
        agent.moveTo(pos(x, 0, 0))
        blocks.fill(Block.Gravel, pos(x - 3, -1, 0), pos(x + bredde, -1, 0), FillOperation.Replace)
        if (ledig(x, bredde, lengde)) {
            byggHus(x, bredde, lengde)
        }
    }
}

gate(4, 7, 7)
```

## Test prosjektet {.flag}

__Gå til et nytt sted, og kjør. Stå i ro til roboten er ferdig.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Får du fire hus med en grusvei foran?

- [ ] Sett et tårn på en av tomtene, og kjør på nytt et annet sted med samme
  avstand. Hopper roboten over den tomta?

## Tips {.tip}

`bredde + 3` gjør at det blir tre blokker mellom husene. Tegn husene på et
rutepapir og tell.


# Steg 5: Hold oversikt {.activity}

En byplanlegger vil vite hvor husene står. Vi lagrer posisjonene i to lister: én
for hus som ble bygd, og én for tomter vi hoppet over.

## Sjekkliste {.check}

- [ ] Øverst i `gate`, før løkka, legg til:

```javascript
let bygd: Position[] = []
let hoppet: Position[] = []
```

- [ ] Inni løkka, bytt ut `if`-en med:

```javascript
let tomt = pos(x + 1, 0, 1).toWorld()
if (ledig(x, bredde, lengde)) {
    byggHus(x, bredde, lengde)
    bygd.push(tomt)
} else {
    hoppet.push(tomt)
}
```

- [ ] Nederst i `gate`, etter løkka:

```javascript
player.say("Bygde " + bygd.length + " hus")
for (let p of hoppet) {
    player.say("Hoppet over tomta på " + p.toString())
}
```

## Test prosjektet {.flag}

__Sett noe i veien på én tomt, og kjør på et nytt sted.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Står det i chatten hvor mange hus som ble bygd, og hvor roboten hoppet
  over?

## Tips {.tip}

`toWorld()` gjør om `pos` til en plass i verden. Da betyr tallene det samme,
selv om du går et annet sted etterpå.


# Steg 6: Bestill en gate fra chatten {.activity}

## Sjekkliste {.check}

- [ ] Slett `gate(4, 7, 7)` nederst, og lag chatkommandoen `gate`:

```javascript
player.onChat("gate", function (num1, num2, num3) {
    if (num2 < 5 || num3 < 5 || num2 > 12 || num3 > 12) {
        player.say("Bredde og lengde må være fra 5 til 12")
        return
    }
    gate(num1, num2, num3)
})
```

## Test prosjektet {.flag}

__Skriv `gate 5 6 9` i chatten.__

- [ ] Trykk `Kjør` i editoren først. Bytt så til Minecraft med `Alt` + `Tab`.

- [ ] Får du fem hus som er 6 brede og 9 lange?

- [ ] Hvorfor må huset være minst 5 bredt? Se på døra i `byggHus`.

## Utfordring {.challenge}

- [ ] Sjekk hele bakken, ikke bare hjørnene. Bruk to løkker inni hverandre, slik
  som i Terrengplanereren.

- [ ] Prøv i en vanlig verden. Kan du bruke `planer` fra Terrengplanereren på
  hver tomt før du bygger, i stedet for å hoppe over?

- [ ] Bygg en gate på begge sider av veien. Tips: husene på den andre siden har
  negative `z`.

- [ ] Gi hvert hus en tilfeldig farge med ull, eller en tilfeldig størrelse.
