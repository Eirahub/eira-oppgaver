---
title: Planen
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En KI bygger nesten hva som helst, men den gjetter når du er utydelig. Jo bedre
planen er, jo mindre gjetter den. I denne oppgaven skriver du `PLAN.md`: hvem
appen er for, hvilke skjermer den har, hvilke data den trenger og hva som er
den minste versjonen som virker.

![Illustrasjon av en plan med tre skjermskisser koblet med piler, og en
liste med data under](plan.png)

## Før du starter {.tip}

Du trenger problemsetningen fra [Finn behovet](../finn_behovet/finn_behovet) og
verdiforslaget fra [Forretningsidéen](../forretningsideen/forretningsideen).


# Steg 1: Hva skal brukeren få gjort? {.activity}

En **brukerhistorie** er én ting en bruker skal få til, sett fra brukeren.

## Sjekkliste {.check}

- [ ] Skriv 3 til 6 brukerhistorier på formen:

  ```
  Som [hvem] vil jeg [gjøre noe], så jeg [får noe ut av det].
  ```

- [ ] Tenk på alle som bruker appen. Ofte er det både kunden og dere som driver
  bedriften.

## Eksempel {.tip}

```
Som kunde vil jeg se ledige tider, så jeg slipper å møte opp forgjeves.
Som kunde vil jeg bestille en tid med navn og sykkeltype.
Som vasker vil jeg se dagens bestillinger, så vi vet hvem som kommer.
```


# Steg 2: MVP, den minste versjonen som virker {.activity}

**MVP** betyr «minimum viable product». Det er den minste appen som løser
problemet godt nok til at kundene kan prøve den. Alt annet venter.

## Sjekkliste {.check}

- [ ] Sett **MVP** ved de historiene som må være med for at appen skal løse
  problemet.

- [ ] Sett **Senere** ved resten. Vær streng. En MVP har sjelden mer enn tre
  historier.


# Steg 3: Skjermer og flyt {.activity}

## Sjekkliste {.check}

- [ ] Tegn hver skjerm som en boks på papir. Skriv hva som står på den: tekst,
  knapper, lister og felter.

- [ ] Tegn piler mellom skjermene: hva trykker brukeren på for å komme videre?

- [ ] Sjekk at hver MVP-historie kan gjøres med skjermene du har tegnet.


# Steg 4: Data og arkitektur {.activity}

**Data** er det appen må huske. **Arkitektur** er hvor ting skjer og hvor data
lagres. For en nybegynner er det tre muligheter:

| Hvor data lagres | Hvem ser dataene | Passer til |
|---|---|---|
| Bare i nettleseren | Bare den som bruker maskinen | Prøveversjon, kalkulator, huskeliste |
| I et regneark eller skjema | Dere som driver bedriften | Bestillinger, påmelding, tilbakemelding |
| I en database på en server | Alle brukere, med innlogging | Ekte nettbutikk, SaaS |

## Sjekkliste {.check}

- [ ] Skriv hvilke data appen trenger, for eksempel `tid`, `navn`,
  `sykkeltype`.

- [ ] Er noen av dataene personopplysninger? Skriv hvilke. Ta bare med det du
  trenger.

- [ ] Velg hvor dataene skal lagres i MVP-en. Start med det enkleste som virker.


# Steg 5: Skriv PLAN.md {.activity}

Samle alt i én fil. Denne fila gir du til KI-en senere.

## Sjekkliste {.check}

- [ ] Lag en mappe for prosjektet, og en fil som heter `PLAN.md`.

- [ ] Fyll ut malen:

  ```markdown
  # Navn på appen

  ## Problemet
  (problemsetningen)

  ## Verdiforslag
  (verdiforslaget)

  ## Brukere
  - Kunde: ...
  - Vi som driver: ...

  ## MVP
  - Som ... vil jeg ...

  ## Senere
  - ...

  ## Ikke med
  - ...

  ## Skjermer
  1. Forside: ...
  2. ...

  ## Data
  - felt: forklaring

  ## Lagring
  (nettleser, regneark eller server, og hvorfor)

  ## Krav
  - Norsk språk
  - Fungerer på mobil
  - Lett å lese: god kontrast og store knapper
  ```

# Steg 6: Fordel rollene {.activity}

I et programvareselskap lager mange roller en app sammen. Når KI-en skriver
koden, forsvinner ikke de andre rollene. Da er det dere som har dem. Den
vanligste feilen i vibe coding er å la KI-en være utvikler og glemme alle de
andre.

| Rolle | Passer på | Viktigst i oppgaven |
|---|---|---|
| **Produktleder** (product manager) | At appen løser et ekte behov. Bestemmer hva som bygges nå, og hva som venter | Finn behovet, Planen, Test med kunder |
| **Designer** | At appen er lett å bruke og ser ut som bedriften | Design appen med KI, Gi appen et eget uttrykk |
| **Promptskriver** (prompt engineer) | At KI-en får tydelige beskjeder, nok sammenheng og klare grenser | Kom i gang med en KI-kodeassistent, Bygg MVP-en |
| **Seniorutvikler** | At løsningen er enkel nok, at dere forstår koden, og at alt er lagret i Git. Sier nei når KI-en lager noe for komplisert | Planen steg 4, Bygg MVP-en |
| **Tester** (QA engineer) | At hver MVP-historie virker, også på mobil, for skjermleser og når brukeren gjør noe uventet | Bygg MVP-en, Test med kunder |
| **Sikkerhetstester** (pentester) | At appen tåler angrep. Tester bare egne systemer | Sikkerhet og risiko |
| **Drift** (DevOps engineer) | Publisering, domene, hemmeligheter, sikkerhetskopi, kostnader, og å kunne gå tilbake når noe går galt | Hvilken type app?, Sikkerhet og risiko steg 6, Test med kunder |
| **Personvernansvarlig** | Personopplysninger, personvernerklæring og regler | Ansvar og personvern |
| **Salg og kundeservice** | Kontakt med kundene, pitch, spørsmål og klager | Forretningsidéen, Test med kunder |

## Sjekkliste {.check}

- [ ] Jobber dere i gruppe? Gi hver person én eller to roller. Skriv navnene i
  `PLAN.md` under en ny overskrift `## Roller`.

- [ ] Jobber du alene? Du har alle rollene. Bytt rolle med vilje: Når du er
  ferdig med en MVP-historie, gå gjennom den som tester, og deretter som
  sikkerhetstester.

- [ ] Du kan be KI-en spille en rolle, for eksempel:

  ```
  Du er en erfaren tester. Lag en liste med ti ting som kan gå galt når
  en kunde bestiller i appen. Ikke endre koden.
  ```

  KI-en kan hjelpe, men det er dere som har ansvaret.

## Tips {.protip}

Den viktigste rollen er ofte produktleder, fordi den sier nei. KI-en kan bygge
nesten hva som helst på kort tid. Det betyr ikke at appen trenger det.


## Test deg selv {.flag}

- [ ] Gi planen til en medelev. Kan de forklare deg hva appen gjør, uten at du
  sier noe?

- [ ] Hvis de spør om noe, mangler det i planen. Skriv det inn.

- [ ] Vet alle i gruppa hvilken rolle de har, og hva de skal passe på?

## Lagre {.save}

`PLAN.md` er det viktigste du lager i kurset. Ta godt vare på den.


## Utfordring {.challenge}

Skriv én setning under **Krav** om hvordan appen skal fungere for en som bruker
skjermleser, eller som ikke kan lese norsk så godt.
