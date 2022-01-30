const connection = require("./connection");

// Keep a reference to the class if we need it later (class constructor)

const Reader = require('./Reader');

// Find all employees, join with roles, salaries, departments, and managers

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Find all employees except the given employee id

router.use(require('./candidateRoutes'));

// Create a new employee

router.use(require('./voterRoutes'));

// Remove an employee with a given id

router.use(require('./voteRoutes'));

// Update a given employees role

router.use(require('./candidateRoutes'));

// Update the given employees manager

router.use(require('./candidateRoutes'));

// Find all roles join with departments to display the department name

router.use(require('./candidateRoutes'));

// Create a new role

router.use(require('./partyRoutes'));

// Remove a role from the database

router.use(require('./voterRoutes'));

// Find all departments

router.use(require('./partyRoutes'));

// Find all departments, join with employees and roles and some up utilise department budget

router.use(require('./partyRoutes'));

// Create a new department

router.use(require('./voterRoutes'));

// Remove a department

router.use(require('./voterRoutes'));

// Find all employees in a given department, join with roles to display role titles

router.use(require('./partyRoutes'));

// Find all employees by manager, join with departments and roles to display titles and department names

router.use(require('./partyRoutes'));

module.exports = new DB(connection)
