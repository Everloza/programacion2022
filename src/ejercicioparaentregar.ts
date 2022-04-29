let precioInicial: number = Number(prompt("Ingrese el precio."));
let porcentajeDescuento: number = Number(0.1);
let descuento: number = Number(precioInicial * porcentajeDescuento);
let precioFinal: number = precioInicial - descuento;
console.log(precioFinal);
