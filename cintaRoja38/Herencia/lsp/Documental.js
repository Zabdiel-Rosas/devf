const Largometraje = require('./Largometraje');

class Documental extends Largometraje{
    constructor(horario, precio, nombre, tipo){
        super(horario, precio, nombre);
        this.tipo = tipo;
    }

    //getters
    getTipo(){
        return this.tipo;
    }

    //setters
    setTipo(newValue){
        this.tipo = newValue;
    }
}

module.exports = Documental;