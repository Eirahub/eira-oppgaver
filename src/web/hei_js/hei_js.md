---
title: "JS: Hei JavaScript!"
author: Arve Seljebu
language: nb
---


# Introduksjon {.intro}

I denne oppgaven blir du introdusert for programmeringsspråket JavaScript. Du
skal gjøre den klassiske oppgaven *Hei verden*, med en katt.

<!-- BILDE: Katten som sier "Mjau, Arve!" under resultatet i Prøv selv-blokken
-->


# Steg 1: Prøv selv-blokken {.activity}

I denne oppgaven skriver du koden rett på siden, i en *Prøv selv*-blokk. Blokken
under er en hel nettside. JavaScript-koden står mellom `<script>` og
`</script>`. Når du endrer koden, ser du resultatet under. Det som skrives ut
med `console.log`, vises også under resultatet.

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Hei JavaScript</title>
  </head>
  <body>
    <script>
      console.log("hei verden");
    </script>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Står det `hei verden` under resultatet?

- [ ] Kan du endre koden til å skrive ditt navn?

## Tips {.tip}

Du kan også skrive koden i VS Code. Trykk **Last ned som fil** under eksempelet,
eller lag en ny fil. Se oppgaven [VS Code](../vs_code/vs_code.html).

## Forklaring {.tip}

Her er en forklaring til koden over:

- `console.log()` betyr at vi ønsker å kjøre kommandoen med navnet
  `console.log`. Den skriver ut det som er mellom parentesene til `log()` i
  konsollen. Konsollen er et sted der programmer kan skrive beskjeder. I denne
  oppgaven vises den under resultatet. I nettleseren finner du den ved å trykke
  **F12** og velge **Console**.

- `.log` er en av flere utskriftsmetoder. Prøv `console.error`, ser du hva
  forskjellen til `console.log` er?

- Tekst som skrives ut til konsollen ligger mellom `"`, slik som `"hei verden"`.

- `;` betyr at kodesetningen er ferdig.

## Andre måter å kjøre JavaScript på {.tip}

- Skriv kode mellom `<script>` og `</script>` i en HTML-fil, og åpne filen i en
  nettleser. Det er det Prøv selv-blokken gjør.

- Lagre koden i en egen fil, for eksempel `katt.js`, og hent den inn fra
  HTML-filen med `<script src="katt.js"></script>`.

- Skriv kode rett i konsollen i nettleseren (**F12**, så **Console**).


# Steg 2: Lage en funksjon {.activity}

En funksjon er nesten som en oppskrift. Funksjoner brukes når man ønsker å
gjenbruke kode flere ganger eller bryte opp et problem til mindre biter. En
funksjon kan både ta i mot og gi fra seg (returnere) data. Din funksjon skal
hete `hei`, ta i mot et `navn` og skrive navnet til konsollen.

## Sjekkliste {.check}

- [ ] Slett koden din fra steg 1 (det som står mellom `<script>` og `</script>`)

- [ ] Skriv inn denne koden i stedet:

  ```js
  function hei(navn) {
    console.log(navn);
  }
  ```

## Forklaring {.tip}

- `function hei` betyr at funksjonen skal hete `hei`.

- `(navn)` betyr at vi kan sende inn data til funksjonen. `navn` blir her en
  variabel, den holder på en verdi som kan endres. Vi skal se nærmere på dette
  senere.

- `{` markerer starten til funksjonen.

- `}` markerer slutten til funksjonen.

- Mellom `{` og `}` er det som funksjonen skal gjøre.

## Sjekkliste {.check}

- [ ] Akkurat nå gjør ikke funksjonen så mye, men la oss teste den ut. Skriv
  dette etter funksjonen:

  ```js
  hei("Emma");
  hei("Jens");
  ```

- [ ] `hei("Emma")` betyr at vi skal kjøre funksjonen og sende inn `"Emma"`

- [ ] Ser du både `Emma` og `Jens` under resultatet?

Koden til nå:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Hei JavaScript</title>
  </head>
  <body>
    <script>
      function hei(navn) {
        console.log(navn);
      }

      hei("Emma");
      hei("Jens");
    </script>
  </body>
</html>
```


# Steg 3: Hei navn! {.activity}

I steg 2 gjorde vi ikke noe annet enn det som `console.log` gjør. Nå skal du få
`hei("Emma")` til å skrive ut `"Hei Emma!"`.

## Sjekkliste {.check}

- [ ] I JavaScript kan vi legge sammen tekst med `+`

- [ ] La oss endre funksjonen `hei`:

  ```js
  function hei(navn) {
    console.log("Hei " + navn + "!");
  }
  ```

- [ ] Her har vi lagt sammen `"Hei "`, navnet som sendes inn og `"!"`

- [ ] Står det `Hei Emma!` og `Hei Jens!` under resultatet?

- [ ] Kan du endre koden slik at den skriver ut navnet ditt?

## Forklaring {.tip}

I funksjonen `hei` vil `navn` være en variabel. Den holder på en verdi og denne
verdien kan endres. Først er `navn` det samme som `Emma`, så blir `navn` til
`Jens`. Variabler er svært nyttig innfor programmering og vi kommer til å bruke
masse variabler fremover.


# Steg 4: Katten sier hei {.activity}

I dette steget skal du lage en katt som sier hei.

## Sjekkliste {.check}

- [ ] Bytt ut `function hei` ved å kopiere koden under:

  ```js
  function hei(navn) {
    console.log("< Mjau, " + navn + "! >");
    console.log("    \\");
    console.log("      /\\___/\\");
    console.log("     (  o o  )");
    console.log("      \\ =0= /");
  }
  ```

- [ ] Kjør `hei` med ditt eget navn

- [ ] Er det en katt som sier mjau til deg under resultatet?

- [ ] Klarer du lage en hund eller et annet dyr?

Koden til nå:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Katten sier hei</title>
  </head>
  <body>
    <script>
      function hei(navn) {
        console.log("< Mjau, " + navn + "! >");
        console.log("    \\");
        console.log("      /\\___/\\");
        console.log("     (  o o  )");
        console.log("      \\ =0= /");
      }

      hei("Arve");
    </script>
  </body>
</html>
```

## Bakoverstrek {.tip}

`\` brukes til spesielle bokstaver. `\n` for eksempel betyr *ny linje*. Derfor
må du skrive `\\` dersom du ønsker en vanlig bakoverstrek.


# Steg 5: Katten på nettsiden {.activity}

Kanskje hadde det vært kult å sende en kattehilsen til noen av dine beste
venner? Da bør katten vises på selve nettsiden. Vennene dine kommer ikke til å
lete i konsollen.

Vi lager et `<pre>`-element. Tekst i `<pre>` vises akkurat slik den er skrevet,
med alle mellomrom og linjeskift. Det passer perfekt til en katt av tegn.

## Sjekkliste {.check}

- [ ] Bytt ut `function hei` med denne koden:

  ```js
  function hei(navn) {
    const katt = document.createElement("pre");
    katt.textContent += "< Mjau, " + navn + "! >\n";
    katt.textContent += "    \\\n";
    katt.textContent += "      /\\___/\\\n";
    katt.textContent += "     (  o o  )\n";
    katt.textContent += "      \\ =0= /\n";
    document.body.append(katt);
  }
  ```

- [ ] Vises katten i resultatet nå?

- [ ] Sørg for at du kjører `hei` med navnet til din venn:

  ```js
  hei("Navnet til din venn");
  ```

## Forklaring {.tip}

- `document.createElement("pre")` lager et nytt `<pre>`-element. Vi tar vare på
  det i variabelen `katt`. Vi bruker `const` fordi `katt` hele tiden er det
  samme elementet.

- `katt.textContent += "..."` legger til tekst i elementet. `\n` på slutten gir
  ny linje.

- `document.body.append(katt)` legger elementet til nederst på siden. Først nå
  vises katten.

Koden til nå:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Kattehilsen</title>
  </head>
  <body>
    <script>
      function hei(navn) {
        const katt = document.createElement("pre");
        katt.textContent += "< Mjau, " + navn + "! >\n";
        katt.textContent += "    \\\n";
        katt.textContent += "      /\\___/\\\n";
        katt.textContent += "     (  o o  )\n";
        katt.textContent += "      \\ =0= /\n";
        document.body.append(katt);
      }

      hei("Navnet til din venn");
    </script>
  </body>
</html>
```


# Steg 6: Lagre og dele prosjektet {.activity}

Nå skal du lagre kattehilsenen som en fil på datamaskinen din. Filen kan du
sende til vennen din.

## Sjekkliste {.check}

- [ ] Trykk på **Last ned som fil** under Prøv selv-blokken

- [ ] En fil som heter `index.html` lastes ned. Gi den gjerne et nytt navn, for
  eksempel `katt.html`

- [ ] Åpne filen i nettleseren din ved å dobbeltklikke på den

- [ ] Ser du katten som mjauer til vennen din?

- [ ] Send filen til vennen din. Når vennen åpner filen, vises katten.

- [ ] Gjenta stegene for flere av vennene dine

## Se konsollen i nettleseren {.tip}

Lagrer du koden fra steg 4, skrives katten bare til konsollen. Da ser du et tomt
vindu når du åpner filen. Slik finner du konsollen:

- [ ] Trykk på knappen **F12**, og velg **Console** (eller **Konsoll**)

- [ ] I konsollen skal du se katten mjaue til deg.

  ![Bilde av ASCII katten som mjauer til deg](konsoll.png)

- [ ] Du kan også skrive kode rett i konsollen. Skriv inn `hei("Ditt navn");` og
  trykk **Enter**. Hva skjer?

## En annen måte å dele programmet {.tip}

Husker du oppgaven [HTML: Publiser nettsiden din](../publiser/publiser.html)?
Der lærer du å legge en nettside ut på internett, slik at du kan dele en lenke i
stedet for en fil.

Du kan også lagre JavaScript-koden i en egen `.js`-fil, for eksempel `katt.js`.
Så kan du referere til den fra en HTML-fil på denne måten:

```html
<body>
  <script src="katt.js"></script>
</body>
```

Husk at `katt.js` da må ligge i samme mappe som HTML-filen.

__Gratulerer!__ Du har nå skrevet ditt første JavaScript-program!
