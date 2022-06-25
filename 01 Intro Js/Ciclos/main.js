
// While

/*
let contador = 0;

while (contador > 10) {
    console.log("While" + contador);
    contador++;
}

    // 

do {
    console.log("do while" + contador);
    contador++;

} while (contador > 10){

}
*/
/*
for (inicializacion de variable; condicion; decremento o incremento) {
    sentencias que ejecuta el for
}
*/

for (let i = 0; i < 10; i++) {
    console.log("For " + i);
}

let numeros = [10, 20, 30 , 40, 50, 60, 70, 80, 90];

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

const jon = {
    nombre: "Jon",
    apellido: "Mirchon",
    edad: 40
}
/*
for (const key in object) {
}
*/

for (const propiedad in jon) {
    // console.log(propiedad);
    console.log(`Key: ${propiedad}, Value:${jon[propiedad]}`);
}

// for (const interator of object) {}
for (const elemento of numeros) {
    console.log(elemento)
}


let cadena = "Hola Mundito";

for (const caracter of cadena) {
    console.log(caracter)
}
