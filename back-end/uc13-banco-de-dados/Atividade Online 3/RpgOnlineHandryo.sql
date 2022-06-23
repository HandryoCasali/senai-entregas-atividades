--DDL
CREATE DATABASE RpgOnlineHandryo
GO

USE RpgOnlineHandryo
GO

CREATE TABLE Usuarios (
	UsuarioId INT PRIMARY KEY IDENTITY,
	Email VARCHAR(100) UNIQUE NOT NULL,
	Senha VARCHAR(50) NOT NULL,
)

CREATE TABLE Classes (
	ClasseId INT PRIMARY KEY IDENTITY,
	Nome VARCHAR(50) UNIQUE NOT NULL, 
	Descricao VARCHAR(255)
)

CREATE TABLE Personagens (
	PersonagemId INT PRIMARY KEY IDENTITY,
	NomePersonagem VARCHAR(30) UNIQUE NOT NULL,
	UsuarioId INT UNIQUE FOREIGN KEY REFERENCES Usuarios(UsuarioId),
	ClasseId INT FOREIGN KEY REFERENCES Classes(ClasseId)
)

CREATE TABLE Habilidades(
	HabilidadeId INT PRIMARY KEY IDENTITY,
	Nome VARCHAR(50) UNIQUE NOT NULL,
)

CREATE TABLE ClasseHabilidade (
	ClasseId INT FOREIGN KEY REFERENCES Classes(ClasseId),
	HabilidadeId INT FOREIGN KEY REFERENCES Habilidades(HabilidadeId)
)

--DML
INSERT INTO Usuarios VALUES ('email@email.com', '123456')
INSERT INTO Classes VALUES ('Bárbaro', 'Descrição do bárbaro')
INSERT INTO Habilidades VALUES ('Lança Mortal'),('Escudo Supremo')
INSERT INTO Personagens (NomePersonagem, UsuarioId, ClasseId) VALUES ('DeuBug', 1, 1)
INSERT INTO ClasseHabilidade (ClasseId, HabilidadeId) VALUES (1, 1), (1, 2)

INSERT INTO Usuarios VALUES ('email2@email.com', '123456')
INSERT INTO Classes VALUES ('Monge', 'Descrição do monge')
INSERT INTO Habilidades VALUES ('Recuperar Vida') 
INSERT INTO Personagens (NomePersonagem, UsuarioId, ClasseId) VALUES ('BitBug', 2, 2)
INSERT INTO ClasseHabilidade (ClasseId, HabilidadeId) VALUES (2, 2), (2, 3)

UPDATE Usuarios
SET Senha = 'SenhaNova'
WHERE Email = 'email2@email.com'
 
--DQL
SELECT * FROM Habilidades
ORDER BY HabilidadeId

SELECT P.NomePersonagem, C.Nome AS 'Classe', C.Descricao FROM Personagens AS P
JOIN Classes AS C
ON P.ClasseId = C.ClasseId