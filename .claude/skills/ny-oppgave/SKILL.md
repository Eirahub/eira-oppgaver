---
name: ny-oppgave
description: Lag en ny oppgave, oversettelse, lærerveiledning, spilleliste eller et helt nytt kurs i oppgavesamlingen til Eira (src/<kurs>/, samme format som Lær Kidsa Koding). Bruk når brukeren vil skrive, legge til, oversette eller strukturere oppgaver for oppgaver.eirahub.no, også Kodetimen-oppgaver, Scratch-, Python- og micro:bit-oppgaver.
---

# Ny oppgave eller nytt kurs

Følg mønsteret de eksisterende oppgavene har. Les én lignende oppgave i samme
kurs før du skriver, for tone, nivå og kodesyntaks. Gode forbilder:
`src/scratch/astrokatt/` (Scratch, med oversettelser og lærerveiledning),
`src/python/bokstaver/` (Python), `src/microbit/Ballong-Battle/` (micro:bit).

## 1. Avklar før du skriver

Spør bare om det som mangler:
- Kurs (mappe under `src/`) og mappenavn for oppgaven (små bokstaver, uten
  æøå og mellomrom, bindestrek eller understrek).
- Tittel, forfatter, nivå 1 til 4, språk (standard `nb`).
- Tagger: velg bare fra `filtertags/keys.yml`. `topic`, `subject` og `grade`.
  Bruk skillen `vurder-trinn` for `grade` og `level`.
- Skal den med i en spilleliste? Trengs lærerveiledning?

## 2. Oppgave

Lag `src/<kurs>/<oppgave>/` med:

`lesson.yml`
```yaml
level: 1
license: CC BY-SA 4.0
tags:
  topic: [block_based, game]
  subject: [programming]
  grade: [primary, secondary]
```
Legg til `indexed: false` bare hvis oppgaven ikke skal vises i oversikten.

`<oppgave>.md` (filnavn = mappenavn)
```markdown
---
title: Tittel
level: 1
author: 'Fornavn Etternavn'
language: nb
---


# Introduksjon {.intro}

Hva skal vi lage, og hva lærer vi underveis?

![Bilde av det ferdige prosjektet](ferdig.png)


# Steg 1: Kort beskrivende navn {.activity}

Litt forklaring.

## Sjekkliste {.check}

- [ ] Ett konkret handlingspunkt per boks.

## Test prosjektet {.flag}

__Klikk på det grønne flagget.__

- [ ] Hva skal skje nå?

## Lagre {.save}

Husk å lagre.


# Steg 2: ... {.activity}


## Utfordring {.challenge}

Forslag til videreutvikling uten fasit.
```

Regler:
- Gyldige klasser: `intro activity check flag challenge tip save protip try
  sjekkliste` (se `CLASSES` i `linter/linter_lib/linter_defaults.py`).
- To tomme linjer før `#`-overskrifter, én før `##`.
- Maks 80 tegn per linje. Fortsettelseslinjer i lister rykkes inn 2 mellomrom.
- Alle bilder har beskrivende alt-tekst, ikke "Bildebeskrivelse". Bildene
  ligger i oppgavemappa og lenkes relativt.
- Scratch: kodeblokker i ` ```blocks ` med norsk scratchblocks-syntaks, inline
  klosser som `` `gjenta for alltid`{.blockcontrol} ``. Kategoriklasser står i
  `src/scratch/README.md`. Lenk til remiks-prosjekt på scratch.mit.edu når
  elevene starter fra et ferdig prosjekt.
- micro:bit: ` ```microbit ` med MakeCode JavaScript, inline `{.microbitbasic}`,
  `{.microbitinput}`, `{.microbitradio}` osv.
- Python og andre tekstspråk: vanlige kodeblokker med språknavn.
- Lenker til andre oppgaver: relative stier (`../<mappe>/<fil>` eller
  `/<kurs>/<mappe>/<fil>`) uten `.md`, så de virker både på
  oppgaver.eirahub.no og hos Lær Kidsa Koding.
- Ekstern oppgave: bare front matter med `external: <url>` og et kort avsnitt.

## 3. Oversettelse

`<oppgave>_nn.md`, `_en.md`, `_ua.md` osv. i samme mappe. Samme front matter
pluss `translator:`, og `language:` lik suffikset. Lenker til andre oppgaver
peker på samme språkversjon (`.../skilpadder_nn`).

## 4. Lærerveiledning (valgfri)

`README.md` (og `README_nn.md`) i oppgavemappa. Front matter med
`title: Lærerveiledning - <Tittel>`, `author`, `level`, `language`. Seksjoner
etter `src/scratch/astrokatt/README.md`: `# Om oppgaven {.activity}`,
`## Oppgaven passer til: {.check}` (fag, trinn, tema, tidsbruk),
`## Kompetansemål {.challenge}`, deretter forslag til vurdering og
videreutvikling. Ikke finn på kompetansemål. Spør eller la stå tomt.

## 5. Spilleliste (valgfri)

Legg mappenavnet til i `lessons:` i en fil under `src/<kurs>/playlists/`, eller
lag ny:
```yaml
sortindex: 5
title:
  nb: 'Navn'
  nn: 'Namn'
  en: 'Name'
lessons:
  - oppgavemappe
```
(`playlists/README.md` i scratch beskriver et gammelt `.txt`-format. Ignorer det.)

## 6. Nytt kurs

`src/<kurs>/` med:
- `index.md` (+ `index_nn.md`, `index_en.md`): front matter `title` (kursnavnet)
  og `language`, så en introduksjon og "Hvordan komme i gang". Se
  `src/scratch/index.md` eller `src/elm/index.md`.
- `course.yml`: `isExternal: false` (eller `true` med `external:` i index.md)
  og ev. `tags:` med `topic`, `subject`, `grade`.
- `logo-black.png` og `logo-white.png`. Spør brukeren om logo, ikke lag en.
- `playlists/` med minst én spilleliste når kurset har flere oppgaver.

Ny tagg? Legg den i `filtertags/keys.yml` og i alle `filtertags/translation_*.yml`.

## 7. Sjekk

```
cd linter
python -W ignore LKK_linter.py ../src/<kurs>/<oppgave>/<oppgave>.md
```
Ingen utskrift betyr ingen feil.
Linteren autoformaterer. Les `git diff` etterpå og rett feilene den melder.
Krever `pip install termcolor colorama`. Sjekk også at alle bildefiler som
lenkes finnes, og at taggene finnes i `keys.yml`.

Se oppgaven i nettleseren via lokal forhåndsvisning (se CLAUDE.md):
`http://localhost:8080/<kurs>/<oppgave>/<oppgave>`. En ny oppgave dukker opp
etter neste bygg, som tar et par minutter.

Arbeid på egen gren, aldri direkte på `master` (push til master publiserer
siden).
