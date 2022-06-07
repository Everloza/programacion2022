/* 
// Producto Escalar

• Cargue dos arreglos de dimensión N números
(la cantidad es ingresada por el usuario)
• Calcule el producto escalar entre los dos arreglos:

Ejemplo:
n = 3
v1 = 0, 1, 2
v2 = 3, 4, 5
producto = 14
*/

function multiplicarVector(
  v1: number[],
  v2: number[],
  cantidad: number
): number {
  let acum: number = 0;
  let indice: number;
  for (indice = 0; indice < cantidad; indice++) {
    acum = acum + v1[indice] * v2[indice];
  }
  return acum;
}

let cantidad: number = Number(prompt("Ingrese cantidad: "));
let v1: number[] = new Array(cantidad);
let v2: number[] = new Array(cantidad);

console.log("Cargando v1");
cargarVector(v1, cantidad);
console.log("Cargando v2");
cargarVector(v2, cantidad);
console.log("Multiplicacion escalar = ", multiplicarVector(v1, v2, cantidad));
