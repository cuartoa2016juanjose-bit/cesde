import model.Diseñador;
import model.Empleado;
import model.Programador;
import model.Talento;

import java.util.ArrayList;
import java.util.List;
public class App {
    public static void main(String[] args) throws Exception {
        
        // // 1. La Lista Genérica (El poder del Polimorfismo)
        // Acepta a cualquier objeto que "SEA UN" Empleado

        List<Empleado> nomina = new ArrayList<>();

        Empleado pago1 = new Empleado();
        Empleado pago2 = new Diseñador();
        Empleado pago3 = new Programador();
        Empleado pago4 = new Talento();

        nomina.add(new Diseñador());
        nomina.add(new Programador());
        nomina.add(new Talento());
        nomina.add(new Empleado());

        //Ejecucion Poliformica
        System.out.println("Empezando jornada laboral");
        for (Empleado persona: nomina) {
            persona.trabajar();
        }
    }
}
