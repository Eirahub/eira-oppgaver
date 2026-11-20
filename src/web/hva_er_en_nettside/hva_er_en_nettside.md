---
title: "HTML: Hva er en nettside?"
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Hver dag åpner du nettsider: skolens læringsplattform, en video, et spill eller
værmeldingen. I denne oppgaven finner du ut hva en nettside egentlig består av.
Du får se hvordan nettleseren gjør om tekst til noe du kan se og klikke på, og
du gjør dine første endringer på en ekte nettside.

Du trenger ikke installere noe. Alt gjøres i en **Prøv selv**-boks rett her på
siden.


# Steg 1: Fra adresse til ferdig side {.activity}

Når du skriver en adresse i nettleseren, for eksempel `yr.no`, skjer dette:

1. Nettleseren spør en **server** om siden. En server er en datamaskin som står
  på et sted i verden og venter på slike spørsmål.

2. Serveren svarer med noen filer. De viktigste er HTML, CSS og JavaScript.
  Bilder, lyd og video kommer i egne filer.

3. Nettleseren leser filene og tegner siden på skjermen.

De tre språkene har hver sin jobb:

- **HTML** sier *hva* som er på siden: overskrifter, avsnitt, bilder, lenker.

- **CSS** sier *hvordan* siden ser ut: farger, skrift, størrelser og plassering.

- **JavaScript** sier *hva som skjer* når du gjør noe: klikker, skriver eller
  trykker på en tast.

## Sjekkliste {.check}

- [ ] Åpne en nettside du liker i en ny fane.

- [ ] Høyreklikk et tomt sted på siden og velg **Vis sidekilde** (eller trykk
  **Ctrl** + **U**). Du ser nå HTML-en som serveren sendte.

- [ ] Finner du noe tekst fra siden igjen i koden?

- [ ] Ser du ord som `<div>`, `<p>` eller `<a>`? Det er HTML. Lukk fanen når du
  har sett deg om.


# Steg 2: Din første HTML {.activity}

Under ser du en hel nettside. I boksen står koden, og like ved vises resultatet,
slik nettleseren tegner det.

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

- [ ] Bytt ut `Hei, verden!` med navnet ditt. Ser du at resultatet endrer seg?

- [ ] Skriv en setning om noe du liker inne i `<p>` og `</p>`.

- [ ] Lag et avsnitt til. Skriv en ny linje med `<p>` og `</p>` under det
  første.

- [ ] Har du ødelagt noe? Trykk **Reset**, så får du tilbake koden slik den var.

## Forklaring {.tip}

- Ordene i spisse klammer kalles **tagger**. `<h1>` betyr *overskrift 1*, og
  `<p>` betyr *avsnitt* (paragraph på engelsk).

- De fleste tagger kommer i par. `<p>` starter avsnittet, og `</p>` med
  skråstrek avslutter det.

- `<head>` har informasjon *om* siden, for eksempel tittelen som vises i fanen.
  `<body>` har det som vises på selve siden.

- Innrykkene gjør koden lettere å lese. Nettleseren bryr seg ikke om dem.

## Tips {.tip}

Du kan også skrive koden i VS Code. Trykk **Last ned som fil** under eksempelet,
eller lag en ny fil. Se oppgaven [VS Code](../vs_code/vs_code.html).


# Steg 3: Litt farge med CSS {.activity}

Nå skal vi bestemme hvordan siden ser ut. CSS skriver vi inne i `<style>` i
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

- [ ] Endre `darkblue` til `crimson`, `seagreen` eller en annen farge du liker.

- [ ] Endre bakgrunnsfargen til `lightblue`.

- [ ] Legg til linjen `font-size: 48px;` inne i `h1 { }`. Hva skjer?

## Forklaring {.tip}

En CSS-regel består av en **velger** og noen **egenskaper**:

```css
h1 {
  color: darkblue;
}
```

- `h1` er velgeren. Den bestemmer hvilke tagger regelen gjelder for.

- `color` er egenskapen, og `darkblue` er verdien.

- Hver linje slutter med semikolon `;`.


# Steg 4: Få siden til å gjøre noe med JavaScript {.activity}

Til slutt legger vi til en knapp. Når du klikker på den, skal JavaScript endre
teksten på siden.

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

- [ ] Klikk på knappen. Endrer overskriften seg?

- [ ] Se under resultatet. Der står teksten fra `console.log`. Den er en beskjed
  til deg som programmerer, og vises ikke på selve siden.

- [ ] Endre teksten `'Du klikket!'` til noe annet, og prøv igjen.

- [ ] Endre teksten på knappen.

## Forklaring {.tip}

- `id="knapp"` gir knappen et navn, så JavaScript kan finne den.

- `document.querySelector('#knapp')` henter knappen fra siden. `#` betyr at vi
  leter etter en id.

- `addEventListener('click', ...)` betyr: *når noen klikker, gjør dette*.

- `textContent` er teksten inne i en tagg.

Du trenger ikke forstå alt i JavaScript-koden nå. Det viktige er at HTML, CSS og
JavaScript jobber sammen i den samme fila.


# Utfordringer {.challenge}

- [ ] Gi knappen en farge med CSS. Velgeren for knapper er `button`.

- [ ] Få knappen til å endre bakgrunnsfargen på siden. Tips:

  ```
  document.body.style.backgroundColor = 'pink';
  ```

- [ ] Gå videre til [Min første
  nettside](../min_forste_nettside/min_forste_nettside.html), der du lager en
  side om noe du liker.
