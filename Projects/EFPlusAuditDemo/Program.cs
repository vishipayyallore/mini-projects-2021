using EFPlusAuditDemo.Data;
using EFPlusAuditDemo.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Z.EntityFramework.Plus;
using static System.Console;

namespace EFPlusAuditDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            GenerateData();

            // Audit : Easily tracks changes, exclude/include entity or property and auto save audit entries in the database.
            // See also Context
            using (EntityContext context = new())
            {
                var listToRemove = context.Customers.Where(x => x.IsActive == false).ToList();
                var listToModify = context.Customers.Where(x => x.IsActive == true).ToList();
                var listToAdd = new List<Customer>() { new Customer() { Name = "Customer_C", Description = "Description", IsActive = false } };

                context.Customers.AddRange(listToAdd); // add
                context.Customers.RemoveRange(listToRemove); // remove
                listToModify.First().Description = "Updated_A"; // modify

                var audit = new Audit
                {
                    CreatedBy = "ZZZ Projects" // Optional
                };

                context.SaveChanges(audit);
            }

            WriteLine("\n\nPress any key ...");
            ReadKey();
            
        }

        public static string GetConnectionString(string itemName)
        {
            var builder = new ConfigurationBuilder()
                                .SetBasePath(Directory.GetCurrentDirectory())
                                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            string strConnection = builder.Build().GetConnectionString(itemName);

            return strConnection;
        }

        public static void GenerateData()
        {
            using EntityContext context = new();
            context.Customers.Add(new Customer() { Name = "Customer_A", Description = "Description", IsActive = true });
            context.Customers.Add(new Customer() { Name = "Customer_B", Description = "Description", IsActive = false });

            context.SaveChanges(new Audit());
        }

    }
}
