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

- [ ] Tener de pengar på lenkjer (affiliate) eller reklame? Merk tydeleg at det
  er reklame. Er brukarane born og unge, er reglane for reklame strengare.

- [ ] Bruker reklamen eller lenkjene sporing av brukarane, til dømes
  informasjonskapslar? Det krev ofte samtykke. Sjekk hos Forbrukartilsynet og
  Datatilsynet kva som gjeld.


# Steg 4: Løyndomar og tryggleik {.activity}

## Sjekkliste {.check}

- [ ] Søk i prosjektmappa etter `password`, `key`, `token` og `secret`. Finst
  noko av det i koden? Fjern det, og lag ein ny nøkkel der han kom frå.

- [ ] Sjekk at `.gitignore` held løynde filer utanfor Git (sjå [Del koden på
  GitHub](../../git/del_pa_github/del_pa_github)).

- [ ] Har du limt inn noko løynd til KI-en? Rekn det som delt. Byt passordet
  eller nøkkelen.


# Steg 5: KI, merking og opphavsrett {.activity}

KI-en kan ta feil, finne på ting og lage noko som liknar på arbeidet til andre.
Reglane for KI er nye og endrar seg. Her er det viktigaste å kjenne til, men
sjekk sjølv kva som gjeld når du lagar appen.

**Merking av KI-innhald.** KI-forordninga til EU (AI Act) krev mellom anna at
bilete, lyd og video som er laga eller endra med KI, og som liknar ekte
personar, stader eller hendingar, blir merkte. Krava gjeld i EU frå august
2026. Noreg skal ta dei inn i ei eiga KI-lov. Uansett lov: lurer du folk til å
tru at noko KI-laga er ekte, kan det vere villeiande marknadsføring.

**Opphavsrett til det KI-en lagar.** I Noreg krev opphavsrett «original og
individuell skapende åndsinnsats» frå eit menneske. Det er uklart kor mykje som
er verna når KI-en har gjort jobben, og då kan andre kanskje kopiere det fritt.
Det du sjølv har skrive, fotografert, valt ut og sett saman, står sterkare.
Vilkåra til verktøyet bestemmer òg kva du har lov til å bruke resultatet til.

**Rettane til andre.** Ikkje be KI-en etterlikne logoen, merkevara eller
figurane til andre, eller kjende personar. Ikkje last opp bilete, tekstar eller
musikk som andre har laga, til ein KI utan lov. Bilete av ekte personar, òg
KI-endra, krev at personen har sagt ja.

**Retusjert reklame.** I Noreg må reklame merkast når kroppsfasong, storleik
eller hud er endra. Om det òg gjeld personar som er heilt laga av KI, må du
sjekke hos Forbrukartilsynet.

## Sjekkliste {.check}

- [ ] List opp alt i appen som er laga med KI: tekst, bilete, ikon og kode.
  Spør òg:

  ```
  List opp alt i prosjektet som kjem frå andre, med lisens.
  ```

- [ ] Kan noko av det forvekslast med ekte personar, stader eller hendingar?
  Merk det, til dømes med «Biletet er laga med KI».

- [ ] Liknar noko på logoen, figurane eller merkevara til andre? Byt det ut.

- [ ] Sjekk vilkåra til KI-verktøyet: Kven eig resultatet, og kan du bruke det
  i ei bedrift?

- [ ] Skriv tre setningar om kva KI-en gjorde feil i prosjektet ditt, og
  korleis du fann det ut.

## Tips {.protip}

Er du i tvil, så merk det. Openheit om KI byggjer tillit, og det er noko anna
enn at appen ser generisk ut. Sjå [Gi appen eit eige
uttrykk](../eget_uttrykk/eget_uttrykk_nn).


# Steg 6: Kva kostar det å bryte reglane? {.activity}

Brot på reglane kan koste mykje meir enn appen tener. Dette er noko av det ei
lita bedrift kan møte:

| Kva | Kven krev | Kva det kan koste |
|---|---|---|
| Lovbrotsgebyr for brot på personvernreglane | Datatilsynet | Opptil 20 millionar euro, eller 4 prosent av den globale årsomsetninga viss det er høgare. Gebyret skal stå i forhold til brotet, men òg små verksemder kan få gebyr |
| Erstatning | Dei som har lide skade | Økonomisk tap, og òg skade som ikkje er økonomisk |
| Gebyr og tvangsmulkt for ulovleg marknadsføring | Forbrukartilsynet | Pengesum, og krav om å stoppe |
| Lengre angrerett | Kundane | Får kunden ikkje vite om angreretten ved kjøp på nett, kan fristen bli forlengd med opptil 12 månader |
| Misbruk av ein lekt nøkkel | Leverandøren av tenesta | Rekninga for bruken, som regel til den som eig kontoen |
| Brot på opphavsrett | Den som eig biletet, koden eller teksten | Vederlag og erstatning, og dobbelt vederlag ved forsett eller grov aktløyse |
| Tapte kundar og dårleg omdøme | Marknaden | Sal som forsvinn, og tid til å rydde opp |

Tabellen viser kva regelverket opnar for. Reglar og beløp kan endre seg, og kva
som gjeld for deg, må du sjekke sjølv hos Datatilsynet og Forbrukartilsynet.

## Sjekkliste {.check}

- [ ] Opne `RISIKO.md` frå [Tryggleik og
  risiko](../sikkerhet_og_risiko/sikkerhet_og_risiko_nn). Skriv for kvar risiko
  kva han kan koste: gebyr, erstatning, rekningar, tid og tapte kundar.

- [ ] Samanlikn med det appen tener eller sparer i månaden. Løner det seg
  framleis?

- [ ] Kven betaler viss noko går gale: bedrifta, eleven eller den vaksne som
  står som ansvarleg? Skriv det ned.

- [ ] Kva kostar tiltaka? Tofaktor, færre data og ei god
  personvernerklæring er nesten gratis samanlikna med eit brot.

## Tips {.protip}

Den billigaste personopplysninga er den du aldri samlar inn.

## Prompter du kan lære av {.protip}

Byt ut det som står i klammer. Legg aldri inn namn, passord eller
personopplysningar om andre. Sjå kvifor promptane verkar, og lag dine eigne.

- **Første utkast til personvernerklæring:**

  ```
  Skriv eit utkast til personvernerklæring ut frå dette: [kva vi
  samlar, kvifor, kvar det blir lagra, når det blir sletta]. Bruk
  enkle ord. Merk det du er usikker på.
  ```

- **Finn villeiande påstandar:**

  ```
  Gå gjennom teksten i appen og finn påstandar som kan vere
  villeiande marknadsføring. Forklar kvifor.
  ```

- **Spør om kjelda:**

  ```
  Kva seier reglane om [rett til sletting] for ei lita bedrift? Gi
  lenkje til ei offisiell kjelde, og sei kva du er usikker på.
  ```

KI-en er ikkje jurist og kan ta feil. Bruk svaret som eit utkast, og sjekk hos
Datatilsynet og Forbrukartilsynet.

## Test deg sjølv {.flag}

- [ ] Kan du forklare ein kunde kva appen gjer med opplysningane deira, på 30
  sekund?

- [ ] Kan du nemne tre ting eit brot på reglane kan koste bedrifta?


## Utfordring {.challenge}

Datatilsynet har rettleiarar for små verksemder. Finn éin ting der som gjeld
appen din, og rett han.
