/* Par/Impar

• Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es par
o impar.
• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero).

*/

let valor: number = Number(prompt("Ingrese un numero: ")); //Declaro -valor- de tipo number e ingreso al teclado.
console.log("Numero ingresado: ", valor); // Imprimo el numero ingresado de la variable -valor-.

while (valor <= 0) {
  // Mientras que -valor- sea menor igual a 0. Entonces.
  valor = Number(prompt("Ingrese otro número (positivo): ")); // Declaro -valor- y lo ingreso al teclado.
}
if (valor % 2 === 0) {
  // Si -valor- es resto a 2 igual a 0. (par).
  console.log("Usted a ingresado un numero par."); // Ingreso a la consola y digo que es numero par.
} else {
  console.log("Usted a ingresado un numero impar."); // Sino, ingreso como numero impar.
}
