let clave: string = String("0");
let contadorIntentos: number = 0;

while (clave !== "eureka" && contadorIntentos < 3) {
  clave = String(prompt("Ingrese clave"));
  if (clave === "eureka") {
    console.log("clave correcta");
  } else {
    console.log("clave incorrecta");
    contadorIntentos++;
  }
}
