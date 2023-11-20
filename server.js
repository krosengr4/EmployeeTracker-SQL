// Import dependencies
const { response } = require('express');
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
    password: '611854kr', //! <--- Add your MySQL password here
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

// Connect to the database. Give user nice message and call function startPrompt() if connects. 
connection.connect(error => {
    if (error) throw error;
    console.log("-------------------------------------------------\n \n------------ BROOKLYN 99 EMPLOYEE DB ------------\n \n -------------------------------------------------");
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

        inquirer.prompt ([
            {
                name: 'firstName',
                type: 'input',
                message: "What is the New Employee's First Name?",
            },
            {
                name: 'lastName',
                type: 'input',
                message: "What is the New Employee's Last Name?",
            },
            {
                name: 'empJobId',
                type: 'input',
                message: "What is the New Employee's job_id?",
            },
            {
                name: 'arrestsMade',
                type: 'input',
                message: "How many arrests has this person made in their life?",
            }
        ])
        .then(response => {
            connection.query(
                `INSERT INTO employee (first_name, last_name, job_id, arrests_made) VALUES (?, ?, ?, ?)`, [response.firstName, response.lastName, response.empJobId, response.arrestsMade],
                function (err, res) {
                    if (err) throw err;
                    console.log('Employee has been Added!');
                    startPropmt();
                }
            )
        })
    };
    
    
    
    // Function to add a department
    const addDepartment = async () => {
        //// console.log('Add a Department');
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
        });
    };

    // Function to add a job
    const addJob = async () => {
        //// console.log('Add a Job');
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
        
    };

    
    //? Function below is a start to delete a department if we get there.
    // const delDepartment = () => {
    //     inquirer.prompt([
    //         {
    //             name: '',
    //             type: 'input',
    //             message: 'Which Department would you like to remove?',
    //         }
    //     ])
    // } 
    
    
    
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