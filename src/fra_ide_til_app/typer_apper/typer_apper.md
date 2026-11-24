---
title: Hvilken type app?
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

«App» kan bety mye: en nettside, noe du installerer fra App Store, et program på
PC-en eller en tjeneste bedrifter betaler for hver måned. I denne oppgaven lærer
du forskjellen, hva hver type krever, og hva den koster. Til slutt regner du ut
hva din app koster i drift.

![Illustrasjon av fem typer apper side om side: nettleser, mobil med
hjemskjermikon, mobil fra appbutikk, PC-vindu og en sky med mange
brukere](typer.png)


# Steg 1: Fem typer apper {.activity}

| Type | Hva det er | Passer når | Hva som trengs |
|---|---|---|---|
| **Webapp** | En nettside som oppfører seg som en app | Du vil nå alle raskt, på alle enheter | Publisering, gjerne domene |
| **PWA** | En webapp som kan legges på hjemskjermen og virke uten nett | Kundene bruker den ofte på mobil | Som webapp, pluss et manifest og en service worker |
| **Native mobilapp** | En app fra App Store eller Google Play | Du trenger kamera, varsler eller mye fart | Utviklerkonto, godkjenning i appbutikken, egen kode for iPhone og Android eller et felles rammeverk |
| **Desktopapp** | Et program som installeres på PC eller Mac | Den skal brukes lenge av gangen, eller uten nett | Installasjonsfil, signering, oppdateringer |
| **SaaS** | En tjeneste på nett som kunder betaler for, ofte hver måned | Bedrifter skal bruke den sammen | Server, database, innlogging, betaling, kundeservice |

## Sjekkliste {.check}

- [ ] Hvilken type er MVP-en din nå?

- [ ] Hvilken type ville du valgt hvis appen ble en suksess? Skriv hvorfor.

## Tips {.protip}

Start nesten alltid med en webapp. Den er billigst, raskest å endre og virker
på alle enheter. Gjør den om til PWA hvis kundene vil ha den på hjemskjermen.

Typen app sier ikke alt. Det som avgjør hvor mye backend, sikkerhet og
personvern du trenger, er hva appen gjør med data og penger. Det lærer du i
[Sikkerhet og risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko).


# Steg 2: Sjekk vilkårene selv {.activity}

Mange tjenester er gratis, men noen bare for privat bruk, test eller
skoleprosjekter. En ungdomsbedrift som selger noe, driver kommersielt, også
uten overskudd. Vilkår, priser og aldersgrenser endrer seg ofte. Derfor kan
ikke kurset fortelle deg hva som gjelder. Det må du finne ut selv.

## Sjekkliste {.check}

- [ ] Velg to eller tre tjenester du kan bruke til å publisere appen, for
  eksempel GitHub Pages, Netlify, Vercel eller Cloudflare Pages. Ta også med
  KI-verktøyene du bruker.

- [ ] Finn vilkårene og prisene på nettsiden til hver tjeneste. Søk etter
  «terms», «pricing», «commercial use» og «minimum age».

- [ ] Fyll ut en tabell:

  | Tjeneste | Gratis? | Lov til bedrift? | Aldersgrense | Hvor fant du det? |
  |---|---|---|---|---|
  | | | | | |

- [ ] Er du under aldersgrensen? Avtal hvem som står som ansvarlig for
  kontoen, for eksempel en forelder eller lærer.

- [ ] Velg tjeneste, og skriv én setning om hvorfor.

## Tips {.protip}

Vilkårene er ofte lange og på engelsk. Du kan be en KI oppsummere dem, men les
selv det som handler om alder, pris og kommersiell bruk. KI-en kan ta feil.


# Steg 3: Hva koster appen? {.activity}

## Sjekkliste {.check}

- [ ] Ta fram det grove overslaget i `PLAN.md`. Lag en tabell over kostnader
  per måned for din app. Ta med det som gjelder:

  | Kostnad | Per måned |
  |---|---|
  | Domene (noen hundre kroner i året) | |
  | Publisering og server | |
  | Database og lagring | |
  | KI-verktøy | |
  | Utviklerkonto (Apple: 99 dollar i året, Google Play: 25 dollar én gang) | |
  | Betalingstjeneste (en andel av hvert salg) | |
  | Timer dere bruker, ganget med en timepris | |

- [ ] Legg sammen. Hvor mange kunder eller salg trenger dere i måneden for at
  appen skal lønne seg?

- [ ] Sammenlign med det dere gjør i dag uten app. Lønner det seg?


# Steg 4: Appbygger eller egen kode? {.activity}

Med en **appbygger** med KI, som Base44, Lovable eller Bolt, beskriver du appen
i en chat og får den ferdig publisert, ofte med database og innlogging. Det går
raskt, men appen bor hos tjenesten. Med en **kodeassistent**, som i dette
kurset, har du koden selv og velger hvor den skal ligge.

| | Appbygger | Kodeassistent og egen kode |
|---|---|---|
| Kom i gang | Svært raskt, alt i nettleseren | Må installere og lære litt mer |
| Database, innlogging og publisering | Ofte innebygd | Du setter det opp selv |
| Hvor appen bor | Hos tjenesten | Der du velger |
| Hvis tjenesten endrer pris eller stenger | Vanskelig å flytte | Du tar koden med deg |
| Hva du lærer | Å beskrive og teste | Også å lese og forstå koden |

Gratisplanene har nesten alltid grenser, og det viktigste ligger ofte bak
betaling. Dette er vanlige begrensninger:

- Få meldinger eller kreditter i måneden. Retter du mange feil, går de fort.
- Eget domene, å fjerne tjenestens logo og private prosjekter koster ofte.
- Å ta med koden til GitHub kan kreve en dyrere plan.
- Betaling fra kunder går via en betalingstjeneste som Stripe. Den tar en
  andel av hvert salg, i tillegg til det appbyggeren koster.
- Aldersgrensen kan være høyere enn for andre verktøy. Da kurset ble skrevet
  (november 2026), krevde Base44 16 år i EU og EØS, og Lovable krevde 18 år.

## Sjekkliste {.check}

- [ ] Velger du en appbygger? Legg den til i tabellen fra steg 2.

- [ ] Finn ut hva gratisplanen gir, og hva appen din trenger som koster penger:
  database, innlogging, betaling, eget domene eller å ta med koden.

- [ ] Kan du hente ut koden og flytte appen hvis dere slutter å betale?

- [ ] Hvor lagres kundedataene? Står det ikke, spør tjenesten eller velg en
  annen hvis appen samler inn personopplysninger.

- [ ] Legg det appbyggeren koster, inn i kostnadstabellen fra steg 3.

## Tips {.protip}

En appbygger er fin til en rask prototype som kunder kan prøve. Planen, testene
og sjekkene i dette kurset gjelder like mye der. Appbyggeren skriver koden, men
ansvaret for kundedata og sikkerhet er fortsatt ditt.


# Steg 5: Hva sier du til KI-en? {.activity}

Typen app endrer hva du må be om. Skriv det i `PLAN.md` under **Krav**, så
KI-en vet det fra starten.

## Sjekkliste {.check}

- [ ] Finn linjen som passer, og legg den inn i `PLAN.md`:

  - **Webapp**: «Ren HTML, CSS og JavaScript, skal kunne publiseres som statisk
    nettside.»
  - **PWA**: «Lag den som en PWA med manifest og service worker, så den kan
    legges på hjemskjermen og virke uten nett.»
  - **Native mobilapp**: «Forklar hvilke valg jeg har for iPhone og Android, og
    hva de koster, før du skriver kode.»
  - **Desktopapp**: «Forklar hvordan appen kan pakkes som et program for
    Windows og Mac, og hva signering betyr.»
  - **SaaS**: «Lag en plan for innlogging, database og betaling, med hva hver
    del koster og hvilket ansvar jeg får for kundedata. Ikke skriv kode ennå.»

## Prompter du kan lære av {.protip}

Bytt ut det som står i klammer. Legg aldri inn navn, passord eller andres
personopplysninger. Se hvorfor promptene virker, og lag dine egne.

- **Forstå forskjellen:**

  ```
  Forklar forskjellen på en webapp og en PWA med et eksempel fra
  hverdagen. Hva kan en PWA som en vanlig nettside ikke kan?
  ```

- **Reverse engineer et valg:**

  ```
  Hvilken type app er [kjent app]? Hvorfor tror du de valgte det, og
  hva ville det kostet dem å velge noe annet?
  ```

- **Les vilkårene:**

  ```
  Hjelp meg å lese vilkårene til [tjeneste]. Hva står om alder,
  kommersiell bruk og pris? Siter teksten og si hvor den står, så jeg
  kan sjekke selv.
  ```

- **Regn på kostnadene:**

  ```
  Lag en kostnadskalkyle per måned ut fra PLAN.md. Vis hva som koster
  med 10, 100 og 1000 kunder, og hva du har gjettet på.
  ```

KI-en kan ta feil om vilkår og priser, og de endrer seg. Sjekk alltid på
tjenestens egne sider.

## Test deg selv {.flag}

- [ ] Kan du forklare en medelev hvorfor en SaaS er mye mer arbeid enn en
  webapp?


## Utfordring {.challenge}

Be Claude Code gjøre MVP-en din om til en PWA. Legg den til på hjemskjermen på
mobilen. Virker den i flymodus?
