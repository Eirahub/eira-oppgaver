---
title: Ansvar og personvern
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

Når appen har ekte kundar, har du ansvar for dei. Du må passe på
opplysningane deira, vere ærleg når du sel, og vite kva KI-en har laga for
deg. I denne oppgåva går du gjennom appen din med ei sjekkliste og skriv ei
kort personvernerklæring.

![Illustrasjon av eit skjold med ein hengelås, omgitt av fire ikon: person,
handlekorg, nøkkel og robot](ansvar_nn.png)


# Steg 1: Personopplysningar {.activity}

Ei **personopplysning** er alt som kan knytast til ein person: namn,
telefonnummer, e-post, bilete, adresse og kven som bestilte kva.
Personopplysningslova (GDPR) seier at du berre skal samle det du treng, seie
kva du brukar det til, og slette det når du ikkje treng det lenger.

## Sjekkliste {.check}

- [ ] List opp alle personopplysningar appen samlar. Sjå i `PLAN.md` under
  **Data**.

- [ ] Stryk det du ikkje treng. Treng de etternamn? Telefonnummer?

- [ ] Skriv kvar opplysningane blir lagra, kven som ser dei, og når dei blir
  sletta.

- [ ] Be Claude Code sjekke:

  ```
  Gå gjennom appen og list opp alle stader han samlar eller lagrar
  personopplysningar. Ikkje endre noko.
  ```


# Steg 2: Personvernerklæring {.activity}

Kundane har rett til å vite kva du gjer med opplysningane deira.

## Sjekkliste {.check}

- [ ] Skriv ei kort erklæring med vanlege ord. Ho skal svare på:

  1. Kven er de?
  2. Kva samlar de, og kvifor?
  3. Kvar blir det lagra, og kven ser det?
  4. Når blir det sletta?
  5. Kven kan kunden kontakte for å få innsyn eller få det sletta?

- [ ] Be Claude Code leggje ho inn som ei eiga side i appen, med lenkje frå
  bestillingsskjemaet.


# Steg 3: Ærleg sal {.activity}

Marknadsføringslova seier at reklame skal vere tydeleg, og at du ikkje kan
love noko som ikkje stemmer. Prisen skal vere klar før kunden bestiller.

## Sjekkliste {.check}

- [ ] Les gjennom teksten i appen. Lovar de noko de ikkje kan halde, som
  «alltid ledig» eller «ferdig på 5 minutt»?

- [ ] Står prisen tydeleg før kunden bestiller?

- [ ] Sender appen e-post eller meldingar med reklame? Då må kunden ha sagt ja
  til det først.


# Steg 4: Løyndomar og tryggleik {.activity}

## Sjekkliste {.check}

- [ ] Søk i prosjektmappa etter `password`, `key`, `token` og `secret`. Finst
  noko av det i koden? Fjern det, og lag ein ny nøkkel der han kom frå.

- [ ] Sjekk at `.gitignore` held løynde filer utanfor Git (sjå [Del koden på
  GitHub](../../git/del_pa_github/del_pa_github)).

- [ ] Har du limt inn noko løynd til KI-en? Rekn det som delt. Byt passordet
  eller nøkkelen.


# Steg 5: Kva har KI-en laga? {.activity}

KI-en kan ta feil, finne på ting og lage noko som liknar på andre sitt arbeid.

## Sjekkliste {.check}

- [ ] Har appen bilete eller tekst KI-en har laga? Skriv i appen at dei er
  laga med KI, viss det kan mistydast.

- [ ] Har KI-en brukt bilete, skrifttypar eller kode frå andre? Spør:

  ```
  List opp alt i prosjektet som kjem frå andre, med lisens.
  ```

- [ ] Skriv tre setningar om kva KI-en gjorde feil i prosjektet ditt, og
  korleis du fann det ut.

## Test deg sjølv {.flag}

- [ ] Kan du forklare ein kunde kva appen gjer med opplysningane deira, på 30
  sekund?


## Utfordring {.challenge}

Datatilsynet har rettleiarar for små verksemder. Finn éin ting der som gjeld
appen din, og rett han.
