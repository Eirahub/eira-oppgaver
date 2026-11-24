---
title: Lærerveiledning - Overlev første natt 4: Hytte og fakler
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Roboten bygger en hul hytte av eikeplanker rundt spilleren med
`blocks.fill`, og setter opp fakler inne og ute med `blocks.place`. Til
slutt setter eleven sammen alle fire oppgavene til ett program som kjører fra
morgen og skal bli ferdig før solnedgang.

## Oppgaven passer til: {.check}

__Fag__: Programmering, teknologi, matematikk

__Anbefalte trinn__: 7. til 10. trinn

__Tema__: Koordinater, volum, tid, å sette sammen delproblemer

__Nivå__: 3

__Tidsbruk__: 60 til 90 minutter

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

[Klikk her for å se oppgaveteksten.](hytte_for_natta.html)

## Tips til veiledere {.check}

- [ ] Hytta er en hul kube på 4 · 4 · 4 med 2 · 2 · 2 luft inni, altså 56
  planker hvis bakken er flat. 64 planker minus 4 til arbeidsbordet og 2 til
  pinnene gir 58. Ujevn bakke kan kreve flere.

- [ ] Fiendtlige monstre dukker ikke opp nærmere enn 24 blokker fra spilleren,
  så eleven er trygg inne i hytta. Faklene gjør det trygt rundt.

- [ ] Hele planen bør ta noen få minutter. Dagen varer i omtrent 10 minutter
  (tid 0 til 12000). Mål tiden med elevene, og finn delen som tar lengst tid.

- [ ] Om morgenen må eleven ut av hytta. Å grave seg ut for hånd er greit,
  eller løs utfordringen med dør.

### Hva er testet

Ikke testet i spillet ennå. Kommandoene er sjekket mot dokumentasjonen og
koden til Codeling (versjonen på `develop` 24.11.2026), men programmene er
ikke kjørt i en verden.
