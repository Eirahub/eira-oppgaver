---
title: Lærerveiledning - Arv
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager klassen `Monster` og klassene `Zombie` og `Edderkopp`, som arver
fra den. De lærer `extends`, `super`, `protected`, abstrakte klasser og
metoder, `@Override` og polymorfi (en liste med `Monster` som inneholder ulike
monstre). Snarveien er `Ctrl + O`.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 9. trinn til VG3

__Tema__: Objektorientert programmering, arv, abstrakte klasser

__Nivå__: 3

__Tidsbruk__: Dobbeltime.

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2__: utvikle objektorienterte programmer med
  klasser, objekter, metoder og arv

- [ ] __Informasjonsteknologi 2__: anvende objektorientert modellering til å
  beskrive et programs struktur

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hva arv er, og lage en klasse som arver med
  `extends`.

- [ ] Elevene kan bruke `super` til å kalle konstruktøren og metoder i
  klassen det arves fra.

- [ ] Elevene kan forklare hva en abstrakt klasse og en abstrakt metode er.

- [ ] Elevene kan bruke `@Override` og forklare hvorfor den er nyttig.

- [ ] Elevene kan forklare at en liste av `Monster` kan inneholde zombier og
  edderkopper.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å lage `Monster`, `Zombie` og
  `Edderkopp` og få listen til å skrive ut riktige lyder.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare hvorfor
  `monster.lyd()` gir ulik lyd for hvert monster, og ved å lage et nytt
  monster i utfordringen.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgaven Klasser og objekter. Prosjektet
  `klossverden` fra den oppgaven brukes videre.

- [ ] __Utstyr__: IntelliJ IDEA og JDK 25.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Tegn et arvetre på tavla: `Monster` øverst, `Zombie` og `Edderkopp`
  under. Si at pila betyr "er en".

- [ ] Sjekk at elevenes prosjekt har pakkene fra forrige oppgave.

## Steg 1 og 2: Monster og Zombie {.check}

- [ ] Be elevene forklare med egne ord hva `protected` betyr, sammenlignet med
  `private`.

- [ ] Elever glemmer `super(...)` i konstruktøren til `Zombie`. IntelliJ
  klager, siden `Monster` ikke har en konstruktør uten parametre.

- [ ] Be elevene lese feilmeldingen om manglende konstruktør.

## Steg 3: Abstrakt metode {.check}

- [ ] Når `Monster` gjøres abstrakt, blir `Zombie` rød. Bruk `Alt + Enter` og
  Implement methods.

- [ ] La elevene prøve `new Monster("Noe", 10)`. Den feilen er poenget.

- [ ] `@Override` er ikke påkrevd, men hjelper når navnet er skrevet feil.

## Steg 4: Edderkopp {.check}

- [ ] `Ctrl + O` virker på Mac også, ifølge oppgaven. Hvis ikke, sjekk
  tastaturinnstillingene i IntelliJ.

- [ ] Elevene glemmer `super.taSkade(skade)`. Da blir ikke edderkoppen skadd.

## Steg 5: Liste {.check}

- [ ] Be elevene forklare hvorfor `List<Monster>` kan holde en `Zombie`.

- [ ] Manglende import av `List` og `ArrayList`: `Alt + Enter`.

## Vanlige problemer {.protip}

- Pakkene stemmer ikke med mappene: IntelliJ viser feil øverst i filen.

- `Edderkopp` mangler konstruktør med `boolean`: konstruktørene må matche
  `new Edderkopp(true)`.

- Elever som arver fra feil klasse eller skriver `extend`.

- Elever som gjør feltene `private` i `Monster`, og deretter ikke får tilgang i
  `Zombie`.


# Variasjoner {.activity}

- La elevene tegne arvetreet for monstrene sine før de koder.

- La elevene lage et eget monster og la en annen elev bruke det i listen.

- La sterke elever bytte `abstract class` med `interface`, og diskutere
  forskjellen.


# Fasit {.activity}

Løsningen ligger i mappa `src` i oppgaven:

- `src/klossverden/Main.java`

- `src/klossverden/monstre/Monster.java`

- `src/klossverden/monstre/Zombie.java`

- `src/klossverden/monstre/Edderkopp.java`

Kopier mappa `klossverden` inn i `src` i et IntelliJ-prosjekt for å kjøre den.


# Eksterne ressurser {.activity}

- [Dev.java](https://dev.java/learn/): Oracles læringsressurser for Java.
