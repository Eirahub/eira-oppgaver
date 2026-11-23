---
title: Lærerveiledning - Tilbake i tid
author: Tor Einar Enne
language: nb
---


# Om oppgaven {.activity}

Eleven lager et lite Python-spill i flere commits, ødelegger det med vilje og
reparerer det med Git. Oppgaven øver på commit, historikk (Timeline og `git
log`), å forkaste endringer, `git revert` og `git restore`.

## Oppgaven passer til: {.check}

__Fag__: Programmering, informasjonsteknologi

__Anbefalte trinn__: 8. trinn til videregående

__Tema__: Versjonskontroll, commit, historikk, angre endringer

__Tidsbruk__: 60 minutter

## Kompetansemål {.challenge}

- [ ] __Informasjonsteknologi 2, Vg3__: vurdere og bruke strategier for
  feilsøking og testing av programkode

- [ ] __Programmering, 10. trinn__: utvikle og feilsøke dataprogram som løser
  definerte problemer, inkludert kontrollering eller simulering av fysiske
  objekter

- [ ] __Informasjonsteknologi 1, Vg2__: utforske, strukturere og kommentere
  programkode

## Forslag til vurderingskriterier {.challenge}

Eleven har et repo med flere små commits med gode meldinger, og kan forklare
forskjellen på å forkaste en endring, å reverte en commit og å hente en gammel
versjon av en fil.

## Forutsetninger og utstyr {.challenge}

- [ ] __Forutsetninger__: Steg 1 til 4 i [Git i VS
  Code](../../vs_code/git_i_vs_code/git_i_vs_code): Git er installert, og eleven
  har laget én commit. Litt Python, for eksempel fra [Python-
  kurset](../../python/).

- [ ] __Utstyr__: PC med VS Code, Git og Python. Ingen GitHub-konto.

## Fremgangsmåte

[Klikk her for å se oppgaveteksten.](tidsreise)

### Tips til veiledere

- Elevmaskiner uten administratorrettigheter kan stoppe installasjonen av Git.
  Sjekk dette før timen.

- Git spør om navn og e-post før første commit. Elever kan bruke kallenavn.
  E-posten blir liggende i historien og blir synlig hvis repoet senere deles på
  GitHub. Se tipsene i [Del koden på GitHub](../del_pa_github/README).

- **Discard Changes** kan ikke angres. Snakk om forskjellen på den og `git
  revert`, som tar vare på historien.

- Står programmet fast i løkka i steg 5, stopper **Ctrl** + **C** i terminalen
  det.

### Hva er testet

Stegene og skjermbildene er laget med VS Code og github.com i november 2026.
Oppgaven er ikke prøvd med elever ennå.
