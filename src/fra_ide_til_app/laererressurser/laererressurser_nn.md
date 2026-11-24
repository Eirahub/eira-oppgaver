---
title: Lærarressursar - Plan, vurdering og døme
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Om ressursane {.intro}

Her finn du ein plan for eit semester, ein vurderingsrubrikk, døme på svar for
Sykkelvasken og tips til deg som ikkje kan teknikken sjølv. Les òg
[Rettleiing for lærarar](../veiledning_for_laerere/veiledning_for_laerere_nn)
om risiko og ansvar.


# Plan for eit semester {.activity}

Planen tek utgangspunkt i éi økt på 90 minutt i veka, pluss litt arbeid mellom
øktene. Heile kurset tek 20 til 30 timar.

| Veke | Oppgåve | Merk |
|---|---|---|
| 1 | Finn behovet, steg 1 | Vel problem og kundegruppe |
| 2 | Finn behovet, steg 2 og 3 | Intervjua blir gjorde mellom øktene |
| 3 | Forretningsideen | |
| 4 og 5 | Planen | Roller, antakingar og grove kostnader |
| 6 | Design appen med KI | Kan gjerast på papir |
| 7 | Kom i gang med ein KI-kodeassistent | Set av tid til kontoar og installasjon |
| 8 og 9 | Bygg MVP-en | Ofte meir tid. Bruk lekser eller verkstad |
| 10 | Test og kvalitet | Gjerne i par: éin byggjer, éin testar |
| 11 | Gi appen eit eige uttrykk | |
| 12 | Kva type app? | |
| 13 | Tryggleik og risiko | |
| 14 | Lagre data trygt | Hopp over når appen ikkje lagrar data som andre skal sjå |
| 15 | Ansvar og personvern | |
| 16 | Test med kundar, steg 1 til 3 | Kundetestane blir gjorde mellom øktene |
| 17 | Test med kundar, steg 4 og 5 | Neste versjon og pitch |
| 18 | Etter lansering | Gjerne igjen når bedrifta blir avvikla |

**Kort variant utan teknikk (5 veker).** Passar i sal, service og reiseliv når
de ikkje skal byggje appen: Finn behovet, Forretningsideen, Planen (utan steg
4), Kva type app? og Ansvar og personvern, steg 3 og 6. Avslutt med ein pitch
av ideen.

**Kva ein kan hoppe over.** Kurssida har ein tabell over kva steg elevane kan
hoppe over ut frå risikonivået til appen.


# Vurderingsrubrikk {.activity}

Vurder prosessen, ikkje berre appen. KI kan lage ein app som ser bra ut, utan
at eleven har lært noko.

| Kriterium | Låg måloppnåing | Middels måloppnåing | Høg måloppnåing |
|---|---|---|---|
| Behov og kundar | Problemet er gjetta. Få eller ingen intervju | Tre intervju og ei problemsetning som byggjer på dei | Problemsetning og jobbsetning med orda til kundane. Antakingar er lista og testa |
| Forretningsidé og verdi | Ideen er skildra, men ikkje kven han er for | Jobben er vurdert. Verdiforslag og forretningsmodell er skildra | Jobben er viktig, vanskeleg og kjem igjen, med prov frå intervjua. Forretningsmodellen passar til jobben, med kostnader og alternativ |
| Plan | `PLAN.md` manglar delar | `PLAN.md` er fylt ut, med MVP og ting som ikkje er med | Mål, antakingar og akseptansekriterium heng saman. MVP-en er så lita som mogleg |
| Arbeid med KI | Kopierer svar utan å forstå dei | Gir tydelege promptar og kan forklare det meste av koden | Bruker plan, grenser og metapromptar, og kan forklare feil KI-en gjorde |
| Kvalitet og testing | Appen er ikkje testa | Historiene er testa, òg på mobil | Testa med kundar, universell utforming og rutinar for endringar |
| Tryggleik og personvern | Inga risikovurdering | `RISIKO.md` og personvernerklæring der det trengst | Tiltak for alle store risikoar, sjekk før publisering og plan for sletting |
| Presentasjon og refleksjon | Pitchen manglar delar | Pitch med alle fem delane | Pitchen viser prov frå kundane og reflekterer over etikk, lønnsemd og risiko |

Git-historikken, `PLAN.md`, `RISIKO.md` og `DRIFT.md` er gode kjelder til
vurdering. Be eleven forklare ein del av koden munnleg.


# Døme på svar: Sykkelvasken {.activity}

Svara viser kva som er godt nok. Svara til elevane vil sjå annleis ut.

## PLAN.md {.check}

```markdown
# Vaskeplan

## Problemet
Elevar som vil ha vaska sykkelen, veit ikkje når Sykkelvasken har ledig
tid, fordi bestillingar kjem på Snap og i friminutta.

## Jobbsetning
Når eg vil ha vaska sykkelen, vil eg vite når det er ledig, så eg
slepp å møte opp til inkje.

## Verdiforslag
For elevar som vil ha vaska sykkelen, er Vaskeplan ei nettside som
viser ledige tider og tek imot bestilling. I motsetnad til å møte opp
og håpe, kan dei velje tid på ti sekund.

## Mål
- 20 bestillingar via Vaskeplan den første månaden
- Ingen dobbeltbestillingar

## Antakingar vi må teste
- Vi trur at kundane vil bestille på nett i staden for på Snap. Vi
  veit det når halvparten av bestillingane kjem via Vaskeplan.
- Vi trur at førenamn er nok til å finne rett kunde. Vi veit det når
  ingen bestillingar blir bytte om på to veker.

## Brukarar
- Kunde: elev som vil ha vaska sykkelen
- Vi som driv: tre elevar i Sykkelvasken

## MVP
- Som kunde vil eg sjå ledige tider, så eg slepp å møte opp til
  inkje.
  Ferdig når: Gitt at 12:30 er ledig, når eg opnar sida, så ser eg
  12:30.
- Som kunde vil eg bestille ei tid med førenamn og sykkeltype.
  Ferdig når: Gitt at eg har valt ei tid, når eg bestiller, så er
  tida ikkje lenger ledig.
- Som vaskar vil eg sjå bestillingane i dag, så vi veit kven som kjem.

## Seinare
- Påminning dagen før

## Ikkje med
- Betaling, innlogging, chat

## Data
- tid, førenamn, sykkeltype (førenamn er ei personopplysning)

## Lagring
Eit skjema og rekneark gjennom kontoen til skulen, fordi alle i
bedrifta må sjå dei same bestillingane.

## Kostnad (grovt)
Gratis verktøy og publisering. Om lag 2 timar i veka til drift.

## Roller
- Produktleiar og sal: Elev A
- Promptskrivar og testar: Elev B
- Tryggleik, drift og personvern: Elev C

## Krav
- Norsk språk
- Fungerer på mobil
- Lett å lese: god kontrast og store knappar
```

## RISIKO.md {.check}

| Kva kan skje | Sannsyn | Konsekvens | Risiko | Tiltak |
|---|---|---|---|---|
| Nokon får tak i kontoen med reknearket | 2 | 3 | 6 | Tofaktor. Berre dei tre i bedrifta har tilgang |
| Robotar fyller skjemaet med søppel | 2 | 2 | 4 | Enkel sperre i skjemaet. Sjekk bestillingar kvar dag |
| Ein annan elev bestiller i namnet til andre | 2 | 1 | 2 | Godteke. Avbestill ved tvil |
| Bestillingar blir liggjande etter at bedrifta er avvikla | 2 | 2 | 4 | Slett reknearket i juni. Står i `DRIFT.md` |

Risikonivå: 3, samlar inn data.

## Verdiforslag og pitch {.check}

Sjå døma i [Forretningsideen](../forretningsideen/forretningsideen_nn). Ein god
pitch for Sykkelvasken viser at halvparten av bestillingane kom via Vaskeplan
etter to veker, og at ingen møtte opp til inkje.


# Når du ikkje kan teknikken sjølv {.activity}

Du treng ikkje kunne programmere for å bruke kurset. Del 1 og mykje av del 3 er
sal, service og entreprenørskap.

## Sjekkliste {.check}

- [ ] Gjer oppgåva Kom i gang med ein KI-kodeassistent sjølv før kurset.

- [ ] Samarbeid med ein IT-lærar, eller ein kodeklubb, om del 2.

- [ ] La elevar som kan meir, ta rolla som seniorutviklar eller testar i
  gruppa.

- [ ] Elevane lærer mykje av promptane i kvar oppgåve. Be dei bruke promptane
  som forklarer, ikkje berre dei som byggjer.

- [ ] Vurder det du kan vurdere: behovet, planen, risikoen, kundetestane og
  korleis eleven forklarer arbeidet sitt.
