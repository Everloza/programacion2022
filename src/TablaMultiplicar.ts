let numero: number = Number(prompt("ingrese numero: "));
//declaro -numero- para ingresar a la consola.
let tope: number = Number(prompt("ingrese tope: "));
//declaro el -tope-, que seria el limite para cada operacion.

for (let indice: number = 0; indice <= tope; indice++) {
  //el for para repeticion indica, indice igual a 0, menos igual al limite y el contador
  console.log(numero + " x " + indice + " = " + numero * indice);
  //imprime en la consola la operacion,la variable -numero- suma el string "x(por)",
  // suma la variable -indice- que es menor igual al -tope- (limite),
  // que a su vez suma un string "=" (igual) que suma la variable -numero- por -indice-.
}
