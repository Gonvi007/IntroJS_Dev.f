/*

Expresiones Regulares
    Son una secuencia de caracteres que forma un patrón
    de búsqueda, principalmente utilizaa para le 
    búsqueda de patrones de cadenas de caracteres.

https://es.wikipedia.org/wiki/Expresión_regular

https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

*/

let cadena = "    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex repellat, obcaecati, eius reiciendis quis suscipit totam nostrum voluptas necessitatibus odio sunt voluptates perspiciatis porro quia repudiandae fuga enim quos ab."


// Con la badera i ignora M y m  👇 y g, busca todas las conincidencias, no solo la primera
let expReg = new RegExp("lorem", "ig");

// El test sirve para decir si hay o no lo que busco con true or false
console.log(expReg.test(cadena));
// El exec devuele el arreglo con las coincidencias.
console.log(expReg.exec(cadena));

// Busqueda de caracteres
let expReg2 = /lorem/ig;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));

// Busqueda de Numeros, se usan los corchetes
let expReg3 = /[0-9]/ig;
console.log(expReg3.test(cadena));
console.log(expReg3.exec(cadena));

// Busqueda las veces que se repite
let expReg4 = /lorem{1}/ig;
console.log(expReg4.test(cadena));
console.log(expReg4.exec(cadena));