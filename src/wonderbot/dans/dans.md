---
title: Dans med Dash
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå skal Dash danse! Du får Dash til å riste på hodet, blinke med lysene og
snurre rundt i takt. Til slutt setter du sammen en hel dans som du kan vise
fram.

<!-- BILDE: Dash med lilla lys og hodet vridd til siden, midt i en dans -->


# Steg 1: Rist på hodet {.activity}

Dash kan snu hodet til sidene og se opp og ned. Det gjør du med
`point dash-01 head pan 0 tilt 0`{.microbitwonderbot}.

- `pan` er hvor mye hodet er snudd til siden, i grader. Positive tall snur
  hodet mot robotens høyre side, negative mot venstre. Du kan bruke tall fra
  -120 til 120.

- `tilt` er hvor mye hodet er vippet opp eller ned. Negative tall er opp, og du
  kan bruke tall fra -24 til 7.

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt med Wonderbot-utvidelsen og stoppknappen på A+B.

- [ ] Lag `når knapp A trykkes`{.microbitinput} som snur hodet til høyre, så
  til venstre og så rett fram igjen.

```microbit
input.onButtonPressed(Button.A, function () {
    wonderbot.head("dash-01", 40, 0)
    wonderbot.head("dash-01", -40, 0)
    wonderbot.head("dash-01", 0, 0)
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Rister Dash på hodet?

- [ ] Få Dash til å se opp og nikke: endre `tilt` til `-20` og så tilbake til
  `0`.


# Steg 2: Snurr rundt {.activity}

`drive dash-01 with speed 50 turn 0 for 2 s`{.microbitwonderbot} kjører i et
bestemt antall sekunder i stedet for et bestemt antall centimeter.

- `speed` er farten, fra -100 til 100 prosent. Negative tall er bakover.

- `turn` er hvor mye roboten svinger mens den kjører, også fra -100 til 100.
  Positive tall svinger mot venstre.

- `for 2 s` betyr i 2 sekunder. Det lengste du kan velge, er 10 sekunder.

## Sjekkliste {.check}

- [ ] Lag `når knapp B trykkes`{.microbitinput} med en kloss der `speed` er
  `0` og `turn` er `100`, i 1 sekund.

```microbit
input.onButtonPressed(Button.B, function () {
    wonderbot.driveFor("dash-01", 0, 100, 1)
})
```

## Test prosjektet {.flag}

- [ ] Snurrer Dash rundt på stedet?

- [ ] Hva skjer om `speed` er `50` og `turn` er `50`? Kjører Dash en bue?

- [ ] Prøv `turn` lik `-100`. Hvilken vei snurrer Dash nå?


# Steg 3: Lys i takt {.activity}

En dans trenger takt. Med `pause`{.microbitbasic} venter programmet litt før
neste kloss.

## Sjekkliste {.check}

- [ ] Hent `gjenta 4 ganger`{.microbitloops} og legg den i
  `når knapp A trykkes`{.microbitinput}.

- [ ] Inni løkka: rødt lys, pause, blått lys, pause.

```microbit
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        wonderbot.setLight("dash-01", WonderLight.All, 0xff0000)
        basic.pause(200)
        wonderbot.setLight("dash-01", WonderLight.All, 0x0000ff)
        basic.pause(200)
    }
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Blinker Dash rødt og blått?

- [ ] Hvert lysskifte tar litt tid, fordi micro:biten venter på svar fra
  roboten. Prøv ulike pauser og finn en takt du liker.


# Steg 4: Sett sammen dansen {.activity}

Nå har du tre dansetrinn: riste på hodet, snurre rundt og blinke. Sett dem
sammen til én dans.

## Sjekkliste {.check}

- [ ] Gjør `når knapp A trykkes`{.microbitinput} om til hele dansen. Her er et
  forslag:

```microbit
input.onButtonPressed(Button.A, function () {
    wonderbot.playSound("dash-01", "SYSTBIRTHDAY")
    for (let index = 0; index < 2; index++) {
        wonderbot.setLight("dash-01", WonderLight.All, 0xff00ff)
        wonderbot.head("dash-01", 40, -20)
        wonderbot.setLight("dash-01", WonderLight.All, 0x00ffff)
        wonderbot.head("dash-01", -40, -20)
    }
    wonderbot.head("dash-01", 0, 0)
    wonderbot.driveFor("dash-01", 0, 100, 1)
    wonderbot.driveFor("dash-01", 0, -100, 1)
    wonderbot.setLight("dash-01", WonderLight.All, 0x00ff00)
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Sett Dash på gulvet med god plass rundt, og trykk på A.

- [ ] Gjør Dash hele dansen? Ender den med grønt lys?

## Har du fått en Cue? {.tip}

Snurring med `drive ... with speed`{.microbitwonderbot} er bare testet på
Dash. Lyden `SYSTBIRTHDAY` er stille på Cue. Prøv dansen og se hva som virker.

## Tips {.tip}

Skal du bytte robot, må du endre navnet i mange klosser. Lag en variabel som
heter `robot` i `ved start`{.microbitbasic}, sett den til `"dash-01"`, og bruk
variabelen i stedet for navnet i alle Wonderbot-klossene. Da endrer du navnet
bare ett sted.


## Utfordring {.challenge}

- [ ] Lag din egen dans. Den må ha minst ett lys, én hodebevegelse og én
  snurr.

- [ ] Lag en annen dans på knapp B, og vis begge dansene for noen.
