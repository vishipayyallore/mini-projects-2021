'use strict';

import express from 'express';
const bookRouter = express.Router();

import { 
    addBook, getAllBooks, doesBookExists 
    , getBookById
} from '../controllers/booksController.js';

// Middleware For Retrieving the Book
bookRouter.use('/:bookId', doesBookExists);

bookRouter.route('/')
    .get(getAllBooks)
    .post(addBook);

bookRouter.route('/:bookId')
    .get(getBookById);

export default bookRouter;