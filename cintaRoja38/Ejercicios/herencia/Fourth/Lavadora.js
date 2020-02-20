const Electrodomestico = require('./Electrodomestico');

class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }

    //getters
    getCarga(){
        return this.carga;
    }

    //setters
    setCarga(newValue){
        this.carga = newValue;
    }

    //Methods
    precioFinal(){
        let pF = this.consumoEnergetico * this.carga; 
        return pF;
    }
}

module.exports = Lavadora;