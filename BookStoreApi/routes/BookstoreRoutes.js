const express = require('express');
const router = express.Router();

//import bookstore controller
const BookstoreController = require('../controller/BookstoreController');
const BookstoreModel = require('../models/BookstoreModel');

//get all books route
router.get('/books', BookstoreController.getAllBooks);

//get specific book
router.get('/books/:id', BookstoreController.getBookById);

//add new book
router.post('/', BookstoreController.addNewBook);

//update a book by id
router.patch('/:id', BookstoreController.updateBookById);

//delete a book by id
router.delete('/:id', BookstoreController.deleteBookById);

module.exports = router;