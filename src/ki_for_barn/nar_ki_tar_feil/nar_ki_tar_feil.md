---
title: Når KI tar feil
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En KI lærer bare av eksemplene den får. Er eksemplene dårlige eller ensidige,
lærer den feil ting. Det kalles **skjevhet**. På engelsk heter det *bias*.

I denne oppgaven lurer du din egen modell med vilje. Så finner du ut hvorfor den
tok feil, og fikser den med bedre eksempler. Til slutt snakker dere om hva dette
betyr for KI i virkeligheten.

Du bør ha gjort [Lær maskinen å se](../maskinen_ser/maskinen_ser) først.

## Personvern {.protip}

Som før: kameraet ser ned på bordet, ikke på personer. Bildene blir i
nettleseren din og forsvinner når du lukker fanen.


# Steg 1: Lag en modell med en felle {.activity}

Du trenger en kopp, en blyant, et hvitt ark og en mørk flate, for eksempel en
mørk bok eller en genser.

## Sjekkliste {.check}

- [ ] Lag et nytt **Image Project** i [Teachable
  Machine](https://teachablemachine.withgoogle.com/).

- [ ] Kall klassene `Kopp` og `Blyant`.

- [ ] Legg det **hvite arket** under kameraet. Ta alle bildene av koppen på det
  hvite arket.

- [ ] Legg den **mørke flaten** under kameraet. Ta alle bildene av blyanten på
  den mørke flaten.

- [ ] Klikk på **Train Model**.

## Test prosjektet {.flag}

- [ ] Test koppen på det hvite arket og blyanten på den mørke flaten. Virker
  det?

Det ser ut som modellen har lært forskjell på kopp og blyant. Men har den det?

<!-- BILDE: To bilder side om side. Til venstre en kopp på hvitt ark, til høyre
en blyant på en mørk bok -->


# Steg 2: Finn feilen {.activity}

## Test prosjektet {.flag}

- [ ] Gjett først: Hva tror du modellen sier hvis du legger **blyanten på det
  hvite arket**? Skriv ned svaret ditt.

- [ ] Prøv det. Hadde du rett?

- [ ] Legg koppen på den mørke flaten. Hva sier modellen nå?

- [ ] Vis bare det hvite arket, uten noe på. Hva sier modellen?

## Hva skjer egentlig? {.tip}

Modellen har kanskje lært **hvit eller mørk**, ikke **kopp eller blyant**. Den
fant den enkleste forskjellen på bildene, og det var bakgrunnen. Du visste at
det var koppen som var viktig. Det visste ikke modellen.

## Tips {.tip}

Virket modellen likevel? Da var kanskje koppen og blyanten veldig ulike. Prøv
igjen med to ting som ligner mer, for eksempel to kopper med ulik farge.


# Steg 3: Fiks modellen med bedre data {.activity}

## Sjekkliste {.check}

- [ ] Ta flere bilder av koppen, nå på den **mørke** flaten.

- [ ] Ta flere bilder av blyanten, nå på det **hvite** arket.

- [ ] Prøv også et tredje underlag, og litt annet lys.

- [ ] Klikk på **Train Model** igjen.

## Test prosjektet {.flag}

- [ ] Test alle fire: kopp og blyant på hvitt og på mørkt. Virker det nå?

- [ ] Er modellen like sikker som før? Se på prosenttallene.


# Steg 4: For mange av én ting {.activity}

Det er ikke bare bakgrunnen som kan gi skjevhet. Hva skjer hvis en klasse har
mange flere eksempler enn en annen?

## Sjekkliste {.check}

- [ ] Lag et nytt **Image Project** med klassene `Kopp`, `Blyant` og
  `Ingenting`.

- [ ] Ta 200 bilder av koppen, men bare 10 av blyanten og 10 av bordet.

- [ ] Tren modellen.

## Test prosjektet {.flag}

- [ ] Vis blyanten fra forskjellige sider. Hvor ofte tror modellen at det er en
  kopp?

- [ ] Vis noe helt annet. Hva gjetter den oftest?


# Steg 5: Snakk sammen {.activity}

Dette skjer også med ekte KI. Snakk om spørsmålene i grupper, eller med
veilederen.

## Sjekkliste {.check}

- [ ] En talegjenkjenner er trent mest på folk fra Oslo. Hvem tror du den
  forstår dårligst? Hvordan kan det løses?

- [ ] En app skal kjenne igjen hudsykdommer. Nesten alle bildene den er trent
  på, er av lys hud. Hva kan gå galt?

- [ ] Hvem bestemmer hvilke eksempler en KI lærer av? Hvem burde være med og
  bestemme?

- [ ] Når er det greit at en KI tar feil, og når er det ikke greit? Tenk på et
  spill og på en lege.

## Hva har du lært? {.tip}

- En KI lærer det som er i dataene, ikke det vi mener.

- Mange og varierte eksempler gir en bedre modell.

- Når en KI tar feil, er det ofte noe med dataene. Da må vi spørre: Hvem er med
  i dataene, og hvem mangler?

## Utfordring {.challenge}

Lag en modell som skal skille mellom to ting. Be en venn finne en måte å lure
den på. Klarer du å fikse modellen så vennen ikke lurer den lenger?
