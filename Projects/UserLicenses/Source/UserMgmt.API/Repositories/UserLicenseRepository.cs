using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserMgmt.API.Persistence;
using UserMgmt.Data;

namespace UserMgmt.API.Repositories
{
    public class UserLicenseRepository : IUserLicenseRepository
    {

        private readonly UserMgmtDbContext _userMgmtDbContext;
        private readonly ILogger<UserLicenseRepository> _logger;

        public UserLicenseRepository(UserMgmtDbContext userMgmtDbContext, ILogger<UserLicenseRepository> logger)
        {
            _userMgmtDbContext = userMgmtDbContext ?? throw new ArgumentNullException(nameof(userMgmtDbContext));

            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        public async Task<IEnumerable<UserLicense>> GetAllLicensesForUser(string userId)
        {
            IEnumerable<UserLicense> userLicenses;

            _logger.Log(LogLevel.Debug, "Request Received for ProfessorsSqlDal::GetAllProfessors");

            userLicenses = await _userMgmtDbContext.UserLicenses
                                .Where(row => row.UserId == userId)
                                .ToListAsync()
                                .ConfigureAwait(false);

            _logger.Log(LogLevel.Debug, "Returning the results from ProfessorsSqlDal::GetAllProfessors");

            return userLicenses;
        }

    }

}
