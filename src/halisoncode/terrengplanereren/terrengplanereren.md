---
title: Terrengplanereren
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Vil du bygge noe stort i en vanlig verden, er bakken nesten aldri flat. Her er
en haug, der er et hull. I denne oppgaven lager du en robot som måler bakken,
finner det høyeste og det laveste punktet, regner ut **gjennomsnittet**, og gjør
hele tomta flat. Du skriver programmet i **JavaScript** og bruker **lister**,
**løkker** og en **funksjon** du kan kjøre fra chatten.

Du bør ha gjort oppgavene [Bygg et hus](../bygg_et_hus/bygg_et_hus.html) og
[Lageret](../lageret/lageret.html) først.

<!-- BILDE: En kvadratisk, helt flat tomt med jord midt i et kupert landskap, og
roboten som står ved kanten. -->


# Før du starter {.activity}

## Sjekkliste {.check}

- [ ] Start Minecraft med Halison Code. Åpne en vanlig verden i `Kreativ` modus
  (Creative) med `Tillat kommandoer` på (Allow Commands). Den må ha trær og
  fjell, så ikke velg `Superflat`.

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


# Steg 1: Mål bakken {.activity}

`agent.heightProfile` går ingen steder. Den ser bortover og gir deg en **liste**
med hvor høyt bakken er, én høyde for hver blokk.

## Sjekkliste {.check}

- [ ] Finn et sted med litt bakker, gjerne en haug eller en grop. Still deg ved
  kanten og se innover. Skriv `/robot spawn`.

- [ ] Lag et nytt prosjekt, gå til fanen `JavaScript` og skriv:

```javascript
let høyder = agent.heightProfile(SixDirection.Forward, 16)
let tekst = ""
for (let h of høyder) {
    tekst = tekst + h + " "
}
player.say("Høyder: " + tekst)
```

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Står det 16 tall i chatten?

- [ ] Trykk `F3` og se på `XYZ`. Det midterste tallet er høyden til føttene
  dine. Bakken er blokken under, så den er én lavere. Det første tallet i lista
  er bakken rett foran roboten. Stemmer det?

## Tips {.tip}

`for (let h of høyder)` går gjennom lista, ett tall om gangen. Inni løkka er `h`
det tallet vi er kommet til.


# Steg 2: Høyest og lavest {.activity}

Nå skal programmet finne det største og det minste tallet i lista. Vi begynner
med det første tallet, og bytter hver gang vi finner et som er større (eller
mindre).

## Sjekkliste {.check}

- [ ] Legg til nederst i programmet:

```javascript
let størst = høyder[0]
let minst = høyder[0]
for (let h of høyder) {
    if (h > størst) {
        størst = h
    }
    if (h < minst) {
        minst = h
    }
}
player.say("Høyest " + størst + ", lavest " + minst)
```

## Test prosjektet {.flag}

__Kjør programmet.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Finner du det høyeste og det laveste tallet i lista selv? Er de like som
  det programmet sier?

## Tips {.tip}

`høyder[0]` er det første tallet i lista. Lister begynner å telle på 0.


# Steg 3: Gjennomsnitt {.activity}

Hvor høyt skal den flate tomta være? Bygger vi på den høyeste høyden, trengs mye
jord. Bygger vi på den laveste, må vi grave mye. Gjennomsnittet er et godt sted
midt imellom.

## Sjekkliste {.check}

- [ ] Legg til nederst:

```javascript
let sum = 0
for (let h of høyder) {
    sum = sum + h
}
let snitt = Math.round(sum / høyder.length)
player.say("Snitt " + snitt)
```

## Test prosjektet {.flag}

__Kjør programmet.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Ligger snittet mellom det laveste og det høyeste?

## Tips {.protip}

`høyder.length` er hvor mange tall som er i lista. `Math.round` runder av til et
helt tall, for en blokk kan ikke stå på 64,5.


# Steg 4: En hel tomt {.activity}

En høydeprofil er bare én linje. En tomt har både bredde og lengde. Vi lager
lista selv med to løkker inni hverandre, og `agent.groundHeight` måler ett sted
om gangen.

## Sjekkliste {.check}

- [ ] Bytt ut den første linjen i programmet, den med `heightProfile`, med
  dette:

```javascript
let høyder: number[] = []
for (let x = 1; x <= 8; x++) {
    for (let z = 1; z <= 8; z++) {
        høyder.push(agent.groundHeight(pos(x, 0, z)))
    }
}
player.say("Målte " + høyder.length + " steder")
```

- [ ] Slett løkka som lager `tekst`, og `player.say` med høydene. Det blir for
  mange tall.

## Test prosjektet {.flag}

__Kjør programmet.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Målte roboten 64 steder? Hvorfor blir det akkurat 64?

- [ ] Virker steg 2 og 3 fortsatt, selv om lista er laget på en ny måte?

## Tips {.tip}

`pos(x, 0, z)` er målt fra føttene dine. `x` er mot øst og `z` mot sør, så tomta
ligger sørøst for deg. `groundHeight` bryr seg ikke om tallet i midten. Den
svarer med høyden i verden, som du ser i `F3`.

`groundHeight` svarer med den øverste blokken som ikke er luft eller løv, også
om den svever. Står det en flytende blokk over tomta, blir den regnet som bakken
der.


# Steg 5: Gjør tomta flat {.activity}

Nå vet vi alt vi trenger. Alt som er høyere enn snittet, fyller vi med luft. Alt
som er lavere, fyller vi med jord. `blocks.fill` trenger hjørnene som plasser i
verden, så vi regner ut hvor du står først.

## Sjekkliste {.check}

- [ ] Legg til nederst:

```javascript
let her = player.position()
let x0 = her.getValue(Axis.X)
let z0 = her.getValue(Axis.Z)
if (størst > snitt) {
    blocks.fill(Block.Air, world(x0 + 1, snitt + 1, z0 + 1), world(x0 + 8, størst, z0 + 8), FillOperation.Replace)
}
if (minst < snitt) {
    blocks.fill(Block.Dirt, world(x0 + 1, minst + 1, z0 + 1), world(x0 + 8, snitt, z0 + 8), FillOperation.Keep)
}
agent.say("Tomta er flat!")
```

## Test prosjektet {.flag}

__Stå helt i ro mens programmet kjører.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Er tomta sørøst for deg helt flat nå?

- [ ] Hva skjer med blokkene som allerede stod der under snittet?

## Tips {.protip}

`FillOperation.Keep` (behold) fyller bare der det er luft. Da blir steinen og
jorda som allerede er der, liggende. Hvorfor sjekker vi `størst > snitt` før vi
fyller med luft? Prøv å forklare det til en makker.


# Steg 6: Planer fra chatten {.activity}

Til slutt skal du selv velge hvor stor tomta skal være.

## Sjekkliste {.check}

- [ ] Samle hele programmet i en funksjon `planer(bredde: number, lengde:
  number)`.

- [ ] I løkkene, bytt ut `x <= 8` med `x <= bredde` og `z <= 8` med `z <=
  lengde`. Bytt også `x0 + 8` med `x0 + bredde` og `z0 + 8` med `z0 + lengde`.

- [ ] Roboten når bare 32 blokker. Legg dette først i funksjonen:

```javascript
if (bredde < 1 || lengde < 1 || bredde > 16 || lengde > 16) {
    player.say("Bredde og lengde må være fra 1 til 16")
    return
}
```

- [ ] Lag chatkommandoen `planer`:

```javascript
player.onChat("planer", function (num1, num2, num3) {
    planer(num1, num2)
})
```

## Test prosjektet {.flag}

__Skriv `planer 12 10` i chatten.__

- [ ] Trykk `Kjør` i editoren først. Bytt så til Minecraft med `Alt` + `Tab`.

- [ ] Blir tomta 12 blokker mot øst og 10 mot sør?

- [ ] Prøv på et sted med en stor haug. Prøv i en grop.

## Tips {.tip}

Roboten må stå innenfor 32 blokker fra tomta. Skriv `/robot spawn` der du står,
før du skriver `planer`.

## Utfordring {.challenge}

- [ ] Legg et lag med `Block.Grass` (gressblokk) øverst, så tomta ser fin ut.

- [ ] Et tre på tomta blir hogget av, men løvet blir hengende i lufta. Hvorfor?
  Tips: `groundHeight` teller ikke løv.

- [ ] Vann teller som bakke. Hva skjer om tomta går ut i en innsjø? Kan du få
  programmet til å si fra?

- [ ] La roboten si hvor mange blokker jord den trengte. Regn ut `snitt - h` for
  hvert sted som er lavere enn snittet, og legg sammen.
