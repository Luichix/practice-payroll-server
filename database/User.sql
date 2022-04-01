CREATE TABLE `database_payroll`.`USER` (
  `ID_USER` INT NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(15) NOT NULL,
  `Password` VARCHAR(20) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `FullName` VARCHAR(45) NOT NULL,
  `TypeUser` VARCHAR(35) NOT NULL,
  `Status` VARCHAR(15) NOT NULL,
  `AddedDate` DATE NOT NULL,
  `AlterDate` DATE NULL,
  `LowDate` DATE NULL,
  PRIMARY KEY (`ID_USER`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


/* ALTER TABLE USER ADD Status VARCHAR(15);

ALTER TABLE `database_payroll`.`USER` 
CHANGE COLUMN `Status` `Status` VARCHAR(15) NOT NULL ; */