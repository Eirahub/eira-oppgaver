---
title: Tryggleik og risiko
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

Eit gratisspel som berre køyrer i nettlesaren, og ein nettbutikk med innlogging
og betaling, er begge appar. Men dei har heilt ulik risiko. Di meir appen veit
om folk, og di meir pengar det handlar om, di meir må du byggje og passe på. I
denne oppgåva lærer du skilnaden på frontend og backend, finn risikonivået til
appen din og lagar ei enkel risikovurdering.

![Illustrasjon av ei trapp med fem trinn, frå eit spel i nettlesaren nedst til
ein app med betaling øvst, med fleire hengelåsar di høgare trinnet
er](risiko_nn.png)

## «Laga på ei helg, hacka etter ei veke» {.tip}

På sosiale medium ser du ofte innlegg som «Eg vibecoda ein app på ei helg, no
tener eg pengar». Nokre veker seinare kjem neste innlegg: appen vart hacka. Det
er nesten alltid dei same feila:

- Ein løynd API-nøkkel låg i frontend. Nokon fann han og brukte han, og
  rekninga kom til eigaren.
- Databasen var open, så alle kunne lese alle data om brukarane.
- Betalte funksjonar vart låste opp ved å endre koden i nettlesaren.
- Ingen grense for kor mykje ein brukar kunne gjere, så robotar brukte opp
  kvoten på nokre timar.

KI-en bygde det eigaren bad om, raskt. Men ingen spurde kva som kunne gå gale.
Det er det du lærer i denne oppgåva.

## Før du startar {.tip}

Gjer [Kva type app?](../typer_apper/typer_apper_nn) først. Du treng òg
`PLAN.md` frå [Planen](../planen/planen_nn).


# Steg 1: Frontend og backend {.activity}

**Frontend** er den delen av appen som køyrer hos brukaren, i nettlesaren eller
på mobilen. **Backend** er den delen som køyrer på ein tenar du har ansvar for,
med database, innlogging og betaling.

Den viktigaste regelen: **Alt i frontend kan brukaren sjå og endre.** Trykk
**F12** på kva nettside som helst, og du ser koden. Difor:

- Løyndomar, som passord og API-nøklar, høyrer aldri heime i frontend.
- Sjekkar som betyr noko, som «er dette rett pris?» eller «har denne brukaren
  lov?», må gjerast i backend. Ein sjekk i frontend kan lurast.
- Har du ingen backend, har du heller ingen trygg stad å lagre data om andre.

## Sjekkliste {.check}

- [ ] Opne appen din i nettlesaren, trykk **F12** og finn koden. Kan du sjå alt
  du har skrive?

- [ ] Har appen ein backend i dag? Kva gjer han?


# Steg 2: Fem risikonivå {.activity}

| Nivå | Døme | Treng | Tryggleik | Personvern |
|---|---|---|---|---|
| **1. Berre lokalt** | Gratisspel, kalkulator, hugseliste i nettlesaren | Berre frontend | Lite. Pass på skript frå andre, som reklame og sporing | Ingen data forlèt maskina, viss du ikkje legg inn sporing |
| **2. Open nettside** | Info om ungdomsbedrifta, meny, prisliste | Frontend og publisering | Sikre kontoen som publiserer (tofaktor). Ingen løyndomar i koden | Lite, så lenge du ikkje samlar inn noko |
| **3. Samlar inn data** | Bestilling, påmelding, tilbakemelding | Eit skjema, rekneark eller enkel backend | Kven har tilgang til dataa? Stopp spam og robotar | Personopplysningar: sei kva du samlar og kvifor, lagre trygt, slett når det ikkje trengst |
| **4. Innlogging og database** | Kundeklubb, booking med eigne sider, SaaS | Backend, database, innloggingsteneste | Passord, tilgangsstyring, tryggleikskopi, oppdateringar | Innsyn, retting og sletting for kvar brukar. Brot må meldast |
| **5. Betaling og sensitive data** | Nettbutikk, abonnement, helseopplysningar | Backend og betalingsteneste | Ta aldri imot kortdata sjølv. Bruk ei betalingsteneste | Strengare krav. Kjøpsreglar, kvittering og rekneskap |

## Tips {.protip}

Kvart nivå oppover gir meir arbeid, fleire reglar og meir ansvar. Lag appen på
det lågaste nivået som løyser problemet. Treng du eigentleg innlogging, eller
held det med eit skjema?


# Steg 3: Finn nivået til appen din {.activity}

## Sjekkliste {.check}

- [ ] Kva nivå er MVP-en din på? Skriv det i `PLAN.md` under **Krav**.

- [ ] Kva nivå blir appen på viss han blir ein suksess? Kva må de då lære,
  byggje eller betale for?

- [ ] Kan de senke nivået? Kan til dømes betaling skje på staden, eller
  bestilling gå gjennom eit skjema i staden for eigne kontoar?


# Steg 4: Risikovurdering {.activity}

Ei **risikovurdering** er ei liste over kva som kan gå gale, kor sannsynleg det
er, kor ille det blir, og kva du gjer for å hindre det.

## Sjekkliste {.check}

- [ ] Skriv minst fem ting som kan gå gale med appen din. Tenk på:

  - nokon får tak i kontoen de publiserer eller lagrar data med
  - ein løynd nøkkel hamnar i koden
  - feil person ser kundedata
  - nokon fyller skjemaet med søppel, eller robotar brukar opp kvoten
  - ein brukar endrar koden i nettlesaren for å få noko gratis
  - appen eller tenesta de bruker, sluttar å verke
  - KI-en har laga kode med eit tryggleikshol

- [ ] Gi kvar ting ein poengsum frå 1 til 3 for **sannsyn** og for
  **konsekvens**. Gong dei saman.

  | Kva kan skje | Sannsyn | Konsekvens | Risiko | Tiltak |
  |---|---|---|---|---|
  | Nokon får tak i kontoen | 2 | 3 | 6 | Tofaktor og sterkt passord |

- [ ] Skriv eit tiltak for alt som får 4 eller meir. Tiltak kan vere tekniske
  (tofaktor), manuelle (sjekke bestillingar kvar dag) eller administrative
  (bestemme kven som har tilgang).


# Steg 5: Be KI-en om ein tryggleiksgjennomgang {.activity}

KI-en kan hjelpe deg å finne hol, men han finn ikkje alt, og han kan ta feil.

## Sjekkliste {.check}

- [ ] Skriv:

  ```
  Appen er på risikonivå [nivå] (sjå PLAN.md). Gå gjennom koden og leit
  etter tryggleiks- og personvernproblem: løyndomar i koden, data som kan
  lesast av feil person, sjekkar som berre skjer i frontend, og skript frå
  andre som samlar inn data. Forklar kvart funn enkelt, og ikkje endre noko
  før eg har sagt ja.
  ```

- [ ] Les funna. Skjønar du kvart av dei? Spør om det du ikkje skjønar.

- [ ] Rett dei viktigaste, og legg dei inn i risikovurderinga.

## Test deg sjølv {.flag}

- [ ] Kan du forklare ein medelev kvifor ein sjekk i frontend ikkje er nok?

- [ ] Kan du seie kva nivå appen din er på, og kva det betyr for dykk?

## Lagre {.save}

Lagre risikovurderinga i prosjektmappa som `RISIKO.md`, og lag ein commit.


## Utfordring {.challenge}

Mange åtak på små bedrifter startar med ein falsk e-post eller ei melding som
lurer nokon til å gi frå seg passordet. Lag tre reglar for ungdomsbedrifta som
gjer det vanskelegare.
