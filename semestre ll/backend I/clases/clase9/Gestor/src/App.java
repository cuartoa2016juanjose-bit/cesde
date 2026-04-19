import model.Archivo;
import model.ArchivoPDF;
import model.ArchivoWORD;

import java.util.ArrayList;
import java.util.List;

public class App {
    public static void main(String[] args) throws Exception {
        List<Archivo> documento = new ArrayList<>();

        documento.add(new Archivo());
        documento.add(new ArchivoPDF());
        documento.add(new ArchivoPDF());

        for (Archivo archivo : documento) {
            archivo.abrir();
        }
    }
}
