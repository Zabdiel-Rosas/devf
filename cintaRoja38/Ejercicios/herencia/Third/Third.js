const Refresco = require('./Refresco');
const Cerveza = require('./Cerveza');

//Objects

const mountDew = new Refresco('plastico', 'Verde', 18, 'Incolora', 'Mountain Dew', 615, 77);

const corona = new Cerveza('vidrio', 'Transparente', 25, 'Clara', 'Corona', 355, 4.5, false);


corona.setArtesanal(true);
mountDew.setColorBebida('Azul');
console.log(corona);
console.log(mountDew);