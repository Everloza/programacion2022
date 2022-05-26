let medalla: number = 1; // declaro -medalla- de tipo number igual a 1.

// declaro -medalla- dentro del switch.
switch (medalla) {
  case 1: //en caso de que medalla sea 1
    console.log("oro"); //imprimo oro.
    break;

  case 2: //en caso de que medalla sea 2
    console.log("plata"); //imprimo plata.
    break;

  case 3: //en caso de que medalla sea 3
    console.log("bronce"); //imprimo bronce.
    break;

  default:
    console.log("mencion de participacion");
}
