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


DROP TABLE IF EXISTS db.product;
CREATE TABLE db.product(
  id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'id pk',
  title VARCHAR (255) NOT NULL COMMENT 'title',
  detail VARCHAR(255) NOT NULL COMMENT 'detail',
  price DECIMAL(6,2) NOT NULL COMMENT 'price',
  picture VARCHAR(255) Not NULL DEFAULT 'product.png' COMMENT 'picture'
) COMMENT 'product table';

--为商品表生成1000条样本数据
DROP PROCEDURE IF EXISTS db.gen_sample_data;
DELIMITER $$
CREATE PROCEDURE db.gen_sample_data()
  BEGIN
    DECLARE counter INT DEFAULT 0;
    WHILE counter < 1000 DO
      INSERT INTO db.product(title,detail,price)VALUE(
        CONCAT('product title: ',counter),
        CONCAT('product detail: ',counter),
        floor(RAND()*10000)
      );
      SET counter = counter + 1;
    END WHILE;
  END $$;
DELIMITER;

CALL db.gen_sample_data();

-- 查询字段注释
SHOW FULL COLUMNS FROM db.user;

-- 查询表的注释
USE db;
SHOW TABLE STATUS
WHERE name = 'user';

SELECT *
FROM db.user;

SELECT * FROM  db.product LIMIT 20 OFFSET 0;
