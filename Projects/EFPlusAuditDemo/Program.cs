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

            PerformChanges();

            WriteLine("\n\nPress any key ...");
            ReadKey();
        }

        private static void PerformChanges()
        {
            using EntityContext context = new();

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


////Retrieve AuditEntries for specific item : You can filter the AuditEntries DbSet using Where method and providing either the item or the key.
//using (var context = new EntityContext())
//{
//    var item = context.Customers.Where(x => x.Name == "Customer_C").ToList().First();

//    FiddleHelper.WriteTable("All Entry", context.AuditEntries.Where(item).ToList());

//    FiddleHelper.WriteTable("All Entry", context.AuditEntries.Where<Customer>(item.CustomerID).ToList());

//    int id = item.CustomerID;

//    FiddleHelper.WriteTable("All Entry", context.AuditEntries.Where<Customer>(id).ToList());

//    foreach (var entry in context.AuditEntries.Where<Customer>(id).ToList())
//    {
//        FiddleHelper.WriteTable("Properties for Entry ID: " + entry.AuditEntryID, context.AuditEntryProperties.Where(x => x.AuditEntryID == entry.AuditEntryID).ToList());
//    }
//}