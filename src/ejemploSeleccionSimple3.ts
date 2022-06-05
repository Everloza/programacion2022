/* 
Estructura de Control - Selección
Determine qué Hace el Siguiente Código.

Dados tres números, ingresados por el usuario, el algoritmo se fija
si el primer número es negativo en cuyo caso muestra el producto
de los tres números, sino muestra la suma de estos .

*/

let no1: number = Number(prompt("Ingrese el primer numero."));
let no2: number = Number(prompt("Ingrese el segundo numero."));
let no3: number = Number(prompt("Ingrese el tercer numero."));

let result;
if (no1 < 0) {
  result = no1 * no2 * no3;
  console.log("El no1 es negativo:", no1, "Entonces los mult. y me da:");
} else {
  result = no1 + no2 + no3;
  console.log("El no1 es positivo:", no1, "Entonces sumo los numeros y me da:");
}
console.log(result); // Imprimo el resultado en la consola.
