var express = require('express');
var router = express.Router();
var UserDetails = require('../models/schemas').userDetails;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/all', function(req, res, next){
	var users  = [];
	UserDetails.find(function(err, usrs){
		if(err) return console.error(err);
		res.send(usrs);
	});
	
});


module.exports = router;
