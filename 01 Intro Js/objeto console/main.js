
console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Esto es un mensaje informativo");
console.log("Un registro de lo que ha pasado en nustra aplicacion");

let nombre = "Alex",
    apellido = "Gonvi",
    edad = 35;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);

console.log(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad);
console.clear();
console.log(window);
console.log(document);
console.log(window);
console.log(document);
console.clear();

console.group("Cursos de @AlexisGonvi en mi corazón :,v");
console.log("Cursos de JavaScript");
console.log("Cursos de JavaScript");
console.log("Cursos de JavaScript");
console.log("Cursos de JavaScript");
console.log("Cursos de JavaScript");
console.groupEnd();

console.groupCollapsed("Cursos de @AlexisGonvi en mi corazón :,v");
console.log("Cursos de JavaScript");
console.log("Cursos de JavaScript");
console.log("Cursos de JavaScript");
console.log("Cursos de JavaScript");
console.log("Cursos de JavaScript");
console.groupEnd();
console.clear();

console.log(console);
console.table(Object.entries(console).sort());

const numeros = [1,2,3,4,5],
    vocales = ["a", "e", "i", "o", "u"];

console.table(numeros);
console.table(vocales);

const gato = {
    nombre: "Bender",
    raza: "callejero :v",
    color: "Gris y negro"
}

console.table(gato);
console.clear();

console.time(`Cuanto tiempo tarda mi código`);
const arreglo = Array(10000);

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}

console.timeEnd(`Cuanto tiempo tarda mi código`);
console.log(arreglo);
console.clear();

for(let i = 0; i <= 50; i++) {
    console.count("código for");
    console.log(i);
}
console.clear();

let x = 4,
y = 2,
pruebaXY = "Se espera que X siempre sea menor que Y";

// console.assert(x<y, x,y,pruebaXY);

console.log(Date());

let fecha = new Date();
console.log(fecha);
// Día del mes
console.log(fecha.getDate());
// Día de la semana S L M M J V S -> 0 1 2 3 4 5 6
console.log(fecha.getDate());
// Mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
// Cuenta los segundos desde el 1ero de enero, primer hora
console.log(Date.now());
let cumplAlex = new Date(1999,4,10)
console.log(cumplAlex);

console.clear();

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.8));
console.log(Math.ceil(7.32567891));
console.log(Math.floor(7.24567));
// Es mejor usar este para redondear al mas cercano
console.log(Math.round(7.2));
// Raiz cuadrada
console.log(Math.sqrt(8));
// Elevacion
console.log(Math.pow(2,5));
// Da referencia si es numero negativo o posivivo
console.log(Math.sign(-7.8));
console.log(Math.random());
console.log(Math.round(MathMLElement.random()*1000));