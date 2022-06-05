/* Encontrar el Número Máximo

• Leer valores hasta que se introduzca un cero (0).
• El usuario puede introducir valores positivos y negativos.
• Encontrar el máximo de los elementos que se introdujeron.
• Analizar cómo cambia el programa para hallar el mínimo.

Ingrese número: 9
Ingrese número: 7
Ingrese número: -1
Ingrese número: 1
Ingrese número: 0
El máximo es 9

*/

// Algoritmo NumeroMaximo (a la derecha la versión de NumeroMinimo)
let conIngresos: boolean = false;
let num: number = Number(prompt("Ingrese un número: "));
let maxNum: number = num; //let minNum = num;

while (num !== 0) {
  conIngresos = true;

  if (num > maxNum) {
    //if (num < minNum) {
    maxNum = num; // minNum = num;
  }
  let num: number = Number(prompt("Ingrese un número: "));
}

if (conIngresos) {
  console.log("El máximo es ", maxNum); //console.log(“El mínimo es “,minNum);
}

/*
let continuar: number = 1;
let numero: number;
let maximo: number = -99999;
let minimo: number = 99999;
let contador: number = 0;
let suma: number = 0;

while (continuar !== 0) {
  numero = Number(prompt("ingrese numero: "));
  contador++;
  suma = numero + suma;
  continuar = Number(prompt("continuar?"));
  if (numero > maximo) {
    maximo = numero;
  }
  if (numero < minimo) minimo = numero;
}
console.log("maximo: " + maximo);
console.log("minimo: " + minimo);
console.log("media: " + suma / contador);
*/
