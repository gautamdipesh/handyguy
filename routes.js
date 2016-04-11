module.exports = function(app, passport) {

    // =====================================
    // all my routes here ========
    // =====================================
    var routes = [
        'index',
        'login',
        'profile', 
        'dashboard', 
        'businessprofile',
        'businessservices', 
        'neworder',
        'orderdetails', 
        'userprofile', 
        'myorders',
        'changepassword',
        'receipt',
    ];

    routes.forEach(function(value, key){
        require('./routes/'.concat(value))(isLoggedIn, app, passport);
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}