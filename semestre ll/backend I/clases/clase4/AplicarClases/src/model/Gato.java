package model;

public class Gato {
  
  private String raza;
  private String color;
  private String nombre;
  private double peso;
  private int edad;

  //constructor vacio
  public Gato(){
    super();
  }

  //constructor con argumentos 
  public Gato(String raza, String color, String nombre, double peso, int edad) {
    this.raza = raza;
    this.color = color;
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
  }
  
    // constructor con varios argumentos
  public void llamar (){
    System.out.println("llamar al gatiño");
    System.out.println("el gato esta viniendo");
  }

  public String maullar (){
    String maullido = "el gato esta maullando";
    return maullido;
  }

  //----------------------------------------------

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
      this.peso = peso;
    }else{
      System.out.println("peso incorrecto como la puta mierda");
    }
  }

  public int getEdad() {
    return edad;
  }

  public void setEdad(int edad) {
    this.edad = edad;
  }
  
  
}
