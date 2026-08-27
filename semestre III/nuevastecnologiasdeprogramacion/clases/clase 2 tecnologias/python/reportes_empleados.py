
import pandas as pd
import matplotlib.pyplot as plt
import mysql.connector

conexion = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="tech_store"
)

consulta = """
SELECT
ventas. id_venta,
ventas. fecha,
productos.nombre,
productos.categoria,
productos.precio,
ventas. cantidad,
clientes.nombre AS cliente,
clientes.ciudad,
(productos.precio*ventas.cantidad) AS total
FROM ventas
INNER JOIN productos
ON ventas. id_producto=productos.id_producto
INNER JOIN clientes
ON ventas.id_cliente=clientes.id_cliente
"""
print("#=========================================")
df = pd.read_sql(consulta, conexion);
print("#=========================================")

print(df);
print("#=========================================")
print("TOTAL VENDIDO");
print(df['total'].sum());
print(df['total'].mean());
print("#=========================================")
reporte = df.groupby("nombre")["cantidad"].sum();
print("#=========================================")
print(reporte);
ciudades = df.groupby("ciudad")["total"].sum();
print("#=========================================")
print(ciudades);
top = df.groupby("nombre")["cantidad"].sum();
print("#=========================================")
top = top.sort_values(ascending=False).head(5);
print(top);
print("#=========================================")
df.to_excel("ReporteVentas.xlsx", index=False);                         
print("Reporte generado correctamente");
print("#=========================================");
categorias = df.groupby("categoria")["total"].sum()
categorias.plot(kind="bar")
print("#=========================================")
plt.title("Ventas por Categoria")
plt.xlabel("Categoria")
plt.ylabel("Dinero Vendido")
plt.show()

categorias.plot(kind="pie", autopct="%1.1f%%")
plt.title("Participación de Categorías")
plt.ylabel("")
plt.show()
df["total"].plot(kind="hist", bins=10);
plt.title("Distribución de Ventas");
plt.xlabel("Valor Venta");
plt.show();
ventas_fecha = df.groupby("fecha")["total"].sum();
ventas_fecha.plot();
plt.title("Ventas por Fecha");
plt.xlabel("Fecha");
plt.ylabel("Total");
plt.show();



