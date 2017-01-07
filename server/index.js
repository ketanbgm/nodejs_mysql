var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mysql = require('mysql')
    /*var connection = require('./connection');
     */
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


var connection = mysql.createConnection({
    'host': 'localhost',
    'user': 'root',
    'password': '',
    'database': 'nodemysql'
})

connection.connect(function(err) {
    // body...
    if (err) throw err
    console.log('You are now connected...');
})

app.use('/api/user/index', function(req, res, next) {
    // invoked for any request starting with /users
    var username = req.body.username;
    console.log(username);
    if (username) {
        next();
    }
    else{
    	res.send("Invalid username")
    }
});




var server = app.listen(7000, function() {
    console.log('Server listening on port ' + server.address().port);
    app.use('/api/user/index', require('./api/user/index')(connection));
    app.use('/api/user/login_reg', require('./api/user/login_reg')(connection));
});
