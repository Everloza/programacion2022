/* 
    Ejercicio – Validar Altura

    Desarrolle un algoritmo que, de acuerdo a la
    altura de una persona, decida si puede entrar a
    un juego en un parque de diversiones.
    • Para poder subirse a la montaña rusa la
    persona debe medir 1.30 mts. o más.

*/

// Declaro -alturaPersona- de tipo number en el teclado.
let alturaPersona: number = Number(prompt(" Ingrese la altura de la persona:"));
// Declaro la -alturaRequerida- de tipo number igual a 1.3.
let alturaRequerida: number = 1.3; //

// Si la condicion -alturaPersona- es mayor igual a -alturaRequerida- entonces.
if (alturaPersona >= alturaRequerida) {
  // Imprimo en la consola.
  console.log("Usted puede ingresar a la montaña rusa.");
} else {
  // Si la condicion es falsa imprimo:
  console.log("Usted no puede ingresar a la montaña rusa.");
}
