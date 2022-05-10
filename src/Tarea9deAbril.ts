let numero: number = 1;
let positivo: number = 99999;
let negativo: number = -99999;
let contador: number = 0;
let promedio: number = 0;

while (numero !== 0) {
  numero = Number(prompt("ingrese un numero distinto a 0: "));
  console.log("el numero es: " + numero);
  if (numero < positivo) {
    positivo = numero;
  }
  if (numero > negativo) {
    negativo = numero;
  }
  contador++;
  promedio = (numero * 100) / promedio;
}

console.log("el porcentaje de positivos es: " + promedio);
