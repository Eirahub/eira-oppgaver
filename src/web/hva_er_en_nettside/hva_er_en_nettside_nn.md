---
title: "HTML: Kva er ei nettside?"
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

Kvar dag opnar du nettsider: læringsplattforma på skulen, ein video, eit spel
eller vêrmeldinga. I denne oppgåva finn du ut kva ei nettside eigentleg er laga
av. Du får sjå korleis nettlesaren gjer om tekst til noko du kan sjå og klikke
på, og du gjer dei første endringane dine på ei ekte nettside.

Du treng ikkje installere noko. Alt blir gjort i ein **Prøv selv**-boks rett her
på sida.

![Ein Prøv selv-boks med knappane Kjør, Tilbakestill og Last ned som fil. Til
venstre står HTML-koden under overskrifta Koden din, og til høgre viser Resultat
overskrifta "Hei, verden!" og eit avsnitt.](prov_selv_boks.png)


# Steg 1: Frå adresse til ferdig side {.activity}

Når du skriv ei adresse i nettlesaren, til dømes `yr.no`, skjer dette:

1. Nettlesaren spør ein **server** om sida. Ein server er ei datamaskin som står
  ein stad i verda og ventar på slike spørsmål.

2. Serveren svarar med nokre filer. Dei viktigaste er HTML, CSS og JavaScript.
  Bilete, lyd og video kjem i eigne filer.

3. Nettlesaren les filene og teiknar sida på skjermen.

Dei tre språka har kvar sin jobb:

- **HTML** seier *kva* som er på sida: overskrifter, avsnitt, bilete, lenkjer.

- **CSS** seier *korleis* sida ser ut: fargar, skrift, storleikar og plassering.

- **JavaScript** seier *kva som skjer* når du gjer noko: klikkar, skriv eller
  trykkjer på ein tast.

## Sjekkliste {.check}

- [ ] Opne ei nettside du likar i ei ny fane.

- [ ] Høgreklikk på ein tom stad på sida og vel **Vis sidekilde** (eller trykk
  **Ctrl** + **U**). No ser du HTML-en som serveren sende.

- [ ] Finn du att noko tekst frå sida i koden?

- [ ] Ser du ord som `<div>`, `<p>` eller `<a>`? Det er HTML. Lukk fana når du
  har sett deg om.


# Steg 2: Den første HTML-en din {.activity}

Under ser du ei heil nettside. I boksen står koden, og like ved blir resultatet
vist, slik nettlesaren teiknar det.

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Min side</title>
  </head>
  <body>
    <h1>Hei, verden!</h1>
    <p>Dette er min aller første nettside.</p>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Byt ut `Hei, verden!` med namnet ditt. Ser du at resultatet endrar seg?

- [ ] Skriv ei setning om noko du likar inne i `<p>` og `</p>`.

- [ ] Lag eit avsnitt til. Skriv ei ny linje med `<p>` og `</p>` under det
  første.

- [ ] Har du øydelagt noko? Trykk **Tilbakestill**, så får du att koden slik han
  var.

## Forklaring {.tip}

- Orda i spisse klammer blir kalla **taggar**. `<h1>` tyder *overskrift 1*, og
  `<p>` tyder *avsnitt* (paragraph på engelsk).

- Dei fleste taggane kjem i par. `<p>` startar avsnittet, og `</p>` med
  skråstrek avsluttar det.

- `<head>` har informasjon *om* sida, til dømes tittelen som blir vist i fana.
  `<body>` har det som blir vist på sjølve sida.

- Innrykka gjer koden lettare å lese. Nettlesaren bryr seg ikkje om dei.

## Tips {.tip}

Du kan også skrive koden i VS Code. Trykk **Last ned som fil** under dømet,
eller lag ei ny fil. Sjå oppgåva [VS Code](../vs_code/vs_code_nn.html).


# Steg 3: Litt farge med CSS {.activity}

No skal vi bestemme korleis sida ser ut. CSS skriv vi inne i `<style>` i
`<head>`.

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Min side</title>
    <style>
      body {
        background-color: lightyellow;
        font-family: sans-serif;
      }
      h1 {
        color: darkblue;
      }
    </style>
  </head>
  <body>
    <h1>Hei, verden!</h1>
    <p>Dette er min aller første nettside.</p>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Endre `darkblue` til `crimson`, `seagreen` eller ein annan farge du likar.

- [ ] Endre bakgrunnsfargen til `lightblue`.

- [ ] Legg til linja `font-size: 48px;` inne i `h1 { }`. Kva skjer?

## Forklaring {.tip}

Ein CSS-regel består av ein **veljar** og nokre **eigenskapar**:

```css
h1 {
  color: darkblue;
}
```

- `h1` er veljaren. Han bestemmer kva taggar regelen gjeld for.

- `color` er eigenskapen, og `darkblue` er verdien.

- Kvar linje sluttar med semikolon `;`.


# Steg 4: Få sida til å gjere noko med JavaScript {.activity}

Til slutt legg vi til ein knapp. Når du klikkar på han, skal JavaScript endre
teksten på sida.

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Min side</title>
  </head>
  <body>
    <h1 id="overskrift">Hei, verden!</h1>
    <button id="knapp">Klikk meg</button>

    <script>
      const overskrift = document.querySelector('#overskrift');
      const knapp = document.querySelector('#knapp');

      knapp.addEventListener('click', () => {
        overskrift.textContent = 'Du klikket!';
        console.log('Knappen ble klikket');
      });
    </script>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Klikk på knappen. Endrar overskrifta seg?

- [ ] Sjå under resultatet. Der står teksten frå `console.log`. Han er ei
  melding til deg som programmerer, og blir ikkje vist på sjølve sida.

- [ ] Endre teksten `'Du klikket!'` til noko anna, og prøv igjen.

- [ ] Endre teksten på knappen.

## Forklaring {.tip}

- `id="knapp"` gir knappen eit namn, så JavaScript kan finne han.

- `document.querySelector('#knapp')` hentar knappen frå sida. `#` tyder at vi
  leitar etter ein id.

- `addEventListener('click', ...)` tyder: *når nokon klikkar, gjer dette*.

- `textContent` er teksten inne i ein tagg.

Du treng ikkje forstå alt i JavaScript-koden no. Det viktige er at HTML, CSS og
JavaScript jobbar saman i den same fila.


# Utfordringar {.challenge}

- [ ] Gi knappen ein farge med CSS. Veljaren for knappar er `button`.

- [ ] Få knappen til å endre bakgrunnsfargen på sida. Tips:

  ```
  document.body.style.backgroundColor = 'pink';
  ```

- [ ] Gå vidare til [Mi første
  nettside](../min_forste_nettside/min_forste_nettside_nn.html), der du lagar ei
  side om noko du likar.
