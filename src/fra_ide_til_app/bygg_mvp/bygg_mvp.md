---
title: Bygg MVP-en
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Nå bygger du appen, én MVP-historie om gangen. KI-en skriver koden, men du har
de andre rollene: Du bestemmer hva som bygges, leser koden før du sier ja, og
sjekker at den virker. Etter hver historie lagrer du en versjon i Git. Når noe
går galt, og det gjør det, vet du hvordan du får KI-en til å rette det, eller
hvordan du går tilbake.

![Illustrasjon av en løkke i fire steg: be om ett steg, test i nettleseren,
lagre i Git, neste steg](bygg.png)

## Før du starter {.tip}

Gjør [Kom i gang med en
KI-kodeassistent](../kom_i_gang_claude_code/kom_i_gang_claude_code) først.
Du trenger `PLAN.md` med MVP-historier og «Ferdig når», og en `CLAUDE.md`. Du
bør kunne lage en commit, se [Git i VS
Code](../../vs_code/git_i_vs_code/git_i_vs_code), og det hjelper å ha gjort
[Feilsøking i VS Code](../../vs_code/feilsoking/feilsoking).


# Steg 1: Løkka {.activity}

Du gjentar de samme fire tingene for hver MVP-historie:

1. **Be om ett steg**: én historie fra `PLAN.md`, med en plan først.
2. **Sjekk**: les endringene og prøv «Ferdig når» i nettleseren.
3. **Lagre** med en commit hvis det virker.
4. **Neste steg**: kryss av historien og start en ny samtale.

## Sjekkliste {.check}

- [ ] Start Claude Code i prosjektmappa med `claude`, og slå på plan-modus.

- [ ] Velg den første historien i `PLAN.md`, og skriv:

  ```
  Bygg denne MVP-historien: [lim inn historien og «Ferdig når»].
  Lag en plan først. Ikke endre andre deler av appen. Si fra når jeg
  kan teste, og hva jeg skal sjekke.
  ```

- [ ] Les planen. Godkjenn den bare hvis den gjør det historien sier, og ikke
  mer.

- [ ] Åpne `index.html` i nettleseren. Dobbeltklikk fila, eller bruk
  utvidelsen Live Server i VS Code.

- [ ] Virker det? Lag en commit med en melding som sier hva som er nytt, for
  eksempel `Liste over ledige tider`.

- [ ] Kryss av historien i `PLAN.md`. Skriv `/clear` før neste historie.

## Tips {.protip}

En ny samtale for hver historie gjør at KI-en ikke blander gammelt og nytt.
Alt den trenger å vite, skal stå i `PLAN.md` og `CLAUDE.md`. Mangler den noe,
skriv det inn der, ikke bare i samtalen.


# Steg 2: Les koden før du sier ja {.activity}

Her er du seniorutvikleren. KI-en skriver raskt, men gjør ofte mer enn du ba
om. Det er lettere å si nei før enn å rydde etterpå.

## Sjekkliste {.check}

- [ ] Åpne **Source Control** i VS Code, og klikk på en fil som er endret. Grønt
  er lagt til, rødt er fjernet.

- [ ] Se etter varselstegn:

  | Tegn | Hvorfor det er et problem |
  |---|---|
  | Filer eller mapper du ikke ba om | Appen vokser uten at du vet hvorfor |
  | Nye pakker, rammeverk eller skript fra andre nettsider | Mer å forstå, oppdatere og stole på |
  | Kode som er slettet | Noe som virket, kan slutte å virke |
  | Passord, nøkler eller ekte personopplysninger | Havner på GitHub og hos KI-tjenesten |
  | Mye mer kode enn historien trenger | Vanskeligere å forstå og rette senere |

- [ ] Forstår du ikke en del? Marker den og spør:

  ```
  Forklar denne delen linje for linje, som til en nybegynner. Hvorfor
  trengs den?
  ```

- [ ] Fant du et varselstegn? Be KI-en fjerne det, og legg til en regel i
  `CLAUDE.md`, for eksempel:

  ```markdown
  - Ikke legg til pakker, rammeverk eller skript fra andre nettsider uten
    å spørre meg.
  ```


# Steg 3: Når noe er feil {.activity}

KI-en tar feil ganske ofte. Det er ikke farlig, men du må si tydelig fra.

## Sjekkliste {.check}

- [ ] Beskriv hva du **ser**, ikke hva du tror er galt:

  ```
  Når jeg trykker Bestill, skjer det ingenting. Jeg ventet at
  bestillingsskjermen skulle komme.
  ```

- [ ] Har nettleseren en feilmelding? Trykk **F12**, velg **Console**, og kopier
  den røde teksten inn til Claude Code.

- [ ] Be om årsaken før rettingen: «Finn ut hvorfor før du endrer noe.»

- [ ] Skriv kort i en fil som heter `LOGG.md` hva KI-en gjorde feil, og hvordan
  du fant det. Du får bruk for det i [Ansvar og
  personvern](../ansvar_og_personvern/ansvar_og_personvern).

## Tips {.protip}

Ett problem om gangen. Ramser du opp fem feil, retter den gjerne tre og lager
to nye.


# Steg 4: Ta kontrollen tilbake {.activity}

Noen ganger blir det verre for hver retting. Da er det bedre å gå tilbake enn å
fortsette.

## Sjekkliste {.check}

- [ ] Har du rettet det samme tre ganger uten at det virker? Stopp.

- [ ] Gå tilbake til siste commit som virket. Skriv til Claude Code:

  ```
  Stopp. Gå tilbake til siste commit med git, og forklar hva som gikk galt.
  ```

- [ ] Start en ny samtale med `/clear`, og be om steget på nytt med en
  tydeligere beskjed. Del historien opp i mindre deler hvis den er stor.

- [ ] Skjedde det noe du ikke ville ha? Legg til en regel i `CLAUDE.md`, så det
  ikke skjer igjen.

- [ ] Vil du prøve noe stort eller usikkert? Gjør det på en egen gren, se [Prøv
  en idé på en gren](../../git/grener/grener). Da kan du kaste det hvis det
  ikke virker.

## Neste steg {.tip}

Når alle MVP-historiene virker, tester du appen grundig i [Test og
kvalitet](../test_og_kvalitet/test_og_kvalitet). Skal appen lagre data som
flere skal se, går du videre til [Lagre data
trygt](../lagre_data/lagre_data).

## Prompter du kan lære av {.protip}

Bytt ut det som står i klammer. Legg aldri inn navn, passord eller andres
personopplysninger. Se hvorfor promptene virker, og lag dine egne.

- **Én historie om gangen:**

  ```
  Bygg denne MVP-historien: [lim inn]. Lag en plan først. Ikke endre
  andre deler av appen.
  ```

- **Forstå koden:**

  ```
  Forklar endringene du nettopp gjorde, steg for steg, som til en
  nybegynner. Hva bør jeg teste?
  ```

- **Feilsøk riktig:**

  ```
  Når jeg [gjør Y], skjer [X], men jeg forventet [Z]. Finn årsaken før
  du retter, og forklar hva som var galt.
  ```

- **Reverse engineer en funksjon:**

  ```
  Se på [nettside med en funksjon du vil lære, for eksempel et
  bestillingsskjema]. Forklar hvordan en slik funksjon vanligvis er
  bygd, så jeg forstår hvordan den virker. Ikke kopier koden deres.
  ```

- **Lær av det som gikk galt:**

  ```
  Hva burde jeg ha skrevet i prompten for at du skulle gjort dette
  riktig første gang?
  ```

## Test deg selv {.flag}

- [ ] Kan du peke på hvor i koden appen lagrer en bestilling?

- [ ] Kan du nevne én ting KI-en gjorde feil, og hvordan du oppdaget det?

## Lagre {.save}

Lag en commit med meldingen `MVP ferdig`.


## Utfordring {.challenge}

Be KI-en lage to ulike løsninger på samme historie, på to grener. Hvilken er
enklest å forstå, og hvilken ville du valgt? Hvorfor?
