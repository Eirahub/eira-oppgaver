---
title: Planen
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

**Fase:** Plan (definition). Sjå [Frå idé til produksjon](../fasene/fasene_nn).

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


# Steg 1: Frå epos til brukarhistorie {.activity}

Ein app er for mykje å tenkje på på éin gong. Difor deler ein arbeidet i nivå,
frå stort til lite:

- Eit **epos** (epic) er eit stort område appen skal hjelpe med, til dømes
  «Bestilling».
- Ein **funksjon** (feature) er ein del av eposet som brukaren merkar, til
  dømes «Sjå ledige tider».
- Ei **brukarhistorie** (user story) er éin ting ein brukar skal få til, sett
  frå brukaren.
- Ei **oppgåve** (task) er ein liten jobb som skal til for å lage historia, til
  dømes «lag skjemaet». Oppgåvene finn du først når du byggjer.

## Sjekkliste {.check}

- [ ] Skriv 1 til 3 epos. Bruk verdiforslaget: kva er dei store tinga appen
  lovar kunden?

- [ ] Skriv 1 til 3 funksjonar under kvart epos.

- [ ] Skriv 3 til 6 brukarhistorier under funksjonane, på forma:

  ```
  Som [kven] vil eg [gjere noko], så eg [får noko ut av det].
  ```

- [ ] Tenk på alle som bruker appen. Ofte er det både kunden og de som driv
  bedrifta.

## Døme {.tip}

```
Epos: Bestilling
  Funksjon: Sjå ledige tider
    Som kunde vil eg sjå ledige tider, så eg slepp å møte opp til ingen
    nytte.
  Funksjon: Bestille tid
    Som kunde vil eg bestille ei tid med namn og sykkeltype, så eg veit
    at sykkelen blir vaska.
Epos: Drift av vasken
  Funksjon: Lista for i dag
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

- [ ] Skriv **Ikkje med** ved det appen ikkje skal gjere, til dømes dei tre
  tinga frå verdiforslaget.

- [ ] Skriv **akseptansekriterium** (acceptance criteria) for kvar
  MVP-historie. Dei seier når historia er ferdig:

  ```
  Ferdig når: Gitt [situasjon], når [handling], så [resultat].
  ```

## Døme {.tip}

```
Som kunde vil eg sjå ledige tider, så eg slepp å møte opp til ingen nytte.
Ferdig når: Gitt at to tider er bestilte i morgon, når eg opnar
appen, så ser eg at dei to tidene er opptekne.
```


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

- [ ] Gjer eit grovt overslag: Kva kostar verktøy, publisering og lagring i
  månaden, og kor mange timar går med til drift? Kan det løne seg? Du reknar
  meir nøyaktig i [Kva type app?](../typer_apper/typer_apper_nn)


# Steg 5: Skriv PLAN.md {.activity}

Samle alt i éi fil. Denne fila gir du til KI-en seinare.

## Sjekkliste {.check}

- [ ] Lag ei mappe for prosjektet, og ei fil som heiter `PLAN.md`.

- [ ] Fyll ut malen:

  ```markdown
  # Namnet på appen

  ## Problemet
  (problemsetninga)

  ## Jobbsetning
  Når ..., vil eg ..., så eg kan ...

  ## Verdiforslag
  (verdiforslaget)

  ## Mål
  (to eller tre mål vi kan måle, til dømes talet på bestillingar)

  ## Antakingar vi må teste
  - Vi trur at ... Vi veit det når ...

  ## Brukarar
  - Kunde: ...
  - Vi som driv: ...

  ## Epos og funksjonar
  - Epos: ...
    - Funksjon: ...

  ## MVP
  - Som ... vil eg ..., så eg kan ...
    Ferdig når: Gitt ..., når ..., så ...

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

  ## Kostnad (grovt)
  (per månad, og timar til drift)

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
| **Seniorutviklar** | At løysinga er enkel nok, at de forstår koden, og at alt er lagra i Git. Seier nei når KI-en lagar noko for komplisert | Planen steg 4, Bygg MVP-en, Lagre data trygt |
| **Testar** (QA engineer) | At kvar MVP-historie verkar, òg på mobil, for skjermlesar og når brukaren gjer noko uventa | Test og kvalitet, Test med kundar |
| **Tryggleikstestar** (pentester) | At appen toler åtak. Testar berre eigne system | Tryggleik og risiko |
| **Drift** (DevOps engineer) | Publisering, domene, løyndomar, tryggleikskopi, kostnader, og å kunne gå tilbake når noko går gale | Kva type app?, Tryggleik og risiko steg 6, Etter lansering |
| **Personvernansvarleg** | Personopplysningar, personvernerklæring og reglar | Ansvar og personvern |
| **Sal og kundeservice** | Kontakt med kundane, pitch, spørsmål og klager | Forretningsideen, Test med kundar, Etter lansering |

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


## Prompter du kan lære av {.protip}

Byt ut det som står i klammer. Legg aldri inn namn, passord eller
personopplysningar om andre. Sjå kvifor promptane verkar, og lag dine eigne.

- **Visjon og mål:**

  ```
  Ut frå problemsetninga [lim inn]: Skriv ein visjon i éi setning og
  tre målbare mål for dei tre første månadene. Spør meg om det du ikkje
  veit.
  ```

- **Lag ein PRD (for deg som vil gå vidare):**

  ```
  Lag ein produktkravspesifikasjon (PRD) ut frå visjonen, måla og
  jobbsetninga: problem, målgruppe, mål, kva som er med og ikkje med,
  krav, risikoar og opne spørsmål. Ikkje finn på noko. Skriv «ukjent»
  der eg ikkje har sagt noko.
  ```

- **Epos, funksjonar og historier:**

  ```
  Del planen opp i epos (epics), funksjonar (features) og
  brukarhistorier: «Som [brukar]
  vil eg [handling], så eg kan [mål].» Gi kvar historie
  akseptansekriterium: «Gitt [situasjon], når [handling], så
  [resultat].» Merk kva som høyrer til MVP-en.
  ```

- **Heng alt saman?**

  ```
  Gå gjennom planen. Kan kvar historie sporast tilbake til eit mål og
  ei jobbsetning? List opp historier utan grunn, mål utan historier og
  antakingar vi ikkje har testa.
  ```

Ikkje start byggjinga før planen heng saman. Det er mykje billegare å endre ei
setning i planen enn kode KI-en har skrive.

- **La KI-en spørje deg:**

  ```
  Her er PLAN.md: [lim inn]. Still meg spørsmål om det som manglar
  eller er uklart, eitt om gongen, før du foreslår noko.
  ```

- **Gjer MVP-en mindre:**

  ```
  Kva MVP-historier i planen kan eg fjerne og framleis løyse
  problemet? Forklar kvifor.
  ```

- **Forstå vala:**

  ```
  Foreslå tre måtar å lagre dataa i appen på, frå enklast til mest
  avansert. Kva krev kvar av tryggleik, personvern og pengar?
  ```

- **Få ein seniorutviklar til å sjå på planen:**

  ```
  Du er ein erfaren seniorutviklar. Gå gjennom planen og sei kva du
  ville vore uroa for. Ikkje skriv kode.
  ```


# Steg 7: Frå plan til tavle {.activity}

No blir planen til arbeid. Kvar MVP-historie blir ei **sak** (issue) med
«Ferdig når» i skildringa. Sakene legg du i ein **milepæl** (milestone) som
heiter `MVP`, og på ei **prosjekttavle** (project board) med kolonnane `Todo`,
`In Progress` og `Done`. Då ser du heile tida kva som er gjort, og kva som står
att.

Korleis du gjer det på GitHub, lærer du i [Planlegg med issues og
prosjekttavle](../../git/issues_og_prosjekt/issues_og_prosjekt).

## Sjekkliste {.check}

- [ ] Skriv **ferdigdefinisjonen** (definition of done) i `PLAN.md` under
  `## Ferdigdefinisjon`: kva må til før ei sak er ferdig? Sjå steg 2 i [Frå
  idé til produksjon](../fasene/fasene_nn).

- [ ] Lag éi sak per MVP-historie. Tittelen er historia, og skildringa er
  «Ferdig når» som sjekkliste.

- [ ] Legg sakene i milepælen `MVP`. Historiene under **Seinare** kan bli saker
  utan milepæl.

- [ ] Legg sakene i `Todo` på tavla, med den viktigaste øvst.

- [ ] Jobbar de i gruppe? Gi kvar sak ein ansvarleg (assignee). Jobbar du
  åleine, er alle sakene dine.

## Har du ikkje GitHub-konto enno? {.tip}

Lag tavla på eit ark med tre kolonnar, og skriv kvar sak på ein lapp. Du
flyttar sakene til GitHub i [Bygg MVP-en](../bygg_mvp/bygg_mvp_nn). Du må vere
13 år for å ha ein konto på GitHub.

## Test deg sjølv {.flag}

- [ ] Gi planen til ein medelev. Kan dei forklare deg kva appen gjer, utan at
  du seier noko?

- [ ] Om dei spør om noko, manglar det i planen. Skriv det inn.

- [ ] Veit alle i gruppa kva rolle dei har, og kva dei skal passe på?

- [ ] Kan du sjå på tavla kva sak du skal starte med?

## Lagre {.save}

`PLAN.md` er det viktigaste du lagar i kurset. Ta godt vare på han.

## Ferdig med fasen {.check}

Dette er siste oppgåve i fasen **Plan**. Sjå [Frå idé til
produksjon](../fasene/fasene_nn).

- [ ] `PLAN.md` har ein MVP, oftast med maks 3 historier.

- [ ] Kvar MVP-historie har «Ferdig når».

- [ ] MVP er skild frå **Seinare** og **Ikkje med**.

- [ ] Rollene er fordelte.

- [ ] Historiene ligg som saker i ein milepæl, på GitHub eller på eit ark.


## Utfordring {.challenge}

Skriv éi setning under **Krav** om korleis appen skal fungere for ein som
bruker skjermlesar, eller som ikkje kan lese norsk så godt.
