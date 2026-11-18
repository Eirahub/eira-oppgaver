package klossverden.monstre;

public abstract class Monster {
    protected final String navn;
    protected int liv;

    public Monster(String navn, int liv) {
        this.navn = navn;
        this.liv = liv;
    }

    public abstract String lyd();

    public void taSkade(int skade) {
        liv = liv - skade;
        if (liv <= 0) {
            liv = 0;
            IO.println(navn + " er beseiret!");
        } else {
            IO.println(navn + " har " + liv + " liv igjen.");
        }
    }

    public boolean erBeseiret() {
        return liv == 0;
    }

    public String getNavn() {
        return navn;
    }
}
