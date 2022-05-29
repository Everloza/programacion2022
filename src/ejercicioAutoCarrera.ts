/*
Estructuras de Control
Problema: Autos de Carrera
• En una prueba, un piloto tiene que completar 4
vueltas.
• Se necesita un programa que permita ingresar
por teclado el tiempo de cada vuelta.
• El programa debe retornar el tiempo total y el
promedio de vuelta. 
*/

let vuelta1: number = Number(prompt("Ingrese el tiempo de la primer vuelta:"));
let vuelta2: number = Number(prompt("Ingrese el tiempo de la segunda vuelta:"));
let vuelta3: number = Number(prompt("Ingrese el tiempo de la tercera vuelta:"));
let vuelta4: number = Number(prompt("Ingrese el tiempo de la cuarta vuelta:"));

let sumavuelta: number = Number(vuelta1 + vuelta2 + vuelta3 + vuelta4);
let promediovuelta: number = Number(sumavuelta / 4);

console.log("La suma de las vueltas son de:", sumavuelta);
console.log("El promedio de vueltas son de:", promediovuelta);
