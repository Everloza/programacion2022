/* 
Modularización - Implementar una Calculadora

• Realice una calculadora que suma o resta
según el pedido del usuario.
• El usuario deberá ingresar 2 números por teclado
• Luego ingresará una opción:
• Si ingresa 1 los números se sumarán
• Si ingresa 2 los números se restarán
• Si ingresa cualquier otra tecla termina el programa
• Para informar el resultado de la operación debe usar el
siguiente formato (50 "-"):

----------------------------------------
El resultado de la operación es: X
----------------------------------------

*/

/* Indique por parámetros la cantidad de guiones
a dibujar en el método dibujarGuionesN */

function dibujarGuionesN(cantidad: number) {
  let x: number;
  let linea: string = "";
  for (x = 1; x <= cantidad; x++) {
    linea = linea + "-";
  }
  console.log(linea);
}

/* Implemente un método llamado calcularResultado que
 reciba por parámetros los dos números y la opción y
 retorne el resultado de la operación */

function calcularResultado(
  numero1: number,
  numero2: number,
  opcionMenu: number
): number {
  let resultado: number;
  if (opcionMenu === 1) {
    resultado = numero1 + numero2;
  } else if (opcionMenu === 2) {
    resultado = numero1 - numero2;
  }
  return resultado; // El retorno es el “resultado” del método.
}

// Ingreso de -numero1-,-numero2-,-opcionMenu- y -resultado- que es igual a la funcion -calcularResultado(numero1,numero2,opcionMenu)-

let numero1: number = Number(prompt("Ingrese un primer número: "));
let numero2: number = Number(prompt("Ingrese un segundo número: "));
let opcionMenu: number = Number(
  prompt(
    "Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: "
  )
);
let resultado = calcularResultado(numero1, numero2, opcionMenu);

dibujarGuionesN(50);
console.log("el resultado es: ", resultado);
dibujarGuionesN(50);
