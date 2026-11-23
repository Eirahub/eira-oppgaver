---
title: Lærerveiledning - Hei, Java!
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager sitt første Java-prosjekt i IntelliJ IDEA, skriver et program som
skriver ut tekst og et regnestykke, lager en feil med vilje og lar IntelliJ
rette
den med `Alt + Enter`. De møter `void main()`, `IO.println`, semikolon, tekst
mot regnestykke og metoder (første gang, uten å gå i dybden).

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Tekstbasert programmering, Java, utviklingsmiljø

__Nivå__: 2

__Tidsbruk__: Omtrent en time. Lenger hvis installasjonen ikke er gjort.

## Kompetansemål {.challenge}

- [ ] __Programmering, 8.-10. trinn__: bruke flere programmeringsspråk,
  deriblant minst ett som er tekstbasert

- [ ] __Programmering, 8.-10. trinn__: gjøre rede for hvordan datamaskiner og
  dataprogram fungerer, og forklare egne og andres koder

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan lage et prosjekt i IntelliJ og kjøre et Java-program.

- [ ] Elevene kan skrive ut tekst og regnestykker med `IO.println`.

- [ ] Elevene kan forklare forskjellen på tekst i anførselstegn og et
  regnestykke.

- [ ] Elevene kan lese en feilmelding fra IntelliJ og rette feilen.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å kjøre programmet og skrive ut
  egne linjer.

- [ ] Eleven oppnår høy måloppnåelse ved å forklare hvorfor `2 + 3` utenfor
  anførselstegn gir 5, og ved å løse utfordringene.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Ingen. Erfaring fra Scratch eller Python hjelper.

- [ ] __Utstyr__: IntelliJ IDEA og JDK 25, installert etter oppgaven
  Installasjon. Kurset bruker kompakte kildefiler, som krever Java 25. Nettbrett
  og Chromebook fungerer ikke.

- [ ] __Maskin__: Windows, macOS eller Linux der elevene får installere
  programmer. Oppgaven oppgir ikke minnekrav, men IntelliJ er et tungt program,
  så test på en vanlig elevmaskin.

- [ ] __Konto__: Ingen. IntelliJ IDEA krever ikke konto i oppgaven.

- [ ] __Nett__: Nødvendig til installasjon og første oppstart.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Installer IntelliJ og JDK 25 på forhånd, og prøv oppgaven selv.

- [ ] Del ut snarveiene `Shift + F10` og `Alt + Enter`. På Mac er snarveiene
  stort sett `Ctrl + R` og `Option + Enter`.

## Steg 1: Prosjekt {.check}

- [ ] Elever velger ofte feil prosjekttype. Be dem velge Java, IntelliJ som
  byggesystem og JDK 25.

- [ ] Ta bort krysset for Add sample code, ellers får de kode de ikke skal
  ha.

## Steg 2 og 3: Første program {.check}

- [ ] Nederst i vinduet Run står utskriften. Elever som ikke finner den, kan
  trenge å se at vinduet har åpnet seg.

- [ ] Filen skal hete `Hei.java`, og klassen heter det samme når IntelliJ
  lager den. Slett all kode som IntelliJ legger inn.

- [ ] Elever glemmer anførselstegn, semikolon eller krøllparentes. Be dem lese
  den røde streken før de spør.

- [ ] Hva `IO.println("2 + 3 = " + (2 + 3))` skriver ut, er ofte overraskende.
  Bruk den til å snakke om tekst mot tall.

## Steg 4 og 5: Feil og Alt + Enter {.check}

- [ ] La elevene lese feilmeldingen høyt før de retter. Det er målet med steget.

- [ ] `Alt + Enter` virker på alt rødt. Hvis menyen ikke åpnes, er markøren ikke
  på selve ordet.

- [ ] Metoden `hilsen` introduseres uten forklaring. Si at du kommer tilbake til
  metoder i en senere oppgave.

## Vanlige problemer {.protip}

- Programmet kjører ikke: kjør fra den grønne trekanten ved `void main()`, og
  sjekk at filen er lagret i `src`.

- `IO` er rødt: sjekk at prosjektet bruker JDK 25. Eldre JDK har ikke `IO`.

- Elevene skriver `println` uten `IO.`: skriv `IO.println`.

- `\` i figurer skrives `\\` inni teksten.

- Elever som sletter `main` ved et uhell: skriv koden på nytt fra oppgaven.


# Variasjoner {.activity}

- La elevene tegne en figur med tegn og bytte med sidemannen.

- La en eldre elev se på hva `System.out.println` er, og sammenligne med `IO`.

- La elevene skrive en tekst som endrer seg med et regnestykke, og forklare
  hvordan Java regner.


# Fasit {.activity}

`Hei.java` ligger i mappa til oppgaven.


# Eksterne ressurser {.activity}

- [IntelliJ IDEA](https://www.jetbrains.com/idea/): nedlasting og
  dokumentasjon.

- [Dev.java](https://dev.java/learn/): Oracles læringsressurser for Java.
