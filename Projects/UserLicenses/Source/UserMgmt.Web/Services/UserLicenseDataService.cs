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
                         = new AuthenticationHeaderValue("Bearer", "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik8yQkI4QjZFS3pub2NKRWJKMXpaSyJ9.eyJuaWNrbmFtZSI6InVzZXIxIiwibmFtZSI6InVzZXIxQHNhbXBsZS5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvMWIxMjFhODI1MTk5NzYwODY0MjQ4NjkzMDJmZTg2YzI_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZ1cy5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMS0wNS0xOVQxNTo1NDo0Ny4yMDlaIiwiZW1haWwiOiJ1c2VyMUBzYW1wbGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpc3MiOiJodHRwczovL3Zpc2hpcGF5eWFsbG9yZS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjBhNGFjNDJjYmMzZTcwMDcwMGU4ZjFhIiwiYXVkIjoiNjkxd1lzWlZ0cmZPSm1uYkVMZTNxcjFid0hYYnViR08iLCJpYXQiOjE2MjE0Mzk2ODcsImV4cCI6MTYyMTQ3NTY4N30.J1vK2TDgfkOc59SnuyvVYJQgp8oFyJIjrYYvza1FWFgt3df0VZ3uB9IjoAHWetdsqKVPO1mEmBypQI887DfoZmvh2TSC8WR7MM_3A5WCLp9ZNghCbbTzEFNMVpOXaupUf4WZcHYSPlWsJ1wmmbKZhconhC95Rpzn4IwFYJ3MbphrxB9fC35ekQcwLpzuDcrmY1_ruzpcdiPlLBi6hLu5gMy-87y6JiMr4odMe0-wontRSNUsyqOVh4r_Y7oW14hZGlwrYzgNOjzfJW_5amv1dzz19ec8B_17U88BZW67-RhFzf5un8-mmgqujTeg03dsw3LrKU35nkK2V6EnDSivrA");
            return await _httpClient.GetFromJsonAsync<IEnumerable<UserLicense>>($"{userLicenseEndPoint}/{userId}");
        }

    }

}
