---
title: Lær maskinen å høre
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå skal maskinen lære å kjenne igjen lyder. Du lærer den forskjellen på et
klapp, en plystring og et knips. Den skal også vite når det er stille.

Du bruker **Teachable Machine** igjen, men nå med mikrofonen.

<!-- BILDE: Teachable Machine med lydklassene Background Noise, Klapp og
Plystre, og prosentstolper i Preview -->

## Personvern {.protip}

- Ikke si navn eller andre ting om deg selv eller andre mens du tar opp.

- Lydene du tar opp, blir i nettleseren din på denne PC-en. De sendes ikke til
  noen server. Når du lukker fanen, er alt borte.


# Steg 1: Lag et lydprosjekt {.activity}

## Sjekkliste {.check}

- [ ] Gå til

  [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com/)

  og klikk på **Get Started**.

- [ ] Klikk på **Audio Project** (lydprosjekt).

Den første klassen heter **Background Noise**, som betyr *bakgrunnsstøy*. Den
kan du ikke slette. Der skal du ta opp hvordan det høres ut når ingen lager lyd
med vilje.

![Background Noise med mikrofonen åpen og knappen Record 20 Seconds
](tm_bakgrunnsstoy.png)


# Steg 2: Ta opp bakgrunnsstøy {.activity}

Teachable Machine deler opptakene opp i biter på ett sekund. Hver bit er ett
**eksempel**.

## Sjekkliste {.check}

- [ ] Klikk på **Mic** i `Background Noise`. Nettleseren spør om du vil la
  nettstedet bruke mikrofonen. Klikk **Tillat**.

- [ ] Vær stille, og klikk på **Record 20 Seconds**. Vent til opptaket er
  ferdig.

- [ ] Klikk på **Extract Sample** (hent ut eksempler). Nå skal du ha minst 20
  eksempler.

## Tips {.tip}

Bakgrunnsstøy er ikke helt stille. Det kan være vifta i PC-en, prat i rommet
eller trafikk utenfor. Det er bra. Da lærer maskinen hvordan rommet ditt høres
ut.


# Steg 3: Ta opp lydene dine {.activity}

## Sjekkliste {.check}

- [ ] Gi `Class 2` navnet `Klapp`.

- [ ] Klikk på **Mic**, og så på den blå **Record**-knappen. Klapp mange ganger
  mens den tar opp.

- [ ] Klikk på **Extract Sample**. Gjenta til du har minst 8 eksempler.

- [ ] Klikk på **Add a class** og lag klassen `Plystre`. Ta opp på samme måte.
  Kan du ikke plystre, kan du knipse eller banke i bordet.

## Tips {.tip}

Klapp litt forskjellig: hardt, mykt, nær og langt fra mikrofonen. Da lærer
maskinen at alt dette er klapp.


# Steg 4: Tren og test {.activity}

## Sjekkliste {.check}

- [ ] Klikk på **Train Model**, og vent til den er ferdig. Bytt ikke fane mens
  den trener.

## Test prosjektet {.flag}

- [ ] Klapp. Får `Klapp` den lengste stolpen under **Preview**?

- [ ] Plystre. Hva skjer?

- [ ] Vær stille. Blir det `Background Noise`?

- [ ] Si "hei". Hva tror modellen at det er?

## Hva skjer egentlig? {.tip}

Modellen ser ikke på lyden slik vi hører den. Den gjør hvert sekund om til et
slags bilde av lyden. Høyden i bildet viser tonen, og fargen viser hvor sterk
lyden er. Så kjenner den igjen mønstre i bildene, akkurat som i forrige oppgave.

<!-- BILDE: Lydeksempler i Teachable Machine, vist som små fargebilder -->


# Steg 5: Prøv med noen andre {.activity}

En modell er bare så god som eksemplene den har lært av.

## Test prosjektet {.flag}

- [ ] La en venn klappe og plystre. Virker modellen like godt for vennen din?

- [ ] Flytt deg langt fra PC-en. Virker den fortsatt?

## Utfordring {.challenge}

- [ ] Lag en klasse for et ord, for eksempel `Hopp`. Si ordet med forskjellige
  stemmer. Ikke bruk navn.

- [ ] Hva skjer hvis to lyder ligner, som et klapp og et bank i bordet? Prøv å
  lære maskinen forskjellen.

## Lagre {.save}

Lukker du fanen, er lydene og modellen borte. Det trenger du ikke tenke på nå.
