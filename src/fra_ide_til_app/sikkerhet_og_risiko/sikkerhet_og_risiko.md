---
title: Sikkerhet og risiko
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Et gratisspill som bare kjører i nettleseren, og en nettbutikk med innlogging
og betaling, er begge apper. Men de har helt ulik risiko. Jo mer appen vet om
folk, og jo mer penger det handler om, jo mer må du bygge og passe på. I denne
oppgaven lærer du forskjellen på frontend og backend, finner risikonivået til
appen din og lager en enkel risikovurdering.

![Illustrasjon av en trapp med fem trinn, fra et spill i nettleseren nederst
til en app med betaling øverst, med flere hengelåser jo høyere
trinnet er](risiko.png)

## «Laget på en helg, hacket etter en uke» {.tip}

På sosiale medier ser du ofte innlegg som «Jeg vibecodet en app på en helg, nå
tjener jeg penger». Noen uker senere kommer neste innlegg: appen ble hacket.
Det er nesten alltid de samme feilene:

- En hemmelig API-nøkkel lå i frontend. Noen fant den og brukte den, og
  regningen kom til eieren.
- Databasen var åpen, så alle kunne lese alle brukernes data.
- Betalte funksjoner ble låst opp ved å endre koden i nettleseren.
- Ingen grense for hvor mye en bruker kunne gjøre, så roboter brukte opp
  kvoten på noen timer.

KI-en bygde det eieren ba om, raskt. Men ingen spurte hva som kunne gå galt. Det
er det du lærer i denne oppgaven.

## Før du starter {.tip}

Gjør [Hvilken type app?](../typer_apper/typer_apper) først. Du trenger også
`PLAN.md` fra [Planen](../planen/planen).


# Steg 1: Frontend og backend {.activity}

**Frontend** er den delen av appen som kjører hos brukeren, i nettleseren eller
på mobilen. **Backend** er den delen som kjører på en server du har ansvar for,
med database, innlogging og betaling.

Den viktigste regelen: **Alt i frontend kan brukeren se og endre.** Trykk
**F12** på en hvilken som helst nettside, og du ser koden. Derfor:

- Hemmeligheter, som passord og API-nøkler, hører aldri hjemme i frontend.
- Sjekker som betyr noe, som «er dette riktig pris?» eller «har denne brukeren
  lov?», må gjøres i backend. En sjekk i frontend kan lures.
- Har du ingen backend, har du heller ingen trygg plass å lagre andres data.

## Sjekkliste {.check}

- [ ] Åpne appen din i nettleseren, trykk **F12** og finn koden. Kan du se alt
  du har skrevet?

- [ ] Har appen en backend i dag? Hva gjør den?


# Steg 2: Fem risikonivåer {.activity}

| Nivå | Eksempel | Trenger | Sikkerhet | Personvern |
|---|---|---|---|---|
| **1. Bare lokalt** | Gratisspill, kalkulator, huskeliste i nettleseren | Bare frontend | Lite. Pass på skript fra andre, som reklame og sporing | Ingen data forlater maskinen, hvis du ikke legger inn sporing |
| **2. Åpen nettside** | Info om ungdomsbedriften, meny, prisliste | Frontend og publisering | Sikre kontoen som publiserer (tofaktor). Ingen hemmeligheter i koden | Lite, så lenge du ikke samler inn noe |
| **3. Samler inn data** | Bestilling, påmelding, tilbakemelding | Et skjema, regneark eller enkel backend | Hvem har tilgang til dataene? Stopp spam og roboter | Personopplysninger: si hva du samler og hvorfor, lagre trygt, slett når det ikke trengs |
| **4. Innlogging og database** | Kundeklubb, booking med egne sider, SaaS | Backend, database, innloggingstjeneste | Passord, tilgangsstyring, sikkerhetskopi, oppdateringer | Innsyn, retting og sletting for hver bruker. Brudd må meldes |
| **5. Betaling og sensitive data** | Nettbutikk, abonnement, helseopplysninger | Backend og betalingstjeneste | Aldri ta imot kortdata selv. Bruk en betalingstjeneste | Strengere krav. Kjøpsregler, kvittering og regnskap |

## Tips {.protip}

Hvert nivå oppover gir mer arbeid, flere regler og mer ansvar. Lag appen på det
laveste nivået som løser problemet. Trenger du egentlig innlogging, eller holder
det med et skjema?


# Steg 3: Finn nivået til appen din {.activity}

## Sjekkliste {.check}

- [ ] Hvilket nivå er MVP-en din på? Skriv det i `PLAN.md` under **Krav**.

- [ ] Hvilket nivå blir appen på hvis den blir en suksess? Hva må dere da lære,
  bygge eller betale for?

- [ ] Kan dere senke nivået? Kan for eksempel betaling skje på stedet, eller
  bestilling gå gjennom et skjema i stedet for egne kontoer?


# Steg 4: Risikovurdering {.activity}

En **risikovurdering** er en liste over hva som kan gå galt, hvor sannsynlig det
er, hvor ille det blir, og hva du gjør for å hindre det.

## Sjekkliste {.check}

- [ ] Skriv minst fem ting som kan gå galt med appen din. Tenk på:

  - noen får tak i kontoen dere publiserer eller lagrer data med
  - en hemmelig nøkkel havner i koden
  - feil person ser kundedata
  - noen fyller skjemaet med søppel, eller roboter bruker opp kvoten
  - en bruker endrer koden i nettleseren for å få noe gratis
  - appen eller tjenesten dere bruker, slutter å virke
  - KI-en har laget kode med et sikkerhetshull

- [ ] Gi hver ting en poengsum fra 1 til 3 for **sannsynlighet** og for
  **konsekvens**. Gang dem sammen. Tenk på konsekvens i kroner også: gebyr,
  erstatning, regninger og tapte kunder.

  | Hva kan skje | Sannsynlighet | Konsekvens | Risiko | Tiltak |
  |---|---|---|---|---|
  | Noen får tak i kontoen | 2 | 3 | 6 | Tofaktor og sterkt passord |

- [ ] Skriv et tiltak for alt som får 4 eller mer. Tiltak kan være tekniske
  (tofaktor), manuelle (sjekke bestillinger hver dag) eller administrative
  (bestemme hvem som har tilgang).


# Steg 5: Be KI-en om en sikkerhetsgjennomgang {.activity}

KI-en kan hjelpe deg å finne hull, men den finner ikke alt, og den kan ta feil.

## Sjekkliste {.check}

- [ ] Skriv:

  ```
  Appen er på risikonivå [nivå] (se PLAN.md). Gå gjennom koden og let etter
  sikkerhets- og personvernproblemer: hemmeligheter i koden, data som kan
  leses av feil person, sjekker som bare skjer i frontend, og skript fra
  andre som samler inn data. Forklar hvert funn enkelt, og ikke endre noe
  før jeg har sagt ja.
  ```

- [ ] Les funnene. Skjønner du hvert av dem? Spør om det du ikke skjønner.

- [ ] Rett de viktigste, og legg dem inn i risikovurderingen.


# Steg 6: Hva kan andre se om appen din? {.activity}

Når appen ligger på nett, kan hvem som helst finne ut mye om den. Roboter
skanner hele internett hele tiden, og en ny nettside blir ofte funnet i løpet
av minutter.

- **DNS** er telefonkatalogen på nettet. Den kobler et domene, for eksempel
  `sykkelvasken.no`, til en IP-adresse. Alle kan slå opp i DNS. Peker domenet
  rett til en server dere driver selv, vet angripere hvor de skal lete.
- **Underdomener** som `test.`, `admin.` eller `gammel.` blir også funnet,
  blant annet fordi alle sertifikater for HTTPS havner i åpne logger. En glemt
  testside med gammel kode er en vanlig vei inn.
- **Åpne porter og tjenester** på en server, som en database eller et
  adminpanel, kan finnes ved skanning.

Bruker dere en publiseringstjeneste, som GitHub Pages, Netlify eller
Cloudflare Pages, peker DNS til tjenesten og ikke til en egen server. Da tar
tjenesten seg av mye av dette. Har dere egen server, er ansvaret deres.

## Sjekkliste {.check}

- [ ] Slå opp ditt eget domene, eller adressen appen er publisert på, i
  terminalen:

  ```
  nslookup dittdomene.no
  ```

  Hvilken IP-adresse får du? Tilhører den publiseringstjenesten, eller en
  server dere driver selv?

- [ ] Søk opp ditt eget domene på [crt.sh](https://crt.sh). Hvilke underdomener
  er synlige? Er noen gamle eller bare til testing? Ta dem ned.

- [ ] Har dere egen server? Lag en liste over alt som er åpent mot internett,
  og steng det som ikke må være åpent.

- [ ] Skriv det du fant, inn i `RISIKO.md`.

## Bare test det du eier {.tip}

Å lete etter sikkerhetshull kalles **penetrasjonstesting**, eller pentesting.
Det er en viktig jobb, men du kan bare teste systemer du eier, eller har fått
skriftlig lov til å teste. Å prøve å komme inn i andres systemer uten lov er
datainnbrudd og straffbart, også om det er «bare for å se». Skanning av andres
systemer kan også bryte loven eller vilkårene deres. Vil du øve mer, finnes det
lovlige øvingsmiljøer og konkurranser (CTF) laget for akkurat det.


## Test deg selv {.flag}

- [ ] Kan du forklare en medelev hvorfor en sjekk i frontend ikke er nok?

- [ ] Kan du si hvilket nivå appen din er på, og hva det betyr for dere?

- [ ] Kan du forklare hva DNS viser om appen din, og hva du har lov til å teste?

## Lagre {.save}

Lagre risikovurderingen i prosjektmappa som `RISIKO.md`, og lag en commit.


## Utfordring {.challenge}

Mange angrep på små bedrifter starter med en falsk e-post eller melding som
lurer noen til å gi fra seg passordet. Lag tre regler for ungdomsbedriften som
gjør det vanskeligere.
