const Edificio = require('./Edificio');
const Casa = require('./Casa');

const miCasa = new Casa(7, 6, 1, 'Col.Gaviotas Sur, calle Astrologos no 313', 3, 11, 6, true, true, true, false);

const edificio = new Edificio(12, 5, 2, 'Col. Roma Norte, calle Cuahutemoc 168', 6, 9, 15, 'Moderno');


console.log(miCasa.getDireccion());
miCasa.setDireccion('Col. Jose Maria Pino Suarez, calle Golondrina no 10');

console.log(miCasa.getDireccion());
// console.log(edificio.getDireccion());
