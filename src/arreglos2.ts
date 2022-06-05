/* 
Invertir Arreglo

• Almacene en un arreglo de tamaño N los números ingresados
por el usuario.
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero
55.

Ejemplo:
v = 1, 3, 7, 9, 9, 5
La salida es: 5, 9, 9, 7, 3, 1

*/

let cantidad: number = Number(prompt("Ingrese la cantidad de números:"));
let vector: number[] = new Array(cantidad);
let indice: number;

for (indice = 0; indice < cantidad; indice++) {
  vector[indice] = Number(prompt(`Ingrese vector n°[${indice}]: `));
}

let cadena: string = "";
for (indice = cantidad - 1; indice >= 0; indice--) {
  cadena = cadena + vector[indice] + " ";
}
console.log("La salida es:", cadena);
