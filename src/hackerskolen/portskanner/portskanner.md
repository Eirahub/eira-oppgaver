---
title: Din egen portskanner
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

En datamaskin på nett har 65 535 **porter**, som dører inn til ulike
tjenester. En nettside bruker vanligvis port 80 eller 443, og SSH bruker port
22. Det første en angriper gjør, er å finne ut hvilke dører som står åpne. Det
heter å **skanne**. I denne oppgaven skriver du din egen portskanner i Python,
og finner en hemmelig tjeneste.

![Terminal der skanner.py finner to åpne porter, og den hemmelige tjenesten
svarer med et flagg](portskanner.png)

```
FRA:   K, Byrå 404
TIL:   Analytiker
EMNE:  Den hemmelige tjenesten

Det kjører en hemmelig tjeneste på maskinen din. Jeg vet ikke hvilken
port den bruker. Finn den, og hør hva den sier.

Hilsen K
```

## Før du starter {.tip}

Skann **bare din egen maskin**, adressen `127.0.0.1`. Å skanne andres
maskiner eller skolens nett uten lov er ikke greit, og kan være ulovlig.


# Steg 1: IP-adresser og porter {.activity}

En **IP-adresse** er adressen til en maskin, som `127.0.0.1`. En **port** er
nummeret på døra. Sammen sier de hvor du skal: `127.0.0.1:8080` er port 8080 på
din egen maskin.

| Port | Vanlig tjeneste |
|---|---|
| 22 | SSH, innlogging på en annen maskin |
| 80 | Nettsider uten kryptering (HTTP) |
| 443 | Nettsider med kryptering (HTTPS) |
| 3306, 5432 | Databaser. Bør aldri stå åpne mot internett |
| 8080 | Ofte en nettside under utvikling. Kiosken bruker denne |

## Sjekkliste {.check}

- [ ] Start den hemmelige tjenesten i en terminal:

  ```
  python3 hemmelig_tjeneste.py
  ```

  La den stå og kjøre. Åpne en **ny** terminal for resten av oppgaven.


# Steg 2: Bank på én dør {.activity}

## Sjekkliste {.check}

- [ ] Lag fila `skanner.py` i mappa `hackerlab`:

  ```python
  import socket

  def er_apen(port):
      s = socket.socket()
      s.settimeout(0.2)
      svar = s.connect_ex(("127.0.0.1", port))
      s.close()
      return svar == 0

  print(er_apen(8080))
  ```

  `connect_ex` prøver å koble til, og gir `0` hvis døra er åpen.

- [ ] Kjør den. Står det `False`? Start Kiosken med `python3 kiosk.py` i en
  tredje terminal, og prøv igjen.


# Steg 3: Bank på alle dørene {.activity}

## Sjekkliste {.check}

- [ ] Bytt ut den siste linja med en løkke over portene fra 1 til 9999:

  ```python
  for port in range(1, 10000):
      if er_apen(port):
          print("Port", port, "er åpen")
  ```

- [ ] Kjør skanneren. Hvilke porter er åpne? Noen kan være tjenester som
  allerede kjører på maskinen din.

- [ ] Hør hva tjenestene sier. Mange tjenester sier hvem de er når du kobler
  til. Det heter en **banner**. Legg til en funksjon:

  ```python
  def hils(port):
      s = socket.socket()
      s.settimeout(1)
      s.connect(("127.0.0.1", port))
      try:
          print(port, s.recv(200).decode(errors="replace"))
      except socket.timeout:
          print(port, "sier ingenting")
      s.close()
  ```

  Kall `hils(port)` for hver åpen port.

## Flagg {.flag}

Den hemmelige tjenesten sier flagget når du kobler til. Registrer det med
`sjekk.py`.

## Tips {.protip}

Det profesjonelle verktøyet for dette heter **nmap**. Det er det Trinity bruker
i *The Matrix Reloaded*. Din skanner gjør det samme som nmap, bare enklere.


# Steg 4: Hva betyr det for appen din? {.activity}

Roboter skanner hele internett hele tiden. En ny server blir skannet i løpet
av minutter. Hver åpen port er en dør angripere kan prøve.

## Sjekkliste {.check}

- [ ] Hvilke tjenester bør stå åpne på en server med en nettside? Hvilke bør
  bare kunne nås fra maskinen selv?

- [ ] Kiosken lytter bare på `127.0.0.1`. Finn linja i `kiosk.py` som sier det.
  Hva ville skjedd hvis det sto `0.0.0.0`?

## Ekte sak {.protip}

Tusenvis av databaser har blitt funnet åpne på internett uten passord,
fordi noen glemte å stenge porten. Angripere har slettet dataene og krevd
løsepenger for å gi dem tilbake.

## Test deg selv {.flag}

- [ ] Hva er forskjellen på en IP-adresse og en port?

- [ ] Hvorfor skal du bare skanne din egen maskin?


## Utfordring {.challenge}

Skanneren er treg fordi den venter på én port om gangen. Finn ut hva
`concurrent.futures.ThreadPoolExecutor` gjør, og bruk den til å skanne mange
porter samtidig. Hvor mye raskere blir den?
