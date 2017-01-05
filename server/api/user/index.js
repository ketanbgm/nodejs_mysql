module.exports = function(connection) {

var router = require('express').Router();

router.get('/test', function(req, res){
	res.send('ok done');
})

router.post('/login', function(req, res){
	var user_name = req.body.username;
	var password =  req.body.password;
	console.log(password)
	   connection.query('SELECT * FROM users where username = ? and password = ?', [user_name, password], function(err, rows) {
	   	 if (err) {
               throw err;
     		}
     		else {
     			res.send(rows)
     		}
	   })
})
	return router;
}