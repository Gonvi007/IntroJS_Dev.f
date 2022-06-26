
    // noExiste;
try {
    console.log("En Try se agrega el código a evaluar");
    noExiste;
} catch (error) {
    console.log("Catch, captura cualquier error surgido o lanzado en el try");
    console.log(error);
} finally {
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch");
}

try {
    let numero = "y";
    if(inNaN(numero)){
        throw new Error("El caracter introducido no es un Número")
    }
    console.log(numero * numero);
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}