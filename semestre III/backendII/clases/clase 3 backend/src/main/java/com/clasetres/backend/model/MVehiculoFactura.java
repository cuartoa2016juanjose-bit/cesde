package com.clasetres.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "vehiculofactura")
public class MVehiculoFactura {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer consecutivo;
    @Column(nullable = false)
    private Integer codfactura;
    @Column(length = 6, nullable = false)
    private String placa;
    @Column(nullable = false)
    private Integer valorventa;


    
    public Integer getConsecutivo() {
        return consecutivo;
    }
    public void setConsecutivo(Integer consecutivo) {
        this.consecutivo = consecutivo;
    }
    public Integer getCodfactura() {
        return codfactura;
    }
    public void setCodfactura(Integer codfactura) {
        this.codfactura = codfactura;
    }
    public String getPlaca() {
        return placa;
    }
    public void setPlaca(String placa) {
        this.placa = placa;
    }
    public Integer getValorventa() {
        return valorventa;
    }
    public void setValorventa(Integer valorventa) {
        this.valorventa = valorventa;
    }


}
