import { ProductoElectronico } from './ProductoElectronico.mjs';


export class Portatil extends ProductoElectronico {
    constructor(marca, modelo, precio, anyoLanzamiento, ram) {
        super(marca,modelo,precio,anyoLanzamiento);
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