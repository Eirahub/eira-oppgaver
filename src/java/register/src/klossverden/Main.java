package klossverden;

import klossverden.klosser.Kloss;
import klossverden.klosser.ModKlosser;
import klossverden.klosser.Sjeldenhet;
import klossverden.register.Register;

public class Main {
    public static void main(String[] args) {
        ModKlosser.init();

        for (String id : Register.alle().keySet()) {
            Kloss kloss = Register.hent(id);
            IO.println(id + " -> " + kloss.getNavn() + " ("
                    + kloss.getSjeldenhet() + ")");
        }

        Kloss rubin = Register.hent("minmod:rubin");
        IO.println("Samme objekt? " + (rubin == ModKlosser.RUBIN));

        if (rubin.getSjeldenhet() == Sjeldenhet.SJELDEN) {
            IO.println("Rubin er sjelden!");
        }

        switch (ModKlosser.STJERNEMALM.getSjeldenhet()) {
            case VANLIG -> IO.println("Grå tekst");
            case SJELDEN -> IO.println("Blå tekst");
            case EPISK -> IO.println("Lilla tekst");
        }
    }
}
