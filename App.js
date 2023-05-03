//Mysql and NodeJS Integration
//Run this file to start the web server!

var express = require('express');
var app = express();
var mysql = require('mysql');
const path = require('path');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false })); //parses URL-encoded data (for POST method)
app.set("view engine", "ejs");

//Database connection (MySQL)
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'kaboom_pizza' //Database name
});
//Check connection
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get("/", function(req, res) {
    res.send("You are connected to the web app! The homepage can be found at /HomePage.html");
});

app.listen(8080, function() {
    console.log('App listening on port 8080!');
});

//EJS routes
//Display all orders route
app.get("/display", function(req, res) {
    var q = "select * from orders";
    con.query(q, function(error, results) {
        if (error) throw error;
        res.render("DisplayAll", { data: results });
    });
});

//Track by orderID route
app.post("/track", function(req, res) {
    var num = req.body.order_number;
    var q = "select * from orders where order_id = ?";
    con.query(q, [num], function(error, results) {
        if (error) throw error;
        else {
            if (results.length == 0) //search unsuccessful
            //res.send("No order found with order ID: " + num);
                res.render("TrackFail")
            else //search successful 
                res.render("TrackSuccess", { data: results[0] });
        }
    });
});

//Track by email route
app.post("/trackEmail", function(req, res) {
    var add = req.body.email_add;
    var q = "select * from orders where email = ?";
    con.query(q, [add], function(error, results) {
        if (error) throw error;
        else {
            if (results.length == 0) //search unsuccessful
                res.render("TrackFail")
            else //search successful 
                res.render("TrackSuccess", { data: results[0] });
        }
    });
});

//Track post route
app.post("/search", function(req, res) {
    var num = req.body.order_number;
    var q = "select * from orders where order_id = ?";
    con.query(q, [num], function(error, results) {
        if (error) throw error;
        else {
            if (results.length == 0) //search unsuccessful
            //res.send("No order found with order ID: " + num);
                res.render("OrderError")
            else //search successful 
                res.render("SearchSuccess", { data: results });
        }
    });
});

//For accessing the track order page
app.get("/track", function(req, res) {
    res.render("Track");
});

//Cart ordering page
app.get("/Cart", function(req, res) {
    res.render("Cart"); //SHOW SEARCH MENU
});

//Order submission (insertion into database)
app.post("/order", function(req, res) {
    let Toppings = "" //Store any toppings into this string
    if (req.body.item1 != undefined) {
        Toppings = Toppings + "Parmesan "
    }
    if (req.body.item2 != undefined) {
        Toppings = Toppings + "Bacon "
    }
    if (req.body.item3 != undefined) {
        Toppings = Toppings + "Mushroom"
    }

    let Items = req.body.cartText //Items (formatted into a strong so it can be stored in database)
    let Address = "None" //None is default for pickup, will be replaced if user chooses delivery

    if (req.body.option == "Delivery") {
        Address = req.body.address //Replace with user input
    }
    let Name = req.body.name
    let Phone = req.body.number
    let Email = req.body.email
    let Date = req.body.date
    let Time = req.body.time
    let Method = req.body.option

    var order_info = { name: Name, phone_number: Phone, email: Email, toppings: Toppings, items: Items, method: Method, address: Address, date: Date, time: Time }; //Order
    var q = "insert into orders set ?";
    con.query(q, order_info, function(error, results) {
        if (error) throw error;
        console.log(results);
        res.render("OrderSuccess", { data: results }); //Show order success page and tracking details
    });
});

//Order deletion route
app.post("/delete", function(req, res) {
    let OrderID = req.body.deleteID
    console.log(OrderID)
    var q = "delete from orders where order_id= ?";
    con.query(q, OrderID, function(err, results, fields) {
        if (err) throw err;
        console.log(results);
        if (results.affectedRows == 0) {
            res.render("OrderError");
        } else
            res.render("DeleteSuccess", { data: results });
    });
});

//Order update route
app.post("/updateStatus", function(req, res) {
    let OrderID = req.body.orderID
    let status = req.body.option
    var q = "update orders set status= ? where order_id= ?";
    con.query(q, [status, OrderID], function(err, results, fields) {
        if (err) throw err;
        //res.redirect("/OrderSuccess"); //redirect to root page 
        console.log(results);
        if (results.affectedRows == 0) {
            res.render("OrderError");
        } else
            res.render("UpdateSucess");
    });
});