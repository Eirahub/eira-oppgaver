---
name: vurder-trinn
description: Vurder hvilke klassetrinn (grade-tagger) og hvilket nivå (1-4) en oppgave eller et kurs passer for, sammenlignet med lignende oppgaver i samlingen og med det elever på trinnet forventes å kunne. Bruk når grade eller level skal settes i lesson.yml eller course.yml, når brukeren spør hvilket trinn noe passer for, eller når ny-oppgave trenger trinn.
---

# Vurder trinn og nivå

Gi et begrunnet forslag, ikke en fasit. Brukeren bestemmer.

## Taggene

`grade` i `lesson.yml` (fra `filtertags/keys.yml`):

| Tagg | Trinn | Alder |
|---|---|---|
| preschool | barnehage | under 6 |
| primary | 1.-4. | 6-9 |
| secondary | 5.-7. | 10-12 |
| junior | 8.-10. | 13-15 |
| senior | videregående | 16-18 |

Velg alle trinn der oppgaven fungerer uten mye ekstra hjelp, ikke bare ett.
Nivå (`level`) er hvor vanskelig oppgaven er innenfor sitt kurs: 1 introduksjon,
2 nybegynner, 3 erfaren, 4 ekspert.

## 1. Sammenlign med samlingen

Kjør fra repo-roten:

```
python .claude/skills/vurder-trinn/trinnstatistikk.py
python .claude/skills/vurder-trinn/trinnstatistikk.py --kurs <lignende kurs>
python .claude/skills/vurder-trinn/trinnstatistikk.py --topic <tema> <tema>
```

Første kjøring gir hele samlingen: hvor stor andel av oppgavene på hvert nivå
som har hvert trinn. Velg lignende kurs eller temaer for de neste kjøringene, for
eksempel `computercraft learntomod` for Minecraft, `scratch` for blokker og
`python` for tekstkode. Les 1-2 av de nærmeste oppgavene for å se om de
faktisk er like krevende.

## 2. Vurder hva oppgaven krever

Gå gjennom oppgaveteksten og noter:

- **Lesing:** Lengde på avsnitt, fagord, engelske ord i verktøyet. Elever på
  1.-4. trinn trenger korte setninger, få ord og bilder for hvert steg.
- **Programmering:** blokker eller tekstkode, og hvilke begreper: sekvens,
  løkke, valg (hvis), variabel, funksjon, hendelse, liste, feilhåndtering,
  parallellitet. Sekvens og enkle løkker passer fra 1.-4. trinn. Variabler og
  valg passer vanligvis fra 5.-7. trinn. Funksjoner, lister, feilhåndtering og
  tekstkode passer vanligvis fra 8.-10. trinn.
- **Matematikk:** koordinater med negative tall (vanligvis fra 5.-7. trinn),
  tre akser (x, y, z) og vinkler i grader (vanligvis fra 8.-10. trinn).
- **Oppsett:** installasjon, kontoer og filer som må på plass. Dette er en
  oppgave for en voksen, ikke for elevene, og den trekker ikke trinnet ned.
- **Verktøyet:** aldersgrenser eller vilkår (for eksempel Minecraft og
  nettkontoer). Ta dem med i begrunnelsen, ikke gjett dem. Sjekk kilden.

## 3. Forventninger i læreplanen

LK20 har programmering i kompetansemål i matematikk, naturfag, kunst og
håndverk og musikk, og i valgfaget programmering (8.-10.). **Ikke skriv
kompetansemål fra hukommelsen.** Hent ordlyden fra udir.no
(https://www.udir.no/lk20/) eller la den stå åpen og si det. Det samme gjelder
lærerveiledningens `Kompetansemål`-seksjon.

## 4. Svar

Gi:

1. Forslag til `level` og `grade`, som de skal stå i `lesson.yml`.
2. Sammenligning: tallene fra skriptet og 2-3 navngitte oppgaver som ligner.
3. Begrunnelse fra steg 2, kort, med det som trekker opp og ned.
4. Usikkerhet: hva som bør prøves på ekte elever eller sjekkes med en lærer.
