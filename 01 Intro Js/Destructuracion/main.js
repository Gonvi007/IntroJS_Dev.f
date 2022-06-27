const numeros = [1,2,3];

// Sin destructuración
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno, dos, tres);

// Con destructuración

const [one, two, three] = numeros;
console.log(one, two, three);

const persona = {
    nombre: "Alexis",
    apellido: "GonVi",
    edad: 23
}

let {nombre, apellido, edad} = persona;
console.log(nombre, apellido, edad); 


// Labels

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
    bubleUnidades: while (true) {
        console.log(`El número actual es: ${decenas} ${unidades}`);
        unidades++;
        if(unidades === 10) {
            unidades = 0;
            break bucleDecenas;
        }
        if(decenas === 2) {
            break bucleDecenas;
        }
    }
    decenas++
}
console.log("Ya hermos terminado");

while (true) {
    while (true) {
        console.log(`El número actual es: ${decenas} ${unidades}`);
        unidades++;
        if(unidades === 10) {
            unidades = 0;
            break;
        }

    }
    decenas++
    if(decenas === 2) {
        break;
    }
}
console.log("Ya hermos terminado");