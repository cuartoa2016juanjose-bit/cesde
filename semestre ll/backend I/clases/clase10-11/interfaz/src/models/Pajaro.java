package models;

public class Pajaro implements Volador {
  private String especie;

  public String getEspecie() {
    return especie;
  }

  public void setEspecie(String especie) {
    this.especie = especie;
  }

  public Pajaro() {
  }

  public Pajaro(String especie) {
    this.especie = especie;
  }

  @Override
  public void volar() {
    System.out.println("El pajaro esta volando");
  }

  @Override
  public void despegar() {
    System.out.println("Abre las alas y aletea");
  }

  @Override
  public void aterrizar() {
    System.out.println("El pajaro deja de aletear y estira las patas, y contacto");
  }
}
