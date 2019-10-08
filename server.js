var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var path = require('path');

//dotenv package is hide the credential
require('dotenv').config()

//automatically make a route for every single file in public folder
app.use(express.static("public"));

//integrate body-parser with express

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//mysql package
var mysql = require('mysql');

//Establishing connections
var connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

connection.connect();

//GET method route
app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "/public/home.html"))
});

app.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, "/public/survey.html"))
});

app.listen(3000, function () {
  console.log('listening on 3000');
});

// var port = process.env.PORT || 3000;
// app.listen(port, () => console.log('Listening on port ${port}...'));
