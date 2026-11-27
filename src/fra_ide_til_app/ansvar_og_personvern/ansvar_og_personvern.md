---
title: Ansvar og personvern
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

**Fase:** Test med kunder (alpha/beta). Se [Fra idé til produksjon](../fasene/fasene).

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

- [ ] Tjener dere penger på lenker (affiliate) eller reklame? Merk tydelig at
  det er reklame. Er brukerne barn og unge, er reglene for reklame strengere.

- [ ] Bruker reklamen eller lenkene sporing av brukerne, for eksempel
  informasjonskapsler? Det krever ofte samtykke. Sjekk hos Forbrukertilsynet og
  Datatilsynet hva som gjelder.


# Steg 4: Hemmeligheter og sikkerhet {.activity}

## Sjekkliste {.check}

- [ ] Søk i prosjektmappa etter `password`, `key`, `token` og `secret`. Finnes
  noe av det i koden? Fjern det, og lag en ny nøkkel der den kom fra.

- [ ] Sjekk at `.gitignore` holder hemmelige filer utenfor Git (se [Del koden på
  GitHub](../../git/del_pa_github/del_pa_github)).

- [ ] Har du limt inn noe hemmelig til KI-en? Regn det som delt. Bytt passordet
  eller nøkkelen.


# Steg 5: KI, merking og opphavsrett {.activity}

KI-en kan ta feil, finne på ting og lage noe som ligner på andres arbeid.
Reglene for KI er nye og endrer seg. Her er det viktigste å kjenne til, men
sjekk selv hva som gjelder når du lager appen.

**Merking av KI-innhold.** EUs KI-forordning (AI Act) krever blant annet at
bilder, lyd og video som er laget eller endret med KI, og som ligner ekte
personer, steder eller hendelser, merkes. Kravene gjelder i EU fra august 2026.
Norge skal ta dem inn i en egen KI-lov. Uansett lov: lurer du folk til å tro at
noe KI-laget er ekte, kan det være villedende markedsføring.

**Opphavsrett til det KI-en lager.** I Norge krever opphavsrett «original og
individuell skapende åndsinnsats» fra et menneske. Det er uklart hvor mye som
er beskyttet når KI-en har gjort jobben, og da kan andre kanskje kopiere det
fritt. Det du selv har skrevet, fotografert, valgt ut og satt sammen, står
sterkere. Vilkårene til verktøyet bestemmer også hva du har lov til å bruke
resultatet til.

**Andres rettigheter.** Ikke be KI-en etterligne andres logo, merkevare,
figurer eller kjente personer. Ikke last opp andres bilder, tekster eller
musikk til en KI uten lov. Bilder av ekte personer, også KI-endrede, krever at
personen har sagt ja.

**Retusjert reklame.** I Norge må reklame merkes når kroppsfasong, størrelse
eller hud er endret. Om det også gjelder personer som er helt laget av KI, må
du sjekke hos Forbrukertilsynet.

## Sjekkliste {.check}

- [ ] List opp alt i appen som er laget med KI: tekst, bilder, ikoner og kode.
  Spør også:

  ```
  List opp alt i prosjektet som kommer fra andre, med lisens.
  ```

- [ ] Kan noe av det forveksles med ekte personer, steder eller hendelser?
  Merk det, for eksempel med «Bildet er laget med KI».

- [ ] Ligner noe på andres logo, figurer eller merkevare? Bytt det ut.

- [ ] Sjekk vilkårene til KI-verktøyet: Hvem eier resultatet, og kan du bruke
  det i en bedrift?

- [ ] Skriv tre setninger om hva KI-en gjorde feil i prosjektet ditt, og hvordan
  du fant det ut.

## Tips {.protip}

Er du i tvil, så merk det. Åpenhet om KI bygger tillit, og det er noe annet
enn at appen ser generisk ut. Se [Gi appen et eget
uttrykk](../eget_uttrykk/eget_uttrykk).


# Steg 6: Hva koster det å bryte reglene? {.activity}

Brudd på reglene kan koste mye mer enn appen tjener. Dette er noe av det en
liten bedrift kan møte:

| Hva | Hvem krever | Hva det kan koste |
|---|---|---|
| Overtredelsesgebyr for brudd på personvernreglene | Datatilsynet | Opptil 20 millioner euro, eller 4 prosent av den globale årsomsetningen hvis det er høyere. Gebyret skal stå i forhold til bruddet, men også små virksomheter kan få gebyr |
| Erstatning | De som har lidd skade | Økonomisk tap, og også skade som ikke er økonomisk |
| Gebyr og tvangsmulkt for ulovlig markedsføring | Forbrukertilsynet | Pengebeløp, og krav om å stoppe |
| Lengre angrerett | Kundene | Får kunden ikke vite om angreretten ved kjøp på nett, kan fristen bli forlenget med opptil 12 måneder |
| Misbruk av en lekket nøkkel | Leverandøren av tjenesten | Regningen for bruken, som regel til den som eier kontoen |
| Brudd på opphavsrett | Den som eier bildet, koden eller teksten | Vederlag og erstatning, og dobbelt vederlag ved forsett eller grov uaktsomhet |
| Tapte kunder og dårlig omdømme | Markedet | Salg som forsvinner, og tid til å rydde opp |

Tabellen viser hva regelverket åpner for. Regler og beløp kan endre seg, og hva
som gjelder for deg, må du sjekke selv hos Datatilsynet og Forbrukertilsynet.

## Sjekkliste {.check}

- [ ] Åpne `RISIKO.md` fra [Sikkerhet og
  risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko). Skriv for hver risiko
  hva den kan koste: gebyr, erstatning, regninger, tid og tapte kunder.

- [ ] Sammenlign med det appen tjener eller sparer i måneden. Lønner det seg
  fortsatt?

- [ ] Hvem betaler hvis noe går galt: bedriften, eleven eller den voksne som
  står som ansvarlig? Skriv det ned.

- [ ] Hva koster tiltakene? Tofaktor, færre data og en god
  personvernerklæring er nesten gratis sammenlignet med et brudd.

## Tips {.protip}

Den billigste personopplysningen er den du aldri samler inn.

## Prompter du kan lære av {.protip}

Bytt ut det som står i klammer. Legg aldri inn navn, passord eller andres
personopplysninger. Se hvorfor promptene virker, og lag dine egne.

- **Første utkast til personvernerklæring:**

  ```
  Skriv et utkast til personvernerklæring ut fra dette: [hva vi
  samler, hvorfor, hvor det lagres, når det slettes]. Bruk enkle ord.
  Merk det du er usikker på.
  ```

- **Finn villedende påstander:**

  ```
  Gå gjennom teksten i appen og finn påstander som kan være
  villedende markedsføring. Forklar hvorfor.
  ```

- **Spør om kilden:**

  ```
  Hva sier reglene om [rett til sletting] for en liten bedrift? Gi
  lenke til en offisiell kilde, og si hva du er usikker på.
  ```

KI-en er ikke jurist og kan ta feil. Bruk svaret som et utkast, og sjekk hos
Datatilsynet og Forbrukertilsynet.

## Test deg selv {.flag}

- [ ] Kan du forklare en kunde hva appen gjør med opplysningene deres, på 30
  sekunder?

- [ ] Kan du nevne tre ting et brudd på reglene kan koste bedriften?


## Utfordring {.challenge}

Datatilsynet har veiledere for små virksomheter. Finn én ting der som gjelder
appen din, og rett den.
