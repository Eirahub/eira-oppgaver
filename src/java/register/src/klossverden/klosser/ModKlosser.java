package klossverden.klosser;

import klossverden.register.Register;

public class ModKlosser {
    public static final String MOD_ID = "minmod";

    public static final Kloss RUBIN = register("rubin",
            new Kloss("Rubin", 5, Sjeldenhet.SJELDEN));
    public static final Kloss SOLSTEIN = register("solstein",
            new Kloss("Solstein", 3, Sjeldenhet.VANLIG));
    public static final Kloss STJERNEMALM = register("stjernemalm",
            new Kloss("Stjernemalm", 9, Sjeldenhet.EPISK));

    private static Kloss register(String navn, Kloss kloss) {
        return Register.register(MOD_ID + ":" + navn, kloss);
    }

    public static void init() {
        IO.println("Registrerer klosser for " + MOD_ID);
    }
}
