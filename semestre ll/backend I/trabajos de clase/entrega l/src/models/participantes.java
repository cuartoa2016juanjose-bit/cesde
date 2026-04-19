package models;

public class participantes {
    private String participanteId;
    private String nombre_participante;
    private String ubicacion_participante;
    private String correo_participante;
    private String rol_participante;

    public participantes(String participanteId, String nombre_participante, String ubicacion_participante,
            String correo_participante, String rol_participante) {
        this.participanteId = participanteId;
        this.nombre_participante = nombre_participante;
        this.ubicacion_participante = ubicacion_participante;
        this.correo_participante = correo_participante;
        this.rol_participante = rol_participante;
    }

    public String getParticipanteId() {
        return participanteId;
    }

    public void setParticipanteId(String participanteId) {
        this.participanteId = participanteId;
    }

    public String getNombre_participante() {
        return nombre_participante;
    }

    public void setNombre_participante(String nombre_participante) {
        this.nombre_participante = nombre_participante;
    }

    public String getUbicacion_participante() {
        return ubicacion_participante;
    }

    public void setUbicacion_participante(String ubicacion_participante) {
        this.ubicacion_participante = ubicacion_participante;
    }

    public String getCorreo_participante() {
        return correo_participante;
    }

    public void setCorreo_participante(String correo_participante) {
        this.correo_participante = correo_participante;
    }

    public String getRol_participante() {
        return rol_participante;
    }

    public void setRol_participante(String rol_participante) {
        this.rol_participante = rol_participante;
    }

}