---
title: Lærerveiledning - Overlev første natt 1: Hogg tre
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Første oppgave i serien Overlev første natt. Regelen er at eleven ikke selv
får hogge, grave eller bygge: alt gjøres av roboten med kode. Roboten finner
nærmeste eiketre med `agent.findNearest`, går dit og hogger stammen med en
`while`-løkke. Så blir koden en funksjon som svarer sann eller usann, og en
løkke hogger trær til roboten har 24 stammer.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, matematikk

__Anbefalte trinn__: 7. til 10. trinn

__Tema__: Søk, funksjoner med returverdi, while-løkker, delproblemer

__Nivå__: 3

__Tidsbruk__: 60 minutter

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

- [ ] __Matematikk, 8. trinn__: utforske hvordan algoritmer kan skapes, testes
  og forbedres ved hjelp av programmering

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få programmet til å virke og
  forklare hva hver del gjør.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare hvorfor betingelsene i
  løkkene er der, og løse en av utfordringene.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Steinsti og trapp](../steinsti_og_trapp/README) og
  forrige oppgave i serien. Det hjelper å ha sett JavaScript før.

- [ ] __Utstyr__: Codeling installert, Minecraft Java Edition i
  `Overlevelse`. Se oppgaven Installere Codeling.

- [ ] __Verden__: En ny verden med eiketrær i nærheten, gjerne på vanskelighet
  `Lett` eller `Fredelig` mens elevene tester. Roboten skal ha tomt inventar
  når serien starter.


# Fremgangsmåte {.activity}

[Klikk her for å se oppgaveteksten.](hogg_tre.html)

## Tips til veiledere {.check}

- [ ] Snakk om hele planen først: hva trenger vi for å overleve natta, og i
  hvilken rekkefølge må roboten gjøre det? Det er å dele et problem i
  delproblemer.

- [ ] Plass 1 må være tom, og det første roboten hogger, må være eik. Da
  ligger alle stammene i plass 1, og `agent.getItemCount(1)` teller dem.
  Bjørk eller gran i nærheten gir stammer i andre plasser.

- [ ] Roboten har tyngdekraft av fra start og svever. Det er derfor den kan
  fly oppover stammen.

- [ ] Sjekkene for `null` og `moveTo` hindrer at roboten hogger det som
  tilfeldigvis står foran den. Det er et godt eksempel på hvorfor vi sjekker
  svar.

- [ ] 24 stammer tar flere minutter. Mens de tester, kan elevene sette
  grensen lavere.

### Hva er testet

Ikke testet i spillet ennå. Kommandoene er sjekket mot dokumentasjonen og
koden til Codeling (versjonen på `develop` 24.11.2026), men programmene er
ikke kjørt i en verden.
