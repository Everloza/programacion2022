/* Tablas de Multiplicación.

• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario.
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor.

*/

// Declaro -numero- para ingresar a la consola de mensaje.
let numero: number = Number(prompt("ingrese numero a multiplicar: "));
// Declaro -tope-, que seria un limite para cada multipliacion hacia la consola de mensaje.
let tope: number = Number(prompt("ingrese el tope para el multiplo: "));

for (let indice: number = 0; indice <= tope; indice++) {
  // El for para repeticion declara la variable -indice- de tipo numero igual a 0,
  // -indice- menor igual a la variable tope,
  // Un contador ++ para -indice-.
  console.log(numero + " x " + indice + " = " + numero * indice);
  // Imprime en la consola la operacion,la variable -numero- suma el string "x(por)",
  // Suma la variable -indice- que es menor igual al -tope- (limite),
  // Que a su vez suma un string "=" (igual) que suma la variable -numero- multiplicado por el -indice-.
}
