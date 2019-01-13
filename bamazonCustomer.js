const mysql = require("mysql");
const inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "14Winonacondo!",
    database: "bamazon_db"
});

//   connect to sql and database and console log if error
connection.connect(function (err) {
    if (err) {throw err;}
    //  run start function
    start();
});