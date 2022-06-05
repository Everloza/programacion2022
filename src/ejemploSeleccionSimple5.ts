/* 
Estructura de Control – Selección Simple
Ejercicio - Login

• Desarrolle un algoritmo que permita loguearse (registrarse)
a un sistema, ingresando un nombre de usuario y la
contraseña adecuada.
• Considerar que tanto el usuario como la contraseña están
formados sólo por letras.
• El sistema deberá validar que el usuario y la contraseña
sean correctas, comparándolas con lo que el sistema tiene
registrado para ese usuario. Tenga en cuenta que el sistema
tiene registrado el usuario: Juan y la clave claveJuan

*/

let user: string = String(prompt("Por favor, inserte un nombre de usuario:")); //asigno una variable -user- de tipo string para mostrar en el cuadro de consola.
let pass: string = String(prompt("Inserte una contraseña:")); //asigno una variable -pass- de tipo string para mostrar en el cuadro de consola.

if (user === "Juan" && pass === "claveJuan") {
  //si -user- es igual a "Juan" AND -pass- es igual a "claveJuan" entonces.
  console.log("Bienvenido Juan."); //imprimo el mensaje de bienvenida.
} else {
  //sino...
  console.log("Los datos son incorrectos."); //imprimo el mensaje "Los datos son incorrectos".
}
