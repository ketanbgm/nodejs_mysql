var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mysql = require('mysql')
/*var connection = require('./connection');
*/
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var connection = mysql.createConnection({
	'host': 'localhost',
	'user': 'root',
	'password':'',
	'database': 'nodemysql'
})

connection.connect(function (err) {
	// body...
	if (err) throw err
		 console.log('You are now connected...');
})

var server = app.listen(7000, function() {
  console.log('Server listening on port ' + server.address().port);
app.use('/api/user', require('./api/user')(connection));

});

