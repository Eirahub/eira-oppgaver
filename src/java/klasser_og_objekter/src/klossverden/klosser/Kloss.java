package klossverden.klosser;

public class Kloss {
    private final String navn;
    private final int hardhet;
    private boolean knust;

    public Kloss(String navn, int hardhet) {
        this.navn = navn;
        this.hardhet = hardhet;
        this.knust = false;
    }

    public String getNavn() {
        return navn;
    }

    public int getHardhet() {
        return hardhet;
    }

    public boolean erKnust() {
        return knust;
    }

    public void slag(int styrke) {
        if (styrke >= hardhet) {
            knust = true;
            IO.println(navn + " knuses!");
        } else {
            IO.println(navn + " er for hard. Du trenger styrke " + hardhet
                    + ".");
        }
    }
}
