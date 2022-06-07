/*
Jardín (Versión 2.0)
*/

function obtenerAulaMayorCapacidad(asientosAulas : number[], largo : number) : number {
let indice:number;
let indiceMayorCapacidad:number = 0;
for (indice=0; indice<largo; indice++) {
if (asientosAulas[indice] > asientosAulas[indiceMayorCapacidad]) {
indiceMayorCapacidad = indice;
}
return indiceMayorCapacidad;
}
function obtenerMejorAula (nombresAulas:string[], asientosAulas:number[], largo:number, cantidadInfantes:number):string {
let mejorAula:string;
let indice:number;
let indiceMejorAula:number = obtenerAulaMayorCapacidad(asientosAulas,largo);
for (indice=0; indice<largo; indice++) {
if (asientosAulas[indice] >= cantidadInfantes && asientosAulas[indice] < asientosAulas[indiceMejorAula]) {
indiceMejorAula = indice;
}
}
mejorAula = nombresAulas[indiceMejorAula];
return mejorAula;
}

let cantidadAulas : number = Number(prompt("Ingrese la cantidad de aulas: "));
let coloresAulas : string[] = new Array(cantidadAulas);
let capacidadAulas : number[] = new Array(cantidadAulas);

// Cargamos los nombres y capacidad de las aulas
console.log("Ingrese nombres de las aulas");   
cargarArreglo(coloresAulas, cantidadAulas);
console.log("Ingrese capacidad de las aulas");
cargarArreglo(capacidadAulas, cantidadAulas);

let cantidadAlumnos : number = Number(prompt("Ingrese la cantidad de infantes del curso: "));
console.log("La mejor aula es: ", obtenerMejorAula (coloresAulas, capacidadAulas, cantidadAulas, cantidadAlumnos) );