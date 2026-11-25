---
title: Phishingdetektiv
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Den enkleste måten å hacke noen på er ikke å knekke en maskin. Det er å be
personen om passordet. **Phishing** er falske meldinger som prøver å lure
deg til å trykke på en lenke, logge inn på en falsk side eller sende en kode.
De fleste store angrep starter sånn. I denne oppgaven blir du så flink til å
se dem at du kan lære det bort.

![En mobil med en SMS fra PakkeLynet om toll, der lenken er markert med rødt, og
fire tegn på at meldingen er falsk](phishing.png)

```
FRA:   K, Byrå 404
TIL:   Analytiker
EMNE:  Kroken

Angripere fisker etter folk. Lær deg å se kroken før du biter.

Hilsen K
```


# Steg 1: Tegnene {.activity}

De fleste falske meldinger har noen av disse tegnene:

| Tegn | Eksempel |
|---|---|
| **Hast** | «Innen 2 timer», «i dag», «ellers stenges kontoen» |
| **Frykt eller grådighet** | «Kontoen er hacket», «Du har vunnet», «Gratis skins» |
| **Rar adresse** | `pakkelynet-toll.top` i stedet for firmaets egen adresse |
| **Ber om noe hemmelig** | Passord, kode fra SMS, kortnummer |
| **Uventet** | Du har ikke bestilt noen pakke, eller deltatt i noen konkurranse |
| **Kjent avsender, rar beskjed** | En venn som plutselig trenger en kode, eller penger |

## Sjekkliste {.check}

- [ ] Lær deg å lese en adresse. Det som teller, er det som står rett før
  den første `/` etter `https://`. Hvem eier disse?

  1. `https://eksempelbanken.no/logg-inn`
  2. `https://eksempelbanken.no.sikker-innlogging.com/logg-inn`
  3. `https://logg-inn-eksempelbanken.no/`

## Fasit {.tip}

Bare den første tilhører `eksempelbanken.no`. Den andre tilhører
`sikker-innlogging.com`, uansett hva som står foran. Den tredje er et helt
annet domene som bare ligner.


# Steg 2: Quiz i laben {.activity}

## Sjekkliste {.check}

- [ ] Kjør quizen i laben:

  ```
  python3 sjekk.py phishing
  ```

- [ ] Svar `e` for ekte og `f` for falsk på hver melding. Les forklaringen
  etter hvert svar.

## Flagg {.flag}

Med minst 5 av 6 riktige får du flagget. Registrer det med `sjekk.py`.


# Steg 3: Hva gjør du? {.activity}

## Sjekkliste {.check}

- [ ] Lag en plan sammen med en medelev. Hva gjør dere hvis dere får en
  melding dere er usikre på? Tips:

  - Ikke trykk på lenken. Åpne appen eller nettsiden selv.
  - Ring eller spør personen på en annen måte enn den meldingen kom fra.
  - Gi aldri bort koder du får på SMS. De er nøkkelen til kontoen din.
  - Slå på **tofaktor** på kontoene dine. Da hjelper ikke passordet alene.

- [ ] Har du trykket på en falsk lenke eller gitt fra deg et passord? Bytt
  passordet med en gang, og si fra til en voksen. Det er ikke flaut. Det
  skjer med flinke folk hver dag.

## Ekte sak {.protip}

I flere store angrep har angriperne ringt brukerstøtten til en bedrift og
latet som de var en ansatt som hadde mistet telefonen. Etter noen minutter
hadde de tilgang. Det heter **sosial manipulering**, og den beste
beskyttelsen er rutiner som ikke kan snakkes rundt.

## Test deg selv {.flag}

- [ ] Nevn fire tegn på at en melding er falsk.

- [ ] Hvem eier adressen `https://eksempelskolen.no.innlogging.net/`?


## Utfordring {.challenge}

Lag en plakat eller en kort video for de yngste på skolen om hvordan de
kjenner igjen falske meldinger. Bruk egne, oppdiktede eksempler. Ikke lag
falske innloggingssider. Øvelsen er å kjenne igjen lureriet, ikke å lage det.
