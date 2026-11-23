---
title: Lærerveiledning - Klasser og objekter
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Oppgaven er overgangen fra kompakte kildefiler i del 1 til vanlige Java-klasser.
Elevene lager klassen `Kloss` med felt, konstruktør og gettere, legger den i en
egen pakke og importerer den fra `Main`.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Objektorientert programmering, klasser, pakker

__Tidsbruk__: Dobbeltime

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2__: utvikle objektorienterte programmer med
  klasser, objekter, metoder og arv

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare forskjellen på en klasse og et objekt.

- [ ] Elevene kan lage en klasse med felt, konstruktør og metoder.

- [ ] Elevene kan legge klasser i pakker og bruke `import`.

- [ ] Elevene kan forklare hva `private`, `final` og `this` betyr.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å fullføre oppgaven.

- [ ] Eleven oppnår høy måloppnåelse ved å lage klassen `Spiller` i
  utfordringen, og la den samarbeide med `Kloss`.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgave 1 til 5 i kurset, eller tilsvarende kunnskap
  om variabler, løkker og metoder.

- [ ] __Utstyr__: IntelliJ IDEA og JDK 25.


# Fasit {.activity}

Løsningen ligger i mappa `src` i oppgaven:

- `src/klossverden/Main.java`

- `src/klossverden/klosser/Kloss.java`

Kopier mappa `klossverden` inn i `src` i et IntelliJ-prosjekt for å kjøre den.


# Vanlige problemer {.activity}

## Sjekkliste {.check}

- [ ] __`Kloss` er rødt i `Main`__: Klassen er ikke importert. `Alt + Enter` og
  **Import class** løser det.

- [ ] __Feil om `package`__: Filen ligger i feil mappe. Pakkenavnet øverst i
  filen må stemme med mappa filen ligger i.

- [ ] __`main` har ingen grønn trekant__: Sjekk at metoden er skrevet nøyaktig
  `public static void main(String[] args)`.

- [ ] __Eleven skriver `Kloss` med liten forbokstav__: Det er vanlig å skrive
  klassenavn med stor forbokstav, og variabler og metoder med liten.

## Tips {.protip}

`IO.println` virker også i vanlige klasser fra Java 25, fordi klassen `IO`
ligger i pakken `java.lang`. Eldre kode og bøker bruker `System.out.println`.
Det betyr det samme.
