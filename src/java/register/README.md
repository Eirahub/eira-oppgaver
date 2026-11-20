---
title: Lærerveiledning - Et register for klosser
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager et klossregister. De lærer `enum` (sjeldenhet), `HashMap` (id til
kloss), `static` og konstanter, hvorfor id-er har en mod-del (`minmod:rubin`),
og hvorfor `ModKlosser.init()` må kalles. De bruker `Shift Shift` til å søke i
IntelliJ. Oppgaven er direkte forberedelse til registrering av klosser i
Minecraft-modder.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 9. trinn til VG3

__Tema__: Objektorientert programmering, enum, HashMap, static

__Nivå__: 3

__Tidsbruk__: Dobbeltime.

## Kompetansemål {.challenge}

Kompetansemål er ikke knyttet til oppgaven ennå. Hent eventuelle mål fra
[læreplanen i informasjonsteknologi på
udir.no](https://www.udir.no/lk20/inf01-02) som passer for gruppa.

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan lage og bruke en `enum`.

- [ ] Elevene kan bruke en `HashMap` med `put`, `get` og `containsKey`.

- [ ] Elevene kan forklare hva `static` og `static final` betyr.

- [ ] Elevene kan forklare hvorfor klosser registreres med en id, og hvorfor id
  har en mod-del.

- [ ] Elevene kan forklare hvorfor `init()` må kalles.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å registrere klossene og skrive dem
  ut fra registeret.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare hva som skjer uten
  `ModKlosser.init()`, og ved å lage et register for monstre i utfordringen.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Klasser og objekter og Arv. Prosjektet
  `klossverden` brukes videre.

- [ ] __Utstyr__: IntelliJ IDEA og JDK 25.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgaven selv, og gjør en bevisst feil: fjern `init()`, så vet du
  hva elevene ser.

- [ ] Forklar at samme mønster brukes i Minecraft-modder, uten å gå i detalj.

## Steg 1 og 2: Enum og Kloss {.check}

- [ ] Elever velger Class i stedet for Enum. IntelliJ lager en vanlig klasse.

- [ ] Når `Kloss` får en tredje parameter, blir alle steder der klosser lages,
  røde. Det er bevisst. Be elevene bruke `Alt + Enter`.

- [ ] `Shift Shift` er en fin snarvei, men noen tastaturer har den ikke
  tilgjengelig. Sjekk innstillingene hvis den ikke virker.

## Steg 3: HashMap {.check}

- [ ] Forklar nøkkel og verdi med ordbok som eksempel.

- [ ] `static` er vanskelig. Be elevene lese om hvorfor vi ikke trenger `new`.

- [ ] Manglende import av `HashMap` og `Map`.

## Steg 4: Registrer klosser {.check}

- [ ] Elever glemmer å kalle `ModKlosser.init()`. Da skrives ingen klosser ut.
  Det er poenget i det siste punktet i steget.

- [ ] Sjekk at klassen heter `ModKlosser` og ligger i `klossverden.klosser`.

## Steg 5 og 6: Doble id-er og enum {.check}

- [ ] Elevene må registrere samme id to ganger for å se feilen. Husk at de
  skal fjerne den igjen.

- [ ] `switch` med pil virker fra nyere Java. Hvis den ikke virker, sjekk JDK.

## Vanlige problemer {.protip}

- `Kloss` har ikke konstruktør med tre parametre: elever har glemt å oppdatere
  alle steder.

- Rekkefølgen på `HashMap` er ikke fast. Utskriften kan komme i en annen
  rekkefølge enn i oppgaven.

- Elever som skriver `Register.register` uten å importere klassen.


# Variasjoner {.activity}

- La elevene lage et register for monstre og gjenbruke koden, som i
  utfordringen.

- La elevene gi `Sjeldenhet` en farge som felt.

- La sterke elever sortere registeret med `TreeMap`.


# Fasit {.activity}

Løsningen ligger i mappa `src` i oppgaven:

- `src/klossverden/Main.java`

- `src/klossverden/klosser/Kloss.java`

- `src/klossverden/klosser/ModKlosser.java`

- `src/klossverden/klosser/Sjeldenhet.java`

- `src/klossverden/register/Register.java`

Kopier mappa `klossverden` inn i `src` i et IntelliJ-prosjekt for å kjøre den.


# Eksterne ressurser {.activity}

- [Dev.java](https://dev.java/learn/): Oracles læringsressurser for Java.
