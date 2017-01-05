var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mysql = require('mysql')
var connection = require('./connection');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use('/api/user', require('./api/user')());

var server = app.listen(8000, function() {
  console.log('Server listening on port ' + server.address().port);
});

