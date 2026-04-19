package model;

public class User {
  private String name;
  private int idUser;
  private String phone;
  private String email;

  public User(String name, int idUser, String phone, String email) {
    this.name = name;
    this.idUser = idUser;
    this.phone = phone;
    this.email = email;
  }

  public User() {

  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getIdUser() {
    return idUser;
  }

  public void setIdUser(int idUser) {
    this.idUser = idUser;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;

  }

  public int suma(int a, int b) {
    return a + b;
  }

  public int resta(int a, int b) {
    return a - b;
  }

  public int multiplica(int a, int b) {
    return a * b;
  }

  public int dividi(int a, int b) {
    if (b == 0) {
      System.out.println("B no puede ser igual cero");
      return 0;
    }
    return a / b;
  }
}
