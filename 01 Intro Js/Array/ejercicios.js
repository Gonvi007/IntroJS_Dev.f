/* Crear una funcion que reciba como
  parametro una oración y defina si
  es palindromo */


  function esPalindromo(oracion) {
    var oracionesSinEspacio = [];
    var indice = 0;

    for(var i = 0; i < oracion.length; i++) {
        if (oracion[i] == '') {
            console.log("Espacion encontrado en la posicion : " + i);
        } else {
            oracionesSinEspacio[indice] = oracion[i].toUpperCase();
            indice = indice + 1;
        }
    }

    var indiceAlreves = (oracionesSinEspacio.length - 1);

    for(var i = 0; i < oracionesSinEspacio.length; i++) {
        if(oracionesSinEspacio[i] != oracionesSinEspacio[indiceAlreves]) {
            return "La oracion no es palindromo ";
        } else {
            indiceAlreves = indiceAlreves -1;
        }
    }
    return "La oracion es palindroma"
  }

  var infoUsuario = prompt ("Ingrese una oracion");

  console.log(esPalindromo(infoUsuario));



// Escribe una función que imprima una
// pirámide de astericos como la siguiente:
//          *
//         * *
//        * * *
//       * * * *
//      * * * * *


// Juego de Piedra, Papel o Tijera con el PC

// var opcionUsuario = prompt("Ingrese 1.- Piedra, 2.- Papel, 3.- Tijera");

// function randomNumber (minimo, maximo) {
//     var numero = Math.floor(Math.random() * (maximo - minimo +1 )) + minimo;
//     return numero;
// }

// function Juego(opcionUsuario) {
//     var opcionPc = randomNumber(1,3);

//     if (opcionUsuario == 1) {
//         if (opcionPc == 1) {
//             return "Empate";
//         } else if(opcionPc == 2) {
//             return "Gana el Pc"
//         }else if (opcionPc == 3) {
//             return "Gana el Pc"
//         }
//     }

// } 

// juego (opcionUsuario);