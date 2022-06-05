/* 
Ejercicio – Par/Impar

• Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario.
• En el caso de ser 0 (cero) el algoritmo deberá informarlo.

*/

let parImpar: number = Number(prompt("ingresar numero"));

if (parImpar % 2 === 0) {
  console.log("Es numero par", parImpar);
} else if (parImpar % 2 === 1) {
  console.log("Es numero impar", parImpar);
} else {
  console.log("Ingresar numero nuevamente");
}
