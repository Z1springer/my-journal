##CREATE DATABASE journalEntries;

USE journalEntries;

CREATE TABLE entrys(
	id INT PRIMARY KEY AUTO_INCREMENT,
    author VARCHAR(255),
    fealing VARCHAR(255),
    content TEXT,
    timestamp DATETIME DEFAULT NOW()
)