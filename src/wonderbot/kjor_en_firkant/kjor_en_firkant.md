---
title: Kjør en firkant
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå skal Dash kjøre! Først kjører den fram og tilbake. Så lærer du å svinge,
og til slutt kjører Dash en firkant på gulvet. Underveis lærer du hvordan en
løkke gjør programmet kortere.

<!-- BILDE: Dash midt i en firkant av maskeringsteip på gulvet -->

Du trenger:

- [ ] Wonderbot-utvidelsen i MakeCode. Se [Hei, Dash!](../hei_dash/hei_dash)
  hvis du ikke har lagt den til.

- [ ] Plass på gulvet, minst en meter hver vei.

- [ ] Gjerne maskeringsteip, så du kan merke en firkant på gulvet.


# Steg 1: Fram og tilbake {.activity}

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt med Wonderbot-utvidelsen. Lag stoppknappen med
  `når knapp A+B trykkes`{.microbitinput} og
  `stop all robots`{.microbitwonderbot}, slik som i forrige oppgave.

- [ ] Hent `når knapp A trykkes`{.microbitinput}.

- [ ] Legg inn `drive dash-01 forward 20 cm`{.microbitwonderbot}.

- [ ] Legg inn en til, og endre `forward` (fram) til `backward` (bakover).

```microbit
input.onButtonPressed(Button.A, function () {
    wonderbot.drive("dash-01", WonderDirection.Forward, 20)
    wonderbot.drive("dash-01", WonderDirection.Backward, 20)
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Sett Dash på gulvet med god plass foran.

- [ ] Last ned `.hex`-filen fra MakeCode og gi den til veilederen. Når
  roboten er klar, trykker du på A.

- [ ] Kjører Dash 20 cm fram og så tilbake dit den startet?

- [ ] Mål med en linjal eller et målebånd. Hvor langt kjørte Dash egentlig?

## Grenser {.tip}

Roboten kjører mellom 1 og 100 cm i én kloss. Ser roboten noe rett foran seg,
stopper den av seg selv.


# Steg 2: Sving {.activity}

## Sjekkliste {.check}

- [ ] Fjern klossen som kjører bakover.

- [ ] Legg inn `turn dash-01 left 90 degrees`{.microbitwonderbot} under
  kjøreklossen. `left` betyr venstre og `degrees` betyr grader.

```microbit
input.onButtonPressed(Button.A, function () {
    wonderbot.drive("dash-01", WonderDirection.Forward, 20)
    wonderbot.turn("dash-01", WonderSide.Left, 90)
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Trykk på A. Kjører Dash fram og svinger en kvart runde mot venstre?

- [ ] Prøv 180 grader. Hva skjer? Og 360 grader?


# Steg 3: En firkant {.activity}

En firkant har fire like lange sider og fire hjørner. Dash må altså kjøre og
svinge fire ganger.

## Sjekkliste {.check}

- [ ] Sett 90 grader tilbake i svingklossen.

- [ ] Hent `gjenta 4 ganger`{.microbitloops} fra `Løkker`{.microbitloops}.

- [ ] Flytt kjøreklossen og svingklossen inn i løkka.

- [ ] Gi Dash et blått lys før løkka og et grønt lys etter, så du ser når
  firkanten er ferdig.

```microbit
input.onButtonPressed(Button.A, function () {
    wonderbot.setLight("dash-01", WonderLight.All, 0x0000ff)
    for (let index = 0; index < 4; index++) {
        wonderbot.drive("dash-01", WonderDirection.Forward, 20)
        wonderbot.turn("dash-01", WonderSide.Left, 90)
    }
    wonderbot.setLight("dash-01", WonderLight.All, 0x00ff00)
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Merk startpunktet med en bit teip. Trykk på A.

- [ ] Kommer Dash tilbake til startpunktet? Står den samme vei som da den
  startet?

- [ ] Hvis Dash havner litt skjevt: Roboter er ikke helt nøyaktige. Hjulene
  kan skli litt, og en sving på 90 grader blir kanskje 88. Prøv å justere
  tallet og se om det blir bedre.

## Har du fått en Cue? {.tip}

Kjøring og sving er testet på Cue også. Bytt bare navnet til din robot.


# Steg 4: Hvorfor løkke? {.activity}

Uten løkke måtte du hatt åtte klosser: kjør, sving, kjør, sving, kjør, sving,
kjør, sving. Med løkke trenger du bare to klosser inni løkka.

## Sjekkliste {.check}

- [ ] Endre programmet så Dash kjører en firkant med sider på 40 cm. Hvor mange
  tall måtte du endre?


## Utfordring {.challenge}

- [ ] Få Dash til å kjøre en trekant. Hvor mange grader må den svinge i hvert
  hjørne? Tips: Til sammen må Dash snu seg en hel runde, altså 360 grader.

- [ ] Kjør en sekskant. Og en åttekant.

- [ ] Bruk knapp B til å kjøre firkanten mot høyre i stedet.
