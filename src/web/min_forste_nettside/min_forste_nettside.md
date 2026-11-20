---
title: "HTML: Min første nettside"
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

I denne oppgaven lager du en nettside om noe du liker: et dyr, en hobby, et
spill eller en bok. Underveis lærer du de viktigste HTML-taggene: overskrifter,
avsnitt, lister, bilder og lenker. Til slutt pynter du siden med litt CSS.

![Den ferdige pandasiden: overskriften "Alt om pandaer" i grønt, en tegning av
en panda med bambus, et avsnitt, overskriftene "Hva spiser pandaen?" og "Fakta"
og en liste med fakta om pandaer.](ferdig_pandaside.png)

Har du ikke gjort [Hva er en
nettside?](../hva_er_en_nettside/hva_er_en_nettside.html), er det lurt å starte
der.


# Steg 1: Velg et tema {.activity}

Bestem deg for hva siden skal handle om. I eksemplene bruker vi *pandaer*, men
du skal bytte det ut med ditt eget tema.

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Alt om pandaer</title>
  </head>
  <body>
    <h1>Alt om pandaer</h1>
    <p>Pandaer bor i fjellskoger i Kina og spiser nesten bare bambus.</p>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Bytt ut tittelen i `<title>` med ditt tema.

- [ ] Bytt ut overskriften i `<h1>`.

- [ ] Skriv ett eller to avsnitt med `<p>` om temaet ditt.

## Tips {.tip}

Du kan også skrive koden i VS Code. Trykk **Last ned som fil** under eksempelet,
eller lag en ny fil. Se oppgaven [VS Code](../vs_code/vs_code.html). I VS Code
blir arbeidet ditt lagret som en fil du kan åpne igjen senere.


# Steg 2: Flere overskrifter {.activity}

HTML har seks nivåer av overskrifter, fra `<h1>` (størst) til `<h6>` (minst).
Bruk dem som kapitler og underkapitler i en bok. En side bør ha én `<h1>`.

## Sjekkliste {.check}

- [ ] Legg til en mindre overskrift og et avsnitt under den:

  ```html
  <h2>Hva spiser pandaen?</h2>
  <p>En voksen panda kan spise over 12 kilo bambus om dagen.</p>
  ```

- [ ] Lag minst én `<h2>` til, med et avsnitt, om ditt eget tema.

- [ ] Prøv `<h3>` under en av `<h2>`-overskriftene. Ser du at den er mindre?


# Steg 3: Lister {.activity}

Lister passer når du har flere ting som hører sammen. `<ul>` lager en liste med
prikker, og `<ol>` lager en nummerert liste. Hvert punkt står i `<li>`.

## Sjekkliste {.check}

- [ ] Lag en liste med prikker:

  ```html
  <h2>Fakta</h2>
  <ul>
    <li>Pandaen er en bjørn.</li>
    <li>Den kan bli over 20 år gammel.</li>
    <li>En nyfødt panda er mindre enn en mus.</li>
  </ul>
  ```

- [ ] Bytt ut `ul` med `ol` (både i starten og slutten). Hva skjer?

- [ ] Lag din egen liste om temaet ditt.


# Steg 4: Bilder {.activity}

Et bilde legger vi inn med `<img>`. Den har ingen slutt-tagg. I stedet forteller
vi alt i *attributter*:

```html
<img src="panda.svg" alt="Tegning av en panda som tygger på bambus">
```

- `src` er navnet på bildefila.

- `alt` er en beskrivelse av bildet. Den leses opp for blinde og svaksynte, og
  den vises hvis bildet ikke finnes.

## Sjekkliste {.check}

- [ ] Legg `<img>`-linjen over inn i siden din, under `<h1>`. Fila `panda.svg`
  ligger ved siden av denne oppgaven, så pandaen dukker opp i resultatet.

- [ ] Skriv filnavnet feil med vilje: endre `panda.svg` til `pandaa.svg`. Nå
  finner ikke nettleseren bildet. Ser du at den viser `alt`-teksten i stedet,
  ofte med et lite ikon for et ødelagt bilde? Den som ikke kan se bildet, får i
  det minste vite hva det skulle vist. Derfor er `alt` så viktig.

  ![Resultatet med feil filnavn: i stedet for pandategningen står et lite ikon
  for et ødelagt bilde og teksten "Tegning av en panda som tygger på
  bambus".](alt_tekst_vises.png)

- [ ] Rett filnavnet tilbake til `panda.svg`.

- [ ] Skriv en `alt`-tekst som forteller hva som er på *ditt* bilde. Tenk deg at
  du beskriver bildet for noen i telefonen.

## Bilde fra egen maskin {.tip}

Prøv selv-boksen kan bare vise bilder som ligger på nettet, slik som `panda.svg`
her. Vil du bruke dine egne bilder, må du jobbe i VS Code. Legg bildet i samme
mappe som `index.html`, og skriv filnavnet i `src`, for eksempel
`src="hunden-min.jpg"`. Bruk bilder du har tatt selv, eller bilder du har lov
til å bruke.

Tar du med pandasiden over i VS Code, må du også lagre [panda.svg](panda.svg) i
samme mappe som `index.html`.


# Steg 5: Lenker {.activity}

Lenker er det som binder nettet sammen. En lenke lager vi med `<a>`:

```html
<a href="https://no.wikipedia.org/wiki/Kjempepanda">Les mer på Wikipedia</a>
```

`href` er adressen lenken går til. Teksten mellom `<a>` og `</a>` er det du
klikker på.

## Sjekkliste {.check}

- [ ] Legg til en lenke til en side som handler om temaet ditt.

- [ ] Skriv en lenketekst som sier hvor lenken går. *Les mer på Wikipedia* er
  bedre enn *klikk her*.


# Steg 6: Pynt med CSS {.activity}

Nå har siden innhold. La oss gi den litt stil. Her er hele pandasiden med CSS.
Bruk den som eksempel, eller lim inn `<style>`-delen i din egen side.

```html-live
<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="utf-8">
    <title>Alt om pandaer</title>
    <style>
      body {
        font-family: sans-serif;
        max-width: 40em;
        margin: 0 auto;
        padding: 1em;
        background-color: #f4f8f2;
      }
      h1 {
        color: #2e5e3a;
        text-align: center;
      }
      h2 {
        border-bottom: 2px solid #2e5e3a;
      }
      img {
        max-width: 100%;
      }
      a {
        color: #b3471d;
      }
    </style>
  </head>
  <body>
    <h1>Alt om pandaer</h1>
    <img src="panda.svg" alt="Tegning av en panda som tygger på bambus">
    <p>Pandaer bor i fjellskoger i Kina og spiser nesten bare bambus.</p>

    <h2>Hva spiser pandaen?</h2>
    <p>En voksen panda kan spise over 12 kilo bambus om dagen.</p>

    <h2>Fakta</h2>
    <ul>
      <li>Pandaen er en bjørn.</li>
      <li>Den kan bli over 20 år gammel.</li>
      <li>En nyfødt panda er mindre enn en mus.</li>
    </ul>

    <p>
      <a href="https://no.wikipedia.org/wiki/Kjempepanda">
        Les mer på Wikipedia
      </a>
    </p>
  </body>
</html>
```

## Sjekkliste {.check}

- [ ] Endre fargene. Fargekoder som `#2e5e3a` kan du finne med en fargevelger,
  for eksempel ved å søke etter *color picker* i en søkemotor.

- [ ] Endre `text-align: center;` til `text-align: right;` og se hva som skjer.

- [ ] `max-width: 40em;` gjør at teksten ikke blir for bred på store skjermer.
  Prøv å fjerne linjen og gjør vinduet bredt.

## Lagre {.save}

Prøv selv-boksen husker koden din bare i denne nettleseren på denne maskinen.
Trykk **Last ned som fil** for å ta vare på den. Da får du fila `index.html`,
som du kan åpne i nettleseren eller jobbe videre med i [VS
Code](../vs_code/vs_code.html).


# Utfordringer {.challenge}

- [ ] Lag en nummerert liste med dine tre favoritter innenfor temaet.

- [ ] Gjør et ord **fet** med `<strong>` og et ord *kursivt* med `<em>`.

- [ ] Lag en side til i VS Code, og lenk mellom de to sidene. Oppgaven [Lenk
  sammen nettsider](../lenk_sammen_nettsider/lenk_sammen_nettsider.html) viser
  hvordan.

- [ ] Vil du ha med en video eller lyd? Se oppgaven [Video og
  lyd](../video_og_lyd/video_og_lyd.html).
