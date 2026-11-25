---
title: Lekkede hemmeligheter
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Mange datalekkasjer skjer ikke fordi noen hacket seg inn. De skjer fordi noen
la et passord eller en nøkkel i koden, og delte koden. Roboter leter
gjennom GitHub hele døgnet etter slike nøkler, og bruker dem i løpet av
minutter. I denne oppgaven finner du en nøkkel som eieren trodde var slettet,
og lærer å holde dine egne hemmeligheter unna.

![Terminal med git log som viser tre commits, og git log -p som viser at
nøkkelen ble lagt til og fjernet](git.png)

```
FRA:   K, Byrå 404
TIL:   Pentester
EMNE:  Slettet er ikke slettet

Kioskeieren la ved et uhell betalingsnøkkelen i koden. Hun sier
hun har fjernet den. Sjekk om det stemmer.

Hilsen K
```

## Før du starter {.tip}

Du trenger Git. Se [Git i VS Code](../../vs_code/git_i_vs_code/git_i_vs_code)
hvis du ikke har brukt det før. Ble ikke mappa `oppdrag/5_git_lekkasje`
laget, installer Git og kjør `python3 lag_oppdrag.py` på nytt.


# Steg 1: Se gjennom historikken {.activity}

Git husker **alt** som noen gang er lagret med en commit. Det er hele poenget
med Git. Det er også problemet.

## Sjekkliste {.check}

- [ ] Gå til oppdraget og se hva som ligger der nå:

  ```
  cd oppdrag/5_git_lekkasje
  ls -a
  cat .gitignore
  ```

  Ingen nøkkel. Og `.gitignore` sørger for at den ikke kommer tilbake.

- [ ] Se historikken:

  ```
  git log --oneline
  ```

- [ ] Se hva som ble endret i hver commit:

  ```
  git log -p
  ```

  Bla med mellomrom, og avslutt med `q`.

## Flagg {.flag}

Nøkkelen er flagget. Registrer det med `python3 ../../sjekk.py flagg
'EIRA{...}'`.


# Steg 2: Hva skal du gjøre hvis det skjer deg? {.activity}

En nøkkel som har vært i Git, og særlig på GitHub, må regnes som **lekket**.
Å slette den fra historikken er vanskelig, og noen kan allerede ha kopiert
den.

## Sjekkliste {.check}

- [ ] Lær rekkefølgen utenat:

  1. **Lag en ny nøkkel** hos tjenesten, og slett den gamle. Da er den
     lekkede nøkkelen verdiløs.
  2. **Sjekk** om noen har brukt den gamle nøkkelen.
  3. **Flytt** hemmeligheter ut av koden, for eksempel til en fil som heter
     `.env`.
  4. **Legg** `.env` i `.gitignore`, så den aldri blir med i en commit.

## Tips {.protip}

En fil som heter `.env.example` med tomme verdier kan ligge i Git. Da vet
andre hvilke hemmeligheter appen trenger, uten å se dem.


# Steg 3: Sjekk ditt eget prosjekt {.activity}

## Sjekkliste {.check}

- [ ] Har du et eget prosjekt med Git? Søk gjennom **hele historikken** etter
  ord som ofte står ved hemmeligheter:

  ```
  git log -p | grep -i -E "password|passord|secret|token|key|nøkkel"
  ```

- [ ] Fant du noe? Følg rekkefølgen i steg 2.

- [ ] Vil du gå grundigere til verks, finnes det verktøy som `gitleaks` som
  leter etter hundrevis av typer nøkler.

- [ ] Er din e-postadresse med i en kjent lekkasje? Sjekk på
  [haveibeenpwned.com](https://haveibeenpwned.com). Er den det, bytt passordet
  på den kontoen og på andre kontoer med samme passord.

## Ekte sak {.protip}

GitHub skanner selv etter nøkler som blir pushet, og sier fra til tjenesten
nøkkelen hører til. Likevel blir millioner av nøkler funnet i offentlige
repoer hvert år. Noen har fått regninger på mange tusen kroner etter at
andre brukte nøkkelen deres til å kjøre dyre maskiner.

## Test deg selv {.flag}

- [ ] Hvorfor er nøkkelen ikke borte, selv om fila er slettet?

- [ ] Hva er det første du gjør hvis du har pushet en nøkkel?


## Utfordring {.challenge}

I [Del koden på GitHub](../../git/del_pa_github/del_pa_github) lærer du
`.gitignore`. Lag en `.gitignore` og en `.env.example` for et av dine egne
prosjekter.
