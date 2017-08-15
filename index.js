const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const request = require('request');

var port = 3000;

app.use(express.static(__dirname + '/'));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS');
    res.header("Access-Control-Allow-Credentials",true);
    next();
});

app.use(jsonParser)

app.listen(port,(req, res) => {
  console.log('React App ready for development');
});
