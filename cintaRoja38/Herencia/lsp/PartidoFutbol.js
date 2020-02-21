const Largometraje = require('./Largometraje');

class PartidoFutbol extends Largometraje{
    constructor(horario, precio, nombre, division){
        super(horario, precio, nombre);
        this.division = division;
    }
}

module.exports = PartidoFutbol;