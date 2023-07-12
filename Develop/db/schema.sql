/*---------------Employees---------------*/

DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE IF NOT EXISTS employees_db;

USE department_db;

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
    salary DECIMAL,
    Role_id INT,
    Manager_id INT,
    FOREIGN KEY (Role_id)
    REFERENCES role (id)
    FOREIGN KEY (Manager_id)
    REFERENCES employee (id)
);
