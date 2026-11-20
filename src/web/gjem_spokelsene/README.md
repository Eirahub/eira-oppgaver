---
title: "Lærerveiledning - CSS: Gjem spøkelsene"
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene plasserer elementer nøyaktig på en nettside med CSS. De gjemmer tre
spøkelser bak møbler i et rom med `position: absolute`, `top`, `left`, `bottom`,
`right` og `z-index`. Til slutt blir rommet et lite spill der en venn klikker på
møblene for å finne spøkelsene. All grafikk er CSS og emoji, så ingen bildefiler
trengs.

Oppgaven gir en praktisk innføring i koordinater (der y vokser nedover), i
lagdeling og i spesifisitet i CSS (hvilken regel som vinner).

## Oppgaven passer til: {.check}

__Fag__: Programmering, Matematikk, Kunst og håndverk, IT1

__Anbefalte trinn__: 7. trinn til VG2

__Tema__: CSS, HTML, Web, Koordinater, Spill

__Nivå__: 3

__Tidsbruk__: Dobbelttime

## Kompetansemål {.challenge}

Oppgaven kan brukes i arbeidet med kompetansemål om programmering, nettsider og
koordinatsystemer. Se målene i læreplanene:

- [ ] [Læreplan i valgfaget programmering
  (PRG01-02)](https://www.udir.no/lk20/prg01-02)

- [ ] [Læreplan i informasjonsteknologi
  (INF01-02)](https://www.udir.no/lk20/inf01-02), for IT1 og IT2

- [ ] [Læreplan i matematikk 1.-10. trinn
  (MAT01-05)](https://www.udir.no/lk20/mat01-05)

## Forslag til læringsmål {.challenge}

- [ ] Eleven kan plassere et element med `position: absolute` og `top`, `left`,
  `bottom` og `right`.

- [ ] Eleven kan forklare hvorfor forelderen trenger `position: relative`.

- [ ] Eleven kan bruke `z-index` til å bestemme hvilket element som står foran.

- [ ] Eleven kan forklare at en regel med id er sterkere enn en regel med
  klasse.

- [ ] Eleven kan endre spillet, for eksempel flytte gjemmesteder eller legge til
  et møbel.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å fullføre oppgaven.

- [ ] Eleven oppnår høy måloppnåelse ved å løse utfordringene, for eksempel
  tilfeldig plassering eller en melding når alle spøkelsene er funnet.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Elevene bør kjenne til HTML-tagger, `id`, `class` og
  enkle CSS-regler, for eksempel fra [Min første
  nettside](../min_forste_nettside/min_forste_nettside.html). Steg 4 bruker litt
  JavaScript, men elevene trenger ikke skrive det selv.

- [ ] __Utstyr__: Datamaskin med nettleser og internett. Prøv selv-boksene
  virker i alle moderne nettlesere, også på Chromebook. Elevene kan også laste
  ned koden og jobbe videre i [VS Code](../vs_code/vs_code.html).

## Fremgangsmåte

Her kommer tips og erfaringer til stegene i oppgaven. [Klikk her for å se
oppgaveteksten.](gjem_spokelsene.html){target=_blank}


# Steg 1: Rommet og det første spøkelset {.activity}

- [ ] Mange elever forventer at y vokser oppover, slik som i matematikken. Tegn
  gjerne koordinatsystemet til rommet på tavla.

- [ ] Når elevene fjerner `position: relative;` fra `#rom`, flytter spøkelset
  seg til et sted målt fra kanten av hele siden. Det er en fin måte å vise hva
  `relative` gjør.


# Steg 2: Møbler {.activity}

- [ ] Rekkefølgen i HTML-en bestemmer hva som står foran når ingen har
  `z-index`. Dette er grunnlaget for steg 3.

- [ ] Emoji ser litt forskjellige ut på Windows, Mac og Chromebook. Kassa kan
  derfor ha en litt annen størrelse, og elevene må kanskje justere `top` og
  `left` for at spøkelset skal være helt skjult.


# Steg 3: z-index {.activity}

- [ ] `z-index` virker bare på elementer med `position`. Glemmer eleven
  `position`, skjer ingenting.


# Steg 4: Finn spøkelsene {.activity}

- [ ] Elevene trenger ikke forstå hele JavaScript-koden. Det viktige er at koden
  bare legger til klassene `flyttet` og `funnet`. Resten gjør CSS.

- [ ] `pointer-events: none;` er nøkkelen til at klikket går gjennom møbelet til
  spøkelset bak. Fjern linjen og la elevene se hva som skjer.

- [ ] Tipset om `#rom .funnet` handler om spesifisitet. Det er et vanlig problem
  i ekte CSS: en regel ser riktig ut, men en annen regel vinner.

## Variasjoner {.challenge}

- [ ] Elevene kan lage sitt eget tema, for eksempel en hage med gjemte dyr eller
  en skog med gjemte skatter.

- [ ] Bytt piksler med prosent og la elevene undersøke hva som skjer når rommet
  endrer størrelse.

- [ ] La elevene bytte maskiner og finne spøkelsene til hverandre.

## Eksterne ressurser {.challenge}

- [ ] [MDN: position
  (engelsk)](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

- [ ] [MDN: z-index
  (engelsk)](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

- [ ] [MDN: Spesifisitet
  (engelsk)](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
