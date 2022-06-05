/* 

/* 
Estructuras de Datos - Arreglos

Construya un algoritmo que según el número de
mes muestre el nombre de dicho mes
¿Cómo se puede hacer?

*/

/*
let nroMes: number = Number(
  prompt("Indique el número de mes que le interesa: ")
);

switch (nroMes) {
  case 1:
    console.log("El mes es Enero");
    break;
  case 2:
    console.log("El mes es Febrero");
    break;
  case 3:
    console.log("El mes es Marzo");
    break;
  case 4:
    console.log("El mes es Abril");
    break;
  case 5:
    console.log("El mes es Mayo");
    break;
  case 6:
    console.log("El mes es Junio");
    break;
  case 7:
    console.log("El mes es Julio");
    break;
  case 8:
    console.log("El mes es Agosto");
    break;
  case 9:
    console.log("El mes es Septiembre");
    break;
  case 10:
    console.log("El mes es Octubre");
    break;
  case 11:
    console.log("El mes es Noviembre");
    break;
  case 12:
    console.log("El mes es Diciembre");
    break;
  default:
    console.log("Ud no ha escrito un número de mes válido");
}
*/

/* 

Los arreglos son estructuras de datos homogéneas.
(todos sus datos son del mismo tipo)

• Permiten almacenar un determinado número de datos.
• Tiene muchos elementos, y a cada uno de ellos se
acceden indicando que posición se quiere usar (un
índice).
*/

// Modificado en Array.

let arregloMes: string[] = new Array(12);
arregloMes[0] = "Enero";
arregloMes[1] = "Febrero";
arregloMes[2] = "Marzo";
arregloMes[3] = "Abril";
arregloMes[4] = "Mayo";
arregloMes[5] = "Junio";
arregloMes[6] = "Julio";
arregloMes[7] = "Agosto";
arregloMes[8] = "Septiembre";
arregloMes[9] = "Octubre";
arregloMes[10] = "Noviembre";
arregloMes[11] = "Diciembre";

let nroMes: number = Number(prompt("Indique el núm de mes que le interesa: "));
/* Recuerde que al ser el arreglo en base 0 hay que restar 1 al índice, 
porque el usuario va a ingresar el número de mes empezando desde 1 */
let indice = nroMes - 1;

console.log("El mes es " + arregloMes[indice]);

/* Un arreglo tambien se puede definir “por extensión”
de la siguiente manera:

let arregloMes : string[] = [ "Enero", "Febrero", "Marzo", "Abril",
"Mayo", "Junio", "Julio", "Agosto“, "Septiembre", "Octubre",
"Noviembre“, "Diciembre" ];
*/
