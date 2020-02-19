// inputs area

let inputNom = document.getElementById('inputNom');
let inputTel = document.getElementById('inputTel');
let inputPiña = document.getElementById('inputPiña');
let inputDir = document.getElementById('inputDir');

//boton

let boton = document.getElementById('boton');

//p elements from my card

let cardNom = document.getElementById('cardNom');
let cardTel = document.getElementById('cardTel');
let cardPiña = document.getElementById('cardPiña');
let cardDir = document.getElementById('cardDir');


//Inserts the input values to the p elements from the card
function Inserta(){
    let inputNomVal = inputNom.value;
    let inputTelVal = inputTel.value;
    let inputPiñaVal = inputPiña.value;
    let inputDirVal = inputDir.value;

    cardNom.innerHTML = inputNomVal;
    cardTel.innerHTML = inputTelVal;
    cardPiña.innerHTML = inputPiñaVal;
    cardDir.innerHTML = inputDirVal;
}

boton.addEventListener('click', Inserta);