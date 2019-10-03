var express = require('express');
var app = express();
var path = require('path')

//dotenv package is hide the credential
require('dotenv').config()

//making static assets
app.use(express.static("public"));

//mysql package
var mysql = require('mysql');

//Establishing connections
// var connection = mysql.createConnection({
//     host: process.env.host,
//     user: process.env.user,
//     password: process.env.password,
//     database: process.env.database
// });

// connection.connect();

// connection.connect(function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "/public/home.html"))
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, "/public/survey.html"))
});

app.get('/api/friends', function (req, res) {
  res.send('blah blah')
});

app.post('/api/friends', function (req, res){
  console.log('hi')
  res.send('hi')
})

app.listen(3000, function(){
  console.log('listening on 3000');
});
//   connection.end();