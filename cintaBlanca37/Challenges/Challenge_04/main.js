//Challenge Four

let platillos = [
    "Enchiladas",
    "Taco",
    "Tamal",
    "Pozole",
    "Barbacoa",
    "Picada"
];

const linea = "----------------------------";

//Muestra todos los platillos

// for(let i = 0; i < platillos.length; i++) {
//     let platillo = platillos[i];
//     console.log(platillo);
// }

// //Muestra solo Pozole y Barbacoa
// for(let i = 0; i < platillos.length; i++) {

//     let platillo = platillos[i];

//     if(platillo === "Pozole" || platillo === "Barbacoa") {    
//         console.log(platillo);
//     }
// }

// //Muestra impares
for(let i = 0; i < platillos.length; i++) {

    let platillo = platillos[i];

    if(i%2 === 1) {
        console.log(platillo);
    }
}

console.log(linea);

//Muestra pares
for(let i = 0; i < platillos.length; i+=2) {

    let platillo = platillos[i];

    console.log(platillo);
}