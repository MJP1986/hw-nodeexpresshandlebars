DROP DATABASE IF exists burgers_db;
CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);
