let a = new String("Holis");
// console.log(a);

/*
Se evita que otro objeto ocupe 
la referencia de memoria usando const.
Y esto es un objeto
*/ 

const b = {};

const c = new Object();
console.log(c);


/*  Dentro dde un objeto a las variables se les van
 a llamar atributos/propiedades
 Y a las funciones se les llama metodos */

const ale = {
    nombre: "Alexis",
    apellido: "Gonzalez",
    edad: 23,
    pasatiempo: ["Escuchar musica", "Papercraft","Mirar series"],
    soltero: true,
    contacto:{
    email:"alesisgonzalez50@gmail.com", 
    movil:"42012391203"
    },
    saludar:/*function*/() => {
        console.log(`Hola :3 `)
    },
    decirMiNombre: function() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} añitos, y me puedes contactar ${this.contacto.movil} por mi telefono personal.`)
    }
};

console.log(ale);
console.log(ale["nombre"]);
console.log(ale["contacto"]);
console.log(ale.soltero);
console.log(ale.pasatiempo[1]);
console.log(ale.contacto);
console.log(ale.contacto.email);
ale.saludar();
ale.decirMiNombre();

// Nos lista las llaves
console.log(Object.keys(ale));

// Nos da los valores
console.log(Object.values(ale));

// Permite saber si un objeto tiene una propiedad
console.log(ale.hasOwnProperty("nombre"));
// Se puede usar para saber si existe esa propiedad
console.log(ale.hasOwnProperty("nacimiento"));