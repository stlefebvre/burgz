CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    ID INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN NOT NULL
);

SELECT * FROM burgers;