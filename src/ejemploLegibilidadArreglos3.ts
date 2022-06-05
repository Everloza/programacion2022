/*
Ejercicio – Números Deseados

• Construya un algoritmo que tenga un arreglo de
dimensión 5 y llénelo con los números que el usuario
desee
• Muestre los números del arreglo al usuario

*/

// Algoritmo NumerosDeseados
let nroDeseadoArreglo: number[] = new Array(5);
let nro: number;
let indice: number;

for (indice = 0; indice < 5; indice++) {
  nro = Number(
    prompt(`Indique el número que desea incorporar en la posición ${indice}: `)
  );
  nroDeseadoArreglo[indice] = nro;
  console.log(
    `El número en la posición ${indice} es ${nroDeseadoArreglo[indice]}`
  );
}
