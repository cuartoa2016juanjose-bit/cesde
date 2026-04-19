package models;

public class Recursos {
    private int recursoId;
    private String nombre;
    private String categoria;
    private String estado;
    private String ubicacion;

    public Recursos(int recursoId, String nombre, String categoria, String estado, String ubicacion) {
        this.recursoId = recursoId;
        this.nombre = nombre;
        this.categoria = categoria;
        this.estado = estado;
        this.ubicacion = ubicacion;
    }

    public int getRecursoId() {
        return recursoId;
    }

    public void setRecursoId(int recursoId) {
        this.recursoId = recursoId;
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
}
