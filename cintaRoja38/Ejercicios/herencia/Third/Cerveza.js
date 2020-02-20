const Bebida = require('./Bebida');

class Cerveza extends Bebida{
    constructor(envase, colorEnvase, precio, colorBebida, nombre, cantidad, porcentajeAlcohol, artesanal){
        super(envase, colorEnvase, precio, colorBebida, nombre, cantidad);
        this.porcentajeAlcohol = porcentajeAlcohol;
        this.artesanal = artesanal;
    }

    //Getters
    getPorcentajeAlcohol(){
        return this.porcentajeAlcohol;
    }

    getArtesanal(){
        return this.artesanal;
    }

    //Setters

    setPorcentajeAlcohol(newValue){
        this.porcentajeAlcohol = newValue;
    }

    setArtesanal(newValue){
        this.artesanal = newValue;
    }
}

module.exports = Cerveza;