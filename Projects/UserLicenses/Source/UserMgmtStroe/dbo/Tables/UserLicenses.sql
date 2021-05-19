CREATE TABLE [dbo].[UserLicenses]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [UserId] VARCHAR(50) NOT NULL, 
    [License] VARCHAR(50) NOT NULL, 
    [LicenseUsedFor] VARCHAR(100) NOT NULL, 
    [CreatedOn] DATETIME2 DEFAULT GETDATE() NOT NULL, 
    [IsActive] BIT NOT NULL
)
