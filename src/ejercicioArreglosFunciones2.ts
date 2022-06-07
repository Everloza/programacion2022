/* 
Promedio Escolar

• Desarrolle un algoritmo que
permita cargar alumnos y sus
notas en los tres trimestres

• Se debe permitir obtener el
promedio anual (es decir, de sus
tres notas) de un alumno
(ingresado por el usuario)

• Luego de resolverlo, pensar en
aprovechar métodos y discutir
como representar la información

*/

// 1) Recupero el número de alumnos y defino variables/arreglos.

//... funcionalidad de ingreso de datos ...

let numAlum : number = Number(prompt("Ingrese el numero de alumnos: "));
let alumnos : string = new Array(numAlum)
let nota1 : number[] = new Array(numAlum);
let nota2 : number[] = new Array(numAlum);
let nota3 : number[] = new Array(numAlum);
let indice : number;

// 2) Cargo los nombres de alumnos y sus notas para los 3 trimestres:

for (indice=0; indice<alumNum; indice++) {
let alumnos[indice] = prompt("Nombre: ");
let nota1[indice] = Number(prompt("Nota 1er trimestre:"));
let nota2[indice] = Number(prompt("Nota 2do trimestre:"));
let nota3[indice] = Number(prompt("Nota 3er trimestre:"));
}

// 3) Busco el alumno y calculo su promedio:

let alumBuscado : string = String(prompt("A quien busca: "));
let encontrado : boolean = false;
let promedio : number = 0;
indice = 0;

while (indice < alumNum && !encontrado) {
if (alumnos[indice] == alumBuscado) {
encontrado = true;
promedio = nota1[indice] + nota2[indice] + nota3[indice];
promedio /= 3;
}
indice++;
}
/* 4) Afuera del while, verifico si encontré al alumno y si así fuese
escribo por pantalla su promedio de notas */ 

if (encontrado) {
console.log("El promedio de ", alumBuscado, " es ", promedio);
} else {
console.log("No se pudo encontrar a ", alumBuscado);
}


