---
title: Appen hugsar
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

Mange appar må hugse noko til neste gong: poeng, gloser eller ei vaktliste. I
denne oppgåva får du appen til å hugse data, du lagar ein tryggleikskopi, og
du tenkjer over kva appen ikkje bør hugse.

![Illustrasjon av poengtavla med ei pil til ei fil som heiter
sikkerhetskopi](husker.png)

## Før du startar {.tip}

Du treng ein app frå [Gjer appen betre](../forbedre_appen/forbedre_appen_nn).


# Steg 1: Gløymer appen? {.activity}

## Sjekkliste {.check}

- [ ] Køyr appen og legg inn noko, til dømes tre lag med poeng.

- [ ] Lukk KIT Apps og start programmet igjen. Opne appen. Er poenga der?

- [ ] Er dei borte, ber du KI-en om å hugse dei:

  ```
  Appen gløymer alt når eg lukkar han. Få han til å hugse laga og
  poenga. Bruk window.appStudio.storage viss det finst, og elles
  localStorage. Gi meg heile fila på nytt.
  ```

- [ ] Test igjen: legg inn poeng, lukk og opne.

## Kvar er dataa? {.tip}

Dataa ligg berre på denne PC-en, i den eine appen. Ingen andre kan sjå dei, og
dei blir ikkje lasta opp til nettet. Det tyder òg at dei er borte viss PC-en
blir nullstilt.


# Steg 2: Tøm og start på nytt {.activity}

Ein turnering sluttar, og ein ny byrjar.

## Sjekkliste {.check}

- [ ] Be om ein knapp som slettar alt:

  ```
  Lag ein knapp «Ny turnering» som slettar alle lag og poeng. Spør
  «Er du sikker?» før han slettar.
  ```

- [ ] Test at knappen verkar, og at han spør først.


# Steg 3: Tryggleikskopi {.activity}

## Sjekkliste {.check}

- [ ] Be om eksport og import:

  ```
  Lag ein knapp som lagrar alle data som ei fil, og ein knapp som hentar
  dei inn igjen frå ei slik fil.
  ```

- [ ] Lagre ein kopi, slett alt med «Ny turnering», og hent kopien inn igjen.
  Er alt tilbake?

## Tips {.protip}

KIT Apps kan òg ta tryggleikskopi av dataa til ein app. Gå til fana
**Package** og trykk **Export data** eller **Import data**.


# Steg 4: Kva skal appen ikkje hugse? {.activity}

Ei **personopplysning** er alt som kan knytast til ein person, som namn,
telefonnummer, bilete eller karakterar. Det tryggaste er å la vere å lagre
det.

## Sjekkliste {.check}

- [ ] Skriv ned alt appen din lagrar.

- [ ] Er noko av det personopplysningar? Treng appen det, eller held det med
  lagnamn eller eit nummer?

- [ ] Fjern det appen ikkje treng.

## Dele med fleire? {.tip}

Ein pakka app kan dele data med andre gjennom ei delt mappe, til dømes i
OneDrive. Då ser alle som har tilgang til mappa, dataa. Bruk det berre til
data alle på laget skal sjå, og aldri til sensitive opplysningar.

## Test deg sjølv {.flag}

- [ ] Kan du forklare kvar dataa i appen din ligg, og kven som kan sjå dei?

## Lagre {.save}

Endringane i appen er lagra når du har trykt **Save Changes**.


## Utfordring {.challenge}

Be KI-en vise ein liten graf over poenga etter kvar runde. Kven leidde etter
første runde?
