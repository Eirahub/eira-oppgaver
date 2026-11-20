package klossverden.klosser;

public class Kloss {
    private final String navn;
    private final int hardhet;

    public Kloss(String navn, int hardhet) {
        this.navn = navn;
        this.hardhet = hardhet;
    }

    public String getNavn() {
        return navn;
    }

    public int getHardhet() {
        return hardhet;
    }
}
