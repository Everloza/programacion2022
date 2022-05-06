let codigo: string = prompt("Ingrese la clave: ");
let intento: number = 0;
let intentorest: number = 2;
//  forzar el for es una mala practica!!

for (intento = 0; intento < 2; intento++) {
  if (codigo === "Eureka") {
    console.log("Clave correcta, ingresando al sistema");
    intento = 2;
  } else {
    codigo = prompt(
      "La clave es incorrecta, te quedan" +
        intentorest +
        "intentos, Ingrese la clave nuevamente: "
    );
  }
  intentorest -= 1;
}
if (codigo !== "Eureka") {
  console.log("Clave incorrecta");
}
