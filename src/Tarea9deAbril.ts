let numero: number = 0;
let positivo: number = 0;
let porcentaje: number = 0;

while (numero !== 0) {
  //mientras que el numero sea distinto a 0
  numero = Number(prompt("ingrese un numero distinto a 0: ")); //ingreso el numero

  if (numero > 0) {
    //pregunto si el numero es positivo
    positivo++; //cuenta la cantidad de numeros positivos
  }
  numero++; //cuenta la cantidad de numeros en total
  numero = Number(prompt("ingresar un numero: ")); //ingresar nuevo numero
  if (porcentaje > 0) {
    //pregunto si el porcentaje es mayor a 0
    porcentaje = (positivo / numero) * 100; //calculo el porcentaje
    console.log("el porcentaje de positivos es: ", porcentaje);
  }
}
