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

Typen app seier ikkje alt. Det som avgjer kor mykje backend, tryggleik og
personvern du treng, er kva appen gjer med data og pengar. Det lærer du i
[Tryggleik og risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko_nn).


# Steg 2: Sjekk vilkåra sjølv {.activity}

Mange tenester er gratis, men nokre berre for privat bruk, test eller
skuleprosjekt. Ei ungdomsbedrift som sel noko, driv kommersielt, òg utan
overskot. Vilkår, prisar og aldersgrenser endrar seg ofte. Difor kan ikkje
kurset fortelje deg kva som gjeld. Det må du finne ut sjølv.

## Sjekkliste {.check}

- [ ] Vel to eller tre tenester du kan bruke til å publisere appen, til dømes
  GitHub Pages, Netlify, Vercel eller Cloudflare Pages. Ta òg med
  KI-verktøya du bruker.

- [ ] Finn vilkåra og prisane på nettsida til kvar teneste. Søk etter
  «terms», «pricing», «commercial use» og «minimum age».

- [ ] Fyll ut ein tabell:

  | Teneste | Gratis? | Lov for bedrift? | Aldersgrense | Kvar fann du det? |
  |---|---|---|---|---|
  | | | | | |

- [ ] Er du under aldersgrensa? Avtal kven som står som ansvarleg for
  kontoen, til dømes ein forelder eller lærar.

- [ ] Vel teneste, og skriv éi setning om kvifor.

## Tips {.protip}

Vilkåra er ofte lange og på engelsk. Du kan be ein KI oppsummere dei, men les
sjølv det som handlar om alder, pris og kommersiell bruk. KI-en kan ta feil.


# Steg 3: Kva kostar appen? {.activity}

## Sjekkliste {.check}

- [ ] Ta fram det grove overslaget i `PLAN.md`. Lag ein tabell over
  kostnader per månad for appen din. Ta med det som gjeld:

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

## Prompter du kan lære av {.protip}

Byt ut det som står i klammer. Legg aldri inn namn, passord eller
personopplysningar om andre. Sjå kvifor promptane verkar, og lag dine eigne.

- **Forstå skilnaden:**

  ```
  Forklar skilnaden på ein webapp og ein PWA med eit døme frå
  kvardagen. Kva kan ein PWA som ei vanleg nettside ikkje kan?
  ```

- **Reverse engineer eit val:**

  ```
  Kva type app er [kjend app]? Kvifor trur du dei valde det, og kva
  ville det kosta dei å velje noko anna?
  ```

- **Les vilkåra:**

  ```
  Hjelp meg å lese vilkåra til [teneste]. Kva står om alder,
  kommersiell bruk og pris? Siter teksten og sei kvar han står, så eg
  kan sjekke sjølv.
  ```

- **Rekn på kostnadene:**

  ```
  Lag ein kostnadskalkyle per månad ut frå PLAN.md. Vis kva som kostar
  med 10, 100 og 1000 kundar, og kva du har gjetta på.
  ```

KI-en kan ta feil om vilkår og prisar, og dei endrar seg. Sjekk alltid på
dei eigne sidene til tenesta.

## Test deg sjølv {.flag}

- [ ] Kan du forklare ein medelev kvifor ein SaaS er mykje meir arbeid enn ein
  webapp?


## Utfordring {.challenge}

Be Claude Code gjere MVP-en din om til ein PWA. Legg han til på heimeskjermen
på mobilen. Verkar han i flymodus?
