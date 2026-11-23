---
title: Navneskilt
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Du skal lage et navneskilt med navnet ditt i opphøyde bokstaver. Du bygger det
med klosser i BlocksCAD, lagrer det som en `.stl`-fil og får det printet på
klubbens 3D-printer.

Skiltet blir omtrent 8 cm langt, 2,5 cm høyt og et halvt centimeter tykt. Det
tar omtrent 10 til 20 minutter å printe.

![Illustrasjon av et ferdig printet navneskilt i blå plast med navnet Ola i
opphøyde bokstaver](navneskilt_print.jpg)


# Steg 1: Åpne BlocksCAD {.activity}

BlocksCAD ligner på Scratch. Klossene ligger i kategorier til venstre, og du
drar dem ut i arbeidsområdet. Til høyre ser du modellen i 3D.

## Sjekkliste {.check}

- [ ] Åpne [BlocksCAD på norsk](https://www.blockscad3d.com/editor/?lang=nb).

- [ ] Skriv `navneskilt` i feltet for **Prosjektnavn** (Project Name). Filene du
  lagrer, får dette navnet.

## Tips {.tip}

Alle mål i BlocksCAD er i millimeter. 10 millimeter er 1 centimeter.

Modellen har tre retninger: **X** er bortover, **Y** er innover og **Z** er
oppover.


# Steg 2: Lag platen {.activity}

Platen er en flat boks. I BlocksCAD heter en boks `kube` (cube), selv om sidene
ikke trenger å være like lange.

## Sjekkliste {.check}

- [ ] Klikk på kategorien **3D Former** (3D Shapes) og dra en `kube` (cube) ut i
  arbeidsområdet.

- [ ] Skriv inn målene: `X` 80, `Y` 25 og `Z` 3. Da blir platen 80 mm lang, 25
  mm bred og 3 mm tykk.

- [ ] Sjekk at det står `usentrert` (not centered) i klossen. Da starter platen
  i hjørnet der X, Y og Z er 0.

## Test prosjektet {.flag}

__Klikk på Gjengi (Render) under 3D-vinduet.__

- [ ] Ser du en flat plate?

- [ ] Dra med musa i 3D-vinduet for å snu modellen. Bruk musehjulet for å zoome.

![BlocksCAD med kube-klossen X 80, Y 25 og Z 3 i arbeidsområdet og en flat,
rosa plate i 3D-vinduet](plate.png)


# Steg 3: Lag teksten {.activity}

## Sjekkliste {.check}

- [ ] Klikk på kategorien **Tekst** (Text) og dra ut `3D tekst` (3D text).

- [ ] Klikk på `abc` i klossen og skriv navnet ditt.

- [ ] Sett `størrelse` (size) til 10 og `tykkelse` (thickness) til 2. Bokstavene
  blir da omtrent 1 cm høye og 2 mm tykke.

## Test prosjektet {.flag}

__Klikk på Gjengi (Render).__

- [ ] Ser du navnet ditt? Det ligger nede ved platen, ikke oppå den. Det fikser
  vi i neste steg.

## Tips {.tip}

Finner du ikke kategorien Tekst? Da er den enkle verktøykassen valgt. Bytt til
**Avansert Verktøykasse** (Advanced Toolbox). Den har flere kategorier.


# Steg 4: Flytt teksten opp på platen {.activity}

For å flytte en form bruker du `translatere` (translate). Det betyr å flytte.
Klossen har tre tall: hvor langt formen skal flyttes i X, Y og Z.

## Sjekkliste {.check}

- [ ] Klikk på kategorien **Transformering** (Transforms) og dra ut
  `translatere` (translate).

- [ ] Dra `3D tekst`-klossen inn i `translatere`-klossen.

- [ ] Sett `X` til 5, `Y` til 7 og `Z` til 3. Da flyttes teksten 5 mm inn fra
  kanten, 7 mm innover og 3 mm opp, akkurat så høyt som platen er tykk.

## Test prosjektet {.flag}

__Klikk på Gjengi (Render).__

- [ ] Ligger navnet oppå platen nå?

- [ ] Er navnet for langt for platen? Gjør platen lengre (større `X` i `kube`)
  eller teksten mindre (mindre `størrelse`).


# Steg 5: Sett delene sammen {.activity}

Printeren skal lage én ting, ikke to. Med `union` limer du formene sammen til én
modell.

## Sjekkliste {.check}

- [ ] Klikk på kategorien **Sett Ops** (Set Ops) og dra ut `union`.

- [ ] Dra `kube`-klossen inn i den øverste åpningen i `union`.

- [ ] Dra `translatere`-klossen (med teksten inni) inn i åpningen som heter
  `pluss` (plus).

## Test prosjektet {.flag}

__Klikk på Gjengi (Render).__

- [ ] Ser modellen ut som et navneskilt?

- [ ] Klikk på fanen **Kode** (Code) over klossene. Her ser du koden som
  klossene lager. Den er skrevet i OpenSCAD. Finner du tallene 80, 25 og 3?
  Klikk på **Blocks** for å gå tilbake.

![Klossene for navneskiltet: union med kube i den øverste åpningen og
translatere med 3D tekst Ola i pluss. I 3D-vinduet står Ola oppå
platen.](navneskilt_klosser.png)


# Steg 6: Lagre som STL {.activity}

En `.stl`-fil beskriver formen på modellen. Det er den filen printeren trenger.

## Sjekkliste {.check}

- [ ] Klikk på Gjengi (Render) en gang til, så du vet at modellen er ny.

- [ ] Velg `STL (Binary)` i listen ved siden av knappen under 3D-vinduet.

- [ ] Klikk på **Generer STL** (Generate STL). Filen lastes ned til
  datamaskinen.

## Lagre {.save}

Lagre også klossene, så du kan endre skiltet senere. Klikk på **Prosjekt**
(Project) og **Lagre Blokker til din Datamaskin** (Save Blocks to your
Computer). Du får en `.xml`-fil. Den kan du åpne igjen med **Last opp Blokker
fra din Datamaskin** (Load Blocks from your Computer).


# Steg 7: Gjør klar til printing {.activity}

Dette steget gjør du sammen med en voksen.

## Sjekkliste {.check}

- [ ] Gi `.stl`-filen til en voksen, eller lagre den der veilederen sier.

- [ ] Den voksne åpner filen i Bambu Studio og trykker på **Slice**. Da regner
  programmet ut hvordan printeren skal legge plasten.

- [ ] Se på tiden Bambu Studio viser. Den bør være omtrent 10 til 20 minutter.
  Er den mye lengre, gjør skiltet mindre og lagre på nytt.

- [ ] Den voksne starter utskriften.

## Tips {.tip}

Ikke ta på dysen eller platen inne i printeren. De blir veldig varme. Vent til
den voksne sier at skiltet kan tas ut.

## Utfordring {.challenge}

- Lag en ramme rundt navnet: legg fire smale `kube`-klosser langs kantene og
  flytt dem på plass med `translatere`.

- Prøv en annen `skrifttype` (font) i `3D tekst`-klossen.

- Lag et hull i skiltet så du kan henge det opp. Hvordan du skjærer bort en bit,
  lærer du i [Nøkkelring](../nokkelring/nokkelring).
