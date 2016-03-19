var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('user login page');
  //authentication call
});

/* GET users listing. */
router.get('/recover', function(req, res, next) {
  res.send('recover user password');
  //authentication call
});



module.exports = router;
