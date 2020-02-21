const Animal = require('./Animal.js');

//CLASE-HIJA
class Perro extends Animal{
    constructor(raza, dueno, color, nombre){
        super(4, color, 2, nombre); //si hay herencia hay que llamar al super constructor
        this.raza = raza;
        this.dueño = dueno;
        this.sonido = true;
    }

    ladrar(){
        return 'WAU WAU';
    }
}

module.exports = Perro;