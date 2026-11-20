---
title: "CSS: Gjem spøkelsene"
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Tre spøkelser har flyttet inn i et gammelt hus. De vil ikke bli sett, så du skal
hjelpe dem å gjemme seg bak skapet, sofaen og kassa. Etterpå gjør du rommet om
til et spill: en venn klikker på møblene og prøver å finne alle spøkelsene.

Underveis lærer du å plassere ting akkurat der du vil på en nettside med CSS:
`position`, `top`, `left`, `bottom`, `right` og `z-index`.

![Et mørkt rom med et skap, en rød sofa og en pappkasse. Skapet er
gjennomsiktig, og spøkelset som var bak, har flydd opp under taket. Over rommet
står det "Du har funnet 1 av 3 spøkelser".](spill_ferdig.png)

Det er lurt å ha gjort [Min første
nettside](../min_forste_nettside/min_forste_nettside.html) og [Hva er en
nettside?](../hva_er_en_nettside/hva_er_en_nettside.html) først.


# Steg 1: Rommet og det første spøkelset {.activity}

Rommet er en `<div>` med fast bredde og høyde. Spøkelset er en emoji inne i en
egen `<div>`.

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

- [ ] Endre `left: 30px;` til `left: 200px;`. Hvor flytter spøkelset seg?

- [ ] Endre `top: 20px;` til `top: 150px;`.

- [ ] Bytt ut `top` med `bottom` og `left` med `right`. Nå måles avstanden fra
  bunnen og fra høyre kant av rommet i stedet.

- [ ] Fjern linjen `position: relative;` fra `#rom`. Hvor havner spøkelset nå?
  Sett linjen tilbake.

## Forklaring {.tip}

- `position: absolute;` betyr at du selv bestemmer nøyaktig hvor elementet skal
  stå, med `top`, `left`, `bottom` og `right`.

- Avstanden måles fra kanten av den nærmeste forelderen som har `position`. Her
  er det `#rom`, fordi den har `position: relative;`. Uten den måles avstanden
  fra kanten av hele siden.

- `px` betyr *piksler*, de små prikkene skjermen er bygd opp av. `left: 30px;`
  betyr 30 piksler fra venstre kant.

- Tenk på rommet som et koordinatsystem der (0, 0) er øverst til venstre. `left`
  er x, og `top` er y. Legg merke til at y vokser *nedover*.


# Steg 2: Møbler å gjemme seg bak {.activity}

Nå setter vi inn et skap, en sofa og en kasse. Alle møblene har klassen `mobel`,
så de deler noen regler. Hvert møbel har i tillegg sin egen `id` med plassering
og utseende.

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

- [ ] Flytt linjen med `spokelse1` i HTML-en slik at den står *under* linjen med
  `skap`. Hva skjer nå?

- [ ] Flytt sofaen litt til venstre eller høyre ved å endre `left` i `#sofa`.

- [ ] Gjør skapet høyere ved å endre `height`.

## Forklaring {.tip}

- `bottom: 0;` i `.mobel` setter alle møblene på gulvet. Da slipper vi å regne
  ut `top` for hvert møbel.

- Når to elementer står oppå hverandre, tegner nettleseren det som kommer *sist*
  i HTML-en øverst. Derfor forsvant spøkelset bak skapet da det sto først, og
  kom fram igjen da du flyttet det etter skapet.


# Steg 3: Bestem hvem som er foran med z-index {.activity}

Det er tungvint å flytte linjer i HTML-en for å bestemme hva som er foran. Med
`z-index` sier vi det rett i CSS-en. Et element med høyere `z-index` står foran
et element med lavere.

Fortsett i boksen fra steg 2.

## Sjekkliste {.check}

- [ ] Legg til `z-index: 1;` i `.spokelse`.

- [ ] Legg til `z-index: 2;` i `.mobel`.

- [ ] Nå skal spøkelset være gjemt bak skapet, uansett hvor linjen står i
  HTML-en. Stemmer det?

- [ ] Lag to spøkelser til, `spokelse2` og `spokelse3`, med egen plassering i
  CSS-en:

  ```html
  <div class="spokelse" id="spokelse2">👻</div>
  <div class="spokelse" id="spokelse3">👻</div>
  ```

- [ ] Gjem ett spøkelse bak hvert møbel. Bruk `top` og `left` til å få dem helt
  i skjul.

- [ ] Gi ett av spøkelsene `z-index: 3;` i sin egen regel. Hva skjer?

## Forklaring {.tip}

- `z-index` virker bare på elementer som har `position`.

- Navnet kommer fra koordinatsystemet: `left` er x, `top` er y, og z er
  retningen rett ut av skjermen, mot deg.

- Har to elementer samme `z-index`, bestemmer rekkefølgen i HTML-en igjen.


# Steg 4: Finn spøkelsene {.activity}

Nå gjør vi rommet om til et spill. Når du klikker på et møbel, blir det
gjennomsiktig. Står det et spøkelse bak, kan du klikke på spøkelset for å fange
det. En teller viser hvor mange du har funnet.

Her er hele spillet med tre gjemte spøkelser:

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

- [ ] Klikk på spøkelset. Flyr det opp, og teller telleren?

- [ ] Finn alle tre. Trykk **Kjør** for å spille på nytt.

- [ ] Flytt spøkelsene til nye gjemmesteder ved å endre `top` og `left`. Be en
  venn snu seg mens du gjemmer dem, og la vennen spille.

## Forklaring {.tip}

- `.flyttet` er en klasse som JavaScript legger på møbelet når du klikker.
  `opacity: 0.3;` gjør møbelet nesten gjennomsiktig.

- `pointer-events: none;` gjør at klikk går *gjennom* møbelet, til spøkelset som
  står bak.

- `#rom .funnet` betyr *elementer med klassen `funnet` inne i `#rom`*. Regelen
  setter `top: 10px;`, så spøkelset flyr opp under taket.

- `transition: opacity 0.5s;` gjør at møbelet blekner sakte i stedet for med en
  gang.

## Hvorfor står det #rom foran .funnet? {.tip}

Prøv å endre `#rom .funnet` til bare `.funnet`. Nå flyr ikke spøkelset lenger.

En regel med `#id` er sterkere enn en regel med bare `.klasse`, uansett hvor
reglene står. Derfor vinner `top: 120px;` fra `#spokelse1` over `top: 10px;` fra
`.funnet`. Med `#rom` foran har regelen både en id og en klasse, og da er den
sterkere enn `#spokelse1`. Sett `#rom` tilbake når du har prøvd.


# Utfordringer {.challenge}

- [ ] Bruk prosent i stedet for piksler, for eksempel `left: 50%;`. Prosent
  måles av bredden og høyden på rommet. Hva skjer hvis du gjør rommet bredere?

- [ ] Lag et nytt møbel, for eksempel en stol med emojien 🪑 eller et bord laget
  med CSS. Gjem et fjerde spøkelse bak det, og husk å endre teksten i telleren.

- [ ] La telleren si *Gratulerer!* når alle spøkelsene er funnet. Tips: bruk `if
  (funnet === 3)`.

- [ ] La et spøkelse kikke fram bak et møbel, så det blir litt lettere. Hvor mye
  av spøkelset vil du vise?

- [ ] Gjør spillet vanskeligere: gi spøkelsene en tilfeldig plassering hver gang
  spillet starter. `Math.random()` gir et tilfeldig tall mellom 0 og 1:

  ```js
  spokelse.style.left = Math.random() * 320 + 'px';
  ```
