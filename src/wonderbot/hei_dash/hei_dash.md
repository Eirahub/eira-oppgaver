---
title: Hei, Dash!
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

I denne oppgaven får du roboten Dash til å lyse og spille en lyd når du
trykker på en knapp på micro:biten. Du lager også en stoppknapp, som du skal
ha med i alle programmene i dette kurset.

<!-- BILDE: Dash på gulvet med grønt lys, og en micro:bit med USB-ledning -->


# Steg 1: Legg til Wonderbot-klossene {.activity}

Klossene som styrer robotene, er ikke med i MakeCode fra før. Du må legge dem
til som en **utvidelse**.

## Sjekkliste {.check}

- [ ] Åpne [MakeCode for micro:bit](https://makecode.microbit.org/) og lag et
  nytt prosjekt. Kall det `hei dash`.

- [ ] Klikk på tannhjulet øverst til høyre, og velg **Utvidelser**.

- [ ] Lim inn denne adressen i søkefeltet, og trykk Enter:

  `https://github.com/teenne/pxt-botbridge`

- [ ] Klikk på **wonderbot** i resultatet.

- [ ] Nå har du en ny, blå kategori som heter `Wonderbot`{.microbitwonderbot}.

<!-- BILDE: Kategorilista i MakeCode med den nye kategorien Wonderbot -->

## Tips {.tip}

Wonderbot-klossene er på engelsk. `drive` betyr *kjør*, `turn` betyr *sving*,
`light` betyr *lys* og `sound` betyr *lyd*.


# Steg 2: Stoppknappen {.activity}

Før roboten gjør noe, lager vi en måte å stoppe den på.

## Sjekkliste {.check}

- [ ] Fjern `ved start`{.microbitbasic} og `gjenta for alltid`{.microbitbasic}
  fra arbeidsområdet. Dem trenger vi ikke nå.

- [ ] Hent `når knapp A trykkes`{.microbitinput} fra
  `Inndata`{.microbitinput}. Endre `A` til `A+B`.

- [ ] Legg `stop all robots`{.microbitwonderbot} fra
  `Wonderbot`{.microbitwonderbot} inni klossen.

```microbit
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

Når du trykker på A og B samtidig, stopper alle robotene.


# Steg 3: Lys og lyd {.activity}

Nå skal Dash lyse grønt og spille en lyd når du trykker på knapp A.

## Sjekkliste {.check}

- [ ] Hent en ny `når knapp A trykkes`{.microbitinput}.

- [ ] Legg inn `set dash-01 chest light to`{.microbitwonderbot}. Klikk på
  fargen og velg grønn.

- [ ] Klikk på `chest` (bryst) og velg `all` (alle). Nå lyser alle lysene på
  roboten.

- [ ] Legg inn `play sound SYSTBIRTHDAY on dash-01`{.microbitwonderbot} under.

- [ ] Til slutt: `vis ikon`{.microbitbasic} med et smilefjes, så ser du på
  micro:biten at programmet er ferdig.

- [ ] Har roboten din et annet navn enn `dash-01`? Skriv navnet på roboten din
  i begge Wonderbot-klossene.

```microbit
input.onButtonPressed(Button.A, function () {
    wonderbot.setLight("dash-01", WonderLight.All, 0x00ff00)
    wonderbot.playSound("dash-01", "SYSTBIRTHDAY")
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Klikk på **Last ned** i MakeCode. Gi `.hex`-filen til veilederen, eller
  last den opp på lab-siden på Raspberry Pi-en hvis veilederen sier at du kan.
  Se [kursets forside](../) for hvordan.

- [ ] Vent til veilederen sier at roboten er klar.

- [ ] Trykk på knapp A. Lyser Dash grønt og spiller en lyd?

- [ ] Ser du smilefjeset på micro:biten etterpå?

## Hva skjer egentlig? {.tip}

Hver Wonderbot-kloss sender en beskjed til roboten og **venter** til roboten
har svart. Først da går programmet videre til neste kloss. Derfor kommer
smilefjeset først når roboten er ferdig.

## Har du fått en Cue? {.tip}

Lyden `SYSTBIRTHDAY` er en lyd fra Dash. Cue er stille når den får den. Lyset
er bare testet på Dash med disse klossene, så prøv og se hva som skjer.


# Steg 4: Hvis noe går galt {.activity}

Noen ganger svarer ikke roboten. Kanskje navnet er skrevet feil, eller roboten
er slått av. Da husker micro:biten hva som gikk galt i
`last error`{.microbitwonderbot}.

## Sjekkliste {.check}

- [ ] Hent `hvis`{.microbitlogic} fra `Logikk`{.microbitlogic} og legg den
  nederst i `når knapp A trykkes`{.microbitinput}.

- [ ] Lag betingelsen `last error ≠ ""` med en sammenligningskloss fra
  `Logikk`{.microbitlogic} og en tom tekst fra `Tekst`{.microbittext}.

- [ ] Legg `vis tekst`{.microbitbasic} med `last error`{.microbitwonderbot}
  inni.

```microbit
input.onButtonPressed(Button.A, function () {
    wonderbot.setLight("dash-01", WonderLight.All, 0x00ff00)
    wonderbot.playSound("dash-01", "SYSTBIRTHDAY")
    basic.showIcon(IconNames.Happy)
    if (wonderbot.lastError() != "") {
        basic.showString(wonderbot.lastError())
    }
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Skriv et navn som ikke finnes, for eksempel `dash-99`, i lysklossen.
  Last ned og trykk på A. Hva står det på micro:biten?

- [ ] Rett navnet tilbake, og test igjen.

## Viktig {.protip}

Ikke bruk klossene fra `Seriell`{.microbitserial} i de samme programmene.
Wonderbot-klossene bruker den samme ledningen til å snakke med Raspberry
Pi-en.


## Utfordring {.challenge}

- [ ] Bruk knapp B til å slå av lyset. Hvilken farge er av?

- [ ] Gi lyset i hodet, ørene og brystet hver sin farge.
