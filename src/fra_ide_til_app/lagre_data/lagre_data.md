---
title: Lagre data trygt
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Mange apper må huske noe: bestillinger, påmeldinger eller brukere. Hvor dataene
lagres, bestemmer hvem som ser dem, hva det koster, og hva som kan gå galt.
Mange apper som er laget med KI på en helg, blir hacket fordi dataene ligger
åpent. I denne oppgaven velger du hvor dataene skal bo, og sjekker at bare de
riktige får tilgang.

![Illustrasjon av tre steder å lagre data: nettleseren, et regneark og en
database med hengelås, med en nøkkel som ligger synlig i nettleseren som
advarsel](lagre.png)

## Før du starter {.tip}

Du trenger en MVP som virker, fra [Bygg MVP-en](../bygg_mvp/bygg_mvp), og du
bør vite hvilket risikonivå appen har, fra [Sikkerhet og
risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko). Lagrer appen ingenting som
andre skal se, kan du hoppe over denne oppgaven.


# Steg 1: Hvor skal dataene bo? {.activity}

| Hvor | Hvem ser dataene | Passer til | Risikonivå |
|---|---|---|---|
| I nettleseren | Bare den som bruker maskinen | Prøveversjon, huskeliste, spill | 1 |
| I et skjema eller regneark | Dere som driver bedriften | Bestilling, påmelding, tilbakemelding | 3 |
| I en database med innlogging | Hver bruker ser sitt, dere ser alt | Kundeklubb, booking med egne sider | 4 |

## Sjekkliste {.check}

- [ ] Se i `PLAN.md` under **Data** og **Lagring**. Hvem må se dataene for at
  appen skal virke?

- [ ] Velg det enkleste stedet som løser det. Skriv valget og hvorfor i
  `PLAN.md`.

- [ ] Spør KI-en hvor appen lagrer data i dag:

  ```
  Hvor lagrer appen data nå? List opp hver ting som lagres, hvor, og
  hvem som kan se det. Ikke endre noe.
  ```


# Steg 2: Data i nettleseren {.activity}

Mange MVP-er lagrer data i nettleseren, i noe som heter **localStorage**. Det
er enkelt og gratis, men dataene finnes bare på den ene maskinen.

## Sjekkliste {.check}

- [ ] Åpne appen, trykk **F12**, og finn **Application** (eller **Lagring**) og
  **Local Storage**. Ser du dataene appen har lagret?

- [ ] Bestill noe på mobilen. Kommer det fram på PC-en? Hvorfor ikke?

- [ ] Er nettleseren nok for appen deres? Da er du ferdig med denne oppgaven
  etter steg 5.


# Steg 3: Et felles sted {.activity}

Skal bedriften se bestillingene fra alle kundene, må dataene sendes til et
felles sted. For en elevbedrift er et skjema eller regneark ofte nok.

## Sjekkliste {.check}

- [ ] Velg et skjema- eller regnearkverktøy, gjerne gjennom skolens konto, for
  eksempel Microsoft Forms eller Google Skjemaer. Sjekk vilkårene.

- [ ] Be KI-en om hjelp:

  ```
  Appen skal sende bestillingen til [verktøy] i stedet for å lagre den i
  nettleseren. Lag en plan først. Forklar hva som skjer med dataene, og
  hvem som kan se dem.
  ```

- [ ] Del regnearket bare med dem i bedriften som trenger det.

- [ ] Test med oppdiktede data til alt virker. Legg testen til i `TEST.md`.


# Steg 4: Når dere trenger en database {.activity}

Trenger brukerne å logge inn og se sine egne data, trenger dere en
**database** og en **backend**. Det finnes tjenester som gir dere begge deler,
for eksempel Supabase og Firebase. Dette er risikonivå 4, med mye mer ansvar.

## Sjekkliste {.check}

- [ ] Trenger dere virkelig innlogging? Kan et skjema løse det samme? Velg det
  enkleste.

- [ ] Velger dere en database: Sjekk alder, pris, hvor dataene lagres (helst i
  EU eller EØS), og om dere kan bruke den til bedriften.

- [ ] Be KI-en forklare før den bygger:

  ```
  Forklar hvordan innlogging og database vil virke i appen, hvem som kan
  lese og endre hva, og hva vi må gjøre for at hver bruker bare ser sine
  egne data. Ikke skriv kode ennå.
  ```

- [ ] Har appen ekte brukere med innlogging, må en voksen stå som ansvarlig.


# Steg 5: Fellen: alt i nettleseren er offentlig {.activity}

Alt som sendes til nettleseren, kan alle lese: koden, nøkler og det appen
henter. Den vanligste feilen i apper laget med KI er at databasen er åpen, og at
den eneste beskyttelsen er at knappen ikke vises.

## Sjekkliste {.check}

- [ ] Trykk **F12** og se under **Sources**. Finner du nøkler, passord eller
  adresser til databaser i koden? Da kan alle andre også finne dem.

- [ ] Hemmelige nøkler skal aldri ligge i koden som sendes til nettleseren.
  Nøkler som er laget for å være offentlige, er bare trygge når databasen har
  **tilgangsregler** som bestemmer hvem som kan lese og endre hva.

- [ ] Be om en sjekk:

  ```
  Sjekk om noen kan lese, endre eller slette data de ikke skal ha tilgang
  til, for eksempel ved å bruke nøkkelen fra nettleseren direkte. Sjekk
  tilgangsreglene i databasen. Ikke endre noe før du har forklart.
  ```

- [ ] Prøv selv i din egen app: Logg inn som én testbruker. Kan du se dataene
  til en annen testbruker?

- [ ] Sjekk at appen kontrollerer det brukeren sender inn, også på serveren,
  ikke bare i skjemaet.

## Tips {.protip}

Test bare din egen app. Å prøve dette på andres apper er ikke lov, se [Sikkerhet
og risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko).

## Prompter du kan lære av {.protip}

Bytt ut det som står i klammer. Legg aldri inn navn, passord eller andres
personopplysninger. Se hvorfor promptene virker, og lag dine egne.

- **Sammenlign løsninger:**

  ```
  Appen skal lagre [hva]. Sammenlign nettleser, regneark og database for
  oss: hva koster det, hvem ser dataene, og hva kan gå galt?
  ```

- **Forstå tilgangsregler:**

  ```
  Forklar tilgangsregler i en database med et eksempel fra appen min.
  Hva skjer hvis vi glemmer dem?
  ```

- **Tenk som en angriper:**

  ```
  Du er en erfaren pentester. Hvordan kunne noen fått tak i dataene i
  appen min? Gå gjennom koden og oppsettet. Ikke endre noe.
  ```

## Test deg selv {.flag}

- [ ] Kan du forklare hvem som kan se dataene i appen din, og hvorfor?

- [ ] Kan du forklare hvorfor en knapp som ikke vises, ikke er beskyttelse?

## Lagre {.save}

Lag en commit med meldingen `Lagring av data`.


## Utfordring {.challenge}

Hvor lenge trenger dere dataene? Lag en regel for når de slettes, og be KI-en
lage en enkel måte å slette gamle bestillinger på.
