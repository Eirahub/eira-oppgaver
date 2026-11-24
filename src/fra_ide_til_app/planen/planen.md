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

- [ ] Gjør et grovt overslag: Hva koster verktøy, publisering og lagring i
  måneden, og hvor mange timer går med til drift? Kan det lønne seg? Du regner
  mer nøyaktig i [Hvilken type app?](../typer_apper/typer_apper)


# Steg 5: Skriv PLAN.md {.activity}

Samle alt i én fil. Denne fila gir du til KI-en senere.

## Sjekkliste {.check}

- [ ] Lag en mappe for prosjektet, og en fil som heter `PLAN.md`.

- [ ] Fyll ut malen:

  ```markdown
  # Navn på appen

  ## Problemet
  (problemsetningen)

  ## Jobb-setning
  Når ..., vil jeg ..., så jeg kan ...

  ## Verdiforslag
  (verdiforslaget)

  ## Mål
  (to eller tre mål vi kan måle, for eksempel antall bestillinger)

  ## Antakelser vi må teste
  - Vi tror at ... Vi vet det når ...

  ## Brukere
  - Kunde: ...
  - Vi som driver: ...

  ## MVP
  - Som ... vil jeg ..., så jeg kan ...
    Ferdig når: Gitt ..., når ..., så ...

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

  ## Kostnad (grovt)
  (per måned, og timer til drift)

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
| **Seniorutvikler** | At løsningen er enkel nok, at dere forstår koden, og at alt er lagret i Git. Sier nei når KI-en lager noe for komplisert | Planen steg 4, Bygg MVP-en, Lagre data trygt |
| **Tester** (QA engineer) | At hver MVP-historie virker, også på mobil, for skjermleser og når brukeren gjør noe uventet | Test og kvalitet, Test med kunder |
| **Sikkerhetstester** (pentester) | At appen tåler angrep. Tester bare egne systemer | Sikkerhet og risiko |
| **Drift** (DevOps engineer) | Publisering, domene, hemmeligheter, sikkerhetskopi, kostnader, og å kunne gå tilbake når noe går galt | Hvilken type app?, Sikkerhet og risiko steg 6, Etter lansering |
| **Personvernansvarlig** | Personopplysninger, personvernerklæring og regler | Ansvar og personvern |
| **Salg og kundeservice** | Kontakt med kundene, pitch, spørsmål og klager | Forretningsidéen, Test med kunder, Etter lansering |

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


## Prompter du kan lære av {.protip}

Bytt ut det som står i klammer. Legg aldri inn navn, passord eller andres
personopplysninger. Se hvorfor promptene virker, og lag dine egne.

- **Visjon og mål:**

  ```
  Ut fra problemsetningen [lim inn]: Skriv en visjon i én setning og
  tre målbare mål for de tre første månedene. Spør meg om det du ikke
  vet.
  ```

- **Lag en PRD (for deg som vil gå videre):**

  ```
  Lag en produktkravspesifikasjon (PRD) ut fra visjonen, målene og
  jobb-setningen: problem, målgruppe, mål, hva som er med og ikke med,
  krav, risikoer og åpne spørsmål. Ikke finn på noe. Skriv «ukjent»
  der jeg ikke har sagt noe.
  ```

- **Epics, features og historier (for deg som vil gå videre):**

  ```
  Del PRD-en opp i epics, features og brukerhistorier: «Som [bruker]
  vil jeg [handling], så jeg kan [mål].» Gi hver historie
  akseptansekriterier: «Gitt [situasjon], når [handling], så
  [resultat].» Merk hvilke som hører til MVP-en.
  ```

- **Henger alt sammen?**

  ```
  Gå gjennom planen. Kan hver historie spores tilbake til et mål og en
  jobb-setning? List opp historier uten grunn, mål uten historier og
  antakelser vi ikke har testet.
  ```

Start ikke byggingen før planen henger sammen. Det er mye billigere å endre en
setning i planen enn kode KI-en har skrevet.

- **La KI-en spørre deg:**

  ```
  Her er PLAN.md: [lim inn]. Still meg spørsmål om det som mangler
  eller er uklart, ett om gangen, før du foreslår noe.
  ```

- **Gjør MVP-en mindre:**

  ```
  Hvilke MVP-historier i planen kan jeg fjerne og fortsatt løse
  problemet? Forklar hvorfor.
  ```

- **Forstå valgene:**

  ```
  Foreslå tre måter å lagre dataene i appen på, fra enklest til mest
  avansert. Hva krever hver av sikkerhet, personvern og penger?
  ```

- **Få en seniorutvikler til å se på planen:**

  ```
  Du er en erfaren seniorutvikler. Gå gjennom planen og si hva du
  ville vært bekymret for. Ikke skriv kode.
  ```

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
