using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using UserMgmt.API.Entities;

namespace UserMgmt.API.Interfaces
{

    public interface IUserLicenseRepository
    {
        Task<IEnumerable<UserLicense>> GetAllLicensesForUser(string userId);
    }

}
