/* Suma entre Números

• Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos.
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27.

*/

/* 
// Con WHILE.

let valor1: number = Number(prompt("Ingrese primer numero entero: "));
let valor2: number = Number(prompt("Ingrese segundo numero entero: "));
let actual, suma: number;
actual = valor1;
suma = 0;

while (actual <= valor2) {
  suma = suma + actual;
  actual++;
}
console.log("El resultado de la suma es: ", suma);

*/

// Con FOR.

let valor1: number = Number(prompt("Ingrese primer numero entero: "));
let valor2: number = Number(prompt("Ingrese segundo numero entero: "));
let actual, suma: number;
actual = valor1;
suma = 0;

for (let actual: number = valor1; actual <= valor2; actual++) {
  suma = suma + actual;
}
console.log("El resultado de la suma es: ", suma);
