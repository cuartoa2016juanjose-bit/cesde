package com.clasetres.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table (name = "cliente")
public class Mcliente {
    //ATRIBUTOS
    @Id
    @Column(length = 15, nullable = false)
    private String idcliente;
    @Column (length = 70, nullable = false)
    private String nomcliente;
    @Column(length = 50, nullable = false)
    private String dircliente;
    @Column(length = 10, nullable = false)
    private String teccliente;  
    @Column(nullable = false)
    private boolean activo;



    
    public String getIdcliente() {
        return idcliente;
    }
    public void setIdcliente(String idcliente) {
        this.idcliente = idcliente;
    }
    public String getNomcliente() {
        return nomcliente;
    }
    public void setNomcliente(String nomcliente) {
        this.nomcliente = nomcliente;
    }
    public String getDircliente() {
        return dircliente;
    }
    public void setDircliente(String dircliente) {
        this.dircliente = dircliente;
    }
    public String getTeccliente() {
        return teccliente;
    }
    public void setTeccliente(String teccliente) {
        this.teccliente = teccliente;
    }
    public boolean isActivo() {
        return activo;
    }
    public void setActivo(boolean activo) {
        this.activo = activo;
    }

    //RELACIONES ENTRE TABLAS
   
}
