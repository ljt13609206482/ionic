DROP DATABASE IF EXISTS db;
CREATE DATABASE db
  CHARACTER SET utf8;

DROP TABLE IF EXISTS db.user;
CREATE TABLE db.user (
  id       INT AUTO_INCREMENT PRIMARY KEY
  COMMENT 'id PK',
  email    VARCHAR(191) NOT NULL UNIQUE
  COMMENT 'email',
  username VARCHAR(255) NOT NULL
  COMMENT 'username',
  password VARCHAR(255) NOT NULL
  COMMENT 'password',
  gender   VARCHAR(255) NOT NULL
  COMMENT 'gender',
  age      INT COMMENT 'age',
  city     VARCHAR(255) COMMENT 'city'
)
  COMMENT 'user table';

-- 查询字段注释
SHOW FULL COLUMNS FROM db.user;

-- 查询表的注释
USE db;
SHOW TABLE STATUS
WHERE name = 'user';

SELECT *
FROM db.user;
