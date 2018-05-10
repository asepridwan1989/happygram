//load environment variables with dotenv
require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
var cors = require('cors')

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB = process.env.DB

// const url = `mongodb://${DB_USER}:${DB_PASSWORD}@ds117540.mlab.com:17540/${DB}`
// const url = `mongodb://userHappygram:1234567890@ds117540.mlab.com:17540/happygram`
// mongoose.connect(url, (err) => {
  // if(!err) console.log('database connected mlab...')
  // else throw new Error(err)
// })

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const uploadRouter = require('./routes/upload');
const imageRouter = require('./routes/image');
// var pictureRouter = require('./routes/picture');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(require('cors')())
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/upload', uploadRouter);
app.use('/contents', require('./routes/mainpage'));
app.use('/images', imageRouter);
// app.use('/pictures', pictureRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
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
