package models;

public class mantenimientorecursos {
    private String nombre;
    private String categoria;
    private String estado;
    private String ubicacion;
    private int fechadeingreso;

    public mantenimientorecursos(String nombre, String categoria, String estado, String ubicacion, int fechadeingreso) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.estado = estado;
        this.ubicacion = ubicacion;
        this.fechadeingreso = fechadeingreso;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public int getFechadeingreso() {
        return fechadeingreso;
    }

    public void setFechadeingreso(int fechadeingreso) {
        this.fechadeingreso = fechadeingreso;
    }

}