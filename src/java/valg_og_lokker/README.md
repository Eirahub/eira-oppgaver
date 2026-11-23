---
title: Lærerveiledning - Valg og løkker
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager et gjettespill der datamaskinen velger et tall fra 1 til 100. De
lærer `if`, `else if` og `else`, `while`, `for` og `break`, og snarveien
`Ctrl + Alt + L` for å rydde i koden.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Tekstbasert programmering, betingelser, løkker

__Nivå__: 2

__Tidsbruk__: Omtrent en time, lenger med utfordringene.

## Kompetansemål {.challenge}

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan bruke `if`, `else if` og `else` til å velge mellom veier.

- [ ] Elevene kan forklare forskjellen på `=` og `==`.

- [ ] Elevene kan bruke `while` og `for`, og forklare når man velger hvilken.

- [ ] Elevene kan bruke `boolean` og `break`.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få spillet til å virke med sju
  forsøk.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare de tre delene i
  `for`-løkka og ved å løse en av utfordringene.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Hei, Java! og Variabler.

- [ ] __Utstyr__: IntelliJ IDEA og JDK 25.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv spillet selv. Gjett med binærsøk, så du ser at 7 forsøk holder.

## Steg 1: Hemmelig tall {.check}

- [ ] `(int) (Math.random() * 100) + 1` er ny syntaks. La elevene først skrive
  den inn, og forklar den etterpå.

- [ ] Elever skriver `=` i stedet for `==`. IntelliJ markerer det som feil.

- [ ] Skriv ut det hemmelige tallet midlertidig under testing, så elevene
  slipper å gjette for å teste.

## Steg 2: While {.check}

- [ ] Elever som glemmer `funnet = true`, får en løkke som aldri stopper. Stopp
  programmet med den røde firkanten i Run-vinduet.

- [ ] Forklar `!` som "ikke".

## Steg 3: Rydd {.check}

- [ ] `Ctrl + Alt + L` kan være tatt av operativsystemet på noen maskiner. Se i
  tastaturinnstillingene i IntelliJ hvis det ikke virker.

## Steg 4: For {.check}

- [ ] Gå gjennom de tre delene i `for` én etter én.

- [ ] Elever setter feil sted for `break`, eller glemmer `funnet = true`, og får
  melding om at forsøkene er brukt opp selv om de gjettet riktig.

## Vanlige problemer {.protip}

- Eleven skriver svar i feil vindu: klikk i Run først.

- Eleven svarer med tekst i stedet for tall, og programmet stopper med
  `NumberFormatException`.

- Krøllparenteser havner feil og `else` blir stående alene.


# Variasjoner {.activity}

- La elevene bytte ut tallområdet og antall forsøk, og finne ut hvor mange
  forsøk man trenger.

- La elevene teste strategier mot hverandre.

- La sterke elever la datamaskinen gjette tallet brukeren tenker på.


# Fasit {.activity}

`Gjettespill.java` ligger i mappa til oppgaven.


# Eksterne ressurser {.activity}

- [Dev.java](https://dev.java/learn/): Oracles læringsressurser for Java.
