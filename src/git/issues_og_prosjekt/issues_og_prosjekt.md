---
title: Planlegg med issues og prosjekttavle
author: Tor Einar Enne
language: nb
---


# Introduksjon {.intro}

Et prosjekt har alltid flere ting som skal gjøres enn det er tid til. På GitHub
skriver du hver ting som en **sak** (issue), med tittel, beskrivelse og hvem
som har ansvaret. Sakene samler du på en **prosjekttavle** (project board) med
kolonner for det som skal gjøres, det som er i gang, og det som er ferdig. Da
ser alle på laget hva som skjer, uten å spørre.

![Illustrasjon av en prosjekttavle med tre kolonner, Todo, In Progress og Done,
med lapper som flyttes fra venstre mot høyre](tavle.png)

## Før du starter {.tip}

Du trenger repoet `gjett_tallet` fra [Del koden på
GitHub](../del_pa_github/del_pa_github). Oppgaven kan gjøres alene, men er
morsommere i par, som i [Samarbeid med pull request](../samarbeid/samarbeid).
Du må være 13 år eller eldre for å ha en konto på GitHub.


# Steg 1: Lag en sak {.activity}

En god sak sier hva som skal gjøres, hvorfor, og når det er ferdig.

## Sjekkliste {.check}

- [ ] Åpne repoet på github.com, gå til fanen **Issues** og trykk **New
  issue**.

- [ ] Skriv en kort tittel som sier hva som skal gjøres, for eksempel `Spør om
  spilleren vil spille igjen`.

- [ ] Skriv beskrivelsen:

  ```markdown
  Når spilleren har gjettet riktig, slutter spillet. Mange vil spille
  en gang til.

  Ferdig når:
  - [ ] Spillet spør «Vil du spille igjen? (j/n)»
  - [ ] Svarer spilleren j, starter et nytt spill med et nytt tall
  ```

- [ ] Trykk **Create** (noen steder heter knappen **Submit new issue**).
  Saken får et nummer, for eksempel `#1`.

- [ ] Lag to saker til, for eksempel `Vis antall forsøk til slutt` og `Gi
  beskjed hvis spilleren skriver noe som ikke er et tall`.

## Tips {.protip}

En sak skal handle om én ting. Er den for stor til å bli ferdig på én økt, del
den opp i flere.


# Steg 2: Merkelapper og ansvar {.activity}

## Sjekkliste {.check}

- [ ] Åpne en sak. Til høyre finner du **Labels**. Gi den merkelappen (label)
  `enhancement` hvis det er noe nytt, eller `bug` hvis noe er feil.

- [ ] Under **Assignees** velger du hvem som har ansvaret. Det heter tildeling
  (assignees). Jobber dere i par, tar dere én sak hver.

- [ ] Skriv en kommentar nederst i saken, for eksempel et spørsmål om hvordan
  det skal virke. Kommentarer er der dere avklarer ting, så det ikke blir
  glemt.


# Steg 3: Lag en prosjekttavle {.activity}

## Sjekkliste {.check}

- [ ] Klikk på profilbildet ditt øverst til høyre, velg **Projects** og trykk
  **New project**. Under **Start from scratch** velger du **Board**.

- [ ] Gi prosjektet et navn, for eksempel `Gjett tallet`. Tavla har tre
  kolonner: **Todo**, **In Progress** og **Done**. Velger du en mal i stedet
  for **Board**, får tavla andre kolonner.

- [ ] Legg til de tre sakene: trykk **+** nederst i **Todo**, skriv `#`, velg
  repoet `gjett_tallet` og så saken.

- [ ] Dra den saken du skal jobbe med nå, til **In Progress**.

## Tips {.protip}

Ha få lapper i **In Progress**, helst én per person. Da blir ting ferdige i
stedet for å bli halvferdige.


# Steg 4: Lukk saken med en pull request {.activity}

## Sjekkliste {.check}

- [ ] Lag en gren (branch) med et navn som `feature/1-spill-igjen`, og løs
  saken i VS Code, som i [Prøv en idé på en gren](../grener/grener).

- [ ] Lag en pull request. Skriv `Closes #1` i beskrivelsen, med nummeret til
  saken.

- [ ] Se på saken. Pull requesten er nevnt i saken.

- [ ] Flett inn pull requesten.

## Test prosjektet {.flag}

- [ ] Er saken lukket av seg selv?

- [ ] Har lappen flyttet seg til **Done** på tavla?

- [ ] Kryss av punktene under «Ferdig når» i saken hvis du ikke allerede har
  gjort det.


# Steg 5: Fra stort til smått {.activity}

Store ønsker må deles opp før noen kan begynne å kode. Mange team deler opp i
fire nivåer:

- Et **epos** (epic) er et stort mål, for eksempel `Gjett tallet blir et
  ordentlig spill`.
- En **funksjon** (feature) er en del av eposet, for eksempel `Flere runder`.
- En **brukerhistorie** (user story) sier hva én bruker vil, og hvorfor: «Som
  spiller vil jeg spille en runde til uten å starte programmet på nytt, så jeg
  kan prøve å slå min egen rekord.»
- En **oppgave** (task) er noe som kan gjøres på én økt, for eksempel `Lag en
  løkke rundt hele spillet`.

En brukerhistorie trenger **akseptansekriterier** (acceptance criteria). De
sier nøyaktig når historien er ferdig, og skrives slik: «Gitt ..., når ..., så
...».

På GitHub blir hvert nivå en sak, og de mindre sakene legges under de større
som **underordnede saker** (sub-issues).

## Sjekkliste {.check}

- [ ] Lag en sak med tittelen `Gjett tallet blir et ordentlig spill`. Det er
  eposet.

- [ ] Nederst i eposet, under beskrivelsen, trykk **Create sub-issue**. Gi den
  tittelen `Flere runder`. Det er funksjonen.

- [ ] Åpne `Flere runder` og lag en underordnet sak til. Det er
  brukerhistorien. Gi den tittelen `Spill en runde til`, og skriv:

  ```markdown
  Som spiller vil jeg spille en runde til uten å starte programmet på
  nytt, så jeg kan prøve å slå min egen rekord.

  Akseptansekriterier:
  - [ ] Gitt at jeg har gjettet riktig, når spillet spør om jeg vil
    spille igjen og jeg svarer j, så trekkes et nytt tall.
  - [ ] Gitt at jeg har gjettet riktig, når jeg svarer n, så skriver
    spillet «Takk for spillet» og avslutter.
  ```

- [ ] Har du allerede saken `Spør om spilleren vil spille igjen` fra steg 1,
  kan du legge den under historien i stedet. Trykk på pila ved siden av
  **Create sub-issue** og velg **Add existing issue**.

- [ ] Lag to oppgaver som underordnede saker til historien: `Lag en løkke rundt
  hele spillet` og `Spør om spilleren vil spille igjen`.

- [ ] Gå tilbake til eposet. Der ser du hvor mange av de underordnede sakene
  som er ferdige.

## Merkelapper for nivåene {.tip}

Lag merkelappene `epos`, `funksjon`, `brukerhistorie` og `oppgave` under
**Issues**, **Labels** og **New label**. Da ser du på tavla hvilket nivå hver
lapp er.

## Skriv kriterier du kan teste {.protip}

«Spillet skal være bra» kan ingen sjekke. «Når jeg svarer n, skriver spillet
Takk for spillet» kan alle sjekke. Den som gjennomgår pull requesten, prøver
akkurat det som står i akseptansekriteriene.


# Steg 6: Fra plan til saker {.activity}

Har du en plan med brukerhistorier, kan hver historie bli en sak. Da blir
tavla en oversikt over hele prosjektet. I
[Planen](../../fra_ide_til_app/planen/planen) i Fra idé til app skriver du
historiene i `PLAN.md` med de samme ordene.

## Sjekkliste {.check}

- [ ] Finn planen for et prosjekt du jobber med, eller skriv tre ting du vil
  gjøre med spillet.

- [ ] Lag én sak per historie, med akseptansekriterier i beskrivelsen. Legg
  dem under riktig funksjon som underordnede saker.

- [ ] Legg sakene på tavla, og sorter **Todo** slik at det viktigste ligger
  øverst.

## Offentlig eller privat? {.tip}

Er repoet offentlig, kan alle lese sakene. Skriv aldri navn, telefonnummer
eller andre personopplysninger om kunder eller testpersoner i en sak.


# Steg 7: Milepæl {.activity}

En **milepæl** (milestone) samler sakene som skal være ferdige samtidig, for
eksempel til den første versjonen. Da ser du hvor langt dere har kommet.

## Sjekkliste {.check}

- [ ] Gå til fanen **Issues** og trykk **Milestones** og så **New milestone**.

- [ ] Gi den tittelen `Versjon 1`. Du kan sette en dato under **Due date**.
  Trykk **Create milestone**.

- [ ] Åpne sakene som skal være med i versjon 1. Til høyre, under
  **Milestone**, velger du `Versjon 1`.

- [ ] Gå tilbake til **Milestones**. Hvor mange prosent er ferdig?

## Én milepæl per fase {.tip}

I større prosjekter kan hver fase få sin egen milepæl, for eksempel `Plan`,
`MVP` og `Lansering`. Det gjør du i [Fra idé til
app](../../fra_ide_til_app/planen/planen).


# Utfordring {.challenge}

- [ ] Be en KI-assistent dele opp et epos:

  ```
  Her er eposet i prosjektet mitt: [lim inn]. Del det opp i funksjoner
  og brukerhistorier. Skriv hver historie som «Som ... vil jeg ..., så
  jeg kan ...» med akseptansekriterier som «Gitt ..., når ..., så ...».
  ```

  Les gjennom før du legger dem inn som saker. Er alle like viktige? Hvilke
  trenger dere i `Versjon 1`?

- [ ] Neste oppgave: [En runde som et team](../team_runde/team_runde).
