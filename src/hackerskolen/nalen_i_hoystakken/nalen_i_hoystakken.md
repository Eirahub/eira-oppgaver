---
title: Nåla i høystakken
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Når en bedrift er angrepet, sitter noen og leter i **logger**, lange filer
der serveren skriver ned alt som skjer. Det er tusenvis av linjer, og bare
noen få av dem er spor etter angriperen. I denne oppgaven bruker du
terminalen som en detektiv.

![Terminal med de to første linjene i tilgangsloggen, og en kommando med rør som
teller feil innlogginger per IP-adresse](hoystakken.png)

```
FRA:   K, Byrå 404
TIL:   Rekrutt
EMNE:  Innbrudd i Kiosken

Kunden vår, Kiosken, har hatt innbrudd. Noen logget inn som admin
14. november. Vi har tilgangsloggen. Finn ut hvem det var.

Og en ting til: Jeg har mistet en fil på loftet. Jeg vet bare at
den er nøyaktig 1337 byte.

Hilsen K
```

## Før du starter {.tip}

Gjør [Inn i terminalen](../inn_i_terminalen/inn_i_terminalen) først. Alle
kommandoene skrives fra mappa `hackerlab/oppdrag/2_hoystakken`.


# Steg 1: Finn fila på loftet {.activity}

Loftet har 300 filer. Du kan åpne én og én, eller du kan la `find` lete etter
fila med akkurat riktig størrelse.

## Sjekkliste {.check}

- [ ] Gå til oppdraget og tell filene:

  ```
  cd oppdrag/2_hoystakken
  ls loft | wc -l
  ```

  Tegnet `|` heter **rør**. Det sender svaret fra én kommando inn i den neste.
  Her teller `wc -l` linjene som `ls` skriver ut.

- [ ] Let etter fila som er 1337 byte. `c` betyr byte:

  ```
  find loft -size 1337c
  ```

- [ ] Les fila med `cat`.

## Flagg {.flag}

Registrer flagget med `python3 ../../sjekk.py flagg 'EIRA{...}'`.


# Steg 2: Les loggen {.activity}

## Sjekkliste {.check}

- [ ] Se på de første linjene:

  ```
  head -3 tilgang.log
  ```

  Hver linje er én forespørsel til Kiosken. Først står **IP-adressen** til
  den som spurte, så tiden, så hva de ba om, så **statuskoden**, og til slutt
  hvilket program de brukte.

- [ ] Statuskoden sier hvordan det gikk. `200` betyr OK, `404` betyr ikke
  funnet, og `401` betyr feil passord. Hvor mange feil innlogginger er det?

  ```
  grep " 401 " tilgang.log | wc -l
  ```


# Steg 3: Hvem prøvde flest ganger? {.activity}

Nå kobler du flere kommandoer sammen med rør. Dette er en av de mest brukte
kommandoene i ekte sikkerhetsarbeid.

## Sjekkliste {.check}

- [ ] Hent ut bare IP-adressen fra linjene med feil passord:

  ```
  grep " 401 " tilgang.log | cut -d " " -f 1
  ```

  `cut -d " " -f 1` deler linja på mellomrom og tar første del.

- [ ] Tell hvor mange ganger hver IP-adresse prøvde:

  ```
  grep " 401 " tilgang.log | cut -d " " -f 1 | sort | uniq -c | sort -n
  ```

  `sort` sorterer, `uniq -c` teller like linjer, og `sort -n` sorterer etter
  tall. Den som prøvde flest ganger, står nederst.

- [ ] To IP-adresser prøvde mange ganger. Bare én av dem kom inn. Finn
  linjene der innloggingen lyktes:

  ```
  grep "POST /logg-inn" tilgang.log | grep " 200 "
  ```

- [ ] Hva gjorde inntrengeren rett etterpå? Søk etter IP-adressen du fant,
  og se på de siste linjene:

  ```
  grep "IP-adressen" tilgang.log | tail -3
  ```

## Flagg {.flag}

Flagget er IP-adressen til inntrengeren, skrevet slik: `EIRA{1.2.3.4}`.

## Ekte sak {.protip}

Å prøve tusenvis av passord på rad heter et **brute force-angrep**. Det er
lett å se i loggen, slik du nettopp gjorde. Derfor stenger mange tjenester
kontoen en stund etter noen feil, eller ber om tofaktor. Den andre
IP-adressen var kanskje bare en som hadde glemt passordet. En god detektiv
skiller mellom dem.


# Steg 4: Skriv rapporten {.activity}

## Sjekkliste {.check}

- [ ] Skriv tre setninger til kunden: Hvem brøt seg inn, når, og hvordan?

- [ ] Foreslå ett tiltak som kunne stoppet angrepet.

## Test deg selv {.flag}

- [ ] Hva gjør tegnet `|` i terminalen?

- [ ] Hvorfor er det mistenkelig når samme IP-adresse har 300 feil
  innlogginger?


## Utfordring {.challenge}

Hvilken side i Kiosken ble besøkt flest ganger? Tips: Ta ut del 6 av linja
med `cut`, og tell som i steg 3.
