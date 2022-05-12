let numero1: number = Number(prompt("Ingrese primer numero: ")); //declaro primer valor
let numero2: number = Number(prompt("Ingrese segundo numero: ")); //declaro segundo valor
let numero3: number = Number(prompt("Ingrese tercer numero: ")); //declaro tercer valor
let numero4: number = Number(prompt("Ingrese cuarto numero: ")); //declaro cuarto valor
let opcion: number = Number(
  prompt(
    "ingrese 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir: "
  )
); //declaro las opciones de operacion

function DibujarLineas() {
  //declaro la funcion dibujarlineas, que luego las utilizo en cada operacion
  let linea = "-"; //declaro linea en string
  for (let i: number = 0; i <= 40; i++) {
    //utilizo un contador para las lineas (hasta 40 lineas)
    linea = linea + "-"; //sumo la variable linea con el string
  }
}
DibujarLineas(); // Resultado de la funcion

switch (opcion) {
  case 1: //suma
    break;
  case 2: //resta
    break;
  case 3: //multiplicacion
    break;
  case 4: //division
    break;
  default: //cierre
}
