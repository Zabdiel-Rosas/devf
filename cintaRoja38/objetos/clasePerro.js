class Perro{
    constructor(nombre, patas, color, ojos, tamano, estaVivo){
        this.nombre = nombre;
        this.patas = patas;
        this.color = color;
        this.ojos = ojos;
        this.tamano = tamano;
        this.estaVivo = estaVivo;
    }
    //METODOS   

    ladrar(){
        return 'WAU WAU';
    }

    comer(comida){
        if(comida === 'CARNE'){
            return 'YOMI YOMI';
        }
        return 'ÑO';
    }
}

var ayudanteDeSanta = new Perro('ayudanteDeSanta', 4, 'Cafe', 2, 'Grande', true);
var snoopy = new Perro('snoopy', 4, 'Blanco y Negro', 2, 'pequeño', true);

console.log(ayudanteDeSanta);
console.log(snoopy.comer('CARNE'));