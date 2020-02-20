const Bebida = require('./Bebida');

class Refresco extends Bebida{
    constructor(envase, colorEnvase, precio, colorBebida, nombre, cantidad, azucar){
        super(envase, colorEnvase, precio, colorBebida, nombre, cantidad);
        this.azucar = azucar;
    }

    //Getters
    getAzucar(){
        return this.azucar;
    }

    //Setters

    setAzucar(newValue){
        this.azucar = newValue;
    }
}

module.exports = Refresco;