const inquirer = require('inquirer');
const mySql = require('mysql');
const app = express();

// Create connection to MySQL
const connection = mySql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'employee_db',
    user: 'root',
    password: '611854kr', //<--- Add MySQL password here
});

// Array of choices the user can make
const userChoices = [
    'View All Employees',
    'Add Employee',
    'Update Employee Info',
    'View All Departments', 
    'Add a Department',
    'View All Jobs',
    'Add a Job',
    'Exit'
];

// Connect to the database and call function startPrompt()
connection.connect(error => {
    if (error) throw error;
    console.log("You are connected to the employees_db database!");
    startPropmt();
});

// This function runs inquirer.prompt, and handles the suser selection
const startPropmt = async () => {
    try {
        let response = await inquirer.prompt({
            name: 'action', 
            type: 'list',
            message: 'Hello! What would you like to do?',
            choices: userChoices
        }); 
        // switch function to handle the user choice, calls appropriate function
        switch (response.action) {
            case 'View All Employees': viewEmployees();
            break; 
            
            case 'Add Employee': addEmployee();
            break;

            case 'Update Employee Info': updateEmployee();
            break;

            case 'View All Departments': viewDepartments();
            break;

            case 'Add a Department': addDepartment();
            break;

            case 'View All Jobs': viewJobs();
            break;

            case 'Add a Job': addJob();
            break;

            case "Exit": connection.end();
            break;
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to view all employees
const viewEmployees = async () => {
    console.log('You chose to View All Employees');
};

// Function to add an employee
const addEmployee = async () => {
    console.log('You chose to Add an Employee');
};

//Function to update an employee
const updateEmployee = async () => {
    console.log('You chose to Update Employee Information');
};

// Function to view all departments
const viewDepartments = async () => {
    console.log('You chose to View All Departments');
};

// Function to add a department
const addDepartment = async () => {
    console.log('You chose to Add a Department');
};

// Function to view all jobs
const viewJobs = async () => {
    console.log('You chose to View All Jobs');
};

// Function to add a job
const addJob = async () => {
    console.log('You chose to Add a Job');
};