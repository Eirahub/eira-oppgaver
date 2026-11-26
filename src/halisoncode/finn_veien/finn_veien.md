---
title: Finn veien
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En god hjelper finner fram selv. I denne oppgaven lærer roboten å huske hvor
hjemmet er, gå til et sted du peker ut og komme seg gjennom en labyrint. Du
lærer om **posisjoner**, og om svar som er sanne eller usanne.

Du bør ha gjort oppgaven [Kom i gang](../kom_i_gang/kom_i_gang.html) først.

<!-- BILDE: Roboten står i utgangen av en labyrint av steinmursteiner og sier
"Jeg er ute!". -->


# Før du starter {.activity}

## Sjekkliste {.check}

- [ ] Start Minecraft med Halison Code. Åpne en flat verden i `Kreativ` modus
  (Creative) med juksekoder på (Allow Commands: ON). Velg `Superflat` under
  `Verdenstype` (World Type).

- [ ] Trykk `T` for å åpne chatten, skriv `/robot spawn` og trykk Enter.
  Roboten dukker opp ved føttene dine og ser samme vei som deg.

- [ ] Trykk `T` igjen, skriv `/halisoncode` og trykk Enter. Editoren åpnes i
  nettleseren. Trykk `Nytt prosjekt`.

## Slik bytter du mellom Minecraft og editoren {.tip}

- Du lager programmet i nettleseren og ser roboten i Minecraft. Bytt vindu med
  `Alt` + `Tab` (på Mac `Cmd` + `Tab`). Hold inne `Alt` og trykk `Tab` til
  Minecraft er valgt, og slipp.

- Trykk alltid på `Kjør` i editoren **før** du bytter til Minecraft. Programmet
  kjører fra nettleseren, så la editoren stå åpen.

- Viser Minecraft pausemenyen når du kommer tilbake, trykk `Tilbake til
  spillet` (Back to Game). Roboten står stille så lenge spillet er på pause.

- Er roboten borte eller langt unna, skriv `/robot spawn` igjen. Vil du stoppe
  et program, trykk stoppknappen i editoren eller skriv `/robot stop`.


# Steg 1: Hjemme {.activity}

Roboten kan huske ett sted som hjemmet sitt. Etterpå finner den veien tilbake
dit, også rundt hindringer.

## Sjekkliste {.check}

- [ ] Dra `robot sett hjem` fra kategorien
  `Robot` inn i `ved start`.

- [ ] Under den: `robot flytt fremover med 5`, `robot snu venstre` og `robot
  flytt fremover med 5`.

- [ ] Til slutt: `robot gå hjem`.

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Går roboten ut og kommer tilbake?

- [ ] Sett en vegg av blokker der roboten gikk, og kjør igjen. Hvilken vei går
  den nå?

## Tips {.tip}

`robot gå hjem` finner en vei selv. `robot flytt` går bare rett fram og stopper
hvis noe står i veien.


# Steg 2: Kom hit! {.activity}

Et sted i Minecraft har tre tall: **x**, **y** og **z**. Blokken `~0 ~0 ~0` fra
kategorien `Posisjoner` betyr der føttene dine er. `~0 ~0 ~3` er tre blokker mot
sør fra deg.

## Sjekkliste {.check}

- [ ] Dra `når chatkommando` fra kategorien `Spiller` ut på arbeidsflaten.
  Skriv `hit` i feltet.

- [ ] Legg `robot gå til` inn i den. Bruk posisjonen `~1 ~0 ~0`, så roboten
  stiller seg ved siden av deg og ikke oppå deg.

- [ ] Trykk `Kjør`. Programmet venter nå på chatten.

## Test prosjektet {.flag}

__Gå et stykke bort, trykk `T` og skriv `hit`.__

- [ ] Trykk `Kjør` i editoren først. Bytt så til Minecraft med `Alt` + `Tab`.

- [ ] Kommer roboten til deg?

- [ ] Gjem deg bak en vegg eller inni et hus med dør. Finner roboten deg?

## Tips {.protip}

`robot gå til` svarer **sann** når den kom fram, og **usann** når den ikke fant
noen vei. Legg den i en `hvis` fra `Logikk`, og la roboten si `Jeg finner deg
ikke` når svaret er usant.


# Steg 3: Labyrinten {.activity}

Nå skal roboten ut av en labyrint. Den holder venstre hånd på veggen, slik du
kan gjøre i en ekte labyrint.

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt. Dra `labyrint ved` fra kategorien `Former` inn i
  `ved start`.

- [ ] Velg hjørnet `~2 ~0 ~2`, bredde `15`, lengde `15`, vegger av
  `steinmurstein` og gulv av `eikeplanker`. Trykk på `+` og skriv `42` som
  frø.

- [ ] Trykk `Kjør`. En labyrint dukker opp ved siden av deg.

- [ ] Gå inn i åpningen på nordsiden av labyrinten, se inn i den, og skriv
  `/robot spawn`.

- [ ] Lag et nytt prosjekt med `robot følg sti av eikeplanker hold venstre` og
  `robot si Jeg er ute!` under.

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Kommer roboten ut på sørsiden?

- [ ] Bytt til `hold høyre`. Er veien lengre eller kortere?

## Tips {.tip}

`/robot camera follow` i chatten lar deg følge roboten fra lufta mens den går.
Skriv `/robot camera off` for å komme tilbake.


# Programmet i JavaScript {.activity}

Labyrinten og veien ut ser slik ut i JavaScript:

```javascript
shapes.maze(pos(2, 0, 2), 15, 15, Block.StoneBricks, Block.OakPlanks, 42)
```

```javascript
agent.followPath(Block.OakPlanks, TurnDirection.Left)
agent.say("Jeg er ute!")
```

## Utfordring {.challenge}

- [ ] Lag en chatkommando `hjem` som får roboten til å gå hjem, og en `sett`
  som flytter hjemmet til der roboten står.

- [ ] Lag en labyrint på 31 ganger 31. Roboten stopper etter 256 blokker. Bruk
  en løkke så den fortsetter til den er ute.

- [ ] Kapp med en venn: hvem kommer først gjennom labyrint 42, du eller
  roboten?
