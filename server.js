var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var path = require('path');

//dotenv package is hide the credential
require('dotenv').config()

//automatically make a route for every single file in public folder
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }))
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
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/public/home.html"))
});

app.get('/survey', function (req, res) {
  res.sendFile(path.join(__dirname, "/public/survey.html"))
});

app.get('/api/questions', function (req, res) {
  // console.log(req)
  connection.query('SELECT * FROM questions', function (err, response) {
    if (err) throw err
    console.log(response)
    res.send(response)

  })
})

/
app.listen(3000, function () {
  console.log('listening on 3000');
});
