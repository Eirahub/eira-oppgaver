---
title: Følg linja
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Under roboten sitter to små **linjesensorer**. De ser om gulvet rett under er
lyst eller mørkt. I denne oppgaven bruker du dem til å stoppe ved en svart
strek, og så til å følge en svart linje rundt en bane. Slik virker mange
roboter på lager og fabrikker.

<!-- BILDE: Bit:Bot XL som følger en bane av svart teip på et lyst gulv -->

Du trenger:

- [ ] En Bit:Bot XL med micro:bit og batterier.

- [ ] Svart teip på et lyst gulv, eller en svart strek på et stort hvitt ark.
  Lag en rund bane uten skarpe hjørner.

- [ ] Å ha gjort [Kjør og sving](../kjor_og_sving/kjor_og_sving).


# Steg 1: Hva ser sensorene? {.activity}

Før vi lar roboten kjøre, må vi vite hva sensorene sier over lyst og mørkt
gulv.

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt i MakeCode og legg til utvidelsen **bitbot**.

- [ ] Legg `vis tall`{.microbitbasic} i `gjenta for alltid`{.microbitbasic}.

- [ ] Åpne `Bitbot`{.microbitbitbot} og så
  `Sensorer og styring`{.microbitbitbot}. Legg
  `venstre linjesensor`{.microbitbitbot} inn i `vis tall`{.microbitbasic}.

```microbit
basic.forever(function () {
    basic.showNumber(bitbot.readLine(BBLineSensor.Left))
})
```

## Test prosjektet {.flag}

- [ ] Last ned programmet og slå på roboten. Den kjører ikke i dette
  programmet.

- [ ] Hold roboten over lyst gulv. Hvilket tall viser micro:biten?

- [ ] Flytt roboten så venstre sensor er rett over den svarte linja. Hvilket
  tall viser den nå?

- [ ] Bytt til `høyre` i klossen og test den andre sensoren også.

## To tall {.tip}

Linjesensoren svarer bare 0 eller 1. Vi regner med at den viser 1 over svart
og 0 over lyst. Ser du det omvendte på din robot, bytter du 1 og 0 i
programmene under.


# Steg 2: Stopp ved streken {.activity}

Nå skal roboten kjøre rett fram til den ser en svart strek, og så stoppe.

## Sjekkliste {.check}

- [ ] Fjern `vis tall`{.microbitbasic}.

- [ ] Hent `hvis sann så ellers`{.microbitlogic} fra `Logikk`{.microbitlogic}
  og legg den i `gjenta for alltid`{.microbitbasic}.

- [ ] Bygg sjekken `venstre linjesensor = 1`{.microbitlogic} med
  `0 = 0`{.microbitlogic} fra `Logikk`{.microbitlogic}, og legg den inn i
  `hvis`{.microbitlogic}.

- [ ] Legg `stopp med brems`{.microbitbitbot} under `hvis`{.microbitlogic}, og
  `kjør framover med fart 40 %`{.microbitbitbot} under
  `ellers`{.microbitlogic}.

```microbit
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.stop(BBStopMode.Brake)
    } else {
        bitbot.go(BBDirection.Forward, 40)
    }
})
```

## Test prosjektet {.flag}

- [ ] Sett roboten et lite stykke foran en svart strek, med fronten mot
  streken.

- [ ] Slå på roboten. Stopper den på streken?

- [ ] Prøv fart 80. Stopper den like fint da?

## Hvorfor gjenta for alltid? {.tip}

Roboten må sjekke sensoren mange ganger hvert sekund. Hvis den bare sjekket én
gang, ved start, ville den aldri merke at den kom til streken.


# Steg 3: Følg linja {.activity}

Sett roboten med den svarte linja midt under seg, mellom de to sensorene. Når
roboten kjører rett, ser begge sensorene lyst gulv. Begynner den å kjøre ut
av linja, havner en av sensorene over det svarte. Da må roboten snu tilbake
mot den siden.

<!-- BILDE: Tegning sett ovenfra av de to sensorene på hver side av linja, med piler som viser hvilken vei roboten snur -->

## Sjekkliste {.check}

- [ ] Klikk på pluss-tegnet nederst i `hvis`{.microbitlogic}-klossen, så du
  får en `ellers hvis`{.microbitlogic} i tillegg.

- [ ] Lag programmet under. Venstre sensor ser svart: snu til venstre. Høyre
  sensor ser svart: snu til høyre. Ellers: kjør framover.

```microbit
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.rotate(BBRobotDirection.Left, 40)
    } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.rotate(BBRobotDirection.Right, 40)
    } else {
        bitbot.go(BBDirection.Forward, 30)
    }
})
```

## Test prosjektet {.flag}

- [ ] Sett roboten på banen med linja mellom sensorene, og slå den på.

- [ ] Følger roboten linja hele veien rundt?

- [ ] Mister den linja i svingene? Prøv lavere fart.

## Stopp roboten {.tip}

Dette programmet stopper aldri. Slå av roboten med bryteren når du vil
stoppe.


# Steg 4: Vis hva roboten ser {.activity}

Det er lettere å finne feil når du ser hva roboten tenker. Nå skal lysene vise
hvilken sensor som ser linja.

## Sjekkliste {.check}

- [ ] Legg `sett alle LED til`{.microbitbitbot} med rød farge i
  `hvis`{.microbitlogic}, gul i `ellers hvis`{.microbitlogic} og grønn i
  `ellers`{.microbitlogic}.

```microbit
basic.forever(function () {
    if (bitbot.readLine(BBLineSensor.Left) == 1) {
        bitbot.setLedColor(0xff0000)
        bitbot.rotate(BBRobotDirection.Left, 40)
    } else if (bitbot.readLine(BBLineSensor.Right) == 1) {
        bitbot.setLedColor(0xffff00)
        bitbot.rotate(BBRobotDirection.Right, 40)
    } else {
        bitbot.setLedColor(0x00ff00)
        bitbot.go(BBDirection.Forward, 30)
    }
})
```

## Test prosjektet {.flag}

- [ ] Kjør banen. Ser du at lysene skifter når roboten retter seg opp?

- [ ] Hva er den høyeste farten der roboten fortsatt klarer hele banen?


## Utfordring {.challenge}

- [ ] Lag et kryss på banen der begge sensorene ser svart samtidig. Få
  roboten til å stoppe og pipe der. Tips: Bruk `og`{.microbitlogic} fra
  `Logikk`{.microbitlogic}.

- [ ] Tell hvor mange runder roboten har kjørt, og vis tallet på micro:biten.

- [ ] Gjør svingene jevnere: I stedet for å snu på stedet kan du la begge
  motorene gå framover, men det ene saktere enn det andre. Bruk
  `kjør venstre motor(er) framover med fart 40 %`{.microbitbitbot}.

- [ ] Lag en ny oppgave: Roboten skal holde seg *innenfor* en ring av svart
  teip, som en sumobryter.
