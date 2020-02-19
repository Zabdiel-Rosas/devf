let flag = false;

//DOM Elements

let image = document.getElementById('image');
let title = document.getElementById('title');
let button = document.getElementById('button');

//Human Data
let humImg = "./assets/human.jpg";
let humTitle =  "I'm a Human";
let humButton = "Convert to dog";


// Dog Data
let dogImage = "./assets/dog.jpg";
let dogTitle = "Now I'm a dog!";
let dogButton = "Convert to human";

function replace() {

    if (flag === false) {

        image.src = dogImage;
        title.innerHTML = dogTitle;
        button.innerHTML = dogButton;
        flag = true;

    } else if (flag === true) {
        image.src = humImg;
        title.innerHTML = humTitle;
        button.innerHTML = humButton;                   
        
        flag = false;
    }
}

button.addEventListener('click', replace);