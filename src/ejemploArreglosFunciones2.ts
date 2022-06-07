/* 
Invertir Arreglo (con Métodos)

• Almacene en un arreglo de tamaño N los números ingresados
por el usuario.
• La dimensión N también es ingresada por el usuario
• Muestre los números del arreglo pero del último al primero.

Ejemplo:
v = 1, 3, 7, 9, 9, 5
La salida es: 5, 9, 9, 7, 3, 1

*/
function mostrarVector(v : number[], cantidad : number) {
  let indice : number;
  for (indice=0; indice<cantidad; indice++) {
  console.log(v[indice], " “);
  }
  }

  function mostrarVectorInvertido(v : number[], cantidad : number) {
    let indice : number;
    for (indice=cantidad-1; indice>=0; indice--) {
    console.log(v[indice], " “);
    }
}

function invertirVector(v : number[], cantidad : number) {
      let indiceIzq : number = 0;
      let indiceDer : number = cantidad-1;
      let aux : number;

while (indiceIzq < indiceDer) {
      aux = v[indiceIzq];
      v[indiceIzq] = v[indiceDer];
      v[indiceDer] = aux;
      indiceIzq++;
      indiceDer--;
      }
      }


      let cantidad : number = dato.value;
      let v : number[] = new Array(cantidad);

      console.log("Cargando v");
      cargarVector(v, cantidad);
      console.log("Mostrando invertido");
      mostrarVectorInvertido(v, cantidad);
      console.log("Invierto los valores en el vector");
      invertirVector(v, cantidad);
      console.log("Mostrando vector");
      mostrarVector(v, cantidad);