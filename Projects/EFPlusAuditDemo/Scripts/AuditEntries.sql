USE [BooksStoreData]
GO

/****** Object:  Table [dbo].[AuditEntriesV1]    Script Date: 5/17/2021 10:38:59 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[AuditEntries](
	[AuditEntryID] [int] IDENTITY(1,1) NOT NULL,
	[CreatedBy] [varchar](100) NULL,
	[CreatedDate] [datetime] NULL,
	[DelayedKey] [nvarchar](100)  NULL,
	[Entity] [nvarchar](100)  NULL,
	[Entry] [nvarchar](100)  NULL,
	[EntitySetName] [varchar](50) NULL,
	[EntityTypeName] [varchar](50) NULL,
	[Parent] [nvarchar](100)  NULL,
	[Properties] [nvarchar](100)  NULL,
	[State] [nvarchar](100)  NULL,
	[StateName] [varchar](50) NULL,
 CONSTRAINT [PK_AuditEntries] PRIMARY KEY CLUSTERED 
(
	[AuditEntryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] 
GO


