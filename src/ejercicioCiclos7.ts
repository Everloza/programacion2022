/* Clase 13 - Ciclos (Repaso) con ejercitación - Estructuras de Control - Cantidad y Distribución de Positivos


    Leer valores del usuario hasta que introduzca un 0
    El usuario puede introducir valores numéricos, tanto positivos como negativos
    Contar la cantidad de valores introducidos que sean mayores a 0 y el porcentaje de positivos respecto del total

       Ejemplo:
                          Ingrese número: 9
                          Ingrese número: 7
                          Ingrese número: -1
                          Ingrese número: 1
                          Ingrese número: 0
                          3 positivos, 75% del total


*/

let numero: number = Number(0);
let positivo: number = 0;
let porcentaje: number = 0;

// Mientras que el numero sea distinto a 0.
while (numero !== 0) {
  // Ingreso el numero.
  numero = Number(prompt("ingrese un numero distinto a 0: "));
  // Pregunto si el numero es positivo.
  if (numero > 0) {
    positivo++; // Cuenta la cantidad de numeros positivos
  }

  numero = Number(prompt("ingresar un numero: ")); // Ingreso nuevo numero
  // Pregunto si el porcentaje es mayor a 0
  if (porcentaje > 0) {
    porcentaje = (positivo / numero) * 100; // Calculo el porcentaje
    console.log("el porcentaje de positivos es: ", porcentaje, positivo);
  }
}
