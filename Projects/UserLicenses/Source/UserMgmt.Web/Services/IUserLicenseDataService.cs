using System.Collections.Generic;
using System.Threading.Tasks;
using UserMgmt.Data;

namespace UserMgmt.Web.Services
{

    public interface IUserLicenseDataService
    {
        Task<IEnumerable<UserLicense>> GetAllLicensesForUser(string userId);
    }

}
