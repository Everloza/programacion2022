/* Selección Múltiple - Ejemplo del archivo clase10Tarea pero en un switch.

En el switch la secuencia de instrucciones a ejecutar depende de una
variable numérica: 
*/

let medalla: number = Number(prompt("Ingresar el puesto correspondiente:")); // Declaro -medalla- de tipo number al teclado.

// Declaro la variable -medalla- dentro del switch.
switch (medalla) {
  case 1: // En caso de que medalla sea 1.
    console.log("Oro"); // Imprimo "oro".
    break;

  case 2: // En caso de que medalla sea 2.
    console.log("Plata"); //Imprimo "plata".
    break;

  case 3: // En caso de que medalla sea 3.
    console.log("Bronce"); //Imprimo "bronce".
    break;

  default:
    // Instrucciones finales.
    console.log("Mencion de participacion");
}
