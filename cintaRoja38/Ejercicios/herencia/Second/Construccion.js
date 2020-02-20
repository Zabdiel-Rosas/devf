class Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho){
        this.numPuertas = numPuertas;
        this.numVentanas = numVentanas;
        this.numPisos = numPisos;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }

    //Methods
    getMetrosCuadrados(){
        let mCuadrados = this.largo * this.ancho;
        return mCuadrados;
    }

    getDireccion(){
        return this.direccion;
    }

    setDireccion(newValue){
        this.direccion = newValue;
    }
}

module.exports = Construccion;