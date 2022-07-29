/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

console.log("Ejercicio: 1");

// contarCaracteres = (cadena = "") =>{
//   if (!cadena) {
//     console.warn("No ingresaste ninguna cadena morro")
//   } else {
//     console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`)
//   }
// }

const contarCaracteres = (cadena = "") =>
  (!cadena)
    ? console.warn("No ingresaste ninguna cadena morro")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);

// contarCaracteres();
// contarCaracteres("Hola Mundo");




/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/
console.log("Ejercicio: 2");

      let cadenaDeTexto = "La práctica hace al maestro.";
      
      function cadena(){
        console.log(cadenaDeTexto.slice(0, 11));
        console.log(cadenaDeTexto.slice(12, -1));
      }

      // console.log(cadena());
    //   cadena();

    const recortarTexto = (cadena = "", longitud = undefined) =>
      (!cadena)
        ? console.warm("No ingresaste texto")
        : console.info(cadena.slice(0,longitud));


    recortarTexto("Hola mundanos", 4)



/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

console.log("Ejercicio: 3");


      const myString = 'Hello World. How are you doing?'
      const splits = myString.split(' ')
      
      console.log(splits)
/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/