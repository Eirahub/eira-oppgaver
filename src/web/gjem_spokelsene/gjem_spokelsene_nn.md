---
title: "CSS: Gøym spøkelsa"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

Tre spøkelse har flytta inn i eit gammalt hus. Dei vil ikkje bli sett, så du
skal hjelpe dei å gøyme seg bak skapet, sofaen og kassa. Etterpå gjer du rommet
om til eit spel: ein venn klikkar på møblane og prøver å finne alle spøkelsa.

Undervegs lærer du å plassere ting akkurat der du vil på ei nettside med CSS:
`position`, `top`, `left`, `bottom`, `right` og `z-index`.

![Eit mørkt rom med eit skap, ein raud sofa og ei pappkasse. Skapet er
gjennomsiktig, og spøkelset som var bak, har flydd opp under taket. Over rommet
står det "Du har funnet 1 av 3 spøkelser".](spill_ferdig.png)

Det er lurt å ha gjort [Mi første
nettside](../min_forste_nettside/min_forste_nettside_nn.html) og [Kva er ei
nettside?](../hva_er_en_nettside/hva_er_en_nettside_nn.html) først.


# Steg 1: Rommet og det første spøkelset {.activity}

Rommet er ein `<div>` med fast breidd og høgd. Spøkelset er ein emoji inne i ein
eigen `<div>`.

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Gjem spøkelsene</title>
    <style>
      #rom {
        position: relative;
        width: 360px;
        height: 240px;
        background-color: #3b3054;
        border-bottom: 40px solid #6b4a2b;
      }
      .spokelse {
        position: absolute;
        font-size: 40px;
      }
      #spokelse1 {
        top: 20px;
        left: 30px;
      }
    </style>
  </head>
  <body>
    <div id="rom">
      <div class="spokelse" id="spokelse1">👻</div>
    </div>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Endre `left: 30px;` til `left: 200px;`. Kvar flyttar spøkelset seg?

- [ ] Endre `top: 20px;` til `top: 150px;`.

- [ ] Byt ut `top` med `bottom` og `left` med `right`. No blir avstanden målt
  frå botnen og frå høgre kant av rommet i staden.

- [ ] Fjern linja `position: relative;` frå `#rom`. Kvar hamnar spøkelset no?
  Set linja tilbake.

## Forklaring {.tip}

- `position: absolute;` tyder at du sjølv bestemmer nøyaktig kvar elementet skal
  stå, med `top`, `left`, `bottom` og `right`.

- Avstanden blir målt frå kanten av den nærmaste forelderen som har `position`.
  Her er det `#rom`, fordi han har `position: relative;`. Utan han blir
  avstanden målt frå kanten av heile sida.

- `px` tyder *pikslar*, dei små prikkane skjermen er bygd opp av. `left: 30px;`
  tyder 30 pikslar frå venstre kant.

- Tenk på rommet som eit koordinatsystem der (0, 0) er øvst til venstre. `left`
  er x, og `top` er y. Legg merke til at y veks *nedover*.


# Steg 2: Møblar å gøyme seg bak {.activity}

No set vi inn eit skap, ein sofa og ei kasse. Alle møblane har klassen `mobel`,
så dei deler nokre reglar. Kvart møbel har i tillegg sin eigen `id` med
plassering og utsjånad.

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Gjem spøkelsene</title>
    <style>
      #rom {
        position: relative;
        width: 360px;
        height: 240px;
        background-color: #3b3054;
        border-bottom: 40px solid #6b4a2b;
      }
      .spokelse {
        position: absolute;
        font-size: 40px;
      }
      #spokelse1 {
        top: 20px;
        left: 30px;
      }
      .mobel {
        position: absolute;
        bottom: 0;
      }
      #skap {
        left: 20px;
        width: 80px;
        height: 170px;
        background-color: #8b5a2b;
        border: 3px solid #5c3a1a;
      }
      #sofa {
        left: 130px;
        width: 130px;
        height: 70px;
        background-color: #c0392b;
        border-radius: 20px 20px 6px 6px;
      }
      #kasse {
        left: 270px;
        font-size: 72px;
        line-height: 1;
      }
    </style>
  </head>
  <body>
    <div id="rom">
      <div class="spokelse" id="spokelse1">👻</div>
      <div class="mobel" id="skap"></div>
      <div class="mobel" id="sofa"></div>
      <div class="mobel" id="kasse">📦</div>
    </div>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Flytt spøkelset bak skapet. Prøv `top: 120px;` og `left: 35px;`. Er det
  borte?

- [ ] Flytt linja med `spokelse1` i HTML-en slik at ho står *under* linja med
  `skap`. Kva skjer no?

- [ ] Flytt sofaen litt til venstre eller høgre ved å endre `left` i `#sofa`.

- [ ] Gjer skapet høgare ved å endre `height`.

## Forklaring {.tip}

- `bottom: 0;` i `.mobel` set alle møblane på golvet. Då slepp vi å rekne ut
  `top` for kvart møbel.

- Når to element står oppå kvarandre, teiknar nettlesaren det som kjem *sist* i
  HTML-en øvst. Difor forsvann spøkelset bak skapet då det stod først, og kom
  fram igjen då du flytta det etter skapet.


# Steg 3: Bestem kven som er framme med z-index {.activity}

Det er tungvint å flytte linjer i HTML-en for å bestemme kva som er framme. Med
`z-index` seier vi det rett i CSS-en. Eit element med høgare `z-index` står
framfor eit element med lågare.

Hald fram i boksen frå steg 2.

## Sjekkliste {.check}

- [ ] Legg til `z-index: 1;` i `.spokelse`.

- [ ] Legg til `z-index: 2;` i `.mobel`.

- [ ] No skal spøkelset vere gøymt bak skapet, same kvar linja står i HTML-en.
  Stemmer det?

- [ ] Lag to spøkelse til, `spokelse2` og `spokelse3`, med eiga plassering i
  CSS-en:

  ```html
  <div class="spokelse" id="spokelse2">👻</div>
  <div class="spokelse" id="spokelse3">👻</div>
  ```

- [ ] Gøym eitt spøkelse bak kvart møbel. Bruk `top` og `left` til å få dei
  heilt i skjul.

- [ ] Gi eitt av spøkelsa `z-index: 3;` i sin eigen regel. Kva skjer?

## Forklaring {.tip}

- `z-index` verkar berre på element som har `position`.

- Namnet kjem frå koordinatsystemet: `left` er x, `top` er y, og z er retninga
  rett ut av skjermen, mot deg.

- Har to element same `z-index`, er det igjen rekkjefølgja i HTML-en som
  bestemmer.


# Steg 4: Finn spøkelsa {.activity}

No gjer vi rommet om til eit spel. Når du klikkar på eit møbel, blir det
gjennomsiktig. Står det eit spøkelse bak, kan du klikke på spøkelset for å fange
det. Ein teljar viser kor mange du har funne.

Her er heile spelet med tre gøymde spøkelse:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Gjem spøkelsene</title>
    <style>
      body {
        font-family: sans-serif;
      }
      #rom {
        position: relative;
        width: 360px;
        height: 240px;
        background-color: #3b3054;
        border-bottom: 40px solid #6b4a2b;
      }
      .spokelse {
        position: absolute;
        z-index: 1;
        font-size: 40px;
        cursor: pointer;
      }
      #spokelse1 {
        top: 120px;
        left: 35px;
      }
      #spokelse2 {
        top: 180px;
        left: 170px;
      }
      #spokelse3 {
        top: 176px;
        left: 292px;
      }
      .mobel {
        position: absolute;
        bottom: 0;
        z-index: 2;
        cursor: pointer;
        transition: opacity 0.5s;
      }
      #skap {
        left: 20px;
        width: 80px;
        height: 170px;
        background-color: #8b5a2b;
        border: 3px solid #5c3a1a;
      }
      #sofa {
        left: 130px;
        width: 130px;
        height: 70px;
        background-color: #c0392b;
        border-radius: 20px 20px 6px 6px;
      }
      #kasse {
        left: 270px;
        font-size: 72px;
        line-height: 1;
      }
      .flyttet {
        opacity: 0.3;
        pointer-events: none;
      }
      #rom .funnet {
        top: 10px;
      }
    </style>
  </head>
  <body>
    <p id="teller">Finn de 3 spøkelsene! Klikk på møblene.</p>
    <div id="rom">
      <div class="spokelse" id="spokelse1">👻</div>
      <div class="spokelse" id="spokelse2">👻</div>
      <div class="spokelse" id="spokelse3">👻</div>
      <div class="mobel" id="skap"></div>
      <div class="mobel" id="sofa"></div>
      <div class="mobel" id="kasse">📦</div>
    </div>

    <script>
      const teller = document.querySelector('#teller');
      let funnet = 0;

      for (const mobel of document.querySelectorAll('.mobel')) {
        mobel.addEventListener('click', () => {
          mobel.classList.add('flyttet');
        });
      }

      for (const spokelse of document.querySelectorAll('.spokelse')) {
        spokelse.addEventListener('click', () => {
          if (spokelse.classList.contains('funnet')) {
            return;
          }
          spokelse.classList.add('funnet');
          funnet = funnet + 1;
          teller.textContent = 'Du har funnet ' + funnet + ' av 3 spøkelser';
        });
      }
    </script>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Klikk på skapet. Ser du spøkelset bak?

- [ ] Klikk på spøkelset. Flyg det opp, og tel teljaren?

- [ ] Finn alle tre. Trykk **Kjør** for å spele på nytt.

- [ ] Flytt spøkelsa til nye gøymestader ved å endre `top` og `left`. Be ein
  venn snu seg medan du gøymer dei, og la venen spele.

## Forklaring {.tip}

- `.flyttet` er ein klasse som JavaScript legg på møbelet når du klikkar.
  `opacity: 0.3;` gjer møbelet nesten gjennomsiktig.

- `pointer-events: none;` gjer at klikk går *gjennom* møbelet, til spøkelset som
  står bak.

- `#rom .funnet` tyder *element med klassen `funnet` inne i `#rom`*. Regelen set
  `top: 10px;`, så spøkelset flyg opp under taket.

- `transition: opacity 0.5s;` gjer at møbelet blekner sakte i staden for med ein
  gong.

## Kvifor står det #rom framfor .funnet? {.tip}

Prøv å endre `#rom .funnet` til berre `.funnet`. No flyg ikkje spøkelset lenger.

Ein regel med `#id` er sterkare enn ein regel med berre `.klasse`, same kvar
reglane står. Difor vinn `top: 120px;` frå `#spokelse1` over `top: 10px;` frå
`.funnet`. Med `#rom` framfor har regelen både ein id og ein klasse, og då er
han sterkare enn `#spokelse1`. Set `#rom` tilbake når du har prøvd.


# Utfordringar {.challenge}

- [ ] Bruk prosent i staden for pikslar, til dømes `left: 50%;`. Prosent blir
  målt av breidda og høgda på rommet. Kva skjer viss du gjer rommet breiare?

- [ ] Lag eit nytt møbel, til dømes ein stol med emojien 🪑 eller eit bord laga
  med CSS. Gøym eit fjerde spøkelse bak det, og hugs å endre teksten i teljaren.

- [ ] La teljaren seie *Gratulerer!* når alle spøkelsa er funne. Tips: bruk `if
  (funnet === 3)`.

- [ ] La eit spøkelse kikke fram bak eit møbel, så det blir litt lettare. Kor
  mykje av spøkelset vil du vise?

- [ ] Gjer spelet vanskelegare: gi spøkelsa ei tilfeldig plassering kvar gong
  spelet startar. `Math.random()` gir eit tilfeldig tal mellom 0 og 1:

  ```js
  spokelse.style.left = Math.random() * 320 + 'px';
  ```
