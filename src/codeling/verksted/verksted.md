---
title: "Overlev første natt 3: Verksted"
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå har roboten stammer og brostein. I denne oppgaven gjør den dem om til det
du trenger for natta:

- planker av stammene
- et arbeidsbord
- en ovn av brosteinen
- trekull, ved å brenne stammer i ovnen
- pinner og fakler

![Illustrasjon av et arbeidsbord på bakken og en ovn som henger i lufta. En
robot over ovnen legger i en stamme, en robot på siden legger i brensel, og
en robot under ovnen får trekull. Til høyre står tre fakler.](ovn.png)

Fortsett i det samme prosjektet som i
[Grav stein](../grav_stein/grav_stein.html). Roboten må ha minst 24 stammer og
8 brostein.


# Steg 1: Planker og arbeidsbord {.activity}

Roboten lager ting av det den har i inventaret. Små oppskrifter, som planker,
pinner og arbeidsbord, kan den lage hvor som helst. Store oppskrifter, som en
ovn, trenger et arbeidsbord ved siden av roboten.

## Sjekkliste {.check}

- [ ] Still deg der hytta skal stå, og stå stille.

- [ ] Lag funksjonen `verksted` og kall den:

```javascript
function verksted() {
    agent.craft(Item.OakPlanks, 64)
    agent.craft(Item.CraftingTable, 1)
    blocks.place(Block.CraftingTable, pos(4, 0, 0))
    agent.moveTo(pos(4, 0, 0))
}
verksted()
```

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Står det et arbeidsbord 4 blokker fra deg?

- [ ] Hvor mange stammer brukte roboten på 64 planker? Tips: én stamme gir 4
  planker.


# Steg 2: Ovn og pinner {.activity}

Nå står roboten ved arbeidsbordet. Da kan den lage en ovn av 8 brostein.

## Sjekkliste {.check}

- [ ] Legg til nederst i `verksted`:

```javascript
    agent.craft(Item.Furnace, 1)
    agent.craft(Item.Stick, 4)
    blocks.place(Block.Furnace, pos(6, 1, 0))
```

- [ ] Ovnen står én blokk over bakken. Hvorfor? Les neste steg og se om du
  skjønner det.


# Steg 3: Fyll ovnen {.activity}

En ovn har tre plasser: det som skal brennes (oppå), brensel (fra siden) og
det som er ferdig (under). Roboten må stå på riktig side.

Vi brenner 4 stammer til trekull, og bruker 3 stammer som brensel.

## Sjekkliste {.check}

- [ ] Flytt 4 stammer til plass 27 og 3 stammer til plass 26:

```javascript
    agent.transfer(4, 1, 27)
    agent.transfer(3, 1, 26)
```

- [ ] Fly opp over ovnen, og legg stammene fra plass 27 oppi:

```javascript
    agent.moveTo(pos(6, 2, 0))
    agent.storeItems(SixDirection.Down, 27)
```

- [ ] Fly bort til siden av ovnen. Snu roboten til den ser ovnen, og legg i
  brenselet:

```javascript
    agent.moveTo(pos(7, 1, 0))
    for (let i = 0; i < 4; i++) {
        if (agent.inspect(AgentInspection.Block, SixDirection.Forward) != Block.Furnace) {
            agent.turn(TurnDirection.Left)
        }
    }
    agent.storeItems(SixDirection.Forward, 26)
```

## Test prosjektet {.flag}

- [ ] Begynner ovnen å brenne? Den lyser når den er i gang.

- [ ] Hvorfor snur roboten høyst 4 ganger?


# Steg 4: Hent trekull og lag fakler {.activity}

Ovnen bruker omtrent 10 sekunder på hver stamme. Så henter roboten trekullet
fra undersiden.

## Sjekkliste {.check}

- [ ] Legg til nederst i `verksted`:

```javascript
    loops.pause(45000)
    agent.moveTo(pos(6, 0, 0))
    agent.takeItems(SixDirection.Up, 0, 64)
    agent.craft(Item.Torch, 16)
    agent.say("Fakler klare!")
```

## Test prosjektet {.flag}

__Trykk på `Kjør`.__ Husk at roboten må ha stammer og brostein fra før.

- [ ] Får roboten 4 trekull?

- [ ] Hvor mange fakler blir det av 4 trekull og 4 pinner?

## Tips {.tip}

Fikk roboten ikke noe trekull? Kanskje ovnen ikke var ferdig. Prøv en lengre
pause, eller la roboten prøve igjen i en løkke til `agent.takeItems` svarer
sann.


## Utfordring {.challenge}

- [ ] Bytt ut `loops.pause` med en løkke som prøver å hente trekull hvert
  femte sekund, til roboten har fått det.

- [ ] Lag en kiste av planker og sett den i verkstedet. La roboten legge
  brosteinen i kista.
