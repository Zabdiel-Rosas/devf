//SUPER-CLASE
class Animal{
    constructor(patas, color, ojos, nombre){
        this.patas = patas;
        this.color = color;
        this.cola = true;
        this.ojos = ojos;
        this.nombre = nombre;
    }

    getNombre(){
        return this.nombre;
    }
}

module.exports = Animal;