/* 
Ejercicio – Suma Elementos Arreglo

• Construya un algoritmo que sume todos los
elementos de un arreglo de tamaño N.
• La dimensión del arreglo es ingresada por el
usuario.
• Los elementos (números) del arreglo son
ingresados por el usuario.

*/

// Algoritmo SumaElementosArreglo

let dimensionArreglo: number = Number(
  prompt(`Ingrese la dimensión del arreglo: `)
);
let arreglo: number[] = new Array(dimensionArreglo);
let indice: number;
let resultado: number = 0;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arreglo[indice] = Number(
    prompt(`Indique el nro que va en la posición ${indice}: `)
  );
  resultado += arreglo[indice];
  console.log(`El número en la posición ${indice} es: ${arreglo[indice]}`);
}
console.log(`La suma del arreglo es: ${resultado}`);
