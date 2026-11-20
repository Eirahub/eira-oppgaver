package klossverden;

import java.util.HashMap;
import java.util.Map;

public class Main {
    static final Map<String, Kloss> KLOSSER = new HashMap<>();

    static void register(String id, Kloss kloss) {
        KLOSSER.put("minmod:" + id, kloss);
    }

    static int tidForAaKnuse(String id, int styrke) {
        Kloss kloss = KLOSSER.get(id);
        return kloss.getHardhet() * 10 / styrke;
    }

    public static void main(String[] args) {
        register("rubin", new Kloss("Rubin", 5));
        register("solstein", new Kloss("Solstein", 3));

        IO.println("Solstein: " + tidForAaKnuse("minmod:solstein", 2));
        IO.println("Rubin: " + tidForAaKnuse("minmod:rubin", 2));
    }
}
