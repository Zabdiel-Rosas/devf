const Animal = require('./Animal.js');

//CLASE-HIJA
class Gato extends Animal{
    constructor(Karen, noVidas, color, nombre){
        super(4, color, 2, nombre);
        this.bigotes = true;
        this.Karen = Karen;
        this.noVidas = noVidas;        
    }

    maullar(){
        return 'MIAU MIAU';
    }
}

module.exports = Gato;