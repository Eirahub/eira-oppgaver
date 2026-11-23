---
title: Bit:Bot XL
language: nb
---

I dette kurset programmerer du en liten robotbil med en micro:bit. Du lager
programmet med klosser i MakeCode i nettleseren. Roboten kjører og svinger,
lyser og piper, følger en svart linje på gulvet, ser hindringer og lar seg
fjernstyre med en annen micro:bit.

Kurset er for roboten **Bit:Bot XL** fra 4tronix. Det passer fra rundt 5.
trinn. Det er fint om du har prøvd MakeCode før, for eksempel i
[micro:bit-kurset](../microbit/), men det er ikke nødvendig.

<!-- BILDE: Bit:Bot XL med micro:bit, sett skrått forfra, på et lyst gulv -->


## Dette trenger du

- En Bit:Bot XL med en micro:bit satt i kontakten på roboten.

- Batterier i batteriholderen under roboten.

- En USB-kabel som passer til micro:biten.

- En PC med nettleser og internett.

- Til oppgave 3: svart teip på et lyst gulv eller et stort ark.

- Til oppgave 4: en ultralydsensor for Bit:Bot hvis dere har den, ellers en
  lommelykt.

- Til oppgave 5: en micro:bit til som fjernkontroll, med batteripakke.


## Slik får du robotklossene i MakeCode

Klossene som styrer roboten, er ikke med i MakeCode fra før. Du legger dem til
som en **utvidelse**. Det må du gjøre i hvert nytt prosjekt.

- Åpne [MakeCode for micro:bit](https://makecode.microbit.org/) og lag et nytt
  prosjekt.

- Klikk på tannhjulet øverst til høyre, og velg **Utvidelser**.

- Skriv `bitbot` i søkefeltet og trykk Enter. Velg **bitbot** fra 4tronix.

- Nå har du en ny, oransje kategori som heter `Bitbot`{.microbitbitbot}. Den
  har tre deler: `Kjøring`{.microbitbitbot}, `Lys`{.microbitbitbot} og
  `Sensorer og styring`{.microbitbitbot}.

<!-- BILDE: Skjermbilde av kategorilista i MakeCode med Bitbot og de tre delene -->

Utvidelsen virker med alle tre Bit:Bot-modellene (vanlig Bit:Bot, XL og PRO).
Den finner selv ut hvilken modell du har når programmet starter. Da må
roboten være slått på.


## Slik får du programmet over på roboten

- Slå av roboten med bryteren.

- Koble micro:biten til PC-en med USB-kabelen, og klikk på **Last ned** i
  MakeCode.

- Koble fra kabelen. Sett roboten på gulvet og slå den på. Nå starter
  programmet.

Hvorfor slå av først? Hvis programmet får motorene til å gå, kan roboten kjøre
av gårde med kabelen i. Når du slår på roboten etterpå, starter programmet på
nytt, og utvidelsen ser hvilken robot den sitter i.


## Sikkerhet

- Roboten kjører på gulvet, med god plass rundt. Ikke kjør på bord.

- Hold fingre, hår og løse ledninger unna hjulene.

- Bruk batteriene veilederen gir deg. Ikke bland nye og gamle batterier, og
  sett dem riktig vei (pluss mot pluss).

- Slå av roboten når du ikke bruker den. Batteriene varer lenger, og roboten
  kjører ikke av gårde når du legger den fra deg.

- Blir et batteri varmt, eller ser det ødelagt eller lekk ut, slår du av
  roboten og sier fra til en voksen.

- Lysene på roboten kan bli svært sterke. Ikke se rett inn i dem.


## Hvordan komme i gang

- Begynn med [Kjør og sving](kjor_og_sving/kjor_og_sving). Ta oppgavene i
  rekkefølge.

- Vil du heller ha én samlet oppgave, finner du [Kodetimen med
  Bit:Bot](../microbit/kodetimen-programmer-en-selvkjorende-robot-med-bitbot/kodetimen-programmer-en-selvkjorende-robot-med-bitbot)
  i micro:bit-kurset.

- Har dere robotene Dash eller Cue, se kurset [Wonderbot](../wonderbot/).


## Har dere en annen robot? {.tip}

Hvert robotkurs er skrevet for én robot, så klossene og sensorene stemmer.
Under **Roboter** på forsiden finner du kursene for de andre robotene, for
eksempel [Wonderbot](../wonderbot/) for Dash og Cue.


# For veiledere {.tip}

- Klossene kommer fra utvidelsen
  [4tronix/BitBot](https://github.com/4tronix/BitBot) (versjon 2.1.13). Den
  ligger i lista over godkjente utvidelser i MakeCode, og den har norske
  klossetekster.

- Bit:Bot XL har to linjesensorer, to lyssensorer, 12 lys (FireLeds) og en
  summer. Ultralydsensoren er tilbehør. Oppgave 4 har et eget steg for
  robotene som ikke har den.

- Lær elevene å slå av roboten før de laster ned. Det er den vanligste grunnen
  til at en robot kjører av gårde fra PC-en.

- Merk robotene og de ekstra micro:bitene med nummer. I oppgave 5 trenger hvert
  par sin egen radiogruppe.

- Ingen av programmene i kurset er kjørt på en ekte robot ennå. Hver
  lærerveiledning sier hva som er usikkert.

Bit:Bot er et produkt fra 4tronix. Kurset er ikke laget av eller godkjent av
4tronix.
