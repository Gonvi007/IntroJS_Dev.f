// ARRAY

// Coleeción orenada de datos, se emplea para almacenar multiples valores, en una sola variable.

// SINTAXIS

// var nombreDelArray = [];

// Acceder a los elemetos de un array
// La posicion de los array empieza en 0

// var colores = ['negro', 'verde', 'rojo', 'azul', 'naranja']
// console.log(colores[2]);

// Modificar en un elemento array
// console.log(colores);
// colores[2] = 'rosa';
// console.log(colores);

// Metodos de los Array

// 1. Length
// Se utiliza para conocer el numero de elementos que tiene el array

// frutas.length;

// 2. Push
// Se utiliza para agregar al final un elemento en el array

// colotes.push('Morao');
// console.log(colores);

// 3. Pop
// Se elimina el elemento final del array

// colores.pop;
// console.log(colores);

// 4. unshift
// Agrega un elemento al principio del array

// colores.unshift('amarillo');
// console.log(colores);

// 5. Shift
// Elimina el primer elemento del array

// colores.shift();
// console.log(colores);

// 6. split
// Divide un string en un array, tomando com oreferencia un caracter

// var alumnos = ['Deyanira,Cristobal,Marcos,Mezly,Jose']

// var arrayDeAlumnos = alumnos.split(',')
// console.log(colores)

// 7. Slice
// Quita una parte del array y devuelve un nuevo array

// Sintaxis
// nombreDeArray.sluce(posicion inicial, posicion final)

// var colores = ['negro', 'verde', 'rojo', 'azul', 'naranja']

// console.log(colores)
// var quitarColores = colores.slice(2)

// var quitarColores = colores.slice(2, 4)
// console.log(colores)
// console.log(quitarColores)

// 8. Splice
// Sirve para agregar o borrar elementos del array

// Sintaxis
// nombreDeArray
// nombreDeArray.splice(indice, numero de elementos, ELEMTNO A AGREGAR)

// No borrando elementos, pero agregando el

// console.log(colores)
// console.log(colores.splice(2,0, 'Amarillo', 'Peru'))
// console.log(colores)

// // Corrando elementos

// console.log(colores)
// console.log(colores.splice(2, 1, 'rosa'))
// console.log(colores)

// Sort
// Ordena la lista de forma ascendente (A-Z)

// var verduras = ['Cebolla', 'Brocolo', 'Papas', 'Colibri'];
// console.log(verduras);
// verduras.sort();
// console.log(verduras);

// En caso de numero, toma el primer numero, sin importar que tenga mas de 1 digito

// var numeros = [5, 15, 7, 25, 47, 120, 13];
// console.log(numeros);
// verduras.sort();
// console.log(numeros);

// // Para numeros se usa una funcion, para acomodar el orden
// var numeros = [5, 15, 7, 25, 47, 120, 13];
// console.log(numeros);
// verduras.sort(function(a,b)=>{return a-b});
// console.log(numeros);


// Cuando ordenamos strings con mayusculas y minusculas

var alumnos = ['Abbad', 'alexis', 'Chayanne', 'daniel', 'Dreyco'];

console.log(alumnos);
alumnos.sort((a,b)=> {

})



// REVERSE
// Coloca los elementos del

// console.log(verduras);
// verduras.reverse();
// console.log(verduras);


// // Concat
// // Este método une (concatena) el contenido del array

// var paises = ['México', 'EUA', 'Chile'];
// var platillos = ['Pozole', 'Papatzules', 'Chanwis'];

// var unionDeArrays = paises.concat(platillos);
// console.log(unionDeArrays)


// Ejerció Array
// Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
// Ana, Oswaldo, Raúl, Celia, María, Antonio
// (vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)		
// Imprime la clasificación actual
// El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:		
// 1- Celia adelanta a Raúl		
// 2- Antonio es descalificado y se elimina del concurso
// 3- Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
// 4- Hay una nueva participante que pasa a encabezar la clasificación: Marta	
// 5- Imprime la clasificación actualizada y comprueba que se ha hecho correctamente

var clasificaciones = ['Ana', 'Oswaldo', 'Raúl', 'Celia', 'María', 'Antonio'];
