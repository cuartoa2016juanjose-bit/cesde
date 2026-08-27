let listadoPro = document.getElementById("tabla-pro");

//Hacer evento para cuando la pagina se recargue
document.addEventListener("DOMContentLoaded", ()=>{
    //alert("Pagina recargada");
    getProducts();
});

//Funcion para obtener los datos de la API
async function getProducts(){
    try {
        let url = "http://localhost:3000/api/productos";
        let data = await fetch(url, { method:"GET", headers:{"contend-type": "json/aplication"}});
        let products = await data.json();
        console.log("productos", products);
        products.forEach((pro, i )=> {
            let fila = document.createElement("tr");
            fila.innerHTML = `
            <td>${(i+1)}</td>
            <td>${pro.nombre}</td>
            <td>${pro.descripcion}</td>
            <td>${pro.precio}</td>
            <td>${pro.stock}</td>
            <td>
            <img src= "${pro.imagen}", width="100px">
            </td>
            <td></td>
            `;
            listadoPro.appendChild(fila);
        });
    } catch (error) {
        console.log("Error");
    }
}