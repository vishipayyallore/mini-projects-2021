USE [BooksStoreData]
GO

/****** Object:  Table [dbo].[AuditEntryProperty]    Script Date: 5/17/2021 10:50:25 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[AuditEntryProperties](
	[AuditEntryPropertyID] [int] IDENTITY(1,1) NOT NULL,
	[AuditEntryID] [int] NULL,
	[Parent] [varchar](max) NULL,
	[PropertyName] [varchar](100) NULL,
	[RelationName] [varchar](100) NULL,
	[NewValue] [varchar](max) NULL,
	[IsValueSet] [bit] NULL,
	[InternalPropertyName] [varchar](100) NULL,
	[NewValueFormatted] [varchar](100) NULL,
	[OldValue] [varchar](max) NULL,
	[DbUpdatableDataRecord] [varchar](max) NULL,
	[DbUpdatableDataRecordPosition] [int] NULL,
	[IsKey] [bit] NULL,
	[OldValueFormatted] [varchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


