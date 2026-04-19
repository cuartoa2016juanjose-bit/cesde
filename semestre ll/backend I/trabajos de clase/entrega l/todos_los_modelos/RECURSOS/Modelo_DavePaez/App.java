import models.Recursos;
import java.util.ArrayList;
import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        Scanner sc = new Scanner(System.in);
        ArrayList<Recursos> recursos = new ArrayList<>();
        int opcion = 0;
        int id = 0;
        String nombre;
        String categoria;
        String estado;
        String ubicacion;

        recursos.add(new Recursos(1, "Computadores portatiles", "Tecnologia", "En uso", "Salon 3"));
        recursos.add(new Recursos(2, "Video Beam", "Tecnologia", "Disponible", "Sala audiovisual"));
        recursos.add(new Recursos(3, "Impresora Láser", "Oficina", "En mantenimiento", "Oficina administrativa"));
        recursos.add(new Recursos(4, "Escritorios", "Mobiliario", "Disponible", "Salón 2"));
        recursos.add(new Recursos(5, "Sillas", "Mobiliario", "En uso", "Salón 1"));

        do {
            System.out.println("""
                    Bienvenido al sistema de busqueda de recursos, que desea hacer?
                    1. Ver todos los recursos
                    2. Agregar algun recurso
                    3. Actualizar algun recurso
                    4. Eliminar algun recurso
                    5. Salir del sistema
                    """);
            opcion = sc.nextInt();

            switch (opcion) {
                case 1:
                    for (Recursos r : recursos) {
                        System.out.println(r);
                    }
                    break;

                case 2:
                    System.out.println("Ingrese el ID del recurso");
                    id = sc.nextInt();
                    sc.nextLine();

                    boolean idrepetido = false;

                    for (Recursos i : recursos) {
                        if (i.getRecursoId() == id) {
                            idrepetido = true;
                            break;
                        }
                    }
                    if (idrepetido) {
                        System.out.println("Este ID ya existe\n");
                    } else {
                        System.out.println("Ingre el nombre del recurso");
                        nombre = sc.nextLine();

                        System.out.println("Ingrese la categoria");
                        categoria = sc.nextLine();

                        System.out.println("Ingrese el estado");
                        estado = sc.nextLine();

                        System.out.println("Ingrese la ubicacion");
                        ubicacion = sc.nextLine();

                        recursos.add(new Recursos(id, nombre, categoria, estado, ubicacion));
                        System.out.println("Recurso agregado correctamente\n");
                    }
                    break;

                case 3:
                    System.out.println("Ingrese al ID a actualizar:");
                    id = sc.nextInt();
                    sc.nextLine();

                    boolean encontrar = false;

                    for (Recursos i : recursos) {
                        if (i.getRecursoId() == id) {
                            encontrar = true;

                            System.out.println("\nRecurso encontrado:");
                            System.out.println("Nombre actual: " + i.getNombre());
                            System.out.println("Categoria actual: " + i.getCategoria());
                            System.out.println("Estado actual: " + i.getEstado());
                            System.out.println("Ubicacion actual: " + i.getUbicacion());

                            System.out.println("Ingrese los nuevos datos");

                            System.out.println("Nuevo nombre");
                            nombre = sc.nextLine();

                            System.out.println("Nueva categoria");
                            categoria = sc.nextLine();

                            System.out.println("Nuevo estado");
                            estado = sc.nextLine();

                            System.out.println("Nueva ubicacion");
                            ubicacion = sc.nextLine();

                            i.setNombre(nombre);
                            i.setCategoria(categoria);
                            i.setEstado(estado);
                            ;
                            i.setUbicacion(ubicacion);

                            System.out.println("\nRecurso actualizado\n");
                            break;
                        }
                    }

                    if (!encontrar) {
                        System.out.println("El ID a actualizar no existe");
                    }
                    break;

                case 4:
                    System.out.println("Ingrese el ID del recurso a eliminar:");
                    int idEliminar = sc.nextInt();
                    sc.nextLine();

                    boolean encontrado = false;

                    for (int i = 0; i < recursos.size(); i++) {
                        if (recursos.get(i).getRecursoId() == idEliminar) {

                            System.out.println("\nRecurso encontrado:");
                            System.out.println("Nombre: " + recursos.get(i).getNombre());
                            System.out.println("¿Desea eliminarlo?");
                            System.out.println("1. Sí");
                            System.out.println("2. No");
                            int confirmar = sc.nextInt();

                            if (confirmar == 1) {
                                recursos.remove(i);
                                System.out.println("Recurso eliminado correctamente");
                            } else {
                                System.out.println("Eliminación cancelada");
                            }

                            encontrado = true;
                            break;
                        }
                    }

                    if (!encontrado) {
                        System.out.println("El Id ingresado no existe");
                    }
                    break;
                case 5:
                    System.out.println("Gracias por visitar nuestro sistema\n");
                    break;
                default:
                    System.out.println("El valor ingresado es erroneo, intente nuevamente");
                    break;
            }
        } while (opcion != 5);

        sc.close();

    }
}
