using Books.API.Data;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Security.Claims;

namespace Books.API
{
    public class Startup
    {
        const string _corsPolicyName = "AllHosts";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services
        .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {
            options.Authority = Configuration["Auth0:Authority"];
            options.Audience = Configuration["Auth0:Audience"];
        });
            //services.AddAuthentication(options =>
            //{
            //    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            //}).AddJwtBearer(options =>
            //{
            //    options.Authority = Configuration["Auth0:Authority"];
            //    options.Audience = Configuration["Auth0:ApiIdentifier"];
            //    // If the access token does not have a `sub` claim, `User.Identity.Name` will be `null`. Map it to a different claim by setting the NameClaimType below.
            //    options.TokenValidationParameters = new TokenValidationParameters
            //    {
            //        NameClaimType = ClaimTypes.NameIdentifier
            //    };
            //});

            //services.AddAuthentication(options =>
            //{
            //    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            //}).AddJwtBearer(options =>
            //{
            //    options.Authority = Configuration["Auth0:Authority"];
            //    options.Audience = Configuration["Auth0:ApiIdentifier"];
            //});

            //services.AddAuthentication(
            //    //IdentityServerAuthenticationDefaults.AuthenticationScheme)
            //.AddIdentityServerAuthentication(options =>
            //{
            //    options.Authority = Configuration["Auth0:Authority"];
            //    options.ApiName = Configuration["Auth0:ApiIdentifier"];
            //});

            services.AddCors(options =>
            {
                options.AddPolicy(_corsPolicyName, builder => builder.AllowAnyOrigin()
                                                            .AllowAnyHeader()
                                                             .AllowAnyMethod());
            });

            services.AddControllers();

            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Books.API", Version = "v1" });
            });

            // SQL database connection (name defined in appsettings.json).
            var SettingsData = new SettingsData(Configuration.GetConnectionString("SqlServerConnection"));
            services.AddSingleton(SettingsData);

            services.AddScoped<IBookRepository, BookRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Books.API v1"));
            }

            app.UseHttpsRedirection();

            app.UseCors(_corsPolicyName);

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
