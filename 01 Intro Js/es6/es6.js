















































// // Arrays literales

// // Math.max(), retorna el numero mayor de una lista

// console.log(Math.max(23, 4, 10));

// let numeros = [23, 4, 10, 89, 34, 190];

// console.log(Math.max(numeros[0], numeros[1], numeros[2]));
// console.log(Math.max(...numeros));

// let numeros2 = [23, 56, 74];

// console.log(Math.max(...numero, ...numeri2));

// // Concatenar 2 Arrays

// let resultadosNum = [...numeros, ...numeros2];

// console.log(resultadoNum);

// // Copiar un array en otro array

// let CopiarNum = [...resultadoNum];
// console.log(CopiarNum);

// // String

// let frase = "Hola soy la frase";
// console.log([...frase]);

// // Funciones

// function suma (a, b, c) {
//     return a + b + c;
// }

// console.log(suma(3,5,10));

// let numSuma = [56,7,10];


// console.log(suma(...numSuma));

// // Copiar un objeto en otro objeto

// let clonePersona = {...persona};

// // Unir 2 objetos en un objeto

// let persona2 = {
//     nombre: 'Jose',
//     edad: 15
// };

// no podemos unir asi 2 objetos o mas, con...
// por que se so

















// STRING TEMPLATE

// Sintaxis
// '${variable}'

// let superheroe = {
//     nombre: 'Iron Man',
//     Color: 'Rojo',
//     edad: 50,
//     empresa: 'Marvel'
// };

// console.log('Hola soy ' + superheroe + '' + "mi lindo color es " + '' + 'tengo ' + edad + ' aniñitos y mi empresa es: ' + empresa);

// console.log('Hola soy ${superheroe.nombreSuper}')

// let {nombreSuper, color, edad, empresa } = superheroe
// 🎁
// Para sacar los emojis, se presiona Windowns + .
// Funciones flechas o Arrow Functions

// Sintaxis

// ()=>{}
// (parametro1, parametro2, ...parametroN) => {sentencias};
// (parametro1, parametro2, ...parametroN) => expresion;

// Parentesis opcionales cuando tenemos un solo parametro

// (parametro1) => {sentencias};
// parametro1 => {sentencias};


// Parentesis son OBLIGATORIOS si la funcion no tiene parametros
// () => {sentencias}

// ejemplo

// const sayHello = function () {
//     return alert("Hello")
// };

// const sayHello = ()=> {
//     return alert("Hello")
// };

// const sayHello = ()=> alert("Hello");

// sayHello();

// Ejemplo 2 

// const resta = function (a, b){
//     return a-b
// };

// console.log(resta(10,5));

// const resta = (a, b)=>a-b;
// console.log(resta(10, 5));

// Ejemplo 3

const celsius = parseInt(prompt("Ingrese el valor de celsius"));

// const toFarenheit = function(celsiusNumber) {
//     const farenheit = (celsiusNumber * 1.8) + 32;
//     return alert('${celsiusNumer} celsius equivale a ${farenheit} farenheit') 
// }

// Como aqui tenemos mas de una ecpresion no quitamos las llaves

const toFarenheit = (celsiusNumber) => {
    const farenheit = (celsiusNumber * 1.8) + 32;
    return alert(`${celsiusNumber} celsius equivale a ${farenheit} farenheit`);
}

toFarenheit(celsius);