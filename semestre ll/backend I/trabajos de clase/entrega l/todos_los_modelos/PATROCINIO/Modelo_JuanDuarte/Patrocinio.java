package models;

public class Patrocinio {
    private String nombre;
    private int contacto;
    private String tipo;
    private String aporte;

    public Patrocinio(String nombre, int contacto, String tipo, String aporte) {
        this.nombre = nombre;
        this.contacto = contacto;
        this.tipo = tipo;
        this.aporte = aporte;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getContacto() {
        return contacto;
    }

    public void setContacto(int contacto) {
        this.contacto = contacto;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getAporte() {
        return aporte;
    }

    public void setAporte(String aporte) {
        this.aporte = aporte;
    }
}
