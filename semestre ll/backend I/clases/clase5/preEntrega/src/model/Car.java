package model;

public class Car {
  private String color;
  private int numLlantas;
  private String numPuertas;
  private String numAsiento;
  private String cilindrada;
  private String marca;
  private int modelo;

  public Car(String color, int numLlantas, String numPuertas, String numAsiento, String cilindrada, String marca,
      int modelo) {
    this.color = color;
    this.numLlantas = numLlantas;
    this.numPuertas = numPuertas;
    this.numAsiento = numAsiento;
    this.cilindrada = cilindrada;
    this.marca = marca;
    this.modelo = modelo;
  }

  public Car() {

  }

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public int getNumLlantas() {
    return numLlantas;
  }

  public void setNumLlantas(int numLlantas) {
    this.numLlantas = numLlantas;
  }

  public String getNumPuertas() {
    return numPuertas;
  }

  public void setNumPuertas(String numPuertas) {
    this.numPuertas = numPuertas;
  }

  public String getNumAsiento() {
    return numAsiento;
  }

  public void setNumAsiento(String numAsiento) {
    this.numAsiento = numAsiento;
  }

  public String getCilindrada() {
    return cilindrada;
  }

  public void setCilindrada(String cilindrada) {
    this.cilindrada = cilindrada;
  }

  public String getMarca() {
    return marca;
  }

  public void setMarca(String marca) {
    this.marca = marca;
  }

  public int getModelo() {
    return modelo;
  }

  public void setModelo(int modelo) {
    this.modelo = modelo;
  }

}
