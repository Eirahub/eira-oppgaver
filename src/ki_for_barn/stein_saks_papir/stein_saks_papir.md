---
title: Stein, saks, papir med KI
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå setter du alt sammen. Du lærer opp en modell i **Teachable Machine** til å
kjenne igjen stein, saks og papir med hånden. Så bruker du modellen i et spill i
Scratch, gjennom **Machine Learning for Kids**. Du viser hånden til kameraet, og
datamaskinen spiller mot deg.

Du bør ha gjort [Lær maskinen å se](../maskinen_ser/maskinen_ser) og [Snill
eller slem?](../snill_eller_slem/snill_eller_slem) først.

<!-- BILDE: Scratch-scenen med videobilde av en hånd som viser saks, og en
datamaskin-figur som sier "Jeg valgte papir. Du vant!" -->

## Personvern {.protip}

- Bare **hånden** skal være i bildet. Hold den foran en vegg eller et bord, og
  pass på at ansiktet ditt ikke er med.

- Bildene blir i nettleseren din. Men i steg 3 laster du opp **modellen** til
  Google, så Scratch kan bruke den. Bildene blir ikke lastet opp, bare modellen.
  Alle som har lenken til modellen, kan bruke den.


# Steg 1: Lær opp modellen {.activity}

## Sjekkliste {.check}

- [ ] Lag et nytt **Image Project** i [Teachable
  Machine](https://teachablemachine.withgoogle.com/), med **Standard image
  model**.

- [ ] Lag fire klasser: `stein`, `saks`, `papir` og `ingenting`. Skriv dem med
  små bokstaver. Du trenger navnene nøyaktig slik i Scratch.

- [ ] Ta minst 100 bilder i hver klasse. I `ingenting` tar du bilder uten hånd.

- [ ] Flytt hånden litt mens du tar bilder. Bruk begge hendene. Er dere flere,
  kan alle i gruppa ta noen bilder av hånden sin.

- [ ] Klikk på **Train Model**.

## Test prosjektet {.flag}

- [ ] Vis stein, saks og papir under **Preview**. Er modellen sikker på alle
  tre?

- [ ] Tar den feil? Ta flere bilder i den klassen som går dårligst, og tren på
  nytt.

## Tips {.tip}

Husker du [Når KI tar feil](../nar_ki_tar_feil/nar_ki_tar_feil)? Står du foran
en vegg nå, bør du spille foran den samme veggen senere. Eller ta bilder med
flere bakgrunner.


# Steg 2: Last opp modellen {.activity}

## Sjekkliste {.check}

- [ ] Klikk på **Export Model** (eksporter modellen).

- [ ] Pass på at **Upload (shareable link)** er valgt. Klikk på **Upload my
  model**.

- [ ] Vent til du får en lenke under **Your sharable link**. Den begynner med
  `https://teachablemachine.withgoogle.com/models/`.

- [ ] Kopier lenken. Lim den gjerne inn i et notat, så du ikke mister den.

- [ ] Ikke lukk Teachable Machine ennå. Lukker du fanen, kan du ikke endre
  modellen senere.

<!-- BILDE: Export Model-vinduet i Teachable Machine med Upload my model og en
delbar lenke -->


# Steg 3: Åpne modellen i Scratch {.activity}

## Sjekkliste {.check}

- [ ] Gå til
  [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk/), og
  klikk på **Get started** og **Try it now**.

- [ ] Klikk på **Pretrained** i menyen øverst.

- [ ] Finn **TensorFlow**, og klikk på **Open a TensorFlow model**.

- [ ] Lim inn lenken til modellen din.

- [ ] Velg `Teachable Machine (image or pose)` under **What type of model is
  it?**, og klikk på **Open Scratch**.

- [ ] Velg gjerne norsk med jordkloden øverst til venstre.

Nederst i lista over kategorier har du nå en kategori for modellen din. Klossen
`recognise (data) (label)`{.blockgrey} kjenner igjen et bilde.

<!-- BILDE: Dialogen Use a pre-trained TensorFlow model in Scratch med en lenke
limt inn og Teachable Machine valgt -->


# Steg 4: Slå på kameraet {.activity}

## Sjekkliste {.check}

- [ ] Klikk på knappen **Hent tilleggsfunksjon** nederst til venstre. Velg
  **Sansing med kamera** (på engelsk: **Video Sensing**).

- [ ] Klikk på **Scene** nede til høyre, og lag dette skriptet på scenen:

```blocks
når grønt flagg klikkes
sett video (på v)
sett (0) gjennomsiktighet av video
```

## Test prosjektet {.flag}

__Klikk på det grønne flagget.__

- [ ] Ser du videobildet på scenen? Hold hånden foran kameraet.


# Steg 5: Datamaskinen gjør et valg {.activity}

## Sjekkliste {.check}

- [ ] Slett katten. Lag en ny figur som heter `Datamaskin`.

- [ ] Gi figuren tre drakter: `stein`, `saks` og `papir`. Tegn en enkel hånd for
  hver, eller skriv ordet.

- [ ] Gjør figuren liten og flytt den til et hjørne av scenen.

- [ ] Lag tre variabler for alle figurer: `ditt valg`, `mitt valg` og `kamp`.

## Hvorfor i et hjørne? {.tip}

Modellen ser på hele scenen, også figurene. Den har bare lært bilder av hender.
Jo mindre plass figuren tar, jo mindre forstyrrer den.


# Steg 6: Kjenn igjen hånden {.activity}

Klossen `backdrop image`{.blockgrey} gir et bilde av hele scenen, med videoen.
Den finner du i kategorien **Images**, som Machine Learning for Kids har lagt
til.

## Sjekkliste {.check}

- [ ] Lag dette skriptet på **scenen**:

```blocks
når [mellomrom v] trykkes
sett [ditt valg v] til (recognise (backdrop image :: extension) \(label\) :: extension)
send melding [spill v]
```

- [ ] Lag dette skriptet på figuren `Datamaskin`:

```blocks
når jeg mottar [spill v]
bytt drakt til (tilfeldig tall fra (1) til (3))
sett [mitt valg v] til (drakt [navn v])
si (sett sammen [Jeg valgte ] (mitt valg)) i (2) sekunder
```

## Test prosjektet {.flag}

__Klikk på det grønne flagget.__

- [ ] Vis saks og trykk på mellomrom. Kryss av for `ditt valg` så du ser
  variabelen på scenen. Står det `saks`?

- [ ] Viser datamaskinen et tilfeldig valg?


# Steg 7: Hvem vant? {.activity}

Stein vinner over saks, saks vinner over papir, og papir vinner over stein. Vi
setter de to valgene sammen til ett ord. Da er det bare tre ord som betyr at du
vant: `steinsaks`, `sakspapir` og `papirstein`.

## Sjekkliste {.check}

- [ ] Bytt ut skriptet på `Datamaskin` med dette:

```blocks
når jeg mottar [spill v]
hvis <(ditt valg) = [ingenting]>
  si [Jeg ser ingen hånd!] i (2) sekunder
ellers
  bytt drakt til (tilfeldig tall fra (1) til (3))
  sett [mitt valg v] til (drakt [navn v])
  si (sett sammen [Jeg valgte ] (mitt valg)) i (2) sekunder
  sett [kamp v] til (sett sammen (ditt valg) (mitt valg))
  hvis <(ditt valg) = (mitt valg)>
    si [Uavgjort!] i (2) sekunder
  ellers
    hvis <<<(kamp) = [steinsaks]> eller <(kamp) = [sakspapir]>> eller <(kamp) = [papirstein]>>
      si [Du vant!] i (2) sekunder
    ellers
      si [Jeg vant!] i (2) sekunder
    slutt
  slutt
slutt
```

## Test prosjektet {.flag}

__Klikk på det grønne flagget.__

- [ ] Spill ti runder. Vis hånden, og trykk på mellomrom.

- [ ] Kjente modellen igjen hånden din hver gang? Skriv ned hvor mange ganger
  den tok feil.

- [ ] Datamaskinen velger etter at den har sett hånden din. Kunne den jukset? Se
  i koden. Bruker den `ditt valg` når den velger?

## Lagre {.save}

Klikk på **Fil** og **Lagre på datamaskinen**. Neste gang åpner du modellen fra
Machine Learning for Kids som i steg 3, og så **Fil** og **Last opp fra
maskinen**. Ta vare på lenken til modellen.

## Utfordring {.challenge}

- [ ] Tell poeng for deg og for datamaskinen. Den som først får 5 poeng, vinner.

- [ ] La datamaskinen telle ned "stein, saks, papir!" før den ser på hånden din.

- [ ] Lag ditt eget spill med en annen modell. Kanskje en figur som hopper når
  du viser tommel opp? Husk: bare hender og ting i bildet.
