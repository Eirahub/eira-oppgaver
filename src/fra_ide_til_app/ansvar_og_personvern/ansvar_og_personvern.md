---
title: Ansvar og personvern
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Når appen har ekte kunder, har du ansvar for dem. Du må passe på
opplysningene deres, være ærlig når du selger, og vite hva KI-en har laget for
deg. I denne oppgaven går du gjennom appen din med en sjekkliste og skriver en
kort personvernerklæring.

![Illustrasjon av et skjold med en hengelås, omgitt av fire ikoner: person,
handlekurv, nøkkel og robot](ansvar.png)


# Steg 1: Personopplysninger {.activity}

En **personopplysning** er alt som kan knyttes til en person: navn,
telefonnummer, e-post, bilde, adresse og hvem som bestilte hva. Personvernloven
(GDPR) sier at du bare skal samle det du trenger, si hva du bruker det til, og
slette det når du ikke trenger det lenger.

## Sjekkliste {.check}

- [ ] List opp alle personopplysninger appen samler. Se i `PLAN.md` under
  **Data**.

- [ ] Stryk det du ikke trenger. Trenger dere etternavn? Telefonnummer?

- [ ] Skriv hvor opplysningene lagres, hvem som ser dem, og når de slettes.

- [ ] Be Claude Code sjekke:

  ```
  Gå gjennom appen og list opp alle steder den samler eller lagrer
  personopplysninger. Ikke endre noe.
  ```


# Steg 2: Personvernerklæring {.activity}

Kundene har rett til å vite hva du gjør med opplysningene deres.

## Sjekkliste {.check}

- [ ] Skriv en kort erklæring med vanlige ord. Den skal svare på:

  1. Hvem er dere?
  2. Hva samler dere, og hvorfor?
  3. Hvor lagres det, og hvem ser det?
  4. Når slettes det?
  5. Hvem kan kunden kontakte for å få innsyn eller få det slettet?

- [ ] Be Claude Code legge den inn som en egen side i appen, med lenke fra
  bestillingsskjemaet.


# Steg 3: Ærlig salg {.activity}

Markedsføringsloven sier at reklame skal være tydelig, og at du ikke kan love
noe som ikke stemmer. Prisen skal være klar før kunden bestiller.

## Sjekkliste {.check}

- [ ] Les gjennom teksten i appen. Lover dere noe dere ikke kan holde, som
  «alltid ledig» eller «ferdig på 5 minutter»?

- [ ] Står prisen tydelig før kunden bestiller?

- [ ] Sender appen e-post eller meldinger med reklame? Da må kunden ha sagt ja
  til det først.


# Steg 4: Hemmeligheter og sikkerhet {.activity}

## Sjekkliste {.check}

- [ ] Søk i prosjektmappa etter `password`, `key`, `token` og `secret`. Finnes
  noe av det i koden? Fjern det, og lag en ny nøkkel der den kom fra.

- [ ] Sjekk at `.gitignore` holder hemmelige filer utenfor Git (se [Del koden på
  GitHub](../../git/del_pa_github/del_pa_github)).

- [ ] Har du limt inn noe hemmelig til KI-en? Regn det som delt. Bytt passordet
  eller nøkkelen.


# Steg 5: Hva har KI-en laget? {.activity}

KI-en kan ta feil, finne på ting og lage noe som ligner på andres arbeid.

## Sjekkliste {.check}

- [ ] Har appen bilder eller tekst KI-en har laget? Skriv i appen at de er laget
  med KI, hvis det kan misforstås.

- [ ] Har KI-en brukt bilder, skrifttyper eller kode fra andre? Spør:

  ```
  List opp alt i prosjektet som kommer fra andre, med lisens.
  ```

- [ ] Skriv tre setninger om hva KI-en gjorde feil i prosjektet ditt, og hvordan
  du fant det ut.

## Test deg selv {.flag}

- [ ] Kan du forklare en kunde hva appen gjør med opplysningene deres, på 30
  sekunder?


## Utfordring {.challenge}

Datatilsynet har veiledere for små virksomheter. Finn én ting der som gjelder
appen din, og rett den.
