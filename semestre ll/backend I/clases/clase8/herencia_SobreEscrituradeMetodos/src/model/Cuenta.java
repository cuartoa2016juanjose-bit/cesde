package model;

public class Cuenta {
  private String numCuenta;
  private double saldo;
  private int movimientos;

  public Cuenta(String numCuenta, double saldo, int movimientos) {
    this.numCuenta = numCuenta;
    this.saldo = saldo;
    this.movimientos = movimientos;
  }

  public Cuenta() {

  }

  public void consultarSaldo() {
    System.out.println("cuenta padre");
  }

  public double retirarDinero(int retirar) {
    return getSaldo() - retirar;
  }

  public String getNumCuenta() {
    return numCuenta;
  }

  public void setNumCuenta(String numCuenta) {
    this.numCuenta = numCuenta;
  }

  public double getSaldo() {
    return saldo;
  }

  public void setSaldo(double saldo) {
    this.saldo = saldo;
  }

  public int getMovimientos() {
    return movimientos;
  }

  public void setMovimientos(int movimientos) {
    this.movimientos = movimientos;
  }
}
