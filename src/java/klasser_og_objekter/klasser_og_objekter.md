---
title: Klasser og objekter
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Så langt har alle programmene dine vært én fil. Store programmer, som spill, har
tusenvis av filer. For å holde orden deler Java koden i **klasser**, og klassene
i **pakker**.

En klasse er en oppskrift. Klassen `Kloss` beskriver hva alle klosser har til
felles: et navn og en hardhet. Hver kloss du lager etter oppskriften, er et
**objekt**. Jord, stein og obsidian er tre objekter av klassen `Kloss`.

I denne oppgaven går du over fra korte programmer til vanlige Java-klasser, slik
de ser ut i ekte prosjekter. Du lærer snarveien `Alt + Insert`, som skriver kode
for deg.

```text
stein har hardhet 3
jord knuses!
stein er for hard. Du trenger styrke 3.
obsidian knuses!
Er steinen knust? false
```


# Steg 1: Et nytt prosjekt med en pakke {.activity}

## Sjekkliste {.check}

- [ ] Lag et nytt prosjekt som heter `klossverden`. Velg **Java**, **Build
  system** **IntelliJ** og JDK `25`. Ta bort krysset for **Add sample code**.

- [ ] Høyreklikk på `src` og velg **New** og **Package**. Skriv `klossverden`.

- [ ] Høyreklikk på pakken `klossverden` og lag en ny **Java Class** som heter
  `Main`.

En pakke er en mappe for klasser. Se at filen `Main.java` ligger i mappa
`src/klossverden`, og at første linje i filen er `package klossverden;`.


# Steg 2: En vanlig main-metode {.activity}

Filen har nå en klasse rundt seg: `public class Main { }`. Inni klassen må
`main` se litt annerledes ut enn før.

## Sjekkliste {.check}

- [ ] Sett markøren inni klassen, skriv `psvm` og trykk `Tab`. IntelliJ skriver
  `main`-metoden for deg.

- [ ] Skriv en `IO.println` inni `main`, så klassen blir slik:

  ```java
  package klossverden;

  public class Main {
      public static void main(String[] args) {
          IO.println("Velkommen til klossverden!");
      }
  }
  ```

- [ ] Kjør programmet med den grønne trekanten.

Dette er de nye ordene:

- `public` betyr at alle andre klasser kan bruke dette.

- `static` betyr at metoden hører til klassen, ikke til et objekt. Det lærer du
  mer om senere.

- `String[] args` er det programmet får med seg når det startes. Vi bruker det
  ikke, men Java vil ha det med.

## Tips {.tip}

`psvm` står for _public static void main_.

Hver klasse har sin egen fil, og filen må hete det samme som klassen. Klassen
`Main` ligger i `Main.java`.


# Steg 3: Klassen Kloss {.activity}

Klossene skal ligge i en egen pakke.

## Sjekkliste {.check}

- [ ] Høyreklikk på pakken `klossverden` og velg **New** og **Package**. Skriv
  inn slik at det står `klossverden.klosser`, og trykk `Enter`.

- [ ] Lag en ny **Java Class** som heter `Kloss` i pakken `klosser`.

- [ ] Skriv inn to **felt** i klassen:

  ```java
  package klossverden.klosser;

  public class Kloss {
      private final String navn;
      private final int hardhet;
  }
  ```

Et felt er en variabel som hører til objektet. Hver kloss har sitt eget navn og
sin egen hardhet.

`private` betyr at bare klassen `Kloss` selv kan se feltet. `final` betyr at det
ikke kan endres etter at klossen er laget.

Feltene er røde. Java klager fordi de aldri får en verdi. Det fikser vi i neste
steg.


# Steg 4: La IntelliJ skrive koden {.activity}

En **konstruktør** er en spesiell metode som kjøres når et objekt lages. Den gir
feltene verdier.

## Sjekkliste {.check}

- [ ] Sett markøren inni klassen, under feltene.

- [ ] Trykk `Alt + Insert` (på Mac `Cmd + N`). Velg **Constructor**, merk begge
  feltene og klikk **OK**.

- [ ] Trykk `Alt + Insert` igjen. Velg **Getter**, merk begge feltene og klikk
  **OK**.

Nå ser klassen omtrent slik ut:

```java
public class Kloss {
    private final String navn;
    private final int hardhet;

    public Kloss(String navn, int hardhet) {
        this.navn = navn;
        this.hardhet = hardhet;
    }

    public String getNavn() {
        return navn;
    }

    public int getHardhet() {
        return hardhet;
    }
}
```

Konstruktøren heter det samme som klassen og har ingen returtype. `this.navn` er
feltet, og `navn` er parameteren. `this` betyr _dette objektet_.

`getNavn` og `getHardhet` kalles **gettere**. Feltene er `private`, så andre
klasser må spørre klossen om verdiene.


# Steg 5: Lag objekter {.activity}

## Sjekkliste {.check}

- [ ] Gå til `Main` og skriv dette inni `main`:

  ```java
          Kloss jord = new Kloss("jord", 1);
          Kloss stein = new Kloss("stein", 3);
          IO.println(stein.getNavn() + " har hardhet " + stein.getHardhet());
  ```

- [ ] `Kloss` blir rødt. Sett markøren på det og trykk `Alt + Enter`. Velg
  **Import class**.

- [ ] Se øverst i filen. Der står det nå `import klossverden.klosser.Kloss;`.

- [ ] Kjør programmet.

## Test prosjektet {.flag}

- [ ] Står det `stein har hardhet 3`?

`new Kloss("stein", 3)` lager et nytt objekt og kjører konstruktøren. Klassen
`Main` ligger i en annen pakke enn `Kloss`. Derfor må den **importere** klassen.

- [ ] Prøv å skrive `stein.hardhet = 0;` i `main`. Hva sier IntelliJ? Fjern
  linjen igjen.


# Steg 6: Klosser som kan knuses {.activity}

Objekter kan også ha metoder som gjør noe.

## Sjekkliste {.check}

- [ ] Legg til et felt til i `Kloss`: `private boolean knust;`. Det er ikke
  `final`, for det skal kunne endres.

- [ ] Legg til en metode i `Kloss`:

  ```java
      public void slag(int styrke) {
          if (styrke >= hardhet) {
              knust = true;
              IO.println(navn + " knuses!");
          } else {
              IO.println(navn + " er for hard. Du trenger styrke " + hardhet
                      + ".");
          }
      }
  ```

- [ ] Lag en getter for `knust` med `Alt + Insert`. IntelliJ kaller den
  `isKnust`. Gi den gjerne navnet `erKnust` i stedet.

- [ ] Prøv metodene fra `main`:

  ```java
          jord.slag(2);
          stein.slag(2);
          IO.println("Er steinen knust? " + stein.erKnust());
  ```

## Test prosjektet {.flag}

- [ ] Knuses jorda, men ikke steinen?

Hvert objekt har sine egne felt. Når du slår på jorda, blir bare jorda knust.


# Utfordring {.challenge}

## Sjekkliste {.check}

- [ ] Lag en kloss `obsidian` med hardhet 9, og prøv å knuse den.

- [ ] Gi `Kloss` et felt `String verktoy` som sier hva du trenger for å knuse
  den, for eksempel `"hakke"` eller `"spade"`.

- [ ] Lag en klasse `Spiller` i en ny pakke `klossverden.spiller`. Gi den et
  navn og en styrke, og en metode `slaa(Kloss kloss)`.

- [ ] Trykk `Alt + Insert` i `Kloss` og velg **toString()**. Hva skjer nå når du
  skriver `IO.println(stein)`?
