---
title: "JS: Partikkel-gravitasjon"
author: Lars Klingenberg
translator: Stein Olav Romslo
language: nn
---


# Introduksjon {.intro}

I denne oppgåva tek me utgangspunkt i animasjonen me laga i oppgåva
[Partikkel-animasjon](../partikkel_animasjon/partikkel_animasjon_nn.html){target=_blank}.
Viss du ikkje har gjort den oppgåva anbefalar me at du gjer den før du fortset
her.

Denne oppgåva går ut på å leggje til gravitasjon på `partikkel`-objektet. Du får
presentert kva du skal gjere, men du må sjølv finne ut korleis du skriv kode for
å få det til. Til slutt kjem det til å sjå ut omlag som dette:

<script>
        let canvas, ctx;

        const particle = {
            x: 125,
            y: 0,
            gravity: 0.05,
            gravitySpeed: 0,
            size: 10

        };

        window.addEventListener("load", function () {
            canvas = document.getElementById("canvas");
            ctx = canvas.getContext("2d");
            setInterval(draw, 30);
        });


        function draw() {
            ctx.clearRect(0,0,250,250);

            ctx.fillStyle = 'red';
            ctx.fillRect(particle.x, particle.y,particle.size,particle.size);

            particle.gravitySpeed += particle.gravity;
            particle.y += particle.gravitySpeed;

            const kant = canvas.height - particle.size;
            if(particle.y > kant){
                particle.y = kant;
                particle.gravitySpeed = 0;

                setTimeout(function() { particle.y = 0; }, 2000);
            }

        }

</script>

<canvas id="canvas" width="250" height="250"></canvas>


# Steg 1: Få partikkelen til å falle {.activity}

Det fyrste me skal gjere er å få partikkelen til å falle, og for å få til det må
du programmere det følgjande:

- [ ] Legg til to attributtar i `particle`: `gravitasjon` som styrer
  akselerasjonen nedover, og `hastigheit` som er farta den fell med. Du bør
  velje eit lite tal for `gravitasjon`, til dømes `0.01`. Frå starten bør
  `hastigheit` vere `0`.

- [ ] Set ein passande startstad for `particle`, helst høgt oppe.

For kvar gong `draw()` køyrer, skal følgjande skje:

- Attributten `hastigheit` skal endrast med `gravitasjon`-attributten.

- `y`-posisjonen til `particle` blir endra med `hastigheit`-attributten.

<toggle>
    <strong> Hint </strong>
    <hide>
    objekt.hastigheit += objekt.gravitasjon eller
    objekt.hastigheit = objekt.hastigheit + objekt.gravitasjon
    </hide>
</toggle>

Fell partikkelen no? Når partikkelen fell ser du kanskje òg at den fell gjennom
skjermen. Difor må me leggje til ein sjekk som gjer at den stoppar nedst.


# Steg 2: Stopp nedst på skjermen {.activity}

For at partikkelen vår skal stoppe nedst på skjermen treng me enkelt og greit
ein sjekk kvar gong me køyrer `draw()`

- [ ] Lag ein sjekk som kontrollerer om `particle` sin `y`-verdi er større enn
  høgda på `canvas`-objektet. OBS! Du vil sikkert merke at den "ristar" heilt
  nedst, difor må du òg ta omsyn til storleiken på partikkel-objektet når du
  sjekkar kor langt ned den er.

<toggle>
    <strong> Hint </strong>
    <hide>
    Lag ein variabel som heldt på verdien til `canvas.height - particle.size`.
    </hide>
</toggle>

- [ ] I sjekken må du stoppe partikkelen ved å setje `y`-verdien. Kan du tenke
  deg kva `y`-verdien bør vere?

No har du eit fallande objekt!

## Utfordringar {.challenge}

- [ ] Når partikkelen treff kanten, snu gravitasjonen slik at partikkelen går
  oppover.

- [ ] Klarar du å få partikkelen til å gå til venstre eller høgre òg?

- [ ] "Steng" alle kantane i `canvas` ved hjelp av fleire `if`-setningar.


# Steg 3: Få partikkelen til å flyge! {.activity}

No som me har fått gravitasjon på partikkelen vår kan me leggje til styring på
partikkelen ved hjelp av tastar. Me skal programmere slik at når du trykkar `pil
opp` så gir du partikkelen negativ akselerasjon, og når me slepp att blir den
påverka av gravitasjonen ned att. For å gjere det brukar me noko som heiter
`keydown`, `keyup` og `event.key`.

For å kunne utføre ein operasjon når me trykkar på ein tast må me ha denne
koden:

```js
window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        // Kode som skal utførast
    }
});
```

- [ ] Byt ut `"ArrowUp"` viss du vil bruke ein annan tast. Pil ned heiter
  `"ArrowDown"`, mellomrom heiter `" "` og bokstaven a heiter `"a"`.

## Forklaring {.challenge}

- `window.addEventListener("keydown", ...)` lyttar etter at ein tast blir trykka
  ned. Då blir funksjonen køyrt, og `event` fortel kva tast det var.

- `event.key` er namnet på tasten, som tekst. Er du usikker på kva ein tast
  heiter, kan du skrive `console.log(event.key);` inni funksjonen og trykke på
  tasten. Du finn òg alle namna på
  [MDN](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values){target=_blank}.

- I `if (event.key === "ArrowUp")` må du skrive kode for at gravitasjonen skal
  vere negativ. Prøv med ulike tal.

##

- [ ] For at du skal få att gravitasjonen når du slepp tasten, må du lytte etter
  `keyup` på same måte.

- [ ] Les meir om `keydown` og `keyup` her:
  [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event){target=_blank}

## Forslag til kode {.tip}

Viss du står heilt bom fast, kan du sjå på koden under. Klikk på det svarte
feltet fyrst, så går tastetrykka til animasjonen.

```html-live
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="UTF-8">
  <title>Partikkel-gravitasjon</title>
  <style>
    body {
      background-color: #666;
    }

    #canvas {
      background-color: #000;
    }
  </style>
  <script>
    let canvas, ctx;

    const particle = {
      x: 245,
      y: 0,
      gravity: 0.05,
      gravitySpeed: 0,
      size: 10,
      farge: "red"
    };

    window.addEventListener("load", function () {
      canvas = document.getElementById("canvas");
      ctx = canvas.getContext("2d");
      setInterval(draw, 30);
    });

    // Pil opp gir negativ gravitasjon, så partikkelen flyg oppover
    window.addEventListener("keydown", function (event) {
      if (event.key === "ArrowUp") {
        event.preventDefault(); // hindrar at sida rullar
        particle.gravity = -0.1;
      }
    });

    // Når tasten blir sleppt, kjem gravitasjonen att
    window.addEventListener("keyup", function (event) {
      if (event.key === "ArrowUp") {
        particle.gravity = 0.05;
      }
    });

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = particle.farge;
      ctx.fillRect(particle.x, particle.y, particle.size, particle.size);

      particle.gravitySpeed += particle.gravity;
      particle.y += particle.gravitySpeed;

      const kant = canvas.height - particle.size;
      if (particle.y > kant) {
        particle.y = kant;
        particle.gravitySpeed = 0;
      }
      if (particle.y < 0) {
        particle.y = 0;
        particle.gravitySpeed = 0;
      }
    }
  </script>
</head>
<body>
  <canvas id="canvas" width="500" height="500"></canvas>
</body>
</html>
```

## Tips {.tip}

Du kan også skrive koden i VS Code. Trykk **Last ned som fil** under dømet,
eller lag ei ny fil. Sjå oppgåva [VS Code](../vs_code/vs_code.html).
