/*
Tipos de Números en Arreglo

• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario).
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay.

Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 ceros

*/

//Algoritmo TiposNumero

let cantidad: number = Number(prompt(`Ingrese la cantidad de números: `));
let v: number[] = new Array(cantidad);
let indice: number;

for (indice = 0; indice < cantidad; indice++) {
  v[indice] = Number(prompt(`Ingrese v[ ${indice} ]: `));
}
let numNeg: number = 0;
let numCero: number = 0;
let numPos: number = 0;

for (indice = 0; indice < cantidad; indice++) {
  if (v[indice] === 0) {
    numCero++;
  } else if (v[indice] > 0) {
    numPos++;
  } else {
    numNeg++;
  }
}
console.log(`Hay ${numPos} positivos, ${numNeg} negativos, ${numCero} ceros.`);
