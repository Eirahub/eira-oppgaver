void visInventar(List<String> inventar) {
    if (inventar.isEmpty()) {
        IO.println("Inventaret er tomt.");
        return;
    }
    IO.println("Du har " + inventar.size() + " ting:");
    for (String ting : inventar) {
        IO.println("- " + ting);
    }
}

void main() {
    ArrayList<String> inventar = new ArrayList<>();
    inventar.add("trehakke");
    inventar.add("brød");

    IO.println("Kommandoer: legg <ting>, fjern <ting>, vis, slutt");

    while (true) {
        String kommando = IO.readln("> ");
        if (kommando == null || kommando.equals("slutt")) {
            break;
        } else if (kommando.equals("vis")) {
            visInventar(inventar);
        } else if (kommando.startsWith("legg ")) {
            String ting = kommando.substring(5);
            inventar.add(ting);
            IO.println("La " + ting + " i inventaret.");
        } else if (kommando.startsWith("fjern ")) {
            String ting = kommando.substring(6);
            if (inventar.contains(ting)) {
                inventar.remove(ting);
                IO.println("Fjernet " + ting + ".");
            } else {
                IO.println("Du har ikke " + ting + ".");
            }
        } else {
            IO.println("Jeg skjønte ikke det.");
        }
    }
    IO.println("Ha det!");
}
