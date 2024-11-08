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
        //Revalidamos el nuevo valor
        this._precio = this.validarPrecio(nuevoPrecio);
    }

    get anyoLanzamiento() {
        return this._anyoLanzamiento;
    }

    set anyoLanzamiento(nuevoAnyo) {
        //Revalidamos el nuevo valor
        this._anyoLanzamiento = this.validarAnyo(nuevoAnyo);
    }

    

}