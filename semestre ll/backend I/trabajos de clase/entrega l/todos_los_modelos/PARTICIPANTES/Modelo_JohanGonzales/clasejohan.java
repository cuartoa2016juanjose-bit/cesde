package models;

public class clasejohan {
    private String nombre;
    private String ubicacion;
    private String correo;
    private String rol;

    public clasejohan(String nombre, String ubicacion, String correo, String rol) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.correo = correo;
        this.rol = rol;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

}