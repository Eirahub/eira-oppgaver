---
title: Lærerveiledning - Variabler
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager en tårnkalkulator. De lærer variabler (`int`, `double`, `String`,
`var`), regneoperatorene `*`, `/` og `%`, og å spørre brukeren med `IO.readln`
og `Integer.parseInt`. De lærer også `Ctrl + Space` for autofullføring.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Tekstbasert programmering, variabler, datatyper, brukerinput

__Nivå__: 2

__Tidsbruk__: Omtrent en time.

## Kompetansemål {.challenge}

Kompetansemål er ikke knyttet til oppgaven ennå. Hent eventuelle mål fra
[læreplanen i informasjonsteknologi på
udir.no](https://www.udir.no/lk20/inf01-02) som passer for gruppa.

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan lage variabler av typene `int`, `double` og `String`.

- [ ] Elevene kan forklare forskjellen på heltallsdivisjon og `%`.

- [ ] Elevene kan lese tekst fra brukeren og gjøre den om til et tall.

- [ ] Elevene kan bruke autofullføring for å skrive raskere og feilfritt.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å fullføre tårnkalkulatoren.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare hvorfor `160 / 64` blir 2,
  og ved å lage tårnet hult i utfordringen.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgaven Hei, Java! Prosjektet `java_kurs` fra den
  oppgaven brukes videre.

- [ ] __Utstyr__: IntelliJ IDEA og JDK 25. Kompakte kildefiler krever Java 25.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv programmet selv. Kjør det også med noe uventet, som tekst i stedet
  for tall, så du kjenner feilen.

## Steg 1: Første variabel {.check}

- [ ] Elever bruker `høyde` med `ø`. Oppgaven bruker `hoyde`. Skriv med
  bokstavene a til z i navn, som oppgaven sier.

- [ ] Be elevene gjette resultatet før de kjører.

## Steg 2: Autofullføring {.check}

- [ ] På noen maskiner og tastaturoppsett kan `Ctrl + Space` være tatt av
  operativsystemet for å bytte tastatur. Ta tak i innstillingene hvis det
  skjer.

## Steg 3: Spør brukeren {.check}

- [ ] Elever skriver svar i feil vindu. De må klikke i Run-vinduet nederst
  først.

- [ ] Svarer de `ti` i stedet for `10`, stopper programmet med en feil
  (`NumberFormatException`). Bruk det til å lese en stack trace.

- [ ] Tekst `"10"` er ikke tallet 10. Be dem forklare forskjellen.

## Steg 4: Stabler og desimaltall {.check}

- [ ] Heltallsdivisjon forvirrer. Bruk `160 / 64` som eksempel og la elevene
  gjette før de kjører.

- [ ] Desimaltall skrives med punktum. Komma gir en feil.

- [ ] Hold markøren over `var` for å se hvilken type IntelliJ har valgt.

## Vanlige problemer {.protip}

- Feil rekkefølge på parenteser og anførselstegn i `IO.println`.

- Glemt `;` på slutten av linja.

- Elever som lager en ny variabel med samme navn: Java sier at navnet er brukt.

- Elever som leser `IO.readln` uten `Integer.parseInt` og så prøver å gange:
  tekst kan ikke ganges.


# Variasjoner {.activity}

- Kalkulatoren kan regne ut hva tårnet koster hvis hver kloss har en pris.

- La elevene lage en kalkulator for noe annet, som arealet av et rom.

- La sterke elever undersøke hva som skjer når tallet blir veldig stort
  (overflyt i `int`).


# Fasit {.activity}

`Taarn.java` ligger i mappa til oppgaven.


# Eksterne ressurser {.activity}

- [Dev.java](https://dev.java/learn/): Oracles læringsressurser for Java.

- [IntelliJ IDEA](https://www.jetbrains.com/idea/): dokumentasjon.
