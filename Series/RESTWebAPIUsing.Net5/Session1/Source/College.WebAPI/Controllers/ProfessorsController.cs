using Microsoft.AspNetCore.Mvc;

namespace College.WebAPI.Controllers
{

    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProfessorsController : ControllerBase
    {

        [HttpGet]
        public string Get()
        {
            return "Hello World";
        }

    }

}
