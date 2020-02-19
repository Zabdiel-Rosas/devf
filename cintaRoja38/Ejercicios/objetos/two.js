//Ejercicio 9

// var receta = {
//     titulo: 'Mole',
//     porciones: 2,
//     ingredientes: [
//         'canela',
//         'comino',
//         'cocoa'
//     ]
// }

// console.log(receta.titulo);
// console.log('Porciones: ' + receta.porciones);
// console.log('Ingredientes:');
// console.log(receta.ingredientes[0]);
// console.log(receta.ingredientes[1]);
// console.log(receta.ingredientes[2]); 

//Ejercicio 10

let objectArray = [
    {
        tittle: 'THE SUBTLE ART OF NOT GIVING A FUCK',
        autor: 'Mark Manson',
        read: true
    },
    {
        tittle: 'El Club de los Supervivientes',
        autor: 'Ben Sherwood',
        read: true
    },
    {
        tittle: 'The Lean Startup',
        autor: 'Eric Ries',
        read: false
    }
]

for(let i = 0; i < objectArray.length; i++) {
    console.log(objectArray[i]);
}