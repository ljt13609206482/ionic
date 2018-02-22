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
  city     VARCHAR(255) COMMENT 'city',
  avatar VARCHAR(255) COMMENT 'avatar' DEFAULT 'default.png'
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
            INSERT INTO db.product(title, detail, price)
            VALUE(
                CONCAT('title: ', counter + 1),
                CONCAT('product detail: ', counter),
                FLOOR(RAND() * 10000)
            );
            SET counter = counter + 1;
        END WHILE;
    END $$

CALL db.gen_sample_data();

--创建商品图片表
DROP TABLE IF EXISTS db.picture;
CREATE TABLE db.picture(
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT 'id PK',
    name VARCHAR(255) NOT NULL COMMENT '图片文件名',
    productId INT COMMENT '商品 id FK',
    FOREIGN KEY(productId)
    REFERENCES db.product(id)
) COMMENT 'picture table';

--插入商品信息
INSERT INTO db.picture VALUE(NULL, '1.jpg', 1);
INSERT INTO db.picture VALUE(NULL, '2.jpg', 1);
INSERT INTO db.picture VALUE(NULL, '3.jpg', 1);
INSERT INTO db.picture VALUE(NULL, '4.jpg', 1);
-- 查询字段注释
SHOW FULL COLUMNS FROM db.user;

-- 查询表的注释
USE db;
SHOW TABLE STATUS
WHERE name = 'user';

SELECT *
FROM db.user;

SELECT * FROM  db.product LIMIT 20 OFFSET 0;


SELECT p1.*,p2.name FROM db.product AS p1 INNER JOIN db.picture AS p2 ON p1.id=p2.productId WHERE p1.id=1
