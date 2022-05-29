/* 
 Modulo 2 - Estructura de Control - Selección - Ejercicio Mayor a 20 - Código */

// Declaro -nroDeseado- de tipo number y lo escribo al teclado.
let nroDeseado: number = Number(prompt("Introduce un numero deseado:"));

// Si la condicion (-nroDeseado- es mayor a 20) es verdadera, entonces.
if (nroDeseado > 20) {
  // Imprimo en la consola "string" + -nroDeseado-.
  console.log("El número es mayor a 20: " + nroDeseado);
  // Si la condicion (-nroDeseado- es mayor a 20) es falsa, entonces.
} else {
  // Imprimo en la consola "string" + -nroDeseado-.
  console.log("El número es menor o igual a 20: " + nroDeseado);
}
