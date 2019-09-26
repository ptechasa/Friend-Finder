var express = require('express');
var app = express();

//dotenv package is hide the credential
require('dotenv').config()

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