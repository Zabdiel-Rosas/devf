class Maestro{
    constructor(nombre, materia, escuela){
        this.nombre = nombre;
        this.materia = materia;
        this.escuela = escuela;
    }

    // promedio(calif){
    //     let sum = 0;
    //     for(let i = 0; i < calif.length; i++){
    //         sum += calif[i];            
    //     }
    //     return sum / calif.length
    // }

    prom(lista){
        let box = 0;
        
        let promedio = 0;
        for(let i = 0; i < lista.length; i++){
            box += lista[i];
        }

         promedio = box / lista.length;
        return promedio;
    }
}

class MaestroDeFisica extends Maestro{
    constructor(nombre, materia, escuela, antiguedad){
        super(nombre, materia, escuela);
        this.antiguedad = antiguedad;
    }
}

class MaestroDeMusica extends Maestro{
    constructor(nombre, materia, escuela, edad){
        super(nombre, materia, escuela);
        this.edad = edad;
    }
}

const calificaciones = [10, 6, 6, 9, 9, 9, 8, 9];

const alberto = new MaestroDeFisica('Alberto', 'Fisica', 'UNAM', 10);
const carlos = new MaestroDeMusica('Carlos', 'Musica', 'NYU', 30);

console.log(carlos.prom(calificaciones));