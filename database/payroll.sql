CREATE DATABASE database_payroll;

USE database_payroll;

CREATE TABLE `database_payroll`. `users`(
  `id` INT(11) NOT NULL,
  `username` VARCHAR (45) NOT NULL,
  `password` VARCHAR(60) NOT NULL,
  `fullname` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));
)

ALTER TABLE users
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

DESCRIBE users;
