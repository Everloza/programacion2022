/*  Ejercicio – Aplicar Descuento

• Desarrolle un algoritmo que diga el precio de una compra.
• La compra se compone del precio del producto y la cantidad.
• Si el cliente gasta más de $1000 debemos aplicarle un descuento del 10%.
*/

let precio: number = Number(prompt("ingrese el precio:"));
let cantidad: number = Number(prompt("ingrese la cantidad del producto:"));
let precioproducto: number = precio * cantidad;

if (precioproducto > 1000) {
  let descuento: number = precioproducto * 0.1;
  precioproducto = precioproducto - descuento;
}
console.log("el precio final es de", precioproducto);
