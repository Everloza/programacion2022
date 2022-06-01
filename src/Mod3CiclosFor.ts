/* Instruccion FOR
for (num=inicial; <condición> ; incremento) {
  <instrucciones>
  }
  */

/*
for (let contador: number = 1; contador <= 100; contador++) {
  console.log("Dibujar una casa. Longitud:", contador);
}
*/

/* 
for (let rueda: number = 1; rueda < 4; rueda++) {
  console.log("Inflar Rueda");
}
*/

// Si necesitamos repetir un
// conjunto de instrucciones por
// un número predeterminado de
// veces, la instrucción for es muy útil.

let nota: number, promedio: number, contador: number;
let suma: number = Number(0);

// Nos evitamos inicializar e incrementar el contador, ya que es parte del Para.
for (contador = 1; contador < 5; contador++) {
  // Tener en cuenta que el -contador- va desde 1 (inclusive) hasta 5 (inclusive).
  nota = Number(prompt("Ingrese la nota " + contador + ": "));
  suma += nota;
}
promedio = suma / 4;
console.log("El promedio de las notas es: " + promedio);
