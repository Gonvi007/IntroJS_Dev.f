
class Animal {
    // El constructor es un metodo especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre, genero) {
            // Atributo
        this.nombre = nombre;
        this.genero = genero;

    }

    // Metodos
    sonar () {
        console.log("Hago sonido bonitos");
    }
    
    saludar () {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal {
    constructor (nombre, genero, tamanio) {
        // Con el metodo super() se manda a llamar el constructor de la clase padre
        super(nombre, genero);
        this.tamanio =  tamanio;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar() {
        console.log("Guauuuu Guauuu")
    }
}

const mimi = new Animal ("Mimi", "Hembra"),
scooby = new Perro ("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();