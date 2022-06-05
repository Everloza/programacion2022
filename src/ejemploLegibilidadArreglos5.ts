/* 
Ejercicio – Dos Arreglos

• Construya un algoritmo que tenga dos arreglos
uno que almacene 2 nombres y otro que
almacene 3 números ambos ingresados por el
usuario.
• Al final debe imprimir los valores por consola.

*/

// Algoritmo DosArreglos

let arregloNombres: string[] = new Array(2);
let arregloNumeros: number[] = new Array(3);
let indice: number;

for (indice = 0; indice < 2; indice++) {
  arregloNombres[indice] = prompt(
    `Ingrese el nombre de la posición ${indice}: `
  );
  console.log(
    `El nombre en la posición ${indice} es: ${arregloNombres[indice]}`
  );
}
for (indice = 0; indice < 3; indice++) {
  arregloNumeros[indice] = Number(
    prompt(`Ingrese el número de la posición ${indice}: `)
  );
  console.log(
    `El número en la posición ${indice} es: ${arregloNumeros[indice]}`
  );
}
