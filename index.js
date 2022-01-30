const { prompt } = require("inquirer");
const db = require("./db");
const logo = require("asciiart-logo");
require("console.table");
init()
// Load main prompts with this code
function init() {
    const logoText = logo({ name: "Employee Manager"}).render();
    console.log(logoText);
    loadMainPrompts();
}

function loadMainPrompts() {

} 
// Call next function depending on user choice (google switch cases)

switch (testVar.indexOf( true )) {
    case 1:
      console.log('Im in the first group!');
      break;
    case 2:
      console.log('Im in the second group!');
      break;
    case 3:
      console.log('Im in the third group!');
      break;
  }

// Function to view all employees

router.use(require('./partyRoutes'));

// View all employees by department (map) (prompt/list of department choices)

router.use(require('./partyRoutes'));

// View all employees by manager (map) (prompt/list of managers to choose from)

router.use(require('./candidateRoutes'));

// Function to delete an employee (map) (prompt/list of employees)

router.use(require('./voterRoutes'));

// Updates an employee role (map) (prompt/list of employees)

router.use(require('./candidateRoutes'));

// Updates an employee manager (map) (prompt/list of employees)

router.use(require('./candidateRoutes'));

// View all roles

router.use(require('./partyRoutes'));

// Add a role (map) (prompt of user input)

router.use(require('./candidateRoutes'));

// Delete a role (prompt/list of roles)

router.use(require('./voterRoutes'));

// View all departments

router.use(require('./partyRoutes'));

// Added department (map) (prompt of user input and deleted department)

router.use(require('./partyRoutes'));

// View all departments and their budget

router.use(require('./partyRoutes'));

// Add an employee (prompts for all employee fields (first name, last name, role, manager))

router.use(require('./candidateRoutes'));

// Function to exit the application

router.use(require('./voterRoutes'));