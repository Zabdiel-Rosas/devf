
const express = require(`express`);
const { User, Guitar } = require('./models/index');

const app = express();

//Configuración extra para obtener body de request (req)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get(`/`, (request, response) => {
    response.send(`Hola desde Express`)
})
app.get(`/users`, (req, res) => {
    User.find().exec()
        .then((users) => {
            res.send(users);
        })
        .catch(() => {
            res.status(409).send(err);
        })
})

app.get(`/user/:idUser`, (req, res) => {
    const idUser = req.params.idUser;
    User.findOne({_id: idUser}).exec()
        .then((user) => {
            if(user) res.send(user);
            else res.status(404).send({mensaje: 'USUARIO NO ENCONTRADO'});
            
        })
        .catch((err) => {
            res.status(409).send(err);
        });
});

//QUERY
app.get(`/search`, (req, res) => {
    res.send({ message: `search` })
});
//Body

app.post(`/user`, (req, res) => {
    console.log(req.body)

    const newUser = User({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        genero: req.body.genero
    });

    newUser.save((err, user) => {
        if(err) res.status(400).send(err)
        else res.status(201).send(user);
    });

    res.send(newUser);
});

app.patch('/user/:idUser', (req, res) => {
    const idUser = req.params.idUser;
    //BUSQUEDA, //UPDATE
    User.findOneAndUpdate({_id: idUser}, req.body, {new:true}).exec()
        .then((userUpdated) => {
            res.send(userUpdated);
        }).catch((err) => {
            res.status(409).send(err);
        });
});

app.get('/guitars', (req, res) => {
    Guitar.find().exec()
        .then((guitar) => {
            res.status(201).send(guitar);
        }).catch(() => {
            res.status(409).send(err);
        })
});

app.get('/guitars/:idGuitar', (req, res) => {
    const idGuitar = req.params.idGuitar;
    Guitar.findOne({_id: idGuitar}).exec()
        .then((guitar) => {
            if(guitar) res.send(guitar);
            else res.status(404).send({mensaje: 'Guitarra no encontrada'});
        })
        .catch((err) => {
            res.status(409).send(err);
        });
});

app.post('/guitar', (req, res) => {
    console.log(req.body);

    const newGuitar = Guitar ({
        model: req.body.model,
        color: req.body.color,
        bodyStyle: req.body.bodyStyle,
        productionDate: req.body.productionDate
    });

    newGuitar.save((err, guitar) => {
        if(err) res.status(400).send(err)
        else res.status(201).send(guitar);
    });

    res.send(newGuitar);
});

app.patch('/guitars/:idGuitar', (req, res) => {
    const idGuitar = req.params.idGuitar;

    //Look Up and Update
    Guitar.findOneAndUpdate({_id: idGuitar}, req.body, {new: true}).exec()
        .then((guitarUpdated) => {
            res.send(guitarUpdated);
        })
        .catch((err) => {
            res.status(409).send(err);
        });
});

app.delete('/guitar/:idGuitar', (req, res) => {
    const idGuitar = req.params.idGuitar;

    Guitar.findOneAndDelete({_id: idGuitar}).exec()
        .then(() => {
            res.send({mensaje: 'Se elimino el registro seleccionado'});
        })
        .catch((err) => {
            res.status(409).send(err);
        });
});

app.listen(3000, () => {
    console.log(`Server On`)
});