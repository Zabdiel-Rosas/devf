/*
1) iterador o variable de control
2) condición de iteración
3) cómo afectar al iterador tras ciclo (iteración)
*/

// let message = '¡Hola Mundo!';

// for(let i = 1; i < 5; i++) {
//     console.log(i);
//     console.log(message);
// }

// No es posible acceder a una variable que fue declarada 
// dentro de un bloque de código

//Ejercicio 1
//Empleando un ciclo for
//Muestra en consola los numeros pares del 0 al 100

// for(let i = 0; i <= 100; i+=2) {
//     console.log(i);
// }

//Ejercicio 2
//Empleando un ciclo for y un if
// Muestra en consola los numeros impares del 0 al 100

// for(let i = 0; i <= 100; i++) {
//     if(i%2 === 1) {
//         console.log(i);
//     }
// }

/*
    Arreglos
*/

// let numero = 10;  // number
// let texto = 'hola'; // string
// let booleano = false; // boolean

// tipo de dato ARREGLO
// let lista = [1, 2, 3, 4, 5];
// let arreglo = [
//     1,                //0
//     "texto",          //1
//     true,             //2
//     "otro texto",     //3
//     5,                //4
//     [1,2,3]           //5
// ];

// console.log(arreglo);
// console.log(arreglo[5]);
// console.log(arreglo[5][1]);

let animales = [
    "Gato",
    "Perro",
    "Perico",
    "Perro Salchicha",
    "Huron",
    "Hamster",
    "Gato Egipcio",
    "Dragon"
];

for(let i = 0; i < animales.length; i++) {
    console.log(animales[i]);    
}