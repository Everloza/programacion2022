let numero: number = Number(prompt("ingrese numero a multiplicar: "));
//declaro -numero- para ingresar a la consola.
let tope: number = Number(prompt("ingrese el tope para el multiplo: "));
//declaro -tope-, que seria un limite para cada multipliacion.

for (let indice: number = 0; indice <= tope; indice++) {
  //el for para repeticion declara la variable -indice- de tipo numero igual a 0,
  // -indice- menor igual a la variable tope,
  // y un contador ++ para -indice-.
  console.log(numero + " x " + indice + " = " + numero * indice);
  //imprime en la consola la operacion,la variable -numero- suma el string "x(por)",
  // suma la variable -indice- que es menor igual al -tope- (limite),
  // que a su vez suma un string "=" (igual) que suma la variable -numero- por -indice-.
}
