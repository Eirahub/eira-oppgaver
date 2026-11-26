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


# Steg 1: Hjemme {.activity}

Roboten kan huske ett sted som hjemmet sitt. Etterpå finner den veien tilbake
dit, også rundt hindringer.

## Sjekkliste {.check}

- [ ] Åpne en verden i `Kreativ` modus og skriv `/robot spawn` i chatten.

- [ ] Lag et nytt prosjekt i editoren. Dra `robot sett hjem` fra kategorien
  `Robot` inn i `ved start`.

- [ ] Under den: `robot flytt fremover med 5`, `robot snu venstre` og `robot
  flytt fremover med 5`.

- [ ] Til slutt: `robot gå hjem`.

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

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
