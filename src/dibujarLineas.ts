function dibujarLinea(numero: Number): string {
  let linea: string = "";
  for (let indice: number = 0; indice < numero; indice++) {
    linea = linea + "-";
  }
  return linea;
}

for (let indice: number = 1; indice <= 10; indice++) {
  console.log(dibujarLinea(indice));
}
