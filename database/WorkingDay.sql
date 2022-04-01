CREATE TABLE `database_payroll`.`WORKINGDAY` (
  `ID_WORKINGDAY` INT NOT NULL AUTO_INCREMENT,
  `WorkingDay` VARCHAR(25) NOT NULL,
  `WeekdayHour` TIME NOT NULL,
  `Entry` TIME NOT NULL,
  `Break` TIME NOT NULL,
  `Exit` TIME NOT NULL,
  `SatHour` TIME NOT NULL,
  `SatEntry` TIME NOT NULL,
  `SatExit` TIME NOT NULL,
  `WeeklyShift` TIME NOT NULL,
  `SatExempted` TIME NOT NULL,
  `Description` VARCHAR(150) NOT NULL,
  `Status` VARCHAR(15) NOT NULL,
  `AddDate` DATE NOT NULL,
  `AlterDate` DATE NULL,
  `LowDate` DATE NULL,
  `FK_USER_ADD` INT NOT NULL,
  `FK_USER_ALTER` INT NULL,
  `FK_USER_LOW` INT NULL,
  PRIMARY KEY (`ID_WORKINGDAY`),
  INDEX `FK_ID_USER_ADD_idx` (`FK_USER_ADD` ASC) VISIBLE,
  INDEX `FK_USER_ALTER_idx` (`FK_USER_ALTER` ASC) VISIBLE,
  INDEX `FK_USER_LOW_idx` (`FK_USER_LOW` ASC) VISIBLE,
  CONSTRAINT `FK_USER_ADD`
    FOREIGN KEY (`FK_USER_ADD`)
    REFERENCES `database_payroll`.`USER` (`ID_USER`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `FK_USER_ALTER`
    FOREIGN KEY (`FK_USER_ALTER`)
    REFERENCES `database_payroll`.`USER` (`ID_USER`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `FK_USER_LOW`
    FOREIGN KEY (`FK_USER_LOW`)
    REFERENCES `database_payroll`.`USER` (`ID_USER`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;