// Import dependencies
const inquirer = require('inquirer');
const mySql = require('mysql');
// const app = express();

// Create connection to MySQL
const connection = mySql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'employee_db',
    user: 'root',
    //TODO: Add "MySQL" password below
    password: '611854kr',
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
const startPropmt = () => {
    inquirer.prompt({
        message: 'What would you like to do?',
        name: 'action', 
        type: 'list',
        choices: userChoices,
    })
    .then(response => {
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
    
                default: connection.end();
            }
    });
};

    
    // Function to view all employees
    const viewEmployees = () => {
        console.log('View All Employees');
        
        connection.query('SELECT * FROM employee;',
        function (err, res) {
            if (err) throw err;
            console.table(res);
            startPropmt();
        })
    };
    
    // Function to view all departments
    const viewDepartments = async () => {
        console.log('View All Departments');

        connection.query('SELECT * FROM department;', function (err, res) {
            if (err) throw err;
            console.table(res);
            startPropmt();
        })
    };

    // Function to view all jobs
    const viewJobs = async () => {
        console.log('View All Jobs');

        connection.query('SELECT * FROM job;', function (err, res) {
            if (err) throw err;
            console.table(res);
            startPropmt();
        })
    };
    
    //Function to update an employee
    const updateEmployee = async () => {
        console.log('Update Employee Information');
    };

    // Function to add an employee
    const addEmployee = async () => {
        console.log('Add an Employee');
    };
    
    
    
    // Function to add a department
    const addDepartment = async () => {
        console.log('Add a Department');

        inquirer.prompt([
            {
                name: 'deptName',
                type: 'input',
                message: "What is the New Department's Name?",
            }
        ])
        .then(response => {
            connection.query(
                `INSERT INTO department (department_name) VALUES (?)`, [response.deptName],
                function (err, res) {
                    if (err) throw err;
                    console.log('Department was Added!');
                    startPropmt();
                }
            )
        })
    };
    
    
    // Function to add a job
    const addJob = async () => {
        inquirer.prompt ([
            {
                name: 'jobTitle',
                type: 'input',
                message: 'What is the Job Title?',
            },
            {
                name: 'salary',
                type: 'input',
                message: 'What is the Salary of this Job',
            },
            {
                name: 'deptId',
                type:  'input',
                Message: 'Please Enter the Department ID',
            },
        ])
        .then (response => {
            connection.query(`INSERT INTO job (title, salary, department_id) VALUES (?, ?, ?)`,
            [response.jobTitle, response.salary, response.deptId], 
            function (err, res) {
                if (err) throw (err);
                console.log('Job was Added!');
                startPropmt();
            })
        });

        console.log('Add a Job');
    };



    //         // switch function to handle the user choice, calls appropriate function
    //     try {
    //         let response = await inquirer.prompt({
    //             name: 'action', 
    //             type: 'list',
    //             message: 'Hello! What would you like to do?',
    //             choices: userChoices
    //         }); 
    //         switch (response.action) {
                
    //     } catch (error) {
    //         console.log(error);
    //     }