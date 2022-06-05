/* Ejercicio Triángulos.

• Realice un programa que devuelva el área del
triángulo usando los siguientes pares de base-altura:
• (1,2) (2,4) (3,6) (4,8) (5, 10) (6,12) (7,14).
• Implemente un método llamado calcularAreaTriangulo
que reciba dos números por parámetro (uno llamado
base y otro altura).
*/

function calcularAreaTriangulo(base: number, altura: number): number {
  return (base * altura) / 2;
}

function calculandoTriangulos() {
  let resultado: number = calcularAreaTriangulo(1, 2);
  console.log("El area es = ", resultado);
  resultado = calcularAreaTriangulo(2, 4);
  console.log("El area es = ", resultado);
  resultado = calcularAreaTriangulo(3, 6);
  console.log("El area es = ", resultado);
  resultado = calcularAreaTriangulo(4, 8);
  console.log("El area es = ", resultado);
  resultado = calcularAreaTriangulo(5, 10);
  console.log("El area es = ", resultado);
  resultado = calcularAreaTriangulo(6, 12);
  console.log("El area es = ", resultado);
  resultado = calcularAreaTriangulo(7, 14);
  console.log("El area es = ", resultado);
}
calculandoTriangulos();

// ¿Y si seguimos la serie numérica hasta 100? Usamos un FOR.

/*
let indice: number;
for (indice = 1; indice <= 100; indice++) {
  console.log("El area es = ", calcularAreaTriangulo(indice, indice * 2));
} 
*/
