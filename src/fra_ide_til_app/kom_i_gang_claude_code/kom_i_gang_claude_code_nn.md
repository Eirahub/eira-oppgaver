---
title: Kom i gang med ein KI-kodeassistent
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

**Claude Code** er ein KI som jobbar i prosjektmappa di. Han les filene, lagar
nye, køyrer kommandoar og forklarer kva han gjer. Du seier kva du vil ha, og
godkjenner det han føreslår. I denne oppgåva lærer du terminalen, installerer
Claude Code, skriv reglar for prosjektet og får han til å lage ein plan.

![Illustrasjon av ein terminal der Claude Code viser ein plan i fem punkt og
spør om han kan starte](terminal_nn.png)

## Verktøy og vilkår {.tip}

Vi bruker Claude Code som døme. Andre KI-verktøy for koding, som Gemini,
GitHub Copilot eller ChatGPT, verkar på liknande måte. Stega blir litt
annleis, men `PLAN.md`, reglane og «plan før kode» er dei same. Sjekk sjølv
aldersgrense, pris og vilkår for verktøyet du vel. Er du under aldersgrensa,
kan ein forelder eller lærar stå som ansvarleg for kontoen.

## Før du startar {.tip}

Du treng [VS Code](../../vs_code/installer_vs_code/installer_vs_code) og
prosjektmappa med `PLAN.md` og `design` frå førre oppgåve.


# Steg 1: Terminalen {.activity}

**Terminalen** er eit vindauge der du skriv kommandoar i staden for å klikke.
Claude Code køyrer der.

## Sjekkliste {.check}

- [ ] Opne prosjektmappa i VS Code med **File** og **Open Folder**.

- [ ] Opne terminalen med **Terminal** og **New Terminal**. Han startar i
  prosjektmappa.

- [ ] Skriv desse kommandoane, og trykk **Enter** etter kvar:

  ```
  pwd
  ls
  ```

  `pwd` viser kva mappe du er i. `ls` viser filene i ho. Ser du `PLAN.md`?

- [ ] Lær éin kommando til: `cd namn` går inn i mappa `namn`, og `cd ..` går
  eitt nivå opp.


# Steg 2: Installer Claude Code {.activity}

## Sjekkliste {.check}

- [ ] Installer med kommandoen for maskina di:

  Windows (PowerShell):

  ```
  irm https://claude.ai/install.ps1 | iex
  ```

  macOS og Linux:

  ```
  curl -fsSL https://claude.ai/install.sh | bash
  ```

- [ ] Lukk terminalen og opne ein ny.

- [ ] Start Claude Code i prosjektmappa:

  ```
  claude
  ```

- [ ] Første gongen ber han deg logge inn i nettlesaren. Følg stega.

## Tips {.protip}

Kommandoane kan endre seg. Står det noko anna på
[claude.com/claude-code](https://claude.com/claude-code), følg det som står
der.


# Steg 3: Reglane for prosjektet {.activity}

Claude Code les fila `CLAUDE.md` kvar gong han startar. Der skriv du reglane
han alltid skal følgje.

## Sjekkliste {.check}

- [ ] Lag fila `CLAUDE.md` i prosjektmappa, og skriv:

  ```markdown
  # Reglar for prosjektet

  - Les PLAN.md og mappa design før du gjer noko.
  - Appen er ei nettside med HTML, CSS og JavaScript, utan rammeverk.
  - All tekst i appen er på norsk.
  - Lag éi lita endring om gongen, og forklar kva du gjorde.
  - Spør meg før du legg til noko som ikkje står i PLAN.md.
  - Aldri passord, API-nøklar eller personopplysningar i koden.
  ```

- [ ] Lagre fila.


# Steg 4: Be om ein plan først {.activity}

Ikkje la KI-en byrje å kode med ein gong. Be om ein plan, les han og godkjenn
han. Claude Code har ein eigen **planmodus** for dette.

## Sjekkliste {.check}

- [ ] Trykk **Shift** + **Tab** til det står **plan mode** nedst.

- [ ] Skriv:

  ```
  Les PLAN.md og designet. Lag ein plan for korleis du vil byggje MVP-en,
  i små steg som eg kan teste eitt og eitt. Ikkje skriv kode enno.
  ```

- [ ] Les planen. Er det noko som ikkje står i `PLAN.md`? Be han ta det bort.

- [ ] Er planen god? Godkjenn han. Claude Code byggjer då det første steget.

## Test prosjektet {.flag}

- [ ] Claude Code spør før han lagar eller endrar filer. Les kva han vil gjere
  før du seier ja.

- [ ] Opne fila han laga, i VS Code. Kan du sjå kva delar som er HTML, CSS og
  JavaScript?

## Tre ting du må kunne {.tip}

- **Esc** stoppar Claude Code midt i noko.
- `/clear` startar ein ny samtale. Bruk det når han har gått seg vill.
- `/exit` avsluttar.

## Slik er ein god prompt bygd opp {.tip}

Ein god prompt har ofte fem delar:

1. **Mål**: kva du vil ha gjort.
2. **Samanheng**: kven det er for, kvifor, og kva som finst frå før.
3. **Grenser**: kva KI-en ikkje skal gjere, til dømes «Ikkje endre andre
   filer».
4. **Format**: korleis svaret skal sjå ut, til dømes ein tabell eller ein plan.
5. **Sjekk**: be om ein plan eller spørsmål før KI-en gjer noko.

Ein **metaprompt** er ein prompt om sjølve arbeidet eller læringa: Be KI-en
forklare kva han gjorde, stille deg spørsmål, finne antakingar, eller gjere
prompten din betre. Det er slik du lærer mest.

## Prompter du kan lære av {.protip}

Byt ut det som står i klammer. Legg aldri inn namn, passord eller
personopplysningar om andre. Sjå kvifor promptane verkar, og lag dine eigne.

- **Forstå prosjektet:**

  ```
  Forklar kva kvar fil i prosjektet gjer, som til ein som aldri har
  programmert. Ikkje endre noko.
  ```

- **Lær terminalen:**

  ```
  Forklar kommandoen [kommando]: kva han gjer, kva som kan gå gale, og
  korleis eg angrar.
  ```

- **Bli betre til å skrive promptar:**

  ```
  Når eg ber deg om noko i dette prosjektet, sei først kva som var
  uklart i beskjeden min, og foreslå ein betre måte å seie det på.
  ```

- **Lag reglane ut frå planen:**

  ```
  Skriv ei CLAUDE.md ut frå PLAN.md. Ta berre med det som står i
  planen, og spør meg om det som manglar.
  ```

## Lagre {.save}

Claude Code lagrar filene sjølv. Lag ein commit i Git no, så du kan gå tilbake
hit seinare (sjå [Git i VS Code](../../vs_code/git_i_vs_code/git_i_vs_code)).


## Utfordring {.challenge}

Spør Claude Code: «Forklar fila du laga, linje for linje, for ein som aldri har
koda.» Forstår du alt? Spør om det du ikkje skjønar.
