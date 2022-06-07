/* 
Jardín

• El jardín infantil necesita un programa para poder asignar cursos a las aulas
• Se cuentan con tres aulas: Azul, Verde y Amarilla
• Cada aula cuenta con una capacidad diferente (es decir, un número de
bancos)
• La aula Azul tiene 40 bancos, la Verde 35 y la Amarilla 30
• Dado un número de infantes ingresado por el usuario, el programa deberá
determinar el aula que minimice la cantidad de bancos vacíos
• La salida del algoritmo es el color que identifica al aula asignada

Ejemplo: si la cantidad de personas de un curso es 34, entonces el
aula a asignar será la Verde. El aula Amarilla no puede ser
asignada porque la cantidad de personas es menor a la cantidad de
bancos disponibles. El aula Azul es descartada porque quedan más
bancos inutilizados que en el aula Verde (6 versus 1).

*/

//... funcionalidad de ingreso de datos ...

let cantidadAulas: number = 3;
let coloresAulas: string[] = new Array(cantidadAulas);
let capacidadAulas: number[] = new Array(cantidadAulas);
let cantidadAlumnos: number = prompt(
  "Ingrese la cantidad de infantes del curso: "
);

coloresAulas[0] = "Azul";
coloresAulas[1] = "Verde";
coloresAulas[2] = "Amarilla";
capacidadAulas[0] = 40;
capacidadAulas[1] = 35;
capacidadAulas[2] = 30;

console.log(
  "La mejor aula es: ",
  obtenerMejorAula(coloresAulas, capacidadAulas, cantidadAulas, cantidadAlumnos)
);

function obtenerMejorAula(
  nombresAulas: string[],
  asientosAulas: number[],
  largo: number,
  cantidadInfantes: number
): number {
  let indice: number;
  let indiceMejorAula: number = 0;
  for (indice = 0; indice < largo; indice++) {
    if (
      asientosAulas[indice] >= cantidadInfantes &&
      asientosAulas[indice] < asientosAulas[indiceMejorAula]
    ) {
      indiceMejorAula = indice;
    }
  }
  return coloresAulas[indiceMejorAula];
}
