using Microsoft.AspNetCore.SignalR.Client;
using System;
using System.Threading.Tasks;

namespace NumbersGenerator
{
    class Program
    {

        static async Task Main(string[] args)
        {
            string HubUrl = "https://localhost:5001/hub/numbers";
            int value = 1;
            long userId = 1001;

            var connection = new HubConnectionBuilder()
                .WithUrl(HubUrl)
                .Build();

            await connection.StartAsync();

            // Loop is here to wait until the server is running
            while (true)
            {
                try
                {
                    value++;
                    if (value > 10000)
                    {
                        value = 1;
                    }
                    Console.WriteLine($"{userId} :: {value}");

                    await connection.SendAsync("newNumberReceived", userId, value);

                    await Task.Delay(1000);
                    // break;
                }
                catch
                {
                    await Task.Delay(1000);
                }
            }

            Console.WriteLine("Client One listening. Hit Ctrl-C to quit.");
            Console.ReadLine();
        }
    }
}
