/* 
Clase 10 - Seleccion Simple - Determinar Medalla – Prueba de Escritorio.

Desarrolle un algoritmo que, dada una posición en una carrera se determine el tipo de medalla a entregar. 

Tenga en cuenta que para el primer puesto se entrega medalla de oro, segundo puesto medalla de plata y tercer puesto medalla de bronce. 
En caso que quede en otra posición se entrega certificado de participación.

Adjuntar planilla con Casos de Prueba.

*/

let posicion: number = Number(prompt("Ingresar el puesto correspondiente")); //declaro -posicion- de tipo number igual a un numero en el cuadro de consola.

//si -posicion- es igual a 1 entonces...
if (posicion === 1) {
  console.log("Entregar medalla de oro"); //imprimo en la consola "Entregar medalla de oro".
  //sino... declaro una segunda condicion.
} else {
  //si posicion es igual a 2 entonces...
  if (posicion === 2) {
    console.log("Entregar medalla de plata"); //imprimo "Entregar medalla de plata".
    //sino... declaro una tercera condicion.
  } else {
    //si -posicion- es igual a 3 entonces...
    if (posicion === 3) {
      console.log("Entregar medalla de bronce"); //imprimo"Entregar medalla de bronce".
      //sino..
    } else {
      console.log("Entregar mención de participación"); //imprimo "Entregar mencion de participacion."
    }
  }
}
// corregido la condicion de la posicion 1, se agregaron las condiciones
// else de la linea 18 y dentro de la condicion se agrego dos if y dos elses
