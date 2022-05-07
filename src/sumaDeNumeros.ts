let numero1: number = Number(prompt("ingresa numero 1"));
let numero2: number = Number(prompt("ingresa numero 2"));
let suma: number = 0;

// intercambio de variables IMPORTANTE.
if (numero1 > numero2) {
  let aux: number = numero1; //recomendable usar el AUXiliar dentro del if. auxiliar igual numero 5
  numero1 = numero2;
  numero2 = aux;
}
for (let indice: number = numero1; indice <= numero2; indice++) {
  suma = suma + indice;
}
console.log(suma);

/*let numero1: number = Number(prompt("ingrese primer numero"));
let numero2: number = Number(prompt("ingrese segundo numero"));
let suma: number = 0;
if (numero1 <= numero2) {
  for (let indice: number = numero1; indice <= numero2; indice++) {
    suma += indice;
  }
} else {
  for (let indice2: number = numero2; indice2 <= numero1; indice2++) {
    suma += indice2;
  }
}

console.log("su resultado es", suma);
*/
