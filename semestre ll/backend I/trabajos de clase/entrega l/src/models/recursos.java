package models;

public class recursos {
    private String recursoId;
    private String nombre_delrecurso;
    private String categoria_delrecurso;
    private String estado_delrecurso;
    private String ubicacion_delrecurso;

    public recursos(String recursoId, String nombre_delrecurso, String categoria_delrecurso, String estado_delrecurso,
            String ubicacion_delrecurso) {
        this.recursoId = recursoId;
        this.nombre_delrecurso = nombre_delrecurso;
        this.categoria_delrecurso = categoria_delrecurso;
        this.estado_delrecurso = estado_delrecurso;
        this.ubicacion_delrecurso = ubicacion_delrecurso;
    }

    public String getRecursoId() {
        return recursoId;
    }

    public void setRecursoId(String recursoId) {
        this.recursoId = recursoId;
    }

    public String getNombre_delrecurso() {
        return nombre_delrecurso;
    }

    public void setNombre_delrecurso(String nombre_delrecurso) {
        this.nombre_delrecurso = nombre_delrecurso;
    }

    public String getCategoria_delrecurso() {
        return categoria_delrecurso;
    }

    public void setCategoria_delrecurso(String categoria_delrecurso) {
        this.categoria_delrecurso = categoria_delrecurso;
    }

    public String getEstado_delrecurso() {
        return estado_delrecurso;
    }

    public void setEstado_delrecurso(String estado_delrecurso) {
        this.estado_delrecurso = estado_delrecurso;
    }

    public String getUbicacion_delrecurso() {
        return ubicacion_delrecurso;
    }

    public void setUbicacion_delrecurso(String ubicacion_delrecurso) {
        this.ubicacion_delrecurso = ubicacion_delrecurso;
    }

}
