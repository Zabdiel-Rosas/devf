const request = require('request');

function getPokemonByName(pokemonName){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`;

    request.get(url, (err, response, body)=> {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json.name);
        
        let array = json.types;
        
        for(let i = 0; i < array.length; i++){
            console.log(array[i].type.name);
        }
    });
}   

// getPokemonByName('pikachu');


//Ejercicio 2 para la casa
function getFirstGeneration(){
    const url = `https://pokeapi.co/api/v2/pokemon/`;
    let pokemons = [];

    for(let i = 0; i <= 150; i++){
        
    }

    request.get(url, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json);
    });
}

//Ejercicio 3

function getBookByQuery(query){
    query = query.split(' ').join('+');
    const url = `http://openlibrary.org/search.json?q=${query}`;

    request.get(url, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log('Title: ' + json.docs[0].title);                
        let array = json.docs[0].author_name;        

        for(let i = 0; i < array.length; i++){
            console.log('Author/s: ' + array[i]);
        }
    });

}

// getBookByQuery('Racing cars');

//Ejercicio 4

function getBooksByAuthor(author){
    author = author.replace(' ', '+');
    const url = `http://openlibrary.org/search.json?author=${author}`;

    request.get(url, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        
        const json = JSON.parse(body);        
        let array = json.docs;

        for(let i = 0; i < array.length; i++){
            let indice = i + 1;
            console.log(indice + ' ' + array[i].title);
        }
    });
}

// getBooksByAuthor('John Green');

//Ejercicio 5

function getGenreByBandName(bandName){
    bandName = bandName.replace(' ', '+');
    const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${bandName}`;

    request.get(url, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log('Band: ' + json.artists[0].strArtist)
        console.log('Genre: ' + json.artists[0].strGenre);
    });
}

// getGenreByBandName('The Strokes');