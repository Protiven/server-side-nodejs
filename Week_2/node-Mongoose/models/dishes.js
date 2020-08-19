const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    decription: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

