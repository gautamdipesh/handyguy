// =====================================
// PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
var BusinessServices = require ('../models/businessservicesschema.js');

module.exports = function(isLoggedIn, app, passport) {

  app.get('/businessservices', isLoggedIn, function(req, res) {
        res.render('businessservices.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
   app.post('/saveServices', isLoggedIn, function(req, res) {
   	console.log(req.body.data);
   	req.body.data.forEach(function (value, key){
   		var ss = new BusinessServices();
   		ss.user_id = req.user._id;
  		ss.serviceName = value.name;
    	ss.serviceAmount = value.amount;
    	ss.save(function(err, bs){
    		if(err){
    			res.status(400).send('Fail to save');
    		}
    	});
   	});
   	res.status(200).send('Success');
   	res.redirect('/dashboard');
   });
};