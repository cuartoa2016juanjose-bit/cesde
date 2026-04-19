package model;

public class CuentaAhorro extends Cuenta {

  private double interes;

  public CuentaAhorro(String numCuenta, double saldo, int movimientos, double interes) {
    super(numCuenta, saldo, movimientos);
    this.interes = interes;
  }

  public CuentaAhorro(double interes) {
    this.interes = interes;
  }

  public CuentaAhorro(String numCuenta, double saldo, int movimientos) {
    super(numCuenta, saldo, movimientos);
  }

  public CuentaAhorro() {

  }

  @Override
  public void consultarSaldo() {
    System.out.println("cuenta de ahorro");

  }

  public double getInteres() {
    return interes;
  }

  public void setInteres(double interes) {
    this.interes = interes;
  }

}
