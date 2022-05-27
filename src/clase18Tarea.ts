/* Clase 18 - Arreglos y Funciones, 

Visto
- Repaso de arreglos
- Revision de tarea
- Arreglos y funciones
- Matricez (teoria)

Trabajado
- Sumar arreglos
- Invertir arreglos
- Contar ceros, positivos y negativos en arreglos
- Funciónes para manipular arreglos(teoria) 

Link a documentacion con metodos de manipular arreglos (solo para consulta, no para usar en este modulo)
https://devcode.la/tutoriales/manejo-de-arrays-en-javascript/


Actividad (Promedio Escolar)

    Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
    Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno (ingresado por el usuario)
    Luego de resolverlo, pensar en aprovechar métodos y discutir como representar la información


Nro Filimina: 64

*/


let numAlum : number = Number(prompt("Ingrese el numero de alumnos: "));
let alumnos : string[] = new Array(numAlum);
let nota1 : number[] = new Array(numAlum);
let nota2 : number[] = new Array(numAlum);
let nota3 : number[] = new Array(numAlum);
let indice : number;

for (indice = 0; indice < numAlum; indice++) {
let alumnos[indice] : number = Number(prompt("Nombre del alumno: "));
let nota1[indice] : number = Number(prompt("Nota del 1er trimestre:"));
let nota2[indice] : number = Number(prompt("Nota del 2do trimestre:"));
let nota3[indice] : number = Number(prompt("Nota del 3er trimestre:"));
}

console.log("Nombre del alumno: ", alumnos);
console.log("Nota del 1er trimestre:: ", nota1);
console.log("Nota del 2do trimestre:: ", nota2);
console.log("Nota del 3er trimestre:: ", nota3);

let alumBuscado : string;
let encontrado : boolean = false;
let promedio : number = 0;
indice = 0;

while (indice < numAlum && !encontrado) {
    if (alumnos[indice] === alumBuscado) {
       encontrado = true;
        promedio = nota1[indice] + nota2[indice] + nota3[indice]; 
        promedio /= 3;
    }
indice++;
}
if (encontrado) {
console.log("El promedio de ", alumBuscado, " es ", promedio);
} else {
console.log("No se pudo encontrar a ", alumBuscado);
}