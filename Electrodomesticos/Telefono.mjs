// import { ProductoElectronico } from './ProductoElectronico.mjs';
const ProductoElectronico = require('./ProductoElectronico.js');
//module.exports = { ProductoElectronico };


export class Telefono extends ProductoElectronico {
    constructor(marca,modelo,precio,anyoLanzamiento,tamanoPantalla) {
        super(marca,modelo,precio,anyoLanzamiento);
        this._tamanoPantalla = this.validarTamanoPantalla(tamanoPantalla);
    }

    detalles() {
        return `${super.detalles()}, 
        Tamaño de la pantalla: ${this.tamañopantalla} pulgadas,
        Precio con descuento: ${this.precio - this.calcularDescuento()}$`;
    }

    calcularDescuento() {
        return this.precio * 0.1
    }

    tipo() {
        return 'Teléfono';
    }

    validarTamanoPantalla(tamanoPantalla) {
        return tamanoPantalla >= 0 ? tamanoPantalla : 27;
    }

    get tamanoPantalla() {
        return this._tamanoPantalla;
    }

    set tamanoPantalla(nuevoTamanoPantalla) {
        this._tamanoPantalla = this.validarTamanoPantalla(nuevoTamanoPantalla);
    }

}