package models;

public class mantenimientoderecursos {
    private String manteni_recursoId;
    private String nombre_mantenimientorecursos;
    private String categoria_mantenimientorecursos;
    private String estado_mantenimientorecursos;
    private String ubicacion_mantenimientorecursos;
    private String fechadeingreso_mantenimientorecursos;

    public mantenimientoderecursos(String manteni_recursoId, String nombre_mantenimientorecursos,
            String categoria_mantenimientorecursos, String estado_mantenimientorecursos,
            String ubicacion_mantenimientorecursos, String fechadeingreso_mantenimientorecursos) {
        this.manteni_recursoId = manteni_recursoId;
        this.nombre_mantenimientorecursos = nombre_mantenimientorecursos;
        this.categoria_mantenimientorecursos = categoria_mantenimientorecursos;
        this.estado_mantenimientorecursos = estado_mantenimientorecursos;
        this.ubicacion_mantenimientorecursos = ubicacion_mantenimientorecursos;
        this.fechadeingreso_mantenimientorecursos = fechadeingreso_mantenimientorecursos;
    }

    public String getManteni_recursoId() {
        return manteni_recursoId;
    }

    public void setManteni_recursoId(String manteni_recursoId) {
        this.manteni_recursoId = manteni_recursoId;
    }

    public String getNombre_mantenimientorecursos() {
        return nombre_mantenimientorecursos;
    }

    public void setNombre_mantenimientorecursos(String nombre_mantenimientorecursos) {
        this.nombre_mantenimientorecursos = nombre_mantenimientorecursos;
    }

    public String getCategoria_mantenimientorecursos() {
        return categoria_mantenimientorecursos;
    }

    public void setCategoria_mantenimientorecursos(String categoria_mantenimientorecursos) {
        this.categoria_mantenimientorecursos = categoria_mantenimientorecursos;
    }

    public String getEstado_mantenimientorecursos() {
        return estado_mantenimientorecursos;
    }

    public void setEstado_mantenimientorecursos(String estado_mantenimientorecursos) {
        this.estado_mantenimientorecursos = estado_mantenimientorecursos;
    }

    public String getUbicacion_mantenimientorecursos() {
        return ubicacion_mantenimientorecursos;
    }

    public void setUbicacion_mantenimientorecursos(String ubicacion_mantenimientorecursos) {
        this.ubicacion_mantenimientorecursos = ubicacion_mantenimientorecursos;
    }

    public String getFechadeingreso_mantenimientorecursos() {
        return fechadeingreso_mantenimientorecursos;
    }

    public void setFechadeingreso_mantenimientorecursos(String fechadeingreso_mantenimientorecursos) {
        this.fechadeingreso_mantenimientorecursos = fechadeingreso_mantenimientorecursos;
    }

}