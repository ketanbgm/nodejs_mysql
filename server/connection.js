var mysql = require('mysql');

var connection = mysql.createConnection({
	'host': 'localhost',
	'user': 'root',
	'password':'',
	'databse': 'nodemysql'
})

connection.connect(function (err) {
	// body...
	if (err) throw err
		 console.log('You are now connected...');
})