/*
Seleccinar uno por uno de elementos en el html
*/

let titulo = document.getElementById('titulo');
console.log(titulo);

let parrafo = document.getElementById('parrafo');
console.log(parrafo);

let parrafo1 = document.querySelector('.parrafo1')
console.log(parrafo1)

let contenedor = document.querySelector('#contenedor');
console.log(contenedor);

let section = document.querySelector('section');
console.log(section);

/*
 seleccinar todos los elementos a la vez
 */
let todosLosParrafos = document.getElementsByClassName('parrafo1');
console.log(todosLosParrafos);

let todosLosH = document.getElementsByTagName('h1');
console.log(todosLosH);

let todosLosTextos = document.querySelectorAll('.parrafo1');
console.log(todosLosTextos)

titulo.innerText = 'Bienvenidos a la manipualcion del DOM desde el archivo de js';

/* 
navegacion del DOM

navegacion desde padres a hijos
 */

// hijos
let lista = document.getElementById('lista');
console.log(lista.children);
console.log(lista.firstElementChild);
console.log(lista.lastElementChild);
console.log(lista.children[1]);

// padres
let img1 = document.querySelector('.img1');
console.log(img1.parentElement);
console.log(img1.parentElement.parentElement);