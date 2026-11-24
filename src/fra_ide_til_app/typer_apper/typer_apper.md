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


# Steg 2: Gratis for skole eller for bedrift? {.activity}

Mange tjenester er gratis, men noen bare for privat bruk eller skoleprosjekter.
En ungdomsbedrift som selger noe, driver kommersielt, også uten overskudd. Les
vilkårene før du velger.

| Tjeneste | Gratis til test og skole | Gratis til bedrift | Merk |
|---|---|---|---|
| GitHub Pages | Ja | Nei | Ikke for nettbutikk eller nettsider som driver en bedrift |
| Vercel (Hobby) | Ja | Nei | Gratisplanen er bare for personlig, ikke-kommersiell bruk |
| Netlify (gratis) | Ja | Ja, innenfor grensene | 13 år. Gratisplanen kan endres eller stoppes |
| Skjema og regneark i skolekontoen | Ja | Spør skolen | Skolen har avtale om personvern |

Vilkårene endrer seg. Sjekk dem selv før appen tas i bruk.

## Sjekkliste {.check}

- [ ] Finn vilkårene til tjenesten du vil bruke. Søk etter «commercial use» og
  «minimum age».

- [ ] Skriv ned hva du fant, og hvor.


# Steg 3: Hva koster appen? {.activity}

## Sjekkliste {.check}

- [ ] Lag en tabell over kostnader per måned for din app. Ta med det som
  gjelder:

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


# Steg 4: Hva sier du til KI-en? {.activity}

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

## Test deg selv {.flag}

- [ ] Kan du forklare en medelev hvorfor en SaaS er mye mer arbeid enn en
  webapp?


## Utfordring {.challenge}

Be Claude Code gjøre MVP-en din om til en PWA. Legg den til på hjemskjermen på
mobilen. Virker den i flymodus?
