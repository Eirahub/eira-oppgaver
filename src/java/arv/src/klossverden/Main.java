package klossverden;

import java.util.ArrayList;
import java.util.List;

import klossverden.monstre.Edderkopp;
import klossverden.monstre.Monster;
import klossverden.monstre.Zombie;

public class Main {
    public static void main(String[] args) {
        List<Monster> monstre = new ArrayList<>();
        monstre.add(new Zombie());
        monstre.add(new Edderkopp(true));
        monstre.add(new Edderkopp(false));

        for (Monster monster : monstre) {
            IO.println(monster.getNavn() + " sier " + monster.lyd());
            monster.taSkade(10);
            monster.taSkade(10);
        }

        int beseiret = 0;
        for (Monster monster : monstre) {
            if (monster.erBeseiret()) {
                beseiret++;
            }
        }
        IO.println("Du beseiret " + beseiret + " av " + monstre.size()
                + " monstre.");
    }
}
