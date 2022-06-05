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

//Algoritmo InvertirArreglo

// Defino -cantidad-
let cantidad: number = Number(prompt("Ingrese la cantidad de números:"));

/*  El tamaño del arreglo no es fijo, depende de la
entrada del usuario (o el valor de una variable) */
let vector: number[] = new Array(cantidad);
let indice: number;

// Cargar el arreglo:
for (indice = 0; indice < cantidad; indice++) {
  vector[indice] = Number(prompt(`Ingrese vector n°[${indice}]: `));
}

// Declaro -cadena- tipo string.
// Mostrar al revés:
let cadena: string = "";

// Empiezo desde el último elemento. -1 // Y me detengo en el primero. >= 0 // Restando de a uno. --
for (indice = cantidad - 1; indice >= 0; indice--) {
  cadena = cadena + vector[indice] + " ";
}

// Imprimo la salida, -cadena-.
console.log("La salida es:", cadena);
