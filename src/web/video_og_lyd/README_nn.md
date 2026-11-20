---
title: "Lærarrettleiing - HTML: Video og lyd"
author: Tor Einar Enne
language: nn
---


# Om oppgåva {.activity}

Elevane legg inn video og lyd på ei nettside med `<video>` og `<audio>`, og
lagar teksting i formatet WebVTT. Dei lærer kvifor `controls` og teksting er
viktig for brukarane, og korleis dei byggjer inn video frå YouTube på ein måte
som lagrar mindre om dei som ser på. Eksempla brukar frie klipp (CC0) frå MDN
Web Docs.

## Oppgåva passar til: {.check}

__Fag__: Programmering, Norsk, Kunst og handverk, Medium og kommunikasjon, IT1

__Tilrådde trinn__: 5. trinn til VG3

__Tema__: HTML, Web, Multimedia, Universell utforming

__Nivå__: 2

__Tidsbruk__: Dobbeltime

## Kompetansemål {.challenge}

Oppgåva kan brukast i arbeidet med kompetansemål om programmering, nettsider og
samansette tekstar. Sjå måla i læreplanane:

- [ ] [Læreplan i valfaget programmering
  (PRG01-02)](https://www.udir.no/lk20/prg01-02)

- [ ] [Læreplan i informasjonsteknologi
  (INF01-02)](https://www.udir.no/lk20/inf01-02), for IT1 og IT2

- [ ] [Læreplan i norsk (NOR01-06)](https://www.udir.no/lk20/nor01-06)

## Forslag til læringsmål {.challenge}

- [ ] Eleven kan leggje inn video og lyd med avspelingskontrollar.

- [ ] Eleven kan lage ei enkel tekstingsfil og kople ho til ein video.

- [ ] Eleven kan forklare kven som har nytte av teksting og av tekst som
  skildrar lyd.

- [ ] Eleven kan byggje inn ein video frå YouTube.

## Forslag til vurderingskriterium {.challenge}

- [ ] Eleven oppnår middels måloppnåing ved å fullføre steg 1 til 3.

- [ ] Eleven oppnår høg måloppnåing ved å lage teksting til sin eigen video og
  løyse minst éi av utfordringane.

## Føresetnader og utstyr {.challenge}

- [ ] __Føresetnader__: Det er lurt å ha gjort [Mi første
  nettside](../min_forste_nettside/min_forste_nettside_nn.html). Steg 4 brukar
  [VS Code](../vs_code/vs_code_nn.html).

- [ ] __Utstyr__: Datamaskin med nettlesar og internett, og gjerne
  hovudtelefonar. Steg 1 til 3 og 5 verkar i Prøv selv-boksane i alle moderne
  nettlesarar, også på Chromebook. Steg 4 krev at elevane jobbar med filer, til
  dømes i VS Code med Live Preview, og at dei har ein kort video dei har laga
  sjølve.

## Framgangsmåte

Her kjem tips og erfaringar til stega i oppgåva. [Klikk her for å sjå
oppgåveteksten.](video_og_lyd_nn.html){target=_blank}


# Steg 1 og 2: Video og lyd {.activity}

- [ ] Med mange elevar i same rom blir det fort mykje lyd. Bruk hovudtelefonar,
  eller be elevane dempe lyden.

- [ ] Eksempelfilene blir lasta frå MDN. Blokkerer nettet på skulen eksterne
  mediefiler, blir berre teksten inne i `<video>` vist.


# Steg 3: Teksting {.activity}

- [ ] Skilnaden på `captions` og `subtitles` er nyttig å snakke om: *captions*
  skildrar også lydar, til dømes *(dør smell)*, og er laga for dei som ikkje
  høyrer.


# Steg 4: Lag di eiga teksting {.activity}

- [ ] Når `index.html` blir opna ved å dobbeltklikke på fila, viser mange
  nettlesarar ikkje tekstinga. Bruk Live Preview i VS Code.

- [ ] Tidene i `.vtt`-fila må ha rett format, til dømes `00:03.000`. Ei tom
  linje som manglar mellom bitane, er ein vanleg feil.

- [ ] Snakk om personvern og samtykke før elevane filmar kvarandre. Bruk gjerne
  filmar utan andlet, til dømes av gjenstandar eller natur.

- [ ] Hald videoane korte. Store filer gjer sida treg å laste.


# Steg 5: Video frå YouTube {.activity}

- [ ] YouTube kan vere blokkert på nettet til skulen. Sjekk på førehand.

## Variasjonar {.challenge}

- [ ] Elevane kan lage ei lydbok eller eit lydkort der dei les inn sin eigen
  tekst.

- [ ] Elevane kan lage teksting på eit anna språk dei kan, og leggje ho til som
  eit ekstra `<track>`.

- [ ] Kombiner med eit prosjekt i norsk eller samfunnsfag, der elevane lagar ein
  kort film med teksting.

## Eksterne ressursar {.challenge}

- [ ] [MDN: Video-elementet
  (engelsk)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

- [ ] [MDN: Track-elementet
  (engelsk)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)

- [ ] [MDN: WebVTT
  (engelsk)](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API)
