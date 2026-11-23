---
title: Kjør og sving
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå skal roboten kjøre! Først kjører den fram og tilbake. Så lærer du å svinge,
og du finner ut hvor lenge roboten må svinge for å snu en kvart runde. Til
slutt kjører roboten en firkant på gulvet.

<!-- BILDE: Bit:Bot XL midt i en firkant av maskeringsteip på gulvet -->

Du trenger:

- [ ] En Bit:Bot XL med micro:bit og batterier.

- [ ] Plass på gulvet, minst en meter hver vei.

- [ ] Gjerne maskeringsteip, så du kan merke en firkant på gulvet.

Les om sikkerhet og om hvordan du får programmet over på roboten på
[kursets forside](../) før du begynner.


# Steg 1: Legg til robotklossene {.activity}

## Sjekkliste {.check}

- [ ] Åpne [MakeCode for micro:bit](https://makecode.microbit.org/) og lag et
  nytt prosjekt. Kall det `kjør og sving`.

- [ ] Klikk på tannhjulet øverst til høyre, og velg **Utvidelser**.

- [ ] Skriv `bitbot` i søkefeltet og velg **bitbot**.

- [ ] Sjekk at du har fått en ny, oransje kategori som heter
  `Bitbot`{.microbitbitbot}.

<!-- BILDE: Skjermbilde av søket etter bitbot under Utvidelser i MakeCode -->


# Steg 2: Fram og tilbake {.activity}

## Sjekkliste {.check}

- [ ] Fjern `ved start`{.microbitbasic} og `gjenta for alltid`{.microbitbasic}.
  Dem trenger vi ikke nå.

- [ ] Hent `når knapp A trykkes`{.microbitinput} fra `Inndata`{.microbitinput}.

- [ ] Åpne `Bitbot`{.microbitbitbot} og så `Kjøring`{.microbitbitbot}. Legg
  `kjør framover med fart 60 % i 1000 millisekund`{.microbitbitbot} inni
  knappeklossen.

- [ ] Legg inn en kloss til under. Velg `bakover` i stedet for `framover`.

```microbit
input.onButtonPressed(Button.A, function () {
    bitbot.goms(BBDirection.Forward, 60, 1000)
    bitbot.goms(BBDirection.Reverse, 60, 1000)
})
```

1000 millisekunder er det samme som 1 sekund.

## Test prosjektet {.flag}

- [ ] Slå av roboten og last ned programmet. Koble fra kabelen, sett roboten på
  gulvet og slå den på.

- [ ] Trykk på A. Kjører roboten fram og så tilbake dit den startet?

- [ ] Prøv fart 30 og fart 100. Hvor langt kjører roboten på ett sekund?

## Kjører roboten skjevt? {.tip}

Motorene er ikke helt like, så roboten kan trekke litt til én side. Det fikser
vi i steg 5.


# Steg 3: Sving {.activity}

## Sjekkliste {.check}

- [ ] Fjern klossen som kjører bakover.

- [ ] Legg inn
  `snu til venstre med fart 60 % i 400 millisekund`{.microbitbitbot} under
  kjøreklossen.

```microbit
input.onButtonPressed(Button.A, function () {
    bitbot.goms(BBDirection.Forward, 60, 1000)
    bitbot.rotatems(BBRobotDirection.Left, 60, 400)
})
```

Når roboten snur, går det ene hjulet framover og det andre bakover. Da snurrer
roboten rundt på samme sted.

## Test prosjektet {.flag}

- [ ] Trykk på A. Kjører roboten fram og snur seg mot venstre?

- [ ] Hvor mye snudde den? Mer eller mindre enn en kvart runde (90 grader)?


# Steg 4: Finn en kvart runde {.activity}

Roboten vet ikke hvor mange grader den har snudd. Den snur bare så lenge du
sier. Du må selv finne hvor mange millisekunder som blir 90 grader.

## Sjekkliste {.check}

- [ ] Lag et lite program på knapp B som bare snur roboten.

```microbit
input.onButtonPressed(Button.B, function () {
    bitbot.rotatems(BBRobotDirection.Left, 60, 400)
})
```

- [ ] Sett roboten langs en strek eller en kant på gulvet. Trykk på B.

- [ ] Snudde den for lite? Gjør tallet større. Snudde den for mye? Gjør tallet
  mindre. Prøv til roboten snur omtrent 90 grader.

- [ ] Skriv ned tallet du fant: ____ millisekund.

## Tips {.tip}

Hva skjer med tallet hvis du endrer farten fra 60 til 30? Prøv å gjette før
du tester.


# Steg 5: En firkant {.activity}

En firkant har fire like lange sider og fire hjørner. Roboten må altså kjøre
og snu fire ganger.

## Sjekkliste {.check}

- [ ] Hent `gjenta 4 ganger`{.microbitloops} fra `Løkker`{.microbitloops} og
  legg den inni `når knapp A trykkes`{.microbitinput}.

- [ ] Flytt kjøreklossen og snuklossen inn i løkka. Bruk tallet du fant i
  steg 4.

- [ ] Legg `stopp med brems`{.microbitbitbot} etter løkka.

```microbit
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        bitbot.goms(BBDirection.Forward, 60, 1000)
        bitbot.rotatems(BBRobotDirection.Left, 60, 400)
    }
    bitbot.stop(BBStopMode.Brake)
})
```

## Test prosjektet {.flag}

- [ ] Merk startpunktet med en bit teip. Trykk på A.

- [ ] Kommer roboten tilbake til startpunktet? Står den samme vei som da den
  startet?

## Kjør rett fram {.tip}

Trekker roboten til høyre når den skal kjøre rett fram? Legg
`juster venstre med 5`{.microbitbitbot} i `ved start`{.microbitbasic}. Trekker
den til venstre, velger du `høyre`. Prøv deg fram med tallet.

```microbit
bitbot.BBBias(BBRobotDirection.Left, 5)
```


# Steg 6: Hvorfor løkke? {.activity}

Uten løkke måtte du hatt åtte klosser: kjør, snu, kjør, snu, kjør, snu, kjør,
snu. Med løkke trenger du bare to klosser inni løkka.

## Sjekkliste {.check}

- [ ] Endre programmet så sidene i firkanten blir dobbelt så lange. Hvor mange
  tall måtte du endre?


## Utfordring {.challenge}

- [ ] Få roboten til å kjøre en trekant. Hvor mange grader må den snu i hvert
  hjørne? Tips: Til sammen må roboten snu seg en hel runde, altså 360 grader.

- [ ] Kjør en sekskant. Hvor mange millisekunder må roboten snu da?

- [ ] Bruk `kjør venstre motor(er) framover med fart 40 %`{.microbitbitbot}
  og en annen fart på høyre motor. Klarer du å få roboten til å kjøre i en
  sirkel?
