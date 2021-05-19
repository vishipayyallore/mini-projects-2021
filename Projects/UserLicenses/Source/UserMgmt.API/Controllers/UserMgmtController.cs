using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Net;
using System.Threading.Tasks;
using UserMgmt.API.Entities;
using UserMgmt.API.Interfaces;

namespace UserMgmt.API.Controllers
{

    [Route("api/v1/[controller]")]
    [ApiController]
    public class UserMgmtController : ControllerBase
    {
        private readonly IUserLicenseRepository _userLicenseRepository;
        private readonly ILogger<UserMgmtController> _logger;

        public UserMgmtController(IUserLicenseRepository userLicenseRepository, ILogger<UserMgmtController> logger)
        {
            _userLicenseRepository = userLicenseRepository ?? throw new ArgumentNullException(nameof(userLicenseRepository));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet("{userId}")]
        [ProducesResponseType((int)HttpStatusCode.NotFound)]
        [ProducesResponseType(typeof(UserLicense), (int)HttpStatusCode.OK)]
        public async Task<ActionResult<UserLicense>> Get(string userId)
        {
            var userLicenses = await _userLicenseRepository
                            .GetAllLicensesForUser(userId)
                            .ConfigureAwait(false);

            if (userLicenses == null)
            {
                return NotFound();
            }

            return Ok(userLicenses);
        }

    }

}
