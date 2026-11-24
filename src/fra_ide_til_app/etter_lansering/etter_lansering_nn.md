---
title: Etter lansering
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

Ein app er ikkje ferdig når han er publisert. Kundane stiller spørsmål, noko går
i stykke, og ein dag skal appen kanskje leggjast ned. Mange appar som er laga
med KI, blir gløymde etter lanseringa, og då blir dei ein risiko. I denne
oppgåva lagar du rutinar for kundeservice, oppdateringar og tryggleikskopi, og
ein plan for korleis appen blir avslutta.

![Illustrasjon av ein sirkel med fire ikon: kundeservice, oppdatering,
tryggleikskopi og avslutning, rundt ei fil som heiter DRIFT.md](drift_nn.png)

## Før du startar {.tip}

Appen bør vere testa med kundar, sjå [Test med
kundar](../test_med_kunder/test_med_kunder_nn). Oppgåva passar best når appen
skal brukast over tid, til dømes i ei ungdomsbedrift.


# Steg 1: Kundeservice og klagar {.activity}

Når kundane bruker appen, kjem spørsmåla: Kvifor kom ikkje stadfestinga? Kan eg
avbestille? Måten de svarar på, betyr like mykje for omdømet som sjølve appen.

## Sjekkliste {.check}

- [ ] Bestem kvar kundane skal ta kontakt, og skriv det i appen. Bruk ei
  e-postadresse eller eit skjema for bedrifta, ikkje ein privat konto.

- [ ] Bestem kven som svarar, og kor raskt. Skriv det i ei ny fil som heiter
  `DRIFT.md`.

- [ ] Skriv eit svar på ein tenkt klage. Svaret har fire delar:

  1. Takk for at kunden sa frå.
  2. Sei kva som skjedde, utan å skulde på andre.
  3. Sei kva de gjer no.
  4. Sei kva de gjer for at det ikkje skal skje igjen.

- [ ] Før ein logg over førespurnader, utan namn: dato, kva det galdt, og kva
  de gjorde. Mange like spørsmål betyr at appen bør endrast.

## Tips {.protip}

Kundar har rettar når dei kjøper noko, til dømes til å klage. Sjekk hos
Forbrukarrådet kva som gjeld for det de sel.


# Steg 2: Oppdater trygt {.activity}

Kvar endring kan øydeleggje noko som verka. Når ekte kundar bruker appen,
treng de ein fast rutine for endringar.

## Sjekkliste {.check}

- [ ] Skriv rutinen i `DRIFT.md`:

  1. Lag endringa på ei eiga grein i Git.
  2. Test dei viktigaste MVP-historiene, òg på mobil.
  3. Publiser.
  4. Sjekk at appen verkar etter publiseringa.
  5. Verkar han ikkje? Gå tilbake til førre versjon, sjå [Tilbake i
     tid](../../git/tidsreise/tidsreise).

- [ ] Før ein endringslogg: dato, kva som er endra, og kvifor.

- [ ] Bruker appen pakkar eller tenester frå andre? Sjekk ein gong i månaden om
  det finst tryggleiksoppdateringar.


# Steg 3: Tryggleikskopi og tilgang {.activity}

## Sjekkliste {.check}

- [ ] Kvar ligg dataa til appen? Lag ein tryggleikskopi, og prøv å hente han
  tilbake. Ein tryggleikskopi du aldri har prøvd, veit du ikkje om verkar.

- [ ] Tryggleikskopien inneheld ofte personopplysningar. Lagre han like trygt
  som originalen, og slett gamle kopiar.

- [ ] List opp alle kontoar appen treng: Git, publisering, domene, skjema og
  betaling. Kven har tilgang, og har alle tofaktor?

- [ ] Sluttar nokon i bedrifta? Fjern tilgangen deira, og byt passord og
  nøklar dei kjende til.

- [ ] Korleis får de vite at appen er nede? Bestem kven som sjekkar, og kor
  ofte. Skriv det i `DRIFT.md`.


# Steg 4: Følg med på måla {.activity}

## Sjekkliste {.check}

- [ ] Hent måla frå `PLAN.md`. Korleis kan de måle dei utan å samle meir data
  om kundane enn de treng?

- [ ] Sjå på måla ein gong i månaden. Går det rett veg? Viss ikkje, kva seier
  kundane?

- [ ] Kostar appen meir enn de rekna med? Samanlikn med kostnadene i `PLAN.md`.


# Steg 5: Avslutt appen skikkeleg {.activity}

Ungdomsbedrifter blir ofte avvikla når skuleåret er slutt. Ein app som berre
blir liggjande, kan lekkje data, koste pengar eller bli misbrukt av andre.

## Sjekkliste {.check}

- [ ] Sei frå til kundane i god tid, og fortel kva som skjer med opplysningane
  deira.

- [ ] Slett personopplysningar, òg i tryggleikskopiar, rekneark og e-post.

- [ ] Ta ned appen, og avslutt tenester som kostar pengar.

- [ ] Slett eller byt API-nøklar og passord.

- [ ] Bestem kva som skjer med domenet. Eit domene de slepper, kan bli kjøpt av
  andre og brukt til svindel mot kundane dykkar.

- [ ] Skal nokon andre ta over appen? Skriv ei overlevering i `DRIFT.md`: kva
  appen gjer, kvar alt ligg, og kven som har hatt tilgang.

## Prompter du kan lære av {.protip}

Byt ut det som står i klammer. Legg aldri inn namn, passord eller
personopplysningar om andre. Sjå kvifor promptane verkar, og lag dine eigne.

- **Svar på ein klage:**

  ```
  Her er ein klage frå ein kunde, utan namn: [lim inn]. Skriv eit kort
  og venleg svar i fire delar: takk, kva som skjedde, kva vi gjer no,
  og kva vi gjer for at det ikkje skjer igjen. Ikkje lov noko vi ikkje
  kan halde.
  ```

- **Øv på ein vanskeleg kunde:**

  ```
  Spel ein kunde som er sint fordi bestillinga forsvann. Eg svarar som
  kundeservice. Etterpå gir du meg tilbakemelding på tonen og
  løysinga.
  ```

- **Lag driftsrutinen:**

  ```
  Lag ei DRIFT.md ut frå koden og PLAN.md: kvar appen er publisert,
  kvar dataa ligg, kva kontoar han treng, og korleis vi går tilbake til
  førre versjon. Spør meg om det du ikkje finn.
  ```

- **Legg ned trygt:**

  ```
  Lag ei sjekkliste for å leggje ned appen trygt. Finn alle stader i
  koden og oppsettet der det ligg data, nøklar eller kontoar som må
  slettast. Ikkje slett noko sjølv.
  ```

## Test deg sjølv {.flag}

- [ ] Kan ein annan i gruppa svare ein kunde og publisere ei endring berre ved å
  lese `DRIFT.md`?

## Lagre {.save}

Lag ein commit med meldinga `Rutiner for drift`.


## Utfordring {.challenge}

Lag ei side med ofte stilte spørsmål ut frå loggen over førespurnader. Blir det
færre spørsmål etterpå?
