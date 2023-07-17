//Import
const fs = require('fs');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Cedrick038!',
        database: 'employees'
    },
)

//Errors

connection.connect((err) =>{
    if (err) {
        console.error(`There was an error connecting to database: 'StudioEmployeeTracker' + err.stack. Bummer`);
        return;
    }
    console.log("You Did It!! It's Connected to the database as id" + connection.threadId);
});

//inquirer Questions

const MainQuestion = [
    {
        //Main Question
        type: "list",
        message: "What Would You Like To Do?",
        choices: 
        [
            "View Employees",
            "Add Employee",
            "Update Employee Role",
            "View Roles",
            "Add Roles",
            "View Departments",
            "Add Departments ",
            "Quit"
        ],
        name: "Main",
    },
];

const AddEmployeeQuestion = 
[
    {
        type: "input",
        message: "Add Employee Here",
        name: "AddEmployee"
    },
    {
        type: "input",
        message: "Insert First Name Of The Employee",
        name: "First_Name"
    },
    {
        type: "input",
        message: "Insert Last Name Of The Employee",
        name: "Last_Name"
    },
    {
        type: "input",
        message: "Insert Role Of The Employee",
        name: "Role_id"
    },
    {
        type: "list",
        message: "Who's The Manager Of The New Employee?",
        choices:
        [
            "Almyr Jules",
            "Davis-Cedrick Baseka",
            "Noah Matthews",
            "Dominic Forget",
            "Robert Fournier",
            "Jayce Kerry",
            "Lucas Edwards",
            "Melissa Roberts",
        ], 
        name: "EmployeeManager",
    },
];

const ChangeRoleQuestion = [
    {
        type: "input",
        message: "What's The Name Of The Employee Role You Would Like To Change?",
        name: "UpdateEmployeeRole"
    },
    {
        type: "input",
        message: "What's The Name Of The New Role?",
        name: "RoleTitle"
    },
    {
        type: "input",
        message: "What's The Salary Of The New Role?",
        name: "RoleSalary"
    },
    {
        type: "list",
        message: "In Which Department Does The New Role Belong To?",
        choice:
        [
            "Music Distribution",
            "Recording Studios",
            "Artist Development",
            "Marketing",
            "Merchandising",
            "A&R Development",
            "Legal",
            "Manufacturing",
        ],
        name: "RoleDepartment"
    },
];

const AddRole = [
    {
        type: "input",
        message: "What's The Name Of The New Role?",
        name: "AddRole",
    }
];

const AddDepartmentQuestion = [
    {
        type: "input",
        message: "What's The Name Of The New Department?",
        name: "AddDepartment",
    }
];

async function MainMenu() {
    const res = await inquirer.prompt(MainQuestion);
    if (res.Main === "View Employees"){
        ViewEmployee();}
    if (res.Main === "Add Employee"){
        AddEmployee();}
    if (res.Main === "View Departments") {
        ViewDepartments();}
    if (res.Main === "Add Department"){
        AddDepartment();}
    if (res.Main === "View Roles"){
        ViewRoles();}
    if (res.Main === "Add Roles"){
        AddRoles();}
    if (res.Main ==="Update Employee Role"){
        ChangeRoleQuestion();}
};

async function ViewEmployee(){
    const res = await connection.promise().query("SELECT * FROM employee");
    console.table(res[0]);
    MainMenu();
};

async function AddEmployee() {
    const res = await inquirer.prompt(AddEmployeeQuestion);
    connection.query("INSERT INTO employee SET ?", res);
    console.table(res[0]);
    MainMenu();
};

async function ViewRoles(){
    const res = await connection.promise().query("SELECT * FROM role");
    console.table(res[0]);
    MainMenu();
};

async function AddRoles() {
    const res = await inquirer.prompt(AddRole);
    connection.query("INSERT INTO role SET ?", res);
    console.table(res[0]);

    MainMenu();
};

async function ViewDepartments(){
    const res = await connection.promise().query("SELECT * FROM department");
    console.table(res[0]);

    MainMenu();
};

async function AddDepartment() {
    const res = await inquirer.prompt(AddDepartmentQuestion);
    connection.query("INSERT INTO department SET ?", res);
    console.table(res[0]);

    MainMenu();
};

MainMenu();



