class Cine{
    constructor(nombreCine, Salas){
        this.nombreCine = nombreCine;
        this.Salas = Salas;        
        this.estacionamiento = true;
    }

    // reproducirPeli(pelicula){
    //     return 'Reproduciendo ' + pelicula.nombre;
    // }

    // reproducirDocu(documental){
    //     return 'Reproduciendo ' + documental.nombre;
    // }

    reproducir(largometraje){
        return 'Reproduciendo ' + largometraje.nombre;
    }
}

module.exports = Cine;