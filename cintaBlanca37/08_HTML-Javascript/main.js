
let titulo = document.getElementById('titulo');
let parrafo = document.getElementById('parrafo');
let boton = document.getElementById('boton');
let entradaInput = document.getElementById('entradaInput');
let entrada = document.getElementById('entrada');


// console.log(titulo);
// console.log(parrafo);
// console.log(boton);
// console.log(entrada);


function cambiar() {

    titulo.innerHTML = "Cambié el titulo";
    parrafo.innerHTML = "Soy el nuevo parrafo";

    let valorInput = entrada.value;
    entradaInput.innerHTML = valorInput;

}

boton.addEventListener('click', cambiar);