// Plus de robustez a la hora de desarrollar código
"use strict";

window.onload = function() {

    let frase = "Esto es una prueba de la practica";

    // Mostramos la frase original
    console.log("Frase original:", frase);

    // Llamamos a las funciones de functions.js y 
    // mostramos los resultados por consola
    
    console.log("Número de letras:", letras(frase));
    console.log("Número de palabras:", palabras(frase));
    console.log("Frase en mayúsculas:", maysc(frase));
    console.log("Frase con la primera letra de cada palabra en mayúsculas:", titulo(frase));
    console.log("Frase con las letras al revés:", letrasReves(frase));
    console.log("Frase con las palabras al revés:", palabrasReves(frase));
    
    // Operador Ternario
    console.log("¿Es un palíndromo?", palindromo(frase) ? "Sí" : "No");
};