---
title: Tegn figurer med Dash
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

I [Kjør en firkant](../kjor_en_firkant/kjor_en_firkant) kjørte Dash en
firkant. Nå lager du din egen kloss som kan kjøre alle mulige figurer:
trekant, sekskant, åttekant og til og med en stjerne. Du skal finne ut hvor
mye Dash må svinge i hvert hjørne.

<!-- BILDE: Dash på gulvet ved siden av en sekskant av maskeringsteip -->

Du trenger:

- [ ] Wonderbot-utvidelsen i MakeCode. Se [Hei, Dash!](../hei_dash/hei_dash)
  hvis du ikke har lagt den til.

- [ ] Plass på gulvet, minst en meter hver vei.

- [ ] Maskeringsteip til å merke startpunktet og hjørnene.


# Steg 1: Hvor mye skal Dash svinge? {.activity}

Når Dash har kjørt hele figuren rundt, står den samme vei som da den startet.
Da har den snudd seg en hel runde, altså 360 grader. Alle hjørnene til sammen
blir 360 grader.

## Sjekkliste {.check}

- [ ] I firkanten svingte Dash 90 grader fire ganger. Sjekk at 4 ganger 90 er
  360.

- [ ] Skriv av tabellen og fyll ut hvor mange grader Dash må svinge i hvert
  hjørne:

  | Figur | Hjørner | Grader i hvert hjørne |
  |---|---|---|
  | Trekant | 3 | |
  | Firkant | 4 | 90 |
  | Femkant | 5 | |
  | Sekskant | 6 | |
  | Åttekant | 8 | |

## Tips {.tip}

Del 360 på antall hjørner. Velg figurer der svaret blir et helt tall. Det
gjør det lettere å se om Dash svinger riktig.


# Steg 2: Lag en egen kloss {.activity}

I stedet for å lage en ny løkke for hver figur, lager du en egen kloss som
heter `mangekant`. Den får et tall, antall hjørner, og regner ut svingen selv.

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt med Wonderbot-utvidelsen, og lag stoppknappen med
  `når knapp A+B trykkes`{.microbitinput} og
  `stop all robots`{.microbitwonderbot}.

- [ ] Åpne __Avansert__ og `Funksjoner`{.microbitfunctions}.
  Klikk på __Lag en funksjon__.

- [ ] Kall funksjonen `mangekant`, og legg til et tall som heter `hjorner`.

- [ ] Legg inn `gjenta`{.microbitloops} i funksjonen, og dra `hjorner` inn i
  løkka, så den gjentar like mange ganger som det er hjørner.

- [ ] I løkka kjører Dash 20 cm og svinger `360 ÷ hjorner` grader. Delingen
  finner du under `Matematikk`{.microbitmath}.

- [ ] La knapp A kalle `mangekant` med 3, og knapp B med 6.

```microbit
function mangekant (hjorner: number) {
    for (let index = 0; index < hjorner; index++) {
        wonderbot.drive("dash-01", WonderDirection.Forward, 20)
        wonderbot.turn("dash-01", WonderSide.Left, 360 / hjorner)
    }
}
input.onButtonPressed(Button.A, function () {
    mangekant(3)
})
input.onButtonPressed(Button.B, function () {
    mangekant(6)
})
input.onButtonPressed(Button.AB, function () {
    wonderbot.stopAll()
})
```

## Test prosjektet {.flag}

- [ ] Merk startpunktet med teip, og trykk på A. Blir det en trekant? Kommer
  Dash tilbake til startpunktet?

- [ ] Sett Dash på startpunktet igjen, og trykk på B. Blir det en sekskant?

- [ ] Stemmer svingene med tabellen din fra steg 1?


# Steg 3: Like store figurer {.activity}

En åttekant med sider på 20 cm blir mye større enn en trekant med sider på 20
cm. Kan vi få figurene omtrent like store?

## Sjekkliste {.check}

- [ ] Legg til et tall til i funksjonen, `side`, og bruk det i kjøreklossen i
  stedet for 20.

- [ ] Prøv `mangekant(3, 40)` og `mangekant(8, 15)`. Hvor langt kjører Dash
  til sammen i hver figur? Det kalles omkretsen.

- [ ] Finn en sidelengde for sekskanten som gir omtrent samme omkrets som
  trekanten.

## Tips {.tip}

Omkretsen er antall hjørner ganger sidelengden. En kloss kjører mellom 1 og
100 cm.


# Steg 4: En stjerne {.activity}

En stjerne med fem tagger er også en figur Dash kan kjøre. Nå svinger Dash
så mye at linjene krysser hverandre.

## Sjekkliste {.check}

- [ ] Lag en løkke som gjentar 5 ganger: kjør 30 cm og sving 144 grader.

- [ ] Merk startpunktet og test. Ser du stjernen hvis du legger teip der Dash
  kjørte?

- [ ] Hvor mange runder har Dash snudd seg til sammen? Regn ut 5 ganger 144
  og del på 360.


## Utfordring {.challenge}

- [ ] Hva skjer med en mangekant med veldig mange hjørner, for eksempel 20,
  med korte sider? Hvilken figur ligner det på?

- [ ] Lag en kloss `stjerne` som kan lage stjerner med 5, 7 eller 9 tagger.
  Tips: prøv å svinge `720 ÷ tagger` grader for 5 tagger, og eksperimenter
  med flere.

- [ ] La Dash skifte farge i hvert hjørne.
