﻿using Microsoft.EntityFrameworkCore;
using UserMgmt.Data;

namespace UserMgmt.API.Persistence
{

    public class UserMgmtDbContext : DbContext
    {

        public UserMgmtDbContext(DbContextOptions<UserMgmtDbContext> options) : base(options)
        {
        }

        public DbSet<UserLicense> UserLicenses { get; set; }
    }

}
