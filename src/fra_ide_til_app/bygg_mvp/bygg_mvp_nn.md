---
title: Bygg MVP-en
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

No byggjer du appen, eitt lite steg om gongen. Etter kvart steg testar du i
nettlesaren og lagrar ein versjon i Git. Når noko går gale, og det gjer det,
veit du korleis du får KI-en til å rette det, eller korleis du går tilbake.

![Illustrasjon av ei løkke i fire steg: be om eitt steg, test i nettlesaren,
lagre i Git, neste steg](bygg_nn.png)

## Før du startar {.tip}

Gjer [Kom i gang med Claude
Code](../kom_i_gang_claude_code/kom_i_gang_claude_code_nn) først. Du bør kunne
lage ein commit, sjå [Git i VS
Code](../../vs_code/git_i_vs_code/git_i_vs_code), og det hjelper å ha gjort
[Feilsøking i VS Code](../../vs_code/feilsoking/feilsoking).


# Steg 1: Løkka {.activity}

Du gjentek dei same fire tinga til MVP-en er ferdig:

1. **Be om eitt steg** frå planen.
2. **Test** i nettlesaren.
3. **Lagre** med ein commit viss det verkar.
4. **Neste steg.**

## Sjekkliste {.check}

- [ ] Start Claude Code i prosjektmappa med `claude`.

- [ ] Skriv:

  ```
  Bygg steg 1 i planen. Sei frå når eg kan teste, og kva eg skal sjekke.
  ```

- [ ] Opne `index.html` i nettlesaren. Dobbeltklikk fila, eller bruk
  utvidinga Live Server i VS Code.

## Test prosjektet {.flag}

- [ ] Gjer det Claude Code sa du skulle sjekke.

- [ ] Prøv òg på mobil: trykk **F12** i nettlesaren og vel mobilvising.

- [ ] Verkar det? Lag ein commit med ei melding som seier kva som er nytt, til
  dømes `Liste over ledige tider`.


# Steg 2: Når noko er feil {.activity}

KI-en tek feil ganske ofte. Det er ikkje farleg, men du må seie tydeleg frå.

## Sjekkliste {.check}

- [ ] Beskriv kva du **ser**, ikkje kva du trur er gale:

  ```
  Når eg trykkjer Bestill, skjer det ingenting. Eg venta at
  bestillingsskjermen skulle kome.
  ```

- [ ] Har nettlesaren ei feilmelding? Trykk **F12**, vel **Console**, og kopier
  den raude teksten inn til Claude Code.

- [ ] Les endringa Claude Code føreslår, før du seier ja. Spør «Kvifor?» viss
  du ikkje skjønar ho.

## Tips {.protip}

Eitt problem om gongen. Ramsar du opp fem feil, rettar han gjerne tre og lagar
to nye.


# Steg 3: Ta kontrollen tilbake {.activity}

Nokre gonger blir det verre for kvar retting. Då er det betre å gå tilbake enn
å halde fram.

## Sjekkliste {.check}

- [ ] Har du retta det same tre gonger utan at det verkar? Stopp.

- [ ] Gå tilbake til siste commit som verka. Skriv til Claude Code:

  ```
  Stopp. Gå tilbake til siste commit med git, og forklar kva som gjekk gale.
  ```

- [ ] Start ein ny samtale med `/clear`, og be om steget på nytt med ei
  tydelegare melding.

- [ ] Skjedde det noko du ikkje ville ha? Legg til ein regel i `CLAUDE.md`, så
  det ikkje skjer igjen.


# Steg 4: Sjekk kvaliteten {.activity}

Når MVP-en verkar, sjekkar du at han er god å bruke for alle.

## Sjekkliste {.check}

- [ ] Be om ein sjekk:

  ```
  Sjekk appen for universell utforming: kontrast, storleik på knappar,
  alt-tekst på bilete, og om han kan brukast berre med tastatur. Fortel
  kva du finn før du endrar noko.
  ```

- [ ] Prøv sjølv: kan du bestille berre med **Tab** og **Enter**?

- [ ] Sjekk mot `PLAN.md`: er alle MVP-historiene med? Har det kome med noko
  som ikkje skulle vere der?

## Lagre {.save}

Lag ein commit med meldinga `MVP ferdig`.


## Utfordring {.challenge}

Bestillingar i nettlesaren ser berre den som bestilte. Be Claude Code om å
sende bestillinga til eit skjema eller rekneark som bedrifta kan sjå, til dømes
Microsoft Forms eller Google Skjema gjennom skulekontoen. Kva må du tenkje på
når kundedata hamnar der?
