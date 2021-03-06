/* 
Dados estos 5 arreglos que representan las ventas semanales del primer trimentre, 
corresspondientes a 5 vendedores de la empresa: Camila, Franco, Sofia, Matias y Agustina, respectivamente.

vendedor1 [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652] 
vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855] 
vendedor3 [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218] 
vendedor4 [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006] 
vendedor5 [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]

Escribir un programa que permita determinar:
Para cada vendedor mostrar su nombre y 
1- su venta maxima indicando semana y mes de la misma.
2- su venta minima indicando semana y mes de la misma.
3- su promedio semanal de ventas.
4- su promedio mensual de ventas.Entre todos los vendedores calcular:
5- nombre y monto vendido del mejor vendedor de cada semana.
6- nombre y suma de montos vendidos del mejor vendedor de cada mes
7- nombre y suma de montos vendidos del peor vendedor de cada mes
8- nombre y suma de montos vendidos de peor vendedor del trimestre
Tenga en cuenta que cada valor en los arreglos es la venta de una semana, 
y que cuatro semanas forman un mes.

*/

// Cargo los arreglos de los 5 vendedores.
let vendedor1: number[] = new Array(12);
let vendedor2: number[] = new Array(12);
let vendedor3: number[] = new Array(12);
let vendedor4: number[] = new Array(12);
let vendedor5: number[] = new Array(12);

// Declaro vendedores de tipo string y aplico los nombres de los vendedores.
let vendedores: string[] = new Array(5);
vendedores[0] = "Camila";
vendedores[1] = "Franco";
vendedores[2] = "Sofia";
vendedores[3] = "Matias";
vendedores[4] = "Agustina";

// Declaro las variables -nombres-, -mes- y -semana- y lo ingreso al cuadro de consola.
let nombres: string = String(prompt("Ingrese el nombre del vendedor: "));
let mes: string = String(prompt("Ingrese el mes: "));
let semana: number = Number(prompt("Ingrese la semana: "));

// Declaro una variable -i- de tipo number para las funciones.
let i: number;

// Declaro funcion ventaMax, con retorno (...)
function ventaMax(vendedores: string[]) {
  for (i = 0; i < 5; i++) {}
  return ventaMax;
}

// Declaro funcionMin, con retorno (...)
function ventaMin(vendedores: string[]) {
  for (i = 0; i < 5; i++) {}
  return ventaMin;
}

// Declaro el resto de variables de tipo number.
let promSemanal: number;
let promMes: number;

let mejorVendedorSem;
let mejorVendedorMes;
let peorVendedorMes;
let peorVendedorTrim;
