package model;

public class Paypal extends MetododePago {

  @Override
  public void procesar(double monto) {
    System.out.println("rediriendo a paypal para cobrar:" + monto);
  }
}
