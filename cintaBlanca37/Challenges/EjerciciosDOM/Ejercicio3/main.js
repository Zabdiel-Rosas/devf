//DOM Elements
let button = document.getElementById('button');
let body = document.getElementById('body').offsetWidth;


// Variable with the incrementing size
let widthButton = 128.97;
let heightButton = 38;
let textSize = 13.33;


function grow() {

    if (widthButton < 1200) {
        //this section increments the variable values 
        widthButton *= 2;
        heightButton *= 2;
        textSize *= 2;

        //Asigns the new value to the actual properties
        button.style.width = widthButton + "px";
        button.style.height = heightButton + "px";
        button.style.fontSize = textSize + "px";
        
    } else {
        button.innerText = "No puedo crecer más :(";                        
    }
    
}

button.addEventListener('click', grow);