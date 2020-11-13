const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BookstoreSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    yearPublished: {
        type: Date,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
});

const BookstoreModel = mongoose.model('BookstoreModel',BookstoreSchema);

module.exports = BookstoreModel;