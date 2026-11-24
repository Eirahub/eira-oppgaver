---
title: Kva type app?
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

«App» kan bety mykje: ei nettside, noko du installerer frå App Store, eit
program på PC-en eller ei teneste bedrifter betaler for kvar månad. I denne
oppgåva lærer du skilnaden, kva kvar type krev, og kva han kostar. Til slutt
reknar du ut kva appen din kostar i drift.

![Illustrasjon av fem typar appar side om side: nettlesar, mobil med
heimeskjermikon, mobil frå appbutikk, PC-vindauge og ei sky med mange
brukarar](typer_nn.png)


# Steg 1: Fem typar appar {.activity}

| Type | Kva det er | Passar når | Kva som trengst |
|---|---|---|---|
| **Webapp** | Ei nettside som oppfører seg som ein app | Du vil nå alle raskt, på alle einingar | Publisering, gjerne domene |
| **PWA** | Ein webapp som kan leggjast på heimeskjermen og verke utan nett | Kundane brukar han ofte på mobil | Som webapp, pluss eit manifest og ein service worker |
| **Native mobilapp** | Ein app frå App Store eller Google Play | Du treng kamera, varsel eller mykje fart | Utviklarkonto, godkjenning i appbutikken, eigen kode for iPhone og Android eller eit felles rammeverk |
| **Desktopapp** | Eit program som blir installert på PC eller Mac | Han skal brukast lenge om gongen, eller utan nett | Installasjonsfil, signering, oppdateringar |
| **SaaS** | Ei teneste på nett som kundar betaler for, ofte kvar månad | Bedrifter skal bruke han saman | Server, database, innlogging, betaling, kundeservice |

## Sjekkliste {.check}

- [ ] Kva type er MVP-en din no?

- [ ] Kva type ville du valt viss appen vart ein suksess? Skriv kvifor.

## Tips {.protip}

Start nesten alltid med ein webapp. Han er billegast, raskast å endre og verkar
på alle einingar. Gjer han om til PWA viss kundane vil ha han på heimeskjermen.


# Steg 2: Gratis for skule eller for bedrift? {.activity}

Mange tenester er gratis, men nokre berre for privat bruk eller skuleprosjekt.
Ei ungdomsbedrift som sel noko, driv kommersielt, òg utan overskot. Les
vilkåra før du vel.

| Teneste | Gratis til test og skule | Gratis til bedrift | Merk |
|---|---|---|---|
| GitHub Pages | Ja | Nei | Ikkje for nettbutikk eller nettsider som driv ei bedrift |
| Vercel (Hobby) | Ja | Nei | Gratisplanen er berre for personleg, ikkje-kommersiell bruk |
| Netlify (gratis) | Ja | Ja, innanfor grensene | 13 år. Gratisplanen kan endrast eller stoppast |
| Skjema og rekneark i skulekontoen | Ja | Spør skulen | Skulen har avtale om personvern |

Vilkåra endrar seg. Sjekk dei sjølv før appen blir teken i bruk.

## Sjekkliste {.check}

- [ ] Finn vilkåra til tenesta du vil bruke. Søk etter «commercial use» og
  «minimum age».

- [ ] Skriv ned kva du fann, og kvar.


# Steg 3: Kva kostar appen? {.activity}

## Sjekkliste {.check}

- [ ] Lag ein tabell over kostnader per månad for appen din. Ta med det som
  gjeld:

  | Kostnad | Per månad |
  |---|---|
  | Domene (nokre hundre kroner i året) | |
  | Publisering og server | |
  | Database og lagring | |
  | KI-verktøy | |
  | Utviklarkonto (Apple: 99 dollar i året, Google Play: 25 dollar éin gong) | |
  | Betalingsteneste (ein del av kvart sal) | |
  | Timar de brukar, gonga med ein timepris | |

- [ ] Legg saman. Kor mange kundar eller sal treng de i månaden for at appen
  skal løne seg?

- [ ] Samanlikn med det de gjer i dag utan app. Løner det seg?


# Steg 4: Kva seier du til KI-en? {.activity}

Typen app endrar kva du må be om. Skriv det i `PLAN.md` under **Krav**, så
KI-en veit det frå starten.

## Sjekkliste {.check}

- [ ] Finn linja som passar, og legg ho inn i `PLAN.md`:

  - **Webapp**: «Rein HTML, CSS og JavaScript, skal kunne publiserast som
    statisk nettside.»
  - **PWA**: «Lag han som ein PWA med manifest og service worker, så han kan
    leggjast på heimeskjermen og verke utan nett.»
  - **Native mobilapp**: «Forklar kva val eg har for iPhone og Android, og kva
    dei kostar, før du skriv kode.»
  - **Desktopapp**: «Forklar korleis appen kan pakkast som eit program for
    Windows og Mac, og kva signering betyr.»
  - **SaaS**: «Lag ein plan for innlogging, database og betaling, med kva kvar
    del kostar og kva ansvar eg får for kundedata. Ikkje skriv kode enno.»

## Test deg sjølv {.flag}

- [ ] Kan du forklare ein medelev kvifor ein SaaS er mykje meir arbeid enn ein
  webapp?


## Utfordring {.challenge}

Be Claude Code gjere MVP-en din om til ein PWA. Legg han til på heimeskjermen
på mobilen. Verkar han i flymodus?
