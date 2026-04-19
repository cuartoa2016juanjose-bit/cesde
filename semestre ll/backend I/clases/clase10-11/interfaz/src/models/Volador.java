package models;

public interface Volador {

  void despegar();

  void volar();

  default void aterrizar() {
    System.out.println("Aterrizando de manera controlada");
  }
}
