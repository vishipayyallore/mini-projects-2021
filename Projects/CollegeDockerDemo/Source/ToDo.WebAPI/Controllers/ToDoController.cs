using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ToDo.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToDoController : ControllerBase
    {
        private readonly ILogger<ToDoController> _logger;
        private object[] _toDos = new object[]
        {
            new { Id = "A101", Message = "To Do A", Active = true },
            new { Id = "A102", Message = "To Do B", Active = true },
            new { Id = "A103", Message = "To Do C", Active = false },
            new { Id = "A104", Message = "To Do D", Active = true },
        };

        public ToDoController(ILogger<ToDoController> logger)
        {
            _logger = logger;

        }

        [HttpGet]
        public ActionResult<IEnumerable<object[]>> Get()
        {
            return Ok(_toDos);
        }
    }
}
