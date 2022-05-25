/*
Clase 11 - Ciclos - Estructuras de Control - Suma entre Números.

Teníamos como base el ejercicio de la pagina 54

    Escriba un programa que pida al usuario dos números enteros, y luego retorne la suma de todos los números que están entre ellos
    Por ejemplo, si los números son 2 y 7, debe entregar como resultado  2 + 3 + 4 + 5 + 6 + 7 = 27

Ahora debemos realizar la siguiente actividad.

¿Qué ocurre si se ingresan los números al revés?
Por ejemplo: 

    en vez de 1 y 7 se ingresa 7 y 1
    en vez de 3 y 9 se ingresa 9 y 3

¿Qué estrategia se puede usar para arreglar este problema?
*/

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
