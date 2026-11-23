---
title: Fjernstyr med radio
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå skal du lage en fjernkontroll. En micro:bit i hånda sender beskjeder med
radio, og micro:biten i roboten tar imot og kjører. Du lager to programmer:
ett for **fjernkontrollen** og ett for **roboten**. Til slutt gjør du roboten
trygg: Den stopper av seg selv hvis den mister kontakten.

<!-- BILDE: En hånd som holder en micro:bit med batteripakke, og Bit:Bot XL på gulvet -->

Du trenger:

- [ ] En Bit:Bot XL med micro:bit og batterier.

- [ ] En micro:bit til, med batteripakke. Den blir fjernkontrollen.

- [ ] Et nummer for radiogruppen deres. Spør veilederen. Alle par i rommet må
  ha hvert sitt nummer, ellers styrer dere hverandres roboter.

- [ ] Å ha gjort [Kjør og sving](../kjor_og_sving/kjor_og_sving).


# Steg 1: Fjernkontrollen {.activity}

Fjernkontrollen sender et tall hele tiden. Tallet sier hva roboten skal gjøre:

| Tall | Knapper | Roboten skal |
|---|---|---|
| 0 | ingen | stå stille |
| 1 | A | snu til venstre |
| 2 | B | snu til høyre |
| 3 | A og B | kjøre framover |

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt i MakeCode og kall det `fjernkontroll`. Dette
  prosjektet trenger ikke bitbot-utvidelsen.

- [ ] Hent `radio sett gruppe`{.microbitradio} fra `Radio`{.microbitradio} og
  legg den i `ved start`{.microbitbasic}. Skriv inn nummeret dere fikk.

- [ ] Lag resten av programmet i `gjenta for alltid`{.microbitbasic}. Sjekk
  A+B først, ellers tror programmet at du bare trykker på A.

```microbit
radio.setGroup(7)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(3)
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    } else {
        radio.sendNumber(0)
    }
    basic.pause(100)
})
```

- [ ] Last ned programmet til fjernkontrollen, ikke til roboten.

## Tips {.tip}

`pause (ms) 100`{.microbitbasic} gjør at fjernkontrollen sender ti beskjeder i
sekundet. Det er nok, og det blir ikke så mye trafikk i lufta.


# Steg 2: Roboten tar imot {.activity}

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt og kall det `robot`. Legg til utvidelsen
  **bitbot**.

- [ ] Legg `radio sett gruppe`{.microbitradio} med samme nummer i
  `ved start`{.microbitbasic}.

- [ ] Hent `når radio mottar receivedNumber`{.microbitradio}.
  `receivedNumber`{.microbitvariables} er tallet som kom fra fjernkontrollen.

- [ ] Lag en `hvis`{.microbitlogic} med fire valg, ett for hvert tall i
  tabellen.

```microbit
radio.setGroup(7)
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        bitbot.go(BBDirection.Forward, 60)
    } else if (receivedNumber == 1) {
        bitbot.rotate(BBRobotDirection.Left, 40)
    } else if (receivedNumber == 2) {
        bitbot.rotate(BBRobotDirection.Right, 40)
    } else {
        bitbot.stop(BBStopMode.Brake)
    }
})
```

## Test prosjektet {.flag}

- [ ] Last ned programmet til micro:biten i roboten. Slå på roboten og
  fjernkontrollen.

- [ ] Hold inne A og B. Kjører roboten framover? Slipp. Stopper den?

- [ ] Prøv A og B hver for seg. Snur roboten riktig vei?

- [ ] Kjør roboten rundt en stol og tilbake.


# Steg 3: Stopp hvis kontakten blir borte {.activity}

Hva skjer hvis batteriet i fjernkontrollen går tomt mens du holder inne A og
B? Da kommer det ingen nye beskjeder, og roboten fortsetter å kjøre. Det er
ikke trygt. Nå skal roboten selv stoppe hvis den ikke har hørt noe på et halvt
sekund.

## Sjekkliste {.check}

- [ ] Lag en variabel som heter `sistHørt`{.microbitvariables}.

- [ ] Øverst i `når radio mottar receivedNumber`{.microbitradio}: sett
  `sistHørt`{.microbitvariables} til `kjøretid (ms)`{.microbitinput}. Den
  klossen finner du i `Inndata`{.microbitinput} under **mer**.

- [ ] Lag en `gjenta for alltid`{.microbitbasic} som sjekker om det har gått
  mer enn 500 millisekunder siden sist. Da stopper roboten og viser et kryss.

```microbit
let sistHørt = 0
radio.setGroup(7)
radio.onReceivedNumber(function (receivedNumber) {
    sistHørt = input.runningTime()
    if (receivedNumber == 3) {
        bitbot.go(BBDirection.Forward, 60)
    } else if (receivedNumber == 1) {
        bitbot.rotate(BBRobotDirection.Left, 40)
    } else if (receivedNumber == 2) {
        bitbot.rotate(BBRobotDirection.Right, 40)
    } else {
        bitbot.stop(BBStopMode.Brake)
    }
})
basic.forever(function () {
    if (input.runningTime() - sistHørt > 500) {
        bitbot.stop(BBStopMode.Brake)
        basic.showIcon(IconNames.No)
    } else {
        basic.clearScreen()
    }
})
```

## Test prosjektet {.flag}

- [ ] Last ned programmet til roboten igjen.

- [ ] Hold inne A og B så roboten kjører. Slå av fjernkontrollen mens du holder
  inne knappene. Stopper roboten? Viser den et kryss?

- [ ] Slå på fjernkontrollen igjen. Kan du kjøre videre?

## Slik gjør ekte maskiner det {.tip}

Mange maskiner stopper av seg selv hvis de mister kontakten med den som
styrer. Det kalles ofte en *dødmannsknapp*. Droner, tog og gressklippere har
noe lignende.


## Utfordring {.challenge}

- [ ] Send et nytt tall når fjernkontrollen ristes, og la roboten tute.

- [ ] Styr roboten ved å vippe fjernkontrollen. Bruk
  `akselerasjon (mG) x`{.microbitinput} i stedet for knappene. Vipp til siden
  for å snu.

- [ ] Send farten også, så roboten kjører fortere jo mer du vipper.

- [ ] Kjør stafett: Lag en bane med kjegler og ta tiden.
