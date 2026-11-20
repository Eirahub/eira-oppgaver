package klossverden.klosser;

public class Kloss {
    private final String navn;
    private final int hardhet;
    private final Sjeldenhet sjeldenhet;

    public Kloss(String navn, int hardhet, Sjeldenhet sjeldenhet) {
        this.navn = navn;
        this.hardhet = hardhet;
        this.sjeldenhet = sjeldenhet;
    }

    public String getNavn() {
        return navn;
    }

    public int getHardhet() {
        return hardhet;
    }

    public Sjeldenhet getSjeldenhet() {
        return sjeldenhet;
    }
}
