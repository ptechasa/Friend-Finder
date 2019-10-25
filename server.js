var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

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
var connection = mysql.createConnection(process.env.JAWSDB_URL ||
  {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  // port: 3306
});

connection.connect();

//Use GET method route to main page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/public/home.html"))
});

// Use GET method route to survey page
// app.get('/survey', function (req, res) {
//   res.sendFile(path.join(__dirname, "/public/survey.html"))
// });

app.get('/api/questions', function (req, res) {
  // console.log(req)
  connection.query('SELECT * FROM questions', function (err, response) {
    if (err) throw err
    console.log(response)
    res.send(response)

  })
})

app.get('/api/friends', function (req, res) {
  // console.log(req)
  connection.query('SELECT * FROM friends', function (err, response) {
    if (err) throw err
    console.log(response)
    res.send(response)

  })
})

app.post('/api/insert', function (req, res) {
	connection.query('INSERT into friends (name, picture_link) VALUES (?, ?)', [req.body.first_name1, req.body.picture1], function (error, results, fields) {
		if (error) res.send(error)
		else {
			//results.insertId
			var jsonBody = JSON.parse(req.body.answer);
			for (var i = 0; i < 10; i++) {
				connection.query('INSERT into scores (question_id, friend_id, score) VALUES (?, ?, ?)', [i + 1, results.insertId, jsonBody[i]], function (error, results, fields) {
					if (error) { console.log(error) }
				});
			}
			res.send('/friend.html?id=' + results.insertId)
		}
	});
});

app.listen(port, function () {
  console.log('listening on 3000');
});
