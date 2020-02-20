const Construccion = require('./Construccion');

class Edificio extends Construccion{
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho, diseño){
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho,);
        this.elevador = true;
        this.salidaEmergencia = true;
        this.recepcion = true;
        this. diseño = diseño;
    }
}




module.exports = Edificio;