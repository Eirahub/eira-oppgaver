---
title: Rettleiing for lærarar - Risiko i kurset
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Om rettleiinga {.intro}

I dette kurset lagar elevane ekte appar for ekte kundar, med verktøy som endrar
seg raskt. Det gir god læring, men òg risiko for elevane, kundane og skulen.
Rettleiinga går gjennom kva du bør tenkje på før, under og etter kurset, og kva
du gjer viss noko går gale.

Kurset lærer prinsipp, ikkje bestemte verktøy. Elevane vel sjølve verktøy og
sjekkar vilkår, alder og pris. Som lærar er den viktigaste jobben din å sørgje
for at dei faktisk gjer det, og at ein vaksen står som ansvarleg der det
trengst.


# Slik er kurset bygd opp {.activity}

- **Del 1, Frå behov til forretningsidé:** Utan konto og utan teknikk. Her
  fordeler elevane òg rollene i gruppa (Planen, steg 6).
- **Del 2, Bygg appen med KI:** Elevane byggjer appen. Her trengst kontoar.
- **Del 3, Klar for ekte kundar:** Risiko, personvern og ansvar kjem før
  kundane får prøve appen. Test med kundar startar med ein sjekk før
  publisering. Etter lansering handlar om drift og avvikling.

Kurssida har ein tabell over kva elevane kan hoppe over ut frå risikonivået til
appen. Plan for eit semester, vurderingsrubrikk og døme på svar finn du i
[Lærarressursar](../laererressurser/laererressurser_nn).


# Før kurset {.activity}

## Sjekkliste {.check}

- [ ] Sjekk kva skulen og skuleeigar seier om KI-verktøy og skytenester. Mange
  har eigne reglar eller ei liste over godkjende tenester. Nokre krev ei
  vurdering av personvern før ei ny teneste blir teken i bruk.

- [ ] Avklar kven som står som ansvarleg for kontoar når ein elev er under
  aldersgrensa for eit verktøy. Det kan vere ein forelder eller ein lærar. Den
  ansvarlege må vite kva det inneber.

- [ ] Informer føresette om kurset: kva typar verktøy som kan bli brukte, at
  elevane kan trenge kontoar, og kva som eventuelt kostar pengar.

- [ ] Bestem kven som betaler for betalte verktøy, og korleis. Set eit tak for
  bruk der det er mogleg.

- [ ] Prøv verktøya sjølv, og gjer gjerne oppgåvene før elevane.


# Risiko for elevane {.activity}

| Risiko | Kva kan skje | Tiltak |
|---|---|---|
| Personopplysningar i KI-verktøy | Elevar limer inn namn, bilete eller kundedata | Regelen «ingen personopplysningar i prompter» frå første time. Bruk oppdikta testdata |
| Lekne nøklar og passord | Ein API-nøkkel hamnar i koden eller eit ope repo, og nokon bruker han på rekninga til eleven | Løyndomar aldri i koden. Set eit tak for bruk. Byt nøkkelen med ein gong viss han lek |
| Uventa kostnader | Abonnement blir fornya, eller bruk av KI eller tenar går over gratisgrensa | Ansvarleg vaksen godkjenner alt som kostar pengar. Sei opp etter kurset |
| Kontoar som blir overtekne | Svake passord eller falske e-postar | Tofaktor på alle kontoar som publiserer eller lagrar data |
| Opne repo | Intervjunotat, namn eller nøklar blir synlege for alle | Gå gjennom repoet før det blir gjort ope |
| KI-innhald og rettane til andre | KI-laga innhald blir forveksla med ekte, eller liknar logoen, figurane eller personane til andre | Merk KI-innhald som kan mistydast. Bruk eigne bilete. Sjekk vilkår og samtykke |
| Overtillit til KI | Eleven leverer noko som verkar, men som dei ikkje forstår, eller som har tryggleikshol | Krev at eleven kan forklare koden og kva KI-en gjorde feil |

## Tips {.tip}

Snakk om risiko som ein del av faget, ikkje som forbod. Elevane skal lære å
vurdere sjølve. Oppgåva [Tryggleik og
risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko_nn) gir dei verktøya.


# Risiko for kundane {.activity}

Når elevane testar med ekte kundar, har dei ansvar for ekte folk.

## Sjekkliste {.check}

- [ ] Hald appane i kurset på **risikonivå 1 til 3** (sjå [Tryggleik og
  risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko_nn)): lokalt, open
  nettside eller enkel innsamling av data. Nivå 4 og 5, med innlogging,
  database og betaling, skal elevane kunne forklare, ikkje ta i bruk med ekte
  kundar.

- [ ] Bruk oppdikta testdata medan appen blir utvikla. Ekte kundedata først når
  appen er sjekka.

- [ ] Samlar appen inn personopplysningar? Sjekk at eleven har skrive kva som
  blir samla inn, kvar det blir lagra, kven som ser det og når det blir sletta
  (oppgåva [Ansvar og
  personvern](../ansvar_og_personvern/ansvar_og_personvern_nn)).

- [ ] Ta ned appen og slett dataa når testen eller kurset er over, viss ikkje
  nokon tek over ansvaret.

- [ ] Appar som koplar saman folk som ikkje kjenner kvarandre, til dømes for å
  trene saman, selje brukt eller hjelpe heime hos andre, skal ikkje i ekte drift
  i kurset utan at ein vaksen tek ansvar for moderering. Lag ein prototype med
  testdata, eller ein versjon utan direkte kontakt.


# Ungdomsbedrift og ekte drift {.activity}

Skal ei ungdomsbedrift bruke appen etter kurset, blir det drift, ikkje
skuleoppgåve. Då må nokon eige han.

## Sjekkliste {.check}

- [ ] Kven eig appen, kontoane og dataa? Skriv det ned.

- [ ] Kven er ansvarleg for kundedataa? For elevar under 18 bør ein vaksen stå
  som ansvarleg.

- [ ] Tillèt vilkåra til tenestene kommersiell bruk? Elevane sjekkar, ein
  vaksen godkjenner.

- [ ] Betaling, avtalar og abonnement krev ein vaksen som ansvarleg.

- [ ] Kva skjer når bedrifta blir lagd ned? Lag ein plan for å slette data,
  seie opp tenester og ta ned appen.


# Klasserommet og maskinene {.activity}

## Sjekkliste {.check}

- [ ] KI-verktøy som køyrer kommandoar, skal berre jobbe i prosjektmappa. Lær
  elevane å lese kva verktøyet vil gjere før dei seier ja.

- [ ] Ikkje la elevane køyre KI-verktøy med administratorrettar.

- [ ] Elevane skal berre slå opp og teste eigne domene og system. Inga
  skanning eller testing av nettet til skulen eller sidene til andre utan
  skriftleg lov.

- [ ] Sjekk at installasjonen verkar på maskinene til skulen før timen.

- [ ] Lær elevane å bruke Git, så dei alltid kan gå tilbake til ein versjon som
  verka.


# Vurdering og fusk {.activity}

Når KI skriv koden, blir det vanskelegare å sjå kva eleven har lært. Vurder
difor prosessen, ikkje berre appen.

## Sjekkliste {.check}

- [ ] Sjå på `PLAN.md`, `RISIKO.md` og Git-historikken. Viser dei at eleven har
  tenkt sjølv?

- [ ] La eleven forklare ein del av koden, og ein feil KI-en gjorde.

- [ ] Bruk vurderingsmappa som er skildra i lærarrettleiinga til [Ansvar og
  personvern](../ansvar_og_personvern/README_nn).

- [ ] Bruk vurderingsrubrikken i
  [Lærarressursar](../laererressurser/laererressurser_nn).


# Økonomisk ansvar {.activity}

Brot på personvern, marknadsføringsreglar, vilkår eller opphavsrett kan koste
pengar: gebyr frå Datatilsynet eller Forbrukartilsynet, erstatning til dei som
vart ramma, rekningar for misbrukte kontoar og tapte kundar. Elevane reknar på
dette i steg 6 i [Ansvar og
personvern](../ansvar_og_personvern/ansvar_og_personvern_nn).

## Sjekkliste {.check}

- [ ] Avklar før kurset kven som ber det økonomiske ansvaret viss noko går
  gale: skulen, ungdomsbedrifta, eleven eller den vaksne som står som
  ansvarleg for kontoen.

- [ ] Sørg for at den som står som ansvarleg, veit at ansvaret òg kan vere
  økonomisk.

- [ ] Set tak for bruk og betaling på alle kontoar som kan gi rekningar.

- [ ] Hald appane på lågt risikonivå. Det er det enklaste tiltaket mot store
  kostnader.

- [ ] Ungdomsbedrifter har ofte eigne reglar og ordningar. Sjekk kva som gjeld
  for bedrifta dykkar.


# Viss noko går gale {.activity}

| Kva skjedde | Gjer dette |
|---|---|
| Ein nøkkel eller eit passord har lekt | Byt nøkkelen eller passordet med ein gong. Sjekk om nokon har brukt han |
| Kundedata kan ha kome på avvegar | Ta ned appen. Sei frå til skulen og den ansvarlege. Brot på personopplysningstryggleiken skal som regel meldast til Datatilsynet innan 72 timar |
| Ein konto er overteken | Byt passord, slå på tofaktor, sjekk kva som er endra |
| Uventa rekning | Stopp tenesta, kontakt leverandøren, gå gjennom med den ansvarlege |
| Appen er hacka eller øydelagd | Ta han ned, gå tilbake til ein versjon som verka med Git, finn feilen før han blir publisert igjen |

## Tips {.tip}

Bruk hendinga i undervisninga. Kva gjekk gale, kva tiltak ville stoppa det, og
kva skriv eleven inn i `RISIKO.md` no?


# Mal: informasjon til føresette {.activity}

Tilpass teksten til kurset og verktøya de bruker, og send han før kurset.

```
Hei!

I [fag/klubb] skal elevane ta kurset «Frå idé til app med KI». Dei finn eit
behov hos ekte kundar, planlegg ein app og byggjer han med hjelp av
KI-verktøy. Målet er å lære å planleggje, vurdere risiko og ta ansvar, ikkje
berre å kode.

Verktøy og kontoar
Vi bruker [verktøy]. Nokre verktøy har aldersgrense, og då står
[lærar / forelder] som ansvarleg for kontoen. [Kven betaler, og kva det
kostar, eller at alt er gratis.]

Personvern
Elevane skal ikkje leggje inn personopplysningar i KI-verktøy. Intervju og
testar med kundar skjer utan namn. Appar som samlar inn data, blir sjekka av
[lærar] før dei blir tekne i bruk, og dataa blir sletta når kurset er over.

Kva vi ber dykk om
[Samtykke til konto / godkjenning av kostnad / ingenting.]

Spørsmål kan sendast til [namn og kontakt].
```


# Kurset i ein kodeklubb {.activity}

I ein kodeklubb finst det ingen skulekontoar, ingen godkjende verktøy frå
skuleeigar og inga IT-avdeling. Då må klubben sjølv avklare det skulen elles
gjer.

## Sjekkliste {.check}

- [ ] Bestem kven i klubben som er ansvarleg vaksen for kurset.

- [ ] Deltakarar under aldersgrensa for eit verktøy treng at ein forelder
  opprettar kontoen og står som ansvarleg. Rettleiarar skal ikkje dele eigne
  kontoar med deltakarane.

- [ ] Deltakarane bruker ofte eigne maskiner. Føresette må godta at verktøy
  blir installerte, og vite kva som kostar pengar.

- [ ] Send informasjon til føresette før kurset, sjå malen over.

- [ ] Appar som samlar inn data frå ekte kundar, krev ein ansvarleg vaksen,
  anten frå klubben eller heime. Hald dykk til nivå 1 til 3 og testdata viss
  ingen kan ta det ansvaret.

- [ ] Klubben bør ha ei eiga e-postadresse for spørsmål, ikkje den private til
  rettleiarane.

- [ ] Avtal kva som skjer med prosjekta og dataa når kurset er over.


# Vilkår endrar seg {.activity}

Verktøy, prisar, aldersgrenser og vilkår endrar seg raskare enn kurset blir
oppdatert. Kurset gir difor ingen fasit. Det er elevane og den ansvarlege
vaksne som må sjekke kva som gjeld for det dei lagar, når dei lagar det.

Det gjeld særleg reglane for KI. Då kurset vart skrive (november 2026), galdt
krava til EU om merking av KI-innhald i EU, medan den norske KI-lova enno ikkje
var vedteken. Kven som har opphavsrett til det KI lagar, er òg uavklart. Sjekk
status på regjeringen.no og hos Datatilsynet og Forbrukartilsynet før kurset.
