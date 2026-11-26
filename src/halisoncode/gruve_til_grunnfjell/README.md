---
title: Lærerveiledning - Gruve til grunnfjell
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lar roboten grave en sjakt ned til grunnfjellet. Roboten stopper for
lava, setter glødestein i veggen når det er mørkt, teller hvor dypt den går og
bruker telleren til å komme opp igjen.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi

__Anbefalte trinn__: 7. til 10. trinn

__Tema__: Mens-løkker, hvis og ellers, tellere, sikkerhet

__Nivå__: 2

__Tidsbruk__: En til to timer.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmer med bruk av
  variabler, vilkår og løkker

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan bruke en variabel som teller.

- [ ] Elevene kan bruke en variabel som sann eller usann til å stoppe en løkke.

- [ ] Elevene kan forklare hvorfor `flytt opp med dybde` ikke virker når dybden
  er over 64.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få roboten ned til grunnfjellet.

- [ ] Eleven oppnår høy måloppnåelse ved å få roboten til å stoppe for lava,
  sette lys og komme opp igjen, og forklare logikken.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: De tidligere oppgavene i kurset.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. Se oppgaven Installere Halison Code.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Steg 2: Til bunns {.check}

- [ ] Roboten vet at den er på bunnen fordi blokken under fortsatt er der etter
  `robot ødelegg ned`. Grunnfjell kan ikke knuses. Snakk med elevene om at dette
  er en slutning, og at utfordringen sjekker den med `robot undersøk`.

- [ ] Sjakta er over 100 blokker dyp i en vanlig verden. Det tar et par
  minutter. Bruk `/robot camera follow`.

## Steg 3: Lava {.check}

- [ ] Lag en lavadam i Kreativ for å teste. I en vanlig verden er lava under y =
  0 vanlig.

## Vanlige problemer {.protip}

- Programmene er borte: de lagres i nettleseren på maskinen eleven brukte.
  Åpne editoren i samme nettleser, eller hent inn `.mkcd`-filen eleven lagret
  med `Hent inn` på startsiden. På maskiner som nullstilles, må elevene lagre
  prosjektet som fil før timen slutter.

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Fortsett spill`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- Programmet stopper med `I have no glowstone`: roboten mangler glødestein i
  plass 2.

- Elever hopper ned i sjakta. Snakk om det før de starter, og bruk Kreativ
  første gang.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
