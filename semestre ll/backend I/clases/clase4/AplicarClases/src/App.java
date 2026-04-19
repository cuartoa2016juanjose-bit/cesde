import model.Perro;
import model.Gato;

public class App {
    public static void main(String[] args) throws Exception {

        // ---- PERROS ----
        Perro samuel = new Perro("pomerania", "azulito", "Mostradamus", 8, 10);
        Perro johan = new Perro("chiguaga", "negrote", "urelio", 4, 35);

        String resultadoSamu = samuel.ladrar();
        System.out.println(resultadoSamu);

        String resultadoJohan = johan.ladrar();
        System.out.println(resultadoJohan);

        // ---- GATOS ----
        Gato dave = new Gato("nosé", "amarillo", "davo", 4, 10);
        Gato juan = new Gato("nosé, egipcio", "piel", "Neoponti", 6, 4);

        String resultadoDave = dave.maullar();
        System.out.println(resultadoDave);

        String resultadoJuan = juan.maullar();
        System.out.println(resultadoJuan);

        // traer cada elemento de cada objeto creado y mostrarlo por consola
        // SAMU
        System.out.println("Perro Samuel:");
        System.out.println("Raza: " + samuel.getRaza());
        System.out.println("Color: " + samuel.getColor());
        System.out.println("Nombre: " + samuel.getNombre());
        System.out.println("Edad: " + samuel.getEdad());
        System.out.println("Peso: " + samuel.getPeso());

        // JOHAN
        System.out.println("Perro Johan:");
        System.out.println("Raza: " + johan.getRaza());
        System.out.println("Color: " + johan.getColor());
        System.out.println("Nombre: " + johan.getNombre());
        System.out.println("Edad: " + johan.getEdad());
        System.out.println("Peso: " + johan.getPeso());

        // DAVE
        System.out.println("Gato Dave:");
        System.out.println("Raza: " + dave.getRaza());
        System.out.println("Color: " + dave.getColor());
        System.out.println("Nombre: " + dave.getNombre());
        System.out.println("Edad: " + dave.getEdad());
        System.out.println("Peso: " + dave.getPeso());

        // JUAN
        System.out.println("Gato Juan:");
        System.out.println("Raza: " + juan.getRaza());
        System.out.println("Color: " + juan.getColor());
        System.out.println("Nombre: " + juan.getNombre());
        System.out.println("Edad: " + juan.getEdad());
        System.out.println("Peso: " + juan.getPeso());
    }
}
