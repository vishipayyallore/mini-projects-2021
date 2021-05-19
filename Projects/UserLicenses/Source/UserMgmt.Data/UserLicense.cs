using System;
using System.ComponentModel.DataAnnotations;

namespace UserMgmt.Data
{

    public class UserLicense
    {
        [Key]
        public int Id { get; set; }

        public string UserId { get; set; }

        public string License { get; set; }

        public string LicenseUsedFor { get; set; }

        public DateTime CreatedOn { get; set; }

        public bool IsActive { get; set; }
    }

}
