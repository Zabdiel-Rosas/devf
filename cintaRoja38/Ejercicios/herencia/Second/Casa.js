const Construccion = require('./Construccion');

class Casa extends Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho, patio, garage, jardin, alberca){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho);
        this.patio = patio;
        this.garage = garage;
        this.jardin = jardin;
        this.alberca = alberca;
    }
}


module.exports = Casa;