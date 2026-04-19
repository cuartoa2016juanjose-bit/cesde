package models;

public class registro {
    private String personaladiministrativoId;
    private String contraseña_personaladiministrativo;
    private String nombre_personaladiministrativo;
    private String telefono_personaladministrativo;
    private String correo_personaladministrativo;

    public registro(String personaladiministrativoId, String contraseña_personaladiministrativo,
            String nombre_personaladiministrativo, String telefono_personaladministrativo,
            String correo_personaladministrativo) {
        this.personaladiministrativoId = personaladiministrativoId;
        this.contraseña_personaladiministrativo = contraseña_personaladiministrativo;
        this.nombre_personaladiministrativo = nombre_personaladiministrativo;
        this.telefono_personaladministrativo = telefono_personaladministrativo;
        this.correo_personaladministrativo = correo_personaladministrativo;
    }

    public String getPersonaladiministrativoId() {
        return personaladiministrativoId;
    }

    public void setPersonaladiministrativoId(String personaladiministrativoId) {
        this.personaladiministrativoId = personaladiministrativoId;
    }

    public String getContraseña_personaladiministrativo() {
        return contraseña_personaladiministrativo;
    }

    public void setContraseña_personaladiministrativo(String contraseña_personaladiministrativo) {
        this.contraseña_personaladiministrativo = contraseña_personaladiministrativo;
    }

    public String getNombre_personaladiministrativo() {
        return nombre_personaladiministrativo;
    }

    public void setNombre_personaladiministrativo(String nombre_personaladiministrativo) {
        this.nombre_personaladiministrativo = nombre_personaladiministrativo;
    }

    public String getTelefono_personaladministrativo() {
        return telefono_personaladministrativo;
    }

    public void setTelefono_personaladministrativo(String telefono_personaladministrativo) {
        this.telefono_personaladministrativo = telefono_personaladministrativo;
    }

    public String getCorreo_personaladministrativo() {
        return correo_personaladministrativo;
    }

    public void setCorreo_personaladministrativo(String correo_personaladministrativo) {
        this.correo_personaladministrativo = correo_personaladministrativo;
    }

}
