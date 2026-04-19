package model;

public abstract class Figura {
    protected String color;
    protected String nombre;

    public Figura(){
    }

    public Figura(String color, String nombre) {
        this.color = color;
        this.nombre = nombre;
    }

    public void mostrarNombre(){
        System.out.println("El nombre de la figura es:"+ this.nombre);
    }

    public void mostrarColor(){
        System.out.println("El color de la figura es:"+ this.color);
    }

    public abstract double calcularArea();
    

}
