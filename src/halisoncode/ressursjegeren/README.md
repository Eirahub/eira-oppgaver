---
title: Lærerveiledning - Ressursjegeren
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager en robot som leter etter flere typer malm med `agent.findNearest`,
samler posisjonene i en liste og sorterer den med `positions.sortByDistance`.
Roboten går til hver malmblokk, regner ut om den må grave opp, ned eller
fremover, og sjekker for lava med `agent.detectLiquid` og `agent.isSafe`. Til
slutt går den hjem og legger alt i kista. Oppgaven er i JavaScript.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, matematikk

__Anbefalte trinn__: 8. til 10. trinn

__Tema__: Lister, sortering, posisjoner og avstand, funksjoner som svarer med en
verdi, sikkerhetssjekker

__Nivå__: 3

__Tidsbruk__: En til to timer.

## Kompetansemål {.challenge}

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Programmering, 8.-10. trinn__: analysere problemer, gjøre dem om til
  delproblemer og gjøre rede for hvordan noen av delproblemene kan løses med
  programmering

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan bygge en liste med `push` i en løkke.

- [ ] Elevene kan sortere posisjoner etter avstand og forklare hvorfor.

- [ ] Elevene kan lage en funksjon som svarer sann eller usann, og bruke svaret
  til å stoppe en løkke.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få roboten til å grave ut malm
  fra lista og gå hjem.

- [ ] Eleven oppnår høy måloppnåelse ved å lage `jakt` med lavasjekk og forklare
  hvordan `retningTil` velger retning.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Skogsroboten og Gruve til grunnfjell.

- [ ] __Utstyr__: Halison Code installert, Minecraft Java Edition og en
  nettleser. En vanlig verden med huler, gjerne i Kreativ.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv i samme Minecraft-versjon som elevene bruker.

- [ ] Finn gjerne en hule med synlig kull og jern på forhånd, og del
  koordinatene. Under y = 0 er malmen dypskifermalm, og den finner ikke
  `Block.CoalOre` eller `Block.IronOre`.

## Steg 2 og 3: Lister {.check}

- [ ] `findNearest` gir bare den nærmeste av hver type. Med fire typer blir
  lista høyst fire lang. Derfor leter `jakt` på nytt hver runde.

- [ ] `sortByDistance` endrer ikke lista. Den gir en ny.

## Steg 4: Retning {.check}

- [ ] `agent.moveTo` mot en fast blokk stopper på en ledig blokk ved siden av.
  Står roboten rett under eller over, er `dx` og `dz` 0, og den graver opp eller
  ned.

## Vanlige problemer {.protip}

- Roboten står stille etter at eleven byttet vindu: Minecraft er på pause. Trykk
  `Fortsett spill`. `F3` + `P` slår av pause når vinduet mister fokus, og
  `/gamerule halisoncode:pause_on_lost_focus false` gjør det for hele verdenen.

- Chatkommandoen virker ikke: programmet må kjøre og editoren stå åpen. Trykk
  `Kjør` i editoren før eleven bytter til Minecraft.

- "Jeg finner ingen vei dit": malmen ligger inni steinen uten luft rundt.
  Roboten graver ikke vei, den går bare dit det er åpent.

- Roboten går ikke hjem, eller legger ingenting i kista: hjemmet er ikke satt
  oppå kista. Eleven må stå foran kista, ikke oppå den, når roboten lages, og
  kjøre programmet som flytter roboten opp og setter hjemmet. Står eleven oppå
  kista, havner roboten inni kista.

- Programmet stopper ofte med "Farlig!": en fiendtlig skapning er i nærheten.
  Bruk `/difficulty peaceful`.


# Eksterne ressurser {.activity}

- [Veiledning for
  spillere](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoer.
