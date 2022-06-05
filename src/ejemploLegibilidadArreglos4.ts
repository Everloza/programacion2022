/*
Ejercicio – Nombres Deseados

• Construya un algoritmo que tenga un arreglo
de dimensión deseada por el usuario y llénelo
con los nombres que el usuario desee.
• Crear un arreglo de las posiciones que desee
el usuario y llenarlo con nombres de personas.

*/

// Algoritmo NombresPersonas

let dimensionArreglo: number = Number(
  prompt(`Ingrese la dimensión del arreglo: `)
);
let nombrePersonas: string[] = new Array(dimensionArreglo);
let indice: number;

for (indice = 0; indice < dimensionArreglo; indice++) {
  nombrePersonas[indice] = prompt(
    `Ingrese el nombre que quiere poner en el lugar ${indice}: `
  );
  console.log(
    `La persona que ingresó en la posición ${indice} es: ${nombrePersonas[indice]}`
  );
}
