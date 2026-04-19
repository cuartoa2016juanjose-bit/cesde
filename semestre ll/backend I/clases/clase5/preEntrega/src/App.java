import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import model.User;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner leer = new Scanner(System.in);

        String name = "", phone = "", email = "";
        int id = 0;

        System.out.println("Dame el nombre del usuario");
        name = leer.next();
        System.out.println("Dame el id del usuario");
        id = leer.nextInt();
        System.out.println("Dame el phone del usuario");
        phone = leer.next();
        System.out.println("Dame el email del usuario");
        email = leer.next();

        User usuario = new User(name, id, phone, email);

        System.out.println("Bienvenido a la calculadora");
        boolean condition = true;
        List<Integer> listaResultados = new ArrayList<>();

        while (condition) {
            System.out.println(" \n ¿Qué operación deseas realizar?");
            System.out.println("1. Sumar");
            System.out.println("2. Restar");
            System.out.println("3. Multiplicar");
            System.out.println("4. Dividir");
            System.out.println("5. Salir");

            int opcion = leer.nextInt();
            int resultado = 0;
            int num1, num2;
            if (opcion != 5) {
                System.out.println("Ingresa un número: ");
                num1 = leer.nextInt();
                System.out.println("Ingresa otro número: ");
                num2 = leer.nextInt();

                switch (opcion) {
                    case 1:
                        resultado = usuario.suma(num1, num2);
                        break;
                    case 2:
                        resultado = usuario.resta(num1, num2);
                        break;
                    case 3:
                        resultado = usuario.multiplica(num1, num2);
                        break;
                    case 4:
                        resultado = usuario.dividi(num1, num2);
                        break;
                    default:
                        System.out.println("Debes ingresar una opción correcta");
                        break;
                }
                System.out.println("Calculando...");
                Thread.sleep(2000);
                System.out.println("El resultado es: " + resultado);
                Thread.sleep(2000);
                listaResultados.add(resultado);
                System.out.println("El historico de resultados es: ");
                for (Integer ee : listaResultados) {
                    System.out.print(ee + " - ");
                }
                Thread.sleep(2000);

            }
            if (opcion == 5) {
                condition = false;
                System.out.println("Gracias por calcular con nosotros");
            }

        }
        leer.close();

    }

}
