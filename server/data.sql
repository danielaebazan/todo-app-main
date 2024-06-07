CREATE DATABASE todoappmain;

CREATE TABLE todos (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(75),
    date VARCHAR(300)
);

ALTER TABLE todos ADD COLUMN completed BOOLEAN DEFAULT false;
