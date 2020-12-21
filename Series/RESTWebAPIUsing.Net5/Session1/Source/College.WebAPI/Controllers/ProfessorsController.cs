using College.WebAPI.BLL;
using College.WebAPI.Core.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace College.WebAPI.Controllers
{

    [Route("api/v1/[controller]")]
    [ApiController]
    public class ProfessorsController : ControllerBase
    {

        private readonly ILogger<ProfessorsController> _logger;
        private readonly ProfessorsSqlBll _professorsSqlBll;

        public ProfessorsController(ILogger<ProfessorsController> logger, ProfessorsSqlBll professorsSqlBll)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));

            _professorsSqlBll = professorsSqlBll ?? throw new ArgumentNullException(nameof(professorsSqlBll));
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Professor>>> Get()
        {
            _logger.Log(LogLevel.Debug, "Request Received for ProfessorsController::Get");

            IEnumerable<Professor> professors = await _professorsSqlBll.GetAllProfessors()
                                                        .ConfigureAwait(false);

            _logger.Log(LogLevel.Debug, "Returning the results from ProfessorsController::Get");

            return Ok(professors);
        }

        [HttpGet("{id}", Name = nameof(GetProfessorById))]
        public async Task<ActionResult<Professor>> GetProfessorById(Guid id)
        {
            _logger.Log(LogLevel.Debug, "Request Received for ProfessorsController::GetProfessorById");

            Professor professor = await _professorsSqlBll.GetProfessorById(id)
                                            .ConfigureAwait(false);

            if (professor == null)
            {
                return NotFound();
            }

            _logger.Log(LogLevel.Debug, "Returning the results from ProfessorsController::GetProfessorById");

            return Ok(professor);
        }

        [HttpPost]
        public async Task<ActionResult<Professor>> AddProfessor([FromBody] Professor professor)
        {
            _logger.Log(LogLevel.Debug, "Request Received for ProfessorsController::AddProfessor");

            var createdProfessor = await _professorsSqlBll.AddProfessor(professor)
                                            .ConfigureAwait(false);

            _logger.Log(LogLevel.Debug, "Returning the results from ProfessorsController::AddProfessor");

            return CreatedAtRoute(routeName: nameof(GetProfessorById),
                                  routeValues: new { id = createdProfessor.ProfessorId },
                                  value: createdProfessor);
        }

        // PUT: HTTP 200 / HTTP 204 should imply "resource updated successfully". 
        [HttpPut]
        public async Task<ActionResult> UpdateProfessor([FromBody] Professor professor)
        {
            _logger.Log(LogLevel.Debug, "Request Received for ProfessorsController::UpdateProfessor");

            var _ = await _professorsSqlBll.UpdateProfessor(professor)
                            .ConfigureAwait(false);

            _logger.Log(LogLevel.Debug, "Returning the results from ProfessorsController::UpdateProfessor");

            return NoContent();
        }

        // DELETE: HTTP 200 / HTTP 204 should imply "resource deleted successfully".
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProfessor(Guid id)
        {
            _logger.Log(LogLevel.Debug, "Request Received for ProfessorsController::DeleteProfessor");

            var professorDeleted = await _professorsSqlBll.DeleteProfessorById(id)
                                            .ConfigureAwait(false);

            if (!professorDeleted)
            {
                return StatusCode(500, $"Unable to delete Professor with id {id}");
            }

            _logger.Log(LogLevel.Debug, "Returning the results from ProfessorsController::DeleteProfessor");

            return NoContent();
        }

    }

}
