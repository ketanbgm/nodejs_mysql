module.exports = function() {

var router = require('express').Router();

router.get('/test', function(req, res){
	res.send('ok done');
})
	return router;
}