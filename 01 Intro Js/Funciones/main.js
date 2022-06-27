
// Función Declarada

// Declaración de función
// function estoEsUnaFuncion() {
//     console.log("Uno");
//     console.log("Dos");
//     console.log("Tres");
// }

// Invocacion de función
// estoEsUnaFuncion();
// estoEsUnaFuncion();
// estoEsUnaFuncion();

// function unaFuncionQueDevuelveValor(){

//     console.log("Uno");
//     console.log("Dos");
//     console.log("Tres");
//     return "La funcion ha retornado una Cadena de texto"
// }

// let valorDeFuncion = unaFuncionQueDevuelveValor();

// console.log(valorDeFuncion);

// function saludar(nombre, edad) {
//     console.log("Hola mi nombre es " + nombre + " y tengo " + edad + " años.")
// }

// saludar("KEnAi",7);


funcionDeclarada();

function funcionDeclarada () {
    console.log("Esto es una función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada.")
}

funcionDeclarada();

// Función anónima

// const funcionExpresada = 0 => {

// }

funcionExpresada();
// por eso de debe llamaar despues de declararla, no antes...


// const funcionExpresada = () {
//     console.log("Esto es una función expresada, es decir, una función que se le a asignado como funcion a una variable, si invocamo esta función antes de su definicion JS nos dira 'Cannot access 'funcionExpresada' before initialization' ")
// }

// funcionExpresada();





// Declarar arreglo

const a = [];
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]]
console.log(a);
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][0]);

const c = Array.pf("X", "Y", "Z", 9, 8, 7);
console.log(c);

const d = Ayyar(100).fill(false);
console.log(d);

const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");
console.log(colores);

colores.pop;
console.log(colores);

colores.forEach(function(el) {
    console.log('<li id ="${index}">${}el</li>')
});
