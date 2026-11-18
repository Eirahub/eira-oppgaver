package klossverden.hendelser;

import java.util.ArrayList;
import java.util.List;

import klossverden.klosser.Kloss;

public class KnuseHendelse {
    private final List<KnuseLytter> lyttere = new ArrayList<>();

    public void registrer(KnuseLytter lytter) {
        lyttere.add(lytter);
    }

    public void knus(String spiller, Kloss kloss) {
        for (KnuseLytter lytter : lyttere) {
            lytter.klossKnust(spiller, kloss);
        }
    }
}
