---
title: "Lærerveiledning - Utfordring: Fort før natta"
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

En åpen utfordring i overlevelse, og en fortsettelse av Hus før natta. Elevene
bygger en mur rundt huset, med port og lys. Roboten bygger ett lag hver morgen
med `gameplay.onDayStart`, og bruker `gameplay.timeOfDay` til å stoppe før
kvelden. Elevene lærer at et program kan reagere på hendelser i spillet, og at
de må lagre posisjoner som nøyaktige steder når de skal brukes senere.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Problemløsning, delproblemer, hendelser, tid, posisjoner

__Nivå__: 4

__Tidsbruk__: To til tre timer, gjerne i par.

## Kompetansemål {.challenge}

- [ ] __Programmering, 8.-10. trinn__: analysere problemer, gjøre dem om til
  delproblemer og gjøre rede for hvordan noen av delproblemene kan løses med
  programmering

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan bruke en hendelse til å starte kode av seg selv.

- [ ] Elevene kan bruke en variabel til å huske hvor langt programmet har kommet
  mellom hver gang det kjører.

- [ ] Elevene kan regne ut hvor mange blokker et bygg trenger.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å bygge muren lag for lag med en
  chatkommando.

- [ ] Eleven oppnår høy måloppnåelse ved å la roboten bygge ett lag hver morgen
  av seg selv, stoppe før kvelden og forklare hvordan programmet husker hvor
  muren skal stå.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Hus før natta og Byggeren.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Planlegging {.check}

- [ ] Et døgn i Minecraft er 20 minutter. Tre lag tar da tre morgener. Med
  `/time set 23900` kommer morgenen om fem sekunder, så elevene kan teste uten å
  vente.

- [ ] Elever som ikke ble ferdige med Hus før natta, kan bygge huset med en
  enkel `blocks.fill` først, eller bruke en grav i bakken som hus.

## Løsningsforslag {.check}

- [ ] Chatkommandoen `fort` lagrer `x`, `y` og `z` fra `player.position()` og
  kaller `agent.setHome()`. `byggLag()` fyller en firkant fra
  `world(x - 7, y + lag, z - 7)` til `world(x + 7, y + lag, z + 7)` med stein,
  fyller det som er inni (`x - 6` til `x + 6`) med luft, og fyller porten med
  luft etterpå.
    `hentStein()` graver med `agent.destroy` og `agent.move` i en `while
    (gameplay.timeOfDay() < 10000)`, og går hjem med `agent.goHome()`.
    `gameplay.onDayStart` kaller `hentStein()` og `byggLag()` så lenge `lag` er
    mindre enn 3, og setter fakler på toppen når muren er ferdig.

- [ ] En ring på 15 ganger 15 trenger 56 blokker per lag, altså 168 for tre lag.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Tilbake til spillet`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Ingenting skjer om morgenen: programmet må kjøre og editoren stå åpen hele
  tiden. `/time add` med et helt døgn teller ikke som ny dag, men `/time set`
  til et tidligere tidspunkt gjør det.

- Muren havner feil: eleven bruker `pos`, som er målt fra der spilleren står når
  koden kjører. Bruk `world` med tall lagret fra `player.position()`.

- Muren blir ikke ferdig: roboten har for få blokker, eller den er mer enn 32
  blokker unna. La den gå hjem før den bygger.

- Porten forsvinner: nye lag fyller igjen åpningen. Fyll porten med luft etter
  hvert lag.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
