/* 
Sumar Dos Arreglos

• Sumar los elementos de cada una de las posiciones
de dos arreglos y guardar el resultado en otro arreglo.
• El arreglo tiene dimensión 6 y los números de los dos
vectores los carga el usuario.

Ejemplo:
v1 = 1, 3, 7, 9, 9, 5
v2 = 6, 9, 2, 5, 9, 4
vSuma = 7, 12, 9, 14, 18, 9

*/

let vectorN1: number[] = new Array(6); //Declaro el arreglo 1.
let vectorN2: number[] = new Array(6); //Declaro el arreglo 2.
let SumaVectoresN1_N2: number[] = new Array(6); //Declaro suma de los vectores.
let indice: number; //Declaro -indice-.

//Cargo el vector v1.
for (indice = 0; indice < 6; indice++) {
  vectorN1[indice] = Number(prompt(`Ingrese el valor de v1 [ ${indice} ]`));
}
//Cargo el vector v2.
for (indice = 0; indice < 6; indice++) {
  vectorN2[indice] = Number(prompt(`Ingrese el valor de v2 [ ${indice} ]`));
}
//Sumo los valores y muestro.
for (indice = 0; indice < 6; indice++) {
  SumaVectoresN1_N2[indice] = vectorN1[indice] + vectorN2[indice];
  console.log(`vSuma[ ${indice} ] = ${SumaVectoresN1_N2[indice]}`);
}
