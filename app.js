//declaring all the basis tools we use for the application
var express = require('express');
var app = express();
var mongoose = require('mongoose/');
var passport = require('passport');
var flash    = require('connect-flash');

// loading express dependencies
var morgan = require('morgan');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


//configuring database
var configDB = require('./config/database');
mongoose.connect(configDB.url);

//setting up passport for the authentication
require('./config/passport')(passport);

//set up our express applicaiton
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());


//set up ejs for the view engine
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' }));
// app.use(session({ 
//   secret: 'ilovescotchscotchyscotchscotch',
//   proxy: true,
//   resave: true,
//   saveUninitialized: true }
// ));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

app.use('/public',express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname,'public'));

require('./routes')(app, passport);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
