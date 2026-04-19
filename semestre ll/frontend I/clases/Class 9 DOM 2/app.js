// selección de elementos html en  nuestro JS
// const titulo = document.getElementById('titulo');
// const parrafo = document.getElementById('parrafo');
// const numIntentos = document.getElementById('numIntentos');
const cuadroTexto = document.getElementById('cuadroTexto');
const otroIntentar = document.getElementById('otroIntentar');
const reiniciar = document.getElementById('reiniciar');
let contador = 1;
let numAleatorio;


// titulo.innerText = 'Bienvenidos al juegos de adivinanzas';
// parrafo.innerText = 'Favor ingresar un numero del 1-10';
// numIntentos.innerText = 'Intentos 0 / 3';

function crearTexto(selector, texto){
    const etiquetaHtml = document.getElementById(selector);
    etiquetaHtml.innerText = texto;
}

function iniciarJuego(){
    crearTexto('titulo',"Bienvenidos al juegos de adivinanzas");
    crearTexto('parrafo',"Favor ingresar un numero del 1-10");
    crearTexto('numIntentos',"Intentos 0 / 3");
    numAleatorio = crearNumAleatorio();
    console.log(numAleatorio);
}

function crearNumAleatorio(){
    return Math.floor(Math.random()*10)+1;
}

function limpiarInput(params) {
    cuadroTexto.value = "";
}

function finalizarJuego() {
    otroIntentar.disabled = true;
    reiniciar.disabled = false;
    limpiarInput();
}

function reinicarJuego() {
    console.log("La funcion se ha activado");
}

function validarNum(){
    let numUsuario = parseInt(cuadroTexto.value);
    console.log(`El numero del usuario es ${typeof(numUsuario)} y el nun Aleatroio es ${numAleatorio}`);
    // validación de rango
    if(numUsuario < 1 || numUsuario>10 || isNaN(numUsuario)){
        crearTexto('titulo',"Sigue itentado");
        crearTexto('parrafo',"!Error¡ Datos ingresado no está en el rango o no es un número");
        crearTexto('numIntentos',`Intentos ${contador} / 3`);
    } else{
        // validación cuando acierta el numero
        if(numUsuario === numAleatorio){
            crearTexto('titulo',"Bien hecho lo has logrado");
            crearTexto('parrafo',"¡¡¡Felicitaciones!!!");
            crearTexto('numIntentos',`Lo lograste en intentos ${contador} / 3`);
            finalizarJuego();
        }else if(numUsuario < numAleatorio){
            crearTexto('titulo',"Sigue intentando");
            crearTexto('parrafo',"El numero secreto es mayor");
            crearTexto('numIntentos',`Intentos ${contador} / 3`);
        }else{
            crearTexto('titulo',"Sigue intentando");
            crearTexto('parrafo',"El numero secreto es menor");
            crearTexto('numIntentos',`Intentos ${contador} / 3`);
        }
    }
    contador++;
    limpiarInput();

    if (contador > 3) {
        crearTexto('titulo',"Fin del juego");
        crearTexto('parrafo',"No lo has logrado");
    }
    finalizarJuego();

}

iniciarJuego();