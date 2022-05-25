/* Clase 15 - Modularizacion y funciones 2era Parte - Métodos - Ejercicio: Divisores.

Visto

-Métodos (repaso)
-Métodos con parámetros
-Métodos con retornos (return)
-Modularizarían 

Trabajado

-Suma entre números modularizando
-Suma entre números con parámetros
-Suma entre números con retorno
-Sacar el área de un triangulo
-Calcular la potencia de un numero
-Sacar mediante un método que retorna un booleano si un numero es o no múltiplo de otro

Actividad

    Implemente un método llamado cantidadDeDivisores que reciba un número entero y devuelva la cantidad de divisores 
    Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta debería ser 5 

           Re-utilice el método esMultiplo implementado para el ejercicio anterior.

*/

function esMultiplo(dividendo: number, divisor: number): boolean {
  if (dividendo % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

let numero: number = 0;
let numDivisores: number = cantidadDeDivisores(numero);

console.log("el numero", numero, "tiene", numDivisores, "divisores.");

function cantidadDeDivisores(numero: number): number {
  let cantidad: number = 0;
  let divisor: number;

  for (divisor = 0; divisor < numero; divisor++) {
    if (esMultiplo(numero, divisor)) {
      cantidad++;
    }
    return cantidad;
  }
}
