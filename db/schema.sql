DROP DATABASE dbRecipe;
CREATE DATABASE dbRecipe;
USE dbRecipe;

CREATE TABLE ingredients
(
	id INT AUTO_INCREMENT NOT NULL,
	name varchar(255) NOT NULL,
	`order` BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE recipes
(
	id INT AUTO_INCREMENT NOT NULL,
	name varchar(255) NOT NULL,
	`order` BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);