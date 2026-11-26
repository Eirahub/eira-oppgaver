---
title: Tømmerhuggeren
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Å hogge trær er noe av det første du gjør i Minecraft, og noe av det kjedeligste
etter en stund. Nå skal roboten gjøre det for deg. Den hogger hele stammen,
kommer ned igjen og planter et nytt tre. Du lærer **mens-løkker**, som gjentar
så lenge noe er sant, og hvordan du lager din egen **funksjon**.

Du bør ha gjort oppgaven [Speideren](../speideren/speideren.html) først.

<!-- BILDE: Roboten står ved en stubbe der et eiketre stod, og en ny
eikestikling er plantet. -->


# Før du starter {.activity}

## Sjekkliste {.check}

- [ ] Start Minecraft med Halison Code. Åpne en vanlig verden i `Kreativ`
  modus (Creative) med juksekoder på (Allow Commands: ON). Den må ha trær og
  fjell, så ikke velg `Superflat`.

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


# Steg 1: Én blokk {.activity}

Still deg foran et tre, så stammen er rett foran deg.

## Sjekkliste {.check}

- [ ] Skriv `/robot spawn`. Roboten står ved føttene dine og ser mot treet.

- [ ] Lag et nytt prosjekt med `robot ødelegg fremover` i `ved start`.

- [ ] Trykk `Kjør`. Den nederste stammeblokken forsvinner.

- [ ] Høyreklikk på roboten. Ligger stammen i inventaret dens?

## Tips {.tip}

Det roboten ødelegger, havner rett i inventaret. Den trenger ikke plukke det
opp.


# Steg 2: Hele stammen {.activity}

Hvor høyt er treet? Det vet vi ikke. Derfor bruker vi en løkke som gjentar så
lenge det er en blokk foran roboten.

## Sjekkliste {.check}

- [ ] Fra `Løkker`, dra `mens` inn i `ved start`, før `robot ødelegg`.

- [ ] Sett betingelsen til `robot oppdag blokk fremover`.

- [ ] Flytt `robot ødelegg fremover` inn i løkka, og legg til `robot flytt opp
  med 1` under den.

## Test prosjektet {.flag}

__Plant deg foran et nytt tre, skriv `/robot spawn` og trykk `Kjør`.__

- [ ] Bytt til Minecraft med `Alt` + `Tab` og se på roboten.

- [ ] Hogger roboten hele stammen?

- [ ] Hvor stopper den? Hvorfor?

## Tips {.protip}

Løkka stopper når det er luft foran roboten. Toppen av treet har løv, og
roboten hogger løvet også. Det er greit, for løv kan gi stiklinger og epler.


# Steg 3: Ned igjen {.activity}

Nå henger roboten oppe i lufta. Den skal ned til bakken.

## Sjekkliste {.check}

- [ ] Under den første løkka, legg en ny `mens`. Betingelsen er `ikke robot
  oppdag blokk ned`. `ikke` finner du i `Logikk`.

- [ ] Inni den: `robot flytt ned med 1`.

- [ ] Etter løkka: `robot samle alt`, så roboten plukker opp stiklinger som
  ligger ved siden av.

## Test prosjektet {.flag}

__Prøv på et nytt tre.__

- [ ] Kommer roboten ned til bakken igjen?


# Steg 4: Plant et nytt tre {.activity}

En god tømmerhugger planter nytt. Da kan roboten hogge på samme sted senere.

## Sjekkliste {.check}

- [ ] Legg til `robot gi eikestikling antall 1 i plass 27`. I `Kreativ` får
  roboten en stikling, i overlevelse må den ha en fra løvet.

- [ ] `robot velg plass 27`.

- [ ] `robot plasser fremover`. Stiklingen havner der stammen stod.

- [ ] Til slutt `robot velg plass 1`, så den bygger med vanlige blokker
  igjen.


# Steg 5: En funksjon {.activity}

Programmet ditt er nå langt. Vi gir det et navn, så kan vi bruke det igjen.

## Sjekkliste {.check}

- [ ] Åpne `Avansert` og `Funksjoner`. Trykk `Lag en funksjon ...` og kall den
  `hoggTre`.

- [ ] Flytt alle blokkene fra `ved start` inn i `funksjon hoggTre`.

- [ ] Dra `når chatkommando` fra `Spiller` ut, og skriv `hogg`. Legg `kjør
  hoggTre` inn i den.

- [ ] Trykk `Kjør` én gang.

## Test prosjektet {.flag}

__Gå til et tre, skriv `/robot spawn` og så `hogg` i chatten.__

- [ ] Trykk `Kjør` i editoren først. Bytt så til Minecraft med `Alt` + `Tab`.

- [ ] Hogger roboten treet?

- [ ] Gå til et nytt tre og gjør det igjen. Hvor mange trær klarer du på to
  minutter?


# Programmet i JavaScript {.activity}

```javascript
function hoggTre() {
    while (agent.detect(AgentDetection.Block, SixDirection.Forward)) {
        agent.destroy(SixDirection.Forward)
        agent.move(SixDirection.Up, 1)
    }
    while (!(agent.detect(AgentDetection.Block, SixDirection.Down))) {
        agent.move(SixDirection.Down, 1)
    }
    agent.collectAll()
    agent.setItem(Item.OakSapling, 1, 27)
    agent.setSlot(27)
    agent.place(SixDirection.Forward)
    agent.setSlot(1)
}
player.onChat("hogg", function (num1, num2, num3) {
    hoggTre()
})
```

## Utfordring {.challenge}

- [ ] Lag en variabel `blokker` som teller hvor mange blokker roboten hogger.
  La roboten si tallet til slutt.

- [ ] Bruk `robot finn nærmeste stammer innen 16` og `robot gå til`, så roboten
  finner treet selv. Oppgaven [Skogsroboten](../skogsroboten/skogsroboten.html)
  viser hvordan.

- [ ] Lag en treplantasje: en rad med stiklinger som roboten hogger en etter
  en når de har vokst.
