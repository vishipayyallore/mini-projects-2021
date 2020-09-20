'use strict';

const express = require('express');

const Book = require('./models/book.Model');
const bookRouter = require('./routes/book-Router')(Book);
const morganLogger = require('./middleware/logger');


// Initialized the application
const webApi = express();

// Logger Middleware
webApi.use(morganLogger);

// express middleware to handle the json body request
webApi.use(express.json());

// Default Route
webApi.get('/api', (request, response) => {
    response.status(200).json("Welcome to Books Web API.");
});

// Middleware (To Import Additional Routes)
webApi.use('/api', bookRouter);


module.exports = webApi;
