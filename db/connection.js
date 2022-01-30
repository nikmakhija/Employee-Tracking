const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "choclate2310",
    database: "employees",
})

