class Electrodomestico{
    constructor(precio, color, capacidad){
        this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
        this.consumoEnergetico = 100;
    }

    //getters
    getPrecio(){
        return this.precio;
    }

    getColor(){
        return this.color;
    }

    getCapacidad(){
        return this.capacidad;
    }

    getConsEnergetico(){
        return this.consumoEnergetico;
    }

    //setters
    setPrecio(newValue){
        this.precio = newValue;
    }

    setColor(newValue){
        this.color = newValue;
    }

    setCapacidad(newValue){
        this.capacidad = newValue;
    }

    setConsEnergetico(newValue){
        this.consumoEnergetico = newValue;
    }
}


module.exports = Electrodomestico;