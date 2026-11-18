---
title: Steinsti og trapp
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå skal roboten bygge! Først lager den en trapp opp i lufta, og så legger den en
sti av stein mens den går. Underveis lærer du å bruke en **løkke**, som gjentar
de samme blokkene mange ganger.

Du bør ha gjort oppgaven [Kom i gang](../kom_i_gang/kom_i_gang.html) først.

<!-- BILDE: En trapp av eikeplanker og en firkantet sti av brostein, bygget av
roboten. -->


# Steg 1: Gi roboten blokker {.activity}

Roboten bygger med blokkene den har i inventaret sitt. Den har 27 plasser,
akkurat som en kiste.

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt i editoren.

- [ ] Dra `robot gi eikeplanker antall 64 i plass 1` fra kategorien `Robot` inn
  i `ved start`.

- [ ] Kjør programmet. Høyreklikk på roboten i spillet for å se inventaret.
  Ligger det 64 eikeplanker i første plass?

## Tips {.tip}

`robot gi` virker bare i `Kreativ` modus. I overlevelse må roboten samle eller
få blokkene sine selv.


# Steg 2: Ett trappetrinn {.activity}

Et trappetrinn er tre kommandoer: Roboten flytter seg opp, så fremover, og
legger en blokk under seg.

## Sjekkliste {.check}

- [ ] Under `robot gi`, legg til `robot flytt opp med 1`.

- [ ] Så `robot flytt fremover med 1`.

- [ ] Så `robot plasser ned`.

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Ligger det en planke under roboten nå?


# Steg 3: Gjenta {.activity}

En trapp med ti trinn ville trengt 30 blokker. I stedet bruker vi en løkke.

## Sjekkliste {.check}

- [ ] Åpne kategorien `Løkker`. Dra `gjenta 4 ganger` inn under `robot gi`.

- [ ] Flytt de tre trappeblokkene inn i løkka.

- [ ] Endre `4` til `10`.

<!-- BILDE: robot gi eikeplanker 64 i plass 1, og gjenta 10 ganger med flytt opp
1, flytt fremover 1, plasser ned inni. -->

## Test prosjektet {.flag}

__Gå litt unna roboten, skriv `/robot spawn` og trykk `Kjør`.__

- [ ] Bygger roboten en trapp med ti trinn?

- [ ] Hvor mange ganger kjørte `robot plasser ned`? Hvor mange blokker står i
  løkka?


# Steg 4: En sti mens roboten går {.activity}

Roboten kan også legge en blokk bak seg for hvert steg den tar. Da blir det en
sti.

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt. Gi roboten `brostein antall 64 i plass 1`.

- [ ] Legg til `robot velg plass 1`, så roboten bygger med brosteinen.

- [ ] Legg til `robot hjelp plasser ved flytting på`.

- [ ] Legg til en `gjenta 4 ganger` med `robot flytt fremover med 3` og `robot
  snu venstre` inni.

- [ ] Etter løkka: `robot hjelp plasser ved flytting av`, så roboten slutter å
  bygge.

<!-- BILDE: Programmet for steinstien med gjenta 4 ganger. -->

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Lager roboten en firkantet sti av brostein?

- [ ] Hva skjer hvis du glemmer `robot hjelp ... av` til slutt og kjører et nytt
  program etterpå?


# Programmet i JavaScript {.activity}

Trappa ser slik ut i JavaScript. `for`-løkka er det samme som `gjenta`:

```javascript
agent.setItem(Block.OakPlanks, 64, 1)
for (let index = 0; index < 10; index++) {
    agent.move(SixDirection.Up, 1)
    agent.move(SixDirection.Forward, 1)
    agent.place(SixDirection.Down)
}
```

Editoren har også eksemplene `Trapp` og `Steinsti` på startsiden, under
`Eksempler`.

## Utfordring {.challenge}

- [ ] Lag en trapp som går ned i bakken i stedet for opp.

- [ ] Lag en sti formet som en spiral. Tips: bruk to løkker, eller endre hvor
  langt roboten går.

- [ ] Kan du bygge en trapp som snur seg, slik at den går rundt et tårn?
