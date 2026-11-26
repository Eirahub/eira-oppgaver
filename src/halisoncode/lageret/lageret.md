---
title: Lageret
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Etter en dag med hogging og graving er inventaret fullt av alt mulig. Nå skal
roboten lage ting av det den har, og rydde det inn i en kiste. Denne gangen
skriver du programmet i **JavaScript**. Du lærer om **plasser** i inventaret,
og om å sjekke om noe er mulig før du gjør det.

Du bør ha gjort oppgaven [Tømmerhuggeren](../tommerhuggeren/tommerhuggeren.html)
først.

<!-- BILDE: Roboten står foran en kiste og en arbeidsbenk, og kista er full av
planker og pinner. -->


# Steg 1: Over til JavaScript {.activity}

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt, og trykk på `JavaScript` øverst i editoren.

- [ ] Skriv dette, og trykk `Kjør`:

```javascript
agent.setItem(Item.OakLog, 16, 1)
agent.say("Jeg har " + agent.getItemCount(1) + " stammer")
```

- [ ] Sier roboten hvor mange stammer den har?

## Tips {.tip}

Trykk på `Blokker` øverst for å se programmet som blokker. Det er det samme
programmet. Alt du lærer her, kan også gjøres med blokker.


# Steg 2: Planker {.activity}

Én stamme blir fire planker. Roboten kan lage ting av det den har, akkurat som
deg.

## Sjekkliste {.check}

- [ ] Legg til denne linja:

```javascript
agent.craft(Item.OakPlanks, 4)
```

- [ ] Kjør, og høyreklikk på roboten. Har den fått planker?

- [ ] Vi vil lage planker av **alle** stammene. Bruk en `while`-løkke med
  `agent.canCraft`, som svarer `true` så lenge det går:

```javascript
while (agent.canCraft(Item.OakPlanks, 4)) {
    agent.craft(Item.OakPlanks, 4)
}
```

## Test prosjektet {.flag}

__Kjør programmet.__

- [ ] Hvor mange planker ble det av 16 stammer? Stemmer det med det du regnet
  ut?


# Steg 3: Arbeidsbenk og kiste {.activity}

Små oppskrifter klarer roboten alene. Store oppskrifter, som en kiste, trenger
en arbeidsbenk ved siden av roboten.

## Sjekkliste {.check}

- [ ] Prøv å lage en kiste rett fra plankene:

```javascript
agent.craft(Item.Chest, 1)
```

- [ ] Kjør. Fikk roboten laget kista? Nei, den trenger en arbeidsbenk ved
  siden av seg. Da vet du at oppskriften er stor.

- [ ] Sett ut arbeidsbenken først. I `Kreativ` kan du gi den rett i plass 27:

```javascript
agent.setItem(Item.CraftingTable, 1, 27)
agent.setSlot(27)
agent.place(SixDirection.Left)
agent.craft(Item.Chest, 1)
```

## Test prosjektet {.flag}

__Kjør programmet.__

- [ ] Står det en arbeidsbenk til venstre for roboten?

- [ ] Har roboten laget en kiste?


# Steg 4: Rydd i kista {.activity}

## Sjekkliste {.check}

- [ ] Sett kista foran roboten. Den ligger i en av plassene. Bruk
  `agent.setItem` i `Kreativ` for å være sikker på plassen:

```javascript
agent.setItem(Item.Chest, 1, 26)
agent.setSlot(26)
agent.place(SixDirection.Forward)
```

- [ ] Legg alt i kista, og sorter den:

```javascript
agent.storeItems(SixDirection.Forward, 0)
agent.sortContainer(SixDirection.Forward)
agent.say("Kista har " + agent.containerCount(SixDirection.Forward, Item.OakPlanks) + " planker")
```

## Test prosjektet {.flag}

__Kjør hele programmet, og åpne kista.__

- [ ] Ligger plankene i kista?

- [ ] Er roboten tom nå? Bruk `agent.freeSlots()` for å sjekke.


# Steg 5: En lagerrobot {.activity}

Sett det sammen til en funksjon du kan kjøre fra chatten.

## Sjekkliste {.check}

- [ ] Lag en funksjon `ryddLager()` som lager planker av alle stammer, lager
  pinner av noen av plankene, og legger alt i kista foran.

- [ ] Koble den til chatkommandoen `lager`:

```javascript
player.onChat("lager", function (num1, num2, num3) {
    ryddLager()
})
```

## Tips {.protip}

Kom tilbake fra jobb med `agent.goHome()`, og still roboten foran kista med
`agent.setHome()` når den står der. Da kan tømmerhuggeren og lagerroboten
jobbe sammen.


## Utfordring {.challenge}

- [ ] Gjør samme programmet i Python. Trykk på `Python` øverst og se hvordan
  navnene endrer seg.

- [ ] Lag to kister: én for planker og én for alt annet. Bruk
  `agent.storeItems` med riktig plass.

- [ ] Lag `jernhakke` når roboten har jern. Hva trenger den, og hvor lager den
  det?
