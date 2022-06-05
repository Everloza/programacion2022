let numero1: number = Number(prompt("Ingrese un número: "));
let numero2: number = Number(prompt("Ingrese un número: "));
let opcionMenu: number = Number(
  prompt(
    "Ingrese 1 para sumar, 2 para restar, cualquier otra tecla para salir: "
  )
);

function dibujarGuionesN(cantidad: number) {
  let x: number;
  let linea: string = "";
  for (x = 1; x <= cantidad; x++) {
    linea = linea + "-";
  }
  console.log(linea);
}
function calcularResultado(
  numero1: number,
  numero2: number,
  opcionMenu: number
): number {
  let resultado: number;

  if (opcionMenu == 1) {
    resultado = numero1 + numero2;
  } else if (opcionMenu == 2) {
    resultado = numero1 - numero2;
  }
  return resultado;
}

if (opcionMenu === 1) {
  dibujarGuionesN(30);
  console.log("el resultado es: ", numero1 + numero2);
  dibujarGuionesN(40);
} else if (opcionMenu === 2) {
  dibujarGuionesN(40);
  console.log("el resultado es: ", numero1 - numero2);
  dibujarGuionesN(30);
}
let resultado = calcularResultado(numero1, numero2, opcionMenu);
dibujarGuionesN(50);
console.log("el resultado es: ", resultado);
dibujarGuionesN(50);
