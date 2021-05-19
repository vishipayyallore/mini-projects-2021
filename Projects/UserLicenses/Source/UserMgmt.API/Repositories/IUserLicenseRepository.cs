using System.Collections.Generic;
using System.Threading.Tasks;
using UserMgmt.Data;

namespace UserMgmt.API.Repositories
{

    public interface IUserLicenseRepository
    {
        Task<IEnumerable<UserLicense>> GetAllLicensesForUser(string userId);
    }

}
