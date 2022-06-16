






// FOR
// sintaxis

/*

for (var index = 0; index <= 10; index++) {
    codigo de ejecucion
    ejemplo: console.log(index)
}

*/

// Ejercicio: Imprimir en consola los numero del 1 al 10

// for (var i = 1; i <= 10; i++ ) {
//     console.log(i)
// }


// imprimir los elementos de un array

// var frutas = ['manzana', 'uva', ' pera', 'granada', ' mango', 'melón']

// for (var i = 0; i <= frutas.length; i++) {
//     console.log(frutas[i])
// }

// Modificar el for para que el inicie desde granada

// for (var i = 2; i <= frutas.length; i++) {
//     console.log(frutas[i])
// }

/*
Escribe un programa que:
1.- muestre en pantalla los numeros del 1 al 100,
2.- sustitutendo los multiplos de 3 por la palabra fizz
3.- Los multiplos de 5 por "buzz"
4.- Los multiplos de ambos, es decir, los multiplos de 3 y 5 (o de 15), por la palabra "fizzbuzz"
*/

// for (var i = 1; i <= 100; i++) {

//     if (i % 3 == 0 && i % 5 == 0){
//         console.log('fizzbuzz')
//     } else if(i % 3 == 0){
//         console.log('fizz')
//     } else if (i % 5 == 0){
//         console.log('buzz')
//     } else {
//         console.log(i)
//     }
// }


/* 1.- Crea un programa que imprima en consola los números impares del 1 al 50.*/

for (var i = 1; i <= 50; i++) {
    if (i % 3 == 0)
    console.log(i)
}


/*
2.- Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
*/