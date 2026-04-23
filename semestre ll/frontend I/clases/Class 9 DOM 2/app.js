// sleccion de elementos en nuestro javascript

// const titulo = document.getElementById('titulo');
// const parrafo = document.getElementById('parrafo');
// const numIntentos = document.getElementById('numIntentos');
const cuadroTexto = document.getElementById('cuadroTexto');
const otroIntentar = document.getElementById('otroIntentar');
const reiniciar = document.getElementById('reiniciar');
let contador = 1;
let numRandom;


// titulo.innerText = 'Bienvenido al juego de adivinanza';
// parrafo.innerText = 'Favor ingresa un numero del 1-10';
// numIntentos.innerText = 'Intentos 0 / 3';

function crearTexto(selector, texto) {
    const etiquetaHtml = document .getElementById(selector);
    etiquetaHtml.innerText = texto
}

function iniciarJuego() {
    crearTexto('titulo', "Bienvenido al juego de adivinanza");
    crearTexto('parrafo', "Favor ingresa un numero del 1-10");
    crearTexto('numIntentos', "Intentos 0 / 3");
    numRandom = crearNumRandom();
    console.log(numRandom);
}

function crearNumRandom() {
    return Math.floor(Math.random()*10)+1;
}

function validarNum() {
    let numUsuario = parseInt(cuadroTexto.value);

    //validacion
    if (numUsuario < 1 || numUsuario > 10 || isNaN(numUsuario)) {
        crearTexto('titulo', "Sigue intentando");
        crearTexto('parrafo', "Error, dato ingresa no esta en el rango o no es un numero");
        crearTexto('numIntentos', `Intentos ${contador} / 3`);
    }
    // validacion cuando acierta
    if (numUsuario === numRandom) {
        crearTexto('titulo', "Bien hecho Steven");
        crearTexto('parrafo', "Felicidades Steven");
        crearTexto('numIntentos', `lo lograste en ${contador} intentos`);
    } else if (numUsuario < numRandom){
        crearTexto('titulo', "Sigue intentando");
        crearTexto('parrafo', "El número es secreto es mayor");
        crearTexto('numIntentos', `En ${contador} intentos`);
    } else{
        crearTexto('titulo', "Sigue intentando");
        crearTexto('parrafo', "El número es secreto es menor");
        crearTexto('numIntentos', `En ${contador} intentos`);
    }

    contador++
}

iniciarJuego();