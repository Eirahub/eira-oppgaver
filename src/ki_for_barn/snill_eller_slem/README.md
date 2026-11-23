---
title: Lærerveiledning - Snill eller slem?
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven lærer opp en tekstmodell i Machine Learning for Kids med snille og slemme
setninger, og bruker den i Scratch til en figur som reagerer på det spilleren
skriver. Til slutt bruker eleven sikkerheten (confidence) til å svare "det
skjønte jeg ikke" når modellen er usikker.

Oppgaven bygger på ideen i *Make me happy* fra Machine Learning for Kids (Dale
Lane, CC BY-NC-SA 4.0). Teksten her er skrevet på nytt.

## Oppgaven passer til: {.check}

__Fag__: Programmering, samfunnsfag, teknologi

__Anbefalte trinn__: 5. til 10. trinn

__Tema__: Maskinlæring med tekst, valg (hvis-ellers), digital dømmekraft

__Tidsbruk__: 60 minutter

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmer med bruk av
  variabler, vilkår og løkker

- [ ] __Programmering, 10. trinn__: gjøre rede for hvordan datamaskiner og
  dataprogram fungerer, og forklare egne og andres koder

- [ ] __Samfunnsfag, 7. trinn__: reflektere over hvordan en selv og andre deltar
  i digital samhandling og drøfte hva det vil si å bruke dømmekraft, sett i lys
  av regler, normer og grenser

## Forslag til vurderingskriterier {.challenge}

Figuren reagerer riktig på de fleste nye setninger, og eleven kan forklare
hvorfor modellen tar feil på setninger som `du er ikke dum`.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Litt erfaring med Scratch: drakter, `spør og
  vent`{.blocksensing} og `hvis`{.blockcontrol}.

- [ ] __Utstyr__: PC med nettleser og internett.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](snill_eller_slem)

### Personvern og konto

Oppgaven bruker **Try it now** på
[machinelearningforkids.co.uk](https://machinelearningforkids.co.uk/). Ifølge
nettstedets hjelpeside (Help, under Data protection and privacy) krever Try it
now ingen innlogging og ingen informasjonskapsler, samler ingen
personopplysninger og sletter alt etter fire timer. Én elev kan ha ett prosjekt
om gangen.

Tekstprosjekter trenes alltid i skyen. Treningseksemplene sendes til IBM Watson
Assistant, som lager modellen. Machine Learning for Kids ber om at IBM ikke
bruker dataene til å forbedre tjenestene sine. Tjenesten drives av én person
(Dale Lane) i Storbritannia. Derfor: bare oppdiktede setninger, ingen navn. Se
[Personvern og
aldersgrenser](../../ki_veiledere/personvern_og_alder/personvern_og_alder).

Vil dere at elevene skal kunne lagre mellom øktene, må en voksen opprette en
lærerkonto (e-post og brukernavn) og lage elevkontoer. Nettstedet anbefaler
generiske brukernavn som `elev1`, ikke ekte navn. Elever kan ikke lage kontoer
selv. Skolen eller klubben er behandlingsansvarlig for det elevene skriver inn,
ifølge nettstedet.

### Tips til veiledere

- Snakk om hva som er greit å skrive som "slemt" eksempel før elevene begynner.
  Ingen navn, ingen stygge ord, ingenting om noen i rommet.

- Norsk står ikke på språklista. Velg `Another language`. Det virker, men
  modellen kan være litt dårligere enn for engelsk.

- Merkelapper kan bare ha bokstaver og tall. Unngå æ, ø og å.

- Treningen tar ofte et par minutter. Står den lenge, last siden på nytt. Sier
  den at for mange modeller trenes, vent litt i stedet for å trykke flere
  ganger.

- Machine Learning for Kids har en egen Scratch-utgave. Prosjekter i vanlig
  Scratch (scratch.mit.edu) får ikke klossene.

- Modellen er borte etter fire timer i Try it now. Scratch-fila kan lagres, men
  eleven må trene en ny modell neste gang.

- Utfordringen `du er ikke dum` viser at modellen ser på ord, ikke på mening.
  Det er et godt utgangspunkt for å snakke om hvorfor KI kan misforstå.

### Hva er testet

Fremgangsmåten følger arbeidsarket *Make me happy* (oppdatert 6.7.2025), og
klossnavnene er hentet fra kildekoden til Machine Learning for Kids
(github.com/IBM/taxinomitis) 23.11.2026. Nettstedet stopper automatiske
nettlesere ved Try it now, så oppgaven er ikke prøvd ende til ende. Det er
heller ikke sjekket at Scratch-utgaven til Machine Learning for Kids har norsk
språkvalg. Hvordan `<`{.blockoperators} virker med sikkerhetsklossen, er ikke
prøvd.
