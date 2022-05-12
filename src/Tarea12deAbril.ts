let numero1: number = Number(prompt("ingrese primer numero: ")); //declaro las sumas
let numero2: number = Number(prompt("ingrese segundo numero: ")); //declaro las restas
let numero3: number = Number(prompt("ingrese tercer numero: ")); //declaro las multiplicaciones
let numero4: number = Number(prompt("ingrese cuarto numero: ")); //declaro las divisiones
let opcion: number = Number(
  prompt(
    "ingrese 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir: "
  )
); //declaro las opciones

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
  case 1:
    resultado = numero1 + numero2 + numero3 + numero4;
    Dibujarlineas();
    break;
}
