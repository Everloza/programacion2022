let numero1: number = Number(prompt("es mayor a"));
let numero2: number = Number();
let numero3: number = Number();

if (numero1 > numero2) {
  console.log("numero 1 es mayor a numero 2");
} else if (numero1 > numero3) {
  console.log("numero 1 es mayor a numero 3");
} else if (numero2 > numero3) {
  console.log("numero 2 es mayor a numero 3");
} else {
  console.log("numero 3 es mayor a numero2");
}

/*
let numeropar: number = Number(10 % 2 === 0);

switch (numeropar) {
  case 1: //en caso de que numero sea 1
    console.log("par");
    break;

  case 2: //en caso de que numero sea 2
    console.log("impar");
    break;

  default:
    console.log("el numero es 0");
}
*/
