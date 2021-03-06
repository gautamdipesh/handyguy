// =====================================
// Change Password =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
module.exports = function(isLoggedIn, app, passport) {

  app.get('/changepassword', isLoggedIn, function(req, res) {
        res.render('changepassword.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
};