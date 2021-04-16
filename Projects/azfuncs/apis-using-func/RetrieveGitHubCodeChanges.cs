using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.WindowsAzure.Storage.Table;

namespace AzGlobalIndia.Function
{
    public static class RetrieveGitHubCodeChanges
    {
        [FunctionName("RetrieveGitHubCodeChanges")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,
            [Table("GitCodeChanges")] CloudTable cloudTable,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string name = req.Query["name"];

            TableQuery<CodeChangesEntity> rangeQuery = new TableQuery<CodeChangesEntity>();

            // var output = await cloudTable.ExecuteQuerySegmentedAsync(rangeQuery, null).ConfigureAwait(false).GetAwaiter().GetResult();

            foreach (CodeChangesEntity entity in 
                await cloudTable.ExecuteQuerySegmentedAsync(rangeQuery, null))
            {
                log.LogInformation(
                    $"{entity.PartitionKey}\t{entity.RowKey}\t{entity.Timestamp}\t{entity.FullName}");
            }

            return new OkObjectResult(await cloudTable.ExecuteQuerySegmentedAsync(rangeQuery, null));
        }
    }

}
