const Cine = require('./Cine');
const Documental = require('./Documental');
const Pelicula = require('./Pelicula');
const PartidoFutbol = require('./PartidoFutbol');

const nuestroPlaneta = new Documental('8:30AM', 50 , 'Nuestro Planeta', 'GEOGRAFIA');

const parasitos = new Pelicula('7.00PM', 60, 'Parasitos', 'Bjow', 'Suspenso');

const cinePedregal = new Cine('Cine Pedregal', 10);

const atlasVsChivas = new PartidoFutbol('01:10PM', 75, 'Atlas vs Chivas', 'Primera Division');

console.log(cinePedregal.reproducir(parasitos));

console.log(cinePedregal.reproducir(nuestroPlaneta));

console.log(cinePedregal.reproducir(atlasVsChivas));