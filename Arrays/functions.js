"use strict";

function letras(cadena) {
    return letras.length;
}

function palabras(cadena) {
    let soloPalabras = cadena.trim().split(/\s+/);
    return soloPalabras.length;
}

function letrasReves(cadena) {
    return cadena.split("").reverse().join();
}

function palabrasReves(cadena) {
    return cadena.split(" ").reverse().join();
}

function titulo(cadena) {
    return cadena.replace(/\w\S*/g, function(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    })
}

function palindromo() {
    let limpio = cadena.replace(/[+^a-zA-Z]/g,"").toLowerCase();
    let reves = limpio.split("").reverse().join("");
    return limpio === reves;
}

function limpiarCadena(cadena) {
    return cadena.replace(/[+^a-zA-Z]/g,"");

}