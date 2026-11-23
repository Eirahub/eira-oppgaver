---
title: Unngå hindringer
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En selvkjørende robot må se hva som er foran den. I denne oppgaven bruker du
en **ultralydsensor** til å måle avstanden til en vegg, og lar roboten svinge
unna før den krasjer. Har ikke roboten din ultralydsensor, hopper du til
steg 4. Der lar du roboten kjøre mot lyset fra en lommelykt i stedet.

<!-- BILDE: Bit:Bot XL med ultralydsensor foran, på vei mot en vegg av bøker -->

Du trenger:

- [ ] En Bit:Bot XL med micro:bit og batterier.

- [ ] En ultralydsensor for Bit:Bot, satt i kontakten foran på roboten. Har du
  ikke den, trenger du en lommelykt.

- [ ] Noen bøker eller esker som hindringer.

- [ ] Å ha gjort [Følg linja](../folg_linja/folg_linja), så du kjenner
  `hvis - ellers`{.microbitlogic}.


# Steg 1: Mål avstanden {.activity}

Ultralydsensoren sender ut et pip som er så lyst at vi ikke hører det. Pipet
treffer en ting og kommer tilbake som et ekko. Jo lenger tid ekkoet bruker,
jo lenger unna er tingen. Flaggermus finner fram på samme måte.

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt i MakeCode og legg til utvidelsen **bitbot**.

- [ ] Legg `vis tall`{.microbitbasic} i `gjenta for alltid`{.microbitbasic}.

- [ ] Legg `les ultralydsensor som cm`{.microbitbitbot} fra
  `Sensorer og styring`{.microbitbitbot} inn i `vis tall`{.microbitbasic}.

```microbit
basic.forever(function () {
    basic.showNumber(bitbot.sonar(BBPingUnit.Centimeters))
})
```

## Test prosjektet {.flag}

- [ ] Last ned programmet og slå på roboten. Den kjører ikke i dette
  programmet.

- [ ] Hold hånden 10 cm foran sensoren. Stemmer tallet? Mål med en linjal.

- [ ] Flytt hånden lenger unna. Hva er det lengste du klarer å måle?

- [ ] Ta hånden helt bort. Hvilket tall får du nå?

## Når sensoren ikke hører ekkoet {.tip}

Kommer det ikke noe ekko tilbake, svarer sensoren 0. Det skjer når ingenting
er nær nok, eller når sensoren ikke er koblet til. 0 betyr altså *vet ikke*,
ikke *helt inntil*. Det må vi huske i neste steg.


# Steg 2: Stopp foran veggen {.activity}

## Sjekkliste {.check}

- [ ] Lag en variabel som heter `avstand`{.microbitvariables}.

- [ ] Inni `gjenta for alltid`{.microbitbasic}: sett
  `avstand`{.microbitvariables} til
  `les ultralydsensor som cm`{.microbitbitbot}.

- [ ] Legg til en `hvis - ellers`{.microbitlogic}. Roboten skal stoppe hvis
  avstanden er større enn 0 **og** mindre enn 15 cm. Ellers skal den kjøre.

- [ ] Gi lysene rød farge når roboten stopper, og grønn når den kjører.

```microbit
let avstand = 0
basic.forever(function () {
    avstand = bitbot.sonar(BBPingUnit.Centimeters)
    if (avstand > 0 && avstand < 15) {
        bitbot.stop(BBStopMode.Brake)
        bitbot.setLedColor(0xff0000)
    } else {
        bitbot.go(BBDirection.Forward, 40)
        bitbot.setLedColor(0x00ff00)
    }
})
```

## Test prosjektet {.flag}

- [ ] Sett roboten en meter fra en vegg av bøker, og slå den på.

- [ ] Stopper roboten før den treffer bøkene? Hvor langt unna stopper den?

- [ ] Flytt bøkene bort mens roboten står. Kjører den videre?

- [ ] Prøv fart 80. Stopper den fortsatt i tide?


# Steg 3: Sving unna {.activity}

Å stoppe er trygt, men roboten blir stående. Nå skal den rygge litt, snu og
kjøre videre.

## Sjekkliste {.check}

- [ ] Bytt ut `stopp med brems`{.microbitbitbot} med
  `kjør bakover med fart 40 % i 500 millisekund`{.microbitbitbot} og
  `snu til venstre med fart 60 % i 400 millisekund`{.microbitbitbot}.

```microbit
let avstand = 0
basic.forever(function () {
    avstand = bitbot.sonar(BBPingUnit.Centimeters)
    if (avstand > 0 && avstand < 15) {
        bitbot.setLedColor(0xff0000)
        bitbot.goms(BBDirection.Reverse, 40, 500)
        bitbot.rotatems(BBRobotDirection.Left, 60, 400)
    } else {
        bitbot.go(BBDirection.Forward, 40)
        bitbot.setLedColor(0x00ff00)
    }
})
```

## Test prosjektet {.flag}

- [ ] Lag en liten innhegning av bøker og esker, og sett roboten inni.

- [ ] Klarer roboten å kjøre rundt uten å krasje?

- [ ] Finner du en plass der den setter seg fast? Hvorfor tror du det skjer
  der?

## Ting sensoren ikke ser {.tip}

Myke ting som klær og puter sender ekkoet dårlig tilbake. Smale ting, som et
bordbein, er også vanskelige. Prøv deg fram.


# Steg 4: Uten ultralydsensor: kjør mot lyset {.activity}

Bit:Bot XL har to **lyssensorer**, en på hver side foran. De måler hvor mye lys
som treffer dem. Hvis det er mer lys på venstre side, snur roboten mot venstre.

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt med utvidelsen **bitbot**.

- [ ] Vis tallet fra `venstre lyssensor`{.microbitbitbot} på micro:biten, slik
  som i steg 1.

```microbit
basic.forever(function () {
    basic.showNumber(bitbot.readLight(BBLightSensor.Left))
})
```

- [ ] Last ned og slå på roboten. Lys på venstre sensor med lommelykta. Blir
  tallet større eller mindre? Hvor stort er det uten lommelykt?

- [ ] Lag to variabler, `venstre`{.microbitvariables} og
  `høyre`{.microbitvariables}, og lag programmet under. 50 er hvor mye
  sterkere lyset må være på den ene siden før roboten snur.

```microbit
let venstre = 0
let høyre = 0
basic.forever(function () {
    venstre = bitbot.readLight(BBLightSensor.Left)
    høyre = bitbot.readLight(BBLightSensor.Right)
    if (venstre > høyre + 50) {
        bitbot.rotate(BBRobotDirection.Left, 40)
    } else if (høyre > venstre + 50) {
        bitbot.rotate(BBRobotDirection.Right, 40)
    } else {
        bitbot.go(BBDirection.Forward, 30)
    }
})
```

## Test prosjektet {.flag}

- [ ] Gjør rommet litt mørkere. Sett roboten på gulvet og slå den på.

- [ ] Lys på roboten fra siden med lommelykta. Snur den mot lyset?

- [ ] Ble tallet mindre da du lyste i steg 4? Da snur roboten feil vei. Bytt
  `>`{.microbitlogic} med `<`{.microbitlogic} i begge sjekkene, og bytt
  `+ 50` med `- 50`.

- [ ] Snur roboten hele tiden, også uten lommelykt? Gjør 50 større.


## Utfordring {.challenge}

- [ ] Få roboten til å pipe når den ser en hindring.

- [ ] La roboten velge tilfeldig om den snur til venstre eller høyre. Bruk
  `velg tilfeldig sann eller usann`{.microbitmath}.

- [ ] Kjør sakte når noe er mellom 15 og 40 cm unna, og fort når veien er fri.

- [ ] Lag en robot som rømmer fra lyset i stedet for å kjøre mot det.
