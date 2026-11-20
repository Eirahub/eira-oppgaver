---
title: Oppskrift
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Mye av Minecraft er ikke Java-kode, men **data**: JSON-filer som sier hvordan
ting skal være. Oppskrifter, hva klosser dropper, og hvor malm finnes, står i
slike filer. En mod kan legge ved sine egne.

I denne oppgaven lager du en oppskrift der 9 jord i et 3 x 3-rutenett blir til 1
diamant. Du skriver ingen ny Java. Det er juks, men det er din mod.

<!-- BILDE: Arbeidsbenken med jord i alle ni rutene og en diamant i
resultatruta. -->


# Steg 1: Mappene for data {.activity}

Alle data-filer ligger i `src/main/resources/data/<navnerom>/`. Navnerommet er
mod-id-en, `rubinmod`. Inne i den har hver type data sin egen mappe.

## Sjekkliste {.check}

- [ ] Høyreklikk på `src/main/resources` og velg **New** og **Directory**. Skriv
  `data/rubinmod/recipe` og trykk Enter. IntelliJ lager alle tre mappene på en
  gang.

Mappa heter `recipe`, i entall. Eldre veiledninger på nettet bruker `recipes`.
Det virket i gamle versjoner, men ikke i Minecraft 26.3. Skriver du feil navn på
mappa, skjer det ingenting, og spillet sier ikke fra.


# Steg 2: Skriv oppskriften {.activity}

## Sjekkliste {.check}

- [ ] Høyreklikk på mappa `recipe`, velg **New** og **File**, og kall fila
  `diamant_fra_jord.json`.

- [ ] Skriv inn oppskriften:

  ```json
  {
    "type": "minecraft:crafting_shaped",
    "category": "misc",
    "key": {
      "#": "minecraft:dirt"
    },
    "pattern": [
      "###",
      "###",
      "###"
    ],
    "result": {
      "id": "minecraft:diamond"
    }
  }
  ```

Slik leser du fila:

- `crafting_shaped` betyr at mønsteret i rutenettet betyr noe. Ingrediensene må
  ligge akkurat slik.

- `pattern` er rutenettet, tre linjer med tre tegn. Hvert tegn er en rute.

- `key` sier hva tegnene betyr. Her betyr `#` jord, `minecraft:dirt`.

- `result` er det du får, en diamant.

- `category` bestemmer hvor oppskriften står i oppskriftsboka.

Filnavnet blir id-en til oppskriften: `rubinmod:diamant_fra_jord`.

## Tips {.tip}

Alt i Minecraft har en id på formen `navnerom:navn`. Ting fra selve spillet har
navnerommet `minecraft`. Ting fra moden din får `rubinmod`. Id-ene til alle
klosser og items finner du ved å trykke `F3 + H` i spillet. Da vises id-en når
du holder musa over noe i inventaret.


# Steg 3: Prøv oppskriften {.activity}

## Sjekkliste {.check}

- [ ] Start spillet med **runClient** og åpne verdenen din.

- [ ] Gå i overlevelsesmodus med `/gamemode survival`, eller bruk kreativ modus
  og hent jord og en arbeidsbenk.

- [ ] Legg jord i alle ni rutene på arbeidsbenken.

## Test prosjektet {.flag}

- [ ] Får du en diamant?

- [ ] Hva skjer hvis du bare legger jord i åtte ruter?

## Tips {.protip}

Får du ingen diamant, se etter en feilmelding med `diamant_fra_jord` i loggen.
Vanlige feil er et komma for mye eller for lite, eller feil navn på mappa.
IntelliJ markerer ofte feil i JSON med rød strek.

## Utfordring {.challenge}

- [ ] Endre oppskriften så du får 3 diamanter. Legg til `"count": 3` i `result`.

- [ ] Lag en ny fil med en oppskrift der mønsteret er et kryss av grus
  (`minecraft:gravel`), og resultatet er noe du liker.

- [ ] Finn ut hva `crafting_shapeless` gjør. Den bruker `ingredients` i stedet
  for `pattern` og `key`. Lag en oppskrift der én blomst blir til 64 kaker.
