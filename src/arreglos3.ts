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

// Defino las variables y cargo los números en el arreglo:
let cantidad: number = Number(prompt(`Ingrese la cantidad de números: `));
let vector: number[] = new Array(cantidad);
let indice: number;

for (indice = 0; indice < cantidad; indice++) {
  vector[indice] = Number(prompt(`Ingrese vector n°[ ${indice} ]: `));
}

// Defino las variables para llevar la cuenta:

//Cuento los valores >0, <0 e =0
let numNeg: number = 0;
let numCero: number = 0;
let numPos: number = 0;

// Recorro el arreglo y voy contando según corresponda.
for (indice = 0; indice < cantidad; indice++) {
  if (vector[indice] === 0) {
    numCero++;
  } else if (vector[indice] > 0) {
    numPos++;
  } else {
    numNeg++;
  }
}

// Imprimo -numPos-, -numNeg-, -numCero-.
console.log(`Hay ${numPos} positivos, ${numNeg} negativos, ${numCero} ceros.`);
