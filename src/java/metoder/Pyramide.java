String gjenta(String tekst, int antall) {
    String resultat = "";
    for (int i = 0; i < antall; i++) {
        resultat = resultat + tekst;
    }
    return resultat;
}

void tegnPyramide(int hoyde, String kloss) {
    for (int rad = 1; rad <= hoyde; rad++) {
        String luft = gjenta(" ", hoyde - rad);
        String klosser = gjenta(kloss, 2 * rad - 1);
        IO.println(luft + klosser);
    }
}

int antallKlosser(int hoyde) {
    int sum = 0;
    for (int rad = 1; rad <= hoyde; rad++) {
        sum = sum + 2 * rad - 1;
    }
    return sum;
}

void main() {
    int hoyde = Integer.parseInt(IO.readln("Hvor høy pyramide? "));
    tegnPyramide(hoyde, "#");
    IO.println("Pyramiden bruker " + antallKlosser(hoyde) + " klosser.");
    tegnPyramide(3, "@");
}
