const request = require('request');


//POST 
function createAuthor(name, last_name, nacionalidad,gender, age, biography){
    const jsonQueSeEnvia = {
        name: name,
        last_name: last_name,
        nacionalidad: nacionalidad,
        gender: gender,
        age: age,
        biography: biography,
        is_alive: false
    }
    //OBJ, CALLBACK 
    const URL = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';
    request.post({url:URL, form: jsonQueSeEnvia}, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json);
    });
}

// createAuthor('js name', 'js last_name', 'MX', 'M', 19, 'js biography');

//Patch

const modifyAuthor = (idAuthor, jsonToSend) => {
    const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${idAuthor}/`;
    request.patch({url: URL, form: jsonToSend}, (err, response, body)=> {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json);
    });

}

const myJson = {
    "age": 27
};

// modifyAuthor(3968, myJson);

const getAuthorById = (idAuthor) => {
    const URL = `https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/${idAuthor}/`;
    request.get(URL, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json);
    });
};

// getAuthorById(3968);

const getNameAndFirstFilm = (idPeople) => {
    const URL = `https://swapi.co/api/people/${idPeople}/`;

    request.get(URL, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json.name);
        // console.log(json.films);
        const filmUrl = json.films[0];
        
        request.get(filmUrl, (err, response, body) => {
            console.log(response.statusCode);
            const jsonF = JSON.parse(body);
            console.log(jsonF.title);
        });
    });
};

getNameAndFirstFilm(14);
