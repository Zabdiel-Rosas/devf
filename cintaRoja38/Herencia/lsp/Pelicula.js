const Largometraje = require('./Largometraje');

class Pelicula extends Largometraje{
    constructor(horario, precio, nombre, director, genero){
        super(horario, precio, nombre);
        this.director = director;
        this.genero = genero;
    }

    //getters
    getDirector(){
        return this.director;
    }

    getGenero(){
        return this.genero;
    }

    //setters
    setDirector(newValue){
        this.director = newValue;
    }

    setGenero(newValue){
        this.genero = newValue;
    }
}

module.exports = Pelicula;