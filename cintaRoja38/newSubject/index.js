const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const PORT = 4000;
const request = require('request');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.get("/", (request, response) => {
    response.send({message:"Bienvenido a mi API"});
    console.log(reposnse.statusCode);
    
});

app.get("/home", (req, res) => {
    res.send({message: "Hola desde home"});
});

app.get("/user/:id", (req, res, next) => {
    console.log(req.params);
    const id = req.params.id;
    res.send({message: `Id user es: ${id}`});
    next();
}, function (req, res, next){
    console.log('Request', req.method);
    next();
});

app.get("/search", (req, res) => {
    console.log(req.query);
    const {q, color, vidas} = req.query    
    res.send({q, color, vidas})
});

app.get("/api/", (req, res) => {
    console.log(res.statusCode);
    res.send({message:"Hola Mundo"});
});

app.get("/resta", (req, res) => {
    const {num1, num2} = req.query;
    const resultado = (parseInt(num1) - parseInt(num2));
    res.status(200).send({resultado})
});

app.get("/api/suma", (req, res) => {
    const {num1, num2} = req.query;
    const resultado = (parseInt(num1) + parseInt(num2));
    res.status(200).send({resultado});
    
});

app.get("/api/usuario/:user", (req, res)=> {
    console.log(req.params);
    const user = req.params.user;
    res.status(200).send({user: `${user}`});
});

app.get("/api/swapi/:people", (req,res) => {
    const {people} = req.params;
    request.get(`https://swapi.co/api/people/${people}`, (err, response, body) => {
        const swapi_res = JSON.parse(body);
        res.status(200).send({'personaje': swapi_res});
    });
});

app.listen(PORT, () => console.log(`Server on ${PORT}`));