---
title: Publiser en nettside med GitHub Pages
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Med **GitHub Pages** blir et repo til en nettside som alle kan åpne. Det er
gratis. Hver gang du pusher en endring, oppdateres siden.

I denne oppgaven lager du en enkel side og publiserer den. Har du laget en
nettside i [Web-kurset](../../web/), kan du bruke den i stedet.

<!-- BILDE: En enkel nettside på adressen brukernavn.github.io/min-side i
nettleseren -->

## Aldersgrense {.tip}

Du må være 13 år eller eldre for å ha en konto på GitHub. Er du yngre, kan en
voksen publisere siden fra sin konto.


# Steg 1: Lag siden {.activity}

## Sjekkliste {.check}

- [ ] Lag en ny mappe `min-side` og åpne den i VS Code.

- [ ] Lag fila `index.html`. Fila må hete akkurat det, for det er den GitHub
  Pages viser først.

  ```html
  <!DOCTYPE html>
  <html lang="nb">
  <head>
    <meta charset="utf-8">
    <title>Min side</title>
  </head>
  <body>
    <h1>Hei, verden!</h1>
    <p>Denne siden er publisert med GitHub Pages.</p>
  </body>
  </html>
  ```

- [ ] Åpne fila i nettleseren og se at den virker.

- [ ] Lag et repo med **Initialize Repository** og en commit med meldingen
  `Første versjon av siden`.


# Steg 2: Publiser repoet {.activity}

## Sjekkliste {.check}

- [ ] Trykk **Publish Branch** og velg **Publish to GitHub public repository**.

## Bare public {.tip}

Med en gratis konto virker GitHub Pages bare for public repoer. Alt i repoet kan
da leses av alle. Ikke legg inn navn, adresse, bilder av folk eller andre ting
du ikke vil dele.


# Steg 3: Slå på GitHub Pages {.activity}

## Sjekkliste {.check}

- [ ] Åpne repoet på github.com og gå til **Settings**.

- [ ] Velg **Pages** i menyen til venstre.

- [ ] Under **Build and deployment** og **Source**, velg **Deploy from a
  branch**.

- [ ] Under **Branch**, velg `main` og mappen `/ (root)`. Trykk **Save**.

- [ ] Vent et minutt og last siden på nytt. Øverst står adressen, for eksempel
  `https://brukernavn.github.io/min-side/`. Trykk **Visit site**.

## Test prosjektet {.flag}

- [ ] Åpne adressen på mobilen. Siden skal vises der også.


# Steg 4: Oppdater siden {.activity}

## Sjekkliste {.check}

- [ ] Endre teksten i `<h1>` i VS Code og lagre.

- [ ] Lag en commit og trykk **Sync Changes**.

- [ ] På github.com: gå til fanen **Actions**. Der ser du at GitHub bygger siden
  på nytt. Når den er grønn, er siden oppdatert.

- [ ] Last siden på nytt i nettleseren.

## Prøv en endring på en gren først {.protip}

Siden vises fra `main`. Vil du prøve noe stort, lag en gren og en pull request
som i [Samarbeid med pull request](../samarbeid/samarbeid). Siden endres først
når du fletter inn.


# Utfordring {.challenge}

- [ ] Lag en side til, `om.html`, og lenk til den fra `index.html` med `<a
  href="om.html">Om meg</a>`.

- [ ] Legg til et stilark `stil.css` og gi siden farger. Se
  [Web-kurset](../../web/) for hjelp.

- [ ] Vil du ha adressen `brukernavn.github.io` uten noe bak? Lag et repo som
  heter akkurat `brukernavn.github.io`, med ditt eget brukernavn.
