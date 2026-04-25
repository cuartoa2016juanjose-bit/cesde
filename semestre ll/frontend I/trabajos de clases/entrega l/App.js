//Contexto: En una empresa hay 5 máquinas produce piezas de engranajes. El operario ingresa la cantidad de piezas buenas, defectuosas y fecha de fabricación. Se debe calcular el porcentaje de eficiencia de cada una de las máquinas y mostrarlo en pantalla.

//Desarrollo  en JS: Procesar los datos, calcular la eficiencia (buenas / total) * 100, crear dinámicamente un párrafo en el div mostrando el porcentaje de eficiencia de cada maquina y clasificar como Alta eficiencia (>85%) o Baja eficiencia (≤85%) he identificar con colores según se el caso.

const buenasInput1 = document.querySelectorAll('#buenasInput')[0];
const defInput1 = document.querySelectorAll('#defInput')[0];
const btnProd1 = document.querySelectorAll('#btnProd')[0];
const prodResult1 = document.querySelectorAll('#prodResult')[0];
function calcularEficiencia1() {
  let buenas = parseInt(buenasInput1.value);
  let defectuosas = parseInt(defInput1.value);
  let total = buenas + defectuosas;
  let eficiencia = (buenas / total) * 100;

  if (eficiencia > 85) {
    prodResult1.innerHTML = "<p style='color: green; font-weight: bold;'>alta eficiencia: " + eficiencia.toFixed(2) + "</p>";
  } else {
    prodResult1.innerHTML = "<p style='color: orange; font-weight: bold;'>baja eficiencia: " + eficiencia.toFixed(2) + "</p>";
  }
}
btnProd1.onclick = calcularEficiencia1;


const buenasInput2 = document.querySelectorAll('#buenasInput')[1];
const defInput2 = document.querySelectorAll('#defInput')[1];
const btnProd2 = document.querySelectorAll('#btnProd')[1];
const prodResult2 = document.querySelectorAll('#prodResult')[1];
function calcularEficiencia2() {
  let buenas = parseInt(buenasInput2.value);
  let defectuosas = parseInt(defInput2.value);
  let total = buenas + defectuosas;
  let eficiencia = (buenas / total) * 100;
  if (eficiencia > 85) {
    prodResult2.innerHTML = "<p style='color: green; font-weight: bold;'>alta eficiencia: " + eficiencia.toFixed(2) + "</p>";
  } else {
    prodResult2.innerHTML = "<p style='color: orange; font-weight: bold;'>baja eficiencia: " + eficiencia.toFixed(2) + "</p>";
  }
}
btnProd2.onclick = calcularEficiencia2;


const buenasInput3 = document.querySelectorAll('#buenasInput')[2];
const defInput3 = document.querySelectorAll('#defInput')[2];
const btnProd3 = document.querySelectorAll('#btnProd')[2];
const prodResult3 = document.querySelectorAll('#prodResult')[2];
function calcularEficiencia3() {
  let buenas = parseInt(buenasInput3.value);
  let defectuosas = parseInt(defInput3.value);
  let total = buenas + defectuosas;
  let eficiencia = (buenas / total) * 100;
  if (eficiencia > 85) {
    prodResult3.innerHTML = "<p style='color: green; font-weight: bold;'>alta eficiencia: " + eficiencia.toFixed(2) + "</p>";
  } else {
    prodResult3.innerHTML = "<p style='color: orange; font-weight: bold;'>baja eficiencia: " + eficiencia.toFixed(2) + "</p>";
  }
}
btnProd3.onclick = calcularEficiencia3;

const buenasInput4 = document.querySelectorAll('#buenasInput')[3];
const defInput4 = document.querySelectorAll('#defInput')[3];
const btnProd4 = document.querySelectorAll('#btnProd')[3];
const prodResult4 = document.querySelectorAll('#prodResult')[3];
function calcularEficiencia4() {
  let buenas = parseInt(buenasInput4.value);
  let defectuosas = parseInt(defInput4.value);
  let total = buenas + defectuosas;
  let eficiencia = (buenas / total) - 100;

  if (eficiencia > 85) {
    prodResult4.innerHTML = "<p style='color: green; font-weight: bold;'>alta eficiencia: " + eficiencia.toFixed(2) + "</p>";
  } else {
    prodResult4.innerHTML = "<p style='color: orange; font-weight: bold;'>baja eficiencia: " + eficiencia.toFixed(2) + "</p>";
  }
}
btnProd4.onclick = calcularEficiencia4;

const buenasInput5 = document.querySelectorAll('#buenasInput')[4];
const defInput5 = document.querySelectorAll('#defInput')[4];
const btnProd5 = document.querySelectorAll('#btnProd')[4];
const prodResult5 = document.querySelectorAll('#prodResult')[4];
function calcularEficiencia5() {

}
btnProd5.onclick = calcularEficiencia5;