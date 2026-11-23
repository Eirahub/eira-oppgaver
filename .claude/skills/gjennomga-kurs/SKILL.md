---
name: gjennomga-kurs
description: Gjennomgå et kurs eller en oppgave i src/ og rapporter om format, nivå og trinn, om forklaringene passer for elevene på trinnet, om kode og klosser er riktige, og om kompetansemålene er ordrette og gyldige i LK20. Bruk når brukeren vil kvalitetssjekke, gjennomgå eller vurdere et kurs eller en oppgave, før et nytt kurs flettes, eller når eldre kurs skal ryddes.
---

# Gjennomgå kurs

Rapporter, ikke rett. Endre filer bare hvis brukeren ber om det etterpå.

Input: en kursmappe (`src/<kurs>`) eller en oppgavemappe
(`src/<kurs>/<oppgave>`). Et stort kurs (over ca. 10 oppgaver): gå gjennom
spillelistene først, og spør om resten skal tas.

## 1. Maskinelle sjekker

Kjør fra repo-roten:

```
python .claude/skills/gjennomga-kurs/sjekk_kurs.py <sti>
cd linter && python -W ignore LKK_linter.py -l -r ../<sti>
```

`sjekk_kurs.py` finner: språk som ikke stemmer med filsuffikset, bilder som
mangler eller er uten alt-tekst, døde relative lenker, `BILDE`- og
`TODO`-plassholdere, tankestreker, ugyldige tagger og nivåer, spillelister som
peker på oppgaver som ikke finnes, og kompetansemål som er utgått, ikke
ordrette eller ikke finnes i LK20. Målene hentes fra data.udir.no og
mellomlagres i en uke. `--uten-udir` hopper over dem. Linteren trenger
`termcolor` og `colorama`, se CLAUDE.md.

Ta med funnene i rapporten. Ikke gjenta det skriptet allerede sier i egne ord.

## 2. Nivå og trinn

Følg skillen `vurder-trinn` for hver oppgave, men bare så langt at du kan si
om `level` og `grade` i `lesson.yml` er rimelige. Sjekk i tillegg:

- Nivået stiger gjennom spillelista, uten store hopp.
- Forutsetningene oppgaven nevner (eller tar for gitt) dekkes av en tidligere
  oppgave i kurset eller et kurs den lenker til.

## 3. Forklaring på rett nivå

Les oppgaven som en elev på det laveste trinnet i `grade`. Pek på konkrete
steder (fil:linje) der:

- et ord, et begrep eller en kloss brukes før det er forklart;
- teksten krever matematikk eleven ikke har hatt ennå (sjekk mot målene i
  matematikk for trinnet, hentet i steg 1, ikke fra hukommelsen);
- et steg innfører mer enn én eller to nye ting, eller en setning er lang og
  tung for trinnet;
- et sjekkpunkt (`- [ ]`) har mer enn én handling, eller et steg mangler en
  test (`{.flag}`) der eleven ser at det virker.

## 4. Faglig korrekthet

- Kode og klosser: riktig syntaks, og navnene på klosser, menyer og knapper
  stemmer med dagens versjon av verktøyet. Sjekk kilden (dokumentasjon eller
  verktøyet selv) når du er usikker. Kan du ikke verifisere, skriv «ikke
  verifisert», ikke gjett.
- Lenker til eksterne verktøy og nettsider virker fortsatt.
- Lærerveiledningen: tidsbruk, utstyr og forutsetninger er realistiske, og
  kompetansemålene passer til det oppgaven faktisk øver på.

## 5. Rapport

Én tabell per oppgave, sortert etter alvor:

| Alvor | Hvor | Hva | Forslag |
|---|---|---|---|
| Feil | `fil:linje` | ... | konkret endring |

- **Feil:** gir feil resultat for eleven, døde lenker eller bilder, ugyldige
  tagger, utgåtte eller oppdiktede kompetansemål.
- **Bør fikses:** nivå eller trinn passer dårlig, forklaringer over nivået,
  plassholdere.
- **Forslag:** språk, flyt og små forbedringer.

Til slutt for kurset: klart for publisering, eller hva som må gjøres først,
og hva du ikke fikk sjekket. Hold rapporten i samtalen. Spør før du lager en
issue eller endrer filer.
