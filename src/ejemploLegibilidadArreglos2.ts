/* Ejercicio – Arreglo de Números

• Crear un arreglo llamado num que almacene los siguientes datos:
20, 14, 8, 0, 5, 19 y 24 y se los muestre al usuario.
• Al utilizar arreglos en base cero los elementos validos van de 0 a
n-1, donde n es el tamaño del arreglo.
• En el ejemplo 1 las posiciones/indice del num entonces van desde
0 a 7-1, es decir de 0 a 6.

*/
let indice: number = Number(0);
let num: number[] = new Array(7);
num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;

while (indice < 7) {
  console.log("El número en la posición ", indice, " es ", num[indice]);
  indice++;
}
