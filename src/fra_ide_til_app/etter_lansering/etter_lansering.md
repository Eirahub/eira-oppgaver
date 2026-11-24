---
title: Etter lansering
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En app er ikke ferdig når den er publisert. Kundene stiller spørsmål, noe går i
stykker, og en dag skal appen kanskje legges ned. Mange apper som er laget med
KI, blir glemt etter lanseringen, og da blir de en risiko. I denne oppgaven
lager du rutiner for kundeservice, oppdateringer og sikkerhetskopi, og en plan
for hvordan appen avsluttes.

![Illustrasjon av en sirkel med fire ikoner: kundeservice, oppdatering,
sikkerhetskopi og avslutning, rundt en fil som heter DRIFT.md](drift.png)

## Før du starter {.tip}

Appen bør være testet med kunder, se [Test med
kunder](../test_med_kunder/test_med_kunder). Oppgaven passer best når appen skal
brukes over tid, for eksempel i en ungdomsbedrift.


# Steg 1: Kundeservice og klager {.activity}

Når kundene bruker appen, kommer spørsmålene: Hvorfor kom ikke bekreftelsen?
Kan jeg avbestille? Måten dere svarer på, betyr like mye for omdømmet som selve
appen.

## Sjekkliste {.check}

- [ ] Bestem hvor kundene skal ta kontakt, og skriv det i appen. Bruk en
  e-post eller et skjema for bedriften, ikke en privat konto.

- [ ] Bestem hvem som svarer, og hvor raskt. Skriv det i en ny fil som heter
  `DRIFT.md`.

- [ ] Skriv et svar på en tenkt klage. Svaret har fire deler:

  1. Takk for at kunden sa fra.
  2. Si hva som skjedde, uten å skylde på andre.
  3. Si hva dere gjør nå.
  4. Si hva dere gjør for at det ikke skal skje igjen.

- [ ] Før en logg over henvendelser, uten navn: dato, hva det gjaldt, og hva
  dere gjorde. Mange like spørsmål betyr at appen bør endres.

## Tips {.protip}

Kunder har rettigheter når de kjøper noe, for eksempel til å klage. Sjekk hos
Forbrukerrådet hva som gjelder for det dere selger.


# Steg 2: Oppdater trygt {.activity}

Hver endring kan ødelegge noe som virket. Når ekte kunder bruker appen, trenger
dere en fast rutine for endringer.

## Sjekkliste {.check}

- [ ] Skriv rutinen i `DRIFT.md`:

  1. Lag endringen på en egen gren i Git.
  2. Test de viktigste MVP-historiene, også på mobil.
  3. Publiser.
  4. Sjekk at appen virker etter publiseringen.
  5. Virker den ikke? Gå tilbake til forrige versjon, se [Tilbake i
     tid](../../git/tidsreise/tidsreise).

- [ ] Før en endringslogg: dato, hva som er endret, og hvorfor.

- [ ] Bruker appen pakker eller tjenester fra andre? Sjekk en gang i måneden om
  det finnes sikkerhetsoppdateringer.


# Steg 3: Sikkerhetskopi og tilgang {.activity}

## Sjekkliste {.check}

- [ ] Hvor ligger dataene til appen? Lag en sikkerhetskopi, og prøv å hente den
  tilbake. En sikkerhetskopi du aldri har prøvd, vet du ikke om virker.

- [ ] Sikkerhetskopien inneholder ofte personopplysninger. Lagre den like trygt
  som originalen, og slett gamle kopier.

- [ ] List opp alle kontoer appen trenger: Git, publisering, domene, skjema og
  betaling. Hvem har tilgang, og har alle tofaktor?

- [ ] Slutter noen i bedriften? Fjern tilgangen deres, og bytt passord og
  nøkler de kjente til.

- [ ] Hvordan får dere vite at appen er nede? Bestem hvem som sjekker, og hvor
  ofte. Skriv det i `DRIFT.md`.


# Steg 4: Følg med på målene {.activity}

## Sjekkliste {.check}

- [ ] Hent målene fra `PLAN.md`. Hvordan kan dere måle dem uten å samle mer data
  om kundene enn dere trenger?

- [ ] Se på målene en gang i måneden. Går det riktig vei? Hvis ikke, hva sier
  kundene?

- [ ] Koster appen mer enn dere regnet med? Sammenlign med kostnadene i
  `PLAN.md`.


# Steg 5: Avslutt appen ordentlig {.activity}

Ungdomsbedrifter blir ofte avviklet når skoleåret er slutt. En app som bare blir
liggende, kan lekke data, koste penger eller bli misbrukt av andre.

## Sjekkliste {.check}

- [ ] Si fra til kundene i god tid, og fortell hva som skjer med opplysningene
  deres.

- [ ] Slett personopplysninger, også i sikkerhetskopier, regneark og e-post.

- [ ] Ta ned appen, og avslutt tjenester som koster penger.

- [ ] Slett eller bytt API-nøkler og passord.

- [ ] Bestem hva som skjer med domenet. Et domene dere slipper, kan bli kjøpt av
  andre og brukt til svindel mot kundene deres.

- [ ] Skal noen andre ta over appen? Skriv en overlevering i `DRIFT.md`: hva
  appen gjør, hvor alt ligger, og hvem som har hatt tilgang.

## Prompter du kan lære av {.protip}

Bytt ut det som står i klammer. Legg aldri inn navn, passord eller andres
personopplysninger. Se hvorfor promptene virker, og lag dine egne.

- **Svar på en klage:**

  ```
  Her er en klage fra en kunde, uten navn: [lim inn]. Skriv et kort og
  vennlig svar i fire deler: takk, hva som skjedde, hva vi gjør nå, og
  hva vi gjør for at det ikke skjer igjen. Ikke lov noe vi ikke kan
  holde.
  ```

- **Øv på en vanskelig kunde:**

  ```
  Spill en kunde som er sint fordi bestillingen forsvant. Jeg svarer
  som kundeservice. Etterpå gir du meg tilbakemelding på tonen og
  løsningen.
  ```

- **Lag driftsrutinen:**

  ```
  Lag en DRIFT.md ut fra koden og PLAN.md: hvor appen er publisert,
  hvor dataene ligger, hvilke kontoer den trenger, og hvordan vi går
  tilbake til forrige versjon. Spør meg om det du ikke finner.
  ```

- **Legg ned trygt:**

  ```
  Lag en sjekkliste for å legge ned appen trygt. Finn alle steder i
  koden og oppsettet der det ligger data, nøkler eller kontoer som må
  slettes. Ikke slett noe selv.
  ```

## Test deg selv {.flag}

- [ ] Kan en annen i gruppa svare en kunde og publisere en endring bare ved å
  lese `DRIFT.md`?

## Lagre {.save}

Lag en commit med meldingen `Rutiner for drift`.


## Utfordring {.challenge}

Lag en side med ofte stilte spørsmål ut fra loggen over henvendelser. Blir det
færre spørsmål etterpå?
