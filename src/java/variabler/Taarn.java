void main() {
    IO.println("Velkommen til tårnkalkulatoren!");

    String navn = IO.readln("Hva skal tårnet hete? ");
    int hoyde = Integer.parseInt(IO.readln("Hvor høyt skal det være? "));
    int bredde = Integer.parseInt(IO.readln("Hvor bredt skal det være? "));

    int klosser = hoyde * bredde * bredde;
    var stabler = klosser / 64;
    var rest = klosser % 64;
    double sekunder = klosser * 0.5;

    IO.println(navn + " trenger " + klosser + " klosser.");
    IO.println("Det er " + stabler + " fulle stabler og " + rest + " til.");
    IO.println("Med et halvt sekund per kloss tar det " + sekunder
            + " sekunder å bygge.");
}
