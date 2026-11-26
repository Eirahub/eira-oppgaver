---
title: Lærerveiledning - Prøv en idé på en gren
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven lager en gren for en ny idé i spillet fra forrige oppgave, bytter mellom
grener, fletter inn grenen og løser en flettekonflikt som eleven lager med
vilje. Så gir eleven grenen et navn etter vanlig praksis, holder den oppdatert
ved å flette inn `main`, ser grenene som en tegning med `git log --graph`, og
lager til slutt en gren rett fra en sak på GitHub.

## Oppgaven passer til: {.check}

__Fag__: Programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Grener, navn på grener, fletting, flettekonflikter

__Tidsbruk__: 60 til 90 minutter

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2, Vg3__: velge og bruke relevante
  systemutviklingsmetoder og -verktøy for samarbeid med andre

- [ ] __Programmering, 10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

- [ ] __Vg2 informasjonsteknologi, Utvikling__: beskrive og anvende relevante
  versjonskontrollsystemer i utviklingsprosjekter

## Forslag til vurderingskriterier {.challenge}

Eleven kan lage, bytte og flette grener, og kan løse en konflikt ved å velge
hvilken endring som skal beholdes og forklare hvorfor. Eleven kan forklare
hvorfor `main` skal virke hele tiden, gi en gren et navn som
`feature/12-poengteller`, og lese tegningen fra `git log --oneline --graph`.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: [Tilbake i tid](../tidsreise/tidsreise).

- [ ] __Utstyr__: PC med VS Code, Git og Python. Steg 1 til 7 krever ingen
  GitHub-konto. Steg 8 krever konto og at repoet ligger på GitHub.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](grener)

### Tips til veiledere

- Eldre Git lager hovedgrenen `master`, nyere `main`. Oppgaven forklarer dette,
  men det kan forvirre når elevene sammenligner skjermer.

- Har eleven endringer som ikke er committet, kan bytte av gren feile eller ta
  endringene med. Be dem committe før de bytter.

- Konflikten i steg 5 er laget med vilje. Bruk den til å snakke om at konflikter
  er vanlige når flere jobber sammen, og ikke betyr at noe er ødelagt.

- I steg 7 brukes `git merge main --no-edit`. Uten `--no-edit` åpner Git et
  redigeringsprogram for meldingen, ofte Vim, og mange elever står fast der.
  Kommer de inn i Vim likevel, skriver de `:q` og trykker **Enter**.

- Steg 8 krever GitHub-konto og at repoet ligger på GitHub, som skjer i neste
  oppgave. Elevene kan ta steget etter [Del koden på
  GitHub](../del_pa_github/del_pa_github). Er noen under 13 år, kan du vise
  steget på storskjerm med din egen konto, mens eleven lager grenen i VS Code
  med samme navn.

### Ordliste

- __gren (branch)__: en egen linje med endringer ved siden av `main`.
- __innsjekking (commit)__: en lagret versjon av koden med en melding.
- __flette (merge)__: ta endringene fra én gren inn i en annen.
- __flettekonflikt (merge conflict)__: to grener har endret samme linje, og du
  må velge.
- __sak (issue)__: en ting som skal gjøres eller rettes, på GitHub.
- __hente (pull)__: hente nye endringer fra GitHub til maskinen din.

### Hva er testet

Stegene og skjermbildene er laget med VS Code og github.com i november 2026.
Oppgaven er ikke prøvd med elever ennå.
