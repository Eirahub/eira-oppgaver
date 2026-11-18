package klossverden;

import klossverden.hendelser.KnuseLytter;
import klossverden.klosser.Kloss;

public class Logger implements KnuseLytter {
    @Override
    public void klossKnust(String spiller, Kloss kloss) {
        IO.println("[logg] " + spiller + " knuste " + kloss.getNavn());
    }
}
