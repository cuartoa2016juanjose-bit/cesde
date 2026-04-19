import model.Cuenta;
import model.CuentaAhorro;
import model.CuentaCorriente;

public class App {
    public static void main(String[] args) throws Exception {
        Cuenta juan = new CuentaAhorro();
        Cuenta pedro = new CuentaAhorro();
        Cuenta maria = new CuentaCorriente();

        juan.consultarSaldo();
        pedro.consultarSaldo();
        maria.consultarSaldo();
    }
}
