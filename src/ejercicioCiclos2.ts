/*
Estructuras de Control - Múltiplos

• Cree un algoritmo que visualice los
números que son múltiplos de 2 o
de 3 que hay entre 1 y 100.
• Tener en cuenta que hay números
que son múltiplos de 2 y de 3 al
mismo tiempo.
• En dichos casos, solamente
indique el número una vez.
*/

let cadena: string = " "; // Declaro -cadena- tipo string para espaciar los numeros en la consola.

// Para variable -indice- de tipo number igual a 1, es menor a a 100 y le agrego un contador positivo.
for (let indice: number = 1; indice < 100; indice++) {
  // Si -indice- es resto de 2 AND indice es resto de 3 entonces.
  if (indice % 2 === 0 || indice % 3 === 0) {
    cadena = cadena + indice + " "; // Entonces -cadena- es igual a -cadena- + -indice- + "".
  }
}
console.log("Los numeros multiplos de 2 y 3 hasta el 100 son:");
console.log(cadena); // Imprimo -cadena- por la consola.
