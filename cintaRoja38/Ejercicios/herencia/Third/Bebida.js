class Bebida{
    constructor(envase, colorEnvase, precio, colorBebida, nombre, cantidad){
        this.envase = envase;
        this.colorEnvase = colorEnvase;
        this.precio = precio;
        this.colorBebida = colorBebida;
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

    //Getters
    getEnvase(){
        return this.envase;
    }

    getColorEnvase(){
        return this.colorEnvase;
    }

    getPrecio(){
        return this.precio;
    }

    getColorBebida(){
        return this.colorBebida;
    }

    getNombre(){
        return this.nombre;
    }

    getCantidad(){
        return this.cantidad;
    }

    //Setters
    setEnvase(newValue){
        this.envase = newValue;
    }

    setColorEnvase(newValue){
        this.colorEnvase = newValue;
    }

    setPrecio(newValue){
        this.precio = newValue;
    }

    setColorBebida(newValue){
        this.colorBebida = newValue;
    }

    setNombre(newValue){
        this.Nombre = newValue;
    }

    setCantidad(newValue){
        this.cantidad = newValue;
    }
}

module.exports = Bebida;