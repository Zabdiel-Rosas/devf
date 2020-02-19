// alert('descarga ya!!!');

// if(condicion) {
//     accion si se cumple
// } else {
//     accion sino se cumple
// }


// let x = 10;

// if(x == 10) {
//     console.log('el numero ingresado es 10');
// } else {
//     console.log('el numero ingresado no es 10');
// }


// let x = prompt('ingresa un numero del 1 al 100');

// let valorNum = Number(x);

// if(valorNum % 2 === 0) {
//     console.log('el número ingresado es par');
// } else {
//     console.log('el número ingresado no es par');
// }

// let valueOne = Number(prompt('Ingresa el primer número del 1 al 100'));
// let valueTwo = Number(prompt('Ingresa el segundo número del 1 al 100'));

// if(valueOne > valueTwo) {
//     console.log(valueOne + ' ' + 'es mayor que ' + valueTwo);
// } else {
//     console.log(valueTwo + ' ' + 'es mayor que ' + valueOne);
// }

// Operadores Lógicos
// && AND || OR

// let edad = Number(prompt('Ingresa tu edad'));

// if(edad >= 18 && edad <= 70) {
//     console.log('Puedes Conducir');
// } else if(edad >= 16 && edad < 18) {
//     console.log('Puedes sacar tu permiso');
// } else if(edad < 16 || edad > 70) {
//     console.log('No puedes conducir');
// } else {
//     console.log('Ocurrió un error');
// }

//Juego de Piedra, papel o tijerass

// let p1 = prompt('Jugador 1 Ingresa piedra, papel o tijeras:').toLowerCase();
// let p2 = prompt('Jugador 2 Ingresa piedra, papel o tijeras:').toLowerCase();

// if(p1 === p2) {
//     console.log('es un empate!');
// } else if(p1 === 'piedra' && p2 === 'papel') {
//     console.log('Papel vence piedra, gana el jugador 2!');

// } else if(p1 === 'piedra' && p2 === 'tijeras') {
//     console.log('Piedra vence tijeras, gana el jugador 1!');

// } else if(p1 === 'papel' && p2 === 'piedra') {
//     console.log('Papel vence piedra, gana el jugador 1!');

// } else if(p1 === 'papel' && p2 === 'tijeras') {
//     console.log('tijeras vence papel, gana el jugador 2!');

// } else if(p1 === 'tijeras' && p2 === 'papel') {
//     console.log('tijeras vence papel, gana el jugador 1!');

// } else if(p1 === 'tijeras' && p2 === 'piedra') {
//     console.log('Piedra vence tijeras, gana jugador 2!')
// } else {
//     console.error('Ocurrió un error');
// }

let piedra = 'piedra';
let papel = 'papel';
let tijeras = 'tijeras';

let p1 = prompt('Jugador 1, ingresa piedra, papel o tijeras').toLowerCase();
let p2 = prompt('Jugador 2, ingresa piedra, papel o tijeras').toLowerCase();

if(p1 === piedra) {
    if(p2 === papel) {
        console.log('Gana jugador 2!');
    } else if(p2 === tijeras) {
        console.log('Gana jugador 1!');
    }
}

