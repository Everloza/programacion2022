let posicion: number = Number(prompt("Ingresar el puesto correspondiente"));
if (posicion === 1) {
  console.log("Entregar medalla de oro");
} else {
  if (posicion === 2) {
    console.log("Entregar medalla de plata");
  } else {
    if (posicion === 3) {
      console.log("Entregar medalla de bronce");
    } else {
      console.log("Entregar mención de participación");
    }
  }
}
// corregido la condicion de la posicion 1, se agregaron las condiciones
// else de la linea 4 y dentro de la condicion se agrego dos if y dos elses
