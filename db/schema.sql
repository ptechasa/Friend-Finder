DROP DATABASE friendFinder_db;
CREATE DATABASE friendFinder_db;

/*connect to a database*/
USE friendFinder_db;

CREATE TABLE questions (
    id INT NOT NULL AUTO_INCREMENT,
    question VARCHAR(255),
    PRIMARY KEY(id) 
);

CREATE TABLE friends (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255),
    picture_link VARCHAR(255),
    PRIMARY KEY(id) 
);

CREATE TABLE scores (
    id INT NOT NULL AUTO_INCREMENT,
    question_id INT NOT NULL,
    friend_id INT NOT NULL,
    score INT NOT NULL,
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (friend_id) REFERENCES friends(id),
    PRIMARY KEY (id),
    CHECK (score >= 0),
    CHECK (score <= 5)
);