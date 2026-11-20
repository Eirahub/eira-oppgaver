---
title: "Lærarrettleiing - CSS: Gøym spøkelsa"
author: Tor Einar Enne
language: nn
---


# Om oppgåva {.activity}

Elevane plasserer element nøyaktig på ei nettside med CSS. Dei gøymer tre
spøkelse bak møblar i eit rom med `position: absolute`, `top`, `left`, `bottom`,
`right` og `z-index`. Til slutt blir rommet eit lite spel der ein ven klikkar på
møblane for å finne spøkelsa. All grafikk er CSS og emoji, så ingen biletfiler
trengst.

Oppgåva gir ei praktisk innføring i koordinatar (der y veks nedover), i
lagdeling og i spesifisitet i CSS (kva regel som vinn).

## Oppgåva passar til: {.check}

__Fag__: Programmering, Matematikk, Kunst og handverk, IT1

__Tilrådde trinn__: 7. trinn til VG2

__Tema__: CSS, HTML, Web, Koordinatar, Spel

__Nivå__: 3

__Tidsbruk__: Dobbeltime

## Kompetansemål {.challenge}

Oppgåva kan brukast i arbeidet med kompetansemål om programmering, nettsider og
koordinatsystem. Sjå måla i læreplanane:

- [ ] [Læreplan i valfaget programmering
  (PRG01-02)](https://www.udir.no/lk20/prg01-02)

- [ ] [Læreplan i informasjonsteknologi
  (INF01-02)](https://www.udir.no/lk20/inf01-02), for IT1 og IT2

- [ ] [Læreplan i matematikk 1.-10. trinn
  (MAT01-05)](https://www.udir.no/lk20/mat01-05)

## Forslag til læringsmål {.challenge}

- [ ] Eleven kan plassere eit element med `position: absolute` og `top`, `left`,
  `bottom` og `right`.

- [ ] Eleven kan forklare kvifor forelderen treng `position: relative`.

- [ ] Eleven kan bruke `z-index` til å bestemme kva element som står framfor.

- [ ] Eleven kan forklare at ein regel med id er sterkare enn ein regel med
  klasse.

- [ ] Eleven kan endre spelet, til dømes flytte gøymestader eller leggje til eit
  møbel.

## Forslag til vurderingskriterium {.challenge}

- [ ] Eleven oppnår middels måloppnåing ved å fullføre oppgåva.

- [ ] Eleven oppnår høg måloppnåing ved å løyse utfordringane, til dømes
  tilfeldig plassering eller ei melding når alle spøkelsa er funne.

## Føresetnader og utstyr {.challenge}

- [ ] __Føresetnader__: Elevane bør kjenne til HTML-taggar, `id`, `class` og
  enkle CSS-reglar, til dømes frå [Mi første
  nettside](../min_forste_nettside/min_forste_nettside_nn.html). Steg 4 brukar
  litt JavaScript, men elevane treng ikkje skrive det sjølve.

- [ ] __Utstyr__: Datamaskin med nettlesar og internett. Prøv selv-boksane
  verkar i alle moderne nettlesarar, også på Chromebook. Elevane kan òg laste
  ned koden og jobbe vidare i [VS Code](../vs_code/vs_code_nn.html).

## Framgangsmåte

Her kjem tips og erfaringar til stega i oppgåva. [Klikk her for å sjå
oppgåveteksten.](gjem_spokelsene_nn.html){target=_blank}


# Steg 1: Rommet og det første spøkelset {.activity}

- [ ] Mange elevar ventar at y veks oppover, slik som i matematikken. Teikn
  gjerne koordinatsystemet til rommet på tavla.

- [ ] Når elevane fjernar `position: relative;` frå `#rom`, flyttar spøkelset
  seg til ein stad målt frå kanten av heile sida. Det er ein fin måte å vise kva
  `relative` gjer.


# Steg 2: Møblar {.activity}

- [ ] Rekkjefølgja i HTML-en bestemmer kva som står framfor når ingen har
  `z-index`. Dette er grunnlaget for steg 3.

- [ ] Emoji ser litt ulike ut på Windows, Mac og Chromebook. Kassa kan difor ha
  ein litt annan storleik, og elevane må kanskje justere `top` og `left` for at
  spøkelset skal vere heilt skjult.


# Steg 3: z-index {.activity}

- [ ] `z-index` verkar berre på element med `position`. Gløymer eleven
  `position`, skjer ingenting.


# Steg 4: Finn spøkelsa {.activity}

- [ ] Elevane treng ikkje forstå heile JavaScript-koden. Det viktige er at koden
  berre legg til klassane `flyttet` og `funnet`. Resten gjer CSS.

- [ ] `pointer-events: none;` er nøkkelen til at klikket går gjennom møbelet til
  spøkelset bak. Fjern linja og la elevane sjå kva som skjer.

- [ ] Tipset om `#rom .funnet` handlar om spesifisitet. Det er eit vanleg
  problem i ekte CSS: ein regel ser rett ut, men ein annan regel vinn.

## Variasjonar {.challenge}

- [ ] Elevane kan lage sitt eige tema, til dømes ein hage med gøymde dyr eller
  ein skog med gøymde skattar.

- [ ] Byt pikslar med prosent og la elevane undersøkje kva som skjer når rommet
  endrar storleik.

- [ ] La elevane byte maskiner og finne spøkelsa til kvarandre.

## Eksterne ressursar {.challenge}

- [ ] [MDN: position
  (engelsk)](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

- [ ] [MDN: z-index
  (engelsk)](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)

- [ ] [MDN: Spesifisitet
  (engelsk)](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
