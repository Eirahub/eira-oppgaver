---
title: Veiledning for lærere - Risiko i kurset
author: Tor Einar Enne
language: nb
---


# Om veiledningen {.intro}

I dette kurset lager elevene ekte apper for ekte kunder, med verktøy som
endrer seg raskt. Det gir god læring, men også risiko for elevene, kundene og
skolen. Veiledningen går gjennom hva du bør tenke på før, under og etter
kurset, og hva du gjør hvis noe går galt.

Kurset lærer prinsipper, ikke bestemte verktøy. Elevene velger selv verktøy og
sjekker vilkår, alder og pris. Som lærer er din viktigste jobb å sørge for at
de faktisk gjør det, og at en voksen står som ansvarlig der det trengs.


# Slik er kurset bygd opp {.activity}

Kurset starter med [Fra idé til produksjon](../fasene/fasene), en oversikt over
fasene fra behov til avvikling. Den siste oppgaven i hver fase slutter med
ferdigkriteriene som sjekkliste (`Ferdig med fasen`). Bruk dem som punkter for
underveisvurdering, og si gjerne at det er vanlig å gå tilbake en fase.

- **Del 1, Fra behov til forretningsidé:** Uten konto og uten teknikk. Her
  fordeler elevene også rollene i gruppa (Planen, steg 6). GitHub-konto er
  valgfritt: prosjekttavla i Planen kan også lages på et ark.
- **Del 2, Bygg appen med KI:** Elevene bygger appen. Her trengs kontoer.
- **Del 3, Klar for ekte kunder:** Risiko, personvern og ansvar kommer før
  kundene får prøve appen. Test med kunder starter med en sjekk før
  publisering. Etter lansering handler om drift og avvikling.

Kurssiden har en tabell over hva elevene kan hoppe over ut fra risikonivået til
appen. Plan for et semester, vurderingsrubrikk og eksempelsvar finner du i
[Lærerressurser](../laererressurser/laererressurser).


# Før kurset {.activity}

## Sjekkliste {.check}

- [ ] Sjekk hva skolen og skoleeier sier om KI-verktøy og skytjenester. Mange
  har egne regler eller en liste over godkjente tjenester. Noen krever en
  vurdering av personvern før en ny tjeneste tas i bruk.

- [ ] Avklar hvem som står som ansvarlig for kontoer når en elev er under
  aldersgrensen for et verktøy. Det kan være en forelder eller en lærer. Den
  ansvarlige må vite hva det innebærer.

- [ ] Informer foresatte om kurset: hvilke typer verktøy som kan bli brukt, at
  elevene kan trenge kontoer, og hva som eventuelt koster penger.

- [ ] Bestem hvem som betaler for betalte verktøy, og hvordan. Sett et tak for
  bruk der det er mulig.

- [ ] Prøv verktøyene selv, og gjør gjerne oppgavene før elevene.


# Risiko for elevene {.activity}

| Risiko | Hva kan skje | Tiltak |
|---|---|---|
| Personopplysninger i KI-verktøy | Elever limer inn navn, bilder eller kundedata | Regelen «ingen personopplysninger i prompter» fra første time. Bruk oppdiktede testdata |
| Lekkede nøkler og passord | En API-nøkkel havner i koden eller et åpent repo, og noen bruker den på elevens regning | Hemmeligheter aldri i koden. Sett et tak for bruk. Bytt nøkkelen med en gang hvis den lekker |
| Uventede kostnader | Abonnementer fornyes, eller bruk av KI eller server går over gratisgrensen | Ansvarlig voksen godkjenner alt som koster penger. Si opp etter kurset |
| Kontoer som blir overtatt | Svake passord eller falske e-poster | Tofaktor på alle kontoer som publiserer eller lagrer data |
| Offentlige repoer | Intervjunotater, navn eller nøkler blir synlige for alle | Gå gjennom repoet før det gjøres offentlig |
| KI-innhold og andres rettigheter | KI-laget innhold forveksles med ekte, eller ligner andres logo, figurer eller personer | Merk KI-innhold som kan misforstås. Bruk egne bilder. Sjekk vilkår og samtykke |
| Overtillit til KI | Eleven leverer noe som virker, men som de ikke forstår, eller som har sikkerhetshull | Krev at eleven kan forklare koden og hva KI-en gjorde feil |

## Tips {.tip}

Snakk om risiko som en del av faget, ikke som forbud. Elevene skal lære å
vurdere selv. Oppgaven [Sikkerhet og
risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko) gir dem verktøyene.


# Risiko for kundene {.activity}

Når elevene tester med ekte kunder, har de ansvar for ekte folk.

## Sjekkliste {.check}

- [ ] Hold appene i kurset på **risikonivå 1 til 3** (se [Sikkerhet og
  risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko)): lokalt, åpen nettside
  eller enkel innsamling av data. Nivå 4 og 5, med innlogging, database og
  betaling, skal elevene kunne forklare, ikke ta i bruk med ekte kunder.

- [ ] Bruk oppdiktede testdata mens appen utvikles. Ekte kundedata først når
  appen er sjekket.

- [ ] Samler appen inn personopplysninger? Sjekk at eleven har skrevet hva som
  samles inn, hvor det lagres, hvem som ser det og når det slettes (oppgaven
  [Ansvar og personvern](../ansvar_og_personvern/ansvar_og_personvern)).

- [ ] Ta ned appen og slett dataene når testen eller kurset er over, hvis ikke
  noen tar over ansvaret.

- [ ] Apper som kobler sammen folk som ikke kjenner hverandre, for eksempel for
  å trene sammen, selge brukt eller hjelpe hjemme hos andre, skal ikke i ekte
  drift i kurset uten at en voksen tar ansvar for moderering. Lag en prototype
  med testdata, eller en versjon uten direkte kontakt.


# Ungdomsbedrift og ekte drift {.activity}

Skal en ungdomsbedrift bruke appen etter kurset, blir det drift, ikke
skoleoppgave. Da må noen eie den.

## Sjekkliste {.check}

- [ ] Hvem eier appen, kontoene og dataene? Skriv det ned.

- [ ] Hvem er ansvarlig for kundedataene? For elever under 18 bør en voksen stå
  som ansvarlig.

- [ ] Tillater vilkårene til tjenestene kommersiell bruk? Elevene sjekker, en
  voksen godkjenner.

- [ ] Betaling, avtaler og abonnementer krever en voksen som ansvarlig.

- [ ] Hva skjer når bedriften legges ned? Lag en plan for å slette data, si
  opp tjenester og ta ned appen.


# Klasserommet og maskinene {.activity}

## Sjekkliste {.check}

- [ ] KI-verktøy som kjører kommandoer, skal bare jobbe i prosjektmappa. Lær
  elevene å lese hva verktøyet vil gjøre før de sier ja.

- [ ] Ikke la elevene kjøre KI-verktøy med administratorrettigheter.

- [ ] Elevene skal bare slå opp og teste egne domener og systemer. Ingen
  skanning eller testing av skolens nett eller andres sider uten skriftlig
  lov.

- [ ] Sjekk at installasjonen virker på skolens maskiner før timen.

- [ ] Lær elevene å bruke Git, så de alltid kan gå tilbake til en versjon som
  virket.


# Vurdering og fusk {.activity}

Når KI skriver koden, blir det vanskeligere å se hva eleven har lært. Vurder
derfor prosessen, ikke bare appen.

## Sjekkliste {.check}

- [ ] Se på `PLAN.md`, `RISIKO.md` og Git-historikken. Viser de at eleven har
  tenkt selv?

- [ ] La eleven forklare en del av koden, og en feil KI-en gjorde.

- [ ] Bruk vurderingsmappen som er beskrevet i lærerveiledningen til [Ansvar og
  personvern](../ansvar_og_personvern/README).

- [ ] Bruk vurderingsrubrikken i
  [Lærerressurser](../laererressurser/laererressurser).


# Økonomisk ansvar {.activity}

Brudd på personvern, markedsføringsregler, vilkår eller opphavsrett kan koste
penger: gebyr fra Datatilsynet eller Forbrukertilsynet, erstatning til dem som
ble rammet, regninger for misbrukte kontoer og tapte kunder. Elevene regner på
dette i steg 6 i [Ansvar og
personvern](../ansvar_og_personvern/ansvar_og_personvern).

## Sjekkliste {.check}

- [ ] Avklar før kurset hvem som bærer det økonomiske ansvaret hvis noe går
  galt: skolen, ungdomsbedriften, eleven eller den voksne som står som
  ansvarlig for kontoen.

- [ ] Sørg for at den som står som ansvarlig, vet at ansvaret også kan være
  økonomisk.

- [ ] Sett tak for bruk og betaling på alle kontoer som kan gi regninger.

- [ ] Hold appene på lavt risikonivå. Det er det enkleste tiltaket mot store
  kostnader.

- [ ] Ungdomsbedrifter har ofte egne regler og ordninger. Sjekk hva som gjelder
  for deres bedrift.


# Hvis noe går galt {.activity}

| Hva skjedde | Gjør dette |
|---|---|
| En nøkkel eller et passord er lekket | Bytt nøkkelen eller passordet med en gang. Sjekk om noen har brukt den |
| Kundedata kan ha kommet på avveie | Ta ned appen. Si fra til skolen og den ansvarlige. Brudd på personopplysningssikkerheten skal som regel meldes til Datatilsynet innen 72 timer |
| En konto er overtatt | Bytt passord, slå på tofaktor, sjekk hva som er endret |
| Uventet regning | Stopp tjenesten, kontakt leverandøren, gjennomgå med den ansvarlige |
| Appen er hacket eller ødelagt | Ta den ned, gå tilbake til en versjon som virket med Git, finn feilen før den publiseres igjen |

## Tips {.tip}

Bruk hendelsen i undervisningen. Hva gikk galt, hvilket tiltak ville stoppet
det, og hva skriver eleven inn i `RISIKO.md` nå?


# Mal: informasjon til foresatte {.activity}

Tilpass teksten til kurset og verktøyene dere bruker, og send den før kurset.

```
Hei!

I [fag/klubb] skal elevene ta kurset «Fra idé til app med KI». De finner et
behov hos ekte kunder, planlegger en app og bygger den med hjelp av
KI-verktøy. Målet er å lære å planlegge, vurdere risiko og ta ansvar, ikke
bare å kode.

Verktøy og kontoer
Vi bruker [verktøy]. Noen verktøy har aldersgrense, og da står
[lærer / forelder] som ansvarlig for kontoen. [Hvem betaler, og hva det
koster, eller at alt er gratis.]

Personvern
Elevene skal ikke legge inn personopplysninger i KI-verktøy. Intervjuer og
tester med kunder skjer uten navn. Apper som samler inn data, sjekkes av
[lærer] før de tas i bruk, og dataene slettes når kurset er over.

Hva vi ber dere om
[Samtykke til konto / godkjenning av kostnad / ingenting.]

Spørsmål kan sendes til [navn og kontakt].
```


# Kurset i en kodeklubb {.activity}

I en kodeklubb finnes det ingen skolekontoer, ingen godkjente verktøy fra
skoleeier og ingen IT-avdeling. Da må klubben selv avklare det skolen ellers
gjør.

## Sjekkliste {.check}

- [ ] Bestem hvem i klubben som er ansvarlig voksen for kurset.

- [ ] Deltakere under aldersgrensen for et verktøy trenger at en forelder
  oppretter kontoen og står som ansvarlig. Veiledere skal ikke dele egne
  kontoer med deltakerne.

- [ ] Deltakerne bruker ofte egne maskiner. Foresatte må godta at verktøy
  installeres, og vite hva som koster penger.

- [ ] Send informasjon til foresatte før kurset, se malen over.

- [ ] Apper som samler inn data fra ekte kunder, krever en ansvarlig voksen,
  enten fra klubben eller hjemme. Hold dere til nivå 1 til 3 og testdata hvis
  ingen kan ta det ansvaret.

- [ ] Klubben bør ha en egen e-post for spørsmål, ikke veiledernes private.

- [ ] Avtal hva som skjer med prosjektene og dataene når kurset er over.


# Vilkår endrer seg {.activity}

Verktøy, priser, aldersgrenser og vilkår endrer seg raskere enn kurset blir
oppdatert. Kurset gir derfor ingen fasit. Det er elevene og den ansvarlige
voksne som må sjekke hva som gjelder for det de lager, når de lager det.

Det gjelder særlig reglene for KI. Da kurset ble skrevet (november 2026),
gjaldt EUs krav om merking av KI-innhold i EU, mens den norske KI-loven ennå
ikke var vedtatt. Hvem som har opphavsrett til det KI lager, er også uavklart.
Sjekk status på regjeringen.no og hos Datatilsynet og Forbrukertilsynet før
kurset.
