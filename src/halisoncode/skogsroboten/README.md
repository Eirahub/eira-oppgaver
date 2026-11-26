---
title: Lærerveiledning - Skogsroboten
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager en robot som finner det nærmeste treet selv, går dit, snur seg mot
stammen, hogger den, plukker opp det som falt ned og går hjem. Oppgaven er i
JavaScript og bygger på Tømmerhuggeren og Lageret. Den mest krevende delen er å
regne ut hvilken vei roboten må se, ut fra to posisjoner og en vinkel.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, matematikk

__Anbefalte trinn__: 8. til 10. trinn

__Tema__: Posisjoner og koordinater, vinkler, lister, funksjoner

__Nivå__: 3

__Tidsbruk__: En til to timer.

## Kompetansemål {.challenge}

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: analysere problemer, gjøre dem om til
  delproblemer og gjøre rede for hvordan noen av delproblemene kan løses med
  programmering

- [ ] __Programmering, 8.-10. trinn__: bruke flere programmeringsspråk,
  deriblant minst ett som er tekstbasert

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan regne ut retningen fra én posisjon til en annen med
  differansen i x og z.

- [ ] Elevene kan gå gjennom en liste med en `for`-løkke.

- [ ] Elevene kan dele et stort program i funksjoner og gjenbruke kode fra en
  tidligere oppgave.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få roboten til å finne, hogge og
  hente ett tre.

- [ ] Eleven oppnår høy måloppnåelse ved å lage `skog` for flere trær og
  forklare hvordan `snuMot` velger retning.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Tømmerhuggeren og Lageret.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. En verden med skog, gjerne i Kreativ.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

## Steg 2 og 3: Gå og snu {.check}

- [ ] `agent.moveTo` til en stamme stopper på en ledig blokk ved siden av den.
  Det kan være på hvilken som helst side, og roboten ser den veien den gikk.
  Derfor trengs `snuMot`.

- [ ] Vinklene fra `agent.getOrientation()` er sør 0, vest 90, nord -180 og øst
  -90. Funksjonen `grader` gjør dem om til 0 til 359, så nord blir 180 og øst
  270.

- [ ] Øst er positiv x, sør er positiv z. Tegn et kart på tavla.

## Steg 5: Radar {.check}

- [ ] `agent.radar` gir en liste med posisjoner, nærmeste først. Er lista tom,
  kjører løkka ingen ganger.

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

- Roboten hogger bare toppen av treet: den nærmeste stammen var høyt oppe.
  Utfordringen tar for seg dette.

- Roboten snur seg rundt og rundt: sjekk at `grader` brukes på vinkelen før
  sammenligningen.

- Roboten står oppå eller under stammen: da er `dx` og `dz` 0. Be eleven flytte
  roboten litt og prøve igjen.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
