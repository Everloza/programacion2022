/* 
Dados

• Al tirar un dado tenemos 1/6 de
probabilidades de sacar 6.
• Si tiramos dos dados tenemos 1/36
probabilidades de sacar doble 6
• Al aumentar el número de dados la
probabilidad de sacar todos 6 es cada
vez menor.
• Escriba un programa que calcule la
probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato
ingresado por al usuario).

*/

// Algoritmo Dados

//... funcionalidad de ingreso de datos ...
let n: number = Number(prompt("Cuántas veces va a tirar?"));

// Determino la probabilidad de que salga una cara del dado (por ejemplo, 6).
let probCara: number = 1 / 6;
// Es importante inicializar la probabilidad final en 1.
let probFinal: number = 1;

for (let contador: number = 1; contador <= n; contador++) {
  probFinal = probFinal * probCara;
}
console.log("La probabilidad es: ", probFinal);
