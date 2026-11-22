---
title: "Wonderbot: Dash og Cue med micro:bit"
language: nb
---

I dette kurset programmerer du robotene **Dash** og **Cue** med klosser i
MakeCode for micro:bit. Du får roboten til å lyse, spille lyder, kjøre, svinge
og danse. Til slutt lager du en fjernkontroll av micro:biten.

Kurset passer fra rundt 5. trinn. Det er fint om du har prøvd MakeCode før,
for eksempel i [micro:bit-kurset](../microbit/), men det er ikke nødvendig.

## Slik henger det sammen

Du lager programmet i MakeCode i nettleseren og laster det ned til en
micro:bit. Den micro:biten står koblet med en ledning til en liten datamaskin
(en Raspberry Pi). Raspberry Pi-en sender beskjedene videre til roboten over
Bluetooth.

Hver robot har et navn, for eksempel `dash-01` eller `cue-02`. Veilederen
forteller deg hvilken robot du har fått. Det er det navnet du skriver i
klossene.

## Sikkerhet

- Roboten kjører på gulvet, med god plass rundt.

- Ikke kjør nær trapper eller bordkanter.

- En voksen er i nærheten hele tiden.

- Alle programmer har en stoppknapp: `når knapp A+B trykkes`{.microbitinput}
  med `stop all robots`{.microbitwonderbot}.

## Hvordan komme i gang

- Begynn med [Hei, Dash!](hei_dash/hei_dash.html). Ta oppgavene i rekkefølge.

- Oppgavene er skrevet for Dash. Har du fått en Cue, står det i hver oppgave
  hva som virker på Cue.


# For veiledere {.tip}

Dette må være på plass før økta. Det er et oppsett for en voksen, ikke for
elevene.

- En Raspberry Pi med en **gateway** som holder Bluetooth-forbindelsen til
  robotene, og en **bro** (`wonderbot-microbit`) som tar imot beskjeder fra
  micro:biten over USB. Broen startes for de robotene programmet skal bruke.
  Den godtar bare de robotnavnene den er startet med.

- En micro:bit koblet til Raspberry Pi-en med USB. Eleven laster ned
  programmet sitt til denne micro:biten. micro:biten snakker ikke selv med
  robotene.

- Robotene er ladet og slått på. En Cue som står i laderen, har låste hjul.

- Hver elev eller gruppe vet navnet på roboten sin.

Programvaren på Raspberry Pi-en (teenne/wonderbot) er ikke offentlig ennå.
Kurset kan derfor foreløpig bare brukes der den er satt opp. Klossene i
MakeCode er offentlige:
[teenne/pxt-wonderbot](https://github.com/teenne/pxt-wonderbot).

Gatewayen har egne grenser: kjøring 1-100 cm, sving 1-360 grader, fart og
svingrate fra -100 til 100 %, tidsstyrt kjøring i høyst 10 sekunder og hodet
innenfor faste vinkler. Den stopper roboten ved en hindring foran (IR),
når roboten står fast og når forbindelsen blir borte. Den erstatter ikke en
voksen som følger med.

Hver lærerveiledning sier hva som er testet med ekte robot. Kort fortalt:
lys, lyd, kjøring, sving, tidsstyrt kjøring og hode er testet med klossene på
Dash, med en micro:bit V1. På Cue er kjøring og sving testet gjennom
gatewayen, men ikke med klossene fra micro:bit.

Dash og Cue er varemerker som tilhører Wonder Workshop. Kurset er ikke laget
av eller godkjent av Wonder Workshop.
