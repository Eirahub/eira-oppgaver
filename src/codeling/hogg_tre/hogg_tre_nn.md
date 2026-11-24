---
title: "Overlev første natta 1: Hogg tre"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

Du startar i ei heilt ny verd i overleving. Før natta kjem, treng du eit hus
og fakler. Men det er éin regel: __Du får ikkje hogge, grave eller byggje
sjølv. Alt skal gjerast av roboten, med kode.__

Det er fire oppgåver:

1. Hogg tre (denne oppgåva)
2. [Grav stein](../grav_stein/grav_stein_nn.html)
3. [Verkstad: plankar, arbeidsbord, omn og trekol](../verksted/verksted_nn.html)
4. [Hytte og fakler før natta](../hytte_for_natta/hytte_for_natta_nn.html)

Bruk det same prosjektet i alle fire. Då kan du bruke funksjonane frå den
førre oppgåva i den neste.

I denne oppgåva får du roboten til å finne eiketre og hogge dei, til han har
24 stammar.

![Illustrasjon av roboten som svevar ved sida av ein eikestamme. Dei to
nedste blokkene i stammen er hogne, og ei pil viser at roboten flyg
oppover.](hogg_tre.png)

Du bør ha gjort [Kom i gang](../kom_i_gang/kom_i_gang.html) og
[Steinsti og trapp](../steinsti_og_trapp/steinsti_og_trapp.html) først.


# Steg 1: Gjer klar verda {.activity}

## Sjekkliste {.check}

- [ ] Lag ei ny verd med spelmodus `Overlevelse`. Vel gjerne vanskegrad
  `Lett`. Det er fint om det er eiketre i nærleiken.

- [ ] Skriv `/robot spawn` i chatten. Roboten må ha eit tomt inventar.
  Høgreklikk på han for å sjekke.

- [ ] Skriv `/codeling` og lag eit nytt prosjekt. Gi det namnet `Overlev`.

## Kvifor tomt inventar? {.tip}

Det første roboten hogg, hamnar i plass 1. Om plass 1 er tom og roboten berre
hogg eik, ligg alle stammane i plass 1. Då kan vi telje dei med
`robot antall i plass 1`.


# Steg 2: Finn det næraste treet {.activity}

Roboten kan leite etter ei bestemd blokk rundt seg, høgst 32 blokker unna.
Svaret er ein posisjon. `robot gå til` går dit. Er posisjonen ei blokk
roboten ikkje kan stå i, stoppar han rett ved sida av og ser mot ho.

## Sjekkliste {.check}

- [ ] Opne fana `JavaScript` og skriv:

```javascript
let stamme = agent.findNearest(Block.OakLog, 32)
agent.moveTo(stamme)
```

- [ ] Gå tilbake til `Blokker` og sjå korleis det ser ut der. Du finn
  `robot finn nærmeste` i kategorien `Robot`.

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Går roboten bort til eit eiketre og stiller seg framfor stammen?


# Steg 3: Hogg heile stammen {.activity}

Ein stamme er fleire blokker høg. Roboten svevar, så han kan hogge ei blokk,
fly eitt steg opp og hogge igjen, så lenge det er noko framfor han.

## Sjekkliste {.check}

- [ ] Legg til ei `mens`-løkke etter `agent.moveTo`:

```javascript
while (agent.detect(AgentDetection.Block, SixDirection.Forward)) {
    agent.destroy(SixDirection.Forward)
    agent.move(SixDirection.Up, 1)
}
```

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Hogg roboten heile stammen?

- [ ] Kva skjer heilt på toppen av treet, der det er lauv?

- [ ] Høgreklikk på roboten. Kor mange stammar ligg i plass 1?

## Tips {.tip}

`robot ødelegg` legg det som fell ut, rett i roboten. Lauv gir av og til
spirer, pinnar eller eple. Dei hamnar i andre plassar.


# Steg 4: Ein funksjon som hogg eitt tre {.activity}

No skal roboten hogge mange tre. Då lønner det seg å lage ein funksjon. Han
svarar `true` (sann) om han fann eit tre, og `false` (usann) om ikkje.

## Sjekkliste {.check}

- [ ] Gjer koden om til ein funksjon:

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

- [ ] Kvifor sjekkar vi at `stamme` ikkje er `null`, og at `agent.moveTo`
  svarar sann? Kva kunne skjedd om roboten hogg det som var framfor han, utan
  å ha kome fram til treet?


# Steg 5: Hogg til du har nok {.activity}

Hytta, arbeidsbordet, pinnane og trekolet treng til saman 24 stammar. Roboten
skal hogge til han har nok, men stoppe om han ikkje finn fleire tre.

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

- [ ] Hogg roboten tre etter tre til han har 24 stammar?

- [ ] Kor lang tid tok det? Sjå på sola. Har de god tid før kvelden?

## Lagre {.save}

Ikkje slett koden. Du treng `hoggTre` igjen i den siste oppgåva.


## Utfordring {.challenge}

- [ ] Hogg bjørk i staden. Kva må du endre? Hugs at stammane må hamne i
  plass 1.

- [ ] La roboten fly ned til bakken igjen etter kvart tre. Tips: tel kor
  mange gonger han flytta seg opp.

- [ ] Plant ei spire der treet stod, så skogen veks igjen.
