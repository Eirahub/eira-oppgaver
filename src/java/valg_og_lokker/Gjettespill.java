void main() {
    int hemmelig = (int) (Math.random() * 100) + 1;
    int maksForsok = 7;
    boolean funnet = false;

    IO.println("Jeg tenker på et tall fra 1 til 100.");
    IO.println("Du har " + maksForsok + " forsøk.");

    for (int forsok = 1; forsok <= maksForsok; forsok++) {
        int gjett = Integer.parseInt(IO.readln("Forsøk " + forsok + ": "));

        if (gjett < hemmelig) {
            IO.println("For lavt!");
        } else if (gjett > hemmelig) {
            IO.println("For høyt!");
        } else {
            IO.println("Riktig! Du brukte " + forsok + " forsøk.");
            funnet = true;
            break;
        }
    }

    if (!funnet) {
        IO.println("Ingen flere forsøk. Tallet var " + hemmelig + ".");
    }

    int nedtelling = 3;
    while (nedtelling > 0) {
        IO.println(nedtelling + "...");
        nedtelling--;
    }
    IO.println("Takk for spillet!");
}
