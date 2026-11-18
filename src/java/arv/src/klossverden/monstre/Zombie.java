package klossverden.monstre;

public class Zombie extends Monster {
    public Zombie() {
        super("Zombie", 20);
    }

    @Override
    public String lyd() {
        return "Uuuurgh...";
    }
}
