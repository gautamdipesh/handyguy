var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendfile('views/login.html');
  //authentication call
});

router.post('/',
	passport.authenticate('local', {
		successRedirect : '/loginSuccess',
		failureRedirect : '/loginFailure'
	})
);

router.get('/loginFailure', function (req, res, next){
	res.send('Failed to authenticate');
});

router.get('/loginSuccess', function (req, res, next){
	res.send('Succcess to authenticate');
});

/* GET users listing. */
router.get('/recover', function(req, res, next) {
  res.send('recover user password');
  //authentication call
});



module.exports = router;
