import model.MetododePago;
import model.Paypal;
import model.TarjetadeCredito;

public class App {
    public static void main(String[] args) throws Exception {

        MetododePago pago1 = new TarjetadeCredito();
        MetododePago pago2 = new Paypal();

        pago1.procesar(100);
        pago2.procesar(200);
    }
}
