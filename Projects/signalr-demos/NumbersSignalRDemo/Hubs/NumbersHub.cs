using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace NumbersSignalRDemo.Hubs
{

    public class NumbersHub : Hub
    {

        public async Task SubscribeToGroup(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
        }

        public async Task NewNumberReceived(long username, int number)
        {
            // This has to be done by Cosmos Db
            string groupName = (number % 2 == 0) ? "evenGroup" : "oddGroup";
            Console.WriteLine($"{groupName} | Connection Id: {Context.ConnectionId}");

            await Clients.Group(groupName).SendAsync("numberReceived", username, number);
        }

        public override async Task OnConnectedAsync()
        {
            var groupQueryParameter = Context.GetHttpContext().Request.Query["groupName"];
            string groupName = groupQueryParameter.ToString().Trim() ?? "evenGroup";

            // await Groups.AddToGroupAsync(Context.ConnectionId, groupName);

            await base.OnConnectedAsync();
        }


        public override async Task OnDisconnectedAsync(Exception exception)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, "SignalR Users");

            await base.OnDisconnectedAsync(exception);
        }

    }

}

// await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
//var evenGroupClient = Clients.Groups("evenGroup");
//await evenGroupClient.SendAsync("numberReceived", username, number * 2);
//await Clients.All.SendAsync("numberReceived", username, number);

//string userName = Context.User.Identity.Name;
//Console.WriteLine($"{JsonSerializer.Serialize(Context.User)} | Connection Id: {Context.ConnectionId}");
