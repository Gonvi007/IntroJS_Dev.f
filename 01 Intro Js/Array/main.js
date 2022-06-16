// Sort
// Ordena la lista de forma ascendente (A-Z) por defecto.

var verduras = ['Cebolla', 'Perejil', 'Tomate', 'Calabaza', 'Brocoli'];
verduras.sort();

// Para ordenar numero no funciona de la misma manera, se debe hacer ed esta manera...

[2, 5, 1, 3, 45, 70, 34].sort(function(a, b){return a-b});
// Y daria el orden correcto de los numeros


// Reverse
// Coloca los elementos al réves
var verduras = ['Cebolla', 'Perejil', 'Tomate', 'Calabaza', 'Brocoli'];
verduras.reverse();


[1, 2, 3, 4, 5, 7, 8, 9].reverse();

// concat
// Concatena 2 elementos sin modificarlos.

var verduras = ['Cebolla', 'Perejil', 'Tomate', 'Calabaza', 'Brocoli'];

var frutas = ['Manzana', 'Pera', 'Platano'];

var listaDeCompras = verduras.concat(frutas);


// while
var i = 0;
while(i < 11) {
    console.log(i);
    i++;

}