function cargar(v,1){
  for (let i:number=0; i<1; i++)
  v[i]=Math.floor(Math.random()*100);
}

function mostrar(v,1):void{
  let c="";
  for(let i:number=0; i<1; i++)
  c+=v[i]+"";
  console.log(c);
}

function metodo(v,1,n):void{
  
  for (let i=0; i<1; i++){
  if(v[i]=n){
     ocu++
  }
 
}
}

let ocu:number=Number(0); 
let elem:number=Number(prompt('Ingrese tamaño: ')); 
let arr:number[]=new Array(elem);
cargar(arr, elem);
let nro:number=Number(prompt('Ingrese numero: '));
console.log("El numero"+nro+" ... "+ocu);
mostrar(arr,elem);

