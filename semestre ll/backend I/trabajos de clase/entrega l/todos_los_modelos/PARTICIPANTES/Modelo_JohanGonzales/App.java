import java.util.Scanner;
import models.clasejohan;

public class App {

    public static void main(String[] args) {

        Scanner leer = new Scanner(System.in);

        clasejohan.agregarParticipante(
                new clasejohan("Juan Pablo Restrepo", "Desarrollador Full Stack", "juan.henao@gmail.com", 102050));
        clasejohan.agregarParticipante(
                new clasejohan("Maria Camila Ospina", "Curadora de Arte", "maria.ospina@artesyconciencia.com", 102052));
        clasejohan.agregarParticipante(
                new clasejohan("Laura Sofia Rojas", "Gestora Cultural", "laura.herrera@investiga.com", 102053));
        clasejohan.agregarParticipante(new clasejohan("Mateo Alejandro Ramirez", "Coordinador Academico",
                "mateo.ramirez@academia.com", 102054));
        clasejohan.agregarParticipante(
                new clasejohan("Valentina Gomez", "Entrenadora de Baloncesto", "valentina.gomez@gmail.com", 102055));
        clasejohan.agregarParticipante(
                new clasejohan("Felipe Andres Duque", "Docente Universitario", "felipe.duque@gmail.com", 102056));
        clasejohan.agregarParticipante(
                new clasejohan("Sebastian Camilo Franco", "Productor Musical", "sebas.fran@gmail.com", 102057));
        clasejohan.agregarParticipante(new clasejohan("Gabriela Rodriguez", "Guionista de Contenidos",
                "gabriela.rodriguez@gmail.com", 102058));
        clasejohan.agregarParticipante(
                new clasejohan("Carlos Arango Quiceno", "Profesor de Gimnasia", "carlos.arango@gmail.com", 102059));
        clasejohan.agregarParticipante(
                new clasejohan("Teresa Marquez Toro", "Directora de Teatro", "tere.toro@gmail.com", 102060));

        int opcion = 0;

        do {
            System.out.println("   1. Registrar nuevo participante       ");
            System.out.println("   2. Listar todos los participantes     ");
            System.out.println("   3. Buscar participante por ID         ");
            System.out.println("   4. Actualizar datos de participante   ");
            System.out.println("   5. Eliminar participante              ");
            System.out.println("   6. Total de participantes             ");
            System.out.println("   0. Salir                              ");
            System.out.print("  Elige una opción: ");

            opcion = leer.nextInt();
            leer.nextLine(); // Limpiar buffer

            switch (opcion) {

                case 1:
                    System.out.println("\n REGISTRAR PARTICIPANTE");

                    System.out.print("  Nombre       : ");
                    String nombre = leer.nextLine();

                    System.out.print("  Rol          : ");
                    String rol = leer.nextLine();

                    System.out.print("  Email        : ");
                    String email = leer.nextLine();

                    System.out.print("  ID           : ");
                    int id = leer.nextInt();
                    leer.nextLine();

                    // Crear objeto y agregarlo al ArrayList
                    clasejohan nuevo = new clasejohan(nombre, rol, email, id);
                    clasejohan.agregarParticipante(nuevo);
                    break;
                case 2:
                    clasejohan.listarParticipantes();
                    break;
                case 3:
                    System.out.print("\n  Ingresa el ID a buscar: ");
                    int idBuscar = leer.nextInt();
                    leer.nextLine();

                    clasejohan encontrado = clasejohan.buscarPorId(idBuscar);

                    if (encontrado != null) {
                        System.out.println("\n  Participante encontrado:");
                        System.out.println("  ID      : " + encontrado.getIdparticipante());
                        System.out.println("  Nombre  : " + encontrado.getName());
                        System.out.println("  Rol     : " + encontrado.getRol());
                        System.out.println("  Email   : " + encontrado.getEmail());
                    } else {
                        System.out.println("No se encontró participante con ese ID.");
                    }
                    break;

                case 4:
                    System.out.print("\n  Ingresa el ID del participante a actualizar: ");
                    int idActualizar = leer.nextInt();
                    leer.nextLine();

                    clasejohan aActualizar = clasejohan.buscarPorId(idActualizar);

                    if (aActualizar != null) {
                        System.out.print("  Nuevo nombre  (actual: " + aActualizar.getName() + "): ");
                        String nuevoNombre = leer.nextLine();

                        System.out.print("  Nuevo rol     (actual: " + aActualizar.getRol() + "): ");
                        String nuevoRol = leer.nextLine();

                        System.out.print("  Nuevo email   (actual: " + aActualizar.getEmail() + "): ");
                        String nuevoEmail = leer.nextLine();

                        // Los setters ya tienen validaciones dentro
                        aActualizar.setName(nuevoNombre);
                        aActualizar.setRol(nuevoRol);
                        aActualizar.setEmail(nuevoEmail);

                        System.out.println("Participante actualizado.");
                    } else {
                        System.out.println("No se encontró participante con ese ID.");
                    }
                    break;

                // ── OPCIÓN 5: ELIMINAR ───────────────────────────────
                case 5:
                    System.out.print("\n  Ingresa el ID del participante a eliminar: ");
                    int idEliminar = leer.nextInt();
                    leer.nextLine();

                    boolean eliminado = clasejohan.eliminarParticipante(idEliminar);

                    if (eliminado) {
                        System.out.println("Participante eliminado correctamente.");
                    } else {
                        System.out.println("No se encontró participante con ese ID.");
                    }
                    break;

                // ── OPCIÓN 6: CONTAR ─────────────────────────────────
                case 6:
                    System.out.println("\n Total de participantes registrados: "
                            + clasejohan.contarParticipantes());
                    break;

                // ── OPCIÓN 0: SALIR ──────────────────────────────────
                case 0:
                    System.out.println("\n Cerrando el sistema. ¡Hasta luego!");
                    break;

                default:
                    System.out.println("Opción no válida. Intenta de nuevo.");
            }

        } while (opcion != 0);

        leer.close();
    }
}