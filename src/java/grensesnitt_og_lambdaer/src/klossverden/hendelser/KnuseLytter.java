package klossverden.hendelser;

import klossverden.klosser.Kloss;

@FunctionalInterface
public interface KnuseLytter {
    void klossKnust(String spiller, Kloss kloss);
}
