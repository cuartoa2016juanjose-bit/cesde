package model;

public class Triangulo extends Figura{

    private double altura;
    private double base;

    public Triangulo(double altura, double base) {
        this.altura = altura;
        this.base = base;
    }
    public Triangulo(String color, String nombre, double altura, double base) {
        super(color, nombre);
        this.altura = altura;
        this.base = base;
    }

    public double calcularArea(){
        return base * altura;
    }


}
