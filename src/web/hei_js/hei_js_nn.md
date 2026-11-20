---
title: "JS: Hei, JavaScript!"
author: Arve Seljebu
translator: Stein Olav Romslo
language: nn
---


# Introduksjon {.intro}

I denne oppgåva skal du møte programmeringsspråket JavaScript. Du skal gjere den
klassiske oppgåva *Hallo, verda* med ein katt.

<!-- BILDE: Katten som seier "Mjau, Arve!" under resultatet i Prøv sjølv-blokka
-->


# Steg 1: Prøv sjølv-blokka {.activity}

I denne oppgåva skriv du koden rett på sida, i ei *Prøv sjølv*-blokk. Blokka
under er ei heil nettside. JavaScript-koden står mellom `<script>` og
`</script>`. Når du endrar koden, ser du resultatet under. Det som blir skrive
ut med `console.log`, blir òg vist under resultatet.

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Hei JavaScript</title>
  </head>
  <body>
    <script>
      console.log("Hallo, verda");
    </script>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Står det `Hallo, verda` under resultatet?

- [ ] Kan du endre koden til å skrive namnet ditt?

## Tips {.tip}

Du kan også skrive koden i VS Code. Trykk **Last ned som fil** under dømet,
eller lag ei ny fil. Sjå oppgåva [VS Code](../vs_code/vs_code.html).

## Forklaring {.tip}

Her er ei forklaring til koden over:

- `console.log()` tyder at me ynskjer å køyre kommandoen med namnet
  `console.log`. Den skriv ut det som er mellom parentesene til `log()` i
  konsollen. Konsollen er ein stad der program kan skrive beskjedar. I denne
  oppgåva blir han vist under resultatet. I nettlesaren finn du han ved å
  trykkje **F12** og velje **Console**.

- `.log` er ein av fleire utskriftsmetodar. Prøv `console.error`. Ser du kva som
  skil den frå `console.log`?

- Tekst som blir skrive ut til konsollen ligg mellom hermeteikn (`"`), slik som
  `"Hallo, verda"`.

- `;` tyder at kodesetninga er ferdig.

## Andre måtar å køyre JavaScript på {.tip}

- Skriv kode mellom `<script>` og `</script>` i ei HTML-fil, og åpne fila i ein
  nettlesar. Det er det Prøv sjølv-blokka gjer.

- Lagre koden i ei eiga fil, til dømes `katt.js`, og hent den inn frå HTML-fila
  med `<script src="katt.js"></script>`.

- Skriv kode rett i konsollen i nettlesaren (**F12**, så **Console**).


# Steg 2: Lage ein funksjon {.activity}

Ein funksjon er nesten som ei oppskrift. Ein brukar funksjonar for å kunne bruke
same kode fleire gonger, eller bryte opp eit problem til mindre bitar. Ein
funksjon kan både ta imot og gi frå seg (returnere) data. Funksjonen din skal
heite `hei`, ta imot eit `namn` og skrive namnet til konsollen.

## Sjekkliste {.check}

- [ ] Slett koden din frå steg 1 (det som står mellom `<script>` og
  `</script>`).

- [ ] Skriv inn denne koden i staden:

  ```js
  function hei(namn) {
    console.log(namn);
  }
  ```

## Forklaring {.tip}

- `function hei` tyder at funksjonen skal heite `hei`.

- `(namn)` tyder at me kan sende inn data til funksjonen. `namn` blir ein
  variabel, og heldt på ein verdi som me kan endre. Me skal sjå meir på dette
  seinare.

- `{` markerer starten til funksjonen.

- `}` markerer slutten til funksjonen.

- Mellom `{` og `}` er det som funksjonen skal gjere.

## Sjekkliste {.check}

- [ ] Akkurat no gjer ikkje funksjonen så mykje, men la oss teste den likevel.
  Skriv dette etter funksjonen:

  ```js
  hei("Emma");
  hei("Jens");
  ```

- [ ] `hei("Emma")` tyder at me skal køyre funksjonen og sende inn `"Emma"`.

- [ ] Ser du både `Emma` og `Jens` under resultatet?

Koden til no:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Hei JavaScript</title>
  </head>
  <body>
    <script>
      function hei(namn) {
        console.log(namn);
      }

      hei("Emma");
      hei("Jens");
    </script>
  </body>
</html>
```


# Steg 3: Hei, namn! {.activity}

I steg 2 gjorde me ikkje noko anna enn det som `console.log` gjer. No skal du få
`hei("Emma")` til å skrive ut `"Hei, Emma!"`.

## Sjekkliste {.check}

- [ ] I JavaScript kan me leggje saman tekst med `+`.

- [ ] La oss endre funksjonen `hei`:

  ```js
  function hei(namn) {
    console.log("Hei, " + namn + "!");
  }
  ```

- [ ] Her har me lagt saman `"Hei, "`, namnet som blir sendt inn og `"!"`

- [ ] Står det `Hei, Emma!` og `Hei, Jens!` under resultatet?

- [ ] Kan du endre koden slik at den skriv ut namnet ditt?

## Forklaring {.tip}

I funksjonen `hei` vil `namn` vere ein variabel. Den heldt på ein verdi, og
denne verdien kan endrast. Fyrst er `namn` det same som `Emma`, og så blir
`namn` til `Jens`. Variablar er veldig nyttig i programmering, og me kjem til å
bruke variablar mykje framover.


# Steg 4: Katten seier hei {.activity}

I dette steget skal du lage ein katt som seier hei.

## Sjekkliste {.check}

- [ ] Bytt ut `function hei` ved å kopiere koden under:

  ```js
  function hei(namn) {
    console.log("< Mjau, " + namn + "! >");
    console.log("    \\");
    console.log("      /\\___/\\");
    console.log("     (  o o  )");
    console.log("      \\ =0= /");
  }
  ```

- [ ] Køyr `hei` med ditt eige namn.

- [ ] Er det ein katt som seier mjau til deg under resultatet?

- [ ] Klarar du å lage ein hund eller eit anna dyr?

Koden til no:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Katten seier hei</title>
  </head>
  <body>
    <script>
      function hei(namn) {
        console.log("< Mjau, " + namn + "! >");
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

`\` brukast til spesielle bokstavar. Til dømes tyder `\n` *ny linje*. Difor må
du skrive `\\` viss du vil ha ein vanleg bakoverstrek.


# Steg 5: Katten på nettsida {.activity}

Kanskje hadde det vore kult å sende ei kattehelsing til nokre av dei beste
venene dine? Då bør katten visast på sjølve nettsida. Venene dine kjem ikkje til
å leite i konsollen.

Me lagar eit `<pre>`-element. Tekst i `<pre>` blir vist akkurat slik han er
skriven, med alle mellomrom og linjeskift. Det passar perfekt til ein katt av
teikn.

## Sjekkliste {.check}

- [ ] Bytt ut `function hei` med denne koden:

  ```js
  function hei(namn) {
    const katt = document.createElement("pre");
    katt.textContent += "< Mjau, " + namn + "! >\n";
    katt.textContent += "    \\\n";
    katt.textContent += "      /\\___/\\\n";
    katt.textContent += "     (  o o  )\n";
    katt.textContent += "      \\ =0= /\n";
    document.body.append(katt);
  }
  ```

- [ ] Blir katten vist i resultatet no?

- [ ] Syt for at du køyrer `hei` med namnet til venen din:

  ```js
  hei("Namnet til venen din");
  ```

## Forklaring {.tip}

- `document.createElement("pre")` lagar eit nytt `<pre>`-element. Me tek vare på
  det i variabelen `katt`. Me brukar `const` fordi `katt` heile tida er det same
  elementet.

- `katt.textContent += "..."` legg til tekst i elementet. `\n` på slutten gir ny
  linje.

- `document.body.append(katt)` legg elementet til nedst på sida. Fyrst no blir
  katten vist.

Koden til no:

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Kattehelsing</title>
  </head>
  <body>
    <script>
      function hei(namn) {
        const katt = document.createElement("pre");
        katt.textContent += "< Mjau, " + namn + "! >\n";
        katt.textContent += "    \\\n";
        katt.textContent += "      /\\___/\\\n";
        katt.textContent += "     (  o o  )\n";
        katt.textContent += "      \\ =0= /\n";
        document.body.append(katt);
      }

      hei("Namnet til venen din");
    </script>
  </body>
</html>
```


# Steg 6: Lagre og dele prosjektet {.activity}

No skal du lagre kattehelsinga som ei fil på datamaskina di. Fila kan du sende
til venen din.

## Sjekkliste {.check}

- [ ] Trykk på **Last ned som fil** under Prøv sjølv-blokka.

- [ ] Ei fil som heiter `index.html` blir lasta ned. Gi henne gjerne eit nytt
  namn, til dømes `katt.html`.

- [ ] Åpne fila i nettlesaren din ved å dobbeltklikke på henne.

- [ ] Ser du katten som mjauar til venen din?

- [ ] Send fila til venen din. Når venen åpnar fila, blir katten vist.

- [ ] Gjenta stega for fleire av venene dine.

## Sjå konsollen i nettlesaren {.tip}

Lagrar du koden frå steg 4, blir katten berre skriven til konsollen. Då ser du
eit tomt vindauge når du åpnar fila. Slik finn du konsollen:

- [ ] Trykk på knappen **F12**, og vel **Console** (eller **Konsoll**).

- [ ] I konsollen skal du sjå katten mjaue til deg.

  ![Bilete av ASCII-katten som mjauar til deg](konsoll.png)

- [ ] Du kan òg skrive kode rett i konsollen. Skriv inn `hei("Namnet ditt");` og
  trykk **Enter**. Kva skjer?

## Ei anna måte å dele programmet {.tip}

Hugsar du oppgåva [HTML: Publiser nettsida di](../publiser/publiser_nn.html)?
Der lærer du å leggje ei nettside ut på internett, slik at du kan dele ei lenke
i staden for ei fil.

Du kan òg lagre JavaScript-koden i ei eiga `.js`-fil, til dømes `katt.js`. Så
kan du referere til den frå ei HTML-fil på denne måten:

```html
<body>
  <script src="katt.js"></script>
</body>
```

Hugs at `katt.js` då må liggje i same mappe som HTML-fila.

__Gratulerer!__ Du har skrive ditt fyrste JavaScript-program!
