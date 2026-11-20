---
title: "JS: Partikkel-gravitasjon"
author: Lars Klingenberg
language: nb
---


# Introduksjon {.intro}

I denne oppgaven skal vi ta utgangspunkt i animasjone vi lagde i oppgaven
[Partikkel-animasjon](../partikkel_animasjon/partikkel_animasjon.html){target=_blank}.
Dersom du ikke har gjort denne oppgaven anbefaler vi deg om å gå tilbake å gjøre
den før du fortsetter her.

Oppgaven her går ut på å legge til gravitasjon på `Partikkel`-objektet. Du vil
få presentert hva du skal gjøre, så du må selv finne ut hvordan man skriver kode
for å få det til. Til slutt kommer det til å se noe slik ut:

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

Det første vi skal gjøre er å få partikkelen til å falle, for å få det til å
skje må du programmere følgende:

- [ ] Legg til to attributter i `particle` som skal holde styr på
  `gravitasjonen` og `hastigheten` den faller med. `Gravitasjons`-attributtet
  bør være et lite tall, som for eksempel `0.01`. `Hastigheten` bør være `0` fra
  starten av

- [ ] Sett et passende startsted for `particle`, helst høyt oppe

For hver gang `draw()` kjører, skal følgende skje:

- `hastighets`-attributtet skal endres med `gravitasjons`-attributtet

- `particle` sin `y`-posisjon blir endret med `hastighets`-attributtet

<toggle>
    <strong> Hint </strong>
    <hide>
    objekt.hastighet += objekt.gravitasjon eller
    objekt.hastighet = objekt.hastighet + objekt.gravitasjon
    </hide>
</toggle>

Faller partikkelen nå? Nå som partikkelen faller ser du kanskje også at det
faller igjennom skjermen, derfor må vi legge til en sjekk om gjør at den stopper
nederst.


# Steg 2: Stopp nederst på skjermen {.activity}

For at partikkelen vårt skal stoppe nederst på skjermen trenger vi enkelt og
greit en sjekk hver gang vi kjører `draw()`

- [ ] Lag en sjekk som sjekker om `particle` sin `y`-verdi er større enn høyden
  på `canvas`-objektet. OBS! Du vil sikkert merke at den "rister" helt nederst,
  derfor må du også ta hensyn til størrelsen på partikkel-objektet når du
  sjekker hvor langt ned den er.

<toggle>
    <strong> Hint </strong>
    <hide>
    Lag en variabel som holder på verdien til `canvas.height - particle.size`.
    </hide>
</toggle>

- [ ] I sjekken må du stoppe partikkelen ved å sette `y`-verdien. Kan du tenke
  deg til hva `y`-verdien bør være?

Nå har du et fallende objekt!

## Utfordringer {.challenge}

- [ ] Når partikkelen treffer kanten, snu gravitasjonen sånn at partikkelen går
  oppover

- [ ] Klarer du å få partikkelen til å gå til venster eller høyre også

- [ ] "Steng" alle kantene i `canvas` ved hjelp av flere `if`-setninger


# Steg 3: Få partikkelen til å fly! {.activity}

Nå som vi har fått gravitasjon på partikkelen vårt kan vi legge til styring på
partikkelen ved hjelp av knapper. Vi skal nå programmere slik at når du trykker
`pil opp` så gir vi partikkelen negativ akselerasjon og når vi slipper så blir
den påvirket av gravitasjonen. Får å gjøre dette bruker vi noe som heter
`keydown`, `keyup` og `event.key`.

For å kunne utføre en operasjon når vi trykker på en knapp må vi ha denne koden:

```js
window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
        // Kode som skal utføres
    }
});
```

- [ ] Bytt ut `"ArrowUp"` hvis du vil bruke en annen tast. Pil ned heter
  `"ArrowDown"`, mellomrom heter `" "` og bokstaven a heter `"a"`.

## Forklaring {.challenge}

- `window.addEventListener("keydown", ...)` lytter etter at en tast trykkes ned.
  Da kjøres funksjonen, og `event` forteller hvilken tast det var.

- `event.key` er navnet på tasten, som tekst. Er du usikker på hva en tast
  heter, kan du skrive `console.log(event.key);` inni funksjonen og trykke på
  tasten. Du finner også alle navnene på
  [MDN](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values){target=_blank}.

- I `if (event.key === "ArrowUp")` må du skrive kode for at gravitasjonen skal
  være negativ. Prøv med forskjellige tall.

##

- [ ] For at du skal få gravitasjonen tilbake når du slipper knappen, må du
  lytte etter `keyup` på samme måte.

- [ ] Les mer om `keydown` og `keyup` her:
  [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event){target=_blank}

## Forslag til kode {.tip}

Dersom du står bomfast, kan du se på koden under. Klikk på det svarte feltet
først, så går tastetrykkene til animasjonen.

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

    // Pil opp gir negativ gravitasjon, så partikkelen flyr oppover
    window.addEventListener("keydown", function (event) {
      if (event.key === "ArrowUp") {
        event.preventDefault(); // hindrer at siden ruller
        particle.gravity = -0.1;
      }
    });

    // Når tasten slippes, kommer gravitasjonen tilbake
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

Du kan også skrive koden i VS Code. Trykk **Last ned som fil** under eksempelet,
eller lag en ny fil. Se oppgaven [VS Code](../vs_code/vs_code.html).
