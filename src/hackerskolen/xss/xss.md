---
title: XSS i kommentarfeltet
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Hva om du kunne få din egen kode til å kjøre i nettleseren til **alle** som
besøker en nettside? Det heter **XSS** (cross-site scripting). En gang spredte
et XSS-hull seg til over en million brukere av et sosialt nettverk på under
ett døgn. I denne oppgaven får du kommentarfeltet i Kiosken til å kjøre kode,
og stjeler øktnøkkelen til en innlogget bruker. Så tetter du hullet.

![Skjermbilde av kommentarene i Kiosken der en kommentar med HTML viser fet,
skrå og stor rød tekst](xss.png)

```
FRA:   K, Byrå 404
TIL:   Pentester
EMNE:  Kommentarene

Kiosken viser kommentarer fra kunder. Hver besøkende ser dem. Hva
om en kommentar ikke bare er tekst?

Hilsen K
```

## Før du starter {.tip}

Start Kiosken med `python3 kiosk.py`, og logg inn som `kari`. Passordet
knakk du i [Knekk passord](../knekk_passord/knekk_passord).


# Steg 1: HTML i en kommentar {.activity}

## Sjekkliste {.check}

- [ ] Gå til **Kommentarer**. Skriv en kommentar med HTML:

  ```html
  Dette er <b>fet</b> og <i>skrå</i>
  ```

  Blir teksten fet og skrå? Da setter Kiosken kommentaren rett inn i siden,
  som HTML.

- [ ] Prøv et bilde:

  ```html
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Example.png">
  ```

  Nå bestemmer du hva som vises på Kioskens side.


# Steg 2: Kjør kode {.activity}

Hvis HTML virker, virker kanskje JavaScript også.

## Sjekkliste {.check}

- [ ] Skriv denne kommentaren:

  ```html
  <script>alert("Hacket!")</script>
  ```

- [ ] Last siden på nytt. Popup-vinduet kommer hver gang, for alle som ser
  siden.

- [ ] Nå det farlige. Nettleseren husker at du er logget inn med en
  **informasjonskapsel** (cookie), en øktnøkkel. Skriv:

  ```html
  <script>alert(document.cookie)</script>
  ```

## Flagg {.flag}

Øktnøkkelen starter med et flagg. Registrer bare delen fra `EIRA{`
til og med `}`.

## Tips {.protip}

En ekte angriper ville ikke vist nøkkelen i et vindu. Koden ville sendt den
til angriperens egen server, i det stille. Da kan angriperen logge inn som
deg, uten passord.


# Steg 3: Tett hullet {.activity}

To ting må til: kommentarer skal vises som **tekst**, og øktnøkkelen skal
være utenfor rekkevidde for JavaScript.

## Sjekkliste {.check}

- [ ] Stopp Kiosken med **Ctrl+C**. Finn linja i `kommentarer` som setter inn
  kommentaren:

  ```python
  liste += f"<p><b>{navn}</b>: {tekst}</p>"
  ```

- [ ] Bruk `html.escape`, som gjør `<` om til `&lt;` og så videre, så
  nettleseren viser tegnene i stedet for å tolke dem:

  ```python
  liste += f"<p><b>{html.escape(navn)}</b>: {html.escape(tekst)}</p>"
  ```

- [ ] Finn linja i `logg_inn` som lager informasjonskapselen. Legg til
  `HttpOnly` til slutt:

  ```python
  cookie=f"okt={okt}; Path=/; SameSite=Lax; HttpOnly")
  ```

  Da kan ikke JavaScript lese den.

- [ ] Start Kiosken igjen, last kommentarsiden og sjekk forsvaret:

  ```
  python3 sjekk.py blått
  ```

## Tips {.protip}

De gamle kommentarene ligger fortsatt i databasen, men vises nå som tekst.
Vil du starte med en tom database, kjør `python3 kiosk.py --nullstill`.

## Ekte sak {.protip}

I 2005 skrev en ung utvikler en XSS-orm på MySpace, som var det største
sosiale nettverket da. Den la til teksten «but most of all, samy is my hero»
på profilen til alle som så en infisert profil. Over en million profiler ble
smittet på et døgn. Han ble dømt, og jobber i dag med sikkerhet.

## Test deg selv {.flag}

- [ ] Hva er forskjellen på å vise en kommentar som tekst og som HTML?

- [ ] Hva gjør `HttpOnly`?


## Utfordring {.challenge}

Finn ut hva **Content-Security-Policy** er. Få Kiosken til å sende en slik
regel som stopper alle skript som ikke kommer fra Kiosken selv. `sjekk.py
blått` gir deg en bonus når den finner den.
