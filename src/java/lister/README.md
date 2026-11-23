---
title: Lærerveiledning - Lister
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager et inventar med en `ArrayList<String>`. De legger til, henter og
fjerner ting, går gjennom lista med en for-each-løkke, lager en metode som viser
inventaret og styrer det med kommandoer som `legg`, `fjern` og `vis`. Snarveien
er live templates (`iter` og `Tab`).

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Tekstbasert programmering, lister, tekstbehandling

__Nivå__: 2

__Tidsbruk__: Omtrent en time, lenger med utfordringene.

## Kompetansemål {.challenge}

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Informasjonsteknologi 1__: gjøre rede for og vurdere hvordan ulike typer
  informasjon kan representeres digitalt og struktureres ved hjelp av ulike
  datalagringsmetoder

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan lage en `ArrayList` og bruke `add`, `get`, `size`, `contains`
  og `remove`.

- [ ] Elevene kan gå gjennom en liste med for-each-løkke.

- [ ] Elevene kan forklare hvorfor indeksen begynner på 0.

- [ ] Elevene kan sammenligne tekster med `equals` og vite hvorfor `==` ikke
  brukes.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få `legg`, `vis` og `fjern` til å
  virke.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare hva som skjer med
  `inventar.get(2)` i en liste med to ting, og ved å løse en utfordring.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Variabler, Valg og løkker og Metoder.

- [ ] __Utstyr__: IntelliJ IDEA og JDK 25.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv programmet selv, og skriv noe uventet ved kommandoen for å se hva
  som skjer.

## Steg 1: Liste {.check}

- [ ] `inventar.get(2)` i en liste med to ting stopper programmet med en
  feil om indeks utenfor grensene. Bruk det til å lese en stack trace.

- [ ] Elever bruker tall som `1` for første ting. Java begynner på 0.

- [ ] Det vanligste er manglende import. `ArrayList` og `List` blir røde.
  Trykk `Alt + Enter` og velg Import class.

## Steg 2 og 3: Løkke og metode {.check}

- [ ] Be elevene skrive `iter` og trykke `Tab`. Virker det ikke, sjekk at
  Live Templates er slått på i innstillingene.

- [ ] Å bruke `List` som parameter i stedet for `ArrayList` er et eksempel på
  at man programmerer mot en bredere type. Du kan velge å ta det kort.

## Steg 4: Kommandoer {.check}

- [ ] Elever glemmer mellomrommet i `"legg "`. Da blir tingen `substring(5)`
  feil.

- [ ] Tekster sammenlignes med `equals`. `==` kan gi uventet resultat. Det er
  verdt å vise.

- [ ] `while (true)` med `break` skremmer noen. Forklar at `break` hopper ut.

## Steg 5: Fjern {.check}

- [ ] Elever kopierer `substring(5)` til `fjern`, men ordet har 6 tegn med
  mellomrom. De må bruke 6.

- [ ] `remove` på en ting som ikke finnes, gjør ingenting. Derfor sjekker vi med
  `contains` først.

## Vanlige problemer {.protip}

- Utskriften viser `[trehakke, brød]` i stedet for én per linje: de har ikke
  skrevet løkka.

- Eleven svarer i feil vindu: klikk i Run-vinduet først.

- Programmet stopper ikke: `slutt` må skrives nøyaktig, ellers bruk
  stoppknappen.


# Variasjoner {.activity}

- La elevene bytte `String` med en egen klasse, når de har tatt Klasser og
  objekter.

- La elevene lage en handleliste eller en oppgaveliste i stedet.

- La sterke elever bruke `HashMap` for å telle ting, og sammenligne med
  registeret i oppgaven Register.


# Fasit {.activity}

`Inventar.java` ligger i mappa til oppgaven.


# Eksterne ressurser {.activity}

- [Dev.java](https://dev.java/learn/): Oracles læringsressurser for Java.
