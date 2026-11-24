---
title: Bygg MVP-en
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå bygger du appen, ett lite steg om gangen. Etter hvert steg tester du i
nettleseren og lagrer en versjon i Git. Når noe går galt, og det gjør det, vet
du hvordan du får KI-en til å rette det, eller hvordan du går tilbake.

![Illustrasjon av en løkke i fire steg: be om ett steg, test i nettleseren,
lagre i Git, neste steg](bygg.png)

## Før du starter {.tip}

Gjør [Kom i gang med Claude
Code](../kom_i_gang_claude_code/kom_i_gang_claude_code) først. Du bør kunne lage en commit, se [Git i VS
Code](../../vs_code/git_i_vs_code/git_i_vs_code), og det hjelper å ha gjort
[Feilsøking i VS Code](../../vs_code/feilsoking/feilsoking).


# Steg 1: Løkka {.activity}

Du gjentar de samme fire tingene til MVP-en er ferdig:

1. **Be om ett steg** fra planen.
2. **Test** i nettleseren.
3. **Lagre** med en commit hvis det virker.
4. **Neste steg.**

## Sjekkliste {.check}

- [ ] Start Claude Code i prosjektmappa med `claude`.

- [ ] Skriv:

  ```
  Bygg steg 1 i planen. Si fra når jeg kan teste, og hva jeg skal sjekke.
  ```

- [ ] Åpne `index.html` i nettleseren. Dobbeltklikk fila, eller bruk
  utvidelsen Live Server i VS Code.

## Test prosjektet {.flag}

- [ ] Gjør det Claude Code sa du skulle sjekke.

- [ ] Prøv også på mobil: trykk **F12** i nettleseren og velg mobilvisning.

- [ ] Virker det? Lag en commit med en melding som sier hva som er nytt, for
  eksempel `Liste over ledige tider`.


# Steg 2: Når noe er feil {.activity}

KI-en tar feil ganske ofte. Det er ikke farlig, men du må si tydelig fra.

## Sjekkliste {.check}

- [ ] Beskriv hva du **ser**, ikke hva du tror er galt:

  ```
  Når jeg trykker Bestill, skjer det ingenting. Jeg ventet at
  bestillingsskjermen skulle komme.
  ```

- [ ] Har nettleseren en feilmelding? Trykk **F12**, velg **Console**, og kopier
  den røde teksten inn til Claude Code.

- [ ] Les endringen Claude Code foreslår, før du sier ja. Spør «Hvorfor?» hvis
  du ikke skjønner den.

## Tips {.protip}

Ett problem om gangen. Ramser du opp fem feil, retter den gjerne tre og lager
to nye.


# Steg 3: Ta kontrollen tilbake {.activity}

Noen ganger blir det verre for hver retting. Da er det bedre å gå tilbake enn å
fortsette.

## Sjekkliste {.check}

- [ ] Har du rettet det samme tre ganger uten at det virker? Stopp.

- [ ] Gå tilbake til siste commit som virket. Skriv til Claude Code:

  ```
  Stopp. Gå tilbake til siste commit med git, og forklar hva som gikk galt.
  ```

- [ ] Start en ny samtale med `/clear`, og be om steget på nytt med en
  tydeligere beskjed.

- [ ] Skjedde det noe du ikke ville ha? Legg til en regel i `CLAUDE.md`, så det
  ikke skjer igjen.


# Steg 4: Sjekk kvaliteten {.activity}

Når MVP-en virker, sjekker du at den er god å bruke for alle.

## Sjekkliste {.check}

- [ ] Be om en sjekk:

  ```
  Sjekk appen for universell utforming: kontrast, størrelse på knapper,
  alt-tekst på bilder, og om den kan brukes bare med tastatur. Fortell
  hva du finner før du endrer noe.
  ```

- [ ] Prøv selv: kan du bestille bare med **Tab** og **Enter**?

- [ ] Sjekk mot `PLAN.md`: er alle MVP-historiene med? Er det kommet med noe
  som ikke skulle være der?

## Lagre {.save}

Lag en commit med meldingen `MVP ferdig`.


## Utfordring {.challenge}

Bestillinger i nettleseren ser bare den som bestilte. Be Claude Code om å sende
bestillingen til et skjema eller regneark som bedriften kan se, for eksempel
Microsoft Forms eller Google Skjemaer gjennom skolekontoen. Hva må du tenke på
når kundedata havner der?
