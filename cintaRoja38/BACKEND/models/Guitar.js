const mongoose = require('mongoose');

const schemaGuitar = new mongoose.Schema({
    model: {
        type: String,
        required: true,
    },
    color:{
        type: String,
        required:true,
    },
    bodyStyle: {
        type: String,
        required: true,
    },
    productionDate: {
        type: Number,
        required: true,
    }
});

const Guitar = mongoose.model('Guitar', schemaGuitar);

module.exports = Guitar;