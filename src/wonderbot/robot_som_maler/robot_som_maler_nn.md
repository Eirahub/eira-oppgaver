---
title: Robot som måler
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

micro:biten har sensorar som måler lys og temperatur. Dash har lys og eit
hovud som kan snu seg. No koplar du dei saman: micro:biten måler, og Dash
viser kva han måler. Til slutt lagar du ein alarm som slår seg på når det blir
mørkt.

I denne oppgåva står Dash stille. Han brukar berre lys, lyd og hovudet.

![Illustrasjon av ein micro:bit i skugge som måler lysnivå 30. Pila går til
  ein robot med blått lys, der hovudet peikar mot mørkt på ein
  måleskala.](lysmaler_nn.png)

Du treng:

- [ ] Wonderbot-utvidinga i MakeCode. Sjå [Hei, Dash!](../hei_dash/hei_dash)
  om du ikkje har lagt henne til.

- [ ] Å kunne nå micro:biten som står kopla til Raspberry Pi-en. Spør
  rettleiaren kvar han ligg.


# Steg 1: Kor lyst er det? {.activity}

micro:biten måler lyset med dei små lampane på framsida. Svaret er eit tal frå
0 (heilt mørkt) til 255 (svært lyst).

## Sjekkliste {.check}

- [ ] Lag eit nytt prosjekt med Wonderbot-utvidinga, og lag stoppknappen med
  `når knapp A+B trykkes`{.microbitinput} og
  `stop all robots`{.microbitwonderbot}.

- [ ] Hent `gjenta for alltid`{.microbitbasic}.

- [ ] Legg inn `hvis ellers`{.microbitlogic} frå `Logikk`{.microbitlogic}.

- [ ] Sjekk om `lysnivå`{.microbitinput} er mindre enn 50.

- [ ] Er det mørkt, blir Dash blå. Elles blir han gul.

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

- [ ] Når programmet er på micro:biten: Kva farge har Dash?

- [ ] Hald handa over lampane på micro:biten. Blir Dash blå?

- [ ] Ta bort handa. Kor lang tid tek det før Dash blir gul igjen?

## Kvifor pause? {.tip}

Kvar gong løkka går, sender micro:biten ei melding til roboten. Utan pause
sender han meldingar heile tida, og roboten rekk ikkje å svare. Eit halvt
sekund er nok.


# Steg 2: Hovudet som viser {.activity}

No skal hovudet til Dash fungere som ein visar på ein målar. Mørkt betyr
hovudet heilt til venstre, lyst betyr heilt til høgre.

## Sjekkliste {.check}

- [ ] Lag ein variabel `vinkel`.

- [ ] Set `vinkel` til `tilordne`{.microbitpins} frå `Pins`{.microbitpins}:
  lysnivået frå 0 til 255 skal bli ein vinkel frå -90 til 90.

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

- [ ] Skugg over micro:biten litt og litt. Følgjer hovudet etter?

- [ ] Lys på micro:biten med ei lommelykt. Kor langt snur hovudet seg?

- [ ] Legg fargane frå steg 1 inn i same løkke, så Dash både peikar og
  skiftar farge.


# Steg 3: Mål temperaturen {.activity}

micro:biten har òg ein temperaturmålar. Han viser omtrent kor varmt det er
rundt han, i grader celsius.

## Sjekkliste {.check}

- [ ] Byt `lysnivå`{.microbitinput} med `temperatur (°C)`{.microbitinput}.

- [ ] Endre tala i `tilordne`{.microbitpins} så 15 grader blir -90 og 35
  grader blir 90.

- [ ] Vis temperaturen på micro:biten òg, med `vis tall`{.microbitbasic}.

## Test prosjektet {.flag}

- [ ] Kor varmt er det i rommet?

- [ ] Hald fingrane rundt micro:biten eitt minutt. Kva skjer med talet og med
  hovudet til Dash?

- [ ] Skriv ned kva du trur skjer før du prøver, og samanlikn etterpå.


# Steg 4: Mørkealarm {.activity}

Ein alarm skal ikkje pipe heile tida. Han skal pipe éin gong når det blir
mørkt, og ikkje igjen før det har vore lyst.

## Sjekkliste {.check}

- [ ] Lag ein variabel `alarm` som startar som `usann`{.microbitlogic}.

- [ ] Når det blir mørkt og `alarm` er usann: spel ein lyd på Dash, og set
  `alarm` til sann.

- [ ] Når det blir lyst igjen: set `alarm` til usann.

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

- [ ] Skugg over micro:biten. Spelar Dash lyden berre éin gong?

- [ ] Kvifor er det lurt at grensa for lyst (100) er ei anna enn grensa for
  mørkt (50)? Prøv å setje begge til 50 og sjå kva som skjer.


## Utfordring {.challenge}

- [ ] Lag ein tjuverialarm: Dash blinkar raudt og spelar lyd om nokon tek
  lyset frå micro:biten.

- [ ] Bruk både lys og temperatur: hovudet viser lyset, og fargen viser
  temperaturen.

- [ ] Logg målingane: vis lysnivået på micro:biten kvart minutt i ti minutt,
  og skriv tala i ein tabell. Når på dagen er det lysast i rommet?
