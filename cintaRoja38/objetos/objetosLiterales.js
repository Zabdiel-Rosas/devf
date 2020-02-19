var ayudanteDeSanta = {
    nombre: 'ayudanteDeSanta',
    patas: 4,
    color: 'Cafe',
    ojos: 2,
    tamano: 'Grande',
    estaVivo: true,
    ladrar: function(){
        return 'WAU WAU';
    },
    comer: function(comida){
        if (comida === 'CARNE') {
            return 'YOMI YOMI';
        }
        return 'ÑO';
        
    }
}

var snoopy = {
    nombre: 'snoopy',
    patas: 4,
    color: 'Black and White',
    ojos: 2,
    tamano: 'little',
    estaVivo: true
}

console.log(ayudanteDeSanta.comer('CROQUETAS'));
// console.log(snoopy.ladrar);