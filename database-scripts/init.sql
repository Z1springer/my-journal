##CREATE DATABASE journalEntries;

USE journalEntries;

##DROP TABLE IF EXISTS entrys;

CREATE TABLE entrys(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    feeling VARCHAR(255),
    newEntry TEXT,
    timestamp DATETIME DEFAULT NOW()
);

INSERT INTO entrys (name, feeling, newEntry) VALUES ('John Doe', 'Happy', 'Everything is Awesome!');

SELECT * FROM entrys;