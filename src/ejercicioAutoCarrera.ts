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

// Las variables son de tipo: number = Number.

let vuelta1: number = Number(prompt("Ingrese el tiempo de la primera vuelta:")); // Declaro la variable -vuelta1- y lo ingreso por teclado.
let vuelta2: number = Number(prompt("Ingrese el tiempo de la segunda vuelta:")); // Declaro la variable -vuelta2- y lo ingreso por teclado.
let vuelta3: number = Number(prompt("Ingrese el tiempo de la tercera vuelta:")); // Declaro la variable -vuelta3- y lo ingreso por teclado.
let vuelta4: number = Number(prompt("Ingrese el tiempo de la cuarta vuelta:")); // Declaro la variable -vuelta4- y lo ingreso por teclado.

let sumavuelta: number = vuelta1 + vuelta2 + vuelta3 + vuelta4; // Declaro la variable -sumavuelta- tipo number y lo sumo con las vueltas1, 2, 3, 4.
let promediovuelta: number = sumavuelta / 4; // Declaro la variable -promediovuelta- tipo number y calculo -sumavuelta- dividido 4.

console.log("La suma de las vueltas son de:", sumavuelta); // Imprimo en la consola -sumavuelta-.
console.log("El promedio de vueltas son de:", promediovuelta); // Imprimo en la consola -promediovuelta-.
