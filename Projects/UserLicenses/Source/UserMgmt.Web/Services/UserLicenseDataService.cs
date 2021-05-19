using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Net.Http.Json;
using System.Threading.Tasks;
using UserMgmt.Data;

namespace UserMgmt.Web.Services
{

    public class UserLicenseDataService : IUserLicenseDataService
    {
        private readonly HttpClient _httpClient;
        const string userLicenseEndPoint = "api/v1/UserMgmt";

        public UserLicenseDataService(HttpClient httpClient)
        {
            _httpClient = httpClient ?? throw new ArgumentNullException(nameof(httpClient));
        }

        public async Task<IEnumerable<UserLicense>> GetAllLicensesForUser(string userId)
        {
            _httpClient.DefaultRequestHeaders.Authorization
                         = new AuthenticationHeaderValue("Bearer", "YourJWTToken");
            return await _httpClient.GetFromJsonAsync<IEnumerable<UserLicense>>($"{userLicenseEndPoint}/{userId}");
        }

    }

}
