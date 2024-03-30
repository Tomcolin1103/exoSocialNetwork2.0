-- -- CREATE DATABASE [socialNetwork2.0]

-- USE [socialNetwork2.0]

-- CREATE TABLE Users (
--     userId INT IDENTITY(1,1) PRIMARY KEY,
--     firstname NVARCHAR(50),
--     lastname NVARCHAR(50),
--     email NVARCHAR(100),
--     [password] NVARCHAR(200),
--     pseudo NVARCHAR(50),
--     profilePicture NVARCHAR(150)
-- )

-- CREATE TABLE Posts (
--     postId INT IDENTITY(1,1) PRIMARY KEY,
--     content VARCHAR(MAX),
--     [date] DATE,
--     author INT FOREIGN KEY REFERENCES Users(userId)
-- )

-- CREATE TABLE Comments (
--     commentId INT IDENTITY(1,1) PRIMARY KEY,
--     content VARCHAR(150),
--     [date] DATE,
--     postId INT FOREIGN KEY REFERENCES Posts(postId),
--     author INT FOREIGN KEY REFERENCES Users(userId)
-- )

-- CREATE TABLE Follows (
--     followId INT IDENTITY(1,1) PRIMARY KEY,
--     userId1 INT FOREIGN KEY REFERENCES Users(userId),
--     userId2 INT FOREIGN KEY REFERENCES Users(userId)
-- )