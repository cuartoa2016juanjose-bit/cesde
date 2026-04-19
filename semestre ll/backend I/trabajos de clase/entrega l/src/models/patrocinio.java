package models;

public class patrocinio {
    private String patrocinadorId;
    private String nombre_patrocinador;
    private String contacto_patrocinador;
    private String tipo_patrocinador;
    private String aporte_patrocinador;

    public patrocinio(String patrocinadorId, String nombre_patrocinador, String contacto_patrocinador,
            String tipo_patrocinador, String aporte_patrocinador) {
        this.patrocinadorId = patrocinadorId;
        this.nombre_patrocinador = nombre_patrocinador;
        this.contacto_patrocinador = contacto_patrocinador;
        this.tipo_patrocinador = tipo_patrocinador;
        this.aporte_patrocinador = aporte_patrocinador;
    }

    public String getPatrocinadorId() {
        return patrocinadorId;
    }

    public void setPatrocinadorId(String patrocinadorId) {
        this.patrocinadorId = patrocinadorId;
    }

    public String getNombre_patrocinador() {
        return nombre_patrocinador;
    }

    public void setNombre_patrocinador(String nombre_patrocinador) {
        this.nombre_patrocinador = nombre_patrocinador;
    }

    public String getContacto_patrocinador() {
        return contacto_patrocinador;
    }

    public void setContacto_patrocinador(String contacto_patrocinador) {
        this.contacto_patrocinador = contacto_patrocinador;
    }

    public String getTipo_patrocinador() {
        return tipo_patrocinador;
    }

    public void setTipo_patrocinador(String tipo_patrocinador) {
        this.tipo_patrocinador = tipo_patrocinador;
    }

    public String getAporte_patrocinador() {
        return aporte_patrocinador;
    }

    public void setAporte_patrocinador(String aporte_patrocinador) {
        this.aporte_patrocinador = aporte_patrocinador;
    }

}
