---
title: Teikn figurar med Dash
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

I [Kjør en firkant](../kjor_en_firkant/kjor_en_firkant) køyrde Dash ein
firkant. No lagar du din eigen kloss som kan køyre alle slags figurar:
trekant, sekskant, åttekant og til og med ei stjerne. Du skal finne ut kor
mykje Dash må svinge i kvart hjørne.

![Illustrasjon av ein robot som køyrer ein sekskant av teip på golvet sett
  ovanfrå. I kvart hjørne svingar han 60 grader, fordi 360 delt på 6 er
  60.](sekskant_nn.png)

Du treng:

- [ ] Wonderbot-utvidinga i MakeCode. Sjå [Hei, Dash!](../hei_dash/hei_dash)
  om du ikkje har lagt henne til.

- [ ] Plass på golvet, minst ein meter kvar veg.

- [ ] Maskeringsteip til å merke startpunktet og hjørna.


# Steg 1: Kor mykje skal Dash svinge? {.activity}

Når Dash har køyrt heile figuren rundt, står han same veg som då han starta.
Då har han snudd seg ein heil runde, altså 360 grader. Alle hjørna til saman
blir 360 grader.

## Sjekkliste {.check}

- [ ] I firkanten svinga Dash 90 grader fire gonger. Sjekk at 4 gonger 90 er
  360.

- [ ] Skriv av tabellen og fyll ut kor mange grader Dash må svinge i kvart
  hjørne:

  | Figur | Hjørne | Grader i kvart hjørne |
  |---|---|---|
  | Trekant | 3 | |
  | Firkant | 4 | 90 |
  | Femkant | 5 | |
  | Sekskant | 6 | |
  | Åttekant | 8 | |

## Tips {.tip}

Del 360 på talet på hjørne. Vel figurar der svaret blir eit heilt tal. Det
gjer det lettare å sjå om Dash svingar rett.


# Steg 2: Lag ein eigen kloss {.activity}

I staden for å lage ei ny løkke for kvar figur, lagar du ein eigen kloss som
heiter `mangekant`. Han får eit tal, talet på hjørne, og reknar ut svingen
sjølv.

## Sjekkliste {.check}

- [ ] Lag eit nytt prosjekt med Wonderbot-utvidinga, og lag stoppknappen med
  `når knapp A+B trykkes`{.microbitinput} og
  `stop all robots`{.microbitwonderbot}.

- [ ] Opne __Avansert__ og `Funksjoner`{.microbitfunctions}. Klikk på __Lag
  en funksjon__.

- [ ] Kall funksjonen `mangekant`, og legg til eit tal som heiter `hjorner`.

- [ ] Legg inn `gjenta`{.microbitloops} i funksjonen, og dra `hjorner` inn i
  løkka, så ho gjentek like mange gonger som det er hjørne.

- [ ] I løkka køyrer Dash 20 cm og svingar `360 ÷ hjorner` grader. Delinga
  finn du under `Matematikk`{.microbitmath}.

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

- [ ] Merk startpunktet med teip, og trykk på A. Blir det ein trekant? Kjem
  Dash tilbake til startpunktet?

- [ ] Set Dash på startpunktet igjen, og trykk på B. Blir det ein sekskant?

- [ ] Stemmer svingane med tabellen din frå steg 1?


# Steg 3: Like store figurar {.activity}

Ein åttekant med sider på 20 cm blir mykje større enn ein trekant med sider på
20 cm. Kan vi få figurane omtrent like store?

## Sjekkliste {.check}

- [ ] Legg til eit tal til i funksjonen, `side`, og bruk det i køyreklossen i
  staden for 20.

- [ ] Prøv `mangekant(3, 40)` og `mangekant(8, 15)`. Kor langt køyrer Dash
  til saman i kvar figur? Det blir kalla omkrinsen.

- [ ] Finn ei sidelengd for sekskanten som gir omtrent same omkrins som
  trekanten.

## Tips {.tip}

Omkrinsen er talet på hjørne gonger sidelengda. Ein kloss køyrer mellom 1 og
100 cm.


# Steg 4: Ei stjerne {.activity}

Ei stjerne med fem takkar er òg ein figur Dash kan køyre. No svingar Dash så
mykje at linjene kryssar kvarandre.

## Sjekkliste {.check}

- [ ] Lag ei løkke som gjentek 5 gonger: køyr 30 cm og sving 144 grader.

- [ ] Merk startpunktet og test. Ser du stjerna om du legg teip der Dash
  køyrde?

- [ ] Kor mange rundar har Dash snudd seg til saman? Rekn ut 5 gonger 144 og
  del på 360.


## Utfordring {.challenge}

- [ ] Kva skjer med ein mangekant med svært mange hjørne, til dømes 20, med
  korte sider? Kva figur liknar det på?

- [ ] Lag ein kloss `stjerne` som kan lage stjerner med 5, 7 eller 9 takkar.
  Tips: prøv å svinge `720 ÷ takkar` grader for 5 takkar, og eksperimenter
  med fleire.

- [ ] La Dash skifte farge i kvart hjørne.
