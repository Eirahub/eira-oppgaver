---
title: "Overlev første natt 1: Hogg tre"
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Du starter i en helt ny verden i overlevelse. Før natta kommer, trenger du et
hus og fakler. Men det er én regel: __Du får ikke hogge, grave eller bygge
selv. Alt skal gjøres av roboten, med kode.__

Det er fire oppgaver:

1. Hogg tre (denne oppgaven)
2. [Grav stein](../grav_stein/grav_stein.html)
3. [Verksted: planker, arbeidsbord, ovn og trekull](../verksted/verksted.html)
4. [Hytte og fakler før natta](../hytte_for_natta/hytte_for_natta.html)

Bruk det samme prosjektet i alle fire. Da kan du bruke funksjonene fra den
forrige oppgaven i den neste.

I denne oppgaven får roboten til å finne eiketrær og hogge dem, til den har
24 stammer.

<!-- BILDE: Roboten svever ved siden av en eikestamme og hogger den -->

Du bør ha gjort [Kom i gang](../kom_i_gang/kom_i_gang.html) og
[Steinsti og trapp](../steinsti_og_trapp/steinsti_og_trapp.html) først.


# Steg 1: Gjør klar verdenen {.activity}

## Sjekkliste {.check}

- [ ] Lag en ny verden med spillmodus `Overlevelse`. Velg gjerne vanskelighet
  `Lett`. Det er fint om det er eiketrær i nærheten.

- [ ] Skriv `/robot spawn` i chatten. Roboten må ha et tomt inventar.
  Høyreklikk på den for å sjekke.

- [ ] Skriv `/codeling` og lag et nytt prosjekt. Gi det navnet `Overlev`.

## Hvorfor tomt inventar? {.tip}

Det første roboten hogger, havner i plass 1. Hvis plass 1 er tom og roboten
bare hogger eik, ligger alle stammene i plass 1. Da kan vi telle dem med
`robot antall i plass 1`.


# Steg 2: Finn det nærmeste treet {.activity}

Roboten kan lete etter en bestemt blokk rundt seg, høyst 32 blokker unna. Svaret
er en posisjon. `robot gå til` går dit. Er posisjonen en blokk roboten ikke kan
stå i, stopper den rett ved siden av og ser mot den.

## Sjekkliste {.check}

- [ ] Åpne fanen `JavaScript` og skriv:

```javascript
let stamme = agent.findNearest(Block.OakLog, 32)
agent.moveTo(stamme)
```

- [ ] Gå tilbake til `Blokker` og se hvordan det ser ut der. Du finner
  `robot finn nærmeste` i kategorien `Robot`.

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Går roboten bort til et eiketre og stiller seg foran stammen?


# Steg 3: Hogg hele stammen {.activity}

En stamme er flere blokker høy. Roboten svever, så den kan hogge en blokk, fly
ett steg opp og hogge igjen, så lenge det er noe foran den.

## Sjekkliste {.check}

- [ ] Legg til en `mens`-løkke etter `agent.moveTo`:

```javascript
while (agent.detect(AgentDetection.Block, SixDirection.Forward)) {
    agent.destroy(SixDirection.Forward)
    agent.move(SixDirection.Up, 1)
}
```

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Hogger roboten hele stammen?

- [ ] Hva skjer helt på toppen av treet, der det er løv?

- [ ] Høyreklikk på roboten. Hvor mange stammer ligger i plass 1?

## Tips {.tip}

`robot ødelegg` legger det som faller ut, rett i roboten. Løv gir av og til
spirer, pinner eller epler. De havner i andre plasser.


# Steg 4: En funksjon som hogger ett tre {.activity}

Nå skal roboten hogge mange trær. Da lønner det seg å lage en funksjon. Den
svarer `true` (sann) hvis den fant et tre, og `false` (usann) hvis ikke.

## Sjekkliste {.check}

- [ ] Gjør koden om til en funksjon:

```javascript
function hoggTre(): boolean {
    let stamme = agent.findNearest(Block.OakLog, 32)
    if (stamme == null) {
        agent.say("Jeg finner ingen eiketrær")
        return false
    }
    if (!agent.moveTo(stamme)) {
        agent.say("Jeg kommer ikke fram til treet")
        return false
    }
    while (agent.detect(AgentDetection.Block, SixDirection.Forward)) {
        agent.destroy(SixDirection.Forward)
        agent.move(SixDirection.Up, 1)
    }
    return true
}
```

- [ ] Hvorfor sjekker vi at `stamme` ikke er `null`, og at `agent.moveTo`
  svarer sann? Hva kunne skjedd hvis roboten hogget det som var foran den, uten
  å ha kommet fram til treet?


# Steg 5: Hogg til du har nok {.activity}

Hytta, arbeidsbordet, pinnene og trekullet trenger til sammen 24 stammer.
Roboten skal hogge til den har nok, men stoppe hvis den ikke finner flere
trær.

## Sjekkliste {.check}

- [ ] Legg dette under funksjonen:

```javascript
let fantTre = true
while (fantTre && agent.getItemCount(1) < 24) {
    fantTre = hoggTre()
}
agent.say("Jeg har " + agent.getItemCount(1) + " stammer")
```

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Hogger roboten tre etter tre til den har 24 stammer?

- [ ] Hvor lang tid tok det? Se på sola. Har dere god tid før kvelden?

## Lagre {.save}

Ikke slett koden. Du trenger `hoggTre` igjen i den siste oppgaven.


## Utfordring {.challenge}

- [ ] Hogg bjørk i stedet. Hva må du endre? Husk at stammene må havne i
  plass 1.

- [ ] La roboten fly ned til bakken igjen etter hvert tre. Tips: tell hvor
  mange ganger den flyttet seg opp.

- [ ] Plant en spire der treet stod, så skogen vokser igjen.
