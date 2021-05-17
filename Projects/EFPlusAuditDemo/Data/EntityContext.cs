using EFPlusAuditDemo.Models;
using System.Data.Entity;
using Z.EntityFramework.Plus;

namespace EFPlusAuditDemo.Data
{

    public class EntityContext : DbContext
    {
        public EntityContext() : base(Program.GetConnectionString("SqlServerConnection"))
        {
        }

        public DbSet<AuditEntry> AuditEntries { get; set; }

        public DbSet<AuditEntryProperty> AuditEntryProperties { get; set; }

        static EntityContext()
        {
            AuditManager.DefaultConfiguration.AutoSavePreAction = (context, audit) =>
               // ADD "Where(x => x.AuditEntryID == 0)" to allow multiple SaveChanges with same Audit
               (context as EntityContext).AuditEntries.AddRange(audit.Entries);

        }

        public DbSet<Customer> Customers { get; set; }
    }

}
