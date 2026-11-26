---
title: Bygg et hus
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Et hus med vegger, tak, dør og vinduer tar lang tid å bygge blokk for blokk.
Roboten kan bygge et helt hus med noen få blokker i programmet. Til slutt lager
du en **funksjon med parametere**, så du kan skrive `hus 9 7` i chatten og få et
hus i akkurat den størrelsen du vil.

Du bør ha gjort oppgaven [Steinsti og
trapp](../steinsti_og_trapp/steinsti_og_trapp.html) først.

<!-- BILDE: Et lite hus av eikeplanker med glassvinduer og en åpning til dør,
bygget av roboten. -->


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


# Steg 1: En boks {.activity}

`fyll med` fra kategorien `Blokker` fyller en hel boks mellom to hjørner. Med
`hul` blir den tom inni, akkurat som et hus.

## Sjekkliste {.check}

- [ ] Dra `fyll med` inn i `ved start`.

- [ ] Velg `eikeplanker`. Sett det første hjørnet til `~1 ~-1 ~1` og det andre
  til `~7 ~3 ~7`. Velg `hul` til slutt.

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Står det en stor boks av planker ved siden av deg?

- [ ] Hvorfor er det første hjørnet på `~-1`? Hva skjer med gulvet om du bruker
  `~0`?

## Tips {.tip}

`~` betyr målt fra føttene dine. `~1 ~-1 ~1` er én blokk mot øst, én ned og én
mot sør. Roboten må være innenfor 32 blokker fra det den bygger.


# Steg 2: Dør {.activity}

Huset har ingen vei inn. Vi lager en åpning ved å fylle med **luft**.

## Sjekkliste {.check}

- [ ] Under den første `fyll med`, legg en ny `fyll med`.

- [ ] Velg `luft`, og hjørnene `~4 ~0 ~1` og `~4 ~1 ~1`. Det blir et hull som er
  én blokk bredt og to høyt.

## Test prosjektet {.flag}

__Riv det gamle huset med `/fill` eller bygg et nytt et annet sted, og kjør.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Kan du gå inn i huset?


# Steg 3: Vinduer og lys {.activity}

## Sjekkliste {.check}

- [ ] Legg til `plasser glass ved ~1 ~1 ~4` og `plasser glass ved ~7 ~1 ~4`.
  Det blir et vindu på hver side.

- [ ] Legg til `plasser fakkel ved ~4 ~0 ~4`, så det er lyst inne.

## Test prosjektet {.flag}

__Kjør programmet på et nytt sted.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Har huset vinduer og lys?

- [ ] Gå inn. Er det plass til en seng?


# Steg 4: Et hus i din størrelse {.activity}

Nå skal du kunne bestemme størrelsen fra chatten. Da trenger funksjonen
**parametere**: tall du gir den når du kjører den.

## Sjekkliste {.check}

- [ ] Åpne `Avansert` og `Funksjoner`. Lag en funksjon `byggHus`. Trykk på `Ny
  parameter`, velg `Tall`, og kall den `bredde`. Lag en til som heter `lengde`.

- [ ] Flytt alle blokkene inn i funksjonen.

- [ ] I den første `fyll med`, bytt ut `~7 ~3 ~7` med `~bredde ~3 ~lengde`. Dra
  parameterne fra funksjonen inn i feltene.

- [ ] Dra `når chatkommando` fra `Spiller`, og skriv `hus`. Legg `kjør byggHus`
  inn i den, med `num1` som bredde og `num2` som lengde.

- [ ] Trykk `Kjør` én gang.

## Test prosjektet {.flag}

__Skriv `hus 9 7` i chatten. Gå et annet sted og skriv `hus 5 12`.__

- [ ] Trykk `Kjør` i editoren først. Bytt så til Minecraft med `Alt` + `Tab`.

- [ ] Blir husene like store som du ba om?

- [ ] Hva skjer med vinduet på `~7 ~1 ~4` når huset er smalere enn 7? Kan du
  regne ut plasseringen fra `bredde` i stedet?

## Tips {.protip}

`num1`, `num2` og `num3` er de tre tallene du skriver etter ordet i chatten. Er
det bare ett tall, er de andre 0.


# Programmet i JavaScript {.activity}

```javascript
function byggHus(bredde: number, lengde: number) {
    blocks.fill(Block.OakPlanks, pos(1, -1, 1), pos(bredde, 3, lengde), FillOperation.Hollow)
    blocks.fill(Block.Air, pos(4, 0, 1), pos(4, 1, 1), FillOperation.Replace)
    blocks.place(Block.Glass, pos(1, 1, 4))
    blocks.place(Block.Glass, pos(bredde, 1, 4))
    blocks.place(Block.Torch, pos(4, 0, 4))
}
player.onChat("hus", function (num1, num2, num3) {
    byggHus(num1, num2)
})
```

## Utfordring {.challenge}

- [ ] Gi huset et skrått tak med `eiketrapp`, eller et flatt tak av en annen
  blokk.

- [ ] Plasser døra midt på veggen, uansett hvor bredt huset er.

- [ ] Bygg en hel landsby: et `gjenta`-løkke som setter fem hus på rad, med
  litt plass mellom.
