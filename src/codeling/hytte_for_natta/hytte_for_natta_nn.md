---
title: "Overlev første natta 4: Hytte og fakler"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

No har roboten plankar og fakler. Den siste jobben er å byggje ei lita hytte
rundt deg og setje opp fakler, inne og ute. Til slutt set du saman alle fire
oppgåvene til eitt program som køyrer frå morgon til kveld.

![Illustrasjon av ei lita hytte av plankar i solnedgang, vist i snitt. Ein
spelar står inne ved sida av ein fakkel, og det står fakler på bakken
utanfor.](hytte.png)

Hald fram i det same prosjektet som i
[Verkstad](../verksted/verksted_nn.html).


# Steg 1: Bygg hytta rundt deg {.activity}

`fyll med` fyller ein boks med blokker. Med `hul` blir det veggar, golv og tak
med luft inni. Posisjonane er målte frå føtene dine, så hytta blir bygd rundt
deg.

## Sjekkliste {.check}

- [ ] Lag funksjonen `byggHytte`:

```javascript
function byggHytte() {
    agent.moveTo(pos(3, 0, 3))
    blocks.fill(Block.OakPlanks, pos(-2, -1, -2), pos(1, 2, 1), FillOperation.Hollow)
}
```

- [ ] Hytta er 4 blokker kvar veg. Inni er det 2 gonger 2 gonger 2 blokker
  luft. Rekn ut kor mange plankar hytta treng. Tips: 4 · 4 · 4 minus lufta
  inni.

- [ ] Kvifor sender vi roboten til `pos(3, 0, 3)` før han byggjer?

## Test prosjektet {.flag}

__Still deg der hytta skal stå, og køyr `byggHytte()`.__

- [ ] Står du inne i ei lukka hytte?

- [ ] Hadde roboten nok plankar? Om ikkje, seier han frå over hovudet.


# Steg 2: Fakler inne og ute {.activity}

Monster kjem der det er mørkt. Ein fakkel inne gjer det lyst i hytta, og
fakler ute gjer det trygt rundt ho.

## Sjekkliste {.check}

- [ ] Lag funksjonen `settOppFakler`:

```javascript
function settOppFakler() {
    blocks.place(Block.Torch, pos(-1, 0, -1))
    blocks.place(Block.Torch, pos(2, 0, 0))
    blocks.place(Block.Torch, pos(-3, 0, -1))
    blocks.place(Block.Torch, pos(0, 0, 2))
    blocks.place(Block.Torch, pos(-1, 0, -3))
}
```

- [ ] Kva for ein av faklane står inne i hytta?

## Test prosjektet {.flag}

- [ ] Køyr `settOppFakler()`. Er det lyst både inne og ute?


# Steg 3: Heile planen før natta {.activity}

No set du saman alt. Eit døgn i Minecraft varer i 20 minutt. Dagen byrjar ved
tid 0, og ved tid 12000 går sola ned. Då må hytta vere ferdig.

## Sjekkliste {.check}

- [ ] Lag ei ny verd, spawn roboten og still deg der hytta skal stå.

- [ ] Set saman heile programmet nedst, under alle funksjonane:

```javascript
let fantTre = true
while (fantTre && agent.getItemCount(1) < 24) {
    fantTre = hoggTre()
}
agent.moveTo(pos(-6, 0, 0))
gravStein()
verksted()
byggHytte()
settOppFakler()
player.say("Hytta er ferdig. Klokka er " + gameplay.timeOfDay())
```

## Test prosjektet {.flag}

__Trykk på `Kjør`, og ikkje rør deg før hytta er bygd.__

- [ ] Rakk roboten alt før solnedgang (12000)?

- [ ] Kva del tok lengst tid?

- [ ] Overlevde du natta? Grav deg ut av hytta om morgonen.


## Utfordring {.challenge}

- [ ] Om klokka er over 10000 før verkstaden er ferdig, skal roboten byggje
  hytta med ein gong. Bruk `gameplay.timeOfDay()` og `if`.

- [ ] Gi hytta ei dør. Ei eikedør blir laga ved arbeidsbordet av 6 plankar.
  Hugs at hytta då treng færre plankar i veggen.

- [ ] Lag ei seng: roboten treng ull frå tre sauer og 3 plankar.
