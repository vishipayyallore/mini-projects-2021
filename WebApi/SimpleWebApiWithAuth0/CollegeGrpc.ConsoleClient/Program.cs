using Grpc.Core;
using Grpc.Net.Client;
using GrpcServiceWithAuth0.ClientCredentialsDemo;
using Microsoft.Extensions.Configuration;
using System;
using System.IO;
using System.Threading.Tasks;

using static GrpcServiceWithAuth0.ClientCredentialsDemo.Greeter;
using static System.Console;

namespace CollegeGrpc.ConsoleClient
{
    class Program
    {

        static private GreeterClient _client;
        
        private static IConfiguration _config;

        static protected GreeterClient Client
        {
            get
            {
                if (_client == null)
                {
                    var channel = GrpcChannel.ForAddress(_config["RPCService:ServiceUrl"]);
                    _client = new GreeterClient(channel);
                }
                return _client;
            }
        }


        static async Task Main(string[] args)
        {
            _config = new ConfigurationBuilder()
                            .SetBasePath(Directory.GetCurrentDirectory())
                            .AddJsonFile("appsettings.json").Build();

            AppContext.SetSwitch("System.Net.Http.SocketsHttpHandler.Http2UnencryptedSupport", true);

            var headers = new Metadata();
            var token = "YourToken";
            headers.Add("Authorization", $"Bearer {token}");

            var reply = await Client.SayHelloAsync(new HelloRequest { Name = "GreeterClient" }, headers: headers);
            Console.WriteLine("Greeting: " + reply.Message);

            Console.WriteLine("\n\nThank You for using the application. \n\nPress any key ...");
            Console.ReadKey();
        }


    }
}
