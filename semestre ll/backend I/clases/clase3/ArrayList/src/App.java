public class App {
    public static void main(String[] args) throws Exception {
     /*
         * Map<String, Double> patroclo = new HashMap<>();
         * 
         * patroclo.put("Salario", 20.3);
         * patroclo.put("Hector", 24.3);
         * 
         * System.out.println(patroclo.get("Salario"));
         * Double resultado = patroclo.get("Hector");
         * System.out.println(resultado);
         * 
         * System.out.println("--- Listado de Notas ---");
         * for (Map.Entry<String, Double> entrada : patroclo.entrySet()) {
         * System.out.println("Notas: " + entrada.getKey() + " | Nota: " +
         * entrada.getValue());
         * }
         */

        /*
         * List<String> pepe = new ArrayList<>();
         * 
         * pepe.add("30");
         * pepe.add("Manzana");
         * pepe.add("Puerta");
         * System.out.println("El primer elemento es: " + pepe.get(0));
         * System.out.println("El segundo elemento es: " + pepe.get(1));
         * System.out.println("El primer elemento es: " + pepe.getLast());
         * 
         * int size = pepe.size();
         * System.out.println("El ultimo elemento es: " + pepe.get(size-1));
         * 
         * pepe.set(1, "pera");
         * System.out.println("El segundo elemento es: " + pepe.get(1));
         * 
         * for (String p : pepe) {
         * System.out.println("El elemento en el indice  es: " + p);
         * }
         */
        sumar(0, 0);
        System.out.println(restar(2, 0));
    }

    public static void sumar(int a, int b) {
        System.out.println("El resultado es: " + (a + b));
    }

    public static void sumar(int a, int b, int c) {
        System.out.println("El resultado es: " + (a + b + c));
    }

    public static int restar(int a, int b) {
        int resultado = a - b;
        return resultado;
    }
    }

