
require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./index');
var usersRouter = require('./routes/users');

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.once('open', () => {
  console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
  console.error(`
  MongoDB connection error!!!
  ${error}`)
  process.exit(-1)
})
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Registering controllers
const hostController = require('./controllers/hostController')
app.use('/hosts', hostController)

const partyController = require('./controllers/partyController')
app.use('/hosts/:hostID/party', partyController)

const partyGoerController = require('.controllers/partyGoerController')
app.use('/hosts/:hostID/party/:partyID')

app.use('/', index);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
