---
title: Former og fyrverkeri
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Å bygge en rund kule blokk for blokk er vanskelig. Roboten klarer det med én
blokk i programmet. I denne oppgaven bruker du kategorien `Former` til å lage en
kule, en ring og linjer, og setter dem sammen til et stort fyrverkeri. Til slutt
lar du **tilfeldige posisjoner** spre fargerike kuler på himmelen.

Du bør ha gjort oppgaven [Kom i gang](../kom_i_gang/kom_i_gang.html) først.

<!-- BILDE: En glasskule med en ring av fakler rundt, stråler av glødestein
oppover og fargerike ullkuler i lufta over. -->


# Før du starter {.activity}

## Sjekkliste {.check}

- [ ] Start Minecraft med Halison Code. Åpne en flat verden i `Kreativ` modus
  (Creative) med juksekoder på (Allow Commands: ON). Velg `Superflat` under
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

- Viser Minecraft pausemenyen når du kommer tilbake, trykk `Tilbake til spillet`
  (Back to Game). Roboten står stille så lenge spillet er på pause. Har du ikke
  skrevet `/gamerule halisoncode:pause_on_lost_focus false`, gjør det nå. Du kan
  også trykke `F3` + `P` i Minecraft.

- Er roboten borte eller langt unna, skriv `/robot spawn` igjen. Vil du stoppe
  et program, trykk stoppknappen i editoren eller skriv `/robot stop`.


# Steg 1: En glasskule {.activity}

`kule av` bygger en kule rundt et sentrum. Radius er hvor mange blokker det er
fra midten og ut til kanten.

## Sjekkliste {.check}

- [ ] Åpne kategorien `Former` og dra `kule av` inn i `ved start`.

- [ ] Velg `glass`. Sett sentrum til `~0 ~4 ~10` og radius til `4`.

- [ ] Velg `hul` til slutt. Da blir kula tom inni, som en boble.

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Står det en glasskule foran deg? Gå inn i den. Hvordan kommer du inn?

- [ ] Prøv `erstatt` i stedet for `hul` et annet sted. Hva er forskjellen?

## Tips {.tip}

`~0 ~4 ~10` er målt fra føttene dine: 4 blokker opp og 10 blokker mot sør.
Roboten bygger alt, så den må være innenfor 32 blokker fra hver del. Bli stående
nær roboten mens du jobber. Er den borte, skriv `/robot spawn`.


# Steg 2: En ring av fakler {.activity}

`sirkel av` lager en ring. `rundt y` betyr at ringen ligger flatt på bakken.

## Sjekkliste {.check}

- [ ] Dra `sirkel av` inn under kula.

- [ ] Velg `fakkel`. Sett sentrum til `~0 ~0 ~10`, radius til `6`, `rundt y` og
  `omriss`.

## Test prosjektet {.flag}

__Gå litt til siden og kjør programmet på nytt.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Ligger det en ring av fakler rundt kula?

- [ ] Prøv `rundt x` eller `rundt z`. Hvordan står ringen nå? Bytt fakkel med
  `steinmurstein` for å se det bedre.


# Steg 3: Stråler {.activity}

`linje av` lager en rett linje mellom to punkter. Den kan gå rett opp eller på
skrå.

## Sjekkliste {.check}

- [ ] Dra `linje av` inn under ringen. Velg `glødestein`, fra `~0 ~9 ~10` til
  `~0 ~20 ~10`. Det blir en lysende stråle rett opp fra toppen av kula.

- [ ] Lag en linje til fra `~0 ~9 ~10` til `~8 ~17 ~10`, og en tredje til `~-8
  ~17 ~10`. Nå går strålene på skrå ut til hver side.

## Test prosjektet {.flag}

__Kjør programmet på et nytt sted.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Ser du tre stråler som spruter ut fra kula?

- [ ] Lag to stråler til, mot `~0 ~17 ~2` og `~0 ~17 ~18`. Hvor havner de?


# Steg 4: Fyrverkeri med tilfeldige kuler {.activity}

Et fyrverkeri er aldri likt to ganger. `velg tilfeldig posisjon` gir et nytt
sted hver gang, et eller annet sted inni en boks.

## Sjekkliste {.check}

- [ ] Åpne `Løkker` og dra `gjenta 5 ganger` inn nederst i `ved start`.

- [ ] Inni løkka: `kule av` med `rød ull`, radius `2` og `erstatt`.

- [ ] Åpne `Posisjoner` og dra `velg tilfeldig posisjon` inn i sentrum. Sett den
  fra `~-8 ~14 ~2` til `~8 ~20 ~18`.

- [ ] Lag to kuler til i løkka på samme måte, med `gul ull` og `lyseblå ull`.

## Test prosjektet {.flag}

__Kjør programmet to ganger på to nye steder.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Hvor mange ullkuler er det på himmelen?

- [ ] Ligger kulene på samme sted begge gangene?

## Tips {.protip}

Vil du rydde, fyller du området med `luft`: `fyll med luft fra ~-10 ~0 ~0 til
~10 ~22 ~20`. Kjør det mens du står på samme sted som da du bygde.


# Programmet i JavaScript {.activity}

```javascript
shapes.sphere(Block.Glass, pos(0, 4, 10), 4, ShapeOperation.Hollow)
shapes.circle(Block.Torch, pos(0, 0, 10), 6, Axis.Y, ShapeOperation.Outline)
shapes.line(Block.Glowstone, pos(0, 9, 10), pos(0, 20, 10))
shapes.line(Block.Glowstone, pos(0, 9, 10), pos(8, 17, 10))
shapes.line(Block.Glowstone, pos(0, 9, 10), pos(-8, 17, 10))
for (let index = 0; index < 5; index++) {
    shapes.sphere(Block.RedWool, positions.random(pos(-8, 14, 2), pos(8, 20, 18)), 2, ShapeOperation.Replace)
    shapes.sphere(Block.YellowWool, positions.random(pos(-8, 14, 2), pos(8, 20, 18)), 2, ShapeOperation.Replace)
    shapes.sphere(Block.LightBlueWool, positions.random(pos(-8, 14, 2), pos(8, 20, 18)), 2, ShapeOperation.Replace)
}
```

## Utfordring {.challenge}

- [ ] Lag en chatkommando `fyr` som bygger fyrverkeriet der du står, så du kan
  fylle hele himmelen.

- [ ] Gi kulene tilfeldig størrelse. Finn blokken i `Matematikk` som velger et
  tilfeldig tall, og bruk den som radius.

- [ ] Bygg en snømann av tre kuler med `snøblokk`, eller en planet med en ring
  rundt.
