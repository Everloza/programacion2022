let precio: number = Number(prompt("ingrese el precio"));
let cantidad: number = Number(prompt("ingrese la cantidad del producto"));
let precioproducto: number = precio * cantidad;

if (precioproducto > 1000) {
  let descuento: number = precioproducto * 0.1;
  precioproducto = precioproducto - descuento;
}
console.log("el precio final es", precioproducto);
