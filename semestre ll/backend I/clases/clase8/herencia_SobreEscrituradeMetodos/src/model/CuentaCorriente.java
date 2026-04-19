package model;

public class CuentaCorriente extends Cuenta {
  private double sobreGiro;
  private int numeroDias;

  public CuentaCorriente(String numCuenta, double saldo, int movimientos, double sobreGiro, int numeroDias) {
    super(numCuenta, saldo, movimientos);
    this.sobreGiro = sobreGiro;
    this.numeroDias = numeroDias;
  }

  public CuentaCorriente(double sobreGiro, int numeroDias) {
    this.sobreGiro = sobreGiro;
    this.numeroDias = numeroDias;
  }

  public CuentaCorriente() {

  }

  public double getSobreGiro() {
    return sobreGiro;
  }

  public void setSobreGiro(double sobreGiro) {
    this.sobreGiro = sobreGiro;
  }

  public int getNumeroDias() {
    return numeroDias;
  }

  public void setNumeroDias(int numeroDias) {
    this.numeroDias = numeroDias;
  }

}
