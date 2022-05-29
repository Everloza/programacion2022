/*
Clase 9 - Algoritmos Secuenciales - Calculo de Descuento.


    Implemente un algoritmo que calcule y muestre por pantalla el precio final de un producto después de aplicarle un descuento
    El precio inicial lo ingresa el usuario usando prompt
    El descuento a aplicar es del 10%. Recuerde que puede obtener el 10% de un valor multiplicado por 0,1
    El descuento debe ser guardados en una variable (no ingresados por teclado)

*/

let precioInicial: number = Number(prompt("Ingrese el precio.")); // Declaro la variable del precio inicial y lo muestra por cuadro de consola.
let porcentajeDescuento: number = Number(0.1); // Declaro la variable de tipo number para sacar el porcentaje.
let descuento: number = Number(precioInicial * porcentajeDescuento); // Declaro la variable del descuento, multiplico el precio inicial con el porcentaje.
let precioFinal: number = Number(precioInicial - descuento); // Declaro -precioFinal- y resto el -precioInicial- con el -descuento-.

console.log(precioFinal); //imprimo la variable -precioFinal- por la consola.
