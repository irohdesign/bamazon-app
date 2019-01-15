// dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection( {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function(err) {
    console.log("Connected!");
    connection.end();
})

// showing objects for sale
connection.query("SELECT * FROM products", function(err, res){
    console.log(res);
});