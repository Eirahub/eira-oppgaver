---
title: 3D-printing med kode
language: nb
---

I dette kurset tegner du ting i 3D med klosser, og så skriver klubbens
3D-printer dem ut i plast. Du lager et navneskilt og en nøkkelring som du kan ta
med hjem.

Vi bruker **BlocksCAD**, som ligner på Scratch. I stedet for å flytte en figur
rundt på en scene, setter du sammen klosser som lager former: kuber, sylindre og
tekst. Du flytter formene, legger dem sammen og skjærer bort biter. Alle mål er
i millimeter.

Kurset passer fra rundt 5. trinn, gjerne etter at du har prøvd
[Scratch](../scratch/).

## Slik henger det sammen

1. Du bygger modellen med klosser i BlocksCAD i nettleseren.

2. Du lagrer modellen som en `.stl`-fil. Det er en fil som beskriver formen.

3. En voksen åpner filen i **Bambu Studio** på klubbens PC. Programmet deler
  modellen opp i tynne lag (det kalles å *slice*) og regner ut hvor lang tid
  utskriften tar.

4. Printeren smelter plast og legger den lag for lag til modellen er ferdig.

## Hvordan komme i gang

- Åpne [BlocksCAD](https://www.blockscad3d.com/editor/?lang=nb) i nettleseren.
  Lenken åpner editoren på norsk. Du trenger ikke konto for å bygge og lagre
  `.stl`-filer.

- Noen klosser har fortsatt engelske navn, og noen norske navn er litt rare.
  Oppgavene skriver det norske navnet og det engelske i parentes.

- Uten konto blir ikke arbeidet lagret på nettet. Lagre klossene dine på
  datamaskinen med **Prosjekt** (Project) og **Lagre Blokker til din
  Datamaskin** (Save Blocks to your Computer) før du lukker nettleseren.

- Begynn med [Navneskilt](navneskilt/navneskilt). Ta oppgavene i rekkefølge.

## Sikkerhet ved printeren

- En voksen starter alle utskrifter. Du lager filen, den voksne sender den til
  printeren.

- Vi printer i PLA. Det er en vanlig plast for 3D-printere.

- Ikke ta på dysen (der plasten kommer ut) eller platen modellen ligger på. De
  blir veldig varme. Vent til den voksne sier at modellen kan tas ut.

- Ikke stikk hendene inn i printeren mens den går.

## Neste steg

Bak klossene i BlocksCAD ligger det tekstkode i et språk som heter **OpenSCAD**.
Klikk på fanen **Kode** (Code) for å se den. Vil du prøve mer, har nettstedet
[MakerWorld](https://makerworld.com/) fra Bambu Lab et verktøy som heter
**Parametric Model Maker**. Der kan du endre mål på OpenSCAD-modeller som andre
har laget, med glidebrytere. Spør en voksen først, siden MakerWorld har egne
vilkår.


# For veiledere {.tip}

- BlocksCAD lages av The BlocksCAD Initiative, en ideell organisasjon i USA.
  Vilkårene sier at "normal" bruk krever konto, og at man kan få begrenset
  tilgang uten konto. Barn under 13 år trenger samtykke fra foresatte for å lage
  konto. I dette kurset bruker elevene editoren uten konto og lagrer filer
  lokalt. Les [vilkårene](https://www.blockscad3d.com/terms) selv.

- Kildekoden til editoren er åpen (GPLv3) på
  [GitHub](https://github.com/EinsteinsWorkshop/BlocksCAD), men den offentlige
  koden er fra 2017. Nettversjonen er nyere.

- Bambu Studio åpner `.stl`- og `.3mf`-filer. Elevene kan levere filen på
  minnepinne, i en delt mappe eller på annen måte som passer klubben.

- Sjekk tiden Bambu Studio viser før du starter. Oppgavene er laget for
  utskrifter på 10 til 20 minutter, men det avhenger av printer og
  innstillinger.
