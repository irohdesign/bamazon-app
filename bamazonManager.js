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
        },
        {
            type: "number",
            message: "How many units would you like to order?",
            name: "chosenQuantity"
        }
    
        ]).then(function(response) {
            checkStock(response.chosenProduct, response.chosenQuantity);
        });
    }



 function checkStock(chosenProduct, chosenQuantity) {   
    var query = connection.query("SELECT stock_quantity FROM products WHERE product_name = 'fish slippers'", function(err, res) {
        console.log(res);
    
        console.log(chosenProduct + chosenQuantity);
    });

    console.log(query.sql);
}