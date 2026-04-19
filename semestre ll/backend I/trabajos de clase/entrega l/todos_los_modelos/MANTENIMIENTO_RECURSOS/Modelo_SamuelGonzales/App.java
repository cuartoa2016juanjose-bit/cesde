/*
import java.util.ArrayList;
import java.util.Scanner;
import models.clasessamu;

public class App {
    public static void main(String[] args) throws Exception {
       ArrayList<clasessamu> mantenimientoList = new ArrayList<>();
       Scanner clases = new Scanner (System.in);
        int opciones = 0;
        String nombre, categoria, estado, ubicacion;
        String idmantenimiento = " ";
    

       
        do{
        System.out.println(""" 
        MANTENIMIENTO 
                    1. ver todos los recursos en mantenimiento
                    2. ver estado 
                    3. ver categoria
                    4. crear nuevo mantenimiento de recursos
                    5. salir y ver
               
               """);
               opciones = clases.nextInt();
      switch (opciones) {
          case 1 :
              
              break;
              case 2 :

                break;
                case 3 :

                    break;
                    case 4:
                        System.out.println("ingresa el nombre del objeto");
                        nombre = clases.nextLine();
                        System.out.println("ingresa el id del objeto");
                        idmantenimiento = clases.nextLine();
                        System.out.println("ingresa la categoria");
                        categoria = clases.nextLine();
                        System.out.println("estado del objeto");
                        estado = clases.nextLine();
                        System.out.println("Ubicacion?");
                        ubicacion = clases.nextLine();

                        mantenimientoList.add(new  clasessamu(nombre, categoria, estado, ubicacion, idmantenimiento));
                        break;
                        case 5:

                            break;
          default:
              throw new AssertionError();
      }
    }while(opciones != 5);

        
    }
    
}
*/