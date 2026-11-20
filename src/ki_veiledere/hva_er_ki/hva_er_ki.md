---
title: Hva er en KI-kodehjelper?
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Du kan be en KI om å lage et spill i Scratch eller et program i Python, og få
svar på sekunder. Svaret ser ofte riktig ut. Noen ganger er det riktig. Andre
ganger er det feil, og KI-en sier det like selvsikkert.

I denne oppgaven finner du ut hvorfor. Først leser du kort om hvordan verktøyene
virker. Så ber du selv en KI om et lite program og leter etter feilene. Du
trenger ikke kunne programmere godt for å gjøre det.

![En veileder ser på et KI-svar og en Scratch-scene side om side på
skjermen](ki_svar_scratch.png)


# Steg 1: En maskin som gjetter neste ord {.activity}

Tjenester som ChatGPT, Claude, Copilot og Gemini bygger på **språkmodeller**. En
språkmodell er trent på enorme mengder tekst fra nettet, bøker og kode. Den har
lært hvilke ord som pleier å komme etter hverandre.

Når du skriver et spørsmål, regner modellen ut hvilket ord som passer best som
neste ord i svaret. Så det neste, og det neste. Slik bygges svaret opp, ett ord
om gangen.

Det har noen viktige følger:

- Modellen **forstår** ikke koden slik en programmerer gjør. Den skriver det som
  ligner på kode den har sett før.

- Modellen **kjører** vanligvis ikke koden før du får den. Den vet ikke om
  programmet virker.

- Modellen kan **finne på** ting som høres riktige ut: en Scratch-kloss som ikke
  finnes, en Python-funksjon med feil navn, eller en forklaring som ikke
  stemmer. Det kalles ofte å **hallusinere**.

- Svaret kommer i samme selvsikre tone, enten det er riktig eller feil.

## Sjekkliste {.check}

- [ ] Les punktene over. Hvilket av dem overrasket deg mest?

- [ ] Prøv å forklare med egne ord, til en kollega eller deg selv, hvorfor en KI
  kan ta feil uten å merke det.

## Tips {.tip}

Noen tjenester kan søke på nettet eller kjøre kode før de svarer. Det gjør
svarene bedre, men ikke feilfrie. Regn med at du må sjekke selv.


# Steg 2: Be om et lite program {.activity}

Nå skal du prøve selv. Velg Scratch eller Python, det du kjenner best.

## Sjekkliste {.check}

- [ ] Åpne en KI-tjeneste du har tilgang til. Bruk din egen konto, ikke en
  elevs.

- [ ] Be om et lite program. Du kan bruke ett av disse forslagene:

  - "Lag et Scratch-spill der en katt fanger epler som faller ned. Skriv
    klossene på norsk."

  - "Lag et Python-program som spør om alderen din og sier hvor gammel du er om
    ti år."

- [ ] Les svaret. Ser det ut som noe du ville gitt til en elev?

## Tips {.protip}

Scratch er vanskelig for en språkmodell. Den ser ikke klossene, bare tekst om
dem. Derfor er Scratch-svar ofte fulle av klosser som ikke finnes, eller som
heter noe annet på norsk.


# Steg 3: Finn feilene {.activity}

Nå er du feilsøkeren. Bygg eller kjør programmet nøyaktig slik KI-en skrev det.

## Sjekkliste {.check}

- [ ] Scratch: Bygg skriptet på [scratch.mit.edu](https://scratch.mit.edu).
  Finnes alle klossene KI-en nevner? Ligger de i den kategorien den sier?

- [ ] Python: Kjør koden, for eksempel i [trinket.io](https://trinket.io) eller
  i et Python-program på maskinen din. Får du en feilmelding?

- [ ] Skriv ned hver feil du finner. Var det en kloss eller funksjon som ikke
  finnes? En logisk feil? Noe som mangler?

- [ ] Fortell KI-en om én av feilene. Hva skjer? Retter den feilen, eller lager
  den en ny?

## Test prosjektet {.flag}

- [ ] Virker programmet nå, etter at du har rettet det?

- [ ] Hvor mye av rettingen gjorde du selv, og hvor mye gjorde KI-en?

## Utfordring {.challenge}

Be KI-en om å forklare én linje eller én kloss i programmet. Er forklaringen
riktig? Sjekk den mot det programmet faktisk gjør.


# Steg 4: Til deg som veileder {.activity}

## Dette er det eleven opplever {.tip}

For en elev ser KI-svaret ut som fasit. Det er pent satt opp, høflig og sikkert.
Når koden ikke virker, tror mange elever at feilen er deres egen. Andre limer
inn feilmeldingen og ber om en ny versjon, om og om igjen, uten å forstå hva som
er galt.

Nå har du selv kjent hvordan det er å feilsøke KI-kode. Det hjelper deg å møte
eleven der den er. Du vet at feilen kan ligge hos KI-en, og at det å finne den
er god programmering. I neste oppgave øver du på samtalen med en elev som kommer
med KI-kode.
