// POO
/*
Clases - Modelo a seguir.
Objetos - Es una instancia de una clase
Atributos - Es una caracteristica o propiedad del objeto (Son variables dentro de un objeto)
Métodos - Son las acciones que un objeto puede realizar (Son funciones dentro de un objeto)
*/

const animal = {
    nombre: "Snoopy",
    sonar() {
        console.log("Hago sonidos por que estoy vivo");
    }
}

const animal2 = {
    nombre: "Lola Buuny",
    sonar() {
        console.log("Hago sonidos por que estoy vivo");
    }
}

// console.log(animal);
// console.log(animal2);


// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_


// Función Contructora
/*
function Animal(nombre, genero) {
    // Atributo
    this.nombre = nombre;
    this.genero = genero;

    // Metodo
    this.sonar = () => {
        console.log("Hago sonidos por que estoy vivo");
    }

    this.saludar = () => {
        console.log(`Hola me llamo $(this.nombre)`);
    }
}
*/


// Función Constructora, donde asignamos los metodos al Prototipo, no a la función como tal
function Animal(nombre, genero) {
    // Atributo
    this.nombre = nombre;
    this.genero = genero;
}

    // Metodo agregados al prototipo de la fnción constructora
    Animal.prototype.sonar = function() {
        console.log("Hago sonidos por que estoy vivo");
    }

    Animal.prototype.saludar = function () {
        console.log(`Hola me llamo ${this.nombre}`);
    }

// const snoopy = new Animal("Snoopy", "Macho"),
// lolaBuuny = new Animal("Lola Bunny", "Hembra");

// console.log(snoopy);
// console.log(lolaBuuny);

// HERENCIA PROTOTÍCA
function Perro(nombre, genero, tamanio) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio;
}
// Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescribitura de métodos del prototipo padre en el hijo.
Perro.prototype.sonar = function () {
    console.log("Soy un pero y mi sonido es un ladrido")
}

Perro.prototype.ladrar = function () {
    console.log("Guauu Guauu");
}

const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
lolaBuuny = new Animal("Lola Bunny", "Hembra");

console.log(snoopy);
console.log(lolaBuuny);
snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();

lolaBuuny.sonar();
lolaBuuny.saludar();



// Ejercicios
// Función
function Laptop(marca, color, serie, procesador, discoDuro, ram) {
    // Atributo
    this.marca = marca;
    this.color = color;
    this.serie = serie;
    this.procesador = procesador;
    this.discoDuro = discoDuro;
    this.ram = ram;
}
Laptop.prototype.descripcion = function() {
    console.log(`Te ofrecemos la nueva ${this.marca}, de un muy lindo color ${this.color}, con un procesador de ${this.procesador}, con capacidad de mas de ${this.discoDuro}, y una rapida velocidad con ${this.ram}, copea esteta serie ${this.serie} y pegala en compra.`)
}

const hp = new Laptop("HP", "Gris", "12098uk1", "intel-i6", "1TB", "8GB"),
lenovo = new Laptop("LenovoP", "Gris", "1190k98uk1", "intel-4", "500GB", "4GB");

// console.log(hp.serie);
// hp.descripcion();
// console.log(lenovo);