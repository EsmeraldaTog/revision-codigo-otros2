let formulario = document.querySelector(".formulario")

formulario.onsubmit = function(e) {

  e.preventDefault() //para cancelar el comportamiento por default que ya tiene en este caso el formulario con el evento onsubmit

  // El nombre de las variables deben de ser descriptivas
  // usar la definicion de la variable con let o const  porque var podria ocasionarnos problemas respecto a los alcances
let nombre = formulario.elements[0].value
let edad = formulario.elements[1].value
let nacionalidad = formulario.elements[2].value


  console.log(nombre)
  console.log(edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    nombre.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    edad.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
 
}

// let botonBorrar = document.createElement("button")// Se repite la creacion del boton borrar
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

let lista = document.getElementById("lista-de-invitados") //se agrego en el html el id a un div 

let elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)


// se esta creando nuevamente los campos de nombre solo que aqui unicamente creamos los elementos para el nombre
// por lo que es mas recomendable realizarlo con una funcion que se pueda reutilizar y no tengamos que crear elementos del DOM, para cada variable
// let spanNombre = document.createElement("span")
// let inputNombre = document.createElement("input")
// let espacio = document.createElement("br")
// spanNombre.textContent = "Nombre: "
// inputNombre.value = nombre 
// elementoLista.appendChild(spanNombre)
// elementoLista.appendChild(inputNombre)
// elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}