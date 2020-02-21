class Largometraje{
    constructor(horario, precio, nombre){
        this.horario = horario;
        this.precio = precio;
        this.nombre = nombre;
    }

    //getters
    getHorario(){
        return this.horario;
    }

    getPrecio(){
        return this.precio;
    }

    getNombre(){
        return this.nombre;
    }

    //setters
    setHorario(newValue){
        this.horario = newValue;
    }

    setPrecio(newValue){
        this.precio = newValue;
    }

    setNombre(newValue){
        this.nombre = newValue;
    }
}

module.exports = Largometraje;