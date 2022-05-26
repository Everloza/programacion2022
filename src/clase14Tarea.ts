/* Clase 14 - Modularizacion y funciones 1era Parte - Modularización - Implementar una Calculadora

Realizar el ejercicio de la calculadora con 4 operaciones (suma, resta, multiplicacion y division)
 utilizando Switch y la funcion dibujarLineas que veniamos usando. 

*/

let numero1: number = Number(prompt("Ingrese primer numero: ")); //declaro primer valor.
let numero2: number = Number(prompt("Ingrese segundo numero: ")); //declaro segundo valor.
//declaro las opciones de operacion.
let opcion: number = Number(
  prompt(
    "ingrese 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir: "
  )
);

function dibujarLineas() {
  //declaro la funcion --dibujarlineas--, que luego las utilizo en cada operacion.
  let linea = "-"; //declaro -linea- en string ("-").
  for (let i: number = 0; i <= 40; i++) {
    //utilizo un contador para las lineas (hasta 40 lineas).
    linea = linea + "-"; //sumo la variable -linea- con el string.
  }
  console.log(linea); //imprimo -linea-.
}

//declaro -opcion- dentro del switch.
switch (opcion) {
  case 1: //primero case para la suma.
    dibujarLineas(); //funcion de la linea implementada dentro de cada case.
    console.log("el resultado es: ", numero1 + numero2); //imprimo el resultado de la suma de las dos variables.
    dibujarLineas();
    break; //cierro el case.
  case 2: //segundo case para la resta.
    dibujarLineas();
    console.log("el resultado es: ", numero1 - numero2); //imprimo el resultado de la resta de las dos variables.
    dibujarLineas();
    break;
  case 3: //tercer caso para la multiplicacion.
    dibujarLineas(); //funcion de la linea implementada dentro de cada case.
    console.log("el resultado es: ", numero1 * numero2); //imprimo el resultado de la mult. de las dos variables.
    dibujarLineas();
    break;
  case 4: //cuarto case para la division.
    dibujarLineas();
    console.log("el resultado es: ", numero1 / numero2); //imprimo el resultado de la div. de las dos variables.
    dibujarLineas();
    break;
  default: //cierre
}
