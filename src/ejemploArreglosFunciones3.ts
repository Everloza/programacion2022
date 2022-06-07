/* Tipos de Números en Arreglo

• Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario).
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay.

Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 ceros

*/

function cargarVector(v : number[], cantidad : number) {
  let indice : number;
  for (indice=0; indice<cantidad; indice++) {
  v[indice] = Number(prompt("Ingrese el valor en ", indice, ": "));
  }
  }
  
  function mostrarVector(v : number[], cantidad : number) {
  let indice : number[];
  for (indice=0; indice<cantidad; indice++) {
  console.log(v[indice], " “);
  }
  }

  function contarPositivos(v : number[], cantidad : number) : number {
    let contador : number =0;
    let indice : number;
    for (indice=0; indice<cantidad; indice++) {
    if (v[indice]>0) {
    contador++;
    }
    }
    return contador;
    }

    function contarNegativos(v : number[], cantidad : number) : number {
      let contador : number =0;
      let indice : number;
      for (indice=0; indice<cantidad; indice++) {
      if (v[indice]<0) {
      contador++;
      }
      }
      return contador;
      }

      function contarCeros(v : number[], cantidad : number) : number {
        let contador : number =0;
        let indice : number;
        for (indice=0; indice<cantidad; indice++) {
        if (v[indice]==0) {
        contador++;
        }
        }
        return contador;
        }

        

let cantidad : number = Number(prompt("Ingrese la cantidad de números:"));
let v : number[] = new Array(cantidad);

console.log("Cargando v");
cargarVector(v, cantidad);
let numNeg = contarNegativos(v, cantidad);
let numCero = contarCeros(v, cantidad);
let numPos = contarPositivos(v, cantidad);
console.log("Los valores de v son:");
mostrarVector(v, cantidad);
console.log(numPos, " positivos, ");
console.log(numNeg, " negativos, ");
console.log(numCero, " ceros");

