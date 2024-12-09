##CREATE DATABASE journalEntries;

USE journalEntries;

CREATE TABLE entrys(
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    fealing VARCHAR(255),
    newEntry TEXT,
    timestamp DATETIME DEFAULT NOW()
)