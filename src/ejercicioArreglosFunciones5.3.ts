/* Jardín (Versión 3.0)
 */
function obtenerMejorAula(
  nombresAulas: string[],
  asientosAulas: number[],
  largo: number,
  cantidadInfantes: number
): number {
  let indiceMejorAula: number = -1;
  let indice: number;
  for (indice = 0; indice < largo; indice++) {
    if (asientosAulas[indice] >= cantidadInfantes) {
      if (indiceMejorAula === -1) {
        indiceMejorAula = indice;
      } else if (asientosAulas[indice] < asientosAulas[indiceMejorAula]) {
        indiceMejorAula = indice;
      }
    }
  }
  return indiceMejorAula;
}

let cantidadAulas: number = Number(prompt("Ingrese la cantidad de aulas: "));
let coloresAulas: string[] = new Array(cantidadAulas);
let capacidadAulas: number[] = new Array(cantidadAulas);

console.log("Ingrese nombres de las aulas");
cargarArreglo(coloresAulas, cantidadAulas);
console.log("Ingrese capacidad de las aulas");
cargarArreglo(capacidadAulas, cantidadAulas);

let cantidadAlumnos: number = Number(
  prompt("Ingrese la cantidad de infantes del curso: ")
);
let indiceMejorAula: number = obtenerMejorAula(
  capacidadAulas,
  cantidadAulas,
  cantidadAlumnos
);

if (indiceMejorAula !== -1) {
  console.log("La mejor aula es: ", coloresAulas[indiceMejorAula]);
} else {
  console.log(
    "No hay un aula suficientemente grande para ",
    cantidadAlumnos,
    " infantes"
  );
}
