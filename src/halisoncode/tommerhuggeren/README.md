---
title: Lærerveiledning - Tømmerhuggeren
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager en robot som hogger en hel stamme, kommer ned igjen og planter en
ny stikling. De bruker en mens-løkke som gjentar så lenge det er en blokk foran
roboten, og samler alt i en funksjon som kjøres fra chatten.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 6. til 10. trinn

__Tema__: Mens-løkker, ikke, funksjoner, chatkommandoer

__Nivå__: 2

__Tidsbruk__: En til to timer.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmer med bruk av
  variabler, vilkår og løkker

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og
  reflektere over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare forskjellen på `gjenta 10 ganger` og `så lenge`.

- [ ] Elevene kan bruke `ikke` i en betingelse.

- [ ] Elevene kan lage en funksjon og kjøre den fra en chatkommando.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få roboten til å hogge hele
  stammen og komme ned.

- [ ] Eleven oppnår høy måloppnåelse ved å lage funksjonen `hoggTre` med
  chatkommando, og telle blokkene roboten hogger.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: De tidligere oppgavene i kurset.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Steg 1 og 2 {.check}

- [ ] Eleven må stå rett foran stammen. Roboten ser samme vei som eleven når den
  lages.

- [ ] Store trær (2 ganger 2 stammer) blir bare delvis hogd. Bruk eik eller
  bjørk.

## Steg 4: Plant {.check}

- [ ] I overlevelse virker ikke `robot gi`. Da må stiklingen komme fra løvet,
  eller eleven legger en i roboten.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause.
  Trykk `Tilbake til spillet`. `F3` + `P` slår av pause når vinduet mister
  fokus, og `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele
  verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- Roboten fortsetter oppover i løvet: det er riktig, løvet er også blokker. Den
  stopper når det er luft.

- Roboten kommer ikke ned: sjekk at `ikke` står rundt `robot oppdag blokk ned`.


# Eksterne ressurser {.activity}

- [Veiledning for spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
