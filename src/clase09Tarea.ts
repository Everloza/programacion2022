/*
Clase 9 - Algoritmos Secuenciales - Calculo de Descuento.


    Implemente un algoritmo que calcule y muestre por pantalla el precio final de un producto después de aplicarle un descuento
    El precio inicial lo ingresa el usuario usando prompt
    El descuento a aplicar es del 10%. Recuerde que puede obtener el 10% de un valor multiplicado por 0,1
    El descuento debe ser guardados en una variable (no ingresados por teclado)

*/

let precioInicial: number = Number(prompt("Ingrese el precio.")); //declaro la variable del precio inicial y lo muestra por cuadro de consola.
let porcentajeDescuento: number = Number(0.1); //declaro la variable de tipo number para sacar el porcentaje.
let descuento: number = Number(precioInicial * porcentajeDescuento); //declaro la variable del descuento, multiplico el precio inicial con el porcentaje.
let precioFinal: number = precioInicial - descuento; //declaro -precioFinal- y resto el -precioInicial- con el -descuento-.

console.log(precioFinal); //imprimo la variable -precioFinal- por la consola.
