---
title: Lærerveiledning - Samarbeid med pull request
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene jobber i par. Den ene inviterer den andre til repoet, den andre lager en
gren og en pull request, og eieren leser, kommenterer og fletter den inn. Til
slutt lager de en konflikt på GitHub og løser den.

## Oppgaven passer til: {.check}

__Fag__: Programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Samarbeid, pull request, kodegjennomgang, konflikter

__Tidsbruk__: 60 til 90 minutter, i par

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2, Vg3__: velge og bruke relevante
  systemutviklingsmetoder og -verktøy for samarbeid med andre

- [ ] __Programmering, 10. trinn__: gjøre rede for hvordan datamaskiner og
  dataprogram fungerer, og forklare egne og andres koder

## Forslag til vurderingskriterier {.challenge}

Paret har laget og flettet inn minst én pull request med en kommentar på koden,
og har løst en konflikt. Hver elev kan forklare hvorfor endringer går via grener
og pull requests og ikke rett til `main`.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Del koden på GitHub](../del_pa_github/del_pa_github).
  Eieren trenger repoet `gjett_tallet` fra den oppgaven.

- [ ] __Utstyr__: To PC-er med VS Code og Git, og en GitHub-konto per elev.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](samarbeid)

### Tips til veiledere

- Sett sammen par før timen, og avtal hvem som er eier og hvem som er hjelper.
  Er det et oddetall, kan veilederen være den andre.

- Invitasjonen må godtas før hjelperen kan pushe. Den kan ligge i e-posten eller
  under varslene på github.com.

- Linja `git config --global pull.rebase false` i steg 5 gjør at Git fletter når
  grenene har gått hver sin vei, i stedet for å stoppe med en feilmelding. Den
  trengs bare én gang per maskin.

- Kommentarene i steg 4 er en god anledning til å snakke om hvordan man gir
  vennlige og konkrete tilbakemeldinger på andres kode.

### Hva er testet

Stegene og skjermbildene er laget med VS Code og github.com i november 2026.
Oppgaven er ikke prøvd med elever ennå.
