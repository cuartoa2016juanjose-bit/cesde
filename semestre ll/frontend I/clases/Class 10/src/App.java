import model.Circulo;
import model.Figura;
import model.Triangulo;

public class App {
    public static void main(String[] args) throws Exception {

        Figura paco = new Circulo("azul", "paco", 4);

        paco.mostrarColor();
        paco.mostrarNombre();
        System.out.printf("el area de la figura es: %.2f", paco.calcularArea());
        System.out.println("\n");

        Figura perla = new Triangulo("rojo", "Perla", 4, 6);

        perla.mostrarColor();
        perla.mostrarNombre();
        System.out.printf("el area de la figura es: %.2f", perla.calcularArea());

    }
}
