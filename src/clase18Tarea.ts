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

function obtenerPromedioAlumno(indice:number):number{
    let suma=(arrayNota1[indice])+arrayNota2[indice]+arrayNota3[indice])
    return suma;
}
function ObtenerPosicion(alumno:string):number{
    let posicion :number=-1;
    for(let indice:number=0;indice<3;indice++){
        if(arrayAlumnos[indice]===alumno){
            posicion=indice;
        }
    }
    return posicion;
}

function cargarNotasDeAlumno(){
    for(let indice:number=0;indice<2;indice++){
        arrayAlumnos[indice]=(prompt('Ingrese Alumno: '));
        arrayNota1[indice]=Number(prompt('Ingrese nota 1: '));
        arrayNota2[indice]=Number(prompt('Ingrese nota 2: '));
        arrayNota3[indice]=Number(prompt('Ingrese nota 3: '));
    }
}
let arrayAlumnos:string[]=new Array(10);
let arrayNota1 :number[]=new Array(10);
let arrayNota2 :number[]=new Array(10);
let arrayNota3 :number[]=new Array(10);

cargarNotasDeAlumno();
let alumno: string = (prompt('Ingrese Alumno'));
if(ObtenerPosicion(alumno) === -1){
    console.log('el alumno no existe');
}else{
    console.log(obtenerPromedioAlumno(ObtenerPosicion(alumno)));
}