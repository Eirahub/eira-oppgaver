---
title: Lærerressurser - Plan, vurdering og eksempler
author: Tor Einar Enne
language: nb
---


# Om ressursene {.intro}

Her finner du en plan for et semester, en vurderingsrubrikk, eksempelsvar for
Sykkelvasken og tips til deg som ikke kan teknikken selv. Les også
[Veiledning for lærere](../veiledning_for_laerere/veiledning_for_laerere) om
risiko og ansvar.


# Plan for et semester {.activity}

Planen tar utgangspunkt i én økt på 90 minutter i uka, pluss litt arbeid
mellom øktene. Hele kurset tar 20 til 30 timer.

| Uke | Oppgave | Merk |
|---|---|---|
| 1 | Finn behovet, steg 1 | Velg problem og kundegruppe |
| 2 | Finn behovet, steg 2 og 3 | Intervjuene gjøres mellom øktene |
| 3 | Forretningsidéen | |
| 4 og 5 | Planen | Roller, antakelser og grove kostnader |
| 6 | Design appen med KI | Kan gjøres på papir |
| 7 | Kom i gang med en KI-kodeassistent | Sett av tid til kontoer og installasjon |
| 8 og 9 | Bygg MVP-en | Ofte mer tid. Bruk lekser eller verksted |
| 10 | Test og kvalitet | Gjerne i par: én bygger, én tester |
| 11 | Gi appen et eget uttrykk | |
| 12 | Hvilken type app? | |
| 13 | Sikkerhet og risiko | |
| 14 | Lagre data trygt | Hopp over når appen ikke lagrer data som andre skal se |
| 15 | Ansvar og personvern | |
| 16 | Test med kunder, steg 1 til 3 | Kundetestene gjøres mellom øktene |
| 17 | Test med kunder, steg 4 og 5 | Neste versjon og pitch |
| 18 | Etter lansering | Gjerne igjen når bedriften avvikles |

**Kort variant uten teknikk (5 uker).** Passer i salg, service og reiseliv når
dere ikke skal bygge appen: Finn behovet, Forretningsidéen, Planen (uten steg
4), Hvilken type app? og Ansvar og personvern, steg 3 og 6. Avslutt med en
pitch av idéen.

**Hva man kan hoppe over.** Kurssiden har en tabell over hvilke steg elevene
kan hoppe over ut fra risikonivået til appen.


# Vurderingsrubrikk {.activity}

Vurder prosessen, ikke bare appen. KI kan lage en app som ser bra ut, uten at
eleven har lært noe.

| Kriterium | Lav måloppnåelse | Middels måloppnåelse | Høy måloppnåelse |
|---|---|---|---|
| Behov og kunder | Problemet er gjettet. Få eller ingen intervjuer | Tre intervjuer og en problemsetning som bygger på dem | Problemsetning og jobb-setning med kundenes egne ord. Antakelser er listet og testet |
| Forretningsidé og verdi | Idéen er beskrevet, men ikke hvem den er for | Verdiforslag og forretningsmodell er beskrevet | Kundeverdi og forretningsverdi er begrunnet, med kostnader og alternativer |
| Plan | `PLAN.md` mangler deler | `PLAN.md` er fylt ut, med MVP og ting som ikke er med | Mål, antakelser og akseptansekriterier henger sammen. MVP-en er så liten som mulig |
| Arbeid med KI | Kopierer svar uten å forstå dem | Gir tydelige prompter og kan forklare det meste av koden | Bruker plan, grenser og metaprompter, og kan forklare feil KI-en gjorde |
| Kvalitet og testing | Appen er ikke testet | Historiene er testet, også på mobil | Testet med kunder, universell utforming og rutiner for endringer |
| Sikkerhet og personvern | Ingen risikovurdering | `RISIKO.md` og personvernerklæring der det trengs | Tiltak for alle store risikoer, sjekk før publisering og plan for sletting |
| Presentasjon og refleksjon | Pitchen mangler deler | Pitch med alle fem delene | Pitchen viser bevis fra kundene og reflekterer over etikk, lønnsomhet og risiko |

Git-historikken, `PLAN.md`, `RISIKO.md` og `DRIFT.md` er gode kilder til
vurdering. Be eleven forklare en del av koden muntlig.


# Eksempelsvar: Sykkelvasken {.activity}

Svarene viser hva som er godt nok. Elevenes svar vil se annerledes ut.

## PLAN.md {.check}

```markdown
# Vaskeplan

## Problemet
Elever som vil ha vasket sykkelen, vet ikke når Sykkelvasken har ledig
tid, fordi bestillinger kommer på Snap og i friminuttene.

## Jobb-setning
Når jeg vil ha vasket sykkelen, vil jeg vite når det er ledig, så jeg
slipper å møte opp forgjeves.

## Verdiforslag
For elever som vil ha vasket sykkelen, er Vaskeplan en nettside som
viser ledige tider og tar imot bestilling. I motsetning til å møte opp
og håpe, kan de velge tid på ti sekunder.

## Mål
- 20 bestillinger via Vaskeplan den første måneden
- Ingen dobbeltbestillinger

## Antakelser vi må teste
- Vi tror at kundene vil bestille på nett i stedet for på Snap. Vi vet
  det når halvparten av bestillingene kommer via Vaskeplan.
- Vi tror at fornavn er nok til å finne riktig kunde. Vi vet det når
  ingen bestillinger blir byttet om på to uker.

## Brukere
- Kunde: elev som vil ha vasket sykkelen
- Vi som driver: tre elever i Sykkelvasken

## MVP
- Som kunde vil jeg se ledige tider, så jeg slipper å møte opp
  forgjeves.
  Ferdig når: Gitt at 12:30 er ledig, når jeg åpner siden, så ser jeg
  12:30.
- Som kunde vil jeg bestille en tid med fornavn og sykkeltype.
  Ferdig når: Gitt at jeg har valgt en tid, når jeg bestiller, så er
  tiden ikke lenger ledig.
- Som vasker vil jeg se dagens bestillinger, så vi vet hvem som kommer.

## Senere
- Påminnelse dagen før

## Ikke med
- Betaling, innlogging, chat

## Data
- tid, fornavn, sykkeltype (fornavn er en personopplysning)

## Lagring
Et skjema og regneark gjennom skolens konto, fordi alle i bedriften
må se de samme bestillingene.

## Kostnad (grovt)
Gratis verktøy og publisering. Omtrent 2 timer i uka til drift.

## Roller
- Produktleder og salg: Elev A
- Promptskriver og tester: Elev B
- Sikkerhet, drift og personvern: Elev C

## Krav
- Norsk språk
- Fungerer på mobil
- Lett å lese: god kontrast og store knapper
```

## RISIKO.md {.check}

| Hva kan skje | Sannsynlighet | Konsekvens | Risiko | Tiltak |
|---|---|---|---|---|
| Noen får tak i kontoen med regnearket | 2 | 3 | 6 | Tofaktor. Bare de tre i bedriften har tilgang |
| Roboter fyller skjemaet med søppel | 2 | 2 | 4 | Enkel sperre i skjemaet. Sjekk bestillinger hver dag |
| En annen elev bestiller i andres navn | 2 | 1 | 2 | Godtas. Avbestill ved tvil |
| Bestillinger blir liggende etter at bedriften er avviklet | 2 | 2 | 4 | Slett regnearket i juni. Står i `DRIFT.md` |

Risikonivå: 3, samler inn data.

## Verdiforslag og pitch {.check}

Se eksemplene i [Forretningsidéen](../forretningsideen/forretningsideen). En god
pitch for Sykkelvasken viser at halvparten av bestillingene kom via Vaskeplan
etter to uker, og at ingen møtte opp forgjeves.


# Når du ikke kan teknikken selv {.activity}

Du trenger ikke kunne programmere for å bruke kurset. Del 1 og mye av del 3 er
salg, service og entreprenørskap.

## Sjekkliste {.check}

- [ ] Gjør oppgaven Kom i gang med en KI-kodeassistent selv før kurset.

- [ ] Samarbeid med en IT-lærer, eller en kodeklubb, om del 2.

- [ ] La elever som kan mer, ta rollen som seniorutvikler eller tester i
  gruppa.

- [ ] Elevene lærer mye av promptene i hver oppgave. Be dem bruke promptene
  som forklarer, ikke bare de som bygger.

- [ ] Vurder det du kan vurdere: behovet, planen, risikoen, kundetestene og
  hvordan eleven forklarer arbeidet sitt.
