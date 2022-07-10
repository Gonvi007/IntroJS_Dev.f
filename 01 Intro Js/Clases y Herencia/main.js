
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
        this.raza = null;
    }

    sonar() {
        console.log("Soy un perro y mi sonido es un ladrido");
    }
    ladrar() {
        console.log("Guauuuu Guauuu")
    }
    // -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
// Métodos Estáticos, Getters y Setters

// Uno método estático se puede ejecutar sin necesidad de instancia la clase
    static queEres() {
        console.log("Los perros somo animales mamíferos que pretenecemos a la familia de los caninos. Somo considerados los mejores amigos del hombre.");
    }

    // Los Stters y Getters son mpetodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase.

    get getRaza(){
        return this.raza;
    }
    set setRaza(raza){
        this.raza = raza;
    }
}

Perro.queEres();

const mimi = new Animal ("Mimi", "Hembra"),
scooby = new Perro ("Scooby", "Macho", "Gigante");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
console.log(scooby.getRaza);
scooby.setRaza = "Gran Danes";
console.log(scooby.getRaza);


