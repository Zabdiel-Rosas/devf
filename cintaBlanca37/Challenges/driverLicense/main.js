// inputs area

let inputNom = document.getElementById('inputNom');
let inputAge = document.getElementById('inputAge');

//button

let boton = document.getElementById('boton');

// card elements

let cardNom = document.getElementById('cardNom');
let cardAge = document.getElementById('cardAge');

function evaluateDriver() {
    let nomVal = inputNom.value;
    let ageVal = inputAge.value;

    cardNom.innerHTML = nomVal;
    if(ageVal >= 16 && ageVal <= 17){
        cardAge.innerHTML = "You can drive";
    }else if(ageVal >= 18 && ageVal <= 70){
        cardAge.innerHTML = "You can drive";
    }else {
        cardAge.innerHTML = "You can not drive!";
    }
}

boton.addEventListener('click', evaluateDriver);