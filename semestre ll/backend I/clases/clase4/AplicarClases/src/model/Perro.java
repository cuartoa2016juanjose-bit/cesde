package model;

public class Perro {
  private String raza;
  private String color;
  private String nombre;
  private double peso;
  private int edad;

  // constructor vacio
  public Perro() {
    super();
  }

  // constructor con argumentos
  public Perro(String raza, String color, String nombre, double peso, int edad) {
    this.raza = raza;
    this.color = color;
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
  }

  // crear constructor con varios argumentos

  public void llamar() {
    System.out.println("llamando al perro  ");
    System.out.println("el perro viene ");
  }

  public String ladrar() {
    String ladrando = "El perro esta ladrando";
    return ladrando;
  }

  public String getRaza() {
    return raza;
  }

  public void setRaza(String raza) {
    this.raza = raza;
  }

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public String getNombre() {
    return nombre;
  }

  public void setNombre(String nombre) {
    this.nombre = nombre;
  }

  public double getPeso() {
    return peso;
  }

  public void setPeso(double peso) {
    if (peso >= 0 && peso < 50) {
      this.peso = peso; // peso correcto
    } else {
      System.out.println("peso incorrecto o perro gordo");
    }
  }

  public int getEdad() {
    return edad;
  }

  public void setEdad(int edad) {
    this.edad = edad;
  }

}
