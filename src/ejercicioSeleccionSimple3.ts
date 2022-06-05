/*  Ejercicio – Descuento Octubre

• Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras.
• Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no.

*/

let precioUnitario: number = Number(prompt("Ingrese el precio: "));
let cantidad: number = Number(prompt("Ingrese la cantidad: "));
let mes: string = String(prompt("Ingresar mes"));

let descuento15: number;
let totalDescuento15: number;
let totalSinDescuento: number = precioUnitario * cantidad;

if (mes === "octubre") {
  descuento15 = (precioUnitario * 15) / 100;
  totalDescuento15 = totalSinDescuento - descuento15;
  console.log("Por comprar en el mes de Octubre Ud tiene un 15% de descuento");
  console.log("El monto a pagar es: " + totalDescuento15);
} else {
  console.log(
    "Ud. no tiene descuento, el monto a pagar es: " + totalSinDescuento
  );
}
