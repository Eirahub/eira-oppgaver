---
title: Test og kvalitet
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En app kan virke når du prøver den, og likevel feile for kundene. I denne
oppgaven er du testeren. Du lager en testliste ut fra «Ferdig når», prøver det
som kan gå galt, sjekker at alle kan bruke appen, og får en gjennomgang av
koden. Testlista bruker du hver gang appen endres.

![Illustrasjon av en testliste med hake og kryss ved siden av en mobil med et
skjema som har en feilmelding](test_kvalitet.png)

## Før du starter {.tip}

Du trenger en MVP der historiene virker, fra [Bygg
MVP-en](../bygg_mvp/bygg_mvp).


# Steg 1: Lag testlista {.activity}

En **test** er en beskrivelse av hva du gjør, og hva som skal skje. Den beste
kilden til tester er «Ferdig når» i `PLAN.md`.

## Sjekkliste {.check}

- [ ] Lag en fil som heter `TEST.md`, med én tabell:

  ```markdown
  | Test | Gjør dette | Dette skal skje | OK? |
  |---|---|---|---|
  | Se ledige tider | Åpne siden | Ledige tider vises | |
  | Bestille | Velg 12:30, skriv navn og bestill | 12:30 er ikke lenger ledig | |
  ```

- [ ] Lag minst én test for hvert «Ferdig når» i `PLAN.md`.

- [ ] Gå gjennom testene og fyll ut **OK?**. Feiler en test? Rett feilen med
  løkka fra [Bygg MVP-en](../bygg_mvp/bygg_mvp), og test igjen.


# Steg 2: Test kantene {.activity}

Kundene gjør ting du ikke tenker på. En god tester prøver det som kan gå galt,
ikke bare det som skal virke.

## Sjekkliste {.check}

- [ ] Prøv disse, og legg dem som virker for appen din, til i `TEST.md`:

  | Prøv | Hva bør skje |
  |---|---|
  | Send skjemaet tomt | Beskjed om hva som mangler |
  | Skriv et veldig langt navn | Siden ser fortsatt riktig ut |
  | Bestill samme tid to ganger | Tiden er ikke lenger ledig |
  | Last siden på nytt | Det som skal huskes, er der fortsatt |
  | Trykk på knappen mange ganger fort | Bare én bestilling |
  | Skriv `<b>hei</b>` i et felt | Det vises som tekst, ikke som fet skrift |
  | Bruk en gammel mobil eller treg nettforbindelse | Siden virker, bare litt saktere |

- [ ] Be KI-en om flere idéer:

  ```
  Lag en liste med ti ting en kunde kan gjøre som får appen til å feile.
  Ikke endre koden.
  ```

- [ ] Rett det viktigste. Skriv resten inn i `PLAN.md` under **Senere**.

## Tips {.protip}

Testen med `<b>hei</b>` sjekker om appen viser det brukeren skriver som tekst.
Gjør den ikke det, kan noen lure inn kode i appen din. Det er et vanlig
sikkerhetshull.


# Steg 3: Alle skal kunne bruke appen {.activity}

**Universell utforming** betyr at appen kan brukes av flest mulig, også de som
ser dårlig, ikke kan bruke mus, eller bruker skjermleser.

## Sjekkliste {.check}

- [ ] Be om en sjekk:

  ```
  Sjekk appen for universell utforming: kontrast, størrelse på knapper,
  alt-tekst på bilder, ledetekster på skjemafelt, og om den kan brukes
  bare med tastatur. Fortell hva du finner før du endrer noe.
  ```

- [ ] Prøv selv: kan du bestille bare med **Tab** og **Enter**? Ser du hvor du
  er på siden hele tiden?

- [ ] Forstørr siden til 200 prosent med **Ctrl** og **+**. Virker alt
  fortsatt?

- [ ] Legg testene til i `TEST.md`.


# Steg 4: Få en gjennomgang av koden {.activity}

En app som virker, kan likevel være vanskelig å endre. I et programvareteam
leser en annen utvikler koden før den tas i bruk. Det kalles **kodegjennomgang**
(code review).

## Sjekkliste {.check}

- [ ] Be om en gjennomgang:

  ```
  Du er en erfaren seniorutvikler. Gå gjennom koden og si hva som er
  vanskelig å lese, gjentatt eller unødvendig. Foreslå det enkleste
  som kan forbedres. Ikke endre noe ennå.
  ```

- [ ] Velg de to viktigste forslagene, og be KI-en gjøre dem én om gangen.

- [ ] Gå gjennom hele `TEST.md` etter hver endring. Virker alt fortsatt?

- [ ] Jobber dere i gruppe? La en annen i gruppa lese én fil og forklare den
  for deg.


# Steg 5: Test før hver publisering {.activity}

En ny endring kan ødelegge noe som virket. Derfor går du gjennom hele
testlista, ikke bare det nye, hver gang du skal publisere.

## Sjekkliste {.check}

- [ ] Skriv øverst i `TEST.md`: «Gå gjennom alle testene før publisering.»

- [ ] Legg til en regel i `CLAUDE.md`:

  ```markdown
  - Når du har endret noe, si hvilke tester i TEST.md jeg bør kjøre.
  ```

- [ ] Gå gjennom hele lista nå, og lag en commit med meldingen `Alle tester OK`.

## For deg som vil gå videre {.tip}

Tester kan også skrives som kode, så de kjøres av seg selv. Be KI-en om det:

```
Lag automatiske tester for testene i TEST.md som kan kjøres med én
kommando. Forklar hvordan jeg kjører dem, og hva hver test sjekker.
```

## Prompter du kan lære av {.protip}

Bytt ut det som står i klammer. Legg aldri inn navn, passord eller andres
personopplysninger. Se hvorfor promptene virker, og lag dine egne.

- **Tester fra kravene:**

  ```
  Her er MVP-historiene med «Ferdig når»: [lim inn]. Lag en testliste
  i en tabell med kolonnene Test, Gjør dette og Dette skal skje.
  ```

- **Tenk som en tester:**

  ```
  Du er en erfaren tester. Hva er de fem viktigste tingene å teste i
  denne appen før ekte kunder bruker den? Forklar hvorfor.
  ```

- **Forstå en feil:**

  ```
  Testen [navn] feilet. Jeg gjorde [dette], og [dette] skjedde. Finn
  årsaken, og forklar den før du retter noe.
  ```

## Test deg selv {.flag}

- [ ] Kan en annen person gå gjennom `TEST.md` uten å spørre deg om noe?

## Lagre {.save}

Lag en commit med meldingen `Testliste og kvalitet`.


## Utfordring {.challenge}

La en person som ikke har sett appen før, gjøre testene i `TEST.md`. Fant de
noe du ikke fant?
