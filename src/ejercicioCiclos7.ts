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

let numero: number = 0;
let positivo: number = 0;
let porcentaje: number = 0;

while (numero !== 0) {
  //mientras que el numero sea distinto a 0
  numero = Number(prompt("ingrese un numero distinto a 0: ")); //ingreso el numero

  if (numero > 0) {
    //pregunto si el numero es positivo
    positivo++; //cuenta la cantidad de numeros positivos
  }

  numero = Number(prompt("ingresar un numero: ")); //ingresar nuevo numero
  if (porcentaje > 0) {
    //pregunto si el porcentaje es mayor a 0
    porcentaje = (positivo / numero) * 100; //calculo el porcentaje
    console.log("el porcentaje de positivos es: ", porcentaje, positivo);
  }
}
