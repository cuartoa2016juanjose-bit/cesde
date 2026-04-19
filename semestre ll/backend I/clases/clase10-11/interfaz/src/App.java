import models.Volador;
import models.Pajaro;
import models.Avion;

public class App {
    public static void main(String[] args) throws Exception {

        Volador trol = new Avion("boeing");

        trol.volar();
        trol.despegar();
        trol.aterrizar();

        Volador pepe = new Pajaro("Carpintero");

        pepe.despegar();
        pepe.aterrizar();
        pepe.volar();

    }
}
