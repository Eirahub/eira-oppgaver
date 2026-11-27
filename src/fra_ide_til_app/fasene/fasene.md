---
title: Fra idé til produksjon
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En app blir ikke til på én dag. Den går gjennom flere **faser** (phases), fra
du lurer på om problemet finnes, til appen er i bruk hos ekte kunder. Det
kalles å være i produksjon (production). Hver fase har et mål, noe du lager,
og noen **ferdigkriterier** (exit criteria) som sier når du kan gå videre.

I denne oppgaven får du oversikten over hele kurset. Du trenger ingen konto og
ingen app. Kom tilbake hit når du lurer på hvor i prosjektet du er.


# Steg 1: Fasene {.activity}

Tabellen viser fasene i kurset, i rekkefølge. Oppgavene som hører til, står i
siste kolonne. Den siste oppgaven i hver fase slutter med en sjekkliste,
**Ferdig med fasen**, med ferdigkriteriene.

| Fase | Kjennetegn | Du lager | Ferdig når | Oppgaver |
|---|---|---|---|---|
| **Behov** (discovery) | Du vet ennå ikke om problemet finnes. Du spør og observerer, men bygger ingenting | Intervjunotater og en problemsetning | 3 kunder er intervjuet. Problemsetningen bruker deres ord, og alle tre kjenner seg igjen | [Finn behovet](../finn_behovet/finn_behovet) |
| **Idé** (concept) | Du velger én løsning og beskriver hvem den er for og hva den gir | Kundereise, jobb-setning, verdiforslag og forretningsmodell | Verdiforslag og forretningsmodell er skrevet. Alle tre kundene har hørt verdiforslaget, og minst én sier «Det hadde jeg brukt» | [Forretningsidéen](../forretningsideen/forretningsideen) |
| **Plan** (definition) | Du bestemmer hva som er med. Arbeidet deles i epos (epic), funksjoner (feature) og brukerhistorier (user story) | `PLAN.md` og en prosjekttavle (project board) med saker (issues) | MVP-en (oftest maks 3 historier) har «Ferdig når» og er skilt fra Senere og Ikke med. Rollene er fordelt. Historiene ligger som saker i en milepæl (milestone) | [Planen](../planen/planen) |
| **Design og prototype** (prototype) | Skjermbilder uten ekte kode, som du tester raskt | Et design av alle MVP-skjermene | Hver MVP-historie kan gjøres i designet. Én kunde fra intervjuet har prøvd det, og endringene står i `PLAN.md` | [Design appen med KI](../design_i_stitch/design_i_stitch) |
| **MVP** (build) | Den minste appen som virker. Én historie om gangen | Appen, `CLAUDE.md` og `TEST.md` | Alle MVP-saker er lukket, `main` virker, og `TEST.md` er gått gjennom | [Kom i gang med en KI-kodeassistent](../kom_i_gang_claude_code/kom_i_gang_claude_code), [Bygg MVP-en](../bygg_mvp/bygg_mvp), [Gi appen et eget uttrykk](../eget_uttrykk/eget_uttrykk), [Test og kvalitet](../test_og_kvalitet/test_og_kvalitet), [Lagre data trygt](../lagre_data/lagre_data) |
| **Test med kunder** (alpha/beta) | Ekte kunder prøver appen på en lenke. Feil og ønsker blir nye saker | `RISIKO.md`, notater fra kundetesten og nye saker | Sjekken før publisering er gjort. 3 kunder har testet. Alt under Feil er rettet. En voksen har godkjent der det trengs | [Hvilken type app?](../typer_apper/typer_apper), [Sikkerhet og risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko), [Ansvar og personvern](../ansvar_og_personvern/ansvar_og_personvern), [Test med kunder](../test_med_kunder/test_med_kunder) |
| **Lansering** (release) | Appen er åpen for alle i målgruppen | Et versjonsmerke (tag), for eksempel `v1.0` | Versjonen er merket `v1.0`. Kontaktstedet står i appen. Du kan gå tilbake til forrige versjon | [Etter lansering](../etter_lansering/etter_lansering), første steg |
| **Drift** (operations) | Feil rettes og nye funksjoner kommer, én sak om gangen | `DRIFT.md` | `DRIFT.md` sier hvem som svarer og hvor raskt, hvordan dere oppdaterer, at sikkerhetskopien er testet, at tofaktor er på, og hva dere måler og betaler hver måned | [Etter lansering](../etter_lansering/etter_lansering) |
| **Avvikling** (retirement) | Appen stenges på en ryddig måte | En beskjed til kundene og en overlevering | Kundene har fått beskjed. Data er slettet, også kopier. Nøkler og domene er håndtert. Overleveringen er skrevet | [Etter lansering](../etter_lansering/etter_lansering), siste steg |

## Sjekkliste {.check}

- [ ] Finn fasen du er i nå. Har du ikke startet, er det **Behov**.

- [ ] Les ferdigkriteriene for fasen. Hva mangler før du kan gå videre?

## Tips {.tip}

Tallene i tabellen er et minimum for et skoleprosjekt. I en ekte bedrift
snakker man ofte med langt flere kunder.


# Steg 2: Ferdig med en fase, eller ferdig med en sak? {.activity}

Fra planen og utover deler du arbeidet i **saker** (issues). En sak er én ting
som skal gjøres, for eksempel én brukerhistorie. Det er to ulike ting å være
ferdig med:

- **Ferdig med en sak**: Saken følger **ferdig-definisjonen** (definition of
  done). Den er laget, testet, gått gjennom av en annen eller av deg selv i
  rollen som tester, og flettet inn i `main`. Da lukker du saken.
- **Ferdig med en fase**: Alle ferdigkriteriene for fasen er oppfylt. Det kan
  ta mange saker, og noen kriterier er ikke saker i det hele tatt, som at tre
  kunder har testet appen.

Alle sakene kan være lukket uten at fasen er ferdig. Har ingen kunder prøvd
appen, vet du ikke om den løser problemet.

## Sjekkliste {.check}

- [ ] Når du lager `PLAN.md` i Planen, skriver du ferdig-definisjonen der,
  for eksempel:

  ```markdown
  ## Ferdig-definisjon
  En sak er ferdig når:
  - alt under «Ferdig når» virker, også på mobil
  - koden er gått gjennom
  - den er flettet inn i main, og main virker
  ```


# Steg 3: Fasene i GitHub {.activity}

På GitHub kan hver fase bli en **milepæl** (milestone). Sakene for en fase
legger du i milepælen, og GitHub viser hvor mange prosent som er ferdig. Sakene
flytter du på en **prosjekttavle** (project board) med kolonnene `Todo`, `In
Progress` og `Done`.

Du lærer å lage saker, milepæler og tavle i [Planlegg med issues og
prosjekttavle](../../git/issues_og_prosjekt/issues_og_prosjekt). Du trenger
det først i [Planen](../planen/planen), siste steg.

## Sjekkliste {.check}

- [ ] Se på tabellen i steg 1. Hvilke faser har saker som passer i en
  milepæl? De første fasene, Behov og Idé, gjør du med penn og papir. Fra Plan
  og utover blir arbeidet saker.

## Har du ikke GitHub-konto? {.tip}

Du må være 13 år for å ha en konto på GitHub. Tavla kan også være et ark med
tre kolonner og lapper du flytter, eller en liste i `PLAN.md`.


# Steg 4: Tilbake til en tidligere fase {.activity}

Fasene går ikke alltid rett fram. Viser en test at noe du trodde var feil, går
du tilbake. Det er vanlig, og det er derfor du tester tidlig.

| Du oppdager at | Gå tilbake til |
|---|---|
| Ingen av kundene sier «Det hadde jeg brukt» | Behov eller Idé |
| Kunden klarer ikke å bestille i designet | Plan eller Design |
| Kundetesten viser at appen mangler noe viktig | Plan: lag en ny sak |
| Appen blir aldri brukt etter lansering | Behov |

## Sjekkliste {.check}

- [ ] Når du går tilbake: Skriv i `PLAN.md` hva du lærte og hva du endrer,
  under en overskrift `## Det vi har lært`.

## Test deg selv {.flag}

- [ ] Kan du si hvilken fase du er i, og hva som mangler før neste?

- [ ] Kan du forklare forskjellen på å være ferdig med en sak og ferdig med en
  fase?


## Utfordring {.challenge}

Tenk på en app eller tjeneste du har sluttet å bruke, eller som ble lagt ned.
Hvilken fase var den i da det skjedde? Fikk brukerne beskjed?
