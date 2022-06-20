window.addEventListener("DOMContentLoaded", () => {
  // alert("Se cargo correctamente y no hay pex 😉")
    
  // Obtener un elemento de html desde Js mediante su atributo id
      const idElement = document.getElementById("prueba")
      const TagElement = document.getElementsByTagName("h2")
      const classElement = document.getElementsByClassName("clase")
  
      const querySelectorElement = document.querySelector("#prueba")
      const querySelectorAllElement = document.querySelectorAll(".clase")
      // Lectura de nodos
      idElement.outerHTML 
  
      // Escritura de nodos
      idElement.innerHTML = "Hola mundo desde Javascript"
  
      // Convertir de NodeList a Array
      const nodeListToArray = [...querySelectorAllElement]
//Es es el nuevo nombre ☝

      console.log(nodeListToArray)
  
  
  
  })
  
  
  // function () {
  
  // }
  
  // () => {
  
  // } 
  
  function saludar () {
    alert("Hola mundo");
  }