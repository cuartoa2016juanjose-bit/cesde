package model;

public class Talento extends Empleado {

  @Override
  public void trabajar() {
    System.out.println("el empleado trabaja contratando nuevos empleados");
  }
}
