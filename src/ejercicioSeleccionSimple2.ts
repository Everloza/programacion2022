/* 
Ejercicio – Mayor de Tres

• Desarrolle un algoritmo que dados tres
números determine cuál es el mayor de los
tres. 

 */
let numero1: number = Number(prompt("Ingrese un 1er numero:"));
let numero2: number = Number(prompt("Ingrese un 2do numero:"));
let numero3: number = Number(prompt("Ingrese un 3er numero:"));

if (numero1 > numero2 && numero1 > numero3) {
  console.log(numero1 + " es mayor a " + numero2 + " y a " + numero3);
} else if (numero2 > numero3 && numero2 > numero1) {
  console.log(numero2 + " es mayor a " + numero3 + " y a " + numero1);
} else if (numero3 > numero2 && numero3 > numero1) {
  console.log(numero3 + " es mayor a " + numero2 + " y a " + numero1);
} else {
  console.log("Ingrese nuevamente");
}
