---
title: Test og kvalitet
author: Tor Einar Enne
translator: Tor Einar Enne
language: nn
---


# Introduksjon {.intro}

**Fase:** MVP (build). Sjå [Frå idé til produksjon](../fasene/fasene_nn).

Ein app kan verke når du prøver han, og likevel feile for kundane. I denne
oppgåva er du testaren. Du lagar ei testliste ut frå «Ferdig når», prøver det
som kan gå gale, sjekkar at alle kan bruke appen, og får ein gjennomgang av
koden. Testlista bruker du kvar gong appen blir endra.

![Illustrasjon av ei testliste med hake og kryss ved sida av ein mobil med eit
skjema som har ei feilmelding](test_kvalitet_nn.png)

## Før du startar {.tip}

Du treng ein MVP der historiene verkar, frå [Bygg
MVP-en](../bygg_mvp/bygg_mvp_nn).


# Steg 1: Lag testlista {.activity}

Ein **test** er ei skildring av kva du gjer, og kva som skal skje. Den beste
kjelda til testar er «Ferdig når» i `PLAN.md`.

## Sjekkliste {.check}

- [ ] Lag ei fil som heiter `TEST.md`, med éin tabell:

  ```markdown
  | Test | Gjer dette | Dette skal skje | OK? |
  |---|---|---|---|
  | Sjå ledige tider | Opne sida | Ledige tider blir viste | |
  | Bestille | Vel 12:30, skriv namn og bestill | 12:30 er ikkje lenger ledig | |
  ```

- [ ] Lag minst éin test for kvart «Ferdig når» i `PLAN.md`.

- [ ] Gå gjennom testane og fyll ut **OK?**. Feilar ein test? Rett feilen med
  løkka frå [Bygg MVP-en](../bygg_mvp/bygg_mvp_nn), og test igjen.


# Steg 2: Test kantane {.activity}

Kundane gjer ting du ikkje tenkjer på. Ein god testar prøver det som kan gå
gale, ikkje berre det som skal verke.

## Sjekkliste {.check}

- [ ] Prøv desse, og legg dei som passar for appen din, til i `TEST.md`:

  | Prøv | Kva bør skje |
  |---|---|
  | Send skjemaet tomt | Melding om kva som manglar |
  | Skriv eit veldig langt namn | Sida ser framleis rett ut |
  | Bestill same tid to gonger | Tida er ikkje lenger ledig |
  | Last sida på nytt | Det som skal hugsast, er der framleis |
  | Trykk på knappen mange gonger fort | Berre éi bestilling |
  | Skriv `<b>hei</b>` i eit felt | Det blir vist som tekst, ikkje som feit skrift |
  | Bruk ein gammal mobil eller treg nettilkopling | Sida verkar, berre litt seinare |

- [ ] Be KI-en om fleire idéar:

  ```
  Lag ei liste med ti ting ein kunde kan gjere som får appen til å feile.
  Ikkje endre koden.
  ```

- [ ] Rett det viktigaste. Skriv resten inn i `PLAN.md` under **Seinare**.

## Tips {.protip}

Testen med `<b>hei</b>` sjekkar om appen viser det brukaren skriv som tekst.
Gjer han ikkje det, kan nokon lure inn kode i appen din. Det er eit vanleg
tryggleikshol.


# Steg 3: Alle skal kunne bruke appen {.activity}

**Universell utforming** betyr at appen kan brukast av flest mogleg, òg dei som
ser dårleg, ikkje kan bruke mus, eller bruker skjermlesar.

## Sjekkliste {.check}

- [ ] Be om ein sjekk:

  ```
  Sjekk appen for universell utforming: kontrast, storleik på knappar,
  alt-tekst på bilete, leietekstar på skjemafelt, og om han kan brukast
  berre med tastatur. Fortel kva du finn før du endrar noko.
  ```

- [ ] Prøv sjølv: kan du bestille berre med **Tab** og **Enter**? Ser du kvar
  du er på sida heile tida?

- [ ] Forstørr sida til 200 prosent med **Ctrl** og **+**. Verkar alt
  framleis?

- [ ] Legg testane til i `TEST.md`.


# Steg 4: Få ein gjennomgang av koden {.activity}

Ein app som verkar, kan likevel vere vanskeleg å endre. I eit programvareteam
les ein annan utviklar koden før han blir teken i bruk. Det blir kalla
**kodegjennomgang** (code review).

## Sjekkliste {.check}

- [ ] Be om ein gjennomgang:

  ```
  Du er ein erfaren seniorutviklar. Gå gjennom koden og sei kva som er
  vanskeleg å lese, gjentatt eller unødvendig. Føreslå det enklaste
  som kan forbetrast. Ikkje endre noko enno.
  ```

- [ ] Vel dei to viktigaste forslaga, og be KI-en gjere dei eitt om gongen.

- [ ] Gå gjennom heile `TEST.md` etter kvar endring. Verkar alt framleis?

- [ ] Jobbar de i gruppe? La ein annan i gruppa lese éi fil og forklare ho
  for deg.


# Steg 5: Test før kvar publisering {.activity}

Ei ny endring kan øydeleggje noko som verka. Difor går du gjennom heile
testlista, ikkje berre det nye, kvar gong du skal publisere.

## Sjekkliste {.check}

- [ ] Skriv øvst i `TEST.md`: «Gå gjennom alle testane før publisering.»

- [ ] Legg til ein regel i `CLAUDE.md`:

  ```markdown
  - Når du har endra noko, sei kva for testar i TEST.md eg bør køyre.
  ```

- [ ] Gå gjennom heile lista no, og lag ein commit med meldinga
  `Alle testar OK`.

## For deg som vil gå vidare {.tip}

Testar kan òg skrivast som kode, så dei blir køyrde av seg sjølv. Be KI-en om
det:

```
Lag automatiske testar for testane i TEST.md som kan køyrast med éin
kommando. Forklar korleis eg køyrer dei, og kva kvar test sjekkar.
```

## Prompter du kan lære av {.protip}

Byt ut det som står i klammer. Legg aldri inn namn, passord eller
personopplysningar om andre. Sjå kvifor promptane verkar, og lag dine eigne.

- **Testar frå krava:**

  ```
  Her er MVP-historiene med «Ferdig når»: [lim inn]. Lag ei testliste
  i ein tabell med kolonnane Test, Gjer dette og Dette skal skje.
  ```

- **Tenk som ein testar:**

  ```
  Du er ein erfaren testar. Kva er dei fem viktigaste tinga å teste i
  denne appen før ekte kundar bruker han? Forklar kvifor.
  ```

- **Forstå ein feil:**

  ```
  Testen [namn] feila. Eg gjorde [dette], og [dette] skjedde. Finn
  årsaka, og forklar ho før du rettar noko.
  ```

## Test deg sjølv {.flag}

- [ ] Kan ein annan person gå gjennom `TEST.md` utan å spørje deg om noko?

## Lagre {.save}

Lag ein commit med meldinga `Testliste og kvalitet`.


## Utfordring {.challenge}

La ein person som ikkje har sett appen før, gjere testane i `TEST.md`. Fann dei
noko du ikkje fann?
