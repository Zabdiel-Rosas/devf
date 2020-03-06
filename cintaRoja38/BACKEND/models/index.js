const mongoose = require('mongoose');

const User = require('./user')
const Guitar = require('./Guitar');

const URL_MONGO = 'mongodb+srv://Admin:s0v13T@cluster0-6x5bm.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URL_MONGO,{ useUnifiedTopology: true }     ,(err) => {
    if(!err) console.log('Conexion exitosa');
    else console.log(err);
});

module.exports = {
    User,
    Guitar
}