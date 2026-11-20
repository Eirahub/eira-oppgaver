---
title: "Lærerveiledning - HTML: Video og lyd"
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene legger inn video og lyd på en nettside med `<video>` og `<audio>`, og
lager teksting i formatet WebVTT. De lærer hvorfor `controls` og teksting er
viktig for brukerne, og hvordan de bygger inn video fra YouTube på en måte som
lagrer mindre om dem som ser på. Eksemplene bruker frie klipp (CC0) fra MDN Web
Docs.

## Oppgaven passer til: {.check}

__Fag__: Programmering, Norsk, Kunst og håndverk, Medier og kommunikasjon, IT1

__Anbefalte trinn__: 5. trinn til VG3

__Tema__: HTML, Web, Multimedia, Universell utforming

__Nivå__: 2

__Tidsbruk__: Dobbelttime

## Kompetansemål {.challenge}

Oppgaven kan brukes i arbeidet med kompetansemål om programmering, nettsider og
sammensatte tekster. Se målene i læreplanene:

- [ ] [Læreplan i valgfaget programmering
  (PRG01-02)](https://www.udir.no/lk20/prg01-02)

- [ ] [Læreplan i informasjonsteknologi
  (INF01-02)](https://www.udir.no/lk20/inf01-02), for IT1 og IT2

- [ ] [Læreplan i norsk (NOR01-06)](https://www.udir.no/lk20/nor01-06)

## Forslag til læringsmål {.challenge}

- [ ] Eleven kan legge inn video og lyd med avspillingskontroller.

- [ ] Eleven kan lage en enkel tekstingsfil og koble den til en video.

- [ ] Eleven kan forklare hvem som har nytte av teksting og av tekst som
  beskriver lyd.

- [ ] Eleven kan bygge inn en video fra YouTube.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å fullføre steg 1 til 3.

- [ ] Eleven oppnår høy måloppnåelse ved å lage teksting til sin egen video og
  løse minst én av utfordringene.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Det er lurt å ha gjort [Min første
  nettside](../min_forste_nettside/min_forste_nettside.html). Steg 4 bruker [VS
  Code](../vs_code/vs_code.html).

- [ ] __Utstyr__: Datamaskin med nettleser og internett, og gjerne
  hodetelefoner. Steg 1 til 3 og 5 virker i Prøv selv-boksene i alle moderne
  nettlesere, også på Chromebook. Steg 4 krever at elevene jobber med filer, for
  eksempel i VS Code med Live Preview, og at de har en kort video de har laget
  selv.

## Fremgangsmåte

Her kommer tips og erfaringer til stegene i oppgaven. [Klikk her for å se
oppgaveteksten.](video_og_lyd.html){target=_blank}


# Steg 1 og 2: Video og lyd {.activity}

- [ ] Med mange elever i samme rom blir det fort mye lyd. Bruk hodetelefoner,
  eller be elevene dempe lyden.

- [ ] Eksempelfilene lastes fra MDN. Blokkerer skolens nett eksterne mediefiler,
  vises bare teksten inne i `<video>`.


# Steg 3: Teksting {.activity}

- [ ] Forskjellen på `captions` og `subtitles` er nyttig å snakke om: *captions*
  beskriver også lyder, for eksempel *(dør smeller)*, og er laget for dem som
  ikke hører.


# Steg 4: Lag din egen teksting {.activity}

- [ ] Når `index.html` åpnes ved å dobbeltklikke på fila, viser mange nettlesere
  ikke tekstingen. Bruk Live Preview i VS Code.

- [ ] Tidene i `.vtt`-fila må ha riktig format, for eksempel `00:03.000`. En
  manglende tom linje mellom bitene er en vanlig feil.

- [ ] Snakk om personvern og samtykke før elevene filmer hverandre. Bruk gjerne
  filmer uten ansikter, for eksempel av gjenstander eller natur.

- [ ] Hold videoene korte. Store filer gjør siden treg å laste.


# Steg 5: Video fra YouTube {.activity}

- [ ] YouTube kan være blokkert på skolens nett. Sjekk på forhånd.

## Variasjoner {.challenge}

- [ ] Elevene kan lage en lydbok eller et lydkort der de leser inn sin egen
  tekst.

- [ ] Elevene kan lage teksting på et annet språk de kan, og legge den til som
  et ekstra `<track>`.

- [ ] Kombiner med et prosjekt i norsk eller samfunnsfag, der elevene lager en
  kort film med teksting.

## Eksterne ressurser {.challenge}

- [ ] [MDN: Video-elementet
  (engelsk)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

- [ ] [MDN: Track-elementet
  (engelsk)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)

- [ ] [MDN: WebVTT
  (engelsk)](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)
