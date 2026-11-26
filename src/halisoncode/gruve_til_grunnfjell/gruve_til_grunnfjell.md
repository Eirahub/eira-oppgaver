---
title: Gruve til grunnfjell
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Diamanter ligger dypt nede, nesten helt ved grunnfjellet i bunnen av verden. Å
grave dit tar lang tid, og det kan være farlig. Derfor sender vi roboten. Den
graver en sjakt rett ned, passer seg for lava, setter lys i veggen og kommer
opp igjen. Du lærer å bruke **hvis** inni en **løkke**, og en **teller** som
husker hvor dypt roboten har gått.

Du bør ha gjort oppgaven [Tømmerhuggeren](../tommerhuggeren/tommerhuggeren.html)
først.

<!-- BILDE: En smal sjakt rett ned i bakken, med glødestein i veggen og roboten
helt nederst på grunnfjellet. -->


# Før du starter {.activity}

## Sjekkliste {.check}

- [ ] Start Minecraft med Halison Code. Åpne en vanlig verden i `Kreativ`
  modus (Creative) med juksekoder på (Allow Commands: ON). Den må ha trær og
  fjell, så ikke velg `Superflat`.

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


# Steg 1: Grav ett steg {.activity}

Roboten graver ned ved å knuse blokken under seg og så flytte ned.

## Sjekkliste {.check}

- [ ] Gå til et sted med gress eller stein. Ikke ved vann.

- [ ] Skriv `/robot spawn`. Lag et nytt prosjekt.

- [ ] Legg til `robot ødelegg ned` og `robot flytt ned med 1` i `ved start`.

## Test prosjektet {.flag}

__Trykk på `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Har roboten gravd ett hull og gått ned i det?

## Pass på {.protip}

Ikke hopp ned i sjakta! Den er bare én blokk bred, og du kommer ikke opp igjen
uten å grave deg ut. La roboten gjøre jobben.


# Steg 2: Helt til bunns {.activity}

Grunnfjell kan ikke knuses, ikke engang av roboten. Når roboten har prøvd å
knuse blokken under seg, og det fortsatt er en blokk der, har den kommet til
bunnen.

## Sjekkliste {.check}

- [ ] Vi vil stoppe på bunnen, så `gjenta for alltid` passer ikke. Dra `mens`
  fra `Løkker` inn i `ved start`.

- [ ] Fra `Variabler`, lag en variabel `dybde`. Legg `sett dybde til 0` før
  løkka.

- [ ] Inni løkka: `robot ødelegg ned`.

- [ ] Så en `hvis ... ellers` med betingelsen `robot oppdag blokk ned`.

- [ ] Inni `hvis`: `robot si Grunnfjell!`. Roboten har nådd bunnen.

- [ ] Inni `ellers`: `robot flytt ned med 1` og `endre dybde med 1`.

- [ ] Løkka trenger en betingelse som blir usann på bunnen. Lag en variabel
  `graver`, sett den til `sann` før løkka, og bruk `graver` som betingelse i
  `mens`. Inni `hvis` setter du `graver` til `usann`.

## Test prosjektet {.flag}

__Trykk på `Kjør` og se gjennom `/robot camera follow`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Stopper roboten på grunnfjellet?

- [ ] Hvor stor ble `dybde`? Legg til `robot si dybde` etter løkka for å se.

## Tips {.tip}

Grunnfjellet ligger på y = -64 i nye verdener. Har du startet på y = 70, går
roboten over 130 blokker ned.


# Steg 3: Pass deg for lava {.activity}

Dypt nede er det lava. Roboten skal stoppe og si fra før den graver inn i den.

## Sjekkliste {.check}

- [ ] Øverst i løkka, før `robot ødelegg ned`, legg en ny `hvis`.

- [ ] Betingelsen: `robot oppdag væske ned` `=` `lava`.

- [ ] Inni: `robot si Lava! Jeg stopper.` og `sett graver til usann`.

- [ ] Den gamle `robot ødelegg ned` og resten skal bare kjøre når det ikke er
  lava. Bruk `ellers` i den nye `hvis`, og flytt dem dit.

## Test prosjektet {.flag}

__Lag en dam av lava i `Kreativ`, sett roboten over den og kjør.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Stopper roboten før lavaen?


# Steg 4: Lys i veggen {.activity}

En mørk sjakt er farlig. Roboten skal sette inn en glødestein i veggen når det
blir mørkt. Glødestein lyser og trenger ingenting å henge på.

## Sjekkliste {.check}

- [ ] Gi roboten glødestein: `robot gi glødestein antall 64 i plass 2`, før
  løkka.

- [ ] I `ellers`-delen, etter `robot flytt ned med 1`, legg en `hvis` med
  `robot lysnivå < 8`.

- [ ] Inni: `robot ødelegg fremover`, `robot velg plass 2`, `robot plasser
  fremover` og `robot velg plass 1`.

## Test prosjektet {.flag}

__Grav en ny sjakt.__

- [ ] Lyser det i veggen nedover?


# Steg 5: Opp igjen {.activity}

Roboten husker hvor dypt den gikk, i `dybde`. Nå bruker vi tallet for å komme
opp.

## Sjekkliste {.check}

- [ ] Etter løkka: `gjenta dybde ganger` med `robot flytt opp med 1` inni.

- [ ] Til slutt `robot si Ferdig!`.

## Tips {.protip}

Hvorfor ikke `robot flytt opp med dybde`? Fordi en flytting er høyst 64
blokker. Sjakta er dypere enn det.


# Programmet i JavaScript {.activity}

```javascript
agent.setItem(Item.Glowstone, 64, 2)
let dybde = 0
let graver = true
while (graver) {
    if (agent.detectLiquid(SixDirection.Down) == Liquid.Lava) {
        agent.say("Lava! Jeg stopper.")
        graver = false
    } else {
        agent.destroy(SixDirection.Down)
        if (agent.detect(AgentDetection.Block, SixDirection.Down)) {
            agent.say("Grunnfjell!")
            graver = false
        } else {
            agent.move(SixDirection.Down, 1)
            dybde += 1
            if (agent.lightLevel() < 8) {
                agent.destroy(SixDirection.Forward)
                agent.setSlot(2)
                agent.place(SixDirection.Forward)
                agent.setSlot(1)
            }
        }
    }
}
for (let i = 0; i < dybde; i++) {
    agent.move(SixDirection.Up, 1)
}
agent.say("Ferdig!")
```

## Utfordring {.challenge}

- [ ] Sjekk at det virkelig er grunnfjell: `robot undersøk blokk ned` skal være
  lik blokken `grunnfjell`.

- [ ] Lag en **trappegruve** i stedet, slik at du kan gå ned selv. Tips: grav
  ned og fremover annenhver gang, som i oppgaven Steinsti og trapp.

- [ ] Grav en gang bortover på y = -58, der diamantene er vanligst. Bruk `når
  diamantmalm blir ødelagt` fra `Blokker` for å feire når du selv finner en.
