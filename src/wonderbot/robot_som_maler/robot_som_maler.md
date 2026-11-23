---
title: Robot som måler
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

micro:biten har sensorer som måler lys og temperatur. Dash har lys og et hode
som kan snu seg. Nå kobler du dem sammen: micro:biten måler, og Dash viser
hva den måler. Til slutt lager du en alarm som slår seg på når det blir
mørkt.

I denne oppgaven står Dash stille. Den bruker bare lys, lyd og hodet.

<!-- BILDE: Dash med blått lys, og en hånd som skygger over en micro:bit -->

Du trenger:

- [ ] Wonderbot-utvidelsen i MakeCode. Se [Hei, Dash!](../hei_dash/hei_dash)
  hvis du ikke har lagt den til.

- [ ] Å kunne nå micro:biten som står koblet til Raspberry Pi-en. Spør
  veilederen hvor den ligger.


# Steg 1: Hvor lyst er det? {.activity}

micro:biten måler lyset med de små lampene på forsiden. Svaret er et tall fra
0 (helt mørkt) til 255 (veldig lyst).

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt med Wonderbot-utvidelsen, og lag stoppknappen med
  `når knapp A+B trykkes`{.microbitinput} og
  `stop all robots`{.microbitwonderbot}.

- [ ] Hent `gjenta for alltid`{.microbitbasic}.

- [ ] Legg inn `hvis ellers`{.microbitlogic} fra `Logikk`{.microbitlogic}.

- [ ] Sjekk om `lysnivå`{.microbitinput} er mindre enn 50.

- [ ] Er det mørkt, blir Dash blå. Ellers blir den gul.

- [ ] Legg inn `pause (ms) 500`{.microbitbasic} til slutt i løkka.

```microbit
basic.forever(function () {
    if (input.lightLevel() < 50) {
        wonderbot.setLight("dash-01", WonderLight.All, 0x0000ff)
    } else {
        wonderbot.setLight("dash-01", WonderLight.All, 0xffff00)
    }
    basic.pause(500)
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Når programmet er på micro:biten: Hvilken farge har Dash?

- [ ] Hold hånden over lampene på micro:biten. Blir Dash blå?

- [ ] Ta bort hånden. Hvor lang tid tar det før Dash blir gul igjen?

## Hvorfor pause? {.tip}

Hver gang løkka går, sender micro:biten en beskjed til roboten. Uten pause
sender den beskjeder hele tiden, og roboten rekker ikke å svare. Et halvt
sekund er nok.


# Steg 2: Hodet som viser {.activity}

Nå skal hodet til Dash fungere som en viser på en måler. Mørkt betyr hodet
helt til venstre, lyst betyr helt til høyre.

## Sjekkliste {.check}

- [ ] Lag en variabel `vinkel`.

- [ ] Sett `vinkel` til `tilordne`{.microbitpins} fra `Pins`{.microbitpins}:
  lysnivået fra 0 til 255 skal bli en vinkel fra -90 til 90.

- [ ] Legg inn `point dash-01 head pan vinkel tilt 0`{.microbitwonderbot}.

```microbit
let vinkel = 0
basic.forever(function () {
    vinkel = Math.round(pins.map(input.lightLevel(), 0, 255, -90, 90))
    wonderbot.head("dash-01", vinkel, 0)
    basic.pause(500)
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Skygg over micro:biten litt og litt. Følger hodet etter?

- [ ] Lys på micro:biten med en lommelykt. Hvor langt snur hodet seg?

- [ ] Legg fargene fra steg 1 inn i samme løkke, så Dash både peker og
  skifter farge.


# Steg 3: Mål temperaturen {.activity}

micro:biten har også en temperaturmåler. Den viser omtrent hvor varmt det er
rundt den, i grader celsius.

## Sjekkliste {.check}

- [ ] Bytt `lysnivå`{.microbitinput} med `temperatur (°C)`{.microbitinput}.

- [ ] Endre tallene i `tilordne`{.microbitpins} så 15 grader blir -90 og 35
  grader blir 90.

- [ ] Vis temperaturen på micro:biten også, med `vis tall`{.microbitbasic}.

## Test prosjektet {.flag}

- [ ] Hvor varmt er det i rommet?

- [ ] Hold fingrene rundt micro:biten et minutt. Hva skjer med tallet og med
  hodet til Dash?

- [ ] Skriv ned hva du tror skjer før du prøver, og sammenlign etterpå.


# Steg 4: Mørkealarm {.activity}

En alarm skal ikke pipe hele tiden. Den skal pipe én gang når det blir mørkt,
og ikke igjen før det har vært lyst.

## Sjekkliste {.check}

- [ ] Lag en variabel `alarm` som starter som `usann`{.microbitlogic}.

- [ ] Når det blir mørkt og `alarm` er usann: spill en lyd på Dash, og sett
  `alarm` til sann.

- [ ] Når det blir lyst igjen: sett `alarm` til usann.

```microbit
let alarm = false
basic.forever(function () {
    if (input.lightLevel() < 50 && !(alarm)) {
        wonderbot.playSound("dash-01", "SYSTBIRTHDAY")
        alarm = true
    } else if (input.lightLevel() > 100) {
        alarm = false
    }
    basic.pause(500)
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Skygg over micro:biten. Spiller Dash lyden bare én gang?

- [ ] Hvorfor er det lurt at grensen for lyst (100) er en annen enn grensen
  for mørkt (50)? Prøv å sette begge til 50 og se hva som skjer.


## Utfordring {.challenge}

- [ ] Lag en tyverialarm: Dash blinker rødt og spiller lyd hvis noen tar
  lyset fra micro:biten.

- [ ] Bruk både lys og temperatur: hodet viser lyset, og fargen viser
  temperaturen.

- [ ] Logg målingene: vis lysnivået på micro:biten hvert minutt i ti minutter,
  og skriv tallene i en tabell. Når på dagen er det lysest i rommet?
