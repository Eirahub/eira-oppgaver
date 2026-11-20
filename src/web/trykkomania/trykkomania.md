---
title: "JS: Trykkomania"
author: Arve Seljebu
language: nb
---


# Introduksjon {.intro}

Denne oppgaven viser deg hvordan du kan lage et spill med JavaScript og dele det
med vennene dine. Spillet kalles *Trykkomania* fordi det handler om å trykke på
en ball flest mulig ganger før tiden renner ut.

Før du starter på denne oppgaven bør du ha endel erfaring med variabler,
funksjoner og hendelser (`addEventListener`) i JavaScript. Dersom du ikke har
det, så anbefaler vi å gjøre noen av de enklere oppgavene først.

![Animasjon av spillet trykkomania](trykkomania.gif)


# Steg 1: Prøv selv-boksen {.activity}

Vi skal lage spillet i en **Prøv selv**-boks rett her på siden. Boksen under er
en hel nettside. Du skriver koden i editoren, og resultatet vises under. Hvis du
aldri har programmert JavaScript før, ta en titt på oppgaven [Hei
JavaScript](../hei_js/hei_js.html) først.

## Sjekkliste {.check}

- [ ] Se på koden i boksen under. Det meste er HTML som du ikke trenger å endre.

- [ ] All JavaScript-koden i denne oppgaven skal stå mellom `<script>` og
  `</script>`. Der står det nå bare en kommentar.

- [ ] Hvis du gjør noe galt, kan du trykke **Tilbakestill** for å starte på nytt.

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Trykkomania</title>
  </head>
  <body>
    <script>
      // Her skriver du JavaScript-koden
    </script>
  </body>
</html>
```

## Tips {.tip}

Du kan også skrive koden i VS Code. Trykk **Last ned som fil** under eksempelet,
eller lag en ny fil. Se oppgaven [VS Code](../vs_code/vs_code.html).


# Steg 2: Lage en ball {.activity}

Vi skal bruke JavaScript til å lage innholdet på websiden. Dette betyr at vi
skal bruke JavaScript til å lage *HTML*. Du trenger ikke kunne noe spesielt om
HTML, men om du ønsker lære om HTML, se [oppgaven Hva er en
nettside?](../hva_er_en_nettside/hva_er_en_nettside.html).

## Sjekkliste {.check}

- [ ] Vi begynner med å lage en funksjon som heter `Ball`:

  ```js
  function Ball() {

  }
  ```

- [ ] Inni funksjonen lager vi ett nytt `div`-element:

  ```js
  function Ball() {
    const el = document.createElement('div');
  }
  ```

- [ ] `const el` betyr at elementet får navnet `el`. `const` brukes når navnet
  alltid skal peke på det samme, her det samme elementet.

- [ ] Vi kan nå gi elementet en stil:

  ```js
  function Ball() {
    const el = document.createElement('div');
    el.style.backgroundColor = 'black';
    el.style.width = '60px';
    el.style.height = '60px';
  }
  ```

- [ ] `el.style.backgroundColor = 'black'` gjør ballen svart

- [ ] `el.style.width = '60px'` gjør ballen 60
  [piksler](https://no.wikipedia.org/wiki/Piksel) bred

- [ ] `el.style.height = '60px'` gjør ballen 60 piksler høy

- [ ] La oss legge ballen til siden:

  ```js
  function Ball() {
    const el = document.createElement('div');
    el.style.backgroundColor = 'black';
    el.style.width = '60px';
    el.style.height = '60px';
    document.body.appendChild(el);
  }
  ```

- [ ] For at ballen skal vises, må vi kjøre funksjonen ved hjelp av denne koden:

  ```js
  Ball();
  ```

- [ ] Vises en svart firkant i resultatet?

Ok, så den var ikke akkurat rund. Vi kan bruke `el.style.borderRadius` for å
runde av hjørnene. Siden ballen er `60px` bred og høy, så avrunder vi kantene
med `30px`, altså halvparten av 60

- [ ] Legg koden under de andre `el.style`-setningene:

  ```js
  el.style.borderRadius = '30px';
  ```

- [ ] Fikk du en rund ball?

## Utforsk {.challenge}

Om du ønsker en annen form, prøv andre verdier enn `30px` for avrundingen.
Hvordan ser `5px` ut?

## Tips {.protip}

Om du sitter fast, kan du se på fasiten så langt:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Trykkomania</title>
  </head>
  <body>
    <script>
      function Ball() {
        const el = document.createElement('div');
        el.style.backgroundColor = 'black';
        el.style.width = '60px';
        el.style.height = '60px';
        el.style.borderRadius = '30px';
        document.body.appendChild(el);
      }

      Ball();
    </script>
  </body>
</html>
```


# Steg 3: Flytte ballen {.activity}

Akkurat nå vises ballen helt øverst til venstre i resultatet. La oss flytte den
rundt omkring.

Vi bruker `el.style.position = 'fixed'` for å fortelle at vi ønsker plassere
ballen i forhold til kantene i vinduet. 50% fra toppen blir da `el.style.top =
'50%'`.

## Sjekkliste {.check}

- [ ] Legg til en posisjon for ballen inni `Ball`:

  ```js
  el.style.position = 'fixed';
  el.style.top = '80%';
  ```

- [ ] Flyttet ballen seg ned

- [ ] Flytt ballen ut fra venstre kant:

  ```js
  el.style.left = '30%';
  ```

- [ ] Prøv andre verdier mellom `0%` og `100%`

- [ ] Klarer du å finne ut når ballen forsvinner ut av vinduet?

## Tips {.protip}

Om du sitter fast, kan du se på fasiten så langt:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Trykkomania</title>
  </head>
  <body>
    <script>
      function Ball() {
        const el = document.createElement('div');
        el.style.backgroundColor = 'black';
        el.style.width = '60px';
        el.style.height = '60px';
        el.style.borderRadius = '30px';
        el.style.position = 'fixed';
        el.style.top = '80%';
        el.style.left = '30%';
        document.body.appendChild(el);
      }

      Ball();
    </script>
  </body>
</html>
```


# Steg 4: Flytte ballen med en funksjon {.activity}

Ettersom vi ønsker at ballen skal flytte seg underveis i spillet, skal vi lage
en funksjon som flytter ballen.

## Sjekkliste {.check}

- [ ] Inni `Ball`, lag en funksjon som heter `el.posisjon`. Denne funksjonen
  skal ta inn en x- og en y-verdi og plassere elementet.

  ```js
  function Ball() {
    ...
    el.posisjon = function (x, y) {

    };
  }
  ```

- [ ] Funksjonen skal bestemme `el.style.top` og `el.style.left`.

  ```js
   el.posisjon = function (x, y) {
     el.style.left = x;
     el.style.top = y;
   };
  ```

- [ ] Nå bestemmer `posisjon` hvor ballen er. Slett linjene med `el.style.top`
  og `el.style.left` fra steg 3, men behold `el.style.position = 'fixed'`.

- [ ] Returner `el`, slik at vi kan bruke funksjonene til ballen utenfor `Ball`.

  ```js
  function Ball() {
    ...
    el.posisjon = function (x, y) {
      el.style.left = x;
      el.style.top = y;
    };

    return el;
  }
  ```

- [ ] Bytt ut `Ball();` med denne koden. Da kan du flytte ballen:

  ```js
  const ball = Ball();  // lager ballen
  ball.posisjon('10%', '20%');  // flytter til x = 10% og y = 20%
  ```

## Tips {.protip}

Om du sitter fast, kan du se på fasiten så langt:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Trykkomania</title>
  </head>
  <body>
    <script>
      function Ball() {
        const el = document.createElement('div');
        el.style.backgroundColor = 'black';
        el.style.width = '60px';
        el.style.height = '60px';
        el.style.borderRadius = '30px';
        el.style.position = 'fixed';
        document.body.appendChild(el);

        el.posisjon = function (x, y) {
          el.style.left = x;
          el.style.top = y;
        };

        return el;
      }

      const ball = Ball();
      ball.posisjon('10%', '20%');
    </script>
  </body>
</html>
```


# Steg 5: Velg en tilfeldig plassering {.activity}

I JavaScript kan vi bruke `Math.random()` for å få en tilfeldig verdi mellom 0
og 1. La oss bruke denne slik at ballen blir plassert på et tilfeldig sted.

## Sjekkliste {.check}

- [ ] Skriv denne linjen nederst i koden:

  ```js
  console.log(Math.random());
  ```

- [ ] `console.log` skriver ut en verdi. Utskriften vises under resultatet. Fikk
  du et tall mellom 0 og 1?

- [ ] Vi kan gjøre dette tallet om til prosent ved å gange med 100. Prøv det ut:

  ```js
  console.log(Math.random() * 100);
  ```

- [ ] Vi kan legge til prosenttegnet med `+ '%'`:

  ```js
  console.log(Math.random() * 100 + '%');
  ```

- [ ] Legg merke til at hver gang koden kjøres, får vi nye tall. Det er dette
  som kalles *tilfeldig*

- [ ] Slett linjene med `console.log` igjen

- [ ] La oss bruke `Math.random` til å plassere ballen. Bytt ut
  `ball.posisjon('10%', '20%');` med:

  ```js
  const x = Math.random() * 100 + '%';
  const y = Math.random() * 100 + '%';
  ball.posisjon(x, y);
  ```

Her har vi laget 2 variabler `x` og `y` som begge holder på hvert sitt
tilfeldige tall. Dette tallet sendes inn i funksjonen `posisjon(x,y)` som vi
lagde i sted.

- [ ] Kjør koden flere ganger, for eksempel ved å endre den litt. Havner ballen
  på et nytt sted hver gang?

- [ ] Kjører du koden nok ganger, legger du merke til at ballen noen ganger
  kommer utenfor bunnen og høyre side

- [ ] For å unngå dette kan vi begrense forflytningen til 80%:

  ```js
  const x = Math.random() * 80 + '%';
  const y = Math.random() * 80 + '%';
  ```

- [ ] Siden `Math.random()` maksimalt er 1 og vi ganger med 80, vil aldri ballen
  flytte seg lenger ut fra toppen eller venstre side enn 80%.

## Tips {.protip}

Om du sitter fast, kan du se på fasiten så langt:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Trykkomania</title>
  </head>
  <body>
    <script>
      function Ball() {
        const el = document.createElement('div');
        el.style.backgroundColor = 'black';
        el.style.width = '60px';
        el.style.height = '60px';
        el.style.borderRadius = '30px';
        el.style.position = 'fixed';
        document.body.appendChild(el);

        el.posisjon = function (x, y) {
          el.style.left = x;
          el.style.top = y;
        };

        return el;
      }

      const ball = Ball();
      const x = Math.random() * 80 + '%';
      const y = Math.random() * 80 + '%';
      ball.posisjon(x, y);
    </script>
  </body>
</html>
```


# Steg 6: Flytte ballen hvert andre sekund {.activity}

Vi ønsker at ballen hele tiden skal flytte seg. Nå skal vi bruke `setInterval`
til å flytte ballen hvert andre sekund.

```js
setInterval(function () {
  // koden som skal kjøres i intervall
}, antall_millisekunder); // hvor ofte den skal kjøre
```

## Sjekkliste {.check}

- [ ] Bruk `setInterval` til å flytte ballen hvert andre sekund:

  ```js
  setInterval(function () {
    const x = Math.random() * 80 + '%';
    const y = Math.random() * 80 + '%';
    ball.posisjon(x, y);
  }, 2000);
  ```

- [ ] `setInterval(function ..., 2000)` betyr kjør `function` hvert `2000`
  millisekund

- [ ] 2000 millisekund er 2 sekunder, altså tegnes ballen på et nytt sted hvert
  andre sekund.

## Tips {.protip}

Om du sitter fast, kan du se på fasiten så langt:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Trykkomania</title>
  </head>
  <body>
    <script>
      function Ball() {
        const el = document.createElement('div');
        el.style.backgroundColor = 'black';
        el.style.width = '60px';
        el.style.height = '60px';
        el.style.borderRadius = '30px';
        el.style.position = 'fixed';
        document.body.appendChild(el);

        el.posisjon = function (x, y) {
          el.style.left = x;
          el.style.top = y;
        };

        return el;
      }

      const ball = Ball();
      setInterval(function () {
        const x = Math.random() * 80 + '%';
        const y = Math.random() * 80 + '%';
        ball.posisjon(x, y);
      }, 2000);
    </script>
  </body>
</html>
```


# Steg 7: Poeng {.activity}

Nå har du en ball som spretter rundt. La oss legge til poeng. Vi har laget en
poeng-komponent som du kan bruke, så kommer du raskere i gang. `Poeng` er bygd
opp likt som `Ball`, så du må gjerne lese gjennom og se om du forstår den.

## Sjekkliste {.check}

- [ ] Legg til koden for komponenten `Poeng`:

  ```js
  /**
   * Poeng - viser poengsum nede i venstre hjørne.
   *
   * Bruk:
   *   const poeng = Poeng();  // viser poengsummen
   *   poeng.øk();  // øker poengsummen med 100
   *   poeng.nullstill();  // setter poengsummen til 0
   *
   */
  function Poeng() {
    const el = document.createElement('div');

    // CSS til "el"
    el.style.position = 'fixed';
    el.style.bottom = '5px';
    el.style.left = '8px';
    el.style.padding = '5px';
    el.style.backgroundColor = 'black';
    el.style.color = 'white';

    // Viser poengsum på skjermen, samt lager variabelen "_poeng"
    let _poeng = 0;
    el.textContent = _poeng + ' poeng';
    document.body.appendChild(el);

    // To funksjoner som øker eller nullstiller poengene
    el.øk = function () {
      _poeng += 100;
      el.textContent = _poeng + ' poeng';
    };
    el.nullstill = function () {
      _poeng = 0;
      el.textContent = _poeng + ' poeng';
    };

    return el;
  }
  ```

- [ ] `_poeng` lages med `let` og ikke `const`, fordi verdien skal endres.
  `textContent` er teksten inni elementet.

- [ ] For at poengsummen skal vises, må vi kjøre `Poeng()` en gang, slik vi også
  gjorde med `Ball()`

- [ ] Legg denne linjen over `Ball()`:

  ```js
  const poeng = Poeng();
  const ball = Ball();
  ```

- [ ] Vises "**0 poeng**"?

- [ ] For å holde orden på programmet er det lurt å ha det som skjer i toppen.
  Funksjoner kan brukes likevel om de ikke står først, så flytt `function Ball`
  og `function Poeng` ned til bunnen.

  ```js
  const poeng = Poeng();
  const ball = Ball();
  setInterval(function () {
    ...
  }, 2000);


  function Ball() {
    ...
  }

  function Poeng() {
    ...
  }
  ```

- [ ] Nå står det som skjer i toppen:

  - Vis poengene: `const poeng = Poeng()`

  - Vis ballen: `const ball = Ball()`

  - Flytt ballen hvert andre sekund: `setInterval(..., 2000)`

- [ ] Vi velger nå å kjøre funksjonen `poeng.øk` hver gang ballen trykkes. Legg
  denne linjen rett under `const ball = Ball();`:

  ```js
  ball.addEventListener('click', poeng.øk);
  ```

  **Obs:** Det skal **ikke** være `()` på slutten av `poeng.øk`. Dette er fordi
  funksjonen ikke kjøres her, men hver gang noen klikker på ballen.

- [ ] `ball.addEventListener('click', poeng.øk);` betyr at funksjonen
  `poeng.øk()` kjøres når noen klikker på ballen. `'click'` er navnet på
  hendelsen.

- [ ] Sjekk at du får poeng når du treffer ballen med et klikk.

## Tips {.protip}

Om du sitter fast, kan du se på fasiten så langt:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Trykkomania</title>
  </head>
  <body>
    <script>
      const poeng = Poeng();
      const ball = Ball();
      ball.addEventListener('click', poeng.øk);
      setInterval(function () {
        const x = Math.random() * 80 + '%';
        const y = Math.random() * 80 + '%';
        ball.posisjon(x, y);
      }, 2000);


      function Ball() {
        const el = document.createElement('div');
        el.style.backgroundColor = 'black';
        el.style.width = '60px';
        el.style.height = '60px';
        el.style.borderRadius = '30px';
        el.style.position = 'fixed';
        document.body.appendChild(el);

        el.posisjon = function (x, y) {
          el.style.left = x;
          el.style.top = y;
        };

        return el;
      }

      function Poeng() {
        const el = document.createElement('div');
        el.style.position = 'fixed';
        el.style.bottom = '5px';
        el.style.left = '8px';
        el.style.padding = '5px';
        el.style.backgroundColor = 'black';
        el.style.color = 'white';

        let _poeng = 0;
        el.textContent = _poeng + ' poeng';
        document.body.appendChild(el);

        el.øk = function () {
          _poeng += 100;
          el.textContent = _poeng + ' poeng';
        };
        el.nullstill = function () {
          _poeng = 0;
          el.textContent = _poeng + ' poeng';
        };

        return el;
      }
    </script>
  </body>
</html>
```

## Teste spillet {.flag}

Du er nå kommet så langt at det kan være kult å teste spillet. Ettersom spillet
handler om å trykke flest mulig ganger på ballen, egner det seg for å prøve på
mobiltelefonen.

## Sjekkliste {.check}

- [ ] Linjen `<meta name="viewport" ...>` i toppen av koden gjør at siden passer
  til skjermen på en mobiltelefon. Den står der allerede.

- [ ] Det enkleste er å åpne denne oppgaven på mobilen og spille i resultatet
  under fasiten over.

- [ ] Du kan også trykke **Last ned som fil**, sende filen `index.html` til
  mobilen og åpne den i nettleseren der.

- [ ] Vil du at andre skal kunne åpne spillet med en adresse, kan du publisere
  det. Se oppgaven [Publiser nettsiden din](../publiser/publiser.html).

- [ ] Spill!


# Steg 8: Begrense tiden {.activity}

Akkurat nå er det ubegrenset tid i spillet. La oss legge til en nedtelling av
tid, slik at man kan konkurrere om hvem som klarer flest klikk på 10 sekunder.

## Sjekkliste {.check}

- [ ] Legg til koden for nedtelling i bunnen av programmet.

  ```js
  /**
   * Nedtelling - En linje som viser at tiden renner ut.
   *
   * Bruk:
   *   const nedtelling = Nedtelling(slutt);  // funksjonen `slutt` kjøres når tiden er utløpt
   *   nedtelling.tellNed(10);  // teller ned 10 sekunder
   *
   */
  function Nedtelling(ferdig) {
    const el = document.createElement('div');

    // CSSen til elementet "el"
    el.style.position = 'fixed';
    el.style.left = '0';
    el.style.bottom = '0';
    el.style.height = '100%';
    el.style.width = '3px';
    el.style.backgroundColor = 'red';
    document.body.appendChild(el);

    // Regner ut prosenten av hvor lang tid det er igjen
    function prosent(slutt, tid) {
      return (slutt - Date.now()) / tid / 10;
    }

    // Funksjon som teller ned og stopper når den har kommet til null
    el.tellNed = function (tid) {
      const slutt = Date.now() + tid * 1000;
      const intervall = setInterval(tegn, 20);

      // Tegner streken på venstre side til tiden er ute
      function tegn() {
        const p = prosent(slutt, tid);
        if (p < 0) {
          el.style.height = '0%';
          clearInterval(intervall);
          ferdig();
        }
        el.style.height = p + '%';
      }
    };

    return el;
  }
  ```

- [ ] I toppen starter vi nedtellingen.

  ```js
  const nedtelling = Nedtelling();
  nedtelling.tellNed(10);
  ```

- [ ] Dette lager en nedtelling på 10 sekunder

- [ ] Nå ser du nedtellingen, men ingenting skjer når tiden er ute

- [ ] Lag funksjonen `stopp` som forteller hva som skal skje når tiden er ute.

  ```js
  function stopp() {
    ball.skjul();
  }
  ```

- [ ] Vi har ikke laget funksjonen `ball.skjul` enda. Vi trenger `ball.vis` også

- [ ] Lag `ball.skjul` og `ball.vis` inni `function Ball`.

  ```js
  function Ball() {
    ...
    el.skjul = function () {
      el.style.display = 'none';
    };
    el.vis = function () {
      el.style.display = '';
    };

    return el;
  }
  ```

- [ ] Nå kan vi fortelle nedtellingen at den skal kjøre `stopp()` når tiden er
  ute.

  ```js
  const nedtelling = Nedtelling(stopp);
  ```

- [ ] Forsvinner ballen når tiden er ute

- [ ] Hvor mange poeng klarer du på mobiltelefonen innen tiden?

## Tips {.protip}

Om du sitter fast, kan du se på fasiten så langt:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Trykkomania</title>
  </head>
  <body>
    <script>
      const poeng = Poeng();
      const ball = Ball();
      ball.addEventListener('click', poeng.øk);
      setInterval(function () {
        const x = Math.random() * 80 + '%';
        const y = Math.random() * 80 + '%';
        ball.posisjon(x, y);
      }, 2000);

      const nedtelling = Nedtelling(stopp);
      nedtelling.tellNed(10);

      function stopp() {
        ball.skjul();
      }


      function Ball() {
        const el = document.createElement('div');
        el.style.backgroundColor = 'black';
        el.style.width = '60px';
        el.style.height = '60px';
        el.style.borderRadius = '30px';
        el.style.position = 'fixed';
        document.body.appendChild(el);

        el.posisjon = function (x, y) {
          el.style.left = x;
          el.style.top = y;
        };
        el.skjul = function () {
          el.style.display = 'none';
        };
        el.vis = function () {
          el.style.display = '';
        };

        return el;
      }

      function Poeng() {
        const el = document.createElement('div');
        el.style.position = 'fixed';
        el.style.bottom = '5px';
        el.style.left = '8px';
        el.style.padding = '5px';
        el.style.backgroundColor = 'black';
        el.style.color = 'white';

        let _poeng = 0;
        el.textContent = _poeng + ' poeng';
        document.body.appendChild(el);

        el.øk = function () {
          _poeng += 100;
          el.textContent = _poeng + ' poeng';
        };
        el.nullstill = function () {
          _poeng = 0;
          el.textContent = _poeng + ' poeng';
        };

        return el;
      }

      function Nedtelling(ferdig) {
        const el = document.createElement('div');
        el.style.position = 'fixed';
        el.style.left = '0';
        el.style.bottom = '0';
        el.style.height = '100%';
        el.style.width = '3px';
        el.style.backgroundColor = 'red';
        document.body.appendChild(el);

        function prosent(slutt, tid) {
          return (slutt - Date.now()) / tid / 10;
        }

        el.tellNed = function (tid) {
          const slutt = Date.now() + tid * 1000;
          const intervall = setInterval(tegn, 20);

          function tegn() {
            const p = prosent(slutt, tid);
            if (p < 0) {
              el.style.height = '0%';
              clearInterval(intervall);
              ferdig();
            }
            el.style.height = p + '%';
          }
        };

        return el;
      }
    </script>
  </body>
</html>
```


# Steg 9: Omstarte spillet {.activity}

Så langt kan spillet omstartes ved å kjøre koden på nytt. Er det ikke stiligere
med en knapp som starter spillet?

## Sjekkliste {.check}

- [ ] Lag en funksjon `start`.

  ```js
  function start() {

  }
  ```

- [ ] Funksjonen skal bestemme hva som skjer når spillet skal starte. Vi må
  nullstille poengsummen, vise nedtellingen og vise ballen.

  ```js
  function start() {
    poeng.nullstill();
    nedtelling.tellNed(10);
    ball.vis();
  }
  ```

- [ ] `start` skal kjøres hver gang en knapp klikkes, så vi trenger en knapp

- [ ] Legg til koden for knappen i bunnen av programmet.

  ```js
  /**
   * En knapp som ligger midt på siden.
   *
   * Bruk:
   *   const knapp = Knapp('trykk på meg');  // lager en knapp som ligger midt på siden
   *   knapp.vis();  // viser knappen
   *   knapp.skjul();  // skjuler knappen
   */
  function Knapp(tekst) {
    const el = document.createElement('button');
    el.style.display = 'none';
    el.textContent = tekst;
    el.style.position = 'fixed';
    el.style.top = '50%';
    el.style.left = '50%';
    el.style.padding = '20px';
    el.style.border = 'solid 1px';
    document.body.appendChild(el);

    el.skjul = function () {
      el.style.display = 'none';
    };
    el.vis = function () {
      el.style.display = '';
      // plasser akkurat på midten
      // midten av skjermen er 50% minus halvparten av størrelsen til knappen
      const w = el.offsetWidth / 2;
      const h = el.offsetHeight / 2;
      el.style.marginLeft = '-' + w + 'px';
      el.style.marginTop = '-' + h + 'px';
    };

    return el;
  }
  ```

- [ ] I toppen legger vi til knappen.

  ```js
  const knapp = Knapp('Prøv en gang til');
  knapp.addEventListener('click', start);
  ```

- [ ] `knapp.addEventListener('click', start)` bestemmer hva som skal skje når
  knappen klikkes

- [ ] Knappen vises ikke, så vi må bestemme at den skal vises når spillet er
  slutt.

  ```js
  function stopp() {
    ...
    knapp.vis();
  }
  ```

- [ ] Vises knappen når spillet er ferdig

- [ ] Du legger kanskje merke til at vi har en bug nå? Vi må jo skjule knappen
  når spillet startes også

- [ ] Skjul knappen når spillet startes.

  ```js
  function start() {
    ...
    knapp.skjul();
  }
  ```

- [ ] Spillet er nå ferdig! Last ned spillet som fil eller publiser det, og se
  hvem av vennene dine som klarer flest poeng.

## Tips {.protip}

Om du sitter fast, kan du se på fasiten:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Trykkomania</title>
  </head>
  <body>
    <script>
      const poeng = Poeng();
      const ball = Ball();
      ball.addEventListener('click', poeng.øk);
      setInterval(function () {
        const x = Math.random() * 80 + '%';
        const y = Math.random() * 80 + '%';
        ball.posisjon(x, y);
      }, 2000);

      const knapp = Knapp('Prøv en gang til');
      knapp.addEventListener('click', start);

      const nedtelling = Nedtelling(stopp);
      nedtelling.tellNed(10);

      function start() {
        poeng.nullstill();
        nedtelling.tellNed(10);
        ball.vis();
        knapp.skjul();
      }

      function stopp() {
        ball.skjul();
        knapp.vis();
      }


      function Ball() {
        const el = document.createElement('div');
        el.style.backgroundColor = 'black';
        el.style.width = '60px';
        el.style.height = '60px';
        el.style.borderRadius = '30px';
        el.style.position = 'fixed';
        document.body.appendChild(el);

        el.posisjon = function (x, y) {
          el.style.left = x;
          el.style.top = y;
        };
        el.skjul = function () {
          el.style.display = 'none';
        };
        el.vis = function () {
          el.style.display = '';
        };

        return el;
      }

      function Poeng() {
        const el = document.createElement('div');
        el.style.position = 'fixed';
        el.style.bottom = '5px';
        el.style.left = '8px';
        el.style.padding = '5px';
        el.style.backgroundColor = 'black';
        el.style.color = 'white';

        let _poeng = 0;
        el.textContent = _poeng + ' poeng';
        document.body.appendChild(el);

        el.øk = function () {
          _poeng += 100;
          el.textContent = _poeng + ' poeng';
        };
        el.nullstill = function () {
          _poeng = 0;
          el.textContent = _poeng + ' poeng';
        };

        return el;
      }

      function Nedtelling(ferdig) {
        const el = document.createElement('div');
        el.style.position = 'fixed';
        el.style.left = '0';
        el.style.bottom = '0';
        el.style.height = '100%';
        el.style.width = '3px';
        el.style.backgroundColor = 'red';
        document.body.appendChild(el);

        function prosent(slutt, tid) {
          return (slutt - Date.now()) / tid / 10;
        }

        el.tellNed = function (tid) {
          const slutt = Date.now() + tid * 1000;
          const intervall = setInterval(tegn, 20);

          function tegn() {
            const p = prosent(slutt, tid);
            if (p < 0) {
              el.style.height = '0%';
              clearInterval(intervall);
              ferdig();
            }
            el.style.height = p + '%';
          }
        };

        return el;
      }

      function Knapp(tekst) {
        const el = document.createElement('button');
        el.style.display = 'none';
        el.textContent = tekst;
        el.style.position = 'fixed';
        el.style.top = '50%';
        el.style.left = '50%';
        el.style.padding = '20px';
        el.style.border = 'solid 1px';
        document.body.appendChild(el);

        el.skjul = function () {
          el.style.display = 'none';
        };
        el.vis = function () {
          el.style.display = '';
          // midten av skjermen er 50% minus halvparten av størrelsen til knappen
          const w = el.offsetWidth / 2;
          const h = el.offsetHeight / 2;
          el.style.marginLeft = '-' + w + 'px';
          el.style.marginTop = '-' + h + 'px';
        };

        return el;
      }
    </script>
  </body>
</html>
```

## Utfordringer {.challenge}

Her er noen utfordringer

- [ ] Endre størrelsen på ballen, slik at spillet blir vanskeligere

- [ ] Endre hvor lang tid man har på seg

- [ ] Endre fargen på ballen

- [ ] Øk poengsummen med 1000 istedenfor 100

- [ ] Klarer du å få ballen til å endre til forskjellig størrelse hver gang den
  kommer til syne

- [ ] Klarer du å få frem flere enn én ball?
