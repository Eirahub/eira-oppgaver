---
title: Snill eller slem?
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå skal du lage en figur i Scratch som blir glad når du skriver noe snilt til
den, og lei seg når du skriver noe slemt. Figuren skjønner det ikke av seg selv.
Du lærer den opp med eksempler.

Du bruker nettstedet **Machine Learning for Kids**. Der lærer du opp en modell
som kjenner igjen tekst, og så bruker du den i Scratch.

Ideen kommer fra oppgaven *Make me happy* på Machine Learning for Kids.

<!-- BILDE: Scratch-scenen med et smilende fjes og en snakkeboble der spilleren
har skrevet "du er flink" -->

## Personvern {.protip}

- Skriv bare setninger du finner på selv. Ikke skriv navn på deg selv, venner,
  lærere eller andre ekte personer.

- Når du trener modellen, sendes setningene dine til en server på nettet. Der
  blir de lest av en tjeneste fra IBM som lager modellen. Skriv ingenting du
  ikke ville hengt opp på veggen i kodeklubben.

- Med **Try it now** slettes prosjektet ditt etter fire timer.


# Steg 1: Lag et prosjekt {.activity}

## Sjekkliste {.check}

- [ ] Gå til
  [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk/).

- [ ] Klikk på **Get started** (kom i gang), og så på **Try it now** (prøv nå).
  Da trenger du ingen konto.

- [ ] Klikk på **+ Add a new project** (legg til et nytt prosjekt).

- [ ] Skriv `snill eller slem` som **Project Name**.

- [ ] Velg `recognising text` (kjenne igjen tekst) under **Project Type**.

- [ ] Velg `Another language` (et annet språk) under **Language**. Norsk står
  ikke på lista.

- [ ] Velg `In your web browser` (i nettleseren din) under **Storage**.

- [ ] Klikk på **Create**.

## Tips {.tip}

Sier nettstedet at du ikke kan lage flere prosjekter? Med **Try it now** kan du
bare ha ett prosjekt om gangen. Slett det gamle prosjektet først.


# Steg 2: Gi maskinen eksempler {.activity}

Maskinen skal lære to **merkelapper**: `snill` og `slem`. Hver merkelapp er som
en bøtte du putter eksempler i.

## Sjekkliste {.check}

- [ ] Klikk på prosjektet `snill eller slem`, og så på **Train**.

- [ ] Klikk på **+ Add new label** og skriv `snill`. Lag en til som heter
  `slem`. Bruk bare bokstaver uten æ, ø og å.

- [ ] Klikk på **Add example** i bøtta `snill`. Skriv noe snilt, for eksempel
  `du er flink`.

- [ ] Skriv noe slemt i bøtta `slem`, for eksempel `du er dum`.

- [ ] Fortsett til du har minst 8 eksempler i hver bøtte.

<!-- BILDE: Train-siden i Machine Learning for Kids med bøttene snill og slem,
hver med flere korte setninger -->

## Tips {.tip}

Skriv eksemplene forskjellig. Noen korte og noen lange. Noen med *du*, noen
uten. Jo mer forskjellige de er, jo bedre lærer maskinen. Slemme eksempler skal
være slemme, men ikke stygge. Tenk på hva en robot ville tålt å høre.


# Steg 3: Tren og test {.activity}

## Sjekkliste {.check}

- [ ] Klikk på **< Back to project** (tilbake til prosjektet), og så på **Learn
  & Test** (lær og test).

- [ ] Klikk på **Train new machine learning model**. Det kan ta et par minutter.

## Test prosjektet {.flag}

- [ ] Skriv en setning du **ikke** har brukt som eksempel, og trykk Enter. Hva
  svarer modellen?

- [ ] Hvor sikker er den? Tallet bak merkelappen er sikkerheten, fra 0 til 100.

- [ ] Prøv noe som verken er snilt eller slemt, for eksempel `i dag er det
  tirsdag`. Hva skjer?

Tar modellen ofte feil? Gå tilbake til **Train**, legg til flere eksempler, og
tren en ny modell.


# Steg 4: Lag figuren i Scratch {.activity}

## Sjekkliste {.check}

- [ ] Gå tilbake til prosjektet, og klikk på **Make** (lag).

- [ ] Klikk på **Scratch 3**, og så på **Open in Scratch 3**. Det åpner en egen
  utgave av Scratch der modellen din er med.

- [ ] Vil du ha Scratch på norsk? Klikk på jordkloden øverst til venstre, og
  velg **Norsk Bokmål**.

- [ ] Slett katten. Lag en ny figur med pensel-knappen (**Tegn**).

- [ ] Tegn et fjes uten munn. Lag to kopier av drakten. Gi de tre draktene
  navnene `usikker`, `glad` og `lei seg`.

- [ ] Tegn en rett munn på `usikker`, et smil på `glad` og en sur munn på `lei
  seg`.

<!-- BILDE: Draktfanen i Scratch med de tre draktene usikker, glad og lei seg
-->


# Steg 5: Kod figuren {.activity}

Nederst i lista over kategorier finner du en ny kategori med samme navn som
prosjektet ditt, `snill eller slem`. Der er klossene fra modellen. Klossene er
på engelsk: `recognise text` betyr *kjenn igjen tekst*, og `label` betyr
*merkelapp*.

## Sjekkliste {.check}

- [ ] Lag dette skriptet på figuren:

```blocks
når grønt flagg klikkes
gjenta for alltid
  bytt drakt til [usikker v]
  spør [Si noe til meg!] og vent
  hvis <(recognise text (svar) \(label\) :: extension) = (snill :: extension)>
    bytt drakt til [glad v]
  ellers
    bytt drakt til [lei seg v]
  slutt
  vent (2) sekunder
slutt
```

Klossen `recognise text (svar) (label)`{.blockgrey} gir deg merkelappen modellen
tror passer for det du skrev. Klossen `snill`{.blockgrey} finner du i samme
kategori.

## Test prosjektet {.flag}

__Klikk på det grønne flagget.__

- [ ] Skriv noe snilt. Blir figuren glad?

- [ ] Skriv noe slemt. Blir den lei seg?

- [ ] Prøv setninger som ikke var med i eksemplene dine.


# Steg 6: Bruk sikkerheten {.activity}

Hva skal figuren gjøre når du skriver `i dag er det tirsdag`? Den må velge
`snill` eller `slem`, men den er nok ikke sikker. Det kan vi bruke.

Klossen `recognise text (svar) (confidence)`{.blockgrey} gir et tall fra 0 til
100 for hvor sikker modellen er.

## Sjekkliste {.check}

- [ ] Bytt ut skriptet med dette:

```blocks
når grønt flagg klikkes
gjenta for alltid
  bytt drakt til [usikker v]
  spør [Si noe til meg!] og vent
  hvis <(recognise text (svar) \(confidence\) :: extension) < [70]>
    si [Hmm, det skjønte jeg ikke helt.] i (2) sekunder
  ellers
    hvis <(recognise text (svar) \(label\) :: extension) = (snill :: extension)>
      bytt drakt til [glad v]
      si [Takk!] i (2) sekunder
    ellers
      bytt drakt til [lei seg v]
      si [Det var ikke snilt.] i (2) sekunder
    slutt
  slutt
slutt
```

## Test prosjektet {.flag}

- [ ] Skriv noe som verken er snilt eller slemt. Sier figuren at den ikke
  skjønte det?

- [ ] Prøv å endre `70` til et høyere eller lavere tall. Hva skjer?

## Lagre {.save}

Klikk på **Fil** og **Lagre på datamaskinen**. Da har du Scratch-prosjektet.
Modellen er ikke med i fila. Etter fire timer er modellen borte fra **Try it
now**, og da må du lage prosjektet og trene modellen på nytt.

## Utfordring {.challenge}

- [ ] Legg til en tredje merkelapp, for eksempel `spørsmål`, og en drakt som
  passer.

- [ ] La figuren svare med forskjellige setninger. Bruk `tilfeldig tall fra (1)
  til (3)`{.blockoperators}.

- [ ] Hvor lurer du modellen? Prøv `du er ikke dum`. Hvorfor tar den feil?
  Hvordan kan du fikse det med flere eksempler?
