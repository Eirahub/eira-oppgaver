---
title: Lærerveiledning - Metoder
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene tegner pyramider av tekst og lærer å lage egne metoder med parametre og
returverdi. De bruker `Ctrl + Alt + M` til å trekke kode ut i en ny metode, og
skiller mellom metoder som gir tilbake en verdi og metoder med `void`.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Tekstbasert programmering, metoder, parametre

__Nivå__: 2

__Tidsbruk__: Omtrent en time.

## Kompetansemål {.challenge}

- [ ] __Programmering, 8.-10. trinn__: bruke grunnleggende prinsipper i
  programmering, slik som variabler, løkker, vilkår og funksjoner, og reflektere
  over bruken av disse

- [ ] __Informasjonsteknologi 1__: utvikle prosedyreorienterte programmer med
  prosedyrer med og uten parametre og returverdier

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan lage en metode med parametre og returverdi.

- [ ] Elevene kan forklare forskjellen på `void` og en metode som gir tilbake en
  verdi.

- [ ] Elevene kan bruke `Ctrl + Alt + M` til å lage en metode av eksisterende
  kode.

- [ ] Elevene kan kalle samme metode flere ganger med ulike verdier.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å tegne en pyramide ved hjelp av
  metodene.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare hva parametre og `return`
  gjør, og ved å lage `tegnFirkant` eller en omvendt pyramide.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Variabler og Valg og løkker.

- [ ] __Utstyr__: IntelliJ IDEA og JDK 25.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv programmet selv. Prøv også å kalle `gjenta` med `0` og et negativt
  tall, så du vet hva som skjer.

## Steg 1: Metode som gjentar {.check}

- [ ] Den første linja i metoden har tre deler: returtype, navn og parametre.
  Be elevene sette fingeren på hver av dem.

- [ ] Elever glemmer `return`. IntelliJ markerer det.

- [ ] Utfordringen viser at Java har en ferdig metode, `repeat`, som gjør det
  samme som `gjenta`.

## Steg 2: Pyramide {.check}

- [ ] Det vanskelige er regnestykkene `hoyde - rad` og `2 * rad - 1`. La
  elevene tegne de første radene på papir.

- [ ] Mellomrom i utskriften er vanskelig å se. Bytt midlertidig mellomrom med
  `.` hvis de ikke ser det.

## Steg 3: Ctrl + Alt + M {.check}

- [ ] Elever merker feil del av koden. Metoden blir da rar. Bruk Ctrl + Z.

- [ ] På Mac er snarveien `Cmd + Option + M`. Sjekk at den ikke er tatt av
  operativsystemet.

## Steg 4: Tell klossene {.check}

- [ ] La elevene oppdage at resultatet er `hoyde * hoyde`. Spør hvorfor.

## Vanlige problemer {.protip}

- `String` mot `string`: Java skiller store og små bokstaver.

- Metoden er skrevet inni `main`: den skal stå utenfor, ved siden av.

- `return` utenfor metode, eller flere `return` i en `void`-metode.

- Elever som bruker feil rekkefølge på argumentene.


# Variasjoner {.activity}

- La elevene lage en metode som tegner et tre.

- La elevene lage en metode som returnerer sant eller usant, for eksempel
  `erPrimtall`.

- La sterke elever finne en kortere måte å regne `antallKlosser` på.


# Fasit {.activity}

`Pyramide.java` ligger i mappa til oppgaven.


# Eksterne ressurser {.activity}

- [Dev.java](https://dev.java/learn/): Oracles læringsressurser for Java.
