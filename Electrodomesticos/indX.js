export class ProductoElectronico {
    constructor(marca, modelo, precio, anyoLanzamiento) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = this.validarPrecio(precio);
        this.anyoLanzamiento = this.validarAnyo(anyoLanzamiento);
    }

    detalles() {
        return `Marca: ${this.marca}, 
        Modelo: ${this.modelo}, 
        Precio: $${this.precio}, 
        Año de lanzamiento: ${this.anyoLanzamiento}`;
    }

    calcularDescuento() {
        return this.precio * 0.05; 
    }

    tipo() {
        return 'Producto Electrónico';
    }

    validarPrecio(precio) {
        return precio >= 0 ? precio : 0;
    }

    validarAnyo(anyo) {
        return (anyo >= 1900 && anyo <= 2025) ? anyo : 2024; 
    }

    get marca() {
        return this._marca;
    }

    set marca(nuevaMarca) {
        this._marca = nuevaMarca;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(nuevoModelo) {
        this._modelo = nuevoModelo;
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        this._precio = this.validarPrecio(nuevoPrecio);
    }

    get anyoLanzamiento() {
        return this._anyoLanzamiento;
    }

    set anyoLanzamiento(nuevoAnyo) {
        this._anyoLanzamiento = this.validarAnyo(nuevoAnyo);
    }
}

// import { ProductoElectronico } from './ProductoElectronico.mjs';
const ProductoElectronico = require('./ProductoElectronico.js');
//module.exports = { ProductoElectronico };

export class Portatil extends ProductoElectronico {
    constructor(marca, modelo, precio, anyoLanzamiento, ram) {
        super(marca, modelo, precio, anyoLanzamiento);
        this._ram = this.validarRam(ram);
    }

    detalles() {
        return `${super.detalles()}, 
        Tamaño de la memoria RAM: ${this.ram} GB,
        Precio con descuento: ${this.precio - this.calcularDescuento()}$`;
    }

    calcularDescuento() {
        return this.precio * 0.12;
    }

    tipo() {
        return 'Portátil';
    }

    validarRam(ram) {
        return ram > 0 ? ram : 8;
    }

    get ram() {
        return this._ram;
    }

    set ram(nuevaRam) {
        this._ram = this.validarRam(nuevaRam);
    }
}

export class Tablet extends ProductoElectronico {
    constructor(marca, modelo, precio, anyoLanzamiento, almacenamiento) {
        super(marca, modelo, precio, anyoLanzamiento);
        this._almacenamiento = this.validarAlmacenamiento(almacenamiento);
    }

    detalles() {
        return `${super.detalles()}, 
        Cantidad de almacenamiento: ${this.almacenamiento} GB,
        Precio con descuento: ${this.precio - this.calcularDescuento()}$`;
    }

    calcularDescuento() {
        return this.precio * 0.08;
    }

    tipo() {
        return 'Tablet';
    }

    validarAlmacenamiento(almacenamiento) {
        return almacenamiento >= 0 ? almacenamiento : 64;
    }

    get almacenamiento() {
        return this._almacenamiento;
    }

    set almacenamiento(nuevoAlmacenamiento) {
        this._almacenamiento = this.validarAlmacenamiento(nuevoAlmacenamiento);
    }
}
