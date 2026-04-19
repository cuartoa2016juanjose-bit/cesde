package models;

public abstract class Vehiculo {
  String cantidadLlantas;

  public Vehiculo() {
  }

  public Vehiculo(String cantidadLlantas) {
    this.cantidadLlantas = cantidadLlantas;
  }

  public abstract void encender();

  public String getCantidadLlantas() {
    return cantidadLlantas;
  }

  public void setCantidadLlantas(String cantidadLlantas) {
    this.cantidadLlantas = cantidadLlantas;
  }

}
