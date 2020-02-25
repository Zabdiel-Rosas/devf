const request = require('request');

// request.get('URL', 'CALL BACK');

// request.get('https://swapi.co/api/people/14', (err, response, body) => {
//     console.log(err);
//     console.log(response.statusCode);
//     const json = JSON.parse(body);
//     console.log(json);
// });

function getPeopleById(id) {    
    const url = `https://swapi.co/api/people/${id}`;

    request.get(url, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json.name);
    });

}

getPeopleById(1);

function getFilmById(id){
    const url = `https://swapi.co/api/films/${id}`;

    request.get(url, (err, response, body) => {
        console.log(err);
        console.log(response.statusCode);
        const json = JSON.parse(body);
        console.log(json.title);
    });
}

getFilmById(3);