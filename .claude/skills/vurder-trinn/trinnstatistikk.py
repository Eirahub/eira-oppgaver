"""Nivå og klassetrinn i eksisterende oppgaver, til sammenligning.

Bruk (fra repo-roten):
  python .claude/skills/vurder-trinn/trinnstatistikk.py
  python .claude/skills/vurder-trinn/trinnstatistikk.py --kurs computercraft learntomod
  python .claude/skills/vurder-trinn/trinnstatistikk.py --topic block_based game
"""
import argparse
import collections
import glob
import os
import re

GRADES = ["preschool", "primary", "secondary", "junior", "senior"]


def les(fil):
    tekst = open(fil, encoding="utf-8").read()
    nivaa = re.search(r"^level:\s*(\d)", tekst, re.M)
    def liste(nokkel):
        m = re.search(rf"{nokkel}:\s*\[([^\]]*)\]", tekst)
        if m:
            return [x.strip() for x in m.group(1).split(",") if x.strip()]
        blokk = re.search(rf"{nokkel}:\s*\n((?:\s+-\s*\S+.*\n?)+)", tekst)
        return re.findall(r"-\s*(\S+)", blokk.group(1)) if blokk else []
    return (int(nivaa.group(1)) if nivaa else None,
            liste("grade"), liste("topic"))


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--src", default="src")
    p.add_argument("--kurs", nargs="*", help="bare disse kursmappene")
    p.add_argument("--topic", nargs="*", help="bare oppgaver med alle disse temaene")
    a = p.parse_args()

    tabell = collections.defaultdict(collections.Counter)
    antall = collections.Counter()
    treff = []
    for fil in sorted(glob.glob(os.path.join(a.src, "*", "*", "lesson.yml"))):
        kurs = fil.replace("\\", "/").split("/")[-3]
        if a.kurs and kurs not in a.kurs:
            continue
        nivaa, trinn, tema = les(fil)
        if nivaa is None or (a.topic and not set(a.topic) <= set(tema)):
            continue
        antall[nivaa] += 1
        tabell[nivaa].update(trinn)
        treff.append((kurs, os.path.basename(os.path.dirname(fil)), nivaa, trinn))

    print("nivå  antall  " + "  ".join(f"{g:>9}" for g in GRADES) + "   (andel med trinnet)")
    for n in sorted(antall):
        andeler = "  ".join(f"{tabell[n][g] / antall[n]:>9.0%}" for g in GRADES)
        print(f"{n:>4}  {antall[n]:>6}  {andeler}")
    if a.kurs or a.topic:
        print()
        for kurs, mappe, nivaa, trinn in treff:
            print(f"{kurs}/{mappe}: nivå {nivaa}, {', '.join(trinn) or '(ingen trinn)'}")


if __name__ == "__main__":
    main()
