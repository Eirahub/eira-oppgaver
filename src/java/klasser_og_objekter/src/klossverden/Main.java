package klossverden;

import klossverden.klosser.Kloss;

public class Main {
    public static void main(String[] args) {
        Kloss jord = new Kloss("jord", 1);
        Kloss stein = new Kloss("stein", 3);
        Kloss obsidian = new Kloss("obsidian", 9);

        IO.println(stein.getNavn() + " har hardhet " + stein.getHardhet());

        jord.slag(2);
        stein.slag(2);
        obsidian.slag(10);

        IO.println("Er steinen knust? " + stein.erKnust());
    }
}
