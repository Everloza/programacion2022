/* 
Hacer un programa que simule la compra que hace un cliente en un
supermercado. El cliente va tener que ingresar por teclado la
CANTIDAD de productos que va a llevar, los PRODUCTOS que va
a comprar, el PRECIO UNITARIO de cada producto y la CANTIDAD
A COMPRAR DE CADA producto.
Finalizada la compra, el programa va a mostrar por pantalla el
detalle de la compra, productos, cantidad, precio unitario y precio
total.
Dependiendo del monto comprado, el cliente participa de un sorteo:
• si compra menos de 1000 no participa por nada
• si compra mas de 3000 participa por un 0km
• si compra mas de 2000 pero menos de 3000 participa por una
moto 0k
• si compra mas de 1000 pero menos de 2000 participa un tv led

*/
let productosTotal: number[] = new Array(6);
let precioUni: number[] = new Array(6);
let cantidadUni: number[] = new Array(6);

function productosTotal(producto: number[], cantidad: number[]): number {
  let indice: number;
  let total: number = 0;
  for (indice = 0; indice < cantidad; indice++) {
    total = total + producto[indice] * cantidad[indice];
  }
  return total;
}

let cantidadTotal: number = Number(prompt("Ingrese cantidad total: "));
let productosTotal: number = Number(prompt("Ingrese los productos: "));
let precioUni: number = Number(prompt("Ingrese precio: "));
let cantidadUni: number = Number(prompt("Ingrese cantidad: "));

switch (true) {
  case 1000 < productosTotal:
    console.log("Usted no participa en ningun sorteo");
    break;

  case 3000 > productosTotal:
    console.log("Ud. participa de un 0km");
    break;

  case 3000 < productosTotal > 2000:
    console.log("Participa por una moto 0km");
    break;

  case 1000 > productosTotal:
    console.log("Ud. participa de un Led Tv");
    break;
  default:
    break;
}
