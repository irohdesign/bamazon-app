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
    customerStart();
    connection.end();
})

// showing objects for sale
function showAll() {
    connection.query("SELECT * FROM products", function(err, res){
        console.log(res);
    })
}

function customerStart() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the ID of the product you would like to buy?",
            name: "chosenProduct"
        }
    ]).then(function(response) {
        inquirer.prompt([
            {
                type: "number",
                message: "How many units would you like to order?",
                name: "chosenQuantity"
            }
        ]).then(function(response) {
            console.log(response.chosenQuantity);
            checkStore(response.chosenQuantity);
        })
    });
}

function checkStore(x) {
    console.log(x);
}