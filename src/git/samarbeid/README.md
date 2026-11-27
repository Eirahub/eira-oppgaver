---
title: Lærerveiledning - Samarbeid med pull request
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Elevene jobber i par eller grupper på tre, med rollene produkteier, utvikler og
gjennomgåer. Produkteieren inviterer de andre til repoet, utvikleren lager en
gren og en pull request, og gjennomgåeren leser, kommenterer og godkjenner den
før produkteieren fletter den inn. Så bytter de roller, og gjennomgåeren gjør
gjennomgangen i VS Code med utvidelsen GitHub Pull Requests. Til slutt lager de
en konflikt på GitHub og løser den, og ser kort på forgrening (fork).

## Oppgaven passer til: {.check}

__Fag__: Programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Samarbeid, roller, pull request, kodegjennomgang, konflikter,
forgrening

__Tidsbruk__: 90 minutter, i par eller grupper på tre

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2, Vg3__: velge og bruke relevante
  systemutviklingsmetoder og -verktøy for samarbeid med andre

- [ ] __Programmering, 10. trinn__: gjøre rede for hvordan datamaskiner og
  dataprogram fungerer, og forklare egne og andres koder

- [ ] __Vg2 informasjonsteknologi, Utvikling__: beskrive og anvende relevante
  versjonskontrollsystemer i utviklingsprosjekter

- [ ] __Vg2 informasjonsteknologi, Brukerstøtte__: bruke og administrere
  samhandlingsverktøy som effektiviserer samarbeid og deling av informasjon

## Forslag til vurderingskriterier {.challenge}

Gruppa har laget og flettet inn minst to pull requests med kommentarer og
godkjenning, og har løst en konflikt. Hver elev har vært både utvikler og
gjennomgåer, og kan forklare hvorfor endringer går via grener og pull requests
og ikke rett til `main`.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Del koden på GitHub](../del_pa_github/del_pa_github).
  Produkteieren trenger repoet `gjett_tallet` fra den oppgaven.

- [ ] __Utstyr__: Én PC per elev med VS Code og Git, og en GitHub-konto per
  elev. Utvidelsen GitHub Pull Requests i VS Code til steg 5.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](samarbeid)

### Tips til veiledere

- Sett sammen par eller grupper på tre før timen, og avtal hvem som starter
  som produkteier. Repoet blir liggende hos produkteieren selv om rollene
  byttes. Er det et oddetall, kan veilederen ta en rolle.

- Er det elever under 13 år i gruppa, kan de ta rollen som produkteier sammen
  med en voksen som har konto, eller følge med på skjermen til en annen og
  bestemme hva som skal lages.

- Invitasjonen må godtas før utvikleren og gjennomgåeren kan sende (push). Den
  kan ligge i e-posten eller under varslene på github.com.

- Linja `git config --global pull.rebase false` i steg 5 gjør at Git fletter når
  grenene har gått hver sin vei, i stedet for å stoppe med en feilmelding. Den
  trengs bare én gang per maskin.

- Kommentarene i steg 4 er en god anledning til å snakke om hvordan man gir
  vennlige og konkrete tilbakemeldinger på andres kode.

- GitHub lar ikke den som laget pull requesten, godkjenne den selv. Derfor må
  gjennomgåeren være en annen enn utvikleren.

- I steg 5 må gjennomgåeren logge inn på GitHub i VS Code. På delte maskiner
  bør eleven logge ut etterpå, under kontoikonet nederst til venstre.

### Ordliste

- __produkteier (product owner)__: bestemmer hva som skal lages og i hvilken
  rekkefølge.
- __utvikler (developer)__: lager endringen.
- __gjennomgåer (reviewer)__: leser og godkjenner endringen.
- __klone (clone)__: lage en kopi av et repo fra GitHub på maskinen din.
- __sende (push)__ og __hente (pull)__: sende endringer til GitHub og hente
  nye endringer derfra.
- __pull request__: en forespørsel om å flette en gren inn i `main`.
- __kodegjennomgang (code review)__: en annen leser koden før den flettes inn.
- __godkjenne (approve)__: gjennomgåeren sier at koden kan flettes inn.
- __flettekonflikt (merge conflict)__: to grener har endret samme linje.
- __forgrening (fork)__: din egen kopi av et annet repo på GitHub.

### Hva er testet

Stegene og skjermbildene er laget med VS Code og github.com i november 2026.
Oppgaven er ikke prøvd med elever ennå.
