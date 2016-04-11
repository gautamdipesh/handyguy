// =====================================
// USER PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
module.exports = function(isLoggedIn, app, passport) {

  app.get('/userprofile', isLoggedIn, function(req, res) {
        
        businessprofile.find({}, function (err, docs){
        	if (err) throw (err);
        	else res.render('userprofile.ejs', {
            businessprofile : req.businessprofile // get the user out of session and pass to template
        	});
        	});
      
    });
};