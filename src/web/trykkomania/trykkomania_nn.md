---
title: "JS: Trykkomania"
author: Arve Seljebu
translator: Stein Olav Romslo
language: nn
---


# Introduksjon {.intro}

Denne oppgåva viser deg korleis du kan lage eit spel med JavaScript og dele det
med venene dine. Spelet heiter *Trykkomania* fordi det handlar om å trykke på
ein ball flest mogleg gonger før tida renn ut.

Før du startar med denne oppgåva bør du ha ein del erfaring med variablar,
funksjonar og hendingar (`addEventListener`) i JavaScript. Viss du ikkje har
det, anbefalar me at du gjer nokre av dei enklare oppgåvene fyrst.

![Animasjon av spelet Trykkomania](trykkomania.gif)


# Steg 1: Prøv sjølv-boksen {.activity}

Me skal lage spelet i ein **Prøv selv**-boks rett her på sida. Boksen under er
ei heil nettside. Du skriv koden i editoren, og resultatet visast under. Viss du
aldri har programmert JavaScript før, ta ein kikk på oppgåva [Hei,
JavaScript](../hei_js/hei_js_nn.html) fyrst.

## Sjekkliste {.check}

- [ ] Sjå på koden i boksen under. Det meste er HTML som du ikkje treng å endre.

- [ ] All JavaScript-koden i denne oppgåva skal stå mellom `<script>` og
  `</script>`. Der står det no berre ein kommentar.

- [ ] Viss du gjer noko gale, kan du trykkje **Reset** for å starte på nytt.

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
      // Her skriv du JavaScript-koden
    </script>
  </body>
</html>
```

## Tips {.tip}

Du kan også skrive koden i VS Code. Trykk **Last ned som fil** under døme, eller
lag ei ny fil. Sjå oppgåva [VS Code](../vs_code/vs_code.html).


# Steg 2: Lage ein ball {.activity}

Me skal bruke JavaScript til å lage innhaldet på nettsida. Dette tyder at me
skal bruke JavaScript til å lage HTML. Du treng ikkje kunne noko spesielt om
HTML, men viss du vil lære meir om det fyrst kan du sjå på oppgåva [Hva er en
nettside?](../hva_er_en_nettside/hva_er_en_nettside.html).

## Sjekkliste {.check}

- [ ] Me startar med å lage ein funksjon som heiter `Ball`:

  ```js
  function Ball() {

  }
  ```

- [ ] Inne i funksjonen lagar me eit nytt `div`-element:

  ```js
  function Ball() {
    const el = document.createElement('div');
  }
  ```

- [ ] `const el` tyder at elementet får namnet `el`. `const` brukast når namnet
  alltid skal peike på det same, her det same elementet.

- [ ] No kan me gi elementet ein stil:

  ```js
  function Ball() {
    const el = document.createElement('div');
    el.style.backgroundColor = 'black';
    el.style.width = '60px';
    el.style.height = '60px';
  }
  ```

- [ ] `el.style.backgroundColor = 'black'` gjer ballen svart.

- [ ] `el.style.width = '60px'` gjer ballen 60
  [pikslar](https://no.wikipedia.org/wiki/Piksel) brei.

- [ ] `el.style.height = '60px'` gjer ballen 60 pikslar høg.

- [ ] La oss leggje til ballen på sida:

  ```js
  function Ball() {
    const el = document.createElement('div');
    el.style.backgroundColor = 'black';
    el.style.width = '60px';
    el.style.height = '60px';
    document.body.appendChild(el);
  }
  ```

- [ ] For at ballen skal visast må me køyre funksjonen ved hjelp av denne koden:

  ```js
  Ball();
  ```

- [ ] Ser du ein svart firkant i resultatet?

Så ballen vår er ikkje akkurat rund. Me kan bruke `el.style.borderRadius` for å
runde av hjørnene. Sidan ballen er `60px` brei og høg, så avrundar me kantane
med `30px`, altså halvparten av sidekanten.

- [ ] Legg koden under dei andre `el.style`-setningane:

  ```js
  el.style.borderRadius = '30px';
  ```

- [ ] Fekk du ein rund ball?

## Utforsk {.challenge}

Viss du ynskjer ei anna form, prøv andre verdiar enn `30px` for avrundinga.
Korleis ser det ut med `5px`?

## Tips {.protip}

Viss du sit fast kan du sjå på koden så langt:

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

Akkurat no visast ballen heilt øvst til venstre i resultatet. La oss flytte den
rundt omkring.

Me brukar `el.style.position = 'fixed'` for å fortelje at me ynskjer å plassere
ballen i forhold til kantane i vindauget. Halvparten (`50 %`) frå toppen blir då
`el.style.top = '50%'`.

## Sjekkliste {.check}

- [ ] Legg til ein posisjon for ballen inne i `Ball`:

  ```js
  el.style.position = 'fixed';
  el.style.top = '80%';
  ```

- [ ] Flytta ballen seg ned?

- [ ] Flytt ballen ut frå venstre kant:

  ```js
  el.style.left = '30%';
  ```

- [ ] Prøv andre verdiar mellom `0%` og `100%`.

- [ ] Klarar du å finne ut når ballen forsvinn ut av vindauget?

## Tips {.protip}

Viss du står fast kan du sjå på koden så langt:

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


# Steg 4: Flytte ballen med ein funksjon {.activity}

Sidan me ynskjer at ballen skal flytte seg undervegs i spelet, så skal me lage
ein funksjon som flyttar ballen.

## Sjekkliste {.check}

- [ ] Inne i `Ball` lagar du ein funksjon som heiter `el.posisjon`. Denne
  funksjonen skal ta inn ein `x`- og ein `y`-verdi og plassere elementet.

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

- [ ] No bestemmer `posisjon` kvar ballen er. Slett linjene med `el.style.top`
  og `el.style.left` frå steg 3, men behald `el.style.position = 'fixed'`.

- [ ] Returner `el` slik at me kan bruke funksjonane til ballen utanfor `Ball`.

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

- [ ] Byt ut `Ball();` med denne koden. Då kan du flytte ballen:

  ```js
  const ball = Ball();  // lagar ballen
  ball.posisjon('10%', '20%');  // flyttar til x = 10% og y = 20%
  ```

## Tips {.protip}

Viss du står fast kan du sjå på koden så langt:

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


# Steg 5: Vel ei tilfeldig plassering {.activity}

I JavaScript kan me bruke `Math.random()` for å få ein tilfeldig verdi mellom 0
og 1. La oss bruke denne slik at ballen blir plassert på ein tilfeldig stad.

## Sjekkliste {.check}

- [ ] Skriv denne linja nedst i koden:

  ```js
  console.log(Math.random());
  ```

- [ ] `console.log` skriv ut ein verdi. Utskrifta visast under resultatet. Fekk
  du eit tal mellom 0 og 1?

- [ ] Me kan gjere om talet til prosent ved å gange med 100. Prøv det sjølv:

  ```js
  console.log(Math.random() * 100);
  ```

- [ ] Me kan leggje til prosentteiknet med `+ '%'`:

  ```js
  console.log(Math.random() * 100 + '%');
  ```

- [ ] Legg merke til at me får nye tal kvar gong koden køyrer. Det er dette som
  kallast *tilfeldig*.

- [ ] Slett linjene med `console.log` att.

- [ ] La oss bruke `Math.random` til å plassere ballen. Byt ut
  `ball.posisjon('10%', '20%');` med:

  ```js
  const x = Math.random() * 100 + '%';
  const y = Math.random() * 100 + '%';
  ball.posisjon(x, y);
  ```

Her har me laga to variablar, `x` og `y`. Begge heldt på kvart sitt tilfeldige
tal. Dette talet blir sendt inn i funksjonen `posisjon(x,y)` me laga i stad.

- [ ] Køyr koden fleire gonger, til dømes ved å endre han litt. Hamnar ballen på
  ein ny stad kvar gong?

- [ ] Køyrer du koden mange nok gonger kan du leggje merke til at ballen nokre
  gonger kjem utanfor botnen og høgre side.

- [ ] For å unngå dette kan me avgrense flyttinga til 80 %:

  ```js
  const x = Math.random() * 80 + '%';
  const y = Math.random() * 80 + '%';
  ```

- [ ] Sidan `Math.random()` maksimalt er 1 og me gangar med 80, så vil aldri
  ballen flytte seg lengre ut frå toppen eller venstre side enn 80 %.

## Tips {.protip}

Viss du står fast kan du sjå på koden så langt:

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


# Steg 6: Flytte ballen kvart andre sekund {.activity}

Me vil at ballen skal flytte seg heile tida. No skal me bruke `setInterval` for
å flytte ballen kvart andre sekund.

```js
setInterval(function () {
  // koden som skal køyrast i intervall
}, antall_millisekunder); // kor ofte den skal køyre
```

## Sjekkliste {.check}

- [ ] Bruk `setInterval` til å flytte ballen kvart andre sekund:

  ```js
  setInterval(function () {
    const x = Math.random() * 80 + '%';
    const y = Math.random() * 80 + '%';
    ball.posisjon(x, y);
  }, 2000);
  ```

- [ ] `setInterval(function ..., 2000)` tyder "køyr `function` kvart 2000.
  millisekund".

- [ ] 2000 millisekund er 2 sekund, altså blir ballen teikna ein ny stad kvart
  andre sekund.

## Tips {.protip}

Viss du står fast kan du sjå på koden så langt:

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

No har du ein ball som sprett rundt. La oss leggje til poeng. Me har laga ein
poeng-komponent som du kan bruke, så kjem du raskare i gang. `Poeng` er bygd opp
på same måte som `Ball`, så du må gjerne lese gjennom og sjå om du forstår den.

## Sjekkliste {.check}

- [ ] Legg til koden for komponenten `Poeng`:

  ```js
  /**
   * Poeng - viser poengsum nede i venstre hjørne.
   *
   * Bruk:
   *   const poeng = Poeng();  // viser poengsummen
   *   poeng.auk();  // aukar poengsummen med 100
   *   poeng.nullstill();  // set poengsummen til 0
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

    // Viser poengsum på skjermen, og lagar variabelen "_poeng"
    let _poeng = 0;
    el.textContent = _poeng + ' poeng';
    document.body.appendChild(el);

    // To funksjonar som aukar eller nullstiller poenga
    el.auk = function () {
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

- [ ] `_poeng` blir laga med `let` og ikkje `const`, fordi verdien skal endrast.
  `textContent` er teksten inne i elementet.

- [ ] For at poengsummen skal visast må me køyre `Poeng()` ein gong, slik me
  gjorde med `Ball()`.

- [ ] Legg denne linja over `Ball()`:

  ```js
  const poeng = Poeng();
  const ball = Ball();
  ```

- [ ] Visast "**0 poeng**"?

- [ ] For å halde orden på programmet er det lurt å ha det som skjer i toppen.
  Funksjonar kan brukast sjølv om dei ikkje står fyrst, så flytt `function Ball`
  og `function Poeng` ned til botnen.

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

- [ ] No står det som skjer i toppen:

  - Vis poenga: `const poeng = Poeng()`.

  - Vis ballen: `const ball = Ball()`.

  - Flytt ballen kvart andre sekund: `setInterval(..., 2000)`.

- [ ] No vel me å køyre funksjonen `poeng.auk` kvar gong ballen blir trykka.
  Legg denne linja rett under `const ball = Ball();`:

  ```js
  ball.addEventListener('click', poeng.auk);
  ```

  **OBS!** Det skal **ikkje** vere `()` på slutten av `poeng.auk`. Det er fordi
  funksjonen ikkje blir køyrt her, men kvar gong nokon klikkar på ballen.

- [ ] `ball.addEventListener('click', poeng.auk);` tyder at funksjonen
  `poeng.auk()` køyrast når nokon klikkar på ballen. `'click'` er namnet på
  hendinga.

- [ ] Sjekk at du får poeng når du treffer ballen med eit klikk.

## Tips {.protip}

Viss du står fast kan du sjå på koden så langt:

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
      ball.addEventListener('click', poeng.auk);
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

        el.auk = function () {
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

## Teste spelet {.flag}

No har du kome så langt at det kan vere kult å teste spelet. Sidan spelet
handlar om å trykkje flest mogleg gonger på ballen, så kan du godt prøve det på
mobiltelefonen din.

## Sjekkliste {.check}

- [ ] Linja `<meta name="viewport" ...>` i toppen av koden gjer at sida passar
  til skjermen på ein mobiltelefon. Den står der allereie.

- [ ] Det enklaste er å åpne denne oppgåva på mobilen og spele i resultatet
  under koden over.

- [ ] Du kan også trykkje **Last ned som fil**, sende fila `index.html` til
  mobilen og åpne den i nettlesaren der.

- [ ] Vil du at andre skal kunne åpne spelet med ei adresse, kan du publisere
  det. Sjå oppgåva [Publiser nettsida di](../publiser/publiser_nn.html).

- [ ] Spel!


# Steg 8: Avgrense tida {.activity}

Akkurat no har du ikkje noko tidsavgrensing i spelet. La oss leggje til ei
nedteljing av tid, slik at det går an å konkurrere om kven som klarar flest
klikk på 10 sekund.

## Sjekkliste {.check}

- [ ] Legg til koden for nedteljing i botnen av programmet.

  ```js
  /**
   * Nedteljing - Ei linje som viser at tida renn ut.
   *
   * Bruk:
   *   const nedteljing = Nedteljing(slutt);  // funksjonen `slutt` blir køyrt når tida er ute
   *   nedteljing.telNed(10);  // tel ned 10 sekund
   *
   */
  function Nedteljing(ferdig) {
    const el = document.createElement('div');

    // CSSen til elementet "el"
    el.style.position = 'fixed';
    el.style.left = '0';
    el.style.bottom = '0';
    el.style.height = '100%';
    el.style.width = '3px';
    el.style.backgroundColor = 'red';
    document.body.appendChild(el);

    // Reknar ut prosenten av kor lang tid det er att
    function prosent(slutt, tid) {
      return (slutt - Date.now()) / tid / 10;
    }

    // Funksjon som tel ned og stoppar når den har kome til null
    el.telNed = function (tid) {
      const slutt = Date.now() + tid * 1000;
      const intervall = setInterval(teikn, 20);

      // Teiknar streken på venstre side til tida er ute
      function teikn() {
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

- [ ] I toppen startar me nedteljinga.

  ```js
  const nedteljing = Nedteljing();
  nedteljing.telNed(10);
  ```

- [ ] Dette lagar ei nedteljing på 10 sekund.

- [ ] No ser du nedteljinga, men ingenting skjer når tida er ute.

- [ ] Lag funksjonen `stopp` som fortel kva som skal skje når tida er ute.

  ```js
  function stopp() {
    ball.skjul();
  }
  ```

- [ ] Me har ikkje laga funksjonen `ball.skjul` endå. Me treng `ball.vis` òg.

- [ ] Lag `ball.skjul` og `ball.vis` inne i `function Ball`.

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

- [ ] No skal me fortelje nedteljinga at den skal køyre `stopp()` når tida er
  ute.

  ```js
  const nedteljing = Nedteljing(stopp);
  ```

- [ ] Forsvinn ballen når tida er ute.

- [ ] Kor mange poeng klarar du på mobiltelefonen innan tida?

## Tips {.protip}

Viss du står fast kan du sjå på koden så langt:

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
      ball.addEventListener('click', poeng.auk);
      setInterval(function () {
        const x = Math.random() * 80 + '%';
        const y = Math.random() * 80 + '%';
        ball.posisjon(x, y);
      }, 2000);

      const nedteljing = Nedteljing(stopp);
      nedteljing.telNed(10);

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

        el.auk = function () {
          _poeng += 100;
          el.textContent = _poeng + ' poeng';
        };
        el.nullstill = function () {
          _poeng = 0;
          el.textContent = _poeng + ' poeng';
        };

        return el;
      }

      function Nedteljing(ferdig) {
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

        el.telNed = function (tid) {
          const slutt = Date.now() + tid * 1000;
          const intervall = setInterval(teikn, 20);

          function teikn() {
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


# Steg 9: Starte spelet på nytt {.activity}

No kan me starte spelet om att ved å køyre koden på nytt. Er det ikkje stiligare
med ein knapp som startar spelet?

## Sjekkliste {.check}

- [ ] Lag ein funksjon `start`.

  ```js
  function start() {

  }
  ```

- [ ] Funksjonen skal bestemme kva som skjer når spelet skal starte. Me må
  nullstille poengsummen, vise nedteljinga og vise ballen.

  ```js
  function start() {
    poeng.nullstill();
    nedteljing.telNed(10);
    ball.vis();
  }
  ```

- [ ] `start` skal køyrast kvar gong ein knapp blir trykka, så me treng ein
  knapp.

- [ ] Legg til koden for knappen i botnen av programmet.

  ```js
  /**
   * Ein knapp som ligg midt på sida.
   *
   * Bruk:
   *   const knapp = Knapp('trykk på meg');  // lagar ein knapp som ligg midt på sida
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
      // midten av skjermen er 50 % minus halvparten av storleiken til knappen
      const w = el.offsetWidth / 2;
      const h = el.offsetHeight / 2;
      el.style.marginLeft = '-' + w + 'px';
      el.style.marginTop = '-' + h + 'px';
    };

    return el;
  }
  ```

- [ ] I toppen legg me til knappen.

  ```js
  const knapp = Knapp('Prøv ein gong til');
  knapp.addEventListener('click', start);
  ```

- [ ] `knapp.addEventListener('click', start)` bestemmer kva som skal skje når
  me klikkar på knappen.

- [ ] Knappen visast ikkje, så me må bestemme at den skal visast når spelet er
  over.

  ```js
  function stopp() {
    ...
    knapp.vis();
  }
  ```

- [ ] Visast knappen når spelet er ferdig?

- [ ] Du legg kanskje merke til ein bug? Me må jo skjule knappen når spelet
  startar!

- [ ] Skjul knappen når spelet startar.

  ```js
  function start() {
    ...
    knapp.skjul();
  }
  ```

- [ ] Spelet er ferdig! Last ned spelet som fil eller publiser det, og sjå kven
  av venene dine som klarar flest poeng.

## Tips {.protip}

Her er fasiten:

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
      ball.addEventListener('click', poeng.auk);
      setInterval(function () {
        const x = Math.random() * 80 + '%';
        const y = Math.random() * 80 + '%';
        ball.posisjon(x, y);
      }, 2000);

      const knapp = Knapp('Prøv ein gong til');
      knapp.addEventListener('click', start);

      const nedteljing = Nedteljing(stopp);
      nedteljing.telNed(10);

      function start() {
        poeng.nullstill();
        nedteljing.telNed(10);
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

        el.auk = function () {
          _poeng += 100;
          el.textContent = _poeng + ' poeng';
        };
        el.nullstill = function () {
          _poeng = 0;
          el.textContent = _poeng + ' poeng';
        };

        return el;
      }

      function Nedteljing(ferdig) {
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

        el.telNed = function (tid) {
          const slutt = Date.now() + tid * 1000;
          const intervall = setInterval(teikn, 20);

          function teikn() {
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
          // midten av skjermen er 50 % minus halvparten av storleiken til knappen
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

## Utfordringar {.challenge}

Her er nokre utfordringar:

- [ ] Endre storleiken på ballen slik at spelet blir vanskelegare.

- [ ] Endre kor lenge spelet varar.

- [ ] Endre farga på ballen.

- [ ] Auk poengsummen med 1000 i staden for 100.

- [ ] Klarar du å få ballen til å endre til ulik storleik kvar gong den kjem til
  syne.

- [ ] Klarar du å få fram fleire enn ein ball?
