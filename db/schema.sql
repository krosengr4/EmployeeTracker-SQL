DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;    

DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS job; 
DROP TABLE IF EXISTS department;

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    job_id INT,
    arrests_made INT
);

CREATE TABLE job (
    id Int PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT
);

CREATE TABLE department(
    id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL
);