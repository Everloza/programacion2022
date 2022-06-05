/* 
Promedio-Máximo-Mínimo

• Diseñar un algoritmo que
lea números enteros hasta teclear 0.
• Determinar y mostrar el máximo, el mínimo y la
media de todos los numeros ingresados
• Pensar cuidadosamente como debemos inicializar
las variables.

*/

//Algoritmo PromMinMax

let min: number;
let max: number;
let num: number = Number(prompt("Ingrese un número (0 para cortar)"));

// Al principio, la cuenta de números ingresados es 0 y su suma también es 0
let count = 0;
let sum = 0;
let avg = 0;

// Inicializo el número mínimo y máximo en el primer valor que  ingresa!
let min = num;
let max = num;

while (num !== 0) {
  // Verifico si es el nuevo “mínimo”
  if (num < min) {
    min = num;
    // Verifico si es el nuevo “máximo”
  } else if (num > max) {
    max = num;
  }
}

// Acumulo el número ingresado en sum y aumento en uno el contador.
sum += num;
count++;
let num = Number(prompt("Ingrese un número (0 para cortar)"));

// Verifico que se haya ingresado al menos un número (para evitar la división por cero).
if (count > 0) {
  avg = sum / count;
  console.log("El mínimo es: ", min);
  console.log("El máximo es: ", max);
  console.log("El promedio es: ", avg);
} else {
  console.log("No ingreso ningún número!");
}
