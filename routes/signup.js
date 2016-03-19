var express = require('express');
var router = express.Router();
var passport = require('passport');
var UserDetails = require('../models/schemas').userDetails;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendfile('views/signup.html');
  //authentication call
});

router.post('/', function(req, res, next){
	console.log("reading the user object");
	console.log(req.body);
	var newUser = new UserDetails(req.body);
	newUser.save(function (err, usr){
		if(err) return console.error(err);
		res.redirect('/users/all');
	});
});

module.exports = router;