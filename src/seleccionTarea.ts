let sueldoActual: number = Number(prompt("sueldo actual"));
let nuevoSueldo: number = 0;

switch (true) {
  case 0 < sueldoActual && sueldoActual <= 15000:
    nuevoSueldo = sueldoActual * 1.2;
    console.log("Ud. tiene un aumento de 20%: $" + nuevoSueldo);
    break;

  case 15001 < sueldoActual && sueldoActual <= 20000:
    nuevoSueldo = sueldoActual * 1.1;
    console.log("Ud. tiene un aumento del 10%: $" + nuevoSueldo);
    break;

  case 20001 < sueldoActual && sueldoActual <= 25000:
    nuevoSueldo = sueldoActual * 1.05;
    console.log("Ud. tiene un aumento de 5%: $" + nuevoSueldo);
    break;

  default:
    nuevoSueldo = sueldoActual;
    console.log("Ud. no tiene aumento: $" + nuevoSueldo);
    break;
}
