/* 
Ejercicio: Potencias

• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.

*/

function potenciaNumero(base: number, exponente: number): number {
  let numero: number = 1;
  if (exponente === 0) {
    return 1;
  } else {
    for (let i = 1; i <= exponente; i++) {
      numero = numero * base;
    }
    return numero;
  }
}

let base: number = Number(prompt("Ingrese Base: "));
let exponente: number = Number(prompt("Ingrese Exponente: "));
console.log("La potencia es = ", potenciaNumero(base, exponente));
