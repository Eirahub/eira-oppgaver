---
title: Grensesnitt og lambdaer
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Når en spiller knuser en kloss, kan mye skje: en logg skrives, spilleren får
poeng, og kanskje dukker det opp en melding om at noen fant en diamant. Det er
upraktisk å skrive alt dette inn i koden som knuser klossen. I stedet lager vi
et **hendelsessystem**: _Når en kloss knuses, kjør dette._

Slik er mange spill og programmer bygd. Andre kan legge til sin egen kode uten å
endre koden som allerede finnes. Du lærer om **grensesnitt**, **lambdaer** og
**metodereferanser**.

Du lærer også snarveien `Shift + F6`, som gir noe nytt navn overalt på én gang.

```text
[logg] Ada knuste jord
Ada har nå 1 poeng.
[logg] Ada knuste diamantmalm
Wow! Ada fant en diamant!
Ada har nå 6 poeng.
```


# Steg 1: Et grensesnitt {.activity}

Et grensesnitt (_interface_) er en avtale. Det sier hvilke metoder en klasse må
ha, men ikke hva de gjør.

## Sjekkliste {.check}

- [ ] Fortsett i prosjektet `klossverden`. Lag en ny pakke
  `klossverden.hendelser`.

- [ ] Høyreklikk på pakken, velg **New** og **Java Class**, og velg
  **Interface** i lista. Kall det `KnuseLytter`.

- [ ] Skriv:

  ```java
  package klossverden.hendelser;

  import klossverden.klosser.Kloss;

  @FunctionalInterface
  public interface KnuseLytter {
      void klossKnust(String spiller, Kloss kloss);
  }
  ```

En **lytter** er noe som venter på at noe skal skje. `KnuseLytter` sier at alle
lyttere må ha en metode `klossKnust`.

`@FunctionalInterface` betyr at grensesnittet har nøyaktig én metode. Det skal
vi utnytte i steg 4.


# Steg 2: Hendelsen {.activity}

## Sjekkliste {.check}

- [ ] Lag klassen `KnuseHendelse` i samme pakke:

  ```java
  package klossverden.hendelser;

  import java.util.ArrayList;
  import java.util.List;

  import klossverden.klosser.Kloss;

  public class KnuseHendelse {
      private final List<KnuseLytter> lyttere = new ArrayList<>();

      public void registrer(KnuseLytter lytter) {
          lyttere.add(lytter);
      }

      public void knus(String spiller, Kloss kloss) {
          for (KnuseLytter lytter : lyttere) {
              lytter.klossKnust(spiller, kloss);
          }
      }
  }
  ```

`KnuseHendelse` har en liste med lyttere. `registrer` legger til en lytter. Når
en kloss knuses, går `knus` gjennom lista og sier fra til alle.

Legg merke til at `KnuseHendelse` ikke vet noe om logger, poeng eller diamanter.
Den vet bare at noen vil ha beskjed.


# Steg 3: En lytter som klasse {.activity}

## Sjekkliste {.check}

- [ ] Lag klassen `Logger` i pakken `klossverden`:

  ```java
  package klossverden;

  import klossverden.hendelser.KnuseLytter;
  import klossverden.klosser.Kloss;

  public class Logger implements KnuseLytter {
      @Override
      public void klossKnust(String spiller, Kloss kloss) {
          IO.println("[logg] " + spiller + " knuste " + kloss.getNavn());
      }
  }
  ```

- [ ] Prøv det i `main`:

  ```java
          KnuseHendelse knust = new KnuseHendelse();
          knust.registrer(new Logger());

          knust.knus("Ada", new Kloss("jord", 1));
  ```

## Test prosjektet {.flag}

- [ ] Skrives det `[logg] Ada knuste jord`?

`implements KnuseLytter` betyr at `Logger` følger avtalen i grensesnittet. Den
har metoden `klossKnust`.


# Steg 4: En lytter som lambda {.activity}

Det er mye skriving å lage en hel klasse for hver lytter. Fordi `KnuseLytter`
bare har én metode, kan vi i stedet skrive en **lambda**: en metode uten navn.

## Sjekkliste {.check}

- [ ] Legg til dette i `main`, før `knust.knus`:

  ```java
          knust.registrer((spiller, kloss) -> {
              if (kloss.getNavn().equals("diamantmalm")) {
                  IO.println("Wow! " + spiller + " fant en diamant!");
              }
          });
  ```

- [ ] Knus en kloss til: `knust.knus("Ada", new Kloss("diamantmalm", 5));`

## Test prosjektet {.flag}

- [ ] Kommer meldingen om diamanten bare når diamantmalmen knuses?

`(spiller, kloss) -> { ... }` er lambdaen. Til venstre for pilen `->` står
parametrene. Til høyre står koden. Java skjønner selv at lambdaen er en
`KnuseLytter`, fordi det er det `registrer` vil ha.


# Steg 5: En metodereferanse {.activity}

Har du allerede en metode som passer, kan du bruke den direkte.

## Sjekkliste {.check}

- [ ] Legg til dette i `Main`, utenfor `main`:

  ```java
      static int poeng = 0;

      static void giPoeng(String spiller, Kloss kloss) {
          poeng = poeng + kloss.getHardhet();
          IO.println(spiller + " har nå " + poeng + " poeng.");
      }
  ```

- [ ] Registrer metoden som lytter i `main`, før `knust.knus`:

  ```java
          knust.registrer(Main::giPoeng);
  ```

## Test prosjektet {.flag}

- [ ] Får Ada poeng for hver kloss?

`Main::giPoeng` er en **metodereferanse**. Den betyr _bruk metoden `giPoeng` i
`Main` som lytter_. Det virker fordi `giPoeng` tar de samme parametrene som
`klossKnust`.


# Steg 6: Gi nytt navn overalt {.activity}

Navnet `knust` på variabelen er ikke så godt. Den inneholder jo en hendelse.

## Sjekkliste {.check}

- [ ] Sett markøren på `knust` i `main`, og trykk `Shift + F6`.

- [ ] Skriv `knuseHendelse` og trykk `Enter`.

## Test prosjektet {.flag}

- [ ] Har alle stedene som brukte `knust`, fått det nye navnet?

## Tips {.protip}

`Shift + F6` virker også på metoder, klasser og pakker. Gir du en klasse nytt
navn, endrer IntelliJ filnavnet og alle `import`-linjene også.


# Utfordring {.challenge}

## Sjekkliste {.check}

- [ ] Lag en hendelse til, `PlasserHendelse`, for når en kloss settes ut.

- [ ] Lag en lytter som teller hvor mange klosser hver spiller har knust. Tips:
  Lag lytteren som en klasse med et felt.

- [ ] Java har ferdige funksjonelle grensesnitt i pakken `java.util.function`.
  `BiConsumer<String, Kloss>` gjør det samme som `KnuseLytter`. Prøv å bytte ut
  `KnuseLytter` med den.
