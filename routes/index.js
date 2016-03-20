
module.exports = function(isLoggedIn, app, passport) {

  /* GET home page. */
  app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
  });

};