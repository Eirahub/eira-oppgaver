---
title: "Overlev første natta 2: Grav stein"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

For å lage ein omn treng roboten 8 brustein. Stein ligg litt under bakken. No
skal roboten grave ein sjakt rett ned og telje kor mykje stein han finn.

![Illustrasjon av ein sjakt ned gjennom gras, jord og stein. Roboten er
nedst i sjakten, og steinblokkene han har grave, er nummererte frå 1 til
5.](sjakt.png)

Hald fram i det same prosjektet som i
[Hogg tre](../hogg_tre/hogg_tre_nn.html).


# Steg 1: Kvar skal roboten grave? {.activity}

Vel ein stad litt unna der hytta skal stå. Sjakten blir djup, så ingen må gå
der etterpå.

## Sjekkliste {.check}

- [ ] Still deg der hytta skal stå. Stå stille medan programmet køyrer.

- [ ] `pos(-6, 0, 0)` er ein stad 6 blokker frå føtene dine. Send roboten
  dit:

```javascript
agent.moveTo(pos(-6, 0, 0))
```

## Tips {.tip}

Slå av `hoggTre`-løkka frå førre oppgåve medan du testar, så slepp du å
vente. Legg `//` framfor linjene, så blir dei ein kommentar.


# Steg 2: Grav eitt lag {.activity}

I kvart lag grev roboten blokka framfor seg og blokka under seg. Så flyttar
han seg eitt steg ned. Før han grev, ser han om blokka er stein, og tel ho.

## Sjekkliste {.check}

- [ ] Lag funksjonen `gravStein`:

```javascript
function gravStein() {
    let stein = 0
    let dybde = 0
    while (stein < 10 && dybde < 20 && agent.isSafe(SixDirection.Down)) {
        if (agent.inspect(AgentInspection.Block, SixDirection.Forward) == Block.Stone) {
            stein += 1
        }
        agent.destroy(SixDirection.Forward)
        if (agent.inspect(AgentInspection.Block, SixDirection.Down) == Block.Stone) {
            stein += 1
        }
        agent.destroy(SixDirection.Down)
        agent.move(SixDirection.Down, 1)
        dybde += 1
    }
    agent.move(SixDirection.Up, dybde)
    agent.say("Jeg fant " + stein + " stein")
}
```

- [ ] Kall funksjonen etter `agent.moveTo`:

```javascript
gravStein()
```

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Grev roboten seg ned og kjem opp igjen?

- [ ] Kor mange stein fann han? Kor djupt måtte han grave?


# Steg 3: Tre grunnar til å stoppe {.activity}

Løkka har tre vilkår med `&&` (og) mellom. Roboten grev berre så lenge alle
tre er sanne.

## Sjekkliste {.check}

- [ ] `stein < 10`: Kvifor 10, når omnen treng 8?

- [ ] `dybde < 20`: Kva kunne skjedd utan denne?

- [ ] `agent.isSafe(SixDirection.Down)`: Han er usann om det er lava under
  roboten. Kvifor er det lurt å sjekke før roboten grev?

## Brustein {.tip}

Når roboten grev stein, får han brustein. Roboten grev som om han hadde ei
hakke. Andre steinar, som granitt og andesitt, blir ikkje talde, for dei gir
ikkje brustein.


## Utfordring {.challenge}

- [ ] Sjakten er farleg å falle i. Få roboten til å tette han igjen med jorda
  han grov opp.

- [ ] Grav ei trapp nedover i staden for ein sjakt, så du kan gå ned sjølv
  seinare.

- [ ] Tel kol òg (`Block.CoalOre`). Finn roboten kol, treng han ikkje lage
  trekol.
