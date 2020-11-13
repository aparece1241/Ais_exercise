const Joi = require('joi');

const bookstoreSchema = Joi.object().keys({
    title: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    yearPublished: Joi.date().required(),
    price: Joi.number().required()
});

module.exports = bookstoreSchema;

