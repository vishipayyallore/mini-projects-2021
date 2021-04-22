﻿using Books.API.Data;
using Books.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Books.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {

        private readonly IBookRepository _bookRepository;
        private readonly ILogger<BooksController> _logger;

        public BooksController(IBookRepository bookRepository, ILogger<BooksController> logger)
        {
            _bookRepository = bookRepository ?? throw new ArgumentNullException(nameof(bookRepository));

            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Book>), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<IEnumerable<Book>>> Get()
        {
            _logger.LogInformation("Received the Get() request.");

            var books = await _bookRepository
                            .GetAllBooks()
                            .ConfigureAwait(false);

            return (books.Any()) ? Ok(books) : NotFound();
        }
    }

}

