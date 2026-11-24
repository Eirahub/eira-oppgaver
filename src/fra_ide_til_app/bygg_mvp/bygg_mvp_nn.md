---
title: Bygg MVP-en
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

No byggjer du appen, éi MVP-historie om gongen. KI-en skriv koden, men du har
dei andre rollene: Du bestemmer kva som skal byggjast, les koden før du seier
ja, og sjekkar at han verkar. Etter kvar historie lagrar du ein versjon i Git.
Når noko går gale, og det gjer det, veit du korleis du får KI-en til å rette
det, eller korleis du går tilbake.

![Illustrasjon av ei løkke i fire steg: be om eitt steg, test i nettlesaren,
lagre i Git, neste steg](bygg_nn.png)

## Før du startar {.tip}

Gjer [Kom i gang med ein
KI-kodeassistent](../kom_i_gang_claude_code/kom_i_gang_claude_code_nn) først.
Du treng `PLAN.md` med MVP-historier og «Ferdig når», og ei `CLAUDE.md`. Du
bør kunne lage ein commit, sjå [Git i VS
Code](../../vs_code/git_i_vs_code/git_i_vs_code), og det hjelper å ha gjort
[Feilsøking i VS Code](../../vs_code/feilsoking/feilsoking).


# Steg 1: Løkka {.activity}

Du gjentek dei same fire tinga for kvar MVP-historie:

1. **Be om eitt steg**: éi historie frå `PLAN.md`, med ein plan først.
2. **Sjekk**: les endringane og prøv «Ferdig når» i nettlesaren.
3. **Lagre** med ein commit viss det verkar.
4. **Neste steg**: kryss av historia og start ein ny samtale.

## Sjekkliste {.check}

- [ ] Start Claude Code i prosjektmappa med `claude`, og slå på plan-modus.

- [ ] Vel den første historia i `PLAN.md`, og skriv:

  ```
  Bygg denne MVP-historia: [lim inn historia og «Ferdig når»].
  Lag ein plan først. Ikkje endre andre delar av appen. Sei frå når eg
  kan teste, og kva eg skal sjekke.
  ```

- [ ] Les planen. Godkjenn han berre viss han gjer det historia seier, og ikkje
  meir.

- [ ] Opne `index.html` i nettlesaren. Dobbeltklikk fila, eller bruk
  utvidinga Live Server i VS Code.

- [ ] Verkar det? Lag ein commit med ei melding som seier kva som er nytt, til
  dømes `Liste over ledige tider`.

- [ ] Kryss av historia i `PLAN.md`. Skriv `/clear` før neste historie.

## Tips {.protip}

Ein ny samtale for kvar historie gjer at KI-en ikkje blandar gammalt og nytt.
Alt han treng å vite, skal stå i `PLAN.md` og `CLAUDE.md`. Manglar han noko,
skriv det inn der, ikkje berre i samtalen.


# Steg 2: Les koden før du seier ja {.activity}

Her er du seniorutviklaren. KI-en skriv raskt, men gjer ofte meir enn du bad
om. Det er lettare å seie nei før enn å rydde etterpå.

## Sjekkliste {.check}

- [ ] Opne **Source Control** i VS Code, og klikk på ei fil som er endra. Grønt
  er lagt til, raudt er fjerna.

- [ ] Sjå etter varselteikn:

  | Teikn | Kvifor det er eit problem |
  |---|---|
  | Filer eller mapper du ikkje bad om | Appen veks utan at du veit kvifor |
  | Nye pakkar, rammeverk eller skript frå andre nettsider | Meir å forstå, oppdatere og stole på |
  | Kode som er sletta | Noko som verka, kan slutte å verke |
  | Passord, nøklar eller ekte personopplysningar | Hamnar på GitHub og hos KI-tenesta |
  | Mykje meir kode enn historia treng | Vanskelegare å forstå og rette seinare |

- [ ] Forstår du ikkje ein del? Marker han og spør:

  ```
  Forklar denne delen linje for linje, som til ein nybyrjar. Kvifor
  trengst han?
  ```

- [ ] Fann du eit varselteikn? Be KI-en fjerne det, og legg til ein regel i
  `CLAUDE.md`, til dømes:

  ```markdown
  - Ikkje legg til pakkar, rammeverk eller skript frå andre nettsider utan
    å spørje meg.
  ```


# Steg 3: Når noko er feil {.activity}

KI-en tek feil ganske ofte. Det er ikkje farleg, men du må seie tydeleg frå.

## Sjekkliste {.check}

- [ ] Beskriv kva du **ser**, ikkje kva du trur er gale:

  ```
  Når eg trykkjer Bestill, skjer det ingenting. Eg venta at
  bestillingsskjermen skulle kome.
  ```

- [ ] Har nettlesaren ei feilmelding? Trykk **F12**, vel **Console**, og kopier
  den raude teksten inn til Claude Code.

- [ ] Be om årsaka før rettinga: «Finn ut kvifor før du endrar noko.»

- [ ] Skriv kort i ei fil som heiter `LOGG.md` kva KI-en gjorde feil, og
  korleis du fann det. Du får bruk for det i [Ansvar og
  personvern](../ansvar_og_personvern/ansvar_og_personvern_nn).

## Tips {.protip}

Eitt problem om gongen. Ramsar du opp fem feil, rettar han gjerne tre og lagar
to nye.


# Steg 4: Ta kontrollen tilbake {.activity}

Nokre gonger blir det verre for kvar retting. Då er det betre å gå tilbake enn
å halde fram.

## Sjekkliste {.check}

- [ ] Har du retta det same tre gonger utan at det verkar? Stopp.

- [ ] Gå tilbake til siste commit som verka. Skriv til Claude Code:

  ```
  Stopp. Gå tilbake til siste commit med git, og forklar kva som gjekk gale.
  ```

- [ ] Start ein ny samtale med `/clear`, og be om steget på nytt med ei
  tydelegare melding. Del historia opp i mindre delar viss ho er stor.

- [ ] Skjedde det noko du ikkje ville ha? Legg til ein regel i `CLAUDE.md`, så
  det ikkje skjer igjen.

- [ ] Vil du prøve noko stort eller usikkert? Gjer det på ei eiga grein, sjå
  [Prøv en idé på en gren](../../git/grener/grener). Då kan du kaste det
  viss det ikkje verkar.

## Neste steg {.tip}

Når alle MVP-historiene verkar, testar du appen grundig i [Test og
kvalitet](../test_og_kvalitet/test_og_kvalitet_nn). Skal appen lagre data som
fleire skal sjå, går du vidare til [Lagre data
trygt](../lagre_data/lagre_data_nn).

## Prompter du kan lære av {.protip}

Byt ut det som står i klammer. Legg aldri inn namn, passord eller
personopplysningar om andre. Sjå kvifor promptane verkar, og lag dine eigne.

- **Éi historie om gongen:**

  ```
  Bygg denne MVP-historia: [lim inn]. Lag ein plan først. Ikkje endre
  andre delar av appen.
  ```

- **Forstå koden:**

  ```
  Forklar endringane du nettopp gjorde, steg for steg, som til ein
  nybyrjar. Kva bør eg teste?
  ```

- **Feilsøk rett:**

  ```
  Når eg [gjer Y], skjer [X], men eg venta [Z]. Finn årsaka før du
  rettar, og forklar kva som var gale.
  ```

- **Reverse engineer ein funksjon:**

  ```
  Sjå på [nettside med ein funksjon du vil lære, til dømes eit
  bestillingsskjema]. Forklar korleis ein slik funksjon vanlegvis er
  bygd, så eg forstår korleis han verkar. Ikkje kopier koden deira.
  ```

- **Lær av det som gjekk gale:**

  ```
  Kva burde eg ha skrive i prompten for at du skulle gjort dette
  rett første gongen?
  ```

## Test deg sjølv {.flag}

- [ ] Kan du peike på kvar i koden appen lagrar ei bestilling?

- [ ] Kan du nemne éin ting KI-en gjorde feil, og korleis du oppdaga det?

## Lagre {.save}

Lag ein commit med meldinga `MVP ferdig`.


## Utfordring {.challenge}

Be KI-en lage to ulike løysingar på same historie, på to greiner. Kva for ei er
enklast å forstå, og kva for ei ville du valt? Kvifor?
