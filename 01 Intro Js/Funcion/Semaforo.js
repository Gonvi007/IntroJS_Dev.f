/*

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

*/


function semaforo() {
    var estadoColorVerde = "Verde";
    var estadoColorAmarillo = "Amarillo";
    var estadoColorRojo = "Rojo" ;

    function verde (){ 
        alert("Color verde")
        setTimeout(amarillo, 1000)
    }

    function amarillo (){ 
        alert("Color amarillo")
        setTimeout(rojo, 1000)
    }

    function rojo (){ 
        alert("Color rojo")
        setTimeout(amarillo, 1000)
    }

}