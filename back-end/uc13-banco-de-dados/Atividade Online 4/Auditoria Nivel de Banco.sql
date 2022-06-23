USE [RpgOnlineHandryo]

GO

CREATE DATABASE AUDIT SPECIFICATION [DatabaseAuditSpecification-20220504-190205]
FOR SERVER AUDIT [Audit-20220504-181240]
ADD (SELECT ON OBJECT::[dbo].[Personagens] BY [alunoRpgOnline])

GO


