//declaring all the basis tools we use for the application
var express = require('express');
var app = express();
var mongoose = require('mongoose/');
var passport = require('passport');
var flash    = require('connect-flash');

// loading express dependencies
var morgan = require('morgan');
var path = require('path');
var favicon = require('serve-favicon');
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

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

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

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, 'public')));
// console.log(path.join(__dirname,'public'));

// app.use('/', routes);
// app.use('/users', users);
// app.use('/login', login);
// app.use('/signup', signup);

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
