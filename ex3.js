/**
 * Jugando con string
 */

let nombre = "Mad";
let apellido = "Max";
let minombre = "Javier";
let miapellido = "Aldana";

/**
 * 
 * Mi solucion:
 * let presentacion = "Me llamo Mad Max";
let presentacion2 ="Me llamo Javier Aldana"

Abajo la solucion real:*/

let presentacion ="Me llamo " + nombre + " " + apellido;
let presentacion2 ="Me llamo " + minombre + " " + miapellido;

/**
 * Pregunta 1: ¿Qué valor tengo que asignar a 'presenetacion' para que me muestre pantalla:
 *   * "Me llamo Mad Max?"
 *
 * 
 * 
 */

console.log("Pregunta 1:", presentacion);

/**
 * Pregunta 2: Cambia el valor de las variables adecuadamente para que, en vez de "Me llamo Mad Max", escribe "Me llamo {tu nombre} {tu apellido}"
 */

console.log("Pregunta 2:", presentacion2);
