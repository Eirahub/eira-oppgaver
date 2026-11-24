---
title: Lagre data trygt
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

Mange appar må hugse noko: bestillingar, påmeldingar eller brukarar. Kvar dataa
blir lagra, bestemmer kven som ser dei, kva det kostar, og kva som kan gå gale.
Mange appar som er laga med KI på ei helg, blir hacka fordi dataa ligg ope. I
denne oppgåva vel du kvar dataa skal bu, og sjekkar at berre dei rette får
tilgang.

![Illustrasjon av tre stader å lagre data: nettlesaren, eit rekneark og ein
database med hengelås, med ein nøkkel som ligg synleg i nettlesaren som
åtvaring](lagre_nn.png)

## Før du startar {.tip}

Du treng ein MVP som verkar, frå [Bygg MVP-en](../bygg_mvp/bygg_mvp_nn), og du
bør vite kva risikonivå appen har, frå [Tryggleik og
risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko_nn). Lagrar appen ingenting
som andre skal sjå, kan du hoppe over denne oppgåva.


# Steg 1: Kvar skal dataa bu? {.activity}

| Kvar | Kven ser dataa | Passar til | Risikonivå |
|---|---|---|---|
| I nettlesaren | Berre den som bruker maskina | Prøveversjon, hugseliste, spel | 1 |
| I eit skjema eller rekneark | De som driv bedrifta | Bestilling, påmelding, tilbakemelding | 3 |
| I ein database med innlogging | Kvar brukar ser sitt, de ser alt | Kundeklubb, booking med eigne sider | 4 |

## Sjekkliste {.check}

- [ ] Sjå i `PLAN.md` under **Data** og **Lagring**. Kven må sjå dataa for at
  appen skal verke?

- [ ] Vel den enklaste staden som løyser det. Skriv valet og kvifor i
  `PLAN.md`.

- [ ] Spør KI-en kvar appen lagrar data i dag:

  ```
  Kvar lagrar appen data no? List opp kvar ting som blir lagra, kvar, og
  kven som kan sjå det. Ikkje endre noko.
  ```


# Steg 2: Data i nettlesaren {.activity}

Mange MVP-ar lagrar data i nettlesaren, i noko som heiter **localStorage**. Det
er enkelt og gratis, men dataa finst berre på den eine maskina.

## Sjekkliste {.check}

- [ ] Opne appen, trykk **F12**, og finn **Application** (eller **Lagring**) og
  **Local Storage**. Ser du dataa appen har lagra?

- [ ] Bestill noko på mobilen. Kjem det fram på PC-en? Kvifor ikkje?

- [ ] Er nettlesaren nok for appen dykkar? Då er du ferdig med denne oppgåva
  etter steg 5.


# Steg 3: Ein felles stad {.activity}

Skal bedrifta sjå bestillingane frå alle kundane, må dataa sendast til ein
felles stad. For ei elevbedrift er eit skjema eller rekneark ofte nok.

## Sjekkliste {.check}

- [ ] Vel eit skjema- eller reknearkverktøy, gjerne gjennom kontoen til skulen,
  til dømes Microsoft Forms eller Google Skjema. Sjekk vilkåra.

- [ ] Be KI-en om hjelp:

  ```
  Appen skal sende bestillinga til [verktøy] i staden for å lagre ho i
  nettlesaren. Lag ein plan først. Forklar kva som skjer med dataa, og
  kven som kan sjå dei.
  ```

- [ ] Del reknearket berre med dei i bedrifta som treng det.

- [ ] Test med oppdikta data til alt verkar. Legg testen til i `TEST.md`.


# Steg 4: Når de treng ein database {.activity}

Treng brukarane å logge inn og sjå sine eigne data, treng de ein **database**
og ein **backend**. Det finst tenester som gir dykk begge delar, til dømes
Supabase og Firebase. Dette er risikonivå 4, med mykje meir ansvar.

## Sjekkliste {.check}

- [ ] Treng de verkeleg innlogging? Kan eit skjema løyse det same? Vel det
  enklaste.

- [ ] Vel de ein database: Sjekk alder, pris, kvar dataa blir lagra (helst i
  EU eller EØS), og om de kan bruke han til bedrifta.

- [ ] Be KI-en forklare før han byggjer:

  ```
  Forklar korleis innlogging og database vil verke i appen, kven som kan
  lese og endre kva, og kva vi må gjere for at kvar brukar berre ser sine
  eigne data. Ikkje skriv kode enno.
  ```

- [ ] Har appen ekte brukarar med innlogging, må ein vaksen stå som ansvarleg.


# Steg 5: Fella: alt i nettlesaren er offentleg {.activity}

Alt som blir sendt til nettlesaren, kan alle lese: koden, nøklar og det appen
hentar. Den vanlegaste feilen i appar laga med KI er at databasen er open, og at
det einaste vernet er at knappen ikkje blir vist.

## Sjekkliste {.check}

- [ ] Trykk **F12** og sjå under **Sources**. Finn du nøklar, passord eller
  adresser til databasar i koden? Då kan alle andre òg finne dei.

- [ ] Løynde nøklar skal aldri liggje i koden som blir sendt til nettlesaren.
  Nøklar som er laga for å vere offentlege, er berre trygge når databasen har
  **tilgangsreglar** som bestemmer kven som kan lese og endre kva.

- [ ] Be om ein sjekk:

  ```
  Sjekk om nokon kan lese, endre eller slette data dei ikkje skal ha
  tilgang til, til dømes ved å bruke nøkkelen frå nettlesaren direkte.
  Sjekk tilgangsreglane i databasen. Ikkje endre noko før du har forklart.
  ```

- [ ] Prøv sjølv i din eigen app: Logg inn som éin testbrukar. Kan du sjå dataa
  til ein annan testbrukar?

- [ ] Sjekk at appen kontrollerer det brukaren sender inn, òg på tenaren, ikkje
  berre i skjemaet.

## Tips {.protip}

Test berre din eigen app. Å prøve dette på appane til andre er ikkje lov, sjå
[Tryggleik og risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko_nn).

## Prompter du kan lære av {.protip}

Byt ut det som står i klammer. Legg aldri inn namn, passord eller
personopplysningar om andre. Sjå kvifor promptane verkar, og lag dine eigne.

- **Samanlikn løysingar:**

  ```
  Appen skal lagre [kva]. Samanlikn nettlesar, rekneark og database for
  oss: kva kostar det, kven ser dataa, og kva kan gå gale?
  ```

- **Forstå tilgangsreglar:**

  ```
  Forklar tilgangsreglar i ein database med eit døme frå appen min.
  Kva skjer viss vi gløymer dei?
  ```

- **Tenk som ein åtakar:**

  ```
  Du er ein erfaren pentestar. Korleis kunne nokon fått tak i dataa i
  appen min? Gå gjennom koden og oppsettet. Ikkje endre noko.
  ```

## Test deg sjølv {.flag}

- [ ] Kan du forklare kven som kan sjå dataa i appen din, og kvifor?

- [ ] Kan du forklare kvifor ein knapp som ikkje blir vist, ikkje er vern?

## Lagre {.save}

Lag ein commit med meldinga `Lagring av data`.


## Utfordring {.challenge}

Kor lenge treng de dataa? Lag ein regel for når dei blir sletta, og be KI-en
lage ein enkel måte å slette gamle bestillingar på.
