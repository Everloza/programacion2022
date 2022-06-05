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

if (opcionMenu === 1) {
  dibujarGuionesN(30);
  console.log("el resultado es: ", numero1 + numero2);
  dibujarGuionesN(40);
} else if (opcionMenu === 2) {
  dibujarGuionesN(40);
  console.log("el resultado es: ", numero1 - numero2);
  dibujarGuionesN(30);
}
