// Variable de tipo string
var nombreDeUsuario = "Francisco"

// Variable de tipo Number
var tipoNumber = 2;
var tipoDouble = 2.2;

// tipo de dato Boolean
var tipoBoolean = false;

// Con typeof sabemos el tipo de dato que es una variable
// console.log("El tipo de dato es: " + typeof tipoBoolean)

// console.log("El tipo de dato de null es: " + typeof null)
// console.log("El tipo de dato de undefined es: " + typeof undefined)

var null1 = null;
var null2 = null;

var sumaDeNull = null1 + null2

var undefined1 = undefined
var undefined2 = undefined

var sumaDeUndefined = undefined1 + undefined2

// console.log("La suma de Null es: " + sumaDeNull)
// console.log("La suma de Undefined es: " + sumaDeUndefined)


// If y else
// var inputUsuario = prompt("Ingrese un numero del 0 al 1")
// If de una sola linea
// if (inputUsuario === "0") console.log("Hola desde el cuerpo de la condicion")

// If de varias lineas
// if (inputUsuario === "0") {
//   var inputUsuarioCondicional = prompt("Cual es tu nombre?")
//   console.log("Hola " + inputUsuarioCondicional + " estas dentro de la condicional")
// } else {
//   console.log("Eligiste un numero diferente a 0")
// }

// Ejemplo de mayoria de edad
var usuarioEdad = prompt("Ingrese su edad")

if (usuarioEdad >= 21) {
  console.log("Eres mayor de edad y puedes tomar chela y pistear :D y tambien votar")
} else if (usuarioEdad >= 18) {
  console.log("Eres mayor de edad pero no puedes salir a pistear :( ")
} else {
  console.log("Eres menor de edad ")
}

// Operador Ternario (Condición) = ?verdadero : falsa

let edad = 19;
console.log("Operador Ternario");

let eresMayor = (edad >= 18)
  ? "Eres mayor de Edad"
  :"Eres menor de Edad";
confirm.log(eresMayor);  

// switch -case
/*
domingo -0 
lunes - 1
martes - 2
miercoles - 3
jueves - 4
viernes - 5 
sabado - 6
*/

let dia = 2;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;
  case 4:
    console.log("Jueves");
  break;
  case 5:
    console.log("Viernes");
  break;
  case 6:
      console.log("Sabado");
    break;
  default:

  console.log("El día no existe");
    break;
}

const numeritos = [1,2,3,4,5,6,7,8,9,0];

for (let i = 0; i < numeritos.length; i++) {
  if (i === 5) {
    // break; //Se corta y ya no continua
  }
  console.log(numeritos[i]);
}
for (let i = 0; i < numeritos.length; i++) {
  if (i === 5) {
    continue; //Se repite nuevamente desde el inicio
  }
  console.log(numeritos[i]);
}