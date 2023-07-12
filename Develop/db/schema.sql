/*---------------Employees---------------*/

DROP DATABASE IF EXISTS employees;
CREATE DATABASE IF NOT EXISTS employees;

USE employees;

CREATE TABLE department(
    id INT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE role(
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department (id)
);

CREATE TABLE employee(
    id INT PRIMARY KEY,
    First_Name VARCHAR(30),
    Last_Name VARCHAR(30),
    Role_id INT,
    FOREIGN KEY (Role_id)
    REFERENCES role (id),
    Manager_id INT,
    FOREIGN KEY (Manager_id)
    REFERENCES employee (id)
);
