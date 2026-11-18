---
title: Et register for klosser
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Et stort spill har hundrevis av klosser. Spillet må kunne finne hver av dem ut
fra en kort id, for eksempel `minmod:rubin`. Derfor legges alle klossene i et
**register** når spillet starter. Når du lager en utvidelse til et spill, er det
ofte det første du gjør: du registrerer de nye klossene dine.

I denne oppgaven lager du ditt eget klossregister. Du lærer om `HashMap`,
`enum`, `static` og konstanter.

Du lærer også snarveien `Shift Shift`: trykk `Shift` to ganger for å søke etter
hva som helst.

```text
Registrerer klosser for minmod
minmod:rubin -> Rubin (SJELDEN)
minmod:stjernemalm -> Stjernemalm (EPISK)
minmod:solstein -> Solstein (VANLIG)
Samme objekt? true
```


# Steg 1: Hvor sjelden er klossen? {.activity}

En kloss kan være vanlig, sjelden eller episk. Det er bare tre mulige verdier.
Til slikt bruker Java en **enum**.

## Sjekkliste {.check}

- [ ] Fortsett i prosjektet `klossverden`. Høyreklikk på pakken
  `klossverden.klosser`, velg **New** og **Java Class**, og velg **Enum**. Kall
  den `Sjeldenhet`.

- [ ] Skriv:

  ```java
  package klossverden.klosser;

  public enum Sjeldenhet {
      VANLIG,
      SJELDEN,
      EPISK
  }
  ```

En enum er en type med en fast liste av verdier. En variabel av typen
`Sjeldenhet` kan bare være `Sjeldenhet.VANLIG`, `Sjeldenhet.SJELDEN` eller
`Sjeldenhet.EPISK`. Skriver du feil, sier Java fra med en gang. Med en `String`
kunne du skrevet `"sjeldn"` uten at noen merket det.


# Steg 2: Finn klassen Kloss raskt {.activity}

## Sjekkliste {.check}

- [ ] Trykk `Shift` to ganger. Skriv `Kloss` og trykk `Enter`.

- [ ] Legg til et felt i `Kloss`: `private final Sjeldenhet sjeldenhet;`

- [ ] Legg til en parameter i konstruktøren, og en getter:

  ```java
      public Kloss(String navn, int hardhet, Sjeldenhet sjeldenhet) {
          this.navn = navn;
          this.hardhet = hardhet;
          this.sjeldenhet = sjeldenhet;
      }

      public Sjeldenhet getSjeldenhet() {
          return sjeldenhet;
      }
  ```

- [ ] Nå blir det rødt der du lager klosser i de andre klassene. Legg til en
  sjeldenhet der, for eksempel `new Kloss("jord", 1, Sjeldenhet.VANLIG)`.

## Tips {.protip}

`Shift Shift` finner klasser, filer, metoder og til og med menyvalg i IntelliJ.
Prøv å søke etter `reformat`.


# Steg 3: Registeret {.activity}

Registeret skal finne en kloss ut fra id-en. Til det bruker vi en `HashMap`. Den
kobler en **nøkkel** til en **verdi**, akkurat som en ordbok kobler et ord til
en forklaring.

## Sjekkliste {.check}

- [ ] Lag en ny pakke `klossverden.register` og klassen `Register` i den:

  ```java
  package klossverden.register;

  import java.util.HashMap;
  import java.util.Map;

  import klossverden.klosser.Kloss;

  public class Register {
      private static final Map<String, Kloss> KLOSSER = new HashMap<>();

      public static Kloss register(String id, Kloss kloss) {
          KLOSSER.put(id, kloss);
          return kloss;
      }

      public static Kloss hent(String id) {
          return KLOSSER.get(id);
      }

      public static Map<String, Kloss> alle() {
          return KLOSSER;
      }
  }
  ```

`Map<String, Kloss>` betyr at nøklene er tekster og verdiene er klosser. `put`
legger inn en kloss med en nøkkel, og `get` henter den igjen.

`static` betyr at noe hører til klassen, ikke til et objekt. Det finnes bare ett
`KLOSSER`, og du bruker det som `Register.hent("...")` uten å lage noe objekt
med `new`.

Navn med bare store bokstaver, som `KLOSSER`, er en vane i Java for
**konstanter**: `static final`-felt som aldri skal byttes ut.


# Steg 4: Registrer dine egne klosser {.activity}

## Sjekkliste {.check}

- [ ] Lag klassen `ModKlosser` i pakken `klossverden.klosser`:

  ```java
  package klossverden.klosser;

  import klossverden.register.Register;

  public class ModKlosser {
      public static final String MOD_ID = "minmod";

      public static final Kloss RUBIN = register("rubin",
              new Kloss("Rubin", 5, Sjeldenhet.SJELDEN));
      public static final Kloss SOLSTEIN = register("solstein",
              new Kloss("Solstein", 3, Sjeldenhet.VANLIG));

      private static Kloss register(String navn, Kloss kloss) {
          return Register.register(MOD_ID + ":" + navn, kloss);
      }

      public static void init() {
          IO.println("Registrerer klosser for " + MOD_ID);
      }
  }
  ```

- [ ] Skriv dette i `main`:

  ```java
          ModKlosser.init();

          for (String id : Register.alle().keySet()) {
              Kloss kloss = Register.hent(id);
              IO.println(id + " -> " + kloss.getNavn() + " ("
                      + kloss.getSjeldenhet() + ")");
          }

          Kloss rubin = Register.hent("minmod:rubin");
          IO.println("Samme objekt? " + (rubin == ModKlosser.RUBIN));
  ```

## Test prosjektet {.flag}

- [ ] Skrives begge klossene ut med id-en sin?

- [ ] Står det `Samme objekt? true`?

Hver kloss får en id med to deler: `minmod` og `rubin`. Første del sier hvem som
har laget klossen. Da kan to utvidelser begge ha en kloss som heter `rubin` uten
å krasje.

Hvorfor kaller vi `ModKlosser.init()`, når metoden nesten ikke gjør noe? Java
lager ikke de statiske feltene i en klasse før klassen brukes første gang. Kall
på `init()` sørger for at alle klossene blir registrert med en gang.

- [ ] Prøv å ta bort `ModKlosser.init();`. Hva skrives ut nå?


# Steg 5: Stopp doble id-er {.activity}

## Sjekkliste {.check}

- [ ] Legg til denne sjekken først i `register` i klassen `Register`:

  ```java
          if (KLOSSER.containsKey(id)) {
              throw new IllegalStateException("Id-en er brukt fra før: " + id);
          }
  ```

- [ ] Registrer `"rubin"` to ganger i `ModKlosser`, og kjør programmet.

## Test prosjektet {.flag}

- [ ] Stopper programmet med en feilmelding om at id-en er brukt?

- [ ] Ta bort den doble registreringen igjen.

`throw` stopper programmet med en feil. Det er bedre å stoppe med en gang enn å
la en kloss forsvinne uten at noen merker det.


# Steg 6: Bruk enumen {.activity}

## Sjekkliste {.check}

- [ ] Legg til en episk kloss i `ModKlosser`:

  ```java
      public static final Kloss STJERNEMALM = register("stjernemalm",
              new Kloss("Stjernemalm", 9, Sjeldenhet.EPISK));
  ```

- [ ] Velg en farge ut fra sjeldenheten i `main`:

  ```java
          switch (ModKlosser.STJERNEMALM.getSjeldenhet()) {
              case VANLIG -> IO.println("Grå tekst");
              case SJELDEN -> IO.println("Blå tekst");
              case EPISK -> IO.println("Lilla tekst");
          }
  ```

## Test prosjektet {.flag}

- [ ] Står det `Lilla tekst`?

`switch` velger mellom mange muligheter. Den er ryddigere enn mange `if` og
`else if` etter hverandre.


# Utfordring {.challenge}

## Sjekkliste {.check}

- [ ] Lag et register for monstre også. Kan du gjenbruke koden i `Register`?
  Tips: Les om _generics_, `Register<T>`.

- [ ] Skriv ut alle klossene sortert etter id.

- [ ] Gi `Sjeldenhet` et felt med fargen, så du slipper `switch`. En enum kan ha
  felt og konstruktør, akkurat som en klasse.
