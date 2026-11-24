---
title: "Overlev første natt 2: Grav stein"
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

For å lage en ovn trenger roboten 8 brostein. Stein ligger litt under bakken.
Nå skal roboten grave en sjakt rett ned og telle hvor mye stein den finner.

<!-- BILDE: En smal sjakt ned i bakken, med stein i veggene -->

Fortsett i det samme prosjektet som i
[Hogg tre](../hogg_tre/hogg_tre.html).


# Steg 1: Hvor skal roboten grave? {.activity}

Velg et sted litt unna der hytta skal stå. Sjakten blir dyp, så ingen må gå
der etterpå.

## Sjekkliste {.check}

- [ ] Still deg der hytta skal stå. Stå stille mens programmet kjører.

- [ ] `pos(-6, 0, 0)` er et sted 6 blokker fra føttene dine. Send roboten dit:

```javascript
agent.moveTo(pos(-6, 0, 0))
```

## Tips {.tip}

Slå av `hoggTre`-løkka fra forrige oppgave mens du tester, så du slipper å
vente. Legg en `//` foran linjene, så blir de en kommentar.


# Steg 2: Grav ett lag {.activity}

I hvert lag graver roboten blokken foran seg og blokken under seg. Så flytter
den seg ett steg ned. Før den graver, ser den om blokken er stein, og teller
den.

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

- [ ] Graver roboten seg ned og kommer opp igjen?

- [ ] Hvor mange stein fant den? Hvor dypt måtte den grave?


# Steg 3: Tre grunner til å stoppe {.activity}

Løkka har tre betingelser med `&&` (og) mellom. Roboten graver bare så lenge
alle tre er sanne.

## Sjekkliste {.check}

- [ ] `stein < 10`: Hvorfor 10, når ovnen trenger 8?

- [ ] `dybde < 20`: Hva kunne skjedd uten denne?

- [ ] `agent.isSafe(SixDirection.Down)`: Den er usann hvis det er lava under
  roboten. Hvorfor er det lurt å sjekke før roboten graver?

## Brostein {.tip}

Når roboten graver stein, får den brostein. Roboten graver som om den hadde
en hakke. Andre steiner, som granitt og andesitt, telles ikke, for de gir
ikke brostein.


## Utfordring {.challenge}

- [ ] Sjakten er farlig å falle i. Få roboten til å tette den igjen med jorda
  den gravde opp.

- [ ] Grav en trapp nedover i stedet for en sjakt, så du kan gå ned selv
  senere.

- [ ] Tell kull også (`Block.CoalOre`). Finner roboten kull, trenger den ikke
  lage trekull.
