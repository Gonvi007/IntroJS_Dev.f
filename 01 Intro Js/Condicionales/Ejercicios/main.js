// Ejercicios
// 1.- Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?“), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-


// var usuario = prompt("¿Eres Hermoso/a ?")
// console.log(usuario)

// if (usuario == "si") {
//   console.log("Claro que si nene, eres hermoso/a")
// } 
// if (usuario == "no") {
//   console.log("Bromeas, tu carita fue tallada por los mismos dioses")
// } else {
//   console.log("Que te pasa hijo de pvta, responde bien")
// }

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// 2.- Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm


// var n1 = prompt("Paseme un numero joven")

// if (n1 % 2 == 0) {
//     console.log(n1 + " Es divisible entre 2")
// } else {
//     console.log(n1 + " Nel no se puede")
// }


// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// 3.- Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

// var n1 = prompt("¿Numero par o impar?")

// if( n1 % 2 == 0 ) {
//     console.log("Es numero PAR")
// } else {
//     console.log("Es numero IMPRAR")
// }

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// 4.- Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir “Ganaste un premio”, en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

// var n1 = prompt("Ingrese numero")

// if (n1 == 1000) {
//     console.log("Numero: " + n1 + " Ganaste un premio")
// } else {
//     console.log("Numero: " + n1 + " Lo siento, sigue participando")
// }

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// 5.- Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.


var n1 = prompt("Ingrese un numero")
var n2 = prompt("Ingrese otro numero")

if( n1 < n2 ) {
    console.log(n1 + " Es el numero menor")
}
if (n2 < n1) {
    console.log(n2 + " Es el numero menor")
}
if (n1 == n2) {
    
    console.log("Primer numero: " + n1 + " Y segundo numero: " + n2 + ", Son numero iguales")
}


// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// 6.- Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// 7.- Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// 8.- Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// 9.- Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
// 10.- Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
// Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN
