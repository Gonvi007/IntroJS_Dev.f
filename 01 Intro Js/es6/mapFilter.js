// MAP

/*
// El metodo map, permite iterar o convertir un arreglo con otro.
// El metodo map transforma los arreglos.
// */

// // Ejemplo -> trandormar el arreglo y sumarle 2 a cada elemento.

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// // let sumar = function{numero} {return numero +2};
// // let sumar = {numero} => {numero + 2};

// let sumar = numero => numero + 2;
// // let multiplicacion = numero => * 2;

// let numerosMasDos = numeros.map(sumar);
// let numerosMulplicados= numeros.map(multiplicar);
// // let numerosMulplicados= numeros.map(function(numeros) {return numero +2});

// // console.log(numeros);
// // console.log(numerosMasDos);
// // console.log(numerosMulplicados);

// // Ejemplo 2 solo quiero obtener el nombre de mi array objetos

// let alumnos = [
//     {nombre: 'Juan',
//     edad: 23},
//     {nombre: 'Pedro',
//     edad: 15},
//     {nombre: 'Maria',
//     edad: 60},
//     {nombre: 'Adriana',
//     edad: 29}
// ];

// const obtenerNombre = alumno => alumno.nombre;

// let nombresDeAlumnos = todosLosAlumnos.map(obtenerNombre);

// // console.log(todosLosAlumnos);
// // console.log(nombresDeAlumnos);

// // Ejemplo 3 

// let numString = ['245','10','78', '50'];
// let number = n => parseInt();

// // let nu


// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
/*                 FILTER              */

/*

Nos ayuda a filtrar uno o mas elementos de un array basandose en alguna codicion.

No modifica el arreglo ofiginal, nos trae un nuevo arreglo
*/

// Ejemplo 4: Filtrar los elementos y obtener todos aquellos que sean mayores o iguales a 7
let numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const filtrarNumeros = numeritos => numeritos >= 7;

let resultado = numeritos.filter(filtrarNumeros);

// console.log(numeritos);
// console.log(resultado);

// Ejemplo 5 Solo quiero obtener los alumnos mayores a 30 años

let alumnos = [
    {nombre: 'Juan',
    edad: 23,
    materiaFavorita: "Historia"},
    {nombre: 'Pedro',
    edad: 15,
    materiaFavorita: "Matematicas"},
    {nombre: 'Maria',
    edad: 60,
    materiaFavorita: "Geografia"},
    {nombre: 'Adriana',
    edad: 29,
    materiaFavorita: "Historia"}
];

const filtrarAlumnos = alumno => alumno.edad > 30;

let alumnosMayores = alumnos.filter(filtrarAlumnos);

let alumnosMayores2 = alumnos.filter(alumno => alumno.edad > 30);


// console.log(alumnos);
// console.log(alumnosMayores);
// console.log(alumnosMayores2);

// Ejemplo 6 Solo quiero obtener los alumnos con materia favorita Historia, y tenga mas de 25 años

const filtrarAlumnos2 = alumno => alumno.edad > 25 && alumno.materiaFavorita == 'Historia';

let alumnosfiltrados = alumnos.filter(filtrarAlumnos2);

// console.log(alumnosfiltrados);





// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
/*          Ejercicios de practica      */
/*
1.- A partir del siguiente arreglo de animalitos:
    const animalitos = [
    { nombre: “carlitos”  , especie: “conejo” },    // 0
    { nombre: “esteban”   , especie: “perro” },     // 1
    { nombre: “fabiruchis”, especie: “tortuga” },   // 2
    { nombre: “anita”     , especie: “gato” },      // 3
    { nombre: “miranda”   , especie: “conejo” },    // 4
    { nombre: “lucas”     , especie: “conejo” },    // 5
    { nombre: “Horacia”   , especie: “tortuga” }    // 6
    ];
    Genera un nuevo arreglo en el que solo se encuentren
    los conejos del arreglo original.

*/


const animalitos = [
    { nombre: "carlitos"  , especie: "conejo" },    // 0
    { nombre: "esteban"   , especie: "perro" },     // 1
    { nombre: "fabiruchis", especie: "tortuga" },   // 2
    { nombre: "anita"     , especie: "gato" },      // 3
    { nombre: "miranda"   , especie: "conejo" },    // 4
    { nombre: "lucas"     , especie: "conejo" },    // 5
    { nombre: "Horacia"   , especie: "tortuga" }    // 6
    ];

    
// const filtrarAnimalitos = animal => animal.especie == "conejo";

// let animalfiltrado = animalitos.filter(filtrarAnimalitos);

let animalfiltrado = animalitos.filter(animal => animal.especie == "conejo");

console.log(animalfiltrado);

/*
2.- A partir del siguiente arreglo de mascotas:
    const mascotas = [
        { nombre: “Bimbo”,    especie: “Hamster”, comidasFavoritas: [“Semillas”, “Nueces”] },
        { nombre: “Ludovico”, especie: “Perro”,   comidasFavoritas: [“Huesos”, “Jamon”] },
        { nombre: “Pavlov”,   especie: “Perro”,   comidasFavoritas: [“Croquetas”, “Pollo”] },
        { nombre: “Chancla”,  especie: “Gato”,    comidasFavoritas: [“Atun”, “Pescado”] },
        { nombre: “Don Pepe”, especie: “Perico”,  comidasFavoritas: [“Semillas”] }
    ];
    Genera un nuevo arreglo que contenga los nombres de todas
    las mascotas.
*/

const mascotas = [
    { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
    { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
    { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
    { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
    { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
];

const averLosNombres = nombreMascota => nombreMascota.nombre;

let nombresMascotas = mascotas.map(averLosNombres);

// let nombresMascotas = mascotas.map(nombreMascota => nombreMascota.nombre);

console.log(nombresMascotas);

