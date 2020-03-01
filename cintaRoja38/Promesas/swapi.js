const request = require('request');

function getMovieByURL(URL){
    return new Promise((resolve, reject)=> {
        request.get(URL, (err, response, body) => {
            if(response.statusCode === 200){
                const json = JSON.parse(body);
                resolve(json)
            }else {
                reject('Error en tu peticion de Films')
            }
        });
    });
}

getMovieByURL('https://swapi.co/api/films/2/')
    .then((respuesta) => {
        console.log(respuesta);
    }) 
    .catch(() => {

    })