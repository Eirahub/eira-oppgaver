---
title: Frå idé til produksjon
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

Ein app blir ikkje til på éin dag. Han går gjennom fleire **fasar** (phases),
frå du lurer på om problemet finst, til appen er i bruk hos ekte kundar. Det
blir kalla å vere i produksjon (production). Kvar fase har eit mål, noko du
lagar, og nokre **ferdigkriterium** (exit criteria) som seier når du kan gå
vidare.

I denne oppgåva får du oversikta over heile kurset. Du treng ingen konto og
ingen app. Kom tilbake hit når du lurer på kvar i prosjektet du er.


# Steg 1: Fasane {.activity}

Tabellen viser fasane i kurset, i rekkjefølgje. Oppgåvene som høyrer til, står
i siste kolonne. Den siste oppgåva i kvar fase sluttar med ei sjekkliste,
**Ferdig med fasen**, med ferdigkriteria.

| Fase | Kjenneteikn | Du lagar | Ferdig når | Oppgåver |
|---|---|---|---|---|
| **Behov** (discovery) | Du veit enno ikkje om problemet finst. Du spør og observerer, men byggjer ingenting | Intervjunotat og ei problemsetning | 3 kundar er intervjua. Problemsetninga bruker orda deira, og alle tre kjenner seg att | [Finn behovet](../finn_behovet/finn_behovet_nn) |
| **Idé** (concept) | Du vel éi løysing og skildrar kven ho er for og kva ho gir | Kundereise, jobbsetning, verdiforslag og forretningsmodell | Verdiforslag og forretningsmodell er skrivne. Alle tre kundane har høyrt verdiforslaget, og minst éin seier «Det hadde eg brukt» | [Forretningsideen](../forretningsideen/forretningsideen_nn) |
| **Plan** (definition) | Du bestemmer kva som er med. Arbeidet blir delt i epos (epic), funksjonar (feature) og brukarhistorier (user story) | `PLAN.md` og ei prosjekttavle (project board) med saker (issues) | MVP-en (oftast maks 3 historier) har «Ferdig når» og er skild frå Seinare og Ikkje med. Rollene er fordelte. Historiene ligg som saker i ein milepæl (milestone) | [Planen](../planen/planen_nn) |
| **Design og prototype** (prototype) | Skjermbilete utan ekte kode, som du testar raskt | Eit design av alle MVP-skjermane | Kvar MVP-historie kan gjerast i designet. Éin kunde frå intervjuet har prøvd det, og endringane står i `PLAN.md` | [Design appen med KI](../design_i_stitch/design_i_stitch_nn) |
| **MVP** (build) | Den minste appen som verkar. Éi historie om gongen | Appen, `CLAUDE.md` og `TEST.md` | Alle MVP-saker er lukka, `main` verkar, og `TEST.md` er gått gjennom | [Kom i gang med ein KI-kodeassistent](../kom_i_gang_claude_code/kom_i_gang_claude_code_nn), [Bygg MVP-en](../bygg_mvp/bygg_mvp_nn), [Gi appen eit eige uttrykk](../eget_uttrykk/eget_uttrykk_nn), [Test og kvalitet](../test_og_kvalitet/test_og_kvalitet_nn), [Lagre data trygt](../lagre_data/lagre_data_nn) |
| **Test med kundar** (alpha/beta) | Ekte kundar prøver appen på ei lenke. Feil og ønske blir nye saker | `RISIKO.md`, notat frå kundetesten og nye saker | Sjekken før publisering er gjord. 3 kundar har testa. Alt under Feil er retta. Ein vaksen har godkjent der det trengst | [Kva type app?](../typer_apper/typer_apper_nn), [Tryggleik og risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko_nn), [Ansvar og personvern](../ansvar_og_personvern/ansvar_og_personvern_nn), [Test med kundar](../test_med_kunder/test_med_kunder_nn) |
| **Lansering** (release) | Appen er open for alle i målgruppa | Eit versjonsmerke (tag), til dømes `v1.0` | Versjonen er merkt `v1.0`. Kontaktstaden står i appen. Du kan gå tilbake til førre versjon | [Etter lansering](../etter_lansering/etter_lansering_nn), første steg |
| **Drift** (operations) | Feil blir retta og nye funksjonar kjem, éi sak om gongen | `DRIFT.md` | `DRIFT.md` seier kven som svarar og kor raskt, korleis de oppdaterer, at tryggleikskopien er testa, at tofaktor er på, og kva de måler og betaler kvar månad | [Etter lansering](../etter_lansering/etter_lansering_nn) |
| **Avvikling** (retirement) | Appen blir stengd på ein ryddig måte | Ein beskjed til kundane og ei overlevering | Kundane har fått beskjed. Data er sletta, òg kopiar. Nøklar og domene er handterte. Overleveringa er skriven | [Etter lansering](../etter_lansering/etter_lansering_nn), siste steg |

## Sjekkliste {.check}

- [ ] Finn fasen du er i no. Har du ikkje starta, er det **Behov**.

- [ ] Les ferdigkriteria for fasen. Kva manglar før du kan gå vidare?

## Tips {.tip}

Tala i tabellen er eit minimum for eit skuleprosjekt. I ei ekte bedrift snakkar
ein ofte med langt fleire kundar.


# Steg 2: Ferdig med ein fase, eller ferdig med ei sak? {.activity}

Frå planen og utover deler du arbeidet i **saker** (issues). Ei sak er éin ting
som skal gjerast, til dømes éi brukarhistorie. Det er to ulike ting å vere
ferdig med:

- **Ferdig med ei sak**: Saka følgjer **ferdigdefinisjonen** (definition of
  done). Ho er laga, testa, gått gjennom av ein annan eller av deg sjølv i
  rolla som testar, og fletta inn i `main`. Då lukkar du saka.
- **Ferdig med ein fase**: Alle ferdigkriteria for fasen er oppfylte. Det kan
  ta mange saker, og nokre kriterium er ikkje saker i det heile, som at tre
  kundar har testa appen.

Alle sakene kan vere lukka utan at fasen er ferdig. Har ingen kundar prøvd
appen, veit du ikkje om han løyser problemet.

## Sjekkliste {.check}

- [ ] Når du lagar `PLAN.md` i Planen, skriv du ferdigdefinisjonen der, til
  dømes:

  ```markdown
  ## Ferdigdefinisjon
  Ei sak er ferdig når:
  - alt under «Ferdig når» verkar, òg på mobil
  - koden er gått gjennom
  - ho er fletta inn i main, og main verkar
  ```


# Steg 3: Fasane i GitHub {.activity}

På GitHub kan kvar fase bli ein **milepæl** (milestone). Sakene for ein fase
legg du i milepælen, og GitHub viser kor mange prosent som er ferdig. Sakene
flyttar du på ei **prosjekttavle** (project board) med kolonnane `Todo`, `In
Progress` og `Done`.

Du lærer å lage saker, milepælar og tavle i [Planlegg med issues og
prosjekttavle](../../git/issues_og_prosjekt/issues_og_prosjekt). Du treng det
først i [Planen](../planen/planen_nn), siste steg.

## Sjekkliste {.check}

- [ ] Sjå på tabellen i steg 1. Kva fasar har saker som passar i ein milepæl?
  Dei første fasane, Behov og Idé, gjer du med penn og papir. Frå Plan og
  utover blir arbeidet saker.

## Har du ikkje GitHub-konto? {.tip}

Du må vere 13 år for å ha ein konto på GitHub. Tavla kan òg vere eit ark med
tre kolonnar og lappar du flyttar, eller ei liste i `PLAN.md`.


# Steg 4: Tilbake til ein tidlegare fase {.activity}

Fasane går ikkje alltid rett fram. Viser ein test at noko du trudde, var feil,
går du tilbake. Det er vanleg, og det er difor du testar tidleg.

| Du oppdagar at | Gå tilbake til |
|---|---|
| Ingen av kundane seier «Det hadde eg brukt» | Behov eller Idé |
| Kunden klarer ikkje å bestille i designet | Plan eller Design |
| Kundetesten viser at appen manglar noko viktig | Plan: lag ei ny sak |
| Appen blir aldri brukt etter lansering | Behov |

## Sjekkliste {.check}

- [ ] Når du går tilbake: Skriv i `PLAN.md` kva du lærte og kva du endrar,
  under ei overskrift `## Det vi har lært`.

## Test deg sjølv {.flag}

- [ ] Kan du seie kva fase du er i, og kva som manglar før neste?

- [ ] Kan du forklare skilnaden på å vere ferdig med ei sak og ferdig med ein
  fase?


## Utfordring {.challenge}

Tenk på ein app eller ei teneste du har slutta å bruke, eller som vart lagd
ned. Kva fase var han i då det skjedde? Fekk brukarane beskjed?
