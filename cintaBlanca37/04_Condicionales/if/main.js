let j1 = prompt('J1. Introduce tu opción: piedra, papel o tijera');
let j2 = prompt('J2. Introduce tu opción: piedra, papel o tijera');


if(j1 === 'piedra' || j1 === 'papel'|| j1 === 'tijera') {

    if(j2 === 'piedra' || j2 === 'papel'|| j2 === 'tijera') {

        if(j1 === j2) {
            console.log('Empate');
        } else if(j1 === 'piedra') {
            
            if(j2 === 'papel') {
                console.log('Gana jugador 2!');
            } else if(j2 === 'tijera') {
                console.log('Gana jugador 1!');
            }
        
        } else if(j1 === 'papel') {
            
            if(j2 === 'tijera') {
                console.log('Gana jugador 2!');
            } else if(j2 === 'piedra') {
                console.log('Gana jugador 1!');
            }
        
        } else if(j1 === 'tijera') {
        
            if(j2 === 'piedra') {
                console.log('Gana jugador 2!');
            } else if(j2 === 'papel') {
                console.log('Gana jugador 1!');
            }
        
        } else {
            console.error('Ocurrió un error!');
        }
    } else {
        console.log('Debes de escribir piedra, papel o tijera!');
    }
} else {
    console.log('Debes de escribir piedra, papel o tijera!');
}

