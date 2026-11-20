package klossverden;

import klossverden.hendelser.KnuseHendelse;
import klossverden.klosser.Kloss;

public class Main {
    static int poeng = 0;

    static void giPoeng(String spiller, Kloss kloss) {
        poeng = poeng + kloss.getHardhet();
        IO.println(spiller + " har nå " + poeng + " poeng.");
    }

    public static void main(String[] args) {
        KnuseHendelse knust = new KnuseHendelse();

        // 1. En vanlig klasse som implementerer grensesnittet
        knust.registrer(new Logger());

        // 2. En lambda
        knust.registrer((spiller, kloss) -> {
            if (kloss.getNavn().equals("diamantmalm")) {
                IO.println("Wow! " + spiller + " fant en diamant!");
            }
        });

        // 3. En metodereferanse
        knust.registrer(Main::giPoeng);

        knust.knus("Ada", new Kloss("jord", 1));
        knust.knus("Ada", new Kloss("diamantmalm", 5));
    }
}
