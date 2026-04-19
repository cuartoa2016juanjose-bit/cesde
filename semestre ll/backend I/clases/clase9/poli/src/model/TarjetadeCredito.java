package model;

public class TarjetadeCredito extends MetododePago {

  @Override
  public void procesar(double monto) {
    System.out.println("cobrando" + monto + "a la tarjeta visa 123");
  }
}
