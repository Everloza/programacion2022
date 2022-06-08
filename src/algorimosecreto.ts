// ALGORITMO SECRETO

// declara las variables de tipo any para elem,arr,nro,ocu
let elem,arr,nro,ocu; 
// la variable -elem- de tipo number es igual a number y se muestra por la consola de pantalla un string
elem:Number=Number(prompt('Ingrese tamaño: ')); 
// se declara -arr- de tipo arreglo con el parametro -elem-
arr=new Array(elem);
// se ingresa una funcion -cargar- con parametros -arr- y -elem-
cargar(arr, elem);
// declara -nro- de tipo number y se pide mostrar por pantalla un string
nro:Number=prompt('Ingrese numero: ');
// Se imprime por la consola un string mas la variable -nro- mas un string mas la variable -ocu-.
console.log("El numero"+nro+" ... "+ocu);
// ingresa la funcion -mostrar- con parametros de -arr- y -elem-
mostrar(arr,elem);

// se declara la funcion -cargar- con parametros -v- y -1-
function cargar(v,1){
  // se utiliza un for para declarar la variable i de tipo string igual a 0, menos a 1 y con contador ++
  for (let i:string=0; i<1; i++)
  // declaro -v- de tipo array con parametro -i- 
  // igual a funcion de un máximo entero menor o igual a un número con otro numero desde el 0 en adelante 
  // multiplicado por 100
  v[i]=Math.floor(Math.random()*100);
}

// declaro la funcion -mostrar- con parametros -v- y -1- de tipo void.
function mostrar(v,1):void{
  // declaro -c- igual a string
  let c="";
  // se usa un for para declarar -i- de tipo number igual a 0, menor a 1 y contador ++
  for(let i:number=0; i<1; i++)
  // se le suma la variable -c- con -v- de tipo arreglo en -i- mas string.
  c+=v[i]+"";
  // se muestra en la consola la variable -c-
  console.log(c);
}

// se declara la funcion -metodo- con parametros en -v, -1- y -n- de tipo number.
function metodo(v,1,n):number{
  // se declara -oc-
  let oc;
  // se utiliza un for y se declara -i- igual a 0, menor a 1 y contador positivo++
  for (let i=0; i<1; i++)
  // Si el arreglo -v- en -i- es igual a n entonces
  if(v[i]=n)
  // la variable -oc- se cuenta
  oc++
}
