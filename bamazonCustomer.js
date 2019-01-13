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

//   connect to sql and database
connection.connect(function (err) {
    if (err) { throw err; }
    //  run display function
    displayItems();
});

// create function to display items from colleges example in NUEVA repo
function displayItems() {
    // display items from sql db
    connection.query("SELECT item_id, product_name, department_name, price FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}

// create function to show options (prompts)
function start() {
    inquirer.prompt([{
        name: "itemToBuy",
        type: "input",
        message: "What is the item_id of the product you would like to buy?"
    },
    {
        name: "quantity",
        type: "input",
        message: "How many would you like to buy?"
    }
    ])
    // subtract from databse quantity in stock
    .then(function(answer) {
        let itemBought = answer.itemToBuy;
        let quantityBought = answer.quantity;
        decreaseStock(itemBought, quantityBought)
    });
}
// create function to decrease stock of item chosen
function decreaseStock(itemBought, quantityBought) {
    connection.query("SELECT FROM products", function(err, res){
        if(err) throw err;
        var product;
        for(var i=0; i<res.length; i++) {
            if(res[i].item_id == itemBought) {
                product = res[i]
            }
        }
        // check if enough in stock
        if(product.stock_quantity >= quantityBought) {
            sufficientQuantity(product, itemBought, quantityBought)
            connection.end()
        }
        else {
            console.log(`There were not enough ${itemBought} to complete your order.`)
            connection.end()
         }
    })
};

// function sufficientQuantity();
start();
