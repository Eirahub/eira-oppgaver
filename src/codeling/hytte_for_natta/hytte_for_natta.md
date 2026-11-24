---
title: "Overlev første natt 4: Hytte og fakler"
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå har roboten planker og fakler. Den siste jobben er å bygge en liten hytte
rundt deg og sette opp fakler, inne og ute. Til slutt setter du sammen alle
fire oppgavene til ett program som kjører fra morgen til kveld.

<!-- BILDE: En liten hytte av eikeplanker med en fakkel utenfor, i solnedgang
-->

Fortsett i det samme prosjektet som i [Verksted](../verksted/verksted.html).


# Steg 1: Bygg hytta rundt deg {.activity}

`fyll med` fyller en boks med blokker. Med `hul` blir det vegger, gulv og tak
med luft inni. Posisjonene er målt fra føttene dine, så hytta blir bygget
rundt deg.

## Sjekkliste {.check}

- [ ] Lag funksjonen `byggHytte`:

```javascript
function byggHytte() {
    agent.moveTo(pos(3, 0, 3))
    blocks.fill(Block.OakPlanks, pos(-2, -1, -2), pos(1, 2, 1), FillOperation.Hollow)
}
```

- [ ] Hytta er 4 blokker hver vei. Inni er det 2 ganger 2 ganger 2 blokker
  luft. Regn ut hvor mange planker hytta trenger. Tips: 4 · 4 · 4 minus
  luften inni.

- [ ] Hvorfor sender vi roboten til `pos(3, 0, 3)` før den bygger?

## Test prosjektet {.flag}

__Still deg der hytta skal stå, og kjør `byggHytte()`.__

- [ ] Står du inne i en lukket hytte?

- [ ] Hadde roboten nok planker? Hvis ikke, sier den fra over hodet.


# Steg 2: Fakler inne og ute {.activity}

Monstre kommer der det er mørkt. En fakkel inne gjør det lyst i hytta, og
fakler ute gjør det trygt rundt den.

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

- [ ] Hvilken av faklene står inne i hytta?

## Test prosjektet {.flag}

- [ ] Kjør `settOppFakler()`. Er det lyst både inne og ute?


# Steg 3: Hele planen før natta {.activity}

Nå setter du sammen alt. Et døgn i Minecraft varer i 20 minutter. Dagen
begynner ved tid 0, og ved tid 12000 går sola ned. Da må hytta være ferdig.

## Sjekkliste {.check}

- [ ] Lag en ny verden, spawn roboten og still deg der hytta skal stå.

- [ ] Sett sammen hele programmet nederst, under alle funksjonene:

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

__Trykk på `Kjør`, og ikke rør deg før hytta er bygget.__

- [ ] Rakk roboten alt før solnedgang (12000)?

- [ ] Hvilken del tok lengst tid?

- [ ] Overlevde du natta? Grav deg ut av hytta om morgenen.


## Utfordring {.challenge}

- [ ] Hvis klokka er over 10000 før verkstedet er ferdig, skal roboten bygge
  hytta med en gang. Bruk `gameplay.timeOfDay()` og `if`.

- [ ] Gi hytta en dør. En eikedør lages ved arbeidsbordet av 6 planker. Husk
  at hytta da trenger færre planker i veggen.

- [ ] Lag en seng: roboten trenger ull fra tre sauer og 3 planker.
