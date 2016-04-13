// =====================================
// Business PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
var BusinessProfile = require ('../models/businessprofileschema.js');

module.exports = function(isLoggedIn, app, passport) {

  app.get('/businessprofile', isLoggedIn, function(req, res) {
        res.render('businessprofile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

  app.post('/businessprofile', isLoggedIn, function(req, res){
  	var bs = new BusinessProfile();

  	//setting attributes
  	bs._id = req.users._id;
  	bs.business_name = req.body.business_name;
    bs.business_tel = req.body.business_tel;
    bs.business_email = req.body.business_email;
    bs.business_add1 = req.body.business_add1;
    bs.business_add2 = req.body.business_add2;
    bs.business_city = req.body.business_city;
    bs.business_state = req.body.business_state;
    bs.business_zip = req.body.business_zip;
    bs.business_country = req.body.business_country;
    bs.business_logo = req.body.business_logo;
    bs.save(function(err, bs){
    	if(err) throw err;
    });
    res.redirect('/businessservices');
});
};


