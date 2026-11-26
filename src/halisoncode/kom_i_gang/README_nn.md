---
title: "Lærarrettleiing - Kom i gang"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Om oppgåva {.activity}

Elevane lagar ein robot i Minecraft, opnar Halison Code-editoren i nettlesaren
og skriv sitt første program med blokker. Dei får roboten til å gå, snu seg og
seie hei, og går i ein firkant. Til slutt ser dei det same programmet som
JavaScript. Oppgåva introduserer sekvens, rekkjefølgje og feilsøking.

## Oppgåva passar til: {.check}

__Fag__: Programmering, teknologi

__Tilrådde trinn__: 5. til 10. trinn

__Tema__: Blokkbasert programmering, sekvens, Minecraft

__Nivå__: 1

__Tidsbruk__: Om lag ein time. Dobbeltime dersom elevane tek utfordringane.

## Kompetansemål {.challenge}

- [ ] __Matematikk, 5. trinn__: lage og programmere algoritmar med bruk av
  variablar, vilkår og lykkjer

- [ ] __Programmering, 8.-10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

## Forslag til læringsmål {.challenge}

- [ ] Elevane kan lage ein robot og opne editoren.

- [ ] Elevane kan setje saman blokker i rett rekkjefølgje så roboten gjer det
  dei vil.

- [ ] Elevane kan forklare at eit program blir køyrt éin kommando om gongen,
  ovanfrå og ned.

- [ ] Elevane kan feilsøkje eit program ved å endre tal og rekkjefølgje.

- [ ] Elevane kan peike på at blokkene og JavaScript-koden gjer det same.

## Forslag til vurderingskriterium {.challenge}

- [ ] Eleven oppnår middels måloppnåing ved å få roboten til å gå, snu og seie
  `Hei!`.

- [ ] Eleven oppnår høg måloppnåing ved å få roboten til å gå i ein firkant og
  tilbake til startpunktet, og forklare kva som skjer dersom rekkjefølgja blir
  bytt.

## Føresetnader og utstyr {.challenge}

- [ ] __Føresetnader__: Ingen forkunnskapar i programmering. Det hjelper å ha
  spela litt Minecraft.

- [ ] __Installasjon__: Halison Code må vere installert før timen, sjå oppgåva
  Installere Halison Code. Minecraft Java Edition og ein modlastar som Fabric
  eller NeoForge er påkravd.

- [ ] __Maskiner__: Windows, macOS eller Linux. Nettbrett og mobil fungerer
  ikkje. Elevane treng både Minecraft og ein nettlesar opne samtidig, så ei
  maskin med nok minne og to vindauge side om side er best.

- [ ] __Nett__: Nettlesaren opnar editoren lokalt frå Minecraft. Sjekk at
  nettverket ikkje blokkerer det.

- [ ] __Konto__: Minecraft Java Edition må vere kjøpt. Planlegg for elevar
  utan spelet, til dømes som makkerpar.


# Framgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv oppgåva sjølv i ei verd i `Skapande` og `Vassrett`, så du kjenner
  til korleis roboten oppfører seg.

- [ ] Be elevane lage verda sjølve, så dei har noko å eige. Ei flat verd gjer
  det lett å sjå kva roboten gjer.

## Steg 1: Lag roboten {.check}

- [ ] Elevane skriv `/robot spawn` i chatten. Skriv dei det igjen, blir roboten
  flytta til dei. Det er nyttig dersom han har gått bort.

- [ ] Kjem ikkje roboten, sjekk at dei er i ei verd og at moden er lasta.

## Steg 2: Editoren {.check}

- [ ] `/halisoncode` opnar nettlesaren. Lenkja verkar berre på denne maskina
  og berre medan Minecraft køyrer.

- [ ] Hjelp elevane å plassere vindauga side om side. Pausemenyen i Minecraft
  set spelet på pause, og roboten ventar til menyen blir lukka.

## Steg 3 og 4: Gå, snu og sei {.check}

- [ ] Kategorien Robot er grøn. Bruk namna i oppgåva når du hjelper.

- [ ] Elevar brukar ofte feil retning. Retningane er sett frå roboten, ikkje
  frå spelaren.

- [ ] Elevar dreg blokker ved sida av `ved start`. Då køyrer ingenting. Sjå at
  alle blokkene er festa i ei kjede.

- [ ] Be elevane gjette kva som skjer før dei trykkjer `Kjør`.

## Steg 5: Firkant {.check}

- [ ] Bruk firkanten som framhald. Mange gjentek dei same blokkene fire gonger,
  og då kjem ideen om lykkjer i neste oppgåve.

- [ ] Roboten endar ikkje alltid der han starta dersom eleven brukar ulike tal
  eller snur feil veg. La dei samanlikne.

## Vanlege problem {.protip}

- Programma er borte: dei blir lagra i nettlesaren på maskina eleven brukte.
  Opne editoren i same nettlesar, eller hent inn `.mkcd`-fila eleven lagra
  med `Hent inn` på startsida. På maskiner som blir nullstilte, må elevane
  lagre prosjektet som fil før timen er slutt.

- Roboten står stille etter at eleven bytte vindauge: Minecraft er på pause.
  Trykk `Attende til spelet`. `F3` + `P` slår av pause når vindauget mistar
  fokus, og `/gamerule halisoncode:pause_on_lost_focus false` gjer det for
  heile verda.

- Chatkommandoen verkar ikkje: programmet må køyre og editoren stå open. Trykk
  `Kjør` i editoren før eleven byter til Minecraft.

- Roboten står stille: spelet kan vere på pause, eller blokkene er ikkje kopla
  til `ved start`.

- Roboten er langt unna: `/robot spawn` flyttar han til eleven.

- Programmet køyrer og eleven vil avbryte: stoppknappen i editoren eller
  `/robot stop` i chatten.


# Variasjonar {.activity}

- La elevane byte datamaskiner og lese programma til kvarandre.

- La elevane skrive programmet som tekst i JavaScript og samanlikne med
  blokkene.

- La elevane gi kvarandre oppdrag, som å teikne bokstaven L med roboten.


# Eksterne ressursar {.activity}

- [Halison Code på GitHub](https://github.com/halisonworks/mod-halisoncode):
  kode og utgivingar.

- [Rettleiing for
  spelarar](https://github.com/halisonworks/mod-halisoncode/blob/develop/docs/player/guide-nb.md):
  alle robotkommandoane.
