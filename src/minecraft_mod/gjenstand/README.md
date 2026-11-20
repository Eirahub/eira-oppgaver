---
title: Lærerveiledning - Gjenstand
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene lager sin første gjenstand i Minecraft: en rubin. De registrerer et
`Item` i klassen `ModItems`, lager en fane i kreativ modus og tegner en
tekstur på 16 x 16 piksler. De skriver de to modellfilene og språkfilene på
norsk og engelsk. Oppgaven introduserer registre, `Identifier` og forskjellen på
`assets` og `data`.

## Oppgaven passer til: {.check}

__Fag__: Programmering, valgfag programmering, informasjonsteknologi, kunst og
håndverk (for teksturene)

__Anbefalte trinn__: 8. trinn til VG3

__Tema__: Tekstbasert programmering, Minecraft, registre, ressursfiler

__Nivå__: 3

__Tidsbruk__: Dobbeltime.

## Kompetansemål {.challenge}

Kompetansemål er ikke knyttet til oppgaven ennå. Hent eventuelle mål fra
[læreplanen i informasjonsteknologi på
udir.no](https://www.udir.no/lk20/inf01-02) som passer for gruppa.

## Forslag til læringsmål {.challenge}

- [ ] Elevene kan forklare hva et register er, og hvorfor et item må
  registreres.

- [ ] Elevene kan forklare hvilke tre filer et item trenger: tekstur, modell og
  `items`-fil.

- [ ] Elevene kan forklare forskjellen på `assets` og `data`.

- [ ] Elevene kan legge til oversettelser i språkfiler.

- [ ] Elevene kan forklare hvorfor `ModItems.init()` må kalles.

## Forslag til vurderingskriterier {.challenge}

- [ ] Eleven oppnår middels måloppnåelse ved å få rubinen med tekstur og navn i
  spillet.

- [ ] Eleven oppnår høy måloppnåelse ved å lage et nytt item (utfordringen) og
  forklare hvorfor itemet blir en svart og lilla rute når en fil mangler.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Oppgavene Tom mod og Oppskrift, og kurset Java
  (klasser, metodereferanser og static).

- [ ] __Utstyr__: IntelliJ IDEA med Minecraft Development og JDK 25. Minecraft
  26.3 med Fabric.

- [ ] __Tegneverktøy__: Et program som kan lagre PNG med gjennomsiktig bakgrunn.
  Oppgaven nevner Piskel og Blockbench, som virker i nettleseren. Sjekk at de
  er åpne på skolens nett, eller bruk et annet tegneprogram.

- [ ] __Maskin__: Minst 8 GB minne. Spillet startes fra IntelliJ med
  `runClient`.


# Fremgangsmåte {.activity}

## Før timen {.check}

- [ ] Prøv `runClient` på elevmaskinene. Første oppstart tar tid.

- [ ] Lag en eksempeltekstur selv, så du kan vise hvordan 16 x 16 ser ut.

## Steg 1 og 2: Id og ModItems {.check}

- [ ] Klassen `RubinMod` må ha riktig pakke og `MOD_ID`. Se at elevene kopierer
  fra oppgaven.

- [ ] Elever bruker `ResourceLocation` fra veiledninger på nettet. I
  Minecraft 26.3 heter den `Identifier`.

- [ ] Klassen `ModItems` blir rød første gang. Det er normalt, siden klassen
  ikke finnes ennå. `Alt + Enter` hjelper med import, men det finnes flere
  klasser med samme navn, så les pakkenavnet.

- [ ] `setId(key)` må kalles før itemet lages, ellers krasjer spillet ved
  oppstart. Si det høyt.

## Steg 3 og 4: Tekstur og modell {.check}

- [ ] Mappe `assets` mot `data`: `assets` er det spilleren ser og hører.

- [ ] Elever tegner et bilde med hvit bakgrunn eller feil størrelse. Be dem
  sjekke 16 x 16 piksler og gjennomsiktig bakgrunn.

- [ ] Hver fil må ha riktig navn og ligge i riktig mappe. Små forskjeller gir
  svart og lilla rute.

## Steg 5: Navn {.check}

- [ ] Norsk bokmål heter `no_no`, ikke `nb_no`. Vanligste feil i hele kurset.

- [ ] Komma mellom linjene i språkfilene, men ikke etter siste.

## Steg 6: Prøv {.check}

- [ ] Be elevene bytte språk i spillet og se begge navnene.

- [ ] `/give @s rubinmod:rubin 64` er en rask test, uavhengig av fanen.

## Vanlige problemer {.protip}

- Svart og lilla rute: filnavn eller mappenavn er feil. Loggen sier ofte hvilken
  fil som mangler. Søk etter `rubin` i den.

- Spillet krasjer ved oppstart med en feil om id: `setId` mangler.

- Fanen finnes ikke: `itemGroup.rubinmod.rubiner` mangler i språkfilen, eller
  `ModItems.init()` kalles ikke fra `onInitialize()`.

- Endringene vises ikke: Java-kode krever at spillet startes på nytt. Endringer
  i ressursfiler kan også kreve det, så start på nytt hvis noe er uklart.


# Variasjoner {.activity}

- La elevene lage flere gjenstander, og bytte tekstur med hverandre.

- La elevene lage en gjenstand som bare kan ligge 16 i hver rute.

- La kunstelever lage teksturer for hele klassen.


# Fasit {.activity}

`steg/03_gjenstand` i løsningsrepoet. <!-- LENKE: løsningsrepo -->


# Eksterne ressurser {.activity}

- [Piskel](https://www.piskelapp.com/): tegning av piksel-kunst i nettleseren.

- [Blockbench](https://www.blockbench.net/): modeller og teksturer.

- [Fabric](https://fabricmc.net/): dokumentasjon for Fabric.
