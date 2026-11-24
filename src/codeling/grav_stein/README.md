---
title: Lærerveiledning - Overlev første natt 2: Grav stein
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Roboten graver en sjakt rett ned, graver blokken foran og under i hvert lag,
og teller steinblokkene med `agent.inspect` før den graver dem. Løkka
stopper etter 10 stein, etter 20 lag, eller hvis det er lava under. Til slutt
flyr roboten opp igjen like mange lag som den gikk ned.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, matematikk

__Anbefalte trinn__: 7. til 10. trinn

__Tema__: Variabler som teller, sammensatte betingelser, sikkerhet

__Nivå__: 3

__Tidsbruk__: 45 minutter

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

[Klikk her for å se oppgaveteksten.](grav_stein.html)

## Tips til veiledere {.check}

- [ ] Snakk om de tre betingelsene i løkka. Hver av dem hindrer et problem:
  for lite stein, en evig løkke og lava.

- [ ] Sjakten blir et hull i bakken som er farlig å falle i. La elevene velge
  et sted ingen går, eller løs utfordringen med å tette den.

- [ ] Roboten graver med en innebygd hakke, så stein gir brostein. Granitt,
  dioritt og andesitt gir seg selv og telles ikke.

- [ ] `pos(-6, 0, 0)` er målt fra føttene til spilleren. Eleven må stå der
  hytta skal stå, og stå stille.

### Hva er testet

Ikke testet i spillet ennå. Kommandoene er sjekket mot dokumentasjonen og
koden til Codeling (versjonen på `develop` 24.11.2026), men programmene er
ikke kjørt i en verden.
