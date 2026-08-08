const d = document;
let clienteInput = d.querySelector(".cliente");
let productoInput = d.querySelector(".producto");
let precioInput = d.querySelector(".precio");
let imagenInput = d.querySelector(".imagen");
let observacionInput = d.querySelector(".observacion");
let btnGuardar = d.querySelector(".btn-guardar");
let tabla = d.querySelector(".table tbody");
let buscadorInput = d.querySelector(".buscador");

btnGuardar.addEventListener("click", () => {
  let datos = validarFormulario();
  if (datos != null) {
    guardarDatos(datos);
  }
  borrarTabla();
  mostrarDatos();
});

function validarFormulario() {
  let datosForm;
  if (clienteInput.value == "" || productoInput.value == "" || precioInput.value == "" || imagenInput.value == "") {
    alert("Todos los campos son obligatorios");
    return;
  } else {
    datosForm = {
      cliente: clienteInput.value,
      producto: productoInput.value,
      precio: precioInput.value,
      imagen: imagenInput.value,
      observacion: observacionInput.value
    }
    console.log(datosForm);
    clienteInput.value = "";
    productoInput.value = "";
    precioInput.value = "";
    imagenInput.value = "";
    observacionInput.value = "";
    return datosForm;
  }
}
const listadoPedidos = "Pedidos";
function guardarDatos(datos) {
  let pedidos = [];
  //extraer los datos guardados previamente en el local storage
  let pedidosGuardados = JSON.parse(localStorage.getItem("listadoPedidos"));
  //validar los datos guardados previamente en el local storage
  if (pedidosGuardados != null) {
    pedidos = pedidosGuardados;
  }
  //agregar el pedido nuevo al arreglo
  pedidos.push(datos);
  //guardar los datos en el local storage
  localStorage.setItem("listadoPedidos", JSON.stringify(pedidos));
  //validar que los datos se guardaron correctamente
  alert("Datos guardados correctamente");

}
//funcion para extraer los datos guardados en el local storage
function mostrarDatos(filtro = "") {
  let pedidos = [];
  let pedidosGuardados = JSON.parse(localStorage.getItem("listadoPedidos"));
  if (pedidosGuardados != null) {
    pedidos = pedidosGuardados;
  }
  let pedidosConIndice = pedidos.map((p, indiceReal) => ({ ...p, indiceReal }));
  if (filtro !== "") {
    let filtroLower = filtro.toLowerCase();
    pedidosConIndice = pedidosConIndice.filter((p) =>
      p.cliente.toLowerCase().startsWith(filtroLower) ||
      p.producto.toLowerCase().startsWith(filtroLower) ||
      p.precio.toString().startsWith(filtroLower)
    );
  }

  pedidosConIndice.forEach((p) => {
    let fila = d.createElement("tr");
    fila.innerHTML = `
        <td>${p.indiceReal + 1}</td>
        <td>${p.cliente}</td>
        <td>${p.producto}</td>
        <td>${p.precio}</td>
        <td><img src="${p.imagen}" width="50%"></td>
        <td>${p.observacion}</td>
        <td>
        <span  onclick="actualizarPedido(${p.indiceReal})" class=" btn-editar btn btn-warning"> ✏️</span>
        <span  onclick="eliminarPedido(${p.indiceReal})" class=" btn-eliminar btn btn-danger"> ❌ </span>
        </td>
    `;
    tabla.appendChild(fila);
  });
}
function borrarTabla() {
  let filas = d.querySelectorAll(".table tbody tr");
  filas.forEach((f) => {
    f.remove();
  });
}
function eliminarPedido(pos) {
  let pedidos = [];
  let pedidosGuardados = JSON.parse(localStorage.getItem("listadoPedidos"));
  if (pedidosGuardados != null) {
    pedidos = pedidosGuardados;
  }
  let confirmar = confirm("¿Desea eliminar el pedido del cliente: " + pedidos[pos].cliente + " (" + pedidos[pos].producto + ") ");
  if (confirmar) {
    pedidos.splice(pos, 1);
    alert("pedido eliminado correctamente");
    localStorage.setItem("listadoPedidos", JSON.stringify(pedidos));
    borrarTabla();
    mostrarDatos();
  }
}

//actualizar pedidos
function actualizarPedido(pos) {
  let pedidos = [];
  //extraer los datos guardados previamente en el local storage
  let pedidosGuardados = JSON.parse(localStorage.getItem("listadoPedidos"));
  //validar los datos guardados previamente en el local storage
  if (pedidosGuardados != null) {
    pedidos = pedidosGuardados;
  }
  clienteInput.value = pedidos[pos].cliente;
  productoInput.value = pedidos[pos].producto;
  precioInput.value = pedidos[pos].precio;
  imagenInput.value = pedidos[pos].imagen;
  observacionInput.value = pedidos[pos].observacion;

  let btnActualizar = d.querySelector(".btn-actualizar");
  btnActualizar.classList.toggle("d-none");
  btnGuardar.classList.toggle("d-none");

  btnActualizar.addEventListener("click", () => {
    pedidos[pos].cliente = clienteInput.value;
    pedidos[pos].producto = productoInput.value;
    pedidos[pos].precio = precioInput.value;
    pedidos[pos].imagen = imagenInput.value;
    pedidos[pos].observacion = observacionInput.value;

    localStorage.setItem("listadoPedidos", JSON.stringify(pedidos));
    alert("Pedido actualizado correctamente");

    clienteInput.value = "";
    productoInput.value = "";
    precioInput.value = "";
    imagenInput.value = "";
    observacionInput.value = "";

    btnActualizar.classList.toggle("d-none");
    btnGuardar.classList.toggle("d-none");

    borrarTabla();
    mostrarDatos();

  });

}
buscadorInput.addEventListener("input", () => {
  borrarTabla();
  mostrarDatos(buscadorInput.value);
});

d.addEventListener("DOMContentLoaded", function () {
  borrarTabla();
  mostrarDatos();
});
