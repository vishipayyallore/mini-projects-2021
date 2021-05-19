using Microsoft.AspNetCore.Components;
using System.Collections.Generic;
using System.Threading.Tasks;
using UserMgmt.Data;
using UserMgmt.Web.Services;

namespace UserMgmt.Web.Pages
{
    public partial class UserLicenses
    {
        [Inject]
        private IUserLicenseDataService LicenseDataService { get; set; }

        public IEnumerable<UserLicense> Licenses { get; set; }

        protected override async Task OnInitializedAsync()
        {
            Licenses = await LicenseDataService.GetAllLicensesForUser("user1@sample.com");
        }
    }
}
