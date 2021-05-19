using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using UserMgmt.Web.Services;

namespace UserMgmt.Web
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebAssemblyHostBuilder.CreateDefault(args);
            builder.RootComponents.Add<App>("#app");

            builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

            builder.Services.AddHttpClient<IUserLicenseDataService, UserLicenseDataService>(client =>
                client.BaseAddress = new Uri(builder.Configuration["WebApis:Books"]));

            await builder.Build().RunAsync();
        }
    }
}
