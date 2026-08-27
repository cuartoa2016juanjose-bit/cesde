package com.clasetres.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vehiculo")
public class MVehiculo {
    @Id
    @Column(length = 6, nullable = false)
    private String placa;
    @Column(length = 25, nullable = false)
    private String marca;
    @Column(length = 4, nullable = false)
    private String modelo;
    @Column (nullable = false)
    private Integer valor;
    @Column(nullable = false)
    private Boolean acivo;

    
    public String getPlaca() {
        return placa;
    }
    public void setPlaca(String placa) {
        this.placa = placa;
    }
    public String getMarca() {
        return marca;
    }
    public void setMarca(String marca) {
        this.marca = marca;
    }
    public String getModelo() {
        return modelo;
    }
    public void setModelo(String modelo) {
        this.modelo = modelo;
    }
    public Integer getValor() {
        return valor;
    }
    public void setValor(Integer valor) {
        this.valor = valor;
    }
    public Boolean getAcivo() {
        return acivo;
    }
    public void setAcivo(Boolean acivo) {
        this.acivo = acivo;
    }

    //ENCAPSULAMIENTO
    
}
