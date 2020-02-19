//DOM Elements
let text = document.getElementById('text');
let button = document.getElementById('button');

// Week days
let weekDays = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];

function changeDay() {
    let randomNumber = Math.floor(Math.random()*7);
    console.log(randomNumber);
    text.innerHTML = '¡Hola Mundo! el día de hoy es: ' + weekDays[randomNumber];
}

button.addEventListener('click', changeDay);