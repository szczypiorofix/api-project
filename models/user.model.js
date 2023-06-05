const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        require: true
    }
});

schema.path('_id');

module.exports = mongoose.model( "User", schema );
