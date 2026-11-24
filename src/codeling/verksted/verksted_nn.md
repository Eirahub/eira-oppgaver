---
title: "Overlev første natta 3: Verkstad"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

No har roboten stammar og brustein. I denne oppgåva gjer han dei om til det du
treng for natta:

- plankar av stammane
- eit arbeidsbord
- ein omn av brusteinen
- trekol, ved å brenne stammar i omnen
- pinnar og fakler

![Illustrasjon av eit arbeidsbord på bakken og ein omn som heng i lufta. Ein
robot over omnen legg i ein stamme, ein robot på sida legg i brensel, og ein
robot under omnen får trekol. Til høgre står tre fakler.](ovn.png)

Hald fram i det same prosjektet som i
[Grav stein](../grav_stein/grav_stein_nn.html). Roboten må ha minst 24
stammar og 8 brustein.


# Steg 1: Plankar og arbeidsbord {.activity}

Roboten lagar ting av det han har i inventaret. Små oppskrifter, som plankar,
pinnar og arbeidsbord, kan han lage kvar som helst. Store oppskrifter, som ein
omn, treng eit arbeidsbord ved sida av roboten.

## Sjekkliste {.check}

- [ ] Still deg der hytta skal stå, og stå stille.

- [ ] Lag funksjonen `verksted` og kall han:

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

- [ ] Står det eit arbeidsbord 4 blokker frå deg?

- [ ] Kor mange stammar brukte roboten på 64 plankar? Tips: éin stamme gir 4
  plankar.


# Steg 2: Omn og pinnar {.activity}

No står roboten ved arbeidsbordet. Då kan han lage ein omn av 8 brustein.

## Sjekkliste {.check}

- [ ] Legg til nedst i `verksted`:

```javascript
    agent.craft(Item.Furnace, 1)
    agent.craft(Item.Stick, 4)
    blocks.place(Block.Furnace, pos(6, 1, 0))
```

- [ ] Omnen står éi blokk over bakken. Kvifor? Les neste steg og sjå om du
  skjønar det.


# Steg 3: Fyll omnen {.activity}

Ein omn har tre plassar: det som skal brennast (oppå), brensel (frå sida) og
det som er ferdig (under). Roboten må stå på rett side.

Vi brenn 4 stammar til trekol, og brukar 3 stammar som brensel.

## Sjekkliste {.check}

- [ ] Flytt 4 stammar til plass 27 og 3 stammar til plass 26:

```javascript
    agent.transfer(4, 1, 27)
    agent.transfer(3, 1, 26)
```

- [ ] Fly opp over omnen, og legg stammane frå plass 27 oppi:

```javascript
    agent.moveTo(pos(6, 2, 0))
    agent.storeItems(SixDirection.Down, 27)
```

- [ ] Fly bort til sida av omnen. Snu roboten til han ser omnen, og legg i
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

- [ ] Byrjar omnen å brenne? Han lyser når han er i gang.

- [ ] Kvifor snur roboten høgst 4 gonger?


# Steg 4: Hent trekol og lag fakler {.activity}

Omnen brukar omtrent 10 sekund på kvar stamme. Så hentar roboten trekolet frå
undersida.

## Sjekkliste {.check}

- [ ] Legg til nedst i `verksted`:

```javascript
    loops.pause(45000)
    agent.moveTo(pos(6, 0, 0))
    agent.takeItems(SixDirection.Up, 0, 64)
    agent.craft(Item.Torch, 16)
    agent.say("Fakler klare!")
```

## Test prosjektet {.flag}

__Trykk på `Kjør`.__ Hugs at roboten må ha stammar og brustein frå før.

- [ ] Får roboten 4 trekol?

- [ ] Kor mange fakler blir det av 4 trekol og 4 pinnar?

## Tips {.tip}

Fekk ikkje roboten noko trekol? Kanskje omnen ikkje var ferdig. Prøv ein
lengre pause, eller la roboten prøve igjen i ei løkke til `agent.takeItems`
svarar sann.


## Utfordring {.challenge}

- [ ] Byt ut `loops.pause` med ei løkke som prøver å hente trekol kvart femte
  sekund, til roboten har fått det.

- [ ] Lag ei kiste av plankar og set ho i verkstaden. La roboten leggje
  brusteinen i kista.
