---
title: Gi appen eit eige uttrykk
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

Når mange lagar appar med KI, byrjar appane å likne på kvarandre. Folk lærer
seg fort å kjenne att ein app som er «laga av KI på ein ettermiddag», og då
stoler dei mindre på han. I denne oppgåva finn du KI-spora i appen din, lagar
ein enkel stilguide for bedrifta og får KI-en til å følgje han. Målet er ein app
som ser ut som han høyrer til akkurat bedrifta dykkar.

![Illustrasjon av to versjonar av same app side om side: til venstre ei
generisk side med lilla gradient og emojiar, til høgre ei side med eigne
fargar, eige bilete og tekst med orda til kundane](uttrykk_nn.png)

## Før du startar {.tip}

Du treng ein MVP som verkar, frå [Bygg MVP-en](../bygg_mvp/bygg_mvp_nn), og
verdiforslaget frå [Forretningsideen](../forretningsideen/forretningsideen_nn).


# Steg 1: Finn KI-spora {.activity}

KI-verktøy vel det som er vanlegast, viss du ikkje seier noko anna. Difor endar
mange appar med dei same vala.

Typiske spor i **utsjånaden**:

- lilla eller blå fargeovergang (gradient) øvst
- emojiar framfor overskrifter og i knappar
- tre like kort på rad med eit ikon øvst i kvart
- alt sentrert, store runde hjørne og skuggar overalt
- same standardskrift og same knappefarge som tusen andre sider

Typiske spor i **teksten**:

- store ord utan innhald: «sømlaus», «revolusjonerande», «løft opplevinga di»
- «Det er ikkje berre X, det er Y»
- ting som kjem i tre: «raskt, enkelt og trygt»
- engelske uttrykk omsette ord for ord
- overdriven entusiasme og utropsteikn

Typiske spor i **innhaldet**:

- oppdikta kundeomtalar og tal, som «over 10 000 nøgde kundar»
- stockbilete som ikkje viser noko ekte frå bedrifta
- tekst som kunne stått på kva side som helst

## Sjekkliste {.check}

- [ ] Gå gjennom appen din og set ein strek under kvart KI-spor du finn.

- [ ] Finn tre andre appar eller nettsider som du trur er laga med KI. Kva har
  dei felles?

## Oppdikta er ikkje berre kjedeleg {.tip}

Oppdikta kundeomtalar og tal er ikkje berre eit KI-spor. Det er villeiande
marknadsføring, og det er ikkje lov. Bruk berre ekte omtalar og ekte tal.


# Steg 2: Kven er de? {.activity}

Eit eige uttrykk startar ikkje med fargar. Det startar med kva bedrifta står
for, og kven de snakkar til.

## Sjekkliste {.check}

- [ ] Skriv tre ord som skildrar bedrifta, til dømes «lokal», «rask» og
  «ærleg». Unngå ord alle bruker, som «kvalitet» og «innovativ».

- [ ] Korleis snakkar de til kundane? Vel éin: som ein kompis, som ein
  profesjonell butikk, eller noko midt imellom. Skriv to dømesetningar.

- [ ] Kva skil dykk frå konkurrentane? Skriv det i éi setning.

## Døme {.tip}

Sykkelvasken: «lokal», «rask», «skuleglad». Vi snakkar som ein medelev. «Vi
vaskar sykkelen din medan du har matte.»


# Steg 3: Lag ein stilguide {.activity}

Ein **stilguide** samlar vala, så alle i bedrifta, og KI-en, gjer likt.

## Sjekkliste {.check}

- [ ] Lag fila `STIL.md` i prosjektmappa, og fyll ut:

  ```markdown
  # Stilguide for [namn]

  ## Kven vi er
  Tre ord: ...
  Slik snakkar vi: ...
  Dette skil oss frå andre: ...

  ## Fargar
  Hovudfarge: #......  (kvifor: ...)
  Bakgrunn: #......
  Tekst: #......

  ## Skrift
  Overskrifter: ...
  Brødtekst: ...

  ## Bilete
  Eigne bilete av produktet og staden. Ingen stockbilete.
  Ingen andlet utan at personen har sagt ja.

  ## Tekst
  Skriv som kundane snakkar. Bruk ord frå intervjua.
  Ingen emojiar i overskrifter. Ingen store ord utan innhald.

  ## Unngå
  - fargeovergangar
  - tre like kort på rad
  - oppdikta omtalar og tal
  ```

- [ ] Vel fargar som passar bedrifta, ikkje standardfargane til verktøyet.
  Sjekk at teksten har god kontrast mot bakgrunnen.

- [ ] Ta to eller tre eigne bilete av produktet eller staden. Har bedrifta ein
  logo, bruk han.


# Steg 4: Få KI-en til å følgje stilguiden {.activity}

## Sjekkliste {.check}

- [ ] Legg til ein regel i `CLAUDE.md` (eller tilsvarande fil for verktøyet du
  bruker):

  ```
  - Følg STIL.md for fargar, skrift, bilete og tekst.
  ```

- [ ] Skriv:

  ```
  Les STIL.md. Gå gjennom appen og list opp alt som bryt med stilguiden,
  eller som ser generisk ut. Foreslå endringar, men ikkje gjer dei før eg
  har sagt ja.
  ```

- [ ] Godta endringane éi og éi, og sjå på resultatet i nettlesaren kvar gong.

- [ ] Skriv om dei viktigaste tekstane sjølv. Bruk ord kundane brukte i
  intervjua. KI-en kan hjelpe med rettskriving, men orda skal vere dykkar.


# Steg 5: Test kor truverdig appen er {.activity}

## Sjekkliste {.check}

- [ ] Vis appen til ein som ikkje har sett han før, i fem sekund. Lukk han, og
  spør:

  1. Kva er dette for noko?
  2. Kven står bak?
  3. Ville du stole nok på han til å bestille?

- [ ] Seier dei «det ser ut som noko ein KI har laga»? Spør kva som gav dei det
  inntrykket, og rett det.

## Test deg sjølv {.flag}

- [ ] Kan du peike på tre ting i appen som berre passar for bedrifta dykkar?

## Lagre {.save}

Lag ein commit med meldinga `Eige uttrykk etter stilguide`.


## Utfordring {.challenge}

Er det greitt å bruke KI til å lage appen, så lenge han ikkje ser KI-laga ut?
Skriv kva du meiner, og når det er rett å seie frå om at noko er laga med KI.
