/*if (1 > 2) {
  //si 1 es mayor a 2 entonces es true
  console.log("true");
} else {
  //sino se ejecuta como falso
  console.log("false");
}
*/

let numero1: number = Number(prompt("ingrese un numero"));

if (!!(numero1 === 0)) {
  console.log("verdadero");
} else {
  console.log("falso");
}

if (numero1 === 0 || 3 > 2) {
  console.log("true");
} else {
  console.log("false");
}

if (numero1 < 6 && numero1 % 2 === 0) {
  console.log("true");
} else {
  console.log("false");
}
