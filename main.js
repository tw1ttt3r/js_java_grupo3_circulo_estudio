// DOM
// Document Object Model

// etiqueta - nodo

// etiqueta - atributos - valores
// nodo - propiedades - valores
// nodo - metodos

/**
 * {
 *  jugar: () => {}
 * }
 */

// seleccion de nodos
// reciben un parametro de entrada string
// getElementById - un nodo
// getElementsByClassName - lista de nodos - HTMLCollection
// getElementByTagName - lista de nodos - HTMLCollection

// selectores de CSS
// id - #
// clase - .
// tag - nombre de la tag
// reciben un parametro de entrada string pero con la sintaxis de un selector de css
// querySelector - un nodo y principalmente el primero que encuentre
// querySelectorAll - lista de nodos - NodeList

// querySelector(".hijos") - 1 nodo
// querySelectorAll(".hijos") - 5 nodos

// document

// nodos

// innerHTML: es una propiedad la cual contiene en tipo string
// el contenido de la etiqueta

// document.querySelector("#contenedor")
/*innerHTML = `<div class="hijos"></div>
<div class="hijos"></div>
<div class="hijos"></div>
<div class="hijos"></div>
<div class="hijos"></div>`*/

// document.querySelector("#contenedor").innerHTML= `<p>hola mundo</p>`;


// classlist: un arreglo con el nombre de cada clase del nodo
// style: es un objeto con cada regla de css valida
// border-width - borderWidth
// flex-direction - flexDirection

// Eventos
// acciones que le suceden a los nodos
// addEventListener(nombre del evento, accion a realizar (funciones anonimas) )
// event object
// es un objeto con varias propiedades que describen el evento en si
// target: es nodo al cual se le aplico el evento 

document.querySelector(".divs").addEventListener("click", (event) => {
  console.log(event)
})

document.querySelector("body").addEventListener("keydown", (event) => {
  console.log(event)
  // document.querySelector("#tecla").innerHTML = event.key;
  // const nuevoParrafo = document.createElement("p");
  // nuevoParrafo.innerHTML = event.key;
  // document.querySelector("#tecla").appendChild(nuevoParrafo)
  // document.querySelector("#tecla").innerHTML = `<p>${event.key}</p>`;
  // document.querySelector("#tecla").innerHTML = "<p>"+event.key+"</p>";
})

// Operador ternario
// sintaxis: expresion boolean ? hare esto : haré esto 

const edad = 16;

const puedoVotar = edad > 18 ? "si puedes votar" : "aun no puedes votar"

function puedeVotar() {
  alert("Pase a la casilla A")
}

function noPuedeVotar() {
  alert("Lo sentimos")
}

// edad > 18 ? puedeVotar() : noPuedeVotar();

if (edad > 18) {
  puedeVotar();
} else {
  noPuedeVotar();
}

// Somos una aplicacion que permite procesar a cada votante
// si tienes 18 años o más puedes votar
// si tienes menos de 35 años te toca la casilla A
// si tienes mas de 35 años y menos de 50 te toca la casilla B
// si tienes mas de 50 años te toca la casilla C


const casilla = edad > 18
  ? edad <= 35
    ? "A"
    : edad > 35 && edad <= 50
      ? "B"
      : "C"
  : "Lo sentimos"


// let casilla = null
// if (edad > 18) { 
//   if (edad <= 35) {
//     casilla = "A"
//   } else if (edad > 35 && edad <= 50) {
//     casilla = "B"
//   } else {
//     casilla = "C"
//   }
// } else {
//   casilla = "Lo sentimos"
// }


// funciones anonimas
// hoisting 
// se generan dependiendo donde esten alojadas
// variables o en propiedades


const multiplica = function(num1, num2){
  return num1 * num2
}

multiplica()

const persona = {
  nombre: "pedro",
  calculo: function(num1, num2){
    return num1 * num2
  }
}

persona.calculo()

function Persona(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
}

// Persona.prototype.jugar = function() {
//   alert("estoy jugando")
// }
Persona.prototype.jugar = () => alert("estoy jugando")

// arrow function
// sintaxis: () => {}
// no tiene contexto de this
// tiene un return implicito, funcionan para one line

// oneline
const persona2 = {
  nombre: "pedro",
  calculo: (num1, num2) => num1 * num2 // resultado de la operacion
}

// serie fibonacci

// const fib = (n) => {
//   console.log("invocada", n) // 5 // 4 // 3 // 2 // 1
//   if (n <= 1) return n; 

//   return fib(n-1) /*4 */ /*3 */ /*2 */ /*1 */ + fib(n-2) /*3 */ /* 2 */ /*1 */ /*0 */ ; 
// }

const fib = (n) => n <= 1 ? n : fib(n-1) + fib(n-2) 

// reduce
// regresa cualquier tipo de dato valido en javascript
const nuevoDato = [2,3,4,45,5].reduce((previo, actual, posicion, arreglo) => {
  if (posicion !==  arreglo.length - 1) { // 4 !== 4
    return previo + actual;
  } else {
    return (previo + actual) / arreglo.length // (54 + 5) 59 / 5 = 11.8
  }
}, 0); // 11.8

// iteracion 0
// previo: 0
// actual: 2
// regresa: 2

// iteracion 1
// previo: 2
// actual: 3
// regresa: 5

// iteracion 2
// previo: 5
// actual: 4
// regresa: 9

// iteracion 3
// previo: 9
// actual: 45
// regresa: 54

// iteracion 4
// previo: 54
// actual: 5
// regresa: 54

