'use strict';

import express from 'express';
const bookRouter = express.Router();

import {
    getAllBooks, doesBookExists, getBookById
} from '../controllers/booksController.js';

// Middleware For Retrieving the Book
bookRouter.use('/:bookId', doesBookExists);

bookRouter.route('/')
    .get(getAllBooks);

bookRouter.route('/:bookId')
    .get(getBookById);
//     .put(updateBookById)
//     .delete(deleteBookById);

export default bookRouter;