---
title: Kom i gang med Claude Code
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

**Claude Code** er en KI som jobber i prosjektmappa di. Den leser filene, lager
nye, kjører kommandoer og forklarer hva den gjør. Du sier hva du vil ha, og
godkjenner det den foreslår. I denne oppgaven lærer du terminalen, installerer
Claude Code, skriver regler for prosjektet og får den til å lage en plan.

![Illustrasjon av en terminal der Claude Code viser en plan i fem punkter og
spør om den kan starte](terminal.png)

## Verktøy og vilkår {.tip}

Vi bruker Claude Code som eksempel. Andre KI-verktøy for koding, som Gemini,
GitHub Copilot eller ChatGPT, virker på lignende måte. Stegene blir litt
annerledes, men `PLAN.md`, reglene og «plan før kode» er de samme. Sjekk selv
aldersgrense, pris og vilkår for verktøyet du velger. Er du under
aldersgrensen, kan en forelder eller lærer stå som ansvarlig for kontoen.

## Før du starter {.tip}

Du trenger [VS Code](../../vs_code/installer_vs_code/installer_vs_code) og
prosjektmappa med `PLAN.md` og `design` fra forrige oppgave.


# Steg 1: Terminalen {.activity}

**Terminalen** er et vindu der du skriver kommandoer i stedet for å klikke.
Claude Code kjører der.

## Sjekkliste {.check}

- [ ] Åpne prosjektmappa i VS Code med **File** og **Open Folder**.

- [ ] Åpne terminalen med **Terminal** og **New Terminal**. Den starter i
  prosjektmappa.

- [ ] Skriv disse kommandoene, og trykk **Enter** etter hver:

  ```
  pwd
  ls
  ```

  `pwd` viser hvilken mappe du er i. `ls` viser filene i den. Ser du
  `PLAN.md`?

- [ ] Lær én kommando til: `cd navn` går inn i mappa `navn`, og `cd ..` går ett
  nivå opp.


# Steg 2: Installer Claude Code {.activity}

## Sjekkliste {.check}

- [ ] Installer med kommandoen for maskinen din:

  Windows (PowerShell):

  ```
  irm https://claude.ai/install.ps1 | iex
  ```

  macOS og Linux:

  ```
  curl -fsSL https://claude.ai/install.sh | bash
  ```

- [ ] Lukk terminalen og åpne en ny.

- [ ] Start Claude Code i prosjektmappa:

  ```
  claude
  ```

- [ ] Første gang ber den deg logge inn i nettleseren. Følg stegene.

## Tips {.protip}

Kommandoene kan endre seg. Står det noe annet på
[claude.com/claude-code](https://claude.com/claude-code), følg det som står
der.


# Steg 3: Reglene for prosjektet {.activity}

Claude Code leser fila `CLAUDE.md` hver gang den starter. Der skriver du
reglene den alltid skal følge.

## Sjekkliste {.check}

- [ ] Lag fila `CLAUDE.md` i prosjektmappa, og skriv:

  ```markdown
  # Regler for prosjektet

  - Les PLAN.md og mappa design før du gjør noe.
  - Appen er en nettside med HTML, CSS og JavaScript, uten rammeverk.
  - All tekst i appen er på norsk.
  - Lag én liten endring om gangen, og forklar hva du gjorde.
  - Spør meg før du legger til noe som ikke står i PLAN.md.
  - Aldri passord, API-nøkler eller personopplysninger i koden.
  ```

- [ ] Lagre fila.


# Steg 4: Be om en plan først {.activity}

Ikke la KI-en starte å kode med en gang. Be om en plan, les den og godkjenn
den. Claude Code har en egen **plan-modus** for dette.

## Sjekkliste {.check}

- [ ] Trykk **Shift** + **Tab** til det står **plan mode** nederst.

- [ ] Skriv:

  ```
  Les PLAN.md og designet. Lag en plan for hvordan du vil bygge MVP-en,
  i små steg som jeg kan teste ett og ett. Ikke skriv kode ennå.
  ```

- [ ] Les planen. Er det noe som ikke står i `PLAN.md`? Be den ta det bort.

- [ ] Er planen god? Godkjenn den. Claude Code bygger da det første steget.

## Test prosjektet {.flag}

- [ ] Claude Code spør før den lager eller endrer filer. Les hva den vil gjøre
  før du sier ja.

- [ ] Åpne fila den lagde, i VS Code. Kan du se hvilke deler som er HTML, CSS og
  JavaScript?

## Tre ting du må kunne {.tip}

- **Esc** stopper Claude Code midt i noe.
- `/clear` starter en ny samtale. Bruk det når den har gått seg vill.
- `/exit` avslutter.

## Lagre {.save}

Claude Code lagrer filene selv. Lag en commit i Git nå, så du kan gå tilbake
hit senere (se [Git i VS Code](../../vs_code/git_i_vs_code/git_i_vs_code)).


## Utfordring {.challenge}

Spør Claude Code: «Forklar fila du lagde, linje for linje, for en som aldri har
kodet.» Forstår du alt? Spør om det du ikke skjønner.
