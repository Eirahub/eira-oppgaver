---
title: Arv
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En zombie og en edderkopp er forskjellige, men de har mye til felles. Begge er
**monstre**: de har et navn, de har liv, og de kan ta skade. I Java kan en
klasse **arve** fra en annen. Da får den alt den andre klassen har, og kan legge
til eller endre det som er spesielt for den.

I spill er nesten alt bygd slik. Det finnes en klasse for alle monstre, og hvert
monster arver fra den.

Du lærer snarveien `Ctrl + O`, som hjelper deg å endre metoder du har arvet.

```text
Zombie sier Uuuurgh...
Zombie har 10 liv igjen.
Zombie er beseiret!
Edderkopp sier Ssssss!
Edderkoppen er rolig om dagen og tar halv skade.
Edderkopp har 11 liv igjen.
```


# Steg 1: Klassen Monster {.activity}

## Sjekkliste {.check}

- [ ] Fortsett i prosjektet `klossverden`. Lag en ny pakke
  `klossverden.monstre`.

- [ ] Lag klassen `Monster` i pakken:

  ```java
  package klossverden.monstre;

  public class Monster {
      protected final String navn;
      protected int liv;

      public Monster(String navn, int liv) {
          this.navn = navn;
          this.liv = liv;
      }

      public void taSkade(int skade) {
          liv = liv - skade;
          if (liv <= 0) {
              liv = 0;
              IO.println(navn + " er beseiret!");
          } else {
              IO.println(navn + " har " + liv + " liv igjen.");
          }
      }

      public boolean erBeseiret() {
          return liv == 0;
      }

      public String getNavn() {
          return navn;
      }
  }
  ```

`protected` ligner på `private`, men klasser som arver, kan også se feltet.


# Steg 2: Zombie arver fra Monster {.activity}

## Sjekkliste {.check}

- [ ] Lag klassen `Zombie` i samme pakke:

  ```java
  package klossverden.monstre;

  public class Zombie extends Monster {
      public Zombie() {
          super("Zombie", 20);
      }
  }
  ```

- [ ] Lag en ny `main` i klassen `Main` (eller en ny klasse) og prøv zombien:

  ```java
          Zombie zombie = new Zombie();
          zombie.taSkade(10);
          zombie.taSkade(10);
  ```

## Test prosjektet {.flag}

- [ ] Blir zombien beseiret etter to slag?

`extends Monster` betyr at `Zombie` arver fra `Monster`. Vi har ikke skrevet
`taSkade` i `Zombie`, men zombien kan likevel ta skade. Metoden er arvet.

`super("Zombie", 20)` kaller konstruktøren i `Monster`. Den må alltid stå først
i konstruktøren.


# Steg 3: En abstrakt metode {.activity}

Alle monstre lager en lyd, men hver sin. Monster vet ikke hvilken lyd det lager.
Det vet bare zombien og edderkoppen.

## Sjekkliste {.check}

- [ ] Gjør `Monster` **abstrakt** ved å skrive `abstract` foran `class`:

  ```java
  public abstract class Monster {
  ```

- [ ] Legg til en abstrakt metode i `Monster`, under konstruktøren:

  ```java
      public abstract String lyd();
  ```

- [ ] Nå blir `Zombie` rød. Sett markøren på den røde streken, trykk `Alt +
  Enter` og velg **Implement methods**.

- [ ] IntelliJ lager metoden `lyd` i `Zombie`. La den gi tilbake en lyd:

  ```java
      @Override
      public String lyd() {
          return "Uuuurgh...";
      }
  ```

En abstrakt metode har ingen kode, bare et navn. Den sier: _alle som arver fra
meg, må lage denne metoden_. Du kan ikke lage et objekt av en abstrakt klasse.
Prøv `new Monster("Noe", 10)` og se hva IntelliJ sier.

`@Override` betyr at metoden erstatter en metode fra klassen det arves fra. Den
hjelper Java å finne feil: Skriver du navnet feil, sier Java fra.


# Steg 4: Edderkoppen {.activity}

Edderkopper er rolige om dagen. Da tar de bare halv skade.

## Sjekkliste {.check}

- [ ] Lag klassen `Edderkopp` som arver fra `Monster`. Den har 16 liv, og lyden
  er `"Ssssss!"`.

- [ ] Gi edderkoppen et felt `private final boolean dag;`, og la konstruktøren
  ta imot det:

  ```java
      public Edderkopp(boolean dag) {
          super("Edderkopp", 16);
          this.dag = dag;
      }
  ```

- [ ] Sett markøren inni klassen og trykk `Ctrl + O` (også på Mac). Velg
  `taSkade` og klikk **OK**.

- [ ] IntelliJ lager en metode som bare kaller `super.taSkade(skade)`. Endre den
  slik:

  ```java
      @Override
      public void taSkade(int skade) {
          if (dag) {
              IO.println("Edderkoppen er rolig om dagen og tar halv skade.");
              skade = skade / 2;
          }
          super.taSkade(skade);
      }
  ```

`super.taSkade(skade)` kaller metoden i `Monster`. Edderkoppen gjør noe ekstra
først, og lar så `Monster` gjøre resten.


# Steg 5: En liste med monstre {.activity}

## Sjekkliste {.check}

- [ ] Skriv dette i `main`:

  ```java
          List<Monster> monstre = new ArrayList<>();
          monstre.add(new Zombie());
          monstre.add(new Edderkopp(true));
          monstre.add(new Edderkopp(false));

          for (Monster monster : monstre) {
              IO.println(monster.getNavn() + " sier " + monster.lyd());
              monster.taSkade(10);
              monster.taSkade(10);
          }
  ```

- [ ] Bruk `Alt + Enter` for å importere `List`, `ArrayList` og klassene dine.

## Test prosjektet {.flag}

- [ ] Sier hvert monster sin egen lyd?

- [ ] Hvilke monstre er beseiret til slutt?

Lista er en `List<Monster>`, men den har zombier og edderkopper i seg. Det går
fordi en zombie _er_ et monster. Når du kaller `monster.lyd()`, finner Java selv
ut hvilken `lyd` som skal kjøres.


# Utfordring {.challenge}

## Sjekkliste {.check}

- [ ] Tell hvor mange monstre som er beseiret, og skriv det ut til slutt.

- [ ] Lag et nytt monster, for eksempel `Skjelett`, som skyter piler. Gi
  `Monster` en metode `angrip()` som skjelettet endrer.

- [ ] Lag en klasse `Edderkoppunge` som arver fra `Edderkopp`. Kan en klasse
  arve fra en klasse som selv arver?
