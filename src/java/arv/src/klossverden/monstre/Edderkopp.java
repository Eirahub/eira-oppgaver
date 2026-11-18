package klossverden.monstre;

public class Edderkopp extends Monster {
    private final boolean dag;

    public Edderkopp(boolean dag) {
        super("Edderkopp", 16);
        this.dag = dag;
    }

    @Override
    public String lyd() {
        return "Ssssss!";
    }

    @Override
    public void taSkade(int skade) {
        if (dag) {
            IO.println("Edderkoppen er rolig om dagen og tar halv skade.");
            skade = skade / 2;
        }
        super.taSkade(skade);
    }
}
