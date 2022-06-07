/* 
Multiplicación

• Implemente un método llamado “multiplicarArreglo” que recibe
como parámetros tres arreglos de Enteros del mismo tamaño
• Los dos primeros arreglos contienen los números que se quieren
multiplicar
• El tercer arreglo almacena el cálculo de la multiplicación de cada
posición de los dos arreglos
• Utilice este método para multiplicar los siguientes cuatro arreglos
de tres elementos

Aproveche las ventajas de métodos
para resolver el ejercicio

v1: [1, 2, 3]
v2: [4, 5, 6]
v3: [2, 1, 2]
v4: [1, 2, 1]
vResultado (v1*v2*v3*v4): [8, 20, 36]

*/

/* 1) Defino un método para cargar el arreglo de
enteros que representa los vectores de números
*/

function cargarArreglo(arreglo: number[], largo: number) {
  let indice: number;
  console.log("Ingrese valores del arreglo");
  for (indice = 0; indice < largo; indice++) {
    arreglo[indice] = Number(prompt("Ingrese el valor en ", indice, ": "));
  }
}
// 2) Muestra el arreglo en 1 sola línea

function mostrarResultado(arreglo: number[], largo: number) {
  let indice: number;
  console.log("El resultado es: [");
  for (indice = 0; indice < largo; indice++) {
    console.log(arreglo[indice], " ");
  }
  console.log("]");
}
/* 3) Multiplica los arreglos v1 y v2 posición a posición,
almacenando los resultados en v3 */

function multiplicarArreglo(
  v1: number[],
  v2: number[],
  v3: number[],
  largo: number
) {
  let indice: number;
  for (indice = 0; indice < largo; indice++) {
    v3[indice] = v1[indice] * v2[indice];
  }
}

let largo: number = 3;
let v1: number[] = new Array(largo);
let v2: number[] = new Array(largo);
let v3: number[] = new Array(largo);
let v4: number[] = new Array(largo);
//let aux1 : number[] = new Array(largo);
//let aux2 : number[] = new Array(largo);
let resultado: number[] = new Array(largo);

cargarArreglo(v1, largo);
cargarArreglo(v2, largo);
cargarArreglo(v3, largo);
cargarArreglo(v4, largo);
multiplicarArreglo(v1, v2, resultado, largo);
multiplicarArreglo(resultado, v3, resultado, largo);
multiplicarArreglo(resultado, v4, resultado, largo);
mostrarResultado(resultado, largo);
