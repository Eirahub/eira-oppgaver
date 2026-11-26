---
title: Lageret
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Etter en dag med hogging og graving er inventaret fullt av alt mulig. Nå skal
roboten lage ting av det den har, og rydde det inn i en kiste. Denne gangen
skriver du programmet i **JavaScript**. Du lærer om **plasser** i inventaret, og
om å sjekke om noe er mulig før du gjør det.

Du bør ha gjort oppgaven [Tømmerhuggeren](../tommerhuggeren/tommerhuggeren.html)
først.

<!-- BILDE: Roboten står foran en kiste og en arbeidsbenk, og kista er full av
planker og pinner. -->


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

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

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

- [ ] Kjør. Fikk roboten laget kista? Nei, den trenger en arbeidsbenk ved siden
  av seg. Da vet du at oppskriften er stor.

- [ ] Sett ut arbeidsbenken først. I `Kreativ` kan du gi den rett i plass 27:

```javascript
agent.setItem(Item.CraftingTable, 1, 27)
agent.setSlot(27)
agent.place(SixDirection.Left)
agent.craft(Item.Chest, 1)
```

## Test prosjektet {.flag}

__Kjør programmet.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

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

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

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
`agent.setHome()` når den står der. Da kan tømmerhuggeren og lagerroboten jobbe
sammen.

## Utfordring {.challenge}

- [ ] Gjør samme programmet i Python. Trykk på `Python` øverst og se hvordan
  navnene endrer seg.

- [ ] Lag to kister: én for planker og én for alt annet. Bruk `agent.storeItems`
  med riktig plass.

- [ ] Lag `jernhakke` når roboten har jern. Hva trenger den, og hvor lager den
  det?
