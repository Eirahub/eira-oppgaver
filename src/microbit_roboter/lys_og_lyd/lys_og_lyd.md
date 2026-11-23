---
title: Lys og lyd
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Bit:Bot XL har 12 lys som kan lyse i alle farger, og en summer som kan pipe. I
denne oppgaven lager du et lysshow, finner ut hvor hvert lys sitter, og gir
roboten blinklys og tuting når den svinger.

<!-- BILDE: Bit:Bot XL med regnbuefarger i lysene på begge sider -->

Du trenger:

- [ ] En Bit:Bot XL med micro:bit og batterier.

- [ ] Gjerne [Kjør og sving](../kjor_og_sving/kjor_og_sving) først, så du vet
  hvordan du får programmet over på roboten.


# Steg 1: Skru på lysene {.activity}

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt i MakeCode og legg til utvidelsen **bitbot**, slik
  som i forrige oppgave.

- [ ] Hent `når knapp A trykkes`{.microbitinput}. Åpne
  `Bitbot`{.microbitbitbot} og så `Lys`{.microbitbitbot}. Legg
  `sett alle LED til`{.microbitbitbot} inni knappeklossen.

- [ ] Klikk på fargen og velg en farge du liker.

- [ ] Hent `når knapp B trykkes`{.microbitinput} og legg
  `skru av alle LED`{.microbitbitbot} inni.

```microbit
input.onButtonPressed(Button.A, function () {
    bitbot.setLedColor(0x0000ff)
})
input.onButtonPressed(Button.B, function () {
    bitbot.ledClear()
})
```

## Test prosjektet {.flag}

- [ ] Last ned programmet og slå på roboten.

- [ ] Trykk på A. Lyser alle de 12 lysene?

- [ ] Trykk på B. Blir det mørkt?

## Ikke se rett inn i lysene {.tip}

Lysene kan bli svært sterke. Utvidelsen starter med lav lysstyrke, og det er
nok.


# Steg 2: Hvor sitter lysene? {.activity}

Hvert lys har et nummer fra 0 til 11. Med `sett LED nr.`{.microbitbitbot} kan du
skru på ett og ett lys.

## Sjekkliste {.check}

- [ ] Legg `sett LED nr. 0 til`{.microbitbitbot} under
  `skru av alle LED`{.microbitbitbot} i knapp B. Velg rød farge.

```microbit
input.onButtonPressed(Button.B, function () {
    bitbot.ledClear()
    bitbot.setPixelColor(0, 0xff0000)
})
```

## Test prosjektet {.flag}

- [ ] Trykk på B. Hvilket lys blir rødt? Er det på venstre eller høyre side?
  Foran eller bak?

- [ ] Endre tallet til 5, så til 6 og så til 11. Test hver gang.

- [ ] Skriv ned hvilke nummer som sitter på venstre side: ____ og hvilke som
  sitter på høyre side: ____. Det trenger du i steg 5.

<!-- BILDE: Tegning av roboten sett ovenfra med plass til å skrive nummeret på hvert lys -->


# Steg 3: Lysløype {.activity}

Nå skal lysene skrus på ett etter ett, fra 0 til 11. I stedet for 12 klosser
bruker vi en løkke som teller.

## Sjekkliste {.check}

- [ ] Hent `gjenta for indeks fra 0 til 4`{.microbitloops}
  fra `Løkker`{.microbitloops}, og legg den i knapp B under
  `skru av alle LED`{.microbitbitbot}. Endre 4 til 11.

- [ ] Flytt `sett LED nr.`{.microbitbitbot} inn i løkka. Dra `indeks` fra
  løkka og inn der tallet var.

- [ ] Legg `pause (ms) 100`{.microbitbasic} under, inni løkka.

```microbit
input.onButtonPressed(Button.B, function () {
    bitbot.ledClear()
    for (let indeks = 0; indeks <= 11; indeks++) {
        bitbot.setPixelColor(indeks, 0xff0000)
        basic.pause(100)
    }
})
```

## Test prosjektet {.flag}

- [ ] Trykk på B. Tennes lysene ett etter ett?

- [ ] Hva skjer hvis du endrer pausen til 500? Og til 20?


# Steg 4: Regnbue og lyd {.activity}

## Sjekkliste {.check}

- [ ] Hent `når knapp A+B trykkes`{.microbitinput}. Legg inn
  `sett LED til regnbue`{.microbitbitbot}.

- [ ] Legg `gjenta 24 ganger`{.microbitloops} under. Inni løkka legger du
  `roter LED`{.microbitbitbot} og `pause (ms) 100`{.microbitbasic}.

- [ ] Åpne `Sensorer og styring`{.microbitbitbot} under
  `Bitbot`{.microbitbitbot}. Legg `aktiver høyttaler i 400 ms`{.microbitbitbot}
  helt til slutt.

```microbit
input.onButtonPressed(Button.AB, function () {
    bitbot.ledRainbow(false, BBArms.Both)
    for (let index = 0; index < 24; index++) {
        bitbot.ledRotate(false, BBArms.Both)
        basic.pause(100)
    }
    bitbot.buzzTime(400)
})
```

## Test prosjektet {.flag}

- [ ] Trykk på A og B samtidig. Går regnbuen rundt?

- [ ] Hører du et pip når lysshowet er ferdig?

## Summeren {.tip}

Summeren på roboten kan bare være av eller på. Den har én tone. Du styrer hvor
lenge den piper, og hvor lang pause det er mellom pipene.


# Steg 5: Blinklys {.activity}

En bil blinker før den svinger. Nå skal roboten gjøre det samme.

## Sjekkliste {.check}

- [ ] Gjør om knapp A: Først skrus lysene på venstre side oransje. Bruk
  numrene du fant i steg 2. Her står det 0 til 5, men det er ikke sikkert det
  stemmer på din robot.

- [ ] Så piper roboten kort, og så snur den mot venstre.

- [ ] Til slutt skrus lysene av.

```microbit
input.onButtonPressed(Button.A, function () {
    for (let indeks = 0; indeks <= 5; indeks++) {
        bitbot.setPixelColor(indeks, 0xffa500)
    }
    bitbot.buzzTime(100)
    bitbot.rotatems(BBRobotDirection.Left, 60, 400)
    bitbot.ledClear()
})
```

## Test prosjektet {.flag}

- [ ] Sett roboten på gulvet og trykk på A. Lyser de riktige lysene før
  roboten snur?


## Utfordring {.challenge}

- [ ] Få blinklyset til å blinke tre ganger før roboten snur. Du trenger en
  løkke, `skru av alle LED`{.microbitbitbot} og noen pauser.

- [ ] Lag blinklys mot høyre på knapp B.

- [ ] Lag en ryggealarm: Roboten piper kort mange ganger mens den kjører
  bakover, slik som en lastebil.

- [ ] Lag et eget lysshow til en sang du liker.
