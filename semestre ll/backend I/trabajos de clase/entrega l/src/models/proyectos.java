package models;

public class proyectos {
    private String proyectoId;
    private String nombre_proyecto;
    private String tipo_proyecto;
    private String descripcion_proyecto;
    private String fechaInicio_proyecto;
    private String fechaFin_proyecto;
    private String estado_proyecto;

    public proyectos(String proyectoId, String nombre_proyecto, String tipo_proyecto, String descripcion_proyecto,
            String fechaInicio_proyecto, String fechaFin_proyecto, String estado_proyecto) {
        this.proyectoId = proyectoId;
        this.nombre_proyecto = nombre_proyecto;
        this.tipo_proyecto = tipo_proyecto;
        this.descripcion_proyecto = descripcion_proyecto;
        this.fechaInicio_proyecto = fechaInicio_proyecto;
        this.fechaFin_proyecto = fechaFin_proyecto;
        this.estado_proyecto = estado_proyecto;
    }

    public String getProyectoId() {
        return proyectoId;
    }

    public void setProyectoId(String proyectoId) {
        this.proyectoId = proyectoId;
    }

    public String getNombre_proyecto() {
        return nombre_proyecto;
    }

    public void setNombre_proyecto(String nombre_proyecto) {
        this.nombre_proyecto = nombre_proyecto;
    }

    public String getTipo_proyecto() {
        return tipo_proyecto;
    }

    public void setTipo_proyecto(String tipo_proyecto) {
        this.tipo_proyecto = tipo_proyecto;
    }

    public String getDescripcion_proyecto() {
        return descripcion_proyecto;
    }

    public void setDescripcion_proyecto(String descripcion_proyecto) {
        this.descripcion_proyecto = descripcion_proyecto;
    }

    public String getFechaInicio_proyecto() {
        return fechaInicio_proyecto;
    }

    public void setFechaInicio_proyecto(String fechaInicio_proyecto) {
        this.fechaInicio_proyecto = fechaInicio_proyecto;
    }

    public String getFechaFin_proyecto() {
        return fechaFin_proyecto;
    }

    public void setFechaFin_proyecto(String fechaFin_proyecto) {
        this.fechaFin_proyecto = fechaFin_proyecto;
    }

    public String getEstado_proyecto() {
        return estado_proyecto;
    }

    public void setEstado_proyecto(String estado_proyecto) {
        this.estado_proyecto = estado_proyecto;
    }

}
