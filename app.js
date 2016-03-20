var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose/');
mongoose.connect('mongodb://localhost/handyGuyDb');

var routes = require('./routes/index');
var users = require('./routes/users');
var login = require('./routes/login');
var signup = require('./routes/signup');

var app = express();

var UserDetails = require('./models/schemas').userDetails;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(passport.initialize());
app.use(passport.session());

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname,'public'));

app.use('/', routes);
app.use('/users', users);
app.use('/login', login);
app.use('/signup', signup);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


passport.use(new localStrategy(function(email, password, done) {
  process.nextTick(function() {
    console.log("I am here with athe user ");
    console.log(email);
    console.log(password);
    UserDetails.findOne({
      'email' : email,
    }, function(err, user){
      if(err){
        return done(err);
      }
      if(!user){
        return done(null, false);
      }
      if(user.password != password){
        return done(null, false);
      }
      return done(null, user);
    });
  });
}));

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
