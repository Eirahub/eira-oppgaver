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


# Før du starter {.activity}

## Sjekkliste {.check}

- [ ] Start Minecraft med Halison Code. Åpne en flat verden i `Kreativ` modus
  (Creative) med juksekoder på (Allow Commands: ON). Velg `Superflat` under
  `Verdenstype` (World Type).

- [ ] Trykk `T` for å åpne chatten, skriv `/robot spawn` og trykk Enter.
  Roboten dukker opp ved føttene dine og ser samme vei som deg.

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

- Viser Minecraft pausemenyen når du kommer tilbake, trykk `Tilbake til
  spillet` (Back to Game). Roboten står stille så lenge spillet er på pause.
  Har du ikke skrevet `/gamerule halisoncode:pause_on_lost_focus false`, gjør
  det nå. Du kan også trykke `F3` + `P` i Minecraft.

- Er roboten borte eller langt unna, skriv `/robot spawn` igjen. Vil du stoppe
  et program, trykk stoppknappen i editoren eller skriv `/robot stop`.


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

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Ligger det en planke under roboten nå?


# Steg 3: Gjenta {.activity}

En trapp med ti trinn ville trengt 30 blokker. I stedet bruker vi en løkke.

## Sjekkliste {.check}

- [ ] Åpne kategorien `Løkker`. Dra `gjenta 4 ganger` inn under `robot gi`.

- [ ] Flytt de tre trappeblokkene inn i løkka.

- [ ] Endre `4` til `10`.

![Programmet for trappa: gi eikeplanker, gjenta 10 ganger med flytt opp,
flytt fremover og plasser ned](program_trapp.png)

## Test prosjektet {.flag}

__Gå litt unna roboten, skriv `/robot spawn` og trykk `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Bygger roboten en trapp med ti trinn?

- [ ] Hvor mange ganger kjørte `robot plasser ned`? Hvor mange blokker står i
  løkka?


# Steg 4: En sti mens roboten går {.activity}

Roboten kan også legge en blokk bak seg for hvert steg den tar. Da blir det en
sti.

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt. Gi roboten `brostein antall 64 i plass 1`.

- [ ] Legg til `robot velg plass 1`, så roboten bygger med brosteinen.

- [ ] Legg til `robot hjelp plasser ved flytting sann`.

- [ ] Legg til en `gjenta 4 ganger` med `robot flytt fremover med 3` og `robot
  snu venstre` inni.

- [ ] Etter løkka: `robot hjelp plasser ved flytting usann`, så roboten slutter
  å bygge.

![Programmet for steinstien: gjenta 4 ganger med flytt fremover 3 og snu
venstre](program_sti.png)

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

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
