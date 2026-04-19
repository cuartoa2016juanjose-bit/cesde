import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class App {
    public static void main(String[] args) throws Exception {
        /*
         * Scanner ustedVera = new Scanner(System.in);
         * 
         * System.out.println("Oiste cual tu nombre?");
         * String nombre = ustedVera.next();
         * System.out.println("Oiste cual es tu edad?");
         * int edad = ustedVera.nextInt();
         * 
         * System.out.println("LA persona de nombre: " + nombre + " tiene una edad de: "
         * + edad);
         * 
         * ustedVera.close();
         */

        /*
         * String numero = "2";
         * int numero1 = Integer.parseInt(numero);
         * 
         * System.out.println(numero1);
         * System.out.println(numero);
         */

        // 1. Declaración e Instanciación
        // Usamos List (interfaz) a la izquierda y ArrayList a la derecha
        /*
         * List<String> productos = new ArrayList<>();
         * 
         * // 2. Operación: Escritura (Create)
         * productos.add("Laptop"); // 0
         * productos.add("Mouse");// 1
         * productos.add("Teclado");//2
         * productos.add("Pantalla");// 3
         * 
         * // 3. Operación: Lectura (Read)
         * System.out.println("Primer producto: " + productos.get(0));
         * System.out.println("Le tercer producto: " + productos.get(2));
         * 
         * // 4. Operación: Actualización (Update)
         * // Cambiamos 'Mouse' por 'Mouse Inalámbrico' en el índice 1
         * productos.set(1, "Mouse Inalámbrico");
         * 
         * // 5. Operación: Eliminación (Delete)
         * productos.remove("Teclado"); // Por objeto
         * productos.remove(2);
         * 
         * // 6. Recorrido (Iteración)
         * System.out.println("--- Inventario Actual ---");
         * for (String p : productos) {
         * System.out.println("Producto: " + p);
         * }
         * 
         * 
         * // Pormenor: Tamaño de la lista
         * System.out.println("Total productos: " + productos.size());
         */
        // 1. Instanciación: Llave (String - Nombre), Valor (Double - Nota)
        /*
         * Map<String, Double> notasEstudiantes = new HashMap<>();
         * 
         * // 2. Insertar datos (put)
         * notasEstudiantes.put("Santiago", 4.5);
         * notasEstudiantes.put("Laura", 5.0);
         * notasEstudiantes.put("Carlos", 3.8);
         * notasEstudiantes.put("Maria", 3.0);
         * 
         * // 3. Recuperar un valor (get)
         * Double notaLaura = notasEstudiantes.get("Laura");
         * System.out.println("Nota de Laura: " + notaLaura);
         * 
         * System.out.println("Nota de Maria: " + notasEstudiantes.get("Maria"));
         * 
         * 
         * 
         * // 4. Verificar existencia
         * if (notasEstudiantes.containsKey("Carlos")) {
         * System.out.println("Carlos está registrado.");
         * }
         * 
         * // 5. Borrado
         * notasEstudiantes.remove("Carlos");
         * 
         * // 6. Recorrido de llaves y valores (EntrySet)
         * System.out.println("--- Listado de Notas ---");
         * for (Map.Entry<String, Double> entrada : notasEstudiantes.entrySet()) {
         * System.out.println("Estudiante: " + entrada.getKey() + " | Nota: " +
         * entrada.getValue());
         * }
         */

    }

    public static void sumar(int a, int b) {
        System.out.println("El resultado de a + b es: " + (a + b));
    }

    public static void sumar(int a, int b, int c) {
        System.out.println("El resultado de a + b es: " + (a + b));
    }

    sumar(2, 4);
    sumar(2, 4, 5);
}
