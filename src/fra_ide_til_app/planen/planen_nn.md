---
title: Planen
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

Ein KI byggjer nesten kva som helst, men han gjettar når du er utydeleg. Di
betre planen er, di mindre gjettar han. I denne oppgåva skriv du `PLAN.md`:
kven appen er for, kva skjermar han har, kva data han treng og kva som er den
minste versjonen som verkar.

![Illustrasjon av ein plan med tre skjermskisser kopla saman med piler, og ei
liste med data under](plan_nn.png)

## Før du startar {.tip}

Du treng problemsetninga frå [Finn behovet](../finn_behovet/finn_behovet_nn)
og verdiforslaget frå
[Forretningsideen](../forretningsideen/forretningsideen_nn).


# Steg 1: Kva skal brukaren få gjort? {.activity}

Ei **brukarhistorie** er éin ting ein brukar skal få til, sett frå brukaren.

## Sjekkliste {.check}

- [ ] Skriv 3 til 6 brukarhistorier på forma:

  ```
  Som [kven] vil eg [gjere noko], så eg [får noko ut av det].
  ```

- [ ] Tenk på alle som bruker appen. Ofte er det både kunden og de som driv
  bedrifta.

## Døme {.tip}

```
Som kunde vil eg sjå ledige tider, så eg slepp å møte opp til ingen nytte.
Som kunde vil eg bestille ei tid med namn og sykkeltype.
Som vaskar vil eg sjå bestillingane i dag, så vi veit kven som kjem.
```


# Steg 2: MVP, den minste versjonen som verkar {.activity}

**MVP** tyder «minimum viable product». Det er den minste appen som løyser
problemet godt nok til at kundane kan prøve han. Alt anna ventar.

## Sjekkliste {.check}

- [ ] Set **MVP** ved dei historiene som må vere med for at appen skal løyse
  problemet.

- [ ] Set **Seinare** ved resten. Ver streng. Ein MVP har sjeldan meir enn tre
  historier.


# Steg 3: Skjermar og flyt {.activity}

## Sjekkliste {.check}

- [ ] Teikn kvar skjerm som ein boks på papir. Skriv kva som står på han:
  tekst, knappar, lister og felt.

- [ ] Teikn piler mellom skjermane: kva trykkjer brukaren på for å kome
  vidare?

- [ ] Sjekk at kvar MVP-historie kan gjerast med skjermane du har teikna.


# Steg 4: Data og arkitektur {.activity}

**Data** er det appen må hugse. **Arkitektur** er kvar ting skjer og kvar data
blir lagra. For ein nybyrjar er det tre moglegheiter:

| Kvar data blir lagra | Kven ser dataa | Passar til |
|---|---|---|
| Berre i nettlesaren | Berre den som bruker maskina | Prøveversjon, kalkulator, hugseliste |
| I eit rekneark eller skjema | De som driv bedrifta | Bestillingar, påmelding, tilbakemelding |
| I ein database på ein tenar | Alle brukarar, med innlogging | Ekte nettbutikk, SaaS |

## Sjekkliste {.check}

- [ ] Skriv kva data appen treng, til dømes `tid`, `navn`, `sykkeltype`.

- [ ] Er nokre av dataa personopplysningar? Skriv kva for nokre. Ta berre med
  det du treng.

- [ ] Vel kvar dataa skal lagrast i MVP-en. Start med det enklaste som verkar.


# Steg 5: Skriv PLAN.md {.activity}

Samle alt i éi fil. Denne fila gir du til KI-en seinare.

## Sjekkliste {.check}

- [ ] Lag ei mappe for prosjektet, og ei fil som heiter `PLAN.md`.

- [ ] Fyll ut malen:

  ```markdown
  # Namnet på appen

  ## Problemet
  (problemsetninga)

  ## Verdiforslag
  (verdiforslaget)

  ## Brukarar
  - Kunde: ...
  - Vi som driv: ...

  ## MVP
  - Som ... vil eg ...

  ## Seinare
  - ...

  ## Ikkje med
  - ...

  ## Skjermar
  1. Framside: ...
  2. ...

  ## Data
  - felt: forklaring

  ## Lagring
  (nettlesar, rekneark eller tenar, og kvifor)

  ## Krav
  - Norsk språk
  - Fungerer på mobil
  - Lett å lese: god kontrast og store knappar
  ```

# Steg 6: Fordel rollene {.activity}

I eit programvareselskap lagar mange roller ein app saman. Når KI-en skriv
koden, forsvinn ikkje dei andre rollene. Då er det de som har dei. Den
vanlegaste feilen i vibe coding er å la KI-en vere utviklar og gløyme alle dei
andre.

| Rolle | Passar på | Viktigast i oppgåva |
|---|---|---|
| **Produktleiar** (product manager) | At appen løyser eit ekte behov. Bestemmer kva som blir bygd no, og kva som ventar | Finn behovet, Planen, Test med kundar |
| **Designar** | At appen er lett å bruke og ser ut som bedrifta | Design appen med KI, Gi appen eit eige uttrykk |
| **Promptskrivar** (prompt engineer) | At KI-en får tydelege beskjedar, nok samanheng og klare grenser | Kom i gang med ein KI-kodeassistent, Bygg MVP-en |
| **Seniorutviklar** | At løysinga er enkel nok, at de forstår koden, og at alt er lagra i Git. Seier nei når KI-en lagar noko for komplisert | Planen steg 4, Bygg MVP-en |
| **Testar** (QA engineer) | At kvar MVP-historie verkar, òg på mobil, for skjermlesar og når brukaren gjer noko uventa | Bygg MVP-en, Test med kundar |
| **Tryggleikstestar** (pentester) | At appen toler åtak. Testar berre eigne system | Tryggleik og risiko |
| **Drift** (DevOps engineer) | Publisering, domene, løyndomar, tryggleikskopi, kostnader, og å kunne gå tilbake når noko går gale | Kva type app?, Tryggleik og risiko steg 6, Test med kundar |
| **Personvernansvarleg** | Personopplysningar, personvernerklæring og reglar | Ansvar og personvern |
| **Sal og kundeservice** | Kontakt med kundane, pitch, spørsmål og klager | Forretningsideen, Test med kundar |

## Sjekkliste {.check}

- [ ] Jobbar de i gruppe? Gi kvar person éi eller to roller. Skriv namna i
  `PLAN.md` under ei ny overskrift `## Roller`.

- [ ] Jobbar du åleine? Du har alle rollene. Byt rolle med vilje: Når du er
  ferdig med ei MVP-historie, gå gjennom ho som testar, og deretter som
  tryggleikstestar.

- [ ] Du kan be KI-en spele ei rolle, til dømes:

  ```
  Du er ein erfaren testar. Lag ei liste med ti ting som kan gå gale når
  ein kunde bestiller i appen. Ikkje endre koden.
  ```

  KI-en kan hjelpe, men det er de som har ansvaret.

## Tips {.protip}

Den viktigaste rolla er ofte produktleiar, fordi ho seier nei. KI-en kan byggje
nesten kva som helst på kort tid. Det betyr ikkje at appen treng det.


## Test deg sjølv {.flag}

- [ ] Gi planen til ein medelev. Kan dei forklare deg kva appen gjer, utan at
  du seier noko?

- [ ] Om dei spør om noko, manglar det i planen. Skriv det inn.

- [ ] Veit alle i gruppa kva rolle dei har, og kva dei skal passe på?

## Lagre {.save}

`PLAN.md` er det viktigaste du lagar i kurset. Ta godt vare på han.


## Utfordring {.challenge}

Skriv éi setning under **Krav** om korleis appen skal fungere for ein som
bruker skjermlesar, eller som ikkje kan lese norsk så godt.
