---
title: Nøkkelring
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå skal du lage en nøkkelring med et hull til ringen og et mønster av små
prikker. Du lærer å skjære bort en bit av en form, og du bruker en løkke så du
slipper å lage hver prikk for seg.

Nøkkelringen blir 5 cm lang, 2 cm bred og 3 mm tykk. Det tar omtrent 10 til 15
minutter å printe.

Det er lurt å ha gjort [Navneskilt](../navneskilt/navneskilt) først.

<!-- BILDE: Ferdig printet nøkkelring med hull i den ene enden og fire prikker
på rad -->


# Steg 1: Lag brikken {.activity}

## Sjekkliste {.check}

- [ ] Åpne [BlocksCAD på norsk](https://www.blockscad3d.com/editor/?lang=nb) og
  kall prosjektet `nokkelring`.

- [ ] Dra en `kube` (cube) fra **3D Former** (3D Shapes) ut i arbeidsområdet.
  Sett `X` til 50, `Y` til 20 og `Z` til 3, og sjekk at det står `usentrert`
  (not centered).

## Test prosjektet {.flag}

__Klikk på Gjengi (Render).__

- [ ] Ser du en liten, flat brikke?


# Steg 2: Lag hullet {.activity}

Et hull er en form du tar bort. Du lager en sylinder der hullet skal være, og
trekker den fra brikken. Det gjør klossen `forskjell` (difference). Formen i den
øverste åpningen er den du beholder. Formen i `minus`-åpningen blir skåret bort.

## Sjekkliste {.check}

- [ ] Dra ut `forskjell` (difference) fra **Sett Ops** (Set Ops).

- [ ] Dra `kube`-klossen inn i den øverste åpningen i `forskjell`.

- [ ] Dra ut en `sylinder` (cylinder) fra **3D Former**. Sett `radius1` og
  `radius2` til 3 og `høyde` (height) til 5. Sjekk at det står `usentrert`.
  Hullet blir da 6 mm bredt.

- [ ] Dra ut `translatere` (translate) fra **Transformering** (Transforms) og
  legg sylinderen inni. Sett `X` til 7, `Y` til 10 og `Z` til -1.

- [ ] Dra `translatere`-klossen inn i `minus`-åpningen i `forskjell`.

## Test prosjektet {.flag}

__Klikk på Gjengi (Render).__

- [ ] Er det et hull i den ene enden av brikken?

- [ ] Hvorfor er `Z` -1 og ikke 0? Prøv å sette `Z` til 0 og `høyde` til 3, og
  gjengi igjen. Snu modellen og se godt etter. Sett tallene tilbake etterpå.

## Tips {.tip}

Sylinderen som skal skjæres bort, bør stikke litt ut over og under brikken. Er
den nøyaktig like høy som brikken, kan det bli en tynn hinne igjen der hullet
skulle vært.

<!-- BILDE: Klossene forskjell, kube og translatere med sylinder, og brikken med
hull i 3D-vinduet -->


# Steg 3: Lag én prikk {.activity}

## Sjekkliste {.check}

- [ ] Dra ut en ny `sylinder`. Sett `radius1` og `radius2` til 2 og `høyde` til
  1.

- [ ] Legg den i en `translatere` med `X` 17, `Y` 10 og `Z` 3. Da ligger prikken
  oppå brikken.

## Test prosjektet {.flag}

__Klikk på Gjengi (Render).__

- [ ] Ser du én prikk oppå brikken? Vi setter delene sammen i steg 5.


# Steg 4: Lag mange prikker med en løkke {.activity}

Du kunne laget fire prikker med fire klosser. Med en løkke lager du én prikk og
ber BlocksCAD gjenta den. Hver gang flytter vi prikken 7 mm bortover.

## Sjekkliste {.check}

- [ ] Dra ut `tell med i fra 1 til 10 med 1` (count with i from 1 to 10 by 1)
  fra **Sløyfe** (Loops). Endre 10 til 4. Da går løkka fire ganger, og `i` er 1,
  2, 3 og 4.

- [ ] Dra `translatere`-klossen med prikken inn i løkka.

- [ ] Nå skal `X` i `translatere` regne ut hvor prikken skal være. Dra en
  regneblokk fra **Matte** (Math) inn i `X`-feltet og lag `10 + 7 × i`. Du
  trenger to regneblokker inni hverandre, og variabelen `i` finner du under
  **Variabler** (Variables).

Slik blir X for hver runde:

| i | X  |
| - | -- |
| 1 | 17 |
| 2 | 24 |
| 3 | 31 |
| 4 | 38 |

## Test prosjektet {.flag}

__Klikk på Gjengi (Render).__

- [ ] Ser du fire prikker på rad?

- [ ] Prøv å endre 7 til 5. Hva skjer? Sett det tilbake til 7.


# Steg 5: Sett alt sammen og lagre {.activity}

## Sjekkliste {.check}

- [ ] Dra ut `union` fra **Sett Ops**. Legg `forskjell`-klossen i den øverste
  åpningen og løkka i `pluss` (plus).

- [ ] Klikk på fanen **Kode** (Code) og se hvordan løkka ser ut i OpenSCAD. Den
  begynner med `for`.

- [ ] Klikk på Gjengi (Render), velg `STL (Binary)` og klikk på **Generer STL**
  (Generate STL).

## Lagre {.save}

Lagre klossene med **Prosjekt** (Project) og **Lagre Blokker til din
Datamaskin** (Save Blocks to your Computer).

## Test prosjektet {.flag}

Sammen med en voksen:

- [ ] Åpne `.stl`-filen i Bambu Studio og trykk på **Slice**.

- [ ] Er tiden omtrent 10 til 15 minutter? Da kan den voksne starte utskriften.

- [ ] Ikke ta på dysen eller platen. Vent til den voksne sier at nøkkelringen
  kan tas ut.

<!-- BILDE: De ferdige klossene for nøkkelringen: union med forskjell og løkke
-->

## Utfordring {.challenge}

- Lag hull i stedet for prikker. Hvor må løkka ligge da?

- Lag to rader med prikker. Kan du legge en løkke inni en annen løkke?

- Lag en rund nøkkelring med en stor `sylinder` i stedet for `kube`.

- Skriv initialene dine med `3D tekst` i stedet for prikker.
