var myPenguin = {
    character: 'Cobalski',
    origin: 'Madagascar',
    notes: 'A crafty group of penguins who try to escape the zoo to go back to Antarctica. The penguins got their own TV series and also a movie.'
}

var salute = 'Hola, soy un pingÜino y mi nombre es ';
myPenguin.puedeVolar = true;
myPenguin.graznar = function(){
    return 'Kaw Kaw';
};

myPenguin.saludar = function(){
    return 'Hola, soy un pingÜino y mi nombre es ' + this.character;
};

// myPenguin.character = 'Señor Pingu';

myPenguin.volar = function(){
    let value = this.puedeVolar;
    if(value === true){
        return 'puedeVolar';
    }
    return 'No puedo volar :(';
};


// console.log(salute + myPenguin.character);
console.log(myPenguin.saludar());