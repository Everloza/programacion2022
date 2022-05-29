/*
console.log(4 <= 2);
*/

/*
// Operadores Relacionales
let numero1: number = 3;
let numero2: number = 5;
let resultado: boolean;

resultado = numero1 < numero2; // resultado = true
resultado = numero1 > numero2; //resultado = false

console.log(resultado);

*/

/*
// Operadores Relacionales
let texto1: string = "hola";
let texto2: string = "hola";
let texto3: string = "adios";
let resultado: boolean;

resultado = texto1 === texto3; // resultado = false
resultado = texto1 !== texto2; // resultado = false
resultado = texto3 >= texto2; // resultado = false

console.log(resultado);
*/

/* IMPORTANTE
Cuando se utilizan cadenas de texto, los operadores "mayor que" (>) y "menor 
que" (<) siguen un razonamiento no intuitivo: se compara letra a letra
comenzando desde la izquierda hasta que se encuentre una diferencia entre
las dos cadenas de texto. Para determinar si una letra es mayor o menor que
otra, las mayúsculas se consideran menores que las minúsculas y las
primeras letras del alfabeto son menores que las últimas (a es menor que b,
b es menor que c, A es menor que a, etc.) */

/*
//Ejemplo Condición Compuesta && (AND).
let lucesEncendidas: boolean = true; // Es Verdadera.
let litrosNafta: number = 10; // Igual a 10.

if (lucesEncendidas && litrosNafta > 0) {
  //Conjunción → ambas tienen que ser verdaderas.
  console.log("Puedo manejar de noche");
}
*/
/*
//Ejemplo Operadores Lógicos || (OR)
let valor1: boolean = true;
let valor2: boolean = false;
let resultado1: boolean = valor1 || valor2; // true

let valor1: boolean = false;
let valor2: boolean = false;
let resultado2: boolean = valor1 || valor2; // false

console.log(resultado1, resultado2);
*/

/*
//Operadores Lógicos !== (NOT)
let valor: boolean = true;
let resultado1: boolean = !valor; // false
console.log(resultado1);

let valor: boolean = false;
let resultado2: boolean = !valor; // true
console.log(resultado2);
*/
