---
title: Fjernkontroll
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

I denne oppgaven gjør du micro:biten om til en fjernkontroll. Først styrer du
Dash med knappene. Så styrer du Dash ved å vippe micro:biten, akkurat som en
spillkontroll.

<!-- BILDE: En elev som holder micro:biten og vipper den, mens Dash kjører -->

micro:biten står koblet til Raspberry Pi-en med en ledning. Hold den forsiktig,
så ledningen ikke rykkes ut.


# Steg 1: Knappestyring {.activity}

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt med Wonderbot-utvidelsen og stoppknappen på A+B.

- [ ] Knapp A: kjør 10 cm fram.

- [ ] Knapp B: sving 45 grader mot høyre.

```microbit
input.onButtonPressed(Button.A, function () {
    wonderbot.drive("dash-01", WonderDirection.Forward, 10)
})
input.onButtonPressed(Button.B, function () {
    wonderbot.turn("dash-01", WonderSide.Right, 45)
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Kan du kjøre Dash rundt en stol med bare knapp A og B?

- [ ] Hva skjer hvis du trykker på A mange ganger veldig fort? Vent til Dash
  har stoppet før du trykker igjen.


# Steg 2: Hvor mye vippes micro:biten? {.activity}

micro:biten har en **akselerometer** som merker hvordan den holdes.
`akselerasjon (mG) y`{.microbitinput} er et tall som endrer seg når du vipper
micro:biten fram og tilbake. Vi ser først på tallet.

## Sjekkliste {.check}

- [ ] Fjern knapp A og knapp B fra forrige steg. Behold stoppknappen.

- [ ] Hent `gjenta for alltid`{.microbitbasic}. Legg inn
  `vis tall`{.microbitbasic} med `akselerasjon (mG) y`{.microbitinput}.

```microbit
basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.Y))
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Hold micro:biten flatt. Tallet er nær 0.

- [ ] Vipp micro:biten fra deg, så toppen peker ned. Blir tallet positivt
  eller negativt?

- [ ] Vipp den mot deg. Hva skjer med tallet nå? Skriv ned hva du fant ut.


# Steg 3: Vipp for å kjøre {.activity}

Nå bruker vi tallet til å styre Dash. Når micro:biten vippes fra deg, skal
Dash kjøre fram. Når den vippes mot deg, skal Dash rygge. Når den ligger flatt,
skal Dash stå stille.

## Sjekkliste {.check}

- [ ] Fjern `vis tall`{.microbitbasic}.

- [ ] Hent `hvis - ellers`{.microbitlogic} og legg den i
  `gjenta for alltid`{.microbitbasic}. Klikk på pluss-tegnet så du får en
  `ellers hvis`{.microbitlogic} også.

- [ ] Lag betingelsene og klossene slik:

```microbit
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -400) {
        wonderbot.driveFor("dash-01", 50, 0, 0.5)
    } else if (input.acceleration(Dimension.Y) > 400) {
        wonderbot.driveFor("dash-01", -50, 0, 0.5)
    } else {
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Hold micro:biten flatt. Står Dash stille?

- [ ] Vipp micro:biten fra deg. Kjører Dash fram?

- [ ] Kjører Dash feil vei? Se hva du skrev ned i steg 2, og bytt om på
  `< -400` og `> 400`.

## Hvorfor 400? {.tip}

Hvis grensen er 0, kjører Dash av gårde så fort hånden din skjelver litt.
Med 400 må du vippe tydelig. Prøv andre tall og finn det som føles best.

## Hvorfor rykker Dash? {.tip}

Hver kloss kjører i et halvt sekund, stopper og venter på svar. Så starter
løkka på nytt. Derfor kjører Dash i små rykk. Prøv å endre `0.5` til `1`. Blir
det bedre eller verre å styre?


# Steg 4: Vipp for å svinge {.activity}

`akselerasjon (mG) x`{.microbitinput} endrer seg når du vipper micro:biten til
sidene.

## Sjekkliste {.check}

- [ ] Klikk på pluss-tegnet i `hvis - ellers`{.microbitlogic} to ganger til, så
  du får to nye `ellers hvis`{.microbitlogic}.

- [ ] Vipp til venstre: snurr mot venstre. Vipp til høyre: snurr mot høyre.
  Husk at positiv `turn` er mot venstre.

```microbit
basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -400) {
        wonderbot.driveFor("dash-01", 50, 0, 0.5)
    } else if (input.acceleration(Dimension.Y) > 400) {
        wonderbot.driveFor("dash-01", -50, 0, 0.5)
    } else if (input.acceleration(Dimension.X) < -400) {
        wonderbot.driveFor("dash-01", 0, 50, 0.5)
    } else if (input.acceleration(Dimension.X) > 400) {
        wonderbot.driveFor("dash-01", 0, -50, 0.5)
    } else {
        basic.pause(100)
    }
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Kan du kjøre Dash rundt en stol nå?

- [ ] Svinger Dash feil vei? Bytt om på tallene `50` og `-50` i de to nederste
  kjøreklossene.

## Har du fått en Cue? {.tip}

Knappestyringen i steg 1 bruker kjøring og sving, som er testet på Cue.
Vippestyringen bruker `drive ... with speed`{.microbitwonderbot}, som bare er
testet på Dash.


## Utfordring {.challenge}

- [ ] Vis en pil på micro:biten som viser hvilken vei Dash kjører.

- [ ] Når du rister micro:biten, skal Dash spille en lyd.

- [ ] Lag en hinderløype med bøker eller esker på gulvet, og ta tiden på hvor
  fort du kjører gjennom. Ser Dash en hindring rett foran seg, stopper den av
  seg selv.
