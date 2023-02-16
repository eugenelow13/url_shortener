//include the relevant modules such as mysql, express, shortid
const express = require("express");
const shortid = require("shortid");
const mysql = require("mysql");
const app = express();


//specify the port number to listen on port 5000 
app.listen(5000);

//set the view engine to ejs
app.set("view engine", "ejs");


//set the static files location to public
app.use(express.static(__dirname + "/public"));
//set the urlencoded to true
app.use(express.urlencoded({ extended: false }));

//set the home route to render the home.ejs file
app.get("/", (req, res) => {
    res.render("home.ejs");
});

//create a connection to the database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "url_shortener"
});

//connect to the database
db.connect(err => {
    if(err) {
        console.log("Error connecting to DB");
        return;
    }
    console.log("Connected to DB");
});
//create a table in the database
app.post("/shorturl", (req, res) => {
    const fullUrl = req.body.fullUrl;
    if (!fullUrl) {
        return res.sendStatus(404);
    }
    //check if the url already exists in the database
    db.query('SELECT * FROM `url` WHERE `fullUrl` = ?', [fullUrl], (error, results) => {
        //if there is an error, log it
        if (error) {
            console.log("we got error");
            return;
        }
        //if the url does not exist in the database, create a new short url
        if (results.length === 0) {
            const short = shortid.generate();
            const url = { fullUrl: req.body.fullUrl, shortUrl: short, counts: 1 };
            db.query('INSERT INTO `url` SET ?', url, (err, res) => {
                if (err) {
                    console.log("Error creating table");
                    return;
                }
            });
            //render the result.ejs file with the short url and the number of times it has been used
            res.render("result.ejs", { shortUrl: short, times: 1 });

            
        } 
        //if the url already exists in the database, get the short url and the number of times it has been used
        else {
            const _short = results[0].shortUrl;
            const _counts = results[0].counts;
            //update the number of times the short url has been used
            db.query('UPDATE `url` SET `counts` = ? WHERE `shortUrl` = ?', [_counts + 1, _short], (err, res) => {
                if (err) {
                    console.log("Error updating table");
                    return;
                }
            });
            //render the result.ejs file with the short url and the number of times it has been used
            res.render("result.ejs", { shortUrl: _short, times: _counts + 1 });
        }
    });
});
//get the short url and redirect to the full url
app.get("/:shortUrl", (req, res) => {
    //check if the short url exists in the database
    db.query('SELECT * FROM `url` WHERE `shortUrl` = ?', [req.params.shortUrl], (error, results) => {
        //if there is an error, log it
        if (error) {
            return res.sendStatus(404);
        }
        //if the short url does not exist in the database, render the error.ejs file
        if (results.length === 0) {
            res.render("error.ejs");
        } else {
            //if the short url exists in the database, redirect to the full url
            res.redirect(results[0].fullUrl);
        }
    });
});
