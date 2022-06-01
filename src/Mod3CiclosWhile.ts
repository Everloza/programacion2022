/* Estructuras de Control - Instrucción While.
• La instrucción while ejecuta una
secuencia de instrucciones mientras
una condición sea verdadera. 
*/
/*
let cantHolas: number = 1; // Usamos la variable -cantHolas- como contador.

while (cantHolas <= 5) {
  // Se repite hasta que cantHolas sea mayor que 5
  console.log("Hola");
  cantHolas = cantHolas + 1; // En cada iteración se incrementa en 1.
}
*/

// Calcular el Promedio de 10 Notas

/* let nota: number, suma: number, promedio: number, contador: number; // Usamos la variable suma como acumulador de las notas.
contador = 1;
suma = 0; // La variable suma se inicializa en cero.

while (contador <= 10) {
  nota = Number(prompt("Ingrese una nota: "));
  suma = suma + nota; // En cada iteración se suma la nota ingresada por el usuario en la variable.
  contador = contador + 1;
}
promedio = suma / 10;
console.log("El promedio de las notas es: " + promedio);

*/

/*  Simular la Espera de un Colectivo

o Cuando llegamos a la parada, miramos si el colectivo arribó a
la parada.
o Siempre tenemos que esperar antes de que llegue.

 */

let llegadaColectivo: string = String(prompt("Llego el colectivo? (Y/N): ")); // Declaro llegadaColectivo tipo string y lo mustro al teclado.
console.log("Esperando el colectivo"); // Imprimo "Esperando el colectivo".

while (llegadaColectivo === "N") {
  // Mientras -llegadaColectivo- es igual a N entonces.
  console.log("Esperando el colectivo"); // Imprimo "Esperando el colectivo".
  llegadaColectivo = String(prompt("Llego el colectivo? (Y/N): ")); // Vuelvo a preguntar, si repito N, vuelvo al inicio del while.
}

console.log("Llego el colectivo"); // Imprimo "Llego el colectivo."
