package models;

public class Avion implements Volador {

  private String marca;

  /*
   * public Avion(String cantidadLlantas, String marca) {
   * super(cantidadLlantas);
   * this.marca = marca;
   * }
   */
  public Avion() {
  }

  public Avion(String marca) {
    this.marca = marca;
  }

  @Override
  public void despegar() {
    System.out.println("esta despegando");
  }

  @Override
  public void volar() {

    System.out.println("esta volando");
  }

  /*
   * @Override
   * public void encender() {
   * System.out.println("el avión ha sido encendido");
   * }
   */

  public String getMarca() {
    return marca;
  }

  public void setMarca(String marca) {
    this.marca = marca;
  }

}
