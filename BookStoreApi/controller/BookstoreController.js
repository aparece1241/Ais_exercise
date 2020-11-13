//import the model
const BookstoreModel = require('../models/BookstoreModel');

//import sanitized data
const cleanData = require('../utils/parseRequestBody');

//get the validation schema
const bookstoreSchema = require('../validators/BookstoreSchema');
const { update } = require('../models/BookstoreModel');

module.exports = {
    //get all the books
    async getAllBooks(req, res) {
        try {
            let books = await BookstoreModel.find();

            if (!books || books.length < 0) {
                return res.status(201).json({ message: "no books registered" });
            }
            res.json({ data: books });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    //get book by id
    async getBookById(req, res) {
        const bookId = req.params.id;
        try {
            let book = await BookstoreModel.findById(bookId);

            if (!book || book.length < 0) {
                return res.status(201).json({ mesage: "Book not found" });
            }
            res.json({ data: book });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    //add another book
    async addNewBook(req, res) {
        //Implements the joi
        const result = bookstoreSchema.validate(req.body);
        const { value, error } = result;

        if (error) {
            return res.status(400).json({ error: error });
        }
        let newBook = new BookstoreModel(value);
        try {
            const book = await newBook.save();
            res.json({ message: "successfully added book", book: book });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    //update book by Id
    async updateBookById(req, res) {
        let toUpdate = cleanData(req.body);
        let bookId = req.params.id;
        try {
            let updatedBook = await BookstoreModel.findByIdAndUpdate(bookId,{
                $set: toUpdate
            },{new: true});
            res.json({message: "Successfully edited!",book: updatedBook});
        } catch (error) {
            res.status(500).send(error);
        }
    },
    //delete a book by id
    async deleteBookById(req, res) {
        let bookId = req.params.id;
        try {
            await BookstoreModel.findByIdAndDelete(bookId);
            res.json({message: "Successfully deleted!"});
        } catch (error) {
            res.status(500).send(error);
        }
    }

}