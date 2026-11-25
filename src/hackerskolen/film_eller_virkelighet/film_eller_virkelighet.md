---
title: Film eller virkelighet?
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

På film hacker noen seg inn i Pentagon på 30 sekunder, med grønn tekst som
renner over skjermen og hette over hodet. I virkeligheten er hacking mer som
et puslespill. Du leter, prøver, tar feil, prøver igjen, og så plutselig:
du er inne.

I denne oppgaven ser du på kjente hackerscener fra film, serier og spill, og
finner ut hva som stemmer. Til slutt vet du hva en hacker egentlig gjør, og
hvorfor de beste kaller seg **hvite hatter**.

![Til venstre en filmskjerm med grønne tegn som renner og teksten ACCESS
GRANTED. Til høyre en ekte terminal med noen få kommandoer og «Ingen treff.
Prøver noe annet.»](film.png)

```
FRA:   K, Byrå 404
TIL:   Ny rekrutt
EMNE:  Velkommen

Hei, rekrutt. Før du får ditt første oppdrag, må du glemme alt du
har sett på film. Nesten alt. Noe av det stemmer faktisk.

Finn ut hva.

Hilsen K
```

## Byrå 404 {.tip}

Byrå 404 er et sikkerhetsbyrå som bare finnes i dette kurset. Du er den
nyeste rekrutten. Gjennom kurset får du oppdrag, finner flagg og går opp i
grad fra **Rekrutt** til **Hvit hatt**.


# Steg 1: Ti scener {.activity}

Les scenene, og gjett: er det **film** eller **virkelighet**?

| Nr | Scene | Film eller virkelighet? |
|---|---|---|
| 1 | I filmen *WarGames* (1983) kobler en tenåring seg til en militær datamaskin hjemmefra og starter nesten en krig. | |
| 2 | I *The Matrix Reloaded* (2003) bruker Trinity et skanneprogram og et angrep på en kjent feil for å komme inn i et kraftverk. | |
| 3 | I en krimserie skriver to personer på det samme tastaturet samtidig for å stoppe en hacker raskere. | |
| 4 | En etterforsker sier «zoom inn ... forbedre!», og et uskarpt bilde fra et overvåkingskamera blir knivskarpt. | |
| 5 | I *Jurassic Park* (1993) roper ei jente «Dette er et Unix-system! Jeg kan dette!» foran et 3D-kart over filene. | |
| 6 | En hacker ringer en bedrift, later som hun er fra IT-avdelingen og får passordet til en ansatt. | |
| 7 | I spillet *Watch Dogs* hacker du trafikklys, bankkort og strømnettet i en hel by med mobilen. | |
| 8 | I serien *Mr. Robot* gjemmer en hacker en liten datamaskin i et anlegg for å styre temperaturen. | |
| 9 | En hacker sitter i et mørkt rom med hettegenser og knekker et passord på sekunder ved å taste fort. | |
| 10 | Millioner av kameraer og rutere blir tatt over fordi eierne aldri byttet standardpassordet. | |

## Sjekkliste {.check}

- [ ] Skriv **F** (film) eller **V** (virkelighet) for hver scene. Gjør det
  sammen med en medelev og diskuter.

- [ ] Gi hver scene en realisme-score fra 1 (helt umulig) til 5 (kunne
  skjedd i dag).


# Steg 2: Fasit {.activity}

Sjekk svarene deres. Hvor mange fikk dere?

1. **Delvis virkelighet.** *WarGames* er fiksjon, men filmen gjorde så stort
   inntrykk at USAs president spurte om noe sånt kunne skje. Svaret var ja,
   og i 1984 fikk USA sin første plan for datasikkerhet i staten.
2. **Virkelighet.** Trinity bruker det ekte programmet `nmap` og et angrep på
   en ekte feil som fantes i SSH i 2001. Sikkerhetsfolk elsker denne scenen.
3. **Film.** To personer på ett tastatur gjør det bare dobbelt så rotete. Det
   har blitt et kjent meme.
4. **Film.** Et bilde kan ikke få detaljer som aldri ble tatt opp. KI kan
   gjette på detaljer, men da er det en gjetning, ikke bevis.
5. **Virkelighet, faktisk.** 3D-filkartet var et ekte program for
   Unix-maskiner fra den tiden.
6. **Virkelighet.** Dette heter **sosial manipulering**, og det er en av de
   vanligste måtene å komme inn på. Det er lettere å lure et menneske enn å
   knekke en maskin.
7. **Film.** Ekte systemer er ikke koblet sammen slik, og det tar måneder å
   finne én vei inn i ett system.
8. **Virkelighet.** Små datamaskiner, som en Raspberry Pi, kan gjemmes i et
   nettverk. *Mr. Robot* er kjent for å vise hacking ganske riktig.
9. **Film.** Å taste fort hjelper ikke. Å knekke passord gjør maskinen, og et
   langt passord kan ta lengre tid enn universet har eksistert.
10. **Virkelighet.** I 2016 tok skadevaren **Mirai** over hundretusenvis av
    kameraer og rutere som hadde standardpassord. Med dem slo den ut store
    nettsider.

## Test deg selv {.flag}

- [ ] Hvilken scene overrasket deg mest?

- [ ] Hvorfor tror du filmer viser hacking som raskt og grønt?


# Steg 3: Hva gjør en hacker egentlig? {.activity}

Ordet **hacker** betydde først en som er nysgjerrig og flink til å få
maskiner til å gjøre uventede ting. I dag bruker vi hatter for å skille dem:

| Hatt | Hva de gjør | Lovlig? |
|---|---|---|
| **Hvit hatt** | Finner hull med lov fra eieren, og hjelper med å tette dem | Ja |
| **Grå hatt** | Finner hull uten lov, men sier fra etterpå | Nei, selv om de mener det godt |
| **Svart hatt** | Bryter seg inn for å stjele, ødelegge eller tjene penger | Nei |

En hvit hatt jobber ofte som **pentester**, kort for penetrasjonstester. Det
er en som blir betalt for å angripe en bedrift, og som skriver en rapport om
hva de fant. Mange tjener også penger på **bug bounty**: bedrifter betaler
deg for å finne og melde feil i systemene deres.

En vanlig dag for en hvit hatt:

- leser kode og dokumentasjon for å forstå hvordan noe virker
- prøver noe, ser at det ikke virker, og prøver noe annet
- skriver ned alt, fordi kunden skal få en rapport
- forklarer funnet så kunden forstår hvordan det kan rettes

Det er mindre grønn tekst og mer detektivarbeid.

## Ekte sak {.protip}

I 2019 ble Norsk Hydro rammet av løsepengevirus. 35 000 ansatte i 40 land
måtte gå over til penn og papir. Hydro valgte å ikke betale, og var åpne om
hva som skjedde. Det har blitt et eksempel på hvordan en bedrift bør håndtere
et angrep.


## Utfordring {.challenge}

Finn en film, serie eller et spill med en hackerscene som ikke er med her. Gi
den en realisme-score og forklar hvorfor. Neste gang du ser en hackerscene,
vet du hva som er tull.
