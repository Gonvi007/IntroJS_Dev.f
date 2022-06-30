//Hacer una función que muestre la tabla de multiplicar de un número

// var multi = prompt("Ingresa un número del cual sacar la tabla de multiplicar hasta el 10")

function tablaMultiplicar(number) {
    var resultado = "";
    var cont = 1;

    for (let index = 0; index < 10; index++) {
        
        resultado += parseInt(number) + " X " + parseInt(cont)+" = "+(number*cont)+"\n"
        cont++
    }

    return resultado;
}

// console.log(tablaMultiplicar(multi));

/*  _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ */

//Leer un arreglo de enteros y obtener su promedio
var arreglo = [1,2,3,4,5,6]

function sumatoria(arreglo) {
    
    var sumatoria = 0;
    var promedio = 0;

    for (let index = 0; index < arreglo.length; index++) {
        
        var x = arreglo[index];
        sumatoria = x + sumatoria;

    }

    promedio = sumatoria / arreglo.length;
            
    return(`La sumatoria es = ${sumatoria} 
    \nEl número de enteros en el arreglo es = ${arreglo.length} 
    \nEl promedio es = ${promedio}`)
}

// console.log(arreglo)

// console.log(sumatoria(arreglo));


/*  _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ */
//Crear una funcion que reciba como parametro una oración y defina si es palindromo

// var palindromo =  prompt("Ingresa una oración o palabra")

function esPalindromo(str) 
{
    var alReves = str.split('').reverse().join('')

    if (String(str) == String(alReves)) {   
        return(`La palabra que ingresaste si es un palindromo ya que: ${str} al revés es: ${alReves} y son lo mismo :3`)
    } else {
        return(`La palabra que ingresaste no es palindromo ya que: ${str} al revés es: ${alReves} y son diferentes :o`)
    }
}

// console.log(esPalindromo(palindromo));



/*  _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ */
//Escribe una función que halle el máximo entre tres números

/*
var n1 = prompt("Ingresa un primer número")
var n2 = prompt("Ingresa un segundo número")
var n3 = prompt("Ingresa un tercer número")

function mayorDe(numero1,numero2,numero3) {
    
    if(numero1>numero2 && numero1>numero3){
        return numero1
    }

    if(numero2>numero1 && numero2>numero3){
        return numero2
    }

    if(numero3>numero2 && numero3>numero1){
        return numero3
    }
}

console.log("El número mas grande entre "+n1+" "+n2+" y "+n3+" es = "+mayorDe(n1,n2,n3))
*/


/*  _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ */
/*Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. Si no recibe el iva, aplicará el 21 por ciento por defecto.*/
/*
var precio = prompt("Ingresa el precio")
var iva = prompt("Ingresa el iva (en porcentaje%)")

function totalConIVA(precio,IvA) {
    var descuento = 0
    var total = 0
    if (String(IvA)=="") {
         descuento = precio*0.21
         total = precio-descuento
         return total
    }else{
        descuento = precio*(IvA/100)
        total = precio-descuento
        return total
    }
}
*/

/*  _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ */
//Crea una función que reciba un texto y lo devuelva al revés
/*
var string =  prompt("Ingresa una oración o palabra")

function reverseWord(str) {
    var alReves = str.split('').reverse().join('')

    return "La palabra que ingresaste  es -"+str+"- al revés es : --"+alReves+"--"
    
}

console.log(reverseWord(string));
*/


/*  _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_ */
/*Escribe una función que imprima una
   pirámide de astericos como la siguiente:
                   *
                  * *
                 * * *
                * * * *
               * * * * *  
*/

var numeroPisos = prompt("Ingresa el número de pisos de tu pirámide")
function pyramid(number) {
    for (let i = 0; i < number; i++) {
      let piso = '';
      for (let j = 0; j < i + 1; j++) {
        piso = piso + '*';
      }
      console.log(piso);
    }
  }
pyramid(numeroPisos);



/* 

Ejercicios condicional if:
​
Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?“), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
​
Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert:
​
Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir “Ganaste un premio”, en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
​
Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
​
Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
​
Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
​
Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.
​
Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
El helado sin topping cuesta 50 MXN.
El topping de oreo cuesta 10 MXN.
El topping de KitKat cuesta 15 MXN.
El topping de brownie cuesta 20 MXN.
En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.
​
Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
​
#############################################################################################################################
Ejercicios Metodos de array: 
​
Declara un array que vamos a llamar “clasificaciones” con los siguientes valores:
Ana, Oswaldo, Raúl, Celia, María, Antonio
(vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)		
Imprime la clasificación actual
El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:		
1- Celia adelanta a Raúl		
2- Antonio es descalificado y se elimina del concurso
3- Detrás de Ana y antes de Oswaldo se clasifican dos nuevos concursantes: Roberto y Amaya, en ese orden
4- Hay una nueva participante que pasa a encabezar la clasificación: Marta	
5- Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
​
##########################################################################################################################
​
Ejercicios bucle While:
​
Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
​
Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.
​
Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.
​
Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.
​
Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.
​
############################################################################################################################
​
​
​
Ejercicios ciclo For:
​
Crea un programa que imprima en consola los números impares del 1 al 50.
​
Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son 
múltiplos de 5 desde 1 hasta el número introducido por el usuario.
https://pastebin.com/Zzk8g7Z6
​
Crea un programa que recorra el arreglo [4,“dos”,8,“tres”,5,9,1,“cero”] y muestre en consola solo los elementos que son tipo número.
https://pastebin.com/Zzk8g7Z6
​
##############################################################################################################################
​
Ejercicios con Funciones:
​
Haz un Semáforo.
El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
Se debe respetar el orden de los colores:
De rojo pasa a Verde.
De amarillo puede pasar a Rojo.
De Verde pasa a Amarillo.
Extra Challenge 1: Hacerlo con imágenes:
	
	document.write(“<img src=‘http://imagenes.com/luz_verde.png’ >“)
Extra Challenge 2: Usar setInterval y/o setTimeOut para que cambie automáticamente
function imprimeHola() {
	console.log(“Hola”)
}
function detente(intervalo) {
	clearInterval(intervalo)
	console.log(“Listo!“)
}
var intervalo = setInterval(imprimeHola(),1000)
setTimeout(detener(intervalo),5000)
​
#############################################################################################################################
​
Ejercicios de practicas:
​
Hacer una función que convierta de grados centígrados a
Farenheit
​
Hacer una función que muestre la tabla de multiplicar de un
número:
​
Leer un arreglo de enteros y obtener su promedio:
​
Crear una funcion que reciba como parametro una oración y defina
si es palindromo:
​
Escribe una función que halle el máximo entre tres números:
​
Crea una función que reciba 2 parámetros, precio e iva, y
devuelva el precio con iva incluido. Si no recibe el iva,
aplicará el 21 por ciento por defecto:
​
Crea una función que reciba un texto y lo devuelva al revés:
​
Escribe una función que imprima una pirámide de astericos como
la siguiente:
                   *
                  * *
                 * * *
                * * * *
               * * * * *
---------------------------------------------
​
#############################################################
############################################################
​
Ejercicios de practica:
​
Realiza un script que pida por teclado 3 edades y 3 nombres e
indique el nombre del mayor:
​
Realiza un script que genere un número aleatorio entre 1 y 99:

Realiza un script que pida un texto y lo muestre en mayúsculas:
​
Realiza un juego de Piedra Papel Tijera contra el Pc:
​
Hacer una funcion que calcule el tiempo necesario para que un
automóvil que se mueve con una velocidad de 73000 m/h recorra
una distancia de 120 km.
            (TIEMPO = d/v) (editado) 

*/