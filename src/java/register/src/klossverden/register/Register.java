package klossverden.register;

import java.util.HashMap;
import java.util.Map;

import klossverden.klosser.Kloss;

public class Register {
    private static final Map<String, Kloss> KLOSSER = new HashMap<>();

    public static Kloss register(String id, Kloss kloss) {
        if (KLOSSER.containsKey(id)) {
            throw new IllegalStateException("Id-en er brukt fra før: " + id);
        }
        KLOSSER.put(id, kloss);
        return kloss;
    }

    public static Kloss hent(String id) {
        return KLOSSER.get(id);
    }

    public static Map<String, Kloss> alle() {
        return KLOSSER;
    }
}
