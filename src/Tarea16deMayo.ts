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
